import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { httpsCallable } from 'firebase/functions'
import { useCallback, useEffect, useState } from 'react'
import { ordersService } from 'src/api/ordersService'
import { functions } from 'src/firebase-config'
import { LayoutObject, OrderTicketsData, Seat } from 'src/types'
import { Row4Sided } from './rows/Row4Sided'
import { RowCommon } from './rows/RowCommon'
import useStyles from './styles'

type SeatingLayoutProps = {
  id: string
}

export const SeatingLayout: React.FC<SeatingLayoutProps> = ({ id }) => {
  const [seatRows, setSeatRows] = useState<LayoutObject>({})
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
  const styles = useStyles()

  const fetchSeats = useCallback(async () => {
    try {
      const resolvedPromises = await ordersService.getSeatsById(id)
      if (!resolvedPromises) throw new Error('Could not find seats to film')
      setSeatRows(resolvedPromises)
    } catch (err) {
      console.error(err)
    }
  }, [id])

  const handleSelect = (clickedSeat: Seat) => {
    selectedSeats.includes(clickedSeat)
      ? setSelectedSeats(
          selectedSeats.filter((item) => item.id !== clickedSeat.id)
        )
      : setSelectedSeats(selectedSeats.concat(clickedSeat))
  }

  const handleOrderTickets = async () => {
    const orderTickets = httpsCallable(functions, 'orderTickets')
    const orderData: OrderTicketsData = {
      filmId: id,
      seatIds: selectedSeats.map((seat) => seat.id),
    }
    try {
      await orderTickets(orderData)
      await fetchSeats()
      setSelectedSeats([])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    id && fetchSeats()
  }, [id, fetchSeats])

  return (
    <>
      <Box className={styles.contentWrapper}>
        <Box className={styles.layoutWrapper}>
          {Object.keys(seatRows).map((seatRowKey) => {
            const index = parseInt(seatRowKey)
            const row = seatRows[index]
            const rowProps = {
              seatRow: row,
              selectedSeats,
              handleSelect,
              key: `${index}row`,
            }
            if (index >= 0 && index <= 3) return <RowCommon {...rowProps} />
            if (index >= 4 && index <= 5) return <Row4Sided {...rowProps} />
            console.error('Too many rows provided')
            return null
          })}
        </Box>
        <Box className={styles.selectedSeatsAndButtonContainer}>
          <Button
            variant="contained"
            sx={{ fontSize: '20px' }}
            disabled={!selectedSeats.length}
            onClick={() => handleOrderTickets()}
          >
            Order tickets
          </Button>
          <Box className={styles.selectedSeatsContainer}>
            <Typography component="h4" variant="h4">
              Selected seats
            </Typography>
            {selectedSeats.map((seat) => (
              <Typography
                key={`${seat.row}${seat.column}`}
              >{`row ${seat.row} column ${seat.column}`}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
