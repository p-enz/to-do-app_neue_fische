import NewToDo from "./components/NewToDo";
import ToDoItem from "./components/ToDoItem";
import Header from "./components/Header";
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ArchivePage from "./components/ArchivePage";
import RandomPage from "./components/RandomPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [allTasks, setAllTasks] = useState(() => {
    const taskList = localStorage.getItem("task-list");
    if (taskList) {
      return JSON.parse(taskList);
    } else {
      return [];
    }
  });
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

  function setCompleteState(id) {
    const taskCompleted = allTasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setAllTasks(taskCompleted);
  }

  function setArchieved(id) {
    const archive = allTasks.map((task) => {
      if (id === task.id) {
        return { ...task, isArchieved: !task.isArchieved };
      }
      return task;
    });
    setAllTasks(archive);
  }

  function setDelete(id) {
    const deleteTask = [...allTasks];
    setAllTasks(deleteTask.filter((task) => !(task.id === id)));
  }

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NewToDo setNewTask={addNewTask}></NewToDo>
              {allTasks
                .filter((task) => !task.isArchieved)
                .map((task) => {
                  return (
                    <ToDoItem
                      key={task.id}
                      taskData={task}
                      isComplete={task.isComplete}
                      setCompleteState={() => setCompleteState(task.id)}
                      setArchieved={() => setArchieved(task.id)}
                      setDelete={() => setDelete(task.id)}
                    ></ToDoItem>
                  );
                })}
            </>
          }
        ></Route>

        <Route
          path="/archive"
          element={<ArchivePage archive={allTasks}></ArchivePage>}
        ></Route>
        <Route path="/randomTask" element={<RandomPage></RandomPage>}></Route>
      </Routes>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
