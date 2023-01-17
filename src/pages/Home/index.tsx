import styles from './styles.module.css'
import logoTipo from '../../assets/shuffle.svg'
import { Link } from 'react-router-dom'

export const Home = () => {
  
  return (
    <div className={styles.container}>
      <main className={styles.containerSecondary}>
        <div className={styles.content}>
          <img src={logoTipo} alt="" />
          <h1>Não sabe o que assistir?</h1>
        </div>

        <Link to="/movies">
          <img src={logoTipo} alt="" />
          Encontrar filmes
        </Link>
        <p className={styles.description}>
          Clique em "Encontrar filmes" que traremos informações de vários filmes
          para você assistir hoje.
        </p>
      </main>
    </div>
  )
}
