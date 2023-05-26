import { auth } from "../../config/firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const newUser = userCredential.user;
      console.log(newUser);
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="company-logo-in-register">
        <a className="navbar-brand" href="/">
          <img className="company-logo-img" />
        </a>
      </div>
      <div className="container text-center border-register">
        <form className="register-form">
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
                required
                value={registerEmail}
                onChange={(event) => setRegisterEmail(event.target.value)}
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
                required
                value={registerPassword}
                onChange={(event) => setRegisterPassword(event.target.value)}
              />
            </div>
          </div>
        </form>
        <button onClick={handleRegister} className="btn btn-primary">
          Create User
        </button>
      </div>
    </>
  );
}
