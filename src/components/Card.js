import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.article`
  position: relative;
  padding-right: 26px;

  img {
    display: inherit;
    width: 100%;
  }

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    margin: 15px 0 20px 0;
  }

  .role {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;

    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #000000;
    transform: rotate(90deg);
    white-space: nowrap;
  }
`;

const Card = ({ data }) => {
  const photo = require(`../assets/img/${data.img}`);

  return (
    <Wrapper>
      <img src={photo} alt="Bill Mahoney" />
      <span className="role">{data.role}</span>
      <h2>{data.name}</h2>
    </Wrapper>
  );
};

export default Card;
