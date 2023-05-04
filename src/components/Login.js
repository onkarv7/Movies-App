import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const token = "Wookie2019";

    localStorage.setItem("token", token);

    navigate("/movies");
  };

  return (
    <div className="loginwrapper">
      <div className="logincontainer">
        <h1>Welcome</h1>
        <h3>Sign in using</h3>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
