import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { addUserSuccess } from '../actions/index'
//import firebase from 'firebase/app'
import fire from '../firebase'


class SignIn extends React.Component {
    state = {
        email: 'a@d.com',
        password: '123456'
      }
      buttonState = {
        loggedIn: false
      }
      formState = {
        signup: false
      }
    
       firebaseSignIn = (email, password) => {
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
       
       }
    
    
      firebaseSignOut = (e) => {
        fire.auth().signOut().then(() => {
          console.log('User has signed out');
        })
      }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.id); 
        switch(e.target.id){
          case 'login':
            this.firebaseSignIn(this.state.email, this.state.password)
            this.findCreateUserInRails()
            break;
          case 'logout':
            this.firebaseSignOut()
            break;
          default:
            return null
        } 
      }
    
      
       findCreateUserInRails = () => {
          const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }
          
         fetch('http://localhost:3000/user', reqObj)
          .then(resp => resp.json())
          .then(respData  => {
           this.props.addUserSuccess(respData)
           this.props.history.push('/home')
          })
       }
    
    
      render(){
        const styleSheet = {
          minHeight: '75vh',
          boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)',
          background: ' radial-gradient(ellipse at center,rgba(128, 128, 128, 1) 0%, rgba(128, 128, 128, 0.9) 10%, rgba(0, 0, 0, 0.9) 100%'
            
            
        }
          return (
              <Container className="d-flex align-items-center justify-content-center" style={styleSheet}> 
              <div className="w-100" style={{maxWidth: '400px'}}> 
              <Card className="text-center" style={{ width: '25rem', height: '25rem' }}>
              <Form onClick={this.handleSubmit}>
              <Card.Header>Sign In</Card.Header>
              <Card.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email}onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
               </Form.Group>
               <Form.Text className="text-muted">
                  Create a new account here...<NavLink to="/">Sign Up</NavLink>
                </Form.Text>
               </Card.Body>
               <Button variant="primary outline-dark" id="login" type="click">
                 Login
               </Button>
               <Button variant="primary outline-dark" id="logout" type="click">
                 Log out
               </Button>
             </Form>
             </Card>
             </div>
             </Container>      
            )
           };
    }
    
    const mapDispatchToProps = {
        addUserSuccess
    }
    

export default connect(null, mapDispatchToProps)(SignIn);