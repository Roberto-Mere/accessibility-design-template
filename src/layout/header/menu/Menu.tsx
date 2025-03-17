import DropdownSelect from '../../../components/input/DropdownSelect';
import MenuItem from './MenuItem';
import { menuItems } from './menuItems';

export default function Menu() {
  return (
    <nav className="mr-auto ml-72">
      <ul className="flex items-center gap-16">
        {menuItems.map((item, index) => (
          <li key={item.name} className="flex items-center gap-16">
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
