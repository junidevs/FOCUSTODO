import React from 'react'
import {signOut,signIn} from '../actions/index';
import {connect} from 'react-redux'

const LoginPage =({signInGoogleHandler,isSignedIn})=> {

    if(isSignedIn===null){
        return(
            <div style={{height:'100vh'}} className="ui active centered  loader"></div>
        );
    }
    return(
        <div className="login_Container">
            <h1 className="welcome_Title">Welcome in Focus TODO</h1>
            <h3 className="short_desc_LoginPage">Check what you can do with us</h3>
            <button onClick={signInGoogleHandler} className="ui green google button"> Sign in with google</button>
        </div>
    );
    
}
const mapStateToProps =(state) =>{
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signOut,signIn})(LoginPage);
