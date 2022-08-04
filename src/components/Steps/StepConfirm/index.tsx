import { List, ListItemText, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { httpsCallable } from 'firebase/functions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NextButton } from 'src/components/NextButton'
import { Preloader } from 'src/components/Preloader/Preloader'
import { Title } from 'src/components/Title'
import { functions } from 'src/firebase-config'
import { IFilm, IUserCredentials, OrderTicketsData, Seat } from 'src/types'
import useStyles from './styles'

type StepConfirmProps = {
  selectedSeats: Seat[]
  film: IFilm
  formState: IUserCredentials
}

export const StepConfirm: React.FC<StepConfirmProps> = ({
  selectedSeats,
  film,
  formState,
}) => {
  const styles = useStyles()
  const navigate = useNavigate()

  const { firstName, lastName, email } = formState
  const [isOrderSubmitting, setIsOrderSubmitting] = useState<boolean>(false)
  const handleClick = async (id: string) => {
    const orderTickets = httpsCallable(functions, 'orderTickets')
    const orderData: OrderTicketsData = {
      filmId: id,
      seatIds: selectedSeats.map((seat) => seat.id),
      userCredentials: {
        firstName,
        lastName,
        email,
      },
    }
    try {
      setIsOrderSubmitting(true)
      await orderTickets(orderData)
      navigate(`/order/${id}/success`)
    } catch (err) {
      console.error(err)
      navigate(`/order/${id}/error`)
    } finally {
      setIsOrderSubmitting(false)
    }
  }
  return (
    <Box className={styles.contentWrapper}>
      {isOrderSubmitting && <Preloader />}
      <Title>Confirmation of order for film</Title>
      <Typography variant="h2" component="h2" className={styles.title}>
        "{film.title}"
      </Typography>
      <Box className={styles.paperWrapper}>
        <Paper className={styles.paperContainer}>
          <Box className={styles.infoWrapper}>
            <Typography
              variant="h5"
              component="p"
              className={styles.textTypography}
            >
              Name: {`${firstName} ${lastName}`}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={styles.textTypography}
            >
              Receiving email: {email}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={styles.textTypography}
            >
              Taken seats:
            </Typography>
            <List className={styles.ticketList}>
              {selectedSeats.map((seat) => (
                <ListItemText key={seat.id} className={styles.listItem}>
                  Row {seat.row}, seat {seat.column}
                </ListItemText>
              ))}
            </List>
          </Box>
        </Paper>
      </Box>
      <NextButton
        type="button"
        onClick={() => handleClick(film.id)}
        text="Confirm"
        disabled={isOrderSubmitting}
      />
    </Box>
  )
}
