import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Section id="about">
      <h1>About Me</h1>
      <div className="aboutme__rowone">
        Hi there! My name is Vinita. You can call me a developer, technology
        anthusiast, system designer or a coder. My interest in web development
        started back in 2010, when I started learning .Net, SQL Server and C#.
        Futher more, became an expert in making Web API. To extend my interest,
        later I explored front-end technologies, learned HTML, CSS, Javascript
        and discovered React JS, a javascript framework library which is largely
        adopted by many developers. This framework completely changed my way to
        look at a website. To make things easy and hasel free, I started
        exploring Microsoft Azure. To successfully build a scalable, robust &
        optimized websites, knowledge of back-end, front-end and cloud
        technologies helped me to developed different websites.
      </div>
      <div className="aboutme__rowtwo">
        Today, I work at LTI as a Technical Lead, designing systems using
        different technologies. I manage a team of 12 full time engineers. I am
        usually self taught and try help people solving easy & complex problems.
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 100px 0 50px 0;
  /* border: 1px solid red; */

  h1 {
    padding: 0 0 20px 0;
  }

  .aboutme__rowone,
  .aboutme__rowtwo {
    line-height: 1.5;
  }

  .aboutme__rowone {
    padding: 0 0 30px 0;
  }
`;
