import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class ArtistComment extends Component {
  constructor(props){
    super()
    //debugger
   this.state = {
      time: 0,
      cost: 0,
      comments: ''
   }
  }

    handleChange = (event) => {
      console.log(`${event.target.name}: ${event.target.value}`);
      this.setState({
          [event.target.name]: event.target.value
      })
      //console.log(this.state);
    }

    submitForm = (e, state, id) => {
      e.preventDefault()
     const reqObj = {
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(state)
    }
    
     fetch(`http://localhost:3000/artistcomments/${id}`, reqObj)
      .then(resp => resp.json())
      .then(respData => {
        this.props.history.push('/home')
        console.log(respData);
     })
    }

    style = {
      maxWidth: '100%',
      color: 'black'
      }

    render() {
        return (<>
          <Card className='bg-light' style={this.style}>
          
            <Form className="mx-auto mt-5">
            <Form.Group controlId="appt">
              <Form.Label>Total Estimated Time</Form.Label>
              <Form.Control onChange={this.handleChange} name="time" placeholder="Estimated time in hrs..." />
            </Form.Group>
            <Form.Group controlId="approvalForm">
              <Form.Label>Estimated Cost</Form.Label>
              <Form.Control onChange={this.handleChange} name="cost" placeholder="Estimated cost in USD..." />
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control onChange={this.handleChange} as="textarea" name="comments" rows={3} />
              <Button className="mb-2 mt-2 black" id={`${this.props.apptId}`} onClick={(e) => this.submitForm(e, this.state, this.props.id)} variant="primary" type="submit">
              Approve
            </Button>
            </Form.Group>
            </Form>
            </Card>
            </>
        );
    }
}

const mapDispatchToProps = {
  //newApptAdded,
  //deleteAppt
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistComment);
//export default ArtistComment;