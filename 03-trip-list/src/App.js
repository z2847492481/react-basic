import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <From onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function From({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const item = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(item);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function List({ items, onDeleteItem, onUpdateItem, onClearList }) {
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

function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Let's add some item into your packing list! ✨</em>
      </p>
    );
  }
  const itemNum = items.length;
  const packedItemNum = items.filter((item) => item.packed).length;
  const packedItemPercentage = Math.round((packedItemNum / itemNum) * 100);
  return (
    <footer className="stats">
      {packedItemPercentage === 100
        ? "You have finish packed all items, Let's go to a trip!✌"
        : `💼 You have ${itemNum} items on your list, and you already packed ${packedItemNum} (${packedItemPercentage}%)`}
    </footer>
  );
}

export default App;
