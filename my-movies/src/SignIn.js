import "./loginStyle.css";

function SignIn({ onOpen }) {
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-in">
            <form action="">
              <h2>Login</h2>
              <div className="input-group">
                <input type="text" required></input>
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="password" required></input>
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
                  <a href="#SignIn" className="singUpBtn-link" onClick={onOpen}>
                    Sing Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
