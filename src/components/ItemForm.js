import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newCategory, setNewCategory] = useState("Produce");
  const [newItemName, setNewItemName] = useState("");

  const newItem = {
    id: uuid(),
    name: newItemName,
    category: newCategory,
  };

  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault();
      setNewItemName(""); 
      setNewCategory("Produce");
      onItemFormSubmit(newItem);
    }}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          <option value="Dairy">Dairy</option>
          <option value="Produce">Produce</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
