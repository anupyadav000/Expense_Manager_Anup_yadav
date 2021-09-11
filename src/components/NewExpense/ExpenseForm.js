import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [eItem,setItem] = useState('');
    const [eAmount,setAmount] = useState('');
    const [eDate,setDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredItem='',
    //     enteredAmount ='',
    //     enteredDate='',
    // });

    const changeItemHandler = (event) =>{
        // console.log('It has changed');
        // console.log(event.target.value);
        setItem(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredItem : event.target.value,
        // });

        // setUserInput((prevState)=>{
        //     return {enteredItem:event.target.value};
        // })
    }

    const changeAmountHandler = (event) =>{
        setAmount(event.target.value);
    }

    const changeDateHandler = (event) =>{
        setDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            item: eItem,
            amount: +eAmount,
            date : new Date(eDate),
        }
        // console.log(expenseData);
        props.onSaveExpense(expenseData);
        setItem('');
        setAmount('');
        setDate('');
    };

    

    const cancelExp = () => {
        props.onCancel();
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Item</label>
            <input type='text' value={eItem} onChange={changeItemHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={eAmount} min='0.01' step='0.01' onChange={changeAmountHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' value={eDate} min='2021-01-01' max='2024-12-31' onChange={changeDateHandler} />
        </div>
    </div>
    <div className='new-expense__actions'>
        <button onClick={cancelExp}>Cancel</button>
        <button type='submit'>Add Expense</button >
    </div>
    </form>);
}

export default ExpenseForm;

