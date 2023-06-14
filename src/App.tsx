import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import HomePage from "./pages/home.page";
import ProductDetailPage from "./pages/product-detail.page";
import { CustomerServiceComponent } from "./components/CustomerService/CostumerService.component";
import "./styles/App.css";
import ProductListByCategory from "./components/Product/ProductListByCategory.component";
import AddANewAddress from "./components/FormtoBuy/AddANewAddress.component";
import ShoppingCartPage from "./pages/shopping-cart.page";

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="customer-service" element={<CustomerServiceComponent/>}/>
      <Route path="/show-full-product/:id" element={<ProductDetailPage />} />
      <Route path="/product-categories" element={<ProductListByCategory />}/>
      <Route path="/buy-form" element={<AddANewAddress />}/>
      <Route path="/shopping-cart" element={<ShoppingCartPage/>}/>
    </Routes>
  );
}

export default App;
