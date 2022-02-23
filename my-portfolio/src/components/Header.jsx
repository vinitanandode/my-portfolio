import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Section>
      <div className="home">
        <h2>@Vinita Nandode</h2>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a href="#contactme">Contact Me</a>
        </li>
      </ul>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  min-height: 50px;
  /* border: 1px solid red; */
  margin-top: 20px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 14px;

  .home {
    padding: 0 20px 0 30px;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 50%;
    justify-content: right;
    gap: 2rem;
    font-weight: 600;

    li {
      padding: 0 30px 0 15px;
      cursor: pointer;
      color: black;

      a {
        padding: 2px;
      }

      img {
        width: 30px;
        height: 30px;
        cursor: pointer;

        svg {
          &:hover {
            fill: #4e4e4e;
          }
        }
      }
    }
  }
`;
