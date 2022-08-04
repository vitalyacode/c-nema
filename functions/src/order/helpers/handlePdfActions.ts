import { getStorage } from 'firebase-admin/storage'
// import * as functions from 'firebase-functions'
import { PdfData } from '../../../types'
import { cNema, PDFBucket } from '../../utils/constants'
import { createPdf } from './createPdf'

const nodemailer = require('nodemailer')
const storage = getStorage()

export const handlePdfActions = async ({
  film,
  takenSeats,
  userCredentials,
}: PdfData) => {
  const { email, firstName, lastName } = userCredentials
  const filename = `ticket_${film.title}_${Date.now()}.pdf`
  const bucket = storage.bucket(PDFBucket)
  const file = bucket.file(filename)
  const bucketFileStream = file.createWriteStream()

  const doc = createPdf({ film, takenSeats })
  doc.pipe(bucketFileStream)

  doc.end()

  bucketFileStream.on('finish', async () => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    })
    const isManyTickets = takenSeats.length > 1
    const ticketWord = `ticket${isManyTickets ? 's' : ''}`

    const mailOptions = {
      from: `${cNema} <vitalyacode@gmail.com>`,
      to: email,
      subject: 'C-nema tickets',
      text: `Hello, ${firstName} ${lastName}. You have ordered ${ticketWord} to the film ${
        film.title
      }. Your ${ticketWord} ${isManyTickets ? 'are' : 'is'} attached below`,
      attachments: [
        {
          filename,
          content: file.createReadStream(),
        },
      ],
    }
    await transporter.sendMail(mailOptions)
  })

  bucketFileStream.on('error', function (err) {
    console.log("error in  bucketFileStream.on('error'")
    console.error(err)
  })
}
