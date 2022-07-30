import { Grid, Input, Typography } from '@mui/material'
import { Box } from '@mui/system'
import _ from 'lodash'
import { useContext } from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldErrorsImpl,
} from 'react-hook-form'
import { NextButton } from 'src/components/NextButton'
import { IUserCredentials } from 'src/types'
import { SteppingContext } from 'src/utils/SteppingContext'
import useStyles from './styles'

type OrderTicketsUserFormProps = {
  control: Control<IUserCredentials>
  onSubmit: CallableFunction
  errors: FieldErrorsImpl
}

export const OrderTicketsUserForm: React.FC<OrderTicketsUserFormProps> = ({
  control,
  onSubmit,
  errors,
}) => {
  const { incrementStep } = useContext(SteppingContext)
  const styles = useStyles()

  return (
    <>
      <form>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <Box className={styles.errorInputContainer}>
              <Typography className={styles.errorMessage}>
                {errors.firstName?.message}
              </Typography>
              <Controller
                name={'firstName'}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={'First name'}
                    className={styles.input}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <Box className={styles.errorInputContainer}>
              <Typography className={styles.errorMessage}>
                {errors.lastName?.message}
              </Typography>
              <Controller
                name={'lastName'}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={'Last name'}
                    className={styles.input}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <Box className={styles.errorInputContainer}>
              <Typography className={styles.errorMessage}>
                {errors.email?.message}
              </Typography>
              <Controller
                name={'email'}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={'Email'}
                    className={styles.input}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
      <NextButton
        type="submit"
        onClick={() => incrementStep()}
        onSubmit={onSubmit}
        disabled={!_.isEmpty(errors)}
      />
    </>
  )
}
