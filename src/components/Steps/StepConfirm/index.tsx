import { Box } from '@mui/system'
import { IFilm, IUserCredentials, Seat } from 'src/types'

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
  return <Box>{selectedSeats.map((seat) => seat.id)}</Box>
}
