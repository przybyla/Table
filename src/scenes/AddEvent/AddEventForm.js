import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  margin-bottom: 15px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  position: relative;
  .input {
    width: 50%;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #37474f;
    box-shadow: 0px 5px 25px -6px rgba(0, 0, 0, 0.75);
    color: #707070;
    padding: 5px;
    background: #ced7db;
    box-sizing: border-box;
  }

  .error {
    position: absolute;
    bottom: 0;
    font-size: 0.75rem;
    color: #f92c32;
  }
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

const AddEventForm = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.eventName) {
          errors.eventName = 'Required';
        }
        if (!values.adress) {
          errors.adress = 'Required';
        }
        if (!values.numberOfPlayers) {
          errors.numberOfPlayers = 'Required';
        }
        if (!values.game) {
          errors.game = 'Required';
        }
        if (!values.date) {
          errors.date = 'Required';
        }
        if (!values.hour) {
          errors.hour = 'Required';
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <InputWrapper>
              <Label>Event name</Label>
              <Field
                name="eventName"
                className="input"
                component="input"
                type="text"
                placeholder="Event name"
              />
              <Error name="eventName" />
            </InputWrapper>
            <InputWrapper>
              <Label>Adress</Label>
              <Field
                name="adress"
                className="input"
                component="input"
                type="text"
                placeholder="Adress"
              />
              <Error name="adress" />
            </InputWrapper>
            <InputWrapper>
              <Label>Number of players</Label>
              <Field
                name="numberOfPlayers"
                className="input"
                component="input"
                type="text"
                placeholder="Number of players"
              />
              <Error name="numberOfPlayers" />
            </InputWrapper>
            <InputWrapper>
              <Label>Game</Label>
              <Field
                name="game"
                className="input"
                component="input"
                type="text"
                placeholder="Game"
              />
              <Error name="game" />
            </InputWrapper>
            <InputWrapper>
              <Label>Date</Label>
              <Field
                name="date"
                className="input"
                component="input"
                type="date"
                placeholder="Date"
              />
              <Error name="date" />
            </InputWrapper>
            <InputWrapper>
              <Label>Starts</Label>
              <Field
                name="hour"
                className="input"
                component="input"
                type="text"
                placeholder="Starts"
              />
              <Error name="hour" />
            </InputWrapper>
          </FormWrapper>

          <ButtonsWrapper>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="button" onClick={form.reset} disabled={submitting}>
              Reset
            </button>
          </ButtonsWrapper>
        </form>
      )}
    />
  </div>
);

export default AddEventForm;
