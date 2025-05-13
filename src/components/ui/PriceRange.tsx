interface PriceRangeProps {
    onApply: () => void;
    minPrice: string;
    maxPrice: string;
    setMinPrice: (value: string) => void;
    setMaxPrice: (value: string) => void;
  }
  
  export function PriceRange({ onApply, minPrice, maxPrice, setMinPrice, setMaxPrice }: PriceRangeProps) {
    return (
      <div className="w-72 p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Диапазон цен
          </label>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="от" 
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <span>-</span>
            <input 
              type="text" 
              placeholder="до" 
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button 
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gary-1000"
          onClick={onApply}
        >
          Применить
        </button>
      </div>
    );
  }