import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to the Emoji App</h1>
      <div>This service allow you bla bla bla</div>

      <Link to="upload">
        <Button renderas="button">
          <span>Next</span>
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;
