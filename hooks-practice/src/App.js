import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Welcome!");
 const [data, setData] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => setData(data.message))
    .catch(err => console.log('oh noes!', err))
  }, [])

  const checkPositiveNum = () => {
    score > 0 ? setScore(score - 1) : setScore(0)
  }

  return (
    <>
      <div className="App">
        <div className="App">
        <img src={data} style={{width: '100%'}} alt="A random dog breed" />
        </div>
          <h1>{message}</h1>
          <h1>{score}</h1>
          <button
            onClick={() => {
              setScore(score + 1);
              setMessage("You Clicked Increment!");
            }}
          >
            click to increment
          </button>

          <button
            style={{ marginTop: "10px" }}
            onClick={() => {
              checkPositiveNum()
              setMessage("You Clicked Decrement!");
            }}
          >
            click to decrement
          </button>

          <button
            style={{ marginTop: "10px" }}
            onClick={() => {
              setScore(0);
              setMessage("You Clicked Reset!");
            }}
          >
            click to reset score
          </button>
      </div>

    </>
  );
}

export default App;
