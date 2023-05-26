import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../../config/firebase-config";

import "../../styles/SignIn.css";

export default function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const loggedInUser = userCredential.user;
      console.log(loggedInUser);

      navigate("/"); // Redirige al usuario a la página de inicio ("/")
    } catch (error:any) {
      setLoginError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="company-logo-in-register">
        <a className="navbar-brand" href="/">
          <img className="company-logo-img" />
        </a>
      </div>
      <div className="container text-center border sign-in">
        <form className="sign-in-form" onSubmit={() => navigate("/")}>
          <div className="row mb-3">
            <label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label email-label"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control email-input"
                id="inputEmail3"
                placeholder="Email..."
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label password-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control password-input"
                id="inputPassword3"
                placeholder="Password..."
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="sign-in-button">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={handleLogin}
            >
              Sign in
            </button>
            {loginError && <p>{loginError}</p>}
          </div>
        </form>

        <h4>User Logged In:</h4>
        {user ? <p>{user.email}</p> : <p>No user logged in</p>}

        <button onClick={handleLogout} className="btn btn-danger">Sign Out</button>

        <div className="register-button">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/register")}
          >
            Create Your account in Online shop
          </button>
        </div>
      </div>
    </>
  );
}
