import React,{Component} from 'react'
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import {createTask} from '../../actions/index';

class CreateTask extends Component {
  
  
    //formValues property contains all of values from our form FIELD components via name property
    //also we should remeber redux-form react on each interaction , for example onChange value , when we leave input etc....
    onHandleSubmit = (formValues) =>{
        console.log(formValues);
        this.props.createTask(formValues);
    }
    render(){
       console.log(this.props)
        return (
            <div className="createTask_Container">
                <h3 className="createTask_Title">Add new Task</h3>
                <TodoForm onSubmit={this.onHandleSubmit} />  
            </div>
        )
    }
}

export default connect(null,{createTask})(CreateTask);
//co bedzie zawieral formularz
// title,description,priority,day and month 