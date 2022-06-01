import styled from "styled-components";
import React from "react";

export default function ToDoItem({
  taskData,
  setCompleteState,
  setDelete,
  setArchieved,
  isComplete,
}) {
  return (
    <SingleTask isComplete={taskData.isComplete}>
      <p>{taskData.name}</p>
      <button onClick={() => setCompleteState(taskData.id)}>
        {isComplete ? "Complete" : "Uncomplete"}
      </button>
      <button
        onClick={() =>
          isComplete ? setArchieved(taskData.id) : setDelete(taskData.id)
        }
      >
        {isComplete ? "Archive" : "Delete"}
      </button>
    </SingleTask>
  );
}

const SingleTask = styled.article`
  margin: 1em auto;
  width: 25em;
  display: flex;
  justify-content: space-evenly;
  background: ${(props) => (props.isComplete ? "green" : "red")};

  box-shadow: 2px 2px 10px darkslategray;
  border: 1px solid black;
  border-radius: 5px;

  p {
    padding: 0 1em;
  }
`;
