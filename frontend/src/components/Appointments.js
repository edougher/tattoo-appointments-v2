import React from 'react';
import ApptCard from './ApptCard'
import { getMyAppts } from '../actions/index'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
//import RequestForm from './RequestForm'
//import { Container } from 'semantic-ui-react'

class Appointments extends React.Component {
  imgModal = false
  activeImgs = ''

  handleEdit = (e, appt) => {
    this.props.history.push('/requestForm', appt)
  }

  handleModalShow = (id) => {
    this.activeImgs = this.props.imgs.filter(x => x.appointment_id === id)
    this.imgModal = true
    this.forceUpdate()
  }

  handleModalClose = () => {
    this.activeApptId = ''
    this.imgModal = false
    this.forceUpdate()
  }

  style = {
    width: '500px', 
    maxWidth: '100%',
    boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)'
  }

  renderAppts = () => {
  if(this.props.appts.length !== 0){
     return this.props.appts.map(appt => (
       <ApptCard edit={this.handleEdit} modalShow={this.handleModalShow} key={appt.id} appt={appt} name={this.props.userName} />
      ));
   } else {
     return (<Card>No Appts</Card>)
   }
 }

 style = {
   maxWidth: '30%',
   maxHeight: '30%'
 }
 
 render() {
  
        return (
            <div >
            {this.renderAppts()}
            
          <>
            <Modal show={this.imgModal} size="md" animation={true} onClick={this.handleModalClose}>
             <Modal.Header>
              <Modal.Title className="text-center">Reference Images</Modal.Title>
             </Modal.Header>
            <Modal.Body>
            {
              this.activeImgs && this.activeImgs.map((x) => (
                <Image src={x.image_url} className="img-fluid"/> 
              ))
            }
            </Modal.Body>
             <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModalClose}>
                Close
              </Button>
             </Modal.Footer>
            </Modal>
          </>
          </div>
          
            );
    }
}

const mapDispatchToProps = {
    getMyAppts
}

const mapStateToProps = (state) => {
    return {
      // currentUser_Id: state.currentUser.currentUser.id,
      // userName: state.currentUser.currentUser.username,
      appts: state.appts.appointments,
      imgs: state.currentUser.imgs
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);