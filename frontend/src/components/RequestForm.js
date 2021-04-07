import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { newApptAdded } from '../actions/index'
import { deleteAppt } from '../actions/index'
import { connect } from 'react-redux'
import ArtistComment from './ArtistComment';

class RequestForm extends Component {
  constructor(){
    super()
   this.state = {
     photo: '',
      location: '',
      width: '',
      height: '',
      colors: 0,
      note: '',
      status: "pending"
   }
   
  }

  
  

 handleChange = event => {
  console.log(`${event.target.name}: ${event.target.value}`);

 this.setState({
   [event.target.name]: event.target.value
 })
 
}


  
    handleEditForm = (e) => {
    e.preventDefault()
    const { id } = this.props.history.location.state
      const reqObj = {
        method: 'PATCH',
        headers: {
         'Content-Type': 'application/json'
       },
        body: JSON.stringify(this.state)
      }

       fetch(`http://localhost:3000/appointments/${id}`, reqObj)
        .then(resp => resp.json())
        .then(respData => {
          console.log(respData);
          this.props.newApptAdded(respData)
          this.props.history.push('/appointments')
       })
    }
    componentDidMount(){
      const { location, width, height, colors, note} = this.props.history.location.state
      this.setState({
        location: location,
        width: width,
        height: height,
        colors: colors,
        note: note,
        status: "pending"
      })
    }

    handleDelete = () => {
      const { id } = this.props.history.location.state
     fetch(`http://localhost:3000/appointments/${id}`, {method: 'DELETE'})
       .then(resp => resp.json())
       .then(respData => {
        console.log(respData)
         this.props.deleteAppt(respData.appt_id)
         this.props.history.push('/appointments')
      })
    }
    handleImageChange = e => {
      if (e.target.files[0]){
         this.state.photo = e.target.files[0]
     }
   }

   style = {
      width: '500px', 
      maxWidth: '100%',
      boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)'
    }

    render() {
    const { location, width, height, colors, note} = this.state
    const { id } = this.props.history.location.state
    return (
      <div className="px-3 mb-3 py-4 mx-auto bg-light" >
            <Card className='mx-auto' style={this.style}>
           <Form className="px-5 py-3 mx-auto bg-light" >
             <Card.Header>Edit Request Appointment</Card.Header>
             <Card.Body>
            <Form.Group controlId="appt">
              <Form.Label>Location</Form.Label>
              <Form.Text className="text-muted">
                Where will this tattoo be located?
              </Form.Text>
              <Form.Control onChange={this.handleChange} value={location} name="location" placeholder="location" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Approximate Size?</Form.Label>
              <Form.Text className="text-muted">
                This will help the artist determine the ammount of time needed to complete the tattoo
              </Form.Text>
              <Form.Control onChange={this.handleChange} value={width} type="text" name="width" placeholder="Width" />
              <Form.Control onChange={this.handleChange} value={height} type="text" name="height" placeholder="Height" />
            </Form.Group>
            <Form.Label>Number of Colors</Form.Label>
              <Form.Control onChange={this.handleChange} value={colors} as="select" name="colors" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            
            </Card.Body>
            <Button onClick={this.handleEditForm} variant="primary" type="submit">
              Update
            </Button>
            <Button onClick={() => this.props.history.push('/appointments')} variant="primary" type="submit">
              Cancel
            </Button>
            <Button onClick={this.handleDelete}variant="primary">
              Delete
            </Button>
           </Form> 
           {
            this.props.userName ==='admin@d.com' ? <ArtistComment id={id}/> : ''
           }
        </Card>
         </div>
        );
    }
}

// <Form.Group controlId="exampleForm.ControlTextarea1">
//<Form.Label>Additional Comments</Form.Label>
//<Form.Control onChange={this.handleChange} value={note} as="textarea" name="note" rows={3} />
//<input type="file" name="photo" accept="image/png, image/jpeg" onChange={this.handleImageChange} />
//<Button variant="secondary" type="click" onClick={this.uploadPhoto}>
//upload photo
//</Button>
//</Form.Group>  


const mapDispatchToProps = {
    newApptAdded,
    deleteAppt
}

const mapStateToProps = (state) => {
    return {
      //id: state.currentUser.a
      userName: state.currentUser.currentUser.username,
      id: state.currentUser.currentUser.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(RequestForm);