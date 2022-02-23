import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Copyright from "./Copyright";

export default function MyPortfolio() {
  return (
    <Section>
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
      <Copyright />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
