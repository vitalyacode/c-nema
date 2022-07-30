import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { filmsService } from 'src/api/filmsService'
import { PagePreloader } from 'src/components/Preloader/PagePreloader'
import { StepConfirm } from 'src/components/Steps/StepConfirm'
import { StepCredentials } from 'src/components/Steps/StepCredentials'
import { StepSeatSelect } from 'src/components/Steps/StepSeatSelect'
import { IFilm, Seat, IUserCredentials } from 'src/types'
import { UserCredentialsDefaults } from 'src/utils/defaultValues'
import { SteppingContext } from 'src/utils/SteppingContext'
import useStyles from './styles'

const OrderPage: React.FC = () => {
  const params = useParams()
  const styles = useStyles()
  const id = params.id as string
  const [film, setFilm] = useState<IFilm>()
  const [filmNotFound, setFilmNotFound] = useState<boolean>(false)
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
  const [step, setStep] = useState<number>(1)
  const [formState, setFormState] = useState<IUserCredentials>(
    UserCredentialsDefaults
  )

  useEffect(() => {
    const fetchFilmAndImages = async () => {
      try {
        const resolvedPromises = await Promise.all([filmsService.getById(id)])
        if (!resolvedPromises[0]) throw new Error('Could not find film')
        setFilm(resolvedPromises[0])
      } catch (err) {
        setFilmNotFound(true)
      }
    }
    id && fetchFilmAndImages()
  }, [id])

  const incrementStep = () => {
    setStep((prev) => prev + 1)
  }

  const stepWatcher = (param: number) => {
    switch (param) {
      case 1:
        return <StepCredentials setFormState={setFormState} />

      case 2:
        return film ? (
          <StepSeatSelect
            id={id}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            film={film}
          />
        ) : (
          <PagePreloader />
        )
      case 3:
        return (
          film && (
            <StepConfirm
              selectedSeats={selectedSeats}
              film={film}
              formState={formState}
            />
          )
        )
      default:
        return <Box>Unknown step</Box>
    }
  }

  if (filmNotFound) {
    return <div>Something went wrong</div>
  }

  return (
    <>
      <SteppingContext.Provider value={{ step, incrementStep }}>
        <Box className={styles.stepContainer}>{stepWatcher(step)}</Box>
      </SteppingContext.Provider>
    </>
  )
}

export default OrderPage
