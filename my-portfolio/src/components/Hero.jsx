import React from "react";
import styled from "styled-components";
import imgGithub from "../images/github.png";
import imgArrow from "../images/arrow.svg";

export default function Hero() {
  return (
    <Section>
      <h1>Hi, I'm Vinita</h1>
      <div className="designation">Software Developer, Technical Lead</div>
      <a href="https://github.com/vinitanandode" target="_blank">
        <img className="github__logo" src={imgGithub} />
        Checkout my Github
        <img className="arrow__logo" src={imgArrow} />
      </a>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  /* border: 1px solid red; */

  h1 {
    margin: 100px 0 20px 0;
  }

  .designation {
    color: #4b5563;
    margin: 5px 0 30px 0;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    padding-right: 20px;
    text-decoration: none;

    .github__logo {
      padding: 3px;
      width: 40px;
      height: 40px;
    }

    .arrow__logo {
      padding-left: 5px;
      transition: 0.3s ease-in-out;
      width: 20px;
      height: 20px;
    }

    &:hover {
      .arrow__logo {
        transform: translateX(0.5rem);
      }
    }
  }
`;
