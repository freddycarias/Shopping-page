import { useState } from "react";
import { authService } from "../../services/auth.service";
import "../../styles/SignIn.css";
import SignInAndRegister from "./SignInAndRegister.component";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await authService.loginUser({email, password});
      // Aquí puedes realizar acciones adicionales después de iniciar sesión exitosamente
    } catch (error) {
      // Manejo de errores al iniciar sesión
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logoutUser();
      // Aquí puedes realizar acciones adicionales después de cerrar sesión exitosamente
    } catch (error) {
      // Manejo de errores al cerrar sesión
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handles = {
    handleLogin,
    handleLogout,
  };

  return (
    <SignInAndRegister email={email} setEmail={setEmail} password={password} setPassword={setPassword} handles={handles} register={false}/>
  );
}
