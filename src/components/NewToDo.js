import React, { useState } from "react";
import styled from "styled-components";

export default function NewToDo({ setNewTask }) {
  const [task, setTask] = useState("");

  return (
    <FormNewTask
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        if (!!task) {
          setNewTask(task);
          setTask("");
        } else {
          alert("Add some input");
        }
      }}
    >
      <label htmlFor="taskIn">Add new Task</label>
      <input
        placeholder="Task"
        id="taskIn"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      ></input>
      <button>Add</button>
    </FormNewTask>
  );
}

const FormNewTask = styled.form`
  margin: 1em auto;
  max-width: 25em;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 10px darkslategray;
`;
