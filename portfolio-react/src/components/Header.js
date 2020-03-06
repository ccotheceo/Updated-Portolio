import React from "react";
import { Jumbotron as jumbo, Container } from "react-bootstrap";
import "../App.css";


function Header(){
    return(
    
    <div fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome To My Profile Built With React</h1>
        <p>Im actively searching for Front End Roles!</p>
      </Container>
    </div>
  
);
}

export default Header;

