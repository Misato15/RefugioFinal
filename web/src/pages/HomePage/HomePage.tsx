import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Bienvenido</h1> 
      <h1>Fundación Amor y Abrigo</h1> 
      <p>
      Amor y Abrigo es un refugio de animales con sede en la ciudad de San Pedro Sula, Honduras Tienen como misión rescatar, rehabilitar y dar en adopción animales abandonados. Su fuente de ingresos se basa 100% en donaciones y la venta de accesorios. Buscan también concientizar y educar a través de las redes sociales con el fin de minimizar el abuso animal en la sociedad Hondureña.
      </p>
      <nav className="rw-button-group">
        <Link
    
          to={routes.animals()}
          className="rw-button rw-button-blue"
        >
          Administrar Animales
        </Link>
        </nav>
    </>
  )
}



export default HomePage
