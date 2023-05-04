// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import "./Login.css";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       navigate("/movies");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className="input-container">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock authentication function that always returns the default token
    const token = "Wookie2019";

    // Store the token in local storage for persistence
    localStorage.setItem("token", token);

    // Navigate to the movies list page
    navigate("/movies");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
