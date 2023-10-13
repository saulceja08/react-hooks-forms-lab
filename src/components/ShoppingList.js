import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  //create state for each action
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsList, setItemsList] = useState(items)
  const [searchChar, setSearchChar] = useState("")

  function onSearchChange(event) {
    setSearchChar(event.target.value)
  }

  //FUnction that updates text when a user types
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //Filter by category
  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  //Filter by search text 
  const itemsToDisplayName = itemsToDisplay.filter( (item) => {
    if (item.name.toLowerCase().includes(searchChar.toLowerCase())) {
      return true
    } 
    else {
      return false
    }
  })


  function onItemFormSubmit(element) {
    setItemsList([...items, element])
    console.log(itemsList);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      searchChar={searchChar} 
      onSearchChange={onSearchChange}
    />
      <ul className="Items">
        {itemsToDisplayName.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;