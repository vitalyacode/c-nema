import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useStyles from './styles'
import { Link as DOMLink } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error'
import DoneIcon from '@mui/icons-material/Done'

export const OrderStatusPage: React.FC = () => {
  const { status } = useParams()
  const navigate = useNavigate()
  const styles = useStyles()
  const [text, setText] = useState<string>('')

  useEffect(() => {
    if (status) {
      if (status === 'success') {
        setText(
          'Tickets have been successfully ordered and sent to your email address'
        )
      } else if (status === 'error') {
        setText('An error occured when buying tickets')
      } else {
        navigate('/')
      }
    }
  }, [status, navigate])

  return (
    <Box className={styles.textContainer}>
      <Typography component="p" variant="h4">
        {text}
      </Typography>
      {status === 'success' ? (
        <DoneIcon className={styles.icon} />
      ) : (
        <ErrorIcon className={styles.icon} />
      )}
      <Link component={DOMLink} to={'/'} underline="hover">
        <Typography component="p" variant="h3">
          Return to homepage
        </Typography>
      </Link>
    </Box>
  )
}
