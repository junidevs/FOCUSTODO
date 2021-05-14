import React from 'react'
import {Link} from 'react-router-dom'
import pencilEdit from '../../styles/pencil-edit.png';
import deleteIcon from '../../styles/delete.png';
import alertHighPrioTask from '../../styles/alert.png';

const TaskRendererHelper = ({tasks,regexHandleDate,date}) => {
     
    const prioritySorter = (keyValue, keyValue2) => {
        return (a, b) => {  
            if (a[keyValue] < b[keyValue]) {  
                return -1;  
            } else if (a[keyValue] > b[keyValue]) {  
                return 1;  
            }  
            else {
                if (a[keyValue2] > b[keyValue2]) {  
                    return 1;  
                } else if (a[keyValue2] < b[keyValue2]) {  
                    return -1;  
                } else {
                    return 0;
                }
            } 
        }  
    }
    
    //In this case as it was in task description from you I want to sort by descending priority 
    const sortedTasks = tasks.sort(prioritySorter("priority","id"));
             return sortedTasks.map(task =>{
    const dataString = JSON.stringify(date).substr(1,10);
        if(dataString === task.date && regexHandleDate.test(dataString)){
            return(
                <div key={task.id} className="__item_List">

                    <div className="--title_Item">
                        <h2 className="--task_Title">{task.title}</h2>
                        <div className="--info_Item">
                               
                        <h3 className="--data_info">  
                        Priority: {task.priority === '1' 
                                ? <img src={alertHighPrioTask} alt="edit task"/>
                                : [task.priority === '2'
                                ? 'Medium'
                                : 'Low']
                                }  </h3>
                            <h3 className="--data_info">Addition date:{task.date}</h3>
                        </div>
                    </div>
                    <div className="--description_Item">
                    Details: {task.description}
                    </div>
                     <div className="--manage_Item">
                             <Link to={`/todos/edit/${task.id}`} ><img className="icon_helperBox" src={pencilEdit} alt="edit task"/></Link>
                             <Link to={`/todos/delete/${task.id}`} ><img className="icon_helperBox" src={deleteIcon} alt="edit task"/></Link>
                        </div>        
                </div>
                    );           
            }
                else return null
})}

export default TaskRendererHelper;
