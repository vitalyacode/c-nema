import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      position: 'relative',
    },
    title: {
      textAlign: 'center',
    },
    infoWrapper: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    paperContainer: {
      width: '600px',
    },
    paperWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTypography: {
      overflow: 'auto',
    },
    ticketList: {
      padding: '0 !important',
    },
    listItem: {
      paddingLeft: '20px',
    },
  })
)

export default useStyles
