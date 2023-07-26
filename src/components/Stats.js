export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked * 100) / numItems);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈🚗🚐"
          : `💼 you have ${numItems} items or your list, and you already packed
            ${numberPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
