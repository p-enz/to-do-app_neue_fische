import React, { useState } from "react";

export default function RandomPage({ randomTasks }) {
  const [randomTask, setRandomTask] = useState("");

  function getRandomTask(allTasks) {
    if (allTasks) {
      const randomTaskIndex = Math.floor(Math.random() * allTasks.length);
      setRandomTask(allTasks[randomTaskIndex].name);
    } else {
      setRandomTask("");
    }
  }
  return (
    <>
      <h2>RandomPage</h2>
      <button type="button" onClick={() => getRandomTask(randomTasks)}>
        Shuffle
      </button>
      <p>{randomTask}</p>
    </>
  );
}
