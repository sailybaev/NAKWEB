import { useNavigate } from 'react-router-dom';

interface CardProps {
    title: string;
    imageUrl: string;
    category: string;
    categoryColor?: string; 
    address: string;
    price: string;
    date: string;
    roomrange: string;
    area: string;
    amount: number;
    href: string;
}

export function Card({ 
    title, 
    imageUrl, 
    category, 
    categoryColor = 'bg-blue-600',
    address, 
    price, 
    date, 
    roomrange, 
    area, 
    amount, 
    href 
}: CardProps) {

    const navigate = useNavigate();

    const handleClick = () => {
        if (href) {
            if (href.startsWith('/')) {
                navigate(href);
            } else {
                console.log("Card clicked");
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        }
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            onClick={handleClick}
        >
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                <span className={`absolute top-3 left-3 ${categoryColor} text-white px-2 py-1 rounded text-xs`}>
                    {category}
                </span>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-blue-600 font-bold mb-2">{price}</p>
                <p className="text-gray-600 text-sm mb-2">{address}</p>
                <div className="flex justify-between text-gray-500 text-sm">
                    <p>{roomrange}</p>
                    <p>{area}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-gray-500 text-sm">{date}</p>
                    <p className="text-gray-700 font-medium">{amount} квартир</p>
                </div>
            </div>
        </div>
    );
}