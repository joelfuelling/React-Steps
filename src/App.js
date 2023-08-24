import './App.css';
import {useState} from 'react'

const buttonStyle = {backgroundColor: '#7950f2', color: '#fff'}

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



function App() {
  let [step, setState] = useState(1)

  function handlePrevious() {
    step -= 1
    setState(step)
  }

  function handleNext() {
    step += 1
    setState(step)
  }
  return (
    <>
      <div className="steps">
        <div className = "numbers"> 
          <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`${step >= 2 ? 'active' : ''}`}>2</div> 
          <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
      <p className="message">Step {step}: {messages[step -1]}</p>
        <div className ="buttons">
          <button 
          style={buttonStyle} 
          onClick={handlePrevious}>
            Previous
          </button>
          <button 
          style={buttonStyle} 
          onClick={handleNext}>
            Next
          </button>
        </div>

    </div>
    </>
  );
}

export default App;
