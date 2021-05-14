import 
{
    SIGN_IN,
    SIGN_OUT,
    CREATE_TASK,
    FETCH_TASKS,
    DELETE_TASK,
    GET_TASK,
    UPDATE_TASK,
} from './types';

import tasks from '../api/tasks';
import history from '../history'

export const signIn = (id)=>{
    return {
        type:SIGN_IN,
        payload:id
    }
}

export const signOut = ()=>{
    return {
        type:SIGN_OUT
    }
}

export const createTask = formValues =>async (dispatch) =>{
    const response = await tasks.post("/todos",formValues);

    dispatch({
         type:CREATE_TASK,
         payload:response.data 
    });
        history.push('/');
}

export const fetchTasks = () => async dispatch => {
    const response = await tasks.get('/todos');
 
    dispatch({
        type:FETCH_TASKS,
        payload:response.data 
    }); 
}


export const getTask = (id) => async dispatch => {
    const response = await tasks.get(`/todos/${id}`);
 
    dispatch({
        type:GET_TASK,
        payload:response.data 
    }); 
}

export const deleteTask = (id) => async dispatch => {
    await tasks.delete(`/todos/${id}`);
    dispatch({
        type:DELETE_TASK,
        payload:id
    })
    history.push('/');
 }

 export const updateTask = (id,formValues) => async dispatch => {
    const response = await tasks.patch(`/todos/${id}`,formValues);
 
 dispatch({
     type:UPDATE_TASK,
     payload:response.data 
 });
 history.push('/');
 }
 