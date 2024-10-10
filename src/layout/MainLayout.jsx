import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (<>
    <Navbar />
    <div className="container mx-auto min-h-screen p-10">
      <Outlet />
    </div>
    <Footer />
  </>)
}
export default MainLayout