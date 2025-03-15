import { MultipleOptionData } from '../../pages/home/contact-us/form/multipleOptions';

interface Props {
  type: 'radio' | 'checkbox';
  options: MultipleOptionData[];
  name: string;
}

export default function MultipleOptionInput({ type, name, options }: Props) {
  return (
    <div className="flex flex-wrap gap-36 p-10 pr-0">
      {options.map((opt) => (
        <div key={opt.id} className="flex items-center gap-8">
          <input
            type={type}
            name={name}
            id={opt.id}
            value={opt.value}
            className="accent-dark-green h-20 w-20"
          />
          <label htmlFor={opt.id} className="text-base">
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  );
}
