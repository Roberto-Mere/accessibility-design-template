import DropdownSelect from './DropdownSelect';

interface Props {
  id: string;
  placeholder: string;
}

export default function Phone({ id, placeholder }: Props) {
  return (
    <div className="form-input flex flex-1/2 items-center overflow-hidden text-base">
      <DropdownSelect Name="+52" />
      <span className="text-black-faded text-large ml-2">|</span>
      <input
        id={id}
        type="tel"
        placeholder={placeholder}
        className="placeholder:text-black-faded ml-12 grow text-base focus:outline-none"
      />
    </div>
  );
}
