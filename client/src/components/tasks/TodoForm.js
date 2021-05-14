import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

class TodoForm extends Component {

    renderError({touched,error}){
        console.log(touched,error)
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    //helper for standard text input
    inputHelper = ({input,label,meta})=>{
        //console.log(meta);
        const customClass = `field ${meta.error} && ${meta.touched} ? 'error' : '' `
        return (
            <div className={`field_Box_Form ${customClass}`}>
                <label className="label_Form">{label}</label>
                <input className="input_Form_Todo" maxLength='20' {...input }/>
            <div>{this.renderError(meta)}</div>
            </div>
           
        );
    }

    //helper for date input
    inputHelperDate = ({input,label,meta})=>{

        const customClass = `field ${meta.error} && ${meta.touched} ? 'error' : '' `
        return (
            <div className={`field_Date_Box ${customClass}`}>
                <label className="label_Form">{label}</label>
                <input className="input_Form_Todo" maxLength='10' placeholder="yyyy-MM-dd" {...input }/>
                <div>{this.renderError(meta)}</div>
            </div>
           
        );
        
    }

    // helper for select input 
    renderSelectField = ({input,label,touched, error,children,...custom}) => (
        <FormControl error={touched && error}>
          <InputLabel htmlFor="prio">❗❗❗</InputLabel>
          <Select
            native
            {...input}
            {...custom}
            inputProps={{
              name: 'prio',
              id: 'prio'
            }}
          >
            {children}
          </Select>
        
        </FormControl>
      )

    onHandleSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
    }
    
    render(){
       console.log(this.props)
        return (
            <div>
              <form className="ui form error" onSubmit={this.props.handleSubmit(this.onHandleSubmit)}>
                  <Field name="title"  component={this.inputHelper} label="Enter title"/>
                  <Field name="description" component={this.inputHelper} label="Enter description" />
                  <h3 className="label_Form">How it is important ?</h3>
                  <Field  name="priority" component={this.renderSelectField} label="Enter Priority">
                        <option />
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                  </Field>
                  <Field name="date" component={this.inputHelperDate} label="Specify your date" />
                 <button className="ui button __create_newTask_button">Save updates</button>
              </form>
            </div>
        )
    }
}

const validate = (formValues) =>{
    //blank error object to update this via any kind of error from form
    const errors = {};

    if(!formValues.title){
        errors.title = 'I think title would be useful 😃';
    }
    
    if(!formValues.description){
        errors.description = 'Tell me more what is about this 🤔';
    }
    if(!formValues.priority){
        errors.priority = 'Please specify priority ✨';
    }
    if(!formValues.date){

        errors.date = 'Please specify the date for this in above format 📅';
    }
    return errors;
}

export default  reduxForm({
    form:'streamForm',
    validate
})(TodoForm);
