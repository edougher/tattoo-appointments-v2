//export function authListener(){
//    fire.auth().onAuthStateChanged(user => {
//      if(user){
//        console.log(user.email);
//        fetchSignedInUserInfo(user.email)
//        getOpenDates()
//      } else {
//        console.log('No User Signed In');
//        this.props.history.push('/signin')
//      }
//      
//    })