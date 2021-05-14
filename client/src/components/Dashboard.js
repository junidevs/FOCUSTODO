import React from 'react'
import {signOut,signIn} from '../actions/index';
import {connect} from 'react-redux'
import {Router,Route,Link} from 'react-router-dom';
import history from '../history'
import CreateTask from './tasks/CreateTask';
import DeleteTask from './tasks/DeleteTask'
import EditTask from './tasks/EditTask'
import ListTasks from './tasks/ListTasks';
import Header from './Header.js'

const Dashboard =({signOutGoogleHandler,isSignedIn,username}) => {
    if(isSignedIn){
        return(
        <div className="dashboard_Container">
   
                <Router history={history}>
                <Header username={username} signOutGoogleHandler={signOutGoogleHandler} />
                    <Route exact path="/" component={ListTasks}/>
                    <Route  path="/todos/new" component={CreateTask} />
                    <Route  path="/todos/edit/:id" component={EditTask} />
                    <Route  path="/todos/delete/:id" component={DeleteTask} />
                </Router>  
        </div>
       )}
}

const mapStateToProps =(state) =>{
    return {isSignedIn : state.auth.isSignedIn}
}
Dashboard.defaultProps={
    username:'Unknown'
}
export default connect(mapStateToProps,{signOut,signIn})(Dashboard);

