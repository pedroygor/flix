import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMovie } from '../../interfaces/IMovie'
import { IMG_URL, URL_BY_ID } from '../../utils/example'

import styles from './styles.module.css'

export const Film = () => {
  const { id } = useParams()
  const [film, setFilm] = useState<IMovie>()

  useEffect(() => {
    if (id) {
      ;(async () => {
        const result = await fetch(URL_BY_ID(id))
        const data = await result.json()
        data.formattedDate = formatDate(data.release_date)
        setFilm(data)
      })()
    }
  }, [])

  const formatDate = (dateInString: string) => {
    const date = new Date(dateInString)
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    return formattedDate
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img
            src={`${IMG_URL}/${film?.poster_path}`}
            alt={`Poster do filme ${film?.title}`}
          />
        </div>
        <div className={styles.description}>
          <div>
            <h1 className={styles.title}>{film?.title}</h1>
            <p className={styles.overview}>{film?.overview}</p>
          </div>
          <div className={styles.genres}>
            {film?.genres.map(gen => (
              <span key={gen.id}>{gen.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
