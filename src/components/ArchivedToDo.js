import React from "react";
import styled from "styled-components";

export default function ArchivedToDo({ name }) {
  return (
    <SingleTask>
      <p>{name}</p>
    </SingleTask>
  );
}

const SingleTask = styled.article`
  margin: 1em auto;
  width: 25em;
  display: flex;
  justify-content: space-evenly;
  background: green;

  box-shadow: 2px 2px 10px darkslategray;
  border: 1px solid black;
  border-radius: 5px;

  p {
    padding: 0 1em;
  }
`;
