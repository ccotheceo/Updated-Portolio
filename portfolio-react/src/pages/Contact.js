import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import "../App.css";


function Contact() {

    return (
        <div className="whole">
            <Container>
            <Row>
                <h1>Contact</h1>
            </Row>
            <Row>
                <div className="mb-2">
                    <Button href="https://www.linkedin.com/in/chuck-onyekwelu-986454b2/" variant="primary" size="lg">
                        Linkedin
                    </Button>{' '}
                    <Button href="https://github.com/ccotheceo" variant="secondary" size="lg">
                        Github
                    </Button>
                </div>
            </Row>
        </Container>
        </div>
        
    );
}

export default Contact;