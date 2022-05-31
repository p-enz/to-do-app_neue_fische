import NewToDo from "./components/NewToDo";
import ToDoItem from "./components/ToDoItem";
import Header from "./components/Header";
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [allTasks, setAllTasks] = useState(() => {
    const taskList = localStorage.getItem("task-list");
    if (taskList) {
      return JSON.parse(taskList);
    } else {
      return [];
    }
  });
  console.log(allTasks);

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(allTasks));
  }, [allTasks]);

  function addNewTask(taskName) {
    const newTask = {
      id: nanoid(),
      name: taskName,
      isComplete: false,
      isArchieved: false,
    };
    setAllTasks([...allTasks, newTask]);
  }

  function setCompleteState(id, newIsComplete) {
    const completedTasks = allTasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: newIsComplete };
      } else {
        return task;
      }
    });
    setAllTasks(completedTasks);
  }

  return (
    <div className="App">
      <Header></Header>
      <NewToDo setNewTask={addNewTask}></NewToDo>
      {allTasks.map((task) => {
        return (
          <ToDoItem
            key={task.id}
            taskData={task}
            setCompleteState={setCompleteState}
          ></ToDoItem>
        );
      })}
    </div>
  );
}

export default App;
