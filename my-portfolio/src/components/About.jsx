import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Section>
      <h1>About Me</h1>
      <div className="aboutme__rowone">
        Hi there! My name is Vinita. You can call me a developer, technology
        anthusiast, system designer or a coder. My interest in web development
        started back in 2010, when I started learning HTML, CSS and Javascript.
        In late 2020, I discovered Tailwind CSS, and was amazed! Tailwind CSS
        completely changed the way I looked at CSS forever. No longer did I have
        to worry about editing large, messy, and unorganized stylesheets. With
        Tailwind CSS, all the styling was done in the HTML.
      </div>
      <div className="aboutme__rowtwo">
        Today, I run Easy UI, a community all about building websites, mostly
        from a frontend perspective. I also co-founded the STEM Blog, a blog
        about STEM (Science, tech, engineering, and math). I am planning to
        launch more projects soon.
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
