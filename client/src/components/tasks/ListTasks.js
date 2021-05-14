import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions/index';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import TaskRendererHelper from './TaskRendererHelper';
import moment from "moment-timezone";

const ListTasks = ({tasks,fetchTasks}) => {

    const [date, setDate] = useState(()=>{
        //small workaround for CET timezone
        const UTC_timezone = new Date();
       return UTC_timezone.setHours(UTC_timezone.getHours() + 2 );
        
    });
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");
    const regexHandleDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    //in this case I want to render fetchTasks only once so i put blank array to get the full list of tasks 
    useEffect(()=>{
        moment.tz.setDefault("Europe/Poland");
        fetchTasks();    
    
    },[])

    return (
        <div className="task_List_Container">
       
         
       <div className="__shortInfo">Tasks for selected date</div>
         
            <div className="__calendar_Box">
                <DatePicker
                    selected={date}
                    dateFormat='yyyy-MM-dd'
                    onChange={date => setDate(date)}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                    inline
                />
                     <Link className="ui button __create_newTask_button" to="todos/new">
              Create a new Task
            </Link>
            </div>
          <div className="tasks_Container">
       
                <TaskRendererHelper date={date} regexHandleDate={regexHandleDate} tasks={tasks}/>
            </div>
  
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        tasks:Object.values(state.todos)
    }    
}

ListTasks.defaultProps={
    tasks:{}
}
export default connect(mapStateToProps,{fetchTasks})(ListTasks);