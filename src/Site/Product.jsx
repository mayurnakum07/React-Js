import React from "react";
import "./Product.css";
import { Button, Card, Container } from "react-bootstrap";

function Product() {
  return (
    <div>
      <Container className="mt-5 card-all">
        <Card className="pro-card">
          <img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVl-ESjn-dKgx0gsLmR5uwr98vFvyX_Y6anA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Titen Watch for man</Card.Title>
            <Card.Text>
              <span>BRAND :</span> Titan
              <br />
              <span>WARRANTY PERIOD :</span> 24 Months
              <br />
              <span>MOVEMENT :</span>Quartz
              <br />
              <span>CASE SHAPE :</span>Round
            </Card.Text>
            <h3>
              Price : <span>8599</span> RS.
            </h3>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Product;
