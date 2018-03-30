import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';


class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(({ name, label }, i) => (
            <Field key={i} type="text" name={name} label={label} component={SurveyField} />
        ));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next
                 <i className="material-icons right">done</i></button>
                </form>
            </div>
        );
    }
}

function validate(values) {
   const errors = {};
   
   errors.recipients = validateEmails(values.recipients || '');

   FIELDS.forEach(({name, label, required}) => {
       if(required && !values[name]) {
           errors[name] = `You must provide ${label}`
       }
   });

   

   return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);

