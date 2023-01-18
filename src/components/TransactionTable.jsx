import React , {useState} from "react";
import {format}  from "date-fns";
import "bootstrap/dist/css/bootstrap.css";
export default function TransactionTable({ removeTransaction,  transactions , setShowAddTransaction}){
    
    return (
        <div>
           <table  className="table table-striped border">
            <thead className="bb-primary">
                <tr>
                    <th scope="col">Date </th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="p-4 bg-blue-200 text-center">
                    <td colSpan="4">
                        <button className="btn btn-success" onClick={()=>
                        setShowAddTransaction(true)}>Add New Transaction</button>
                    </td>
                </tr>
                {transactions.map((transaction , index) =>{
                    return(
                        <tr className="p-4" key={index}> 
                            <td>{format(transaction.date, "MMM d yyy")}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.category.name}</td>
                            <td><button className="btn btn-danger" 
                            onClick={()=> removeTransaction(index)}>X</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>

           </table>
        </div>
    );
}