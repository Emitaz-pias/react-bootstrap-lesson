import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Fragment from "./Fragment";
const Header = () => {
  return (
    <Jumbotron>
      <h1>Breaking news</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
        <Button ClassName="primary" variant="danger">
          Link
        </Button>
      </p>
      <Fragment></Fragment>
    </Jumbotron>
  );
};

export default Header;
