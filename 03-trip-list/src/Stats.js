export default function Stats({ items }) {
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
