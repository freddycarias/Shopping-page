import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import HomePage from "./pages/home.page";
import ProductDetailPage from "./pages/product-detail.page";
import "./styles/App.css";

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/show-full-product/:id" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
