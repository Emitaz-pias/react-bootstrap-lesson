import React from "react";
import { Card, Button } from "react-bootstrap";
const News = (props) => {
    const { title,description,urlToImage} = props.article
    console.log(props)
    return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default News;
