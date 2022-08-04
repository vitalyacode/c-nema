import { Typography, TypographyProps } from '@mui/material'

const styles = {
  textAlign: 'center',
  fontSize: '32px',
}

export const Title: React.FC<TypographyProps> = (props) => {
  const { sx, ...restProps } = props
  return <Typography {...restProps} sx={styles}></Typography>
}
