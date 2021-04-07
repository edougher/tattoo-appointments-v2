import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import TimePicker from 'react-bootstrap-time-picker';
import { timeslotAdded } from '../actions'
import { connect } from 'react-redux'




class SetDateTimeForm extends React.Component {
  constructor(){
    super()
    this.state = {
      seconds: 0,
      date: '',
      startTime: '10:00 AM',
      endTime: '10:00 AM'

   }
  }
  componentDidMount(){
    this.setState({
      date: this.props.date
    })
  }
   
    handleTimeChange = e => {
      e.preventDefault()
      let amPm = e < 43200 ? 'AM' : 'PM'
      let hours = Math.floor(e.target.value / 60 / 60);
      let minutes = Math.floor(e.target.value / 60) - (hours * 60);
      let formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')

      this.setState({
        ...this.state, 
        seconds: e.target.value,
        [e.target.name]: formattedTime + ' ' + amPm    
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

      fetch(`http://localhost:3000/dates`, reqObj)
       .then(resp => resp.json())
       .then(respData => {
         console.log(respData)
         timeslotAdded(respData)
         //this.props.newTimeSlot(respData)
      })
    }
    
    render() {
        return (
            <Form className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light" onChange={this.handleTimeChange} style={{ width: '18rem' }}>
             <Card.Header>Openings on: {this.props.date}</Card.Header>
             <Card.Body>
              <Form.Text className="text-muted">
              Start Time:
              </Form.Text>
              <TimePicker start="10:00" end="21:00" step={30} name="startTime" value={this.state.startTime}/>
           <Form.Text className="text-muted">
              End Time:
              </Form.Text>
              <TimePicker start="10:00" end="21:00" step={30} name="endTime" value={this.state.endTime}/>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control as="textarea" name="comments" rows={3} />
            </Form.Group>
            </Card.Body>
            <Button variant="primary" onClick={(e) => this.handleSubmit(e)}>
              Set
            </Button>
           </Form>
            
        );
    }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = {
  timeslotAdded
}

export default connect(mapStateToProps, mapDispatchToProps)(SetDateTimeForm);