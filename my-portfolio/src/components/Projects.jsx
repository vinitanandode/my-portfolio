import React from "react";
import styled from "styled-components";
import Project from "./Project";
import imgP1 from "../images/linkedin2.gif";
import imgP2 from "../images/todo2.gif";
import imgP3 from "../images/mydashboard2.gif";
import imgt1 from "../images/t3.jpg";

const projects = [
  {
    image: imgP1,
    title: "Linkedin Clone",
    url: "https://vinitanandode.github.io/linkedin-clone/",
    repo: "https://github.com/vinitanandode/linkedin-clone",
  },
  {
    image: imgP2,
    title: "My to-do List App",
    url: "https://vinitanandode.github.io/to-do/",
    repo: "https://github.com/vinitanandode/to-do",
  },
  {
    image: imgP3,
    title: "My Dashboard",
    url: "https://vinitanandode.github.io/my-dashboard/",
    repo: "https://github.com/vinitanandode/my-dashboard",
  },
];

export default function Projects() {
  return (
    <Section>
      <h1>Projects</h1>
      <div className="project">
        {projects &&
          projects.map((p, key) => (
            <Project
              key={key}
              image={p.image}
              title={p.title}
              url={p.url}
              repo={p.repo}
            />
          ))}
      </div>
      {/* <img src={imgt1} /> */}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 50px 0 50px 0;

  h1 {
    padding: 0 0 20px 0;
  }

  .project {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
