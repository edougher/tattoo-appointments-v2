import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class ImageCard extends Component {
  style = {
    boxShadow: '0 30px 70px 0px rgba(0, 0, 0, 0.8)'
  }
  
  render() {
         return (
 <div className="col-md-4 mt-4 mb-4">
   <Card style={this.style}>
     <Card.Img variant="top" src={this.props.img} />
     <Card.Body>
       <Card.Title>Card title</Card.Title>
       <Card.Text>
         Blah blah blah
       </Card.Text>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">ex: Last updated 3 mins ago</small>
     </Card.Footer>
   </Card>
   </div>
    
         );
     }
 }

 export default ImageCard;