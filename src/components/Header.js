import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.header`
  display: grid;
  grid: 1fr / repeat(2, 1fr);
  gap: 38px;
  margin: 109px 0 96px 0;

  @media (max-width: 990px) {
    margin: 17px 0 60px 0;
    grid: repeat(2, auto) / 1fr;
  }
`;

const Title = styled.h1`
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
  letter-spacing: -0.045em;
  margin: 0;

  @media (max-width: 990px) {
    margin: 0;
    grid: 1fr 1fr / 1fr;
  }
`;

const Info = styled.div`
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

const Header = ({ children }) => (
  <Wrapper>
    <Title>The creative crew</Title>
    <Info>
      <h3>Who we are</h3>
      <p>
        We are team of creatively diverse. driven.
        innovative individuals working in various locations
        from the world.
      </p>
    </Info>
  </Wrapper>
);

export default Header;
