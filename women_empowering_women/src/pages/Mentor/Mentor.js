import React from "react";
import { Formik } from "formik"
import {
  StyledForm,
  StyledDetails,
  Button,
  Title,
  Details
} from "./MentorStyle";

function Mentor() {
  return (
    <Formik>
    <StyledForm>

    <Title>
        <h1>Find a Mentor</h1>
        <h2>Be part of an online mentor community that spans across the globe.</h2>
    </Title>

      <Details>
        <StyledDetails name="name" type="text" placeholder="Full Name" />
        <StyledDetails name="email" type="text" placeholder="Email" />
        <StyledDetails name="number" type="text" placeholder="Phone Number" />
        <StyledDetails name="address" type="text" placeholder="Physical Address" />
      </Details>
    
      <Button type="submit">Submit</Button>
    </StyledForm>
    </Formik>
  );
}

export default Mentor;
