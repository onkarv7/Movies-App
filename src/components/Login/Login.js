import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import "./Login.scss";

function Login() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    // load: false,
    // success: false,
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleUserNameChange = (e) => {
    const name = e.target.value;
    console.log(name);
    setUserInfo((userInfo) => ({ ...userInfo, username: name }));
  };

  const handlePassword = (e) => {
    const pass = e.target.value;
    console.log(pass);
    setUserInfo((userInfo) => ({ ...userInfo, password: pass }));
  };

  const register = async (formData) => {
    if (validateInput(formData)) {
      const token = "Wookie2019";
      localStorage.setItem("token", token);
      navigate("/movies");
      enqueueSnackbar(`Welcome ${userInfo["username"]} Enjoy Wookie`, {
        variant: "success",
      });
    } else {
      // enqueueSnackbar("error while login");
    }
  };

  const validateInput = (data) => {
    // console.log(data);
    if (data["username"] === "") {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    } else if (data["username"].length < 6) {
      enqueueSnackbar("Username must be atleat 6 characters", {
        variant: "warning",
      });
      return false;
    } else if (data["password"] === "") {
      enqueueSnackbar("Password is required", { variant: "warning" });
      return false;
    } else if (data["password"].length < 6) {
      enqueueSnackbar("Password must be atleat 6 characters", {
        variant: "warning",
      });
      return false;
    }
    return true;
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
            value={userInfo["username"]}
            placeholder="Enter Username"
            onChange={handleUserNameChange}
          />
          <label>Password</label>
          <input
            type="password"
            value={userInfo["password"]}
            onChange={handlePassword}
            placeholder="Enter a password with minimum 6 characters"
          />
          <button onClick={() => register(userInfo)}>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
