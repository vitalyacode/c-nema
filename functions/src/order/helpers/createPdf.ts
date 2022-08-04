import * as PDFDocument from 'pdfkit'
import { PdfData } from '../../../types'
import { pdfDimensions } from '../../utils/constants'

export const createPdf = ({
  film,
  takenSeats,
}: Omit<PdfData, 'userCredentials'>) => {
  const doc = new PDFDocument({
    size: [pdfDimensions.width, pdfDimensions.height],
    margins: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },
    autoFirstPage: false,
  })
  doc.lineGap(5).font('Helvetica-Bold')

  takenSeats.forEach((seat) => {
    doc.addPage()
    doc.fontSize(12).text('C-nema', {
      align: 'center',
    })
    doc.fontSize(16).text('Tickets to the film', {
      align: 'center',
    })
    doc.fontSize(24).text(film.title, {
      align: 'center',
    })
    doc.fontSize(20)
    doc.moveDown()
    doc.fontSize(30).text(`Row ${seat.row} seat ${seat.column}`, {
      align: 'center',
    })
    doc
      .lineWidth(10)
      .moveTo(0, 0)
      .rect(0, 0, pdfDimensions.width, pdfDimensions.height)
      .stroke()
  })
  return doc
}
