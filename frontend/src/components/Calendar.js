import React from 'react';
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import moment from 'moment'
import SetDateTimeForm from './SetDateTimeForm'
import TimeSlots from './TimeSlots'
import './calendar.css'

 

class CalendarComponent extends React.Component {
  calendarState = {
        datesToAddContentTo: [],
        datesWithTimeSlots: [],
        dateIsActive: false,
        date: '',
        startTime: '',
        endTime: ''
        }
    
   //let dates = this.props.calendar[0].map(date => date.date.date)
   // getOpenDates = () => {
   //     fetch('http://localhost:3000/dates')
   //      .then(resp => resp.json())
   //      .then(respData => {
   //          let dates = respData.map(date => date.date)
   //          this.setState({datesToAddContentTo: dates, datesWithTimeSlots: respData})
   //         })
   // }
    
    DayClicked = (e) => {
       // this.setState({
       //     dateIsActive: true,
       //     date: moment(e).format('YYYY-MM-DD')
       // })
    //###
    //###   this.props.location.apptInfo   
    //###   is from the approved appt card that was clicked
    }

    //getNewtimeSlot = (date) => {
    //    console.log(date);
    //    //this.setState({
    //    //    datesToAddContentTo
    //    //})
    //    debugger
    //}

    showTimeSlots = () => {
        
        if(this.state.datesWithTimeSlots.find(date => date.date.date === this.state.date)){
            console.log('hellotime ----true')
            let dateWithTimeSlots = this.state.datesWithTimeSlots.filter(date => date.date.date === this.state.date)
            let slots = dateWithTimeSlots.map(s => s.timeslots)
             return <TimeSlots date={this.state.date} slots={slots}/>
        }else{
            console.log('hellotime ----false');
        }

    }
    datesWithOpenings = ({date, view}) => {
        
        let dates = this.props.calendar[0].map(date => date.date.date)
        if(dates.find(x => x === moment(date).format('YYYY-MM-DD'))){
            return 'react-calendar__tile--active'; // your class name
            }
    }
    
    render(){  
          
        return (
            <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light" style={{width: '500px', maxWidth: '100%'}}>
           <h1 className="text-center">Calendar</h1>
           <div>
           <Calendar
           style={{height: '1000px', width: '500px'}}
           className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-3 bg-light"
           onClickDay={e => this.DayClicked(e)} 
           tileClassName={this.datesWithOpenings}
           />
           {
           this.calendarState.date === "" ?
           console.log('this.state.date === empty')
           :
            this.showTimeSlots()
            }

           {
            this.calendarState.dateIsActive && this.props.userName === "admin@d.com" ?
           <SetDateTimeForm date={this.calendarState.date}/>
           :
           ''
           }
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      userName: state.currentUser.currentUser.username,
      calendar: state.calendar
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);