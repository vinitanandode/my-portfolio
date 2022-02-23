import React from "react";
import styled from "styled-components";
import imgSourceCode from "../images/sourcecode.svg";

export default function Project({ title, url, image, repo }) {
  return (
    <Section>
      <div className="projectscreenshot">
        <a href={url} target="_blank">
          <img src={image} />
        </a>
      </div>
      <div className="projectdetails">
        <div className="title">{title}</div>
        <a title="Source Code" href={repo} target="_blank">
          <img src={imgSourceCode} />
        </a>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  /* border: 1px solid grey; */
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;

  .projectscreenshot {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .projectdetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 15px 0 15px;

    .title {
      font-weight: 600;
    }

    a {
      background-color: black;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 5px;
      width: 35px;
      height: 35px;
      cursor: pointer;

      img {
        width: 80%;
        height: 80%;
        transition: 0.3s;
      }

      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
`;
