export default function Item({ name, quantity, category, onSelect }) {
    return(
        <li onClick={() => onSelect(name)} className="cursor-pointer bg-gray-100 dark:bg-gray-800 p-4 m-4 rounded-lg shadow-md  gap-2 hover:bg-gray-200">
            <h2 className="font-bold text-blue-900 items-center"> {name}</h2>
            <p className="text-gray-700 dark:text-gray-400">
                <span  className="font-medium">Quantity:</span>{quantity}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
                <span  className="font-medium">Category:</span>{category}
            </p>
        </li>
    );
}