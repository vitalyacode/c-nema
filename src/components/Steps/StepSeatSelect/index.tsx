import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import _ from 'lodash'
import { useContext } from 'react'
import { NextButton } from 'src/components/NextButton'
import { SeatingLayout } from 'src/components/SeatingLayout'
import { IFilm, SeatingLayoutType } from 'src/types'
import { SteppingContext } from 'src/utils/SteppingContext'
import useStyles from './styles'

type SeatingLayoutProps = SeatingLayoutType & { film: IFilm }

export const StepSeatSelect: React.FC<SeatingLayoutProps> = ({
  id,
  selectedSeats,
  setSelectedSeats,
  film,
}) => {
  const styles = useStyles()
  const { incrementStep } = useContext(SteppingContext)
  return (
    <>
      <Box>
        <Typography variant="h2" component="h2" className={styles.title}>
          {film.title}
        </Typography>
        <SeatingLayout
          id={id}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
        <NextButton
          type="button"
          onClick={() => incrementStep()}
          disabled={_.isEmpty(selectedSeats)}
        />
      </Box>
    </>
  )
}
