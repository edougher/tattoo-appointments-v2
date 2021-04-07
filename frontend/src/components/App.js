import MyNavbar from './Navbar'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Request from './Request'
import RequestForm from './RequestForm'
import Appointments from './Appointments';
import CalendarComponent from './Calendar'
import Background from '../images/rose.png'
import { addUserSuccess } from '../actions/index'
import { getCalendarInfo } from '../actions'
import { connect } from 'react-redux';
import fire from '../firebase.js'

import 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const App = (props) => {

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        console.log(user);
        fetchSignedInUserInfo(user.email)
        getOpenDates()
      } else {
        console.log('No User Signed In');
        this.props.history.push('/signin')
      }
      
    })
  
    const fetchSignedInUserInfo = (username) => {
      fetch(`http://localhost:3000/user/${username}`)
       .then(resp => resp.json())
       .then(respData => {
         console.log(respData)
         props && props.addUserSuccess(respData)
      })
    }
  }

  const getOpenDates = () => {
    fetch('http://localhost:3000/dates')
     .then(resp => resp.json())
     .then(respData => {
      props && props.getCalendarInfo(respData)
        })
}

  //<div className="app" style={{
  //  backgroundImage: "url(" + Background + ")",
  //  backgroundPosition: "center center",
  //  backgroundRepeat: "no-repeat",
  //  backgroundSize: "cover"
  //  
  //  }}>

  authListener()
  return (
    <Router>
    <div className="app">
    <MyNavbar />
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/appointments" component={Appointments}/>
      <Route exact path="/request" component={Request}/>
      <Route exact path="/requestForm" component={RequestForm}/>
      <Route exact path="/calendar" component={CalendarComponent}/>
    </div>
    </Router>
  );
}

const mapDispatchToProps = {
  addUserSuccess,
  getCalendarInfo
}



export default connect(null, mapDispatchToProps)(App);
