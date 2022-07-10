import React, { useState } from 'react'
import { Box } from '@mui/system'
import { PosterPreloader } from '../Preloader/PosterPreloader'

type PosterProps = {
  src: string
} & React.ComponentProps<typeof Box>

export const Poster: React.FC<PosterProps> = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)
  return (
    <>
      <Box
        component={'img'}
        onLoad={() => setIsImageLoaded(true)}
        sx={{ display: isImageLoaded ? 'flex' : 'none' }}
        {...props}
      ></Box>
      {!isImageLoaded && <PosterPreloader isVisible={true} />}
    </>
  )
}
