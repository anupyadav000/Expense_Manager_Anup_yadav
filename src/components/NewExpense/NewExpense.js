import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import { useState } from "react";
const NewExpense= (props)=>{

    const saveExpenseData =(expenseData)=>{
        const expData = {
          ...expenseData,
          id: Math.random().toString()
        }
        props.onAddExpense(expData);
        setEdi(false);
    };

    const [isEdi,setEdi] = useState(false);

    const addExp = () => {
        setEdi(true);
    }

    const back = () =>{
        setEdi(false);
    }


    return (<div className='new-expense'>
        {!isEdi && <button onClick={addExp}>Add New Expense</button>}
        { isEdi && <ExpenseForm onSaveExpense={saveExpenseData} onCancel={back}/>}
    </div>);
}
export default NewExpense;