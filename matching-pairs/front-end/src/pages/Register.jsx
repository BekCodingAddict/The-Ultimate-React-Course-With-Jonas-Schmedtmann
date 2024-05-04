import { Link } from "react-router-dom";

function Register() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submeitted");
  };
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-up">
            <form action="" onSubmit={onSubmit}>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" name="name" required></input>
                <label>Username</label>
              </div>
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
                <label>I agree to the terms & conditions</label>
              </div>
              <button type="submit">Sign Up</button>
              <div className="singUp-link">
                <p>
                  Already have an account?
                  <Link to="/login" className="singIpBtn-link">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
