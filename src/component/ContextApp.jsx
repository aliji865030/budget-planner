import React, { useState } from 'react'
import { createContext } from 'react'


export const ContextBudget = createContext();

const ContextApp = (props) => {

    const [budget, setBudget] = useState(2000);
    const [remainingBudget, setRemainingBudget] = useState(budget);
    const [spentBudget, setSpentBudget] = useState(0);


  return (
    <div>
        <ContextBudget.Provider value={{budget,setBudget,remainingBudget,setRemainingBudget,spentBudget,setSpentBudget}}>
            {props.children}
        </ContextBudget.Provider>
      
    </div>
  )
}

export default ContextApp;
