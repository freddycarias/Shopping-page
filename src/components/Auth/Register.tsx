import { useState } from "react";
import "../../styles/Register.css";
import { authService } from "../../services/auth.service";
import SignInAndRegister from "./SignInAndRegister.component";

export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleRegister = async () => {
    try {
      await authService.registerUser({email, password })
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const handles = {
    handleRegister
  };
  return (
    <SignInAndRegister email={email} setEmail={setEmail} password={password} setPassword={setPassword} handles={handles} register={true}/>
    );
}
