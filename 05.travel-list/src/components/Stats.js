export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItem) * 100);
  console.log(precentage);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? " You got everything! Ready to go ✈️ "
          : `        You have {numItem} items on your list, and you already packed
        ${numPacked} (${precentage}%)`}
      </em>
    </footer>
  );
}
