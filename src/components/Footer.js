import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  margin-top: 74px;
  @media (max-width: 768px) {
    margin: 58px 0 0px 0;
  }
  a {
    display: block;
    position: relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #a9a9a9;
    &::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0%;
      height: 50%;
      background: rgba(0, 0, 0, 0.15);
      transition: width ease 0.5s;
    }
    &:hover {
      color: black;
      &::after {
        width: 100%;
      }
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <a href="https://portfolio.devchallenges.io/arturo-enriquez">
      @arturo-enriquez DevChallenges.io
    </a>
  </Wrapper>
);

export default Footer;
