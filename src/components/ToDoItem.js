import styled from "styled-components";
import React from "react";

export default function ToDoItem({ taskData, setCompleteState }) {
  return (
    <SingleTask>
      <p>{taskData.name}</p>
      <button
        onClick={() => setCompleteState(taskData.id, !taskData.isComplete)}
      >
        {taskData.isComplete ? "Completed" : "Uncomplete"}
      </button>
      <button>archive</button>
    </SingleTask>
  );
}

const SingleTask = styled.article`
  margin: 1em auto;
  width: 25em;
  display: flex;
  justify-content: space-evenly;
  /*  ccolorchange does not work */
  background: ${(props) => (props.isComplete ? "green" : "red")};

  box-shadow: 2px 2px 10px darkslategray;
  border: 1px solid black;
  border-radius: 5px;

  p {
    padding: 0 1em;
  }
`;
