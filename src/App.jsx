import { useState } from 'react'
import './App.css'

const responses = [
  "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

const App = () => {
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    setAnswer(responses[randomIndex]);
  };

  const resetAnswer = () => {
    setAnswer("");
  };

  return(
    <div className='App'>
      <h1>Magic 8-Ball</h1>
      <div className='eightball'>
        <div className='response'>{answer || "Ask a question"}</div>
      </div>
      <button onClick={getAnswer}>Shake the 8-Ball</button>
      <br />
      <br />
      <button className="reset-button" onClick={resetAnswer}>Reset</button>
    </div>
  );
};

export default App;
