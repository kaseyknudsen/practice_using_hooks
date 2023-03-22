import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Welcome!");
  return (
    <>
      <div className="App">
        <h1>{message}</h1>
        <h1>{score}</h1>
        <button onClick={
          () => {
            setScore(score + 1)
            setMessage("You Clicked Increment!")
          }
          }>click to increment</button>
          <button style={{marginTop: '10px'}} onClick={
          () => {
            setScore(score - 1)
            setMessage("You Clicked Decrement!")
          }
          }>click to decrement</button>
      </div>
      <div></div>
    </>
  );
}

export default App;
