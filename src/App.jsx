import { useState } from 'react'
import './App.css'
import Form1 from './forms/Form1'
import Form2 from './forms/Form2'
import Form3 from './forms/Form3'

function App() {
  const formCount = 3;
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const handleStep = (e, option) => {
    e.preventDefault();
    if (option === "increment") {
      setCurrentStepIndex(prevStep => {
        if (prevStep < formCount) return prevStep + 1;
        else return prevStep;
      })
    } else {
      setCurrentStepIndex(prevStep => {
        if (prevStep > 1) return prevStep - 1;
        else return prevStep;
      })
    }
  }

  return (
    <>
      <div className='App'>
        <div className='formContainer'>
          <div className='stepIndicator'>
            {`${currentStepIndex} / ${formCount}`}
          </div>
          <div>
            {currentStepIndex === 1 && <Form1 />}
            {currentStepIndex === 2 && <Form2 />}
            {currentStepIndex === 3 && <Form3 />}
          </div>
          <div className='buttonContainer'>
            <button className='button' type='button' onClick={(e) => handleStep(e, "decrement")}>Back</button>
            <button className='button' type='button' onClick={(e) => handleStep(e, "increment")}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
