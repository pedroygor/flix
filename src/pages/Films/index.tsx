import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/MovieCard'
import { IMovies } from '../../interfaces/IMovies'
import { URL } from '../../utils/example'
import styles from './style.module.css'

import logoTipo from '../../assets/shuffle.svg'

export const Films = () => {
  const [movies, setMovies] = useState<IMovies[]>([])
  useEffect(() => {
    ;(async () => {
      const results = await fetch(URL)
      const data = await results.json()
      setMovies(data.results)
      console.log(data.results)
    })()
  }, [])
  return (
    <div className={styles.container}>
      <h1>
        <img src={logoTipo} alt="" />
      </h1>
      <div>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  )
}
