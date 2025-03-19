export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li
        className="p-2 border border-gray-300 rounded-md mb-2 cursor-pointer"
        onClick={() => onSelect(name)}
      >
        <span className="font-bold">{name}</span>
        <span className="ml-2">
          (Buy {quantity} in {category})
        </span>
      </li>
    );
  }