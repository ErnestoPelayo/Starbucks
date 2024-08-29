import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LayoutMain = () => {
  return (
    <div className="h-min-screen bg-blue">
      <Header />
      <Outlet/>
    </div>
  )
}

export default LayoutMain
