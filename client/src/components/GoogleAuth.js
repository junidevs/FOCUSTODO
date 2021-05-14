import {Component} from 'react';
import {signOut,signIn} from '../actions/index';
import {connect} from 'react-redux'
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

class GoogleAuth extends Component {
    
    componentDidMount(){
        //alternative for this string we could read this ID from .env
            const clientId='1024729504927-ph0kjnqjtklse9a6vnti8ccn35aga7e0.apps.googleusercontent.com';
                 window.gapi.load('client:auth2',()=>{
                window.gapi.client.init({
                clientId,
                scope:'email'

            }).then(()=>{
                //this.auth gives us an access to below method
                this.auth = window.gapi.auth2.getAuthInstance();
                // this function is waiting for changes 
                this.onAuthChange(this.auth.isSignedIn.get());
                // this method waiting for changes in state
                this.auth.isSignedIn.listen(this.onAuthChange);

            })
        });
    }
    onAuthChange = (isSignedIn)=>{
        //these props comes from connect HOC these two functions you can find in /actions directory
        if(isSignedIn){   
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();   
        }
    }
    //helper methods to authentication
    signInGoogleHandler =()=>{
        this.auth.signIn();
    }

    signOutGoogleHandler =()=>{
        this.auth.signOut();
    }

    render(){
        return(
        <>
            {
             this.props.isSignedIn 
             ?  
                 <Dashboard username={this.auth.currentUser.get().ft.qU}  signOutGoogleHandler={this.signOutGoogleHandler} /> 
             : 
                 <LoginPage signInGoogleHandler={this.signInGoogleHandler}/> 
             }
        </>
    );
  }
}
const mapStateToProps = state =>{
    return {isSignedIn : state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signOut,signIn})(GoogleAuth);
