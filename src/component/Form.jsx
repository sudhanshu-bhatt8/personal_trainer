import React from 'react';
import styled from 'styled-components';

const ContactAndForm = styled.div`
  display: flex;
  height: 100%;
`;

const FormDetails = styled.div`
  margin: 5rem;
  margin-left: 2rem; /* Adjust the left margin as per your preference */
  padding: 2rem;
  
`;

const Heading = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Submit = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

export default function Form() {
  return (
    <ContactAndForm>
      <FormDetails>
        <Heading>
        <h1>Got A Question</h1>
          <h3>Feel free to get in touch to get your answer</h3>
         
        </Heading>
        <form action='https://formspree.io/f/mdorejje' method='POST'>
          <FormGroup>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </FormGroup>

          <FormGroup>
            <Input type="tel" id="phone" name="phone" placeholder="Phone Number" />
            <Input type="email" id="email" name="email" placeholder="Email Address" />
          </FormGroup>

          <FormGroup>
            <TextArea
              id="comment"
              name="comment"
              placeholder="Write something.."
              rows="4"
            ></TextArea>
          </FormGroup>

          <Submit>
            <Button type="submit">Submit</Button>
          </Submit>
        </form>
      </FormDetails>
    </ContactAndForm>
  );
}
