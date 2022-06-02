import React from "react";
import ArchivedToDo from "./ArchivedToDo";

export default function ArchivePage({ archive }) {
  return (
    <>
      <h2>Archive</h2>
      {archive
        .filter((task) => task.isArchieved)
        .map((task) => {
          return <ArchivedToDo key={task.id} name={task.name}></ArchivedToDo>;
        })}
    </>
  );
}
