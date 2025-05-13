interface OptionListProps {
    options: string[];
    selectedValue: string;
    onSelect: (value: string) => void;
    width?: string;
  }
  
  export function OptionList({ options, selectedValue, onSelect, width = 'w-56' }: OptionListProps) {
    return (
      <div className={`${width} py-1`}>
        {options.map((item, index) => (
          <button
            key={index}
            className={`block w-full text-left px-4 py-2 text-sm ${selectedValue === item ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }