import { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/movies" className="brand-name">
        Wookie
      </a>
      <div
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img className="hamburger" src={require("../Assets/menu.png")} alt="" />
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Genre</a>
          </li>
          <li>
            <a href="#">Comedy</a>
          </li>
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Romance</a>
          </li>
          <li>
            <a href="#">Top IMDB</a>
          </li>
          <li>
            <input
              type="text"
              //   value={searchTerm}
              //   onChange={handleSearchTermChange}
              placeholder="Search by title"
            />
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
