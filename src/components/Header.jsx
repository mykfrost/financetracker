import React from "react";

export default function Header({setShowAddCategory}){
    return (
        <div>
            <h1>Header Component</h1>
            <button onClick={()=> setShowAddCategory(true)}>Add New Category</button>
        </div>
  
    
    )
}