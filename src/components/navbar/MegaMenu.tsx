import { MegaMenuItems } from "./types";

interface MegaMenuProps {
  isOpen: boolean;
  items: MegaMenuItems;
  isMobile?: boolean;
}

export function MegaMenu({ isOpen, items, isMobile = false }: MegaMenuProps) {
  if (!isOpen) return null;

  if (isMobile) {
    return (
      <div className="mt-2 px-4">
        <div className="grid grid-cols-1 gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <ul>
            {items.columnOne.map((item, index) => (
              <li key={`col1-${index}`}>
                <a href={item.href} className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                  <div className="font-semibold">{item.label}</div>
                  {item.description && <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>}
                </a>
              </li>
            ))}
          </ul>

          <ul>
            {items.columnTwo.map((item, index) => (
              <li key={`col2-${index}`}>
                <a href={item.href} className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                  <div className="font-semibold">{item.label}</div>
                  {item.description && <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="mega-menu" className="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul>
          {items.columnOne.map((item, index) => (
            <li key={`col1-${index}`}>
              <a href={item.href} className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">{item.label}</div>
                {item.description && <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {items.columnTwo.map((item, index) => (
            <li key={`col2-${index}`}>
              <a href={item.href} className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="font-semibold">{item.label}</div>
                {item.description && <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}