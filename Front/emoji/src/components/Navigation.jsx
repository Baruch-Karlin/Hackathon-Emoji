import { Link } from "react-router-dom";
import { NavDropdown, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Nav>
        <NavDropdown title="Navigation (burger)" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
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
      </Nav>
    </div>
  );
};

export default Navigation;
