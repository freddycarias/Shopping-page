import { useNavigate } from "react-router-dom";

interface Handles {
  handleLogin?: () => void;
  handleLogout?: () => void;
  handleRegister?: () => void;
}

type SignInAndSignUp = {
  handles: Handles;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  register: boolean;
};

export default function SignInAndRegister({
  email,
  setEmail,
  password,
  setPassword,
  handles,
  register,
}: SignInAndSignUp) {

  const handleLogin = () => {
    handles.handleLogin?.();
  };

  const handleLogout = () => {
    handles.handleLogout?.();
  };

  const handleRegister = () => {
    handles.handleRegister?.();
  };
  const navigate = useNavigate();
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="sign-in-button">
            {!register && (
              <>
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <div className="register-button" style={{ marginTop: "20px" }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/register")}
                  >
                    Create Your account in Online shop
                  </button>
                </div>
              </>
            )}
            {register && (
              <>
                <button onClick={handleRegister} className="btn btn-primary">
                  Create User
                </button>
              </>
            )}
          </div>
        </form>
        {!register && (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-danger"
              style={{ marginTop: "20px" }}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </>
  );
}
