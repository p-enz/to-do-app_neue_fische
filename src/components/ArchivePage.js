import React from "react";
import ArchivedToDo from "./ArchivedToDo";
import ToDoItem from "./ToDoItem";

export default function ArchivePage({ archive }) {
  return (
    <>
      <h2>Archive</h2>
      {archive
        .filter((task) => task.isArchieved)
        .map((task) => {
          return <ArchivedToDo name={task.name}></ArchivedToDo>;
        })}
    </>
  );
}
