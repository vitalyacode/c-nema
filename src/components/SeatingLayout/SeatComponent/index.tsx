import { Box } from '@mui/system'
import clsx from 'clsx'
import { ICommonSeatProperties, Seat } from 'src/types'
import useStyles from './styles'

interface SeatComponentProps extends ICommonSeatProperties {
  seat: Seat
}

export const SeatComponent: React.FC<SeatComponentProps> = ({
  seat,
  selectedSeats,
  handleSelect,
}) => {
  const styles = useStyles()
  const { isFree } = seat

  const isSelected = selectedSeats.includes(seat)
  const iconClasses = clsx({
    [styles.seatIcon]: true,
    [styles.vacant]: isFree,
    [styles.taken]: !isFree,
    [styles.selected]: isSelected && isFree,
  })
  const boxClasses = clsx({
    [styles.seatBox]: true,
    [styles.boxEnabled]: isFree,
    [styles.boxDisabled]: !isFree,
  })

  const handleSelectFree = (seatArg: Seat) => isFree && handleSelect(seatArg)

  return (
    <Box className={boxClasses} onClick={() => handleSelectFree(seat)}>
      <Box className={iconClasses}></Box>
    </Box>
  )
}
