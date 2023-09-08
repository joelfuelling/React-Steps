import {useState} from 'react'
import Button from './Button.js'

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
export default function Steps({buttonStyle}) {
    // 1 - Add state variable.
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)
    // const [test, setTest] = useState({name: 'Joel'})
  
    // 3 - Update step variable.
    function handlePrevious() {
      if(step > 1) setStep((s) => s -1)
    }
  
    // 3 - Update step variable.
    function handleNext() {
      if(step < 3) {
        setStep((s) => s + 1)
        // setStep((s) => s + 1) Here, state will be called twice because we're using a callback to set it!
      }
  
      // step = step + 1 //! WRONG! This does not update state because setStep is not being called.
      // test.name = "Fred" //! This WILL update the state object test {name: "Joel"}, which is bad practice and very dangerous!
      // setTest({name: "Fred"})  //* Here we go! We're using state correctly to change the name to Fred in the re-render, not the actual object.
    }
    return ( 
      <>
      <div>
        <button className="close" onClick={() => setIsOpen((is) => !is) }>&times;</button>
        {isOpen && 
          <div className="steps">
            <div className = "numbers"> 
            {/* 2 - USE the state */}
              <div className={step >= 1 ? 'active' : ''} onClick={() => setStep(step > 1  ? step - 1 : step)}>1</div>
              <div className={step >= 2 ? 'active' : ''} onClick={() => setStep(2)}>2</div> 
              <div className={step >= 3 ? 'active' : ''} onClick={() => setStep(step < 3  ? step + 1 : step)}>3</div>
            </div>
          <p className="message">
            Step {step}: {messages[step -1]}
            {/* {test.name} */}
          </p>
            <div className ="buttons">
              <Button 
                style={buttonStyle} 
                  onClick={handlePrevious}
                  >
                <span>👈</span> Previous 
              </Button>
              <Button 
                style={buttonStyle} 
                  onClick={handleNext}
              >
                Next <span>👉</span>        
              </Button>
            </div>
          </div> 
        }
      </div>
      </>
    );
  }
  
  
  