import React from "react";
export default function AddTransaction({setShowAddTransaction}){
    return (
        <div>
            <h1>Add Transaction</h1>
            <button onClick={ ()=> setShowAddTransaction(false)}>Return To Main Screen</button>
        </div>
    );
}