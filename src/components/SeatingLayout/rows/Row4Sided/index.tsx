import { Box } from '@mui/system'
import { ICommonSeatProperties, Seat } from 'src/types'
import { SeatComponent } from '../../SeatComponent'
import useRowStyles from '../rowStyles'

interface Row4SidedProps extends ICommonSeatProperties {
  seatRow: Seat[]
}

export const Row4Sided: React.FC<Row4SidedProps> = ({
  seatRow,
  ...restProps
}) => {
  const rowStyles = useRowStyles()
  return (
    <Box className={rowStyles.row}>
      {seatRow.map((seat) => (
        <SeatComponent seat={seat} {...restProps} key={seat.id} />
      ))}
    </Box>
  )
}
