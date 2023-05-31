import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "../pages/Home/Store";
import SignIn from "../pages/SignInAndRegister/SignIn";
import Register from "../pages/SignInAndRegister/Register";
import ShowFullProduct from "../pages/ShowFullProduct/ShowFullProduct";

export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/show-full-product/:id" element={<ShowFullProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}
