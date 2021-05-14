import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';
import {getTask,updateTask} from '../../actions/index'
import TodoForm from './TodoForm';
import pencilEdit from '../../styles/pencil-edit.png';

const EditTask = ({todos,updateTask,match,getTask}) => {
 
    useEffect(()=>{

     getTask(match.params.id);
  
    },[])

   const onHandleSubmit = (formValues) =>{
       updateTask(match.params.id,formValues)
    }

    return (
        <div className="edit_Task_Container">
           <h3 className="edit_Task_Title">Edit your task <img src={pencilEdit} alt="edit" /></h3>
           <TodoForm className="select_input_Form" onSubmit={onHandleSubmit} initialValues={_.pick(todos,'title','description','priority','date')} />
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    return {
        todos:state.todos[ownProps.match.params.id],
    }
}
export default connect(mapStateToProps,{getTask,updateTask})(EditTask);
