import {auth} from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"

type UserProps = {
  email : string,
  password: string,
}

export const authService = {
  registerUser: async({email, password}:UserProps) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const newUser = userCredential.user;
      console.log(newUser);
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);
    }
  },
  loginUser: async({email, password}:UserProps) => {
    try {
      const userCredential = await signInWithEmailAndPassword( 
        auth,
        email,
        password
      )
      const user = userCredential.user;
      console.log('Usuario inició sesión:', user.uid);
    } catch (error) {
      console.error('Error al iniciar Sesion:', error);
    }
  },
  logoutUser:async () => {
    try {
      await signOut(auth)
      console.log("Cerro Sesion")
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}