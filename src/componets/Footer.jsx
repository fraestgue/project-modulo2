import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className={"footer"}>
      <div>
        <Link to={"/about"} className="amarillo">
        Sobre Nosotros
        </Link>
      </div>
      <div>
        <a href="https://github.com/fraestgue/project-modulo2" className="amarillo">GitHub</a>
      </div>
    </div>
  )
}

export default Footer