import { Box } from '@mui/system'
import { ICommonSeatProperties, Seat } from 'src/types'
import { SeatComponent } from '../../SeatComponent'
import useRowStyles from '../rowStyles'

interface RowCommonProps extends ICommonSeatProperties {
  seatRow: Seat[]
}

export const RowCommon: React.FC<RowCommonProps> = ({
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
