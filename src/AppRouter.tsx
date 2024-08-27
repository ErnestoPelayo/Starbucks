import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutMain from "./layouts/LayoutMain"
import Rewards from "./views/Rewards"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain/>}>
            <Route element={<Rewards />} path="/" index/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
