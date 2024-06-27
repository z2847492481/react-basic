import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  onDeleteItem,
  onUpdateItem,
  onClearList,
}) {
  const [sortMethod, setSortMethod] = useState("inputOrder");
  let sortedItems;
  if (sortMethod === "inputOrder") sortedItems = items;
  if (sortMethod === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortMethod === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
        >
          <option value="inputOrder">Sort By Input Order</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed</option>
        </select>
        <button onClick={() => onClearList()}>Clear List</button>
      </div>
    </div>
  );
}
