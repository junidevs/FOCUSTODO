import React from 'react'
import {Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
export default function FreeDay() {

    const actions = (
        <>
            <button onClick={()=>(match.params.id)} className="ui button positive">Yes</button>
            <Link to='/' className="ui button">Cancel</Link>
        </>
   );
    return (
        <>
            
        </>
    )
}
