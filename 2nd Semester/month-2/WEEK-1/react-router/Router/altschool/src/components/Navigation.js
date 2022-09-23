import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <section>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className="navigation"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className="navigation"
        to="/"
      >
        Home
      </NavLink>
    </section>
  );
}
