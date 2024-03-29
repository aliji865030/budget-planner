import React, { useContext ,useRef,useState} from 'react'
import { ContextBudget } from '../component/ContextApp'

const BudgetScreen = () => {
    const {budget,setBudget,remainingBudget,setRemainingBudget,spentBudget,setSpentBudget}=useContext(ContextBudget)
    const [expenses,setExpenses]=useState([]);
    const [productName,setProductName]=useState("")
    const [productCost,setProductCost]=useState("")
    const paraRef=useRef()

    const updateData=()=>{
        if(productCost==="" || productName===""){
            alert("please add name and cost")
        }else if(remainingBudget>0 && productCost<=remainingBudget){
            paraRef.current.style.display="none"
            const tempdata={
                name:productName,
                cost:productCost
            }
    
            setExpenses(pre=>[...pre,tempdata])
    
            setRemainingBudget(remainingBudget-productCost)
            setSpentBudget(pre=>pre+productCost)
           
        }else{
            alert("You are going out of budget")
        }

        setProductName("")
        setProductCost("")

    }
    const deleteItem=(index)=>{
        setRemainingBudget(pre=>pre+expenses[index].cost)
        setSpentBudget(pre=>pre-expenses[index].cost)
        

        const tempData=[...expenses]
        tempData.splice(index,1)
        setExpenses(tempData)

        
        if(expenses.length===1){
            paraRef.current.style.display="block"
        }
    }
  return (
    <div className='px-10 pt-5'>
      <div>
        <h1 className='text-5xl font-semibold text-center'>My Budget Planner</h1>
        <div className='flex justify-around text-xl font-semibold py-10'>
            <span className='border px-5 py-1 bg-gray-300 rounded-md text-blue-700'>Budget: Rs {budget}</span>
            <span className='border px-5 py-1 bg-gray-300 rounded-md text-green-700'>Remaining: Rs {remainingBudget}</span>
            <span className='border px-5 py-1 bg-gray-300 rounded-md text-red-700'>Spant: Rs {spentBudget}</span>
        </div>
      </div>
      <div>
        <h1 className='text-3xl text-start font-semibold py-5'>Expenses</h1>
        <div ref={paraRef}>
         <p className='text-3xl font-semibold text-green-600 text-center'>Add Data To List . . . . .</p>
        </div>
        <div className=' px-20 flex flex-col gap-5 py-10'>
            {expenses && expenses.map((item,index)=>{
                return(
                    <div key={index } className='flex justify-around text-xl font-semibold bg-green-300 py-2 rounded-md'>
                         <span>{item.name}</span>
                         <span>{item.cost}</span>
                         <span className=' cursor-pointer text-red-700' onClick={()=>deleteItem(index)} ><i class="fa-regular fa-trash-can"></i></span>

                    </div>
                )
            })}
        </div>
      </div>
      <div>
        <h1 className='text-3xl text-start font-semibold py-5'>Add Expenses</h1>
        <div>
           <div className='flex justify-center gap-10'>
           <span className='flex flex-col'>
                <label htmlFor="" >Name</label>
                <input value={productName} className='border-2 rounded-md border-green-300 px-3 py-1' type="text"  onChange={(e)=>setProductName(e.target.value)}/>
            </span>
            <span className='flex flex-col'>
                <label htmlFor="">Cost</label>
                <input value={productCost} className='border-2 rounded-md border-green-300 px-3 py-1' type="text" onChange={(e)=>{setProductCost(Number(e.target.value))}} />
            </span>
           </div>
           <div className='flex justify-center py-5'>
            <button className='px-5 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-white' onClick={updateData}>Save</button>
           </div>
            
        </div>
      </div>
    </div>
  )
}

export default BudgetScreen
