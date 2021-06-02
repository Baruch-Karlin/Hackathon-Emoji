import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="p-2 m-2 ">
      <h1 className="pb-4">Welcome to the Emoji App</h1>
      <div>This service allow you to transfer your paint to emoji</div>

      <div className="d-flex justify-content-center">
        <Link to="upload">
          <Button className="mt-5" renderas="button">
            <span>Next</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
