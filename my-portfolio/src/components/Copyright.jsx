import React from "react";
import styled from "styled-components";

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <Section>
      © Copyright {currentYear} Vinita Nandode — All rights reserved
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 50px 0 50px 0;
  padding-top: 50px;
  border-top: 1px solid #d1cccc;
  color: #4b5563;
`;
