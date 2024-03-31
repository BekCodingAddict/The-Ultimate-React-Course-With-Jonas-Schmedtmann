function SignUp({ onOpen }) {
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-up">
            <form action="">
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" required></input>
                <label htmlFor="">Username</label>
              </div>
              <div className="input-group">
                <input type="email" required></input>
                <label htmlFor="">Email</label>
              </div>
              <div className="input-group">
                <input type="password" required></input>
                <label htmlFor="">Password</label>
              </div>
              <div className="remember">
                <input type="checkbox"></input>
                <label htmlFor="">I agree to the terms & conditions</label>
              </div>
              <button type="submit">Sign Up</button>
              <div className="singUp-link">
                <p>
                  Already have an account?
                  <a href="#id" className="singIpBtn-link" onClick={onOpen}>
                    Sign In
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

export default SignUp;
