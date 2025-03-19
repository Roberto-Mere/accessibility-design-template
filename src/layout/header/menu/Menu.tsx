import DropdownSelect from '../../../components/input/DropdownSelect';
import MenuItem from './MenuItem';
import { menuItems } from './menuItems';

export default function Menu() {
  return (
    <nav className="ml-72 max-md:order-3 max-md:ml-0 max-md:w-full">
      <ul className="flex items-center gap-16 max-md:gap-8">
        {menuItems.map((item, index) => (
          <li key={item.name} className="flex items-center gap-16 text-center">
            {index !== 0 && (
              <div aria-hidden className="h-16 w-1 bg-black"></div>
            )}
            {item.dropdown ? (
              <DropdownSelect Name={() => <MenuItem name={item.name} />} />
            ) : (
              <MenuItem name={item.name} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
