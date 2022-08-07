import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const isActive = (routePath) => {
    return useMatch({ path: useResolvedPath(routePath).pathname, end: true })
      ? "active"
      : "";
  };
  return (
    <nav className="d-flex align-items-center justify-content-between">
      <h6>
        Rental Houses's Osorio <span>.</span>
      </h6>
      <ul>
        <li>ES/EN</li>
        <li>
          <Link className={isActive("/")} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={isActive("/houses")} to={"/houses"}>
            Country Houses
          </Link>
        </li>
        <li>
          <Link className={isActive("/boats")} to={"/boats"}>
            Boats
          </Link>
        </li>
        <li>
          <Link className={isActive("/contact")} to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
