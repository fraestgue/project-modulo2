import Navbar from "./componets/Navbar"
import Homepage from "./pages/Homepage"
import Footer from "./componets/Footer"
import PlatformsPage from "./pages/PlataformsPage"
import {Routes, Route} from "react-router-dom"
import GameDetailsPage from "./pages/GameDetailsPage"
import JuegosEnVenta from "./pages/JuegosEnVenta"
import DetallesVenta from "./pages/DetallesVenta"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"
import Error404NotFundPage from "./pages/Error404NotFundPage"
import './App.css'
import NewSalesPage from "./pages/NewSalesPage"
import RetroPage from "./pages/RetroPage"
import RetroPlatforms from "./pages/RetroPlatforms"


function App() {
  

  return (

    <div className="app">
    <Navbar />
   
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/platforms/:platformId"} element={<PlatformsPage />}/>
      <Route path={"/games/:gameId"} element={<GameDetailsPage />}/>
      <Route path={"/sales"} element={<JuegosEnVenta />}/>
      <Route path={"/sales/:salesId"} element={<DetallesVenta />}/>
      <Route path={"/sales/form"} element={<NewSalesPage />} />
      <Route path={"/retro"} element={ <RetroPage /> } />
      <Route path={"/retro/:platformId"} element={ <RetroPlatforms /> }
        />
      <Route path={"/about"} element={<AboutPage />}/>
      
      <Route path={"/errorpage"} element={<ErrorPage />}/>
      <Route path={"*"} element={<Error404NotFundPage />}/>


    </Routes>

    <Footer />

      
    </div>
  )
}

export default App
