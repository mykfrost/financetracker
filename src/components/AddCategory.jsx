import React from "react";
export default function AddCategory({ setShowAddCategory}){
    return (
    <div>
    <h1>Add category</h1>
    <button onClick={()=> setShowAddCategory(false)} >Return to main screen</button>
    </div>
    )
}