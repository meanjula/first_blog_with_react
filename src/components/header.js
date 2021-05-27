import NavBar from './navbar'

const Header = () => {
    const welcome = 'Welcome to 30 Days Of React Challenge'
    const title = 'Getting Started React'
    const firstName ='Anjula'
    const lastName ='Timsina'
    const date = 'Year:2021'
  return( <header id="head">
      <div className ="head-wrapper">
        <div>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <p>Author:{firstName} {lastName} </p>
          <small>{date}</small>
        </div>
      </div>
      <NavBar/>
    </header>
  )
}
export default Header