import React,{useEffect} from 'react'
 import Modal from '../Modal';
 import history from '../../history';
 import {getTask,deleteTask} from '../../actions/index';
 import {connect}  from 'react-redux'
 import {Link } from 'react-router-dom';

const DeleteTask = ({todos,getTask,deleteTask,match})=> {

    useEffect(()=>{
        //get the id parameter from url
        getTask(match.params.id)    
    },[]);

    const actions = (
         <>
             <button onClick={()=>deleteTask(match.params.id)} className="ui button positive">Yes</button>
             <Link to='/' className="ui button">Cancel</Link>
         </>
    );

    const renderContent = ()=>{
        if(!todos){
            return 'Are you sure you want to delete this task'
        }
        return `Are you sure you want to delete this task: ${todos.title}`
    }
    return <Modal title={"Did you completed this task ?"} description={renderContent()} actions={actions} onDismiss={()=>history.push('/')} />
    
}
const mapStateToProps = (state,ownProps) => {
    return{
        todos:state.todos[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{getTask,deleteTask})(DeleteTask);
