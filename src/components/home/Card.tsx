interface CardProps {
    title: string;
    imageUrl: string;
    category: string;
    address: string;
    price: string;
    date: string;
    roomrange: string;
    area: string;
    amount: number;
}

export function Card({ title, imageUrl, category, address, price, date, roomrange, area, amount}: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    {category}
                </span>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-blue-600 font-bold mb-2">от {price} млн ₸</p>
                <p className="text-gray-600 text-sm mb-2">{address}</p>
                <div className="flex justify-between text-gray-500 text-sm">
                    <p>{roomrange}</p>
                    <p>{area} м²</p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-gray-500 text-sm">{date}</p>
                    <p className="text-gray-700 font-medium">{amount} квартир</p>
                </div>
            </div>
        </div>
    )
}