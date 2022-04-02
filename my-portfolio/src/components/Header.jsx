import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Section>
      <div className="home">
        <a href="#hero">@Vinita Nandode</a>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
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
  min-height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  /* border: 1px solid red;   */
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background: white;
  color: black;
  font-size: 14px;

  .home {
    padding: 0 20px 0 30px;
    cursor: pointer;

    a {
      font-weight: 800;
      font-size: 20px;
      text-decoration: none;
      color: black;
    }
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
        text-decoration: none;
        color: black;

        a:visited {
          color: black;
        }
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
