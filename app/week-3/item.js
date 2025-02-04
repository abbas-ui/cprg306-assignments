export default function Item({ name, quantity, category }) {
    return (
        
        <li className="p-2 m-2 bg-slate-900 max-w-sm text-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </li>
    );
  }