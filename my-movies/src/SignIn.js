import { useState } from "react";
import "./loginStyle.css";

function SignIn({ onOpen, onUserExist }) {
  const [user, setUser] = useState({
    userName: "",
    userPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const storedData = localStorage.getItem("users");
      const usersData = JSON.parse(storedData);
      console.log(usersData);
      console.log(user);
      const isExistUser = usersData.map(
        (curUser) =>
          curUser.userName === user.userName &&
          curUser.userPassword === user.userPassword
      );
      isExistUser ? onUserExist(true) : onUserExist(false);
    } catch (error) {}
  };
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-in">
            <form action="" onSubmit={handleSubmit}>
              <h2>Login</h2>
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
