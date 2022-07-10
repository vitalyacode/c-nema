import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { filmsService } from 'src/api/filmsService'
import { imagesService } from 'src/api/imagesService'
import { FilmFullInfo } from 'src/components/FilmFullInfo'
import { PagePreloader } from 'src/components/Preloader/PagePreloader'
import { IFilm } from 'src/types'

const FilmPage: React.FC = () => {
  const params = useParams()
  const id = params.id as string
  const [film, setFilm] = useState<IFilm>()
  const [images, setImages] = useState<string[]>([])
  const [filmNotFound, setFilmNotFound] = useState<boolean>(false)
  useEffect(() => {
    const fetchFilmAndImages = async () => {
      try {
        const resolvedPromises = await Promise.all([
          filmsService.getById(id),
          imagesService.getImgsById(id),
        ])
        if (!resolvedPromises[0] || !resolvedPromises[1])
          throw new Error('Could not find film')
        setFilm(resolvedPromises[0])
        setImages(resolvedPromises[1])
      } catch (err) {
        setFilmNotFound(true)
      }
    }
    id && fetchFilmAndImages()
  }, [id])

  if (filmNotFound) {
    return <div>Something went wrong</div>
  }

  return (
    <>
      {film && images ? (
        <FilmFullInfo {...film} images={images} />
      ) : (
        <PagePreloader />
      )}
    </>
  )
}

export default FilmPage
