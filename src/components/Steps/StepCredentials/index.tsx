// import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { OrderTicketsUserForm } from 'src/components/Forms/OrderTicketsUserForm'
import { UserCredentialsDefaults } from 'src/utils/defaultValues'
// import { SteppingContext } from 'src/utils/SteppingContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { userSchema } from 'src/.yup/userSchema'
import { Title } from 'src/components/Title'

export interface StepCredentialsProps {
  setFormState: CallableFunction
}

export const StepCredentials: React.FC<StepCredentialsProps> = ({
  setFormState,
}) => {
  // const { step } = useContext(SteppingContext)
  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: UserCredentialsDefaults,
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  })
  const onSubmit = () => {
    console.log(getValues())
    setFormState(getValues())
  }
  return (
    <>
      <Title>Enter your info</Title>
      <OrderTicketsUserForm
        control={control}
        onSubmit={onSubmit}
        errors={errors}
        isValid={isValid}
      />
    </>
  )
}
