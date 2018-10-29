import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = values => {
  console.log(values);
};

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
);

const AddEventForm = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        if (!values.lastName) {
          errors.lastName123 = 'Required';
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
            <Error name="firstName" />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
            <Error name="lastName" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="button" onClick={form.reset} disabled={submitting}>
              Reset
            </button>
          </div>
        </form>
      )}
    />
  </div>
);

export default AddEventForm;
