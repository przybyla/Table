import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

const FormWrapper = styled.div`
  position: absolute;
  left: 15px;
  bottom: 75px;
  width: calc(100% - 30px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ced7db;
  border-radius: 4px;
  height: 100px;
  .input {
    width: 50%;
    height: 45px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
    color: #707070;
    padding: 5px;
    box-sizing: border-box;
  }
  .error {
    position: absolute;
    bottom: 0;
    font-size: 0.75rem;
    color: #f92c32;
  }
`;
const Button = styled.button`
  color: #fff;
  background: #37474f;
  width: 100px;
  height: 45px;
  border-radius: 4px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  color: #37474f;
`;

const onSubmit = values => {
  console.log(values);
};

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span className="error">{error}</span> : null
    }
  </Field>
);

const EventForm = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Field
              name="email"
              className="input"
              component="input"
              type="email"
              placeholder="email"
            />
            <Error name="eventName" />
            <Button type="submit" disabled={submitting}>
              Sign up
            </Button>
          </FormWrapper>
        </form>
      )}
    />
  </div>
);

export default EventForm;
