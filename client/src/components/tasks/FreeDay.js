import React from 'react'
 import Modal from '../Modal';
 import history from '../../history';
 import {Link } from 'react-router-dom';

const DeleteTask = ({date,setShowFreeDay})=> {
    const dataString = JSON.stringify(date).substr(1,10);

    const actions = (
        // what should be implemented: Check for free day against task. if freeday has been shceduled user shouldn't be able to add tasks
         <>
             <button 
                 onClick={()=> {
                localStorage.setItem('freeday',dataString);
                return setShowFreeDay(false)
                }} 
                 className="ui button positive">Yes</button>
                    <Link 
                    onClick={()=> {return setShowFreeDay(false)}}
                    to='/' 
                    className="ui button">Cancel</Link>
         </>
    );

    const renderContent = ()=>{
        
            return `Book free day  for ${dataString} ?`
        
       
    }
    return <Modal title={`${dataString}`} description={renderContent()} actions={actions} onDismiss={()=>history.push('/')} />
    
}


export default (DeleteTask);
