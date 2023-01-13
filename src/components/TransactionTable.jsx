import React from "react";

export default function TransactionTable({setShowAddTransaction}){
    return (
        <div>
            <h1>TransactionTable Component</h1>
            <button onClick={ ()=>setShowAddTransaction(true)}>Add New Transaction</button>
        </div>
    );
}