import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "./Card";

import data from "../assets/data.json";

const Wrapper = styled.div`
  display: grid;
  grid: 1fr / repeat(3, 1fr);
  column-gap: 60px;

  article:nth-child(3n - 1) {
    margin-top: 100px;
  }

  @media (max-width: 980px) {
    column-gap: 26px;
  }

  @media (max-width: 720px) {
    grid: 1fr / repeat(2, 1fr);

    article:nth-child(3n - 1) {
      margin-top: 0px;
    }

    article:nth-child(2n) {
      margin-top: 60px;
    }
  }
`;

const Cards = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    (async () => {
      await setTeam(data);
    })();
  }, []);

  return (
    <Wrapper>
      {team.map((person) => (
        <Card data={person} />
      ))}
    </Wrapper>
  );
};

export default Cards;
