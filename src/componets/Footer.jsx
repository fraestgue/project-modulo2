import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
        <Link to={"/about"} className={"footer"}>
        Sobre Nosotros
        </Link>
        <hr />
        <a href="" className={"footer"}>GitHub</a>
    </div>
  )
}

export default Footer