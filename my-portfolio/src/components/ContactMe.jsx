import React from "react";
import styled from "styled-components";

export default function ContactMe() {
  return (
    <Section>
      <h1 id="contactme">Contact Me</h1>
      <div className="contactmetext">
        I’m not currently looking for any new opportunities, however my inbox is
        always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </div>
      <a href="mailto:vinita.nandode@gmail.com">Hit me an email</a>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 50px 0 50px 0;
  /* border: 1px solid red; */

  h1 {
    padding: 0 0 20px 0;
  }

  .contactmetext {
    padding: 0 0 30px 0;
  }

  a {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    border: none;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background-color: #2b2929;
    }
  }
`;
