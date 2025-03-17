import PhoneInput from './PhoneInput';
import TextArea from './TextArea';

interface Props {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
}

export default function TextInput({ id, label, type, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      {type === 'tel' ? (
        <PhoneInput placeholder={placeholder} id={id} />
      ) : type === 'textarea' ? (
        <TextArea placeholder={placeholder} id={id} />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="placeholder:text-black-faded form-input grow text-base"
        />
      )}
    </div>
  );
}
