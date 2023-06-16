import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import HomePage from "./pages/home.page";
import ProductDetailPage from "./pages/product-detail.page";
import { CustomerServiceComponent } from "./components/CustomerService/CostumerService.component";
import "./styles/App.css";
import ProductListByCategory from "./components/Product/ProductListByCategory.component";
import AddANewAddress from "./components/FormtoBuy/AddANewAddress.component";
import ShoppingCartPage from "./pages/shopping-cart.page";
import AccountPage from "./pages/account.page";
import { useAuthentication } from "./hooks/useAuthentication";
import LoginAndSecurityComponent from "./components/Account/LoginAndSecurity/LoginAndSecurity.component";
import AboutYouComponent from "./components/Account/AboutYou/AboutYou.component";


function App() {
  const isAuthenticated = useAuthentication();

  const RedirectToLogin = () => <Navigate to="/signIn" replace />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="customer-service" element={<CustomerServiceComponent />} />
      <Route path="/show-full-product/:id" element={<ProductDetailPage />} />
      <Route path="/product-categories" element={<ProductListByCategory />} />
      <Route path="/buy-form" element={isAuthenticated ? <AddANewAddress /> : <RedirectToLogin />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/security" element={<LoginAndSecurityComponent/>}/>
      <Route path="/about-you" element={<AboutYouComponent/>}/>
    </Routes>
  );
}

export default App;
