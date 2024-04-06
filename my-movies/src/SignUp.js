import { useState } from "react";

function SignUp({ onOpen, setUsers }) {
  const [user, setUser] = useState({
    userName: "",
    userPassword: "",
    userEmail: "",
    userId: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = crypto.randomUUID();
    const newUser = {
      userId: userId,
      userName: user.userName,
      userPassword: user.userPassword,
      userEmail: user.userEmail,
    };

    setUsers((users) => [...users, newUser]);
    setUser({
      userName: "",
      userPassword: "",
      userEmail: "",
      userId: 0,
    });
  };
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-up">
            <form action="" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input
                  type="text"
                  required
                  value={user.userName}
                  onChange={(e) =>
                    setUser({ ...user, userName: e.target.value })
                  }
                ></input>
                <label>Username</label>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  required
                  value={user.userEmail}
                  onChange={(e) =>
                    setUser({ ...user, userEmail: e.target.value })
                  }
                ></input>
                <label>Email</label>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  required
                  value={user.userPassword}
                  onChange={(e) =>
                    setUser({ ...user, userPassword: e.target.value })
                  }
                ></input>
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
