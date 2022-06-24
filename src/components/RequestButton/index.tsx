import { Button } from '@mui/material'
import * as React from 'react'

type RequestButtonProps = {
  fn: CallableFunction
  label: string
}

const RequestButton: React.FC<RequestButtonProps> = ({ fn, label }) => {
  return (
    <Button variant="contained" onClick={() => fn()}>
      {label}
    </Button>
  )
}

export default RequestButton
