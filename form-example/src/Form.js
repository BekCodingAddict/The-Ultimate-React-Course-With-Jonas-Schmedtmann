import { useState } from "react";
import "./index.css";

export default function Form() {
  const [formDatas, setFormDatas] = useState({
    fullName: "",
    email: "",
    password: "",
    id: Date.now(),
  });
  const Datas = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    Datas.push(formDatas);
  };
  return (
    <div className="formClass">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="fullName"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formDatas.fullName}
            onChange={(e) =>
              setFormDatas({ ...formDatas, fullName: e.target.value })
            }
          />
          <br />

          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={formDatas.email}
            onChange={(e) =>
              setFormDatas({ ...formDatas, email: e.target.value })
            }
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={formDatas.password}
            onChange={(e) =>
              setFormDatas({ ...formDatas, password: e.target.value })
            }
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
