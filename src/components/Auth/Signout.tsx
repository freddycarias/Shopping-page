import { authService } from "../../services/auth.service";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../services/firebase";

export default function Signout() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await authService.logoutUser();
      // Aquí puedes realizar acciones adicionales después de cerrar sesión exitosamente
    } catch (error) {
      // Manejo de errores al cerrar sesión
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      {user ? (
        <div style={{marginTop: "50px"}}>
          <button onClick={handleLogout} className="btn btn-danger">
            SignOut
          </button>
        </div>
      ) : (
        <div className="container text-center">
          <div className="row">
            <div className="col-6 col-sm-12 background-offcanvas-body">
              <a href="/signin" className="routes-offcanvas-body">
                <h6>Sign In</h6>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
