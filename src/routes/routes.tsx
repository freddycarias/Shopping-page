import { BrowserRouter , Routes , Route } from "react-router-dom";
import Store from "../pages/Home/Store";
import SignIn from "../pages/SignInAndRegister/SignIn";
import Register from "../pages/SignInAndRegister/Register";


export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}
