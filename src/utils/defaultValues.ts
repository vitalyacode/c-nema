import { IUserCredentials } from 'src/types'

export const SteppingContextDefaults = {
  step: 1,
  incrementStep: () => {},
}

export const UserCredentialsDefaults: IUserCredentials = {
  firstName: '',
  lastName: '',
  email: '',
}
