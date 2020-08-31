import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 990px) {
    padding: 0 19px;
  }
`;

const Container = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Container;
