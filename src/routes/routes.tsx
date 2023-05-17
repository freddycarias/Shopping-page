import { BrowserRouter , Routes , Route } from "react-router-dom";
import Store from "../pages/Home/Store";


export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  )
}
