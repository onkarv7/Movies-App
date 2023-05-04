import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import MovieDetailsPage from "./components/MovieDetailsPage";
import Login from "./components/Login";
import MoviesList from "./components/MoviesList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>{/* <Link to="/">Home</Link> */}</li>
            {token && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/movies/:slug"
            element={<MovieDetailsPage token={token} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
