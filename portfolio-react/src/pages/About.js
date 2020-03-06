import React from "react";
import {Button, Card, Container} from "react-bootstrap";
import "../App.css";

 

function About() {
    return(
      <div className="whole">

      <Container>
        <div>
    <h1>About</h1>
</div>
<div>
<Card className="card" style={{ width: '500px' }}>
        <Card.Img className="profilePic" variant="top" src="ProfilePic.jpeg" />
        <Card.Body>
          <Card.Title>Chuck Onyekwelu</Card.Title>
          <Card.Text>
          I am a future Full Stack Software Engineer and Web Developer looking to advance my IT career by utilizing the experience I've gained at UT’s Coding Bootcamp, Apple and WP Engine. Opportunities that offer exposure and training on modern technologies, as well as professional growth are most desirable.
          </Card.Text>
          <Button href="https://github.com/ccotheceo" variant="primary">Github</Button>
          <Button href="https://www.linkedin.com/in/chuck-onyekwelu-986454b2/" variant="primary">Linkedin</Button>
        </Card.Body>
      </Card>
</div>
      </Container>
      </div>

      

    );
}

export default About;