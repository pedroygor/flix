import { Link } from 'react-router-dom'
import { IMovies } from '../../interfaces/IMovies'
import { IMG_URL } from '../../utils/example'

import styles from './styles.module.css';

export const MovieCard = ({ id, title, release_date, poster_path }: IMovies) => {
  return (
    <div className={styles.container}>
      <Link to={`/movies/${id}`}>
        <img src={`${IMG_URL}/${poster_path}`} alt="" />
      </Link>
      <div className={styles.description}>
        <p>{title}</p>
      </div>
    </div>
  )
}
