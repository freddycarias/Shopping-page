import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Store from "./pages/Home/Store";
import ShowFullProduct from "./pages/ShowFullProduct/ShowFullProduct";
import "./styles/App.css";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/show-full-product/:id" element={<ShowFullProduct />} />
    </Routes>
  );
}

export default App;
