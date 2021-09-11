
import React from 'react';

import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';


const expnsess = [
  {
    id:'e1',
    date:new Date(2021,8,8),
    item: 'Cloth',
    amount:234.34 ,
  },
];


function App() {

  // return React.createElement('div',{},React.createElement('h2',{},'Lets get started'), React.createElement(Expenses,{expns:expns}))

  const [expnses,setState] = useState(expnsess);

  const addExpenseHandler =(expns)=>{
    setState((prevExpenses)=>{
      return [expns,...prevExpenses]
    })
  }

  return (
    <div >
      <h1 className="Heading">Expense Manager Web App by Anup Yadav</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expns={expnses}/>
    </div>
  );
}

export default App;
