import { Button, ButtonProps } from '@mui/material'
import { Box } from '@mui/system'
import useStyles from './styles'

type NextButtonProps = {
  type: string | undefined
  onClick: CallableFunction
  onSubmit?: CallableFunction
  disabled?: boolean
}

export const NextButton: React.FC<NextButtonProps> = ({
  type,
  onClick,
  onSubmit,
  disabled = false,
}) => {
  const styles = useStyles()
  const isSubmit = type === 'submit'
  const onClickCombined = () => {
    onClick()
    isSubmit && onSubmit && onSubmit()
  }

  return (
    <Box className={styles.buttonWrapper}>
      <Button
        type={isSubmit ? 'submit' : 'button'}
        variant="contained"
        onClick={onClickCombined}
        className={styles.button}
        disabled={disabled}
      >
        Next
      </Button>
    </Box>
  )
}
