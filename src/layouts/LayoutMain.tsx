import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import TopStarbucks from "../components/TopStarbucks"

const LayoutMain = () => {
  return (
    <div className="h-min-screen bg-blue">
      <Header />
      <TopStarbucks />
      <Outlet/>
    </div>
  )
}

export default LayoutMain
