import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import ImageCard from './ImageCard'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
//import images from '../images/casey_insta_images/'

 



class Home extends Component {

// ####  TODO instagram api
  getImages = () => {
    let images = []
    for(let x = 1; x <= 12; x++){
      //Importing/Using Images in React
      //https://www.youtube.com/watch?v=taMJct5oeoI
      let imagePath = `/images/casey_insta_images/${x}.jpeg`
      images.push(imagePath)
}
    return images.map(image => (
      <ImageCard img={image} />
    )) 
} 

  style = {
    borderStyle: 'solid',
    marginTop: '40px',
    width: '500px', 
    maxWidth: '100%',
    boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)',
    background: 'linear-gradient(to top,rgba(128, 128, 128, 1) 2%, rgba(0, 0, 0, 0.9) 50%',
    color: 'white'
  }

  styleTwo = {
    background: 'linear-gradient(to top,rgba(128, 128, 128, 0) 0%, rgba(128, 128, 128, 0.7) 2%, rgba(0, 0, 0, 0.9) 50%',
    color: 'white'
  }

  render(){
        return(
          <div className="mt-9">
          {
           this.props.currentUser !== "admin@d.com" ?
            <Card className='rounded-2 mt-9 mb-9 py-0 mx-auto' style={this.style}>
            <Card.Header className="text-center">Appointment Requests</Card.Header>
            <Card.Body>
              <ol >
                <li><b>Fill out the form and upload any pictures for reference.</b></li>
                <li><b>Artist will review the request and add a cost and time quote.</b></li>
                <li><b>If you accept you can review the calendar for openings.</b></li>
                <li><b>Choose a date and time for your first appointment.</b></li>
              </ol>
            </Card.Body>
            <div className="text-center">
            <Button variant='primary' style={{width:"33%", marginBottom: "5px"}} class="ui center floated button">
            <NavLink to={{pathname: "/request"}}style={{color: 'white'}}>Request Appointment</NavLink>
            </Button>
            </div>
            </Card>
            :
            <Card className='rounded-2 mt-9 mb-9 py-0 mx-auto' style={this.style}>
            <Card.Header className="text-center">Artist Card</Card.Header>
            <Card.Body>
              <h2 className="text-center"> You have {this.props.appts.length} new appointments to review </h2>
            </Card.Body>
            <div className="text-center">
            <Button variant='primary' style={{width:"33%", marginBottom: "5px"}} class="ui center floated button">
            <NavLink to={{pathname: "/appoinments"}}style={{color: 'white'}}>View Appointments</NavLink>
            </Button>
            </div>
            </Card>
            }
            


            <div className="mt-9">
            <Container className="" style={{ marginTop: '20px'}}>
            <Card style={this.styleTwo}><h1 className="text-center">Recent Work</h1></Card>
                <div className="row">
                {this.getImages()}
                </div>
            </Container>
            </div> 
            </div>   
            )
        }
  }


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser.username,
    appts: state.currentUser.appointments
  }
}



export default connect(mapStateToProps)(Home)
