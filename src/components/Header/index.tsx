import logoTipo from '../../assets/shuffle.svg'

export const Header = () => {
  return(
    <header>
      <div>
      <h1>Flix</h1>
      <img src={logoTipo} alt="" />
      </div>
      <nav>
        <ul>
          <li>filmes</li>
          <li>séries</li>
        </ul>
      </nav>
    </header>
  )
}