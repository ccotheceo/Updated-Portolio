import React from "react";
import {Button, Card, Container} from "react-bootstrap";
import "../App.css";

 

function Projects(props) {
    return(
      <div className="whole">

      <Container>
        <div>
  
</div>
<br></br>
<br></br>
<div>
<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button href={props.deployed} variant="primary">Deployed</Button>
          <Button href={props.github} variant="primary">Github Repo</Button>
        </Card.Body>
      </Card>
</div>
      </Container>
      </div>

      

    );
}

export default Projects;