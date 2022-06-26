import * as React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

type LinkProps = React.ComponentProps<typeof Link>

export const MyLink: React.FC<LinkProps> = (props) => {
  return (
    <Link style={{ textDecoration: 'inherit', color: 'inherit' }} {...props}>
      {props.children}
    </Link>
  )
}
