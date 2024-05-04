import { Link, useNavigate } from "react-router-dom";

function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submeitted");
  };
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-in">
            <form onSubmit={onSubmit}>
              <h2>Login</h2>
              <div className="input-group">
                <input type="email" name="email" required></input>
                <label>Email</label>
              </div>
              <div className="input-group">
                <input type="password" name="password" required></input>
                <label>Password</label>
              </div>
              <div className="remember">
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <button type="submit">Login</button>
              <div className="singUp-link">
                <p>
                  Don't have an account?
                  <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
