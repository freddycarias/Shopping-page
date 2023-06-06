import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { User,onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

type AccountButtonProps = {
  isButton: boolean; 
}

export default function AccountButtonComponent({isButton}:AccountButtonProps) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {isButton && (
        <button
          className={`account-button ${user ? "signed-in" : "not-signed-in"}`}
          onClick={() => navigate("/signin")}
        >
          {user ? `${user.email}` : "Hi, Sign In"}
        </button>
      )}
      {!isButton && (
        <a href="/signin" className="title-hmenu-canvas">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            {user ? `${user.email}` : "Hi, Sign In"}
          </h5>
        </a>
      )}
    </>
  );
}
