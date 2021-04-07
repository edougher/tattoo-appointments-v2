import React from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';

class TimeSlots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    timeSlotRequest = (time) => {
        console.log(this.props.date, time);
    }

    render() {
        return (
        <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-3 bg-light">
        
            <h4 className="text-center mt-2"><h2>Openings on </h2>{this.props.date}</h4>
            {
                this.props.slots.map((slot) => {
                     return slot.map(x => (
                         <div className="text-center mt-3"><h5>Open --->{x.start} : {x.end}</h5> 
                         {this.props.currentUser !== 'admin@d.com' ? 
                         <Button onClick={() => this.timeSlotRequest(x)}>Request Timeslot</Button> 
                         : 
                         ''}
                         </div>))
                })
                
                
            }
            
            
        </div>
            
            
        );
    }
}

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser.currentUser.username
    }
}

export default connect(mapStateToProps)(TimeSlots);