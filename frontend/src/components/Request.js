import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { createNewAppointment } from '../actions/index'

class Request extends React.Component {
 state = {
   location: '',
   width: '',
   height: '',
   colors: 1,
   comments: '',
   user_id: this.props.currentUser_Id,
   status: "pending"
}

 handleChange = event => {
    console.log(`${event.target.name}: ${event.target.value}`);
    this.setState({
     [event.target.name]: event.target.value
   })
 }
 
 handleSubmit = (e) => {
   e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    
   fetch('http://localhost:3000/appointment', reqObj)
    .then(resp => resp.json())
    .then(respData  => {
      console.log(respData)
      this.props.createNewAppointment(respData)
      this.props.history.push('/appointments')
    })
 }

  style = {
    width: '500px', 
    maxWidth: '100%',
    boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)'
  }
 
render() {
    return (
        <div>
          <h1 className="text-center">Appointment Request</h1>
          <Card className='rounded-2 mb-0 py-0 mx-auto' style={this.style}>
           <Form  onSubmit={this.handleSubmit} className="text-center px-5 rounded-2 py-4 bg-light" >
             <Card.Header>Appointment Request</Card.Header>
             <Card.Body>
            <Form.Group controlId="appt">
              <Form.Label>Location</Form.Label>
              <Form.Text className="text-muted">
                Where will this tattoo be located?
              </Form.Text>
              <Form.Control name="location" placeholder="location" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Approximate Size?</Form.Label>
              <Form.Text className="text-muted">
                This will help the artist determine the ammount of time needed to complete the tattoo
              </Form.Text>
              <Form.Label>Approximate Width</Form.Label>
              <Form.Control type="number" name="width" placeholder="width..." onChange={this.handleChange}/>
              <Form.Label>Approximate Height</Form.Label>
              <Form.Control type="number" name="height" placeholder="height..." onChange={this.handleChange}/>
            </Form.Group>
            <Form.Label>Number of Colors</Form.Label>
              <Form.Control onChange={this.handleChange} as="select" name="colors" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control as="textarea" name="comments" rows={3} onChange={this.handleChange}/>
            </Form.Group>
            </Card.Body>
            <Button variant="primary" type="submit">
              Submit
            </Button>
           </Form>
          </Card>
       </div>          
        )
    }
}

const mapDispatchToProps = {
    createNewAppointment
}

const mapStateToProps = (state) => {
  return {
    currentUser_Id: state.currentUser.currentUser.id
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Request);