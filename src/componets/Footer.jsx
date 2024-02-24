import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
        <Link to={"/about"}>
        Sobre Nosotros
        </Link>
        <hr />
        <a href="">GitHub</a>
    </div>
  )
}

export default Footer