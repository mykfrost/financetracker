import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Header({categories ,setShowAddCategory}){
    return (
        <ul className="navbar navbar-expand flex-row w-100 list-unstyled">
         {categories.map((category, index) => {
        return (
          <li className="p-3 nav-item" key={index}>
            {category.name}
          </li>
        );
      })}
      <li
        className="font-weight-bold p-3 nav-item bg-info"
        onClick={() => setShowAddCategory(true)}
      >
        +
      </li>
       </ul>
     );
}