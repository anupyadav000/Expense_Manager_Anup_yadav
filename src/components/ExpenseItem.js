// import  { useState } from 'react';

import ExpenseDate  from './ExpenseDate';

import './ExpenseItem.css'

import Card from './Card'

function ExpenseItem(props){

    // return <h2>It's my expense item</h2>
    // const expdt = new Date(2021,9,8);
    // const expitm = 'car insurance';
    // const exprc = 312.32;

    // let item=props.title

    // const [item,setItem]=useState(props.item);

    // const clickHandler = () =>{
    //     setItem('Updated!');
    //     console.log(item);
    // };
    
    
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.item}</h2>
                <div className='expense-item__price'>${props.amount} </div>
            </div>
        </Card>
    );
}



export default ExpenseItem;