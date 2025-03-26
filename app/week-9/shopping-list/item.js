const Item = ({ id, name, quantity, category ,onSelect }) => {
    return (
        <div onClick={() => {
            let text = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim().split(" ");
            onSelect(text[0].replace(",",""));
        }}>
            <li className="p-4 m-4 w-auto border rounded-lg bg-gray-900 hover:bg-gray-800">
                <p className="text-lg text-gray-200 font-semibold">{name}</p>
                <p className="text-gray-200">Quantity: {quantity}</p>
                <p className="text-sm text-gray-500">Category: {category}</p>
                <p className="text-sm text-gray-500">ID: {id}</p>
            </li>
        </div>
    );
};

export default Item;