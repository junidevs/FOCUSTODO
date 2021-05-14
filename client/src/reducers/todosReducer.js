import 
{
    CREATE_TASK,
    FETCH_TASKS,
    DELETE_TASK,
    GET_TASK,
    UPDATE_TASK,
} from '../actions/types';
import _ from 'lodash';


export default (state={} ,action) =>{
const {type,payload} = action;

switch(type){
    case   GET_TASK:{
        return {...state,[payload.id]:payload}
    }
    case UPDATE_TASK:
        {
            return {...state,[payload.id]:payload}
        }
        case FETCH_TASKS:
        {
           
            return {...state,..._.mapKeys(payload,'id')};
        }
        case CREATE_TASK:
        {
            return {...state,[payload.id]:payload}
        }

        case DELETE_TASK:
            {
                return _.omit(state,payload);
            }

        default:
            {
                return state;
            }
}
  
};
