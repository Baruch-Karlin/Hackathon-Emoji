import { Link } from "react-router-dom";
import { NavDropdown, Nav, Dropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <NavDropdown
      title={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      }
      id="nav-dropdown"
      className="menu d-flex flex-row-reverse"
    >
      <NavDropdown.Item eventKey="4.1" className="d-block">
        <Link to="welcome">Welcome</Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">
        <Link to="upload">Upload</Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">
        <Link to="result">Result</Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">
        <Link to="prev_results">Previous results</Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default Navigation;
