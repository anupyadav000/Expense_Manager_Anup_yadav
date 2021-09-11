import { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from './Card'
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";



function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2021')
    
    const changeFilterHandler = (selectedYear) => {
        console.log('Express.js')
        setFilteredYear(selectedYear)
        console.log(filteredYear)
    };

    const filteredExpense = props.expns.filter((expenss) =>{
        return expenss.date.getFullYear().toString() === filteredYear;
    })

    // let expContent = <p>No Expense Found.</p>

    // if(filteredExpense.length>0){
    //     expContent = filteredExpense.map((expense) =>
    //        (<ExpenseItem key={expense.id} item={expense.item} amount={expense.amount} date={expense.date}/>))
    // };
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            <ExpenseChart expenss={filteredExpense}/>
            <ExpenseList items={filteredExpense}/>
        </Card>
    );
}


/* <ExpenseItem date={props.expns[0].date} item={props.expns[0].item} amount={props.expns[0].amount}/>
<ExpenseItem date={props.expns[1].date} item={props.expns[1].item} amount={props.expns[1].amount}/>
<ExpenseItem date={props.expns[2].date} item={props.expns[2].item} amount={props.expns[2].amount}/>
<ExpenseItem date={props.expns[3].date} item={props.expns[3].item} amount={props.expns[3].amount}/> */


/* {filteredExpense.length === 0 ? <p>No Expenses Found.</p> : 
            filteredExpense.map((expense) =>
                <ExpenseItem key={expense.id} item={expense.item} amount={expense.amount} date={expense.date}/>
            )} */

// {filteredExpense.length === 0 && <p>No Expenses Found.</p> }
// {filteredExpense.length > 0  && filteredExpense.map((expense) =>
//     (<ExpenseItem key={expense.id} item={expense.item} amount={expense.amount} date={expense.date}/>)
// )}


export default Expenses;