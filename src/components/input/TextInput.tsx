import PhoneInput from './PhoneInput';
import TextArea from './TextArea';

interface Props {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required?: boolean;
}

export default function TextInput({
  id,
  label,
  type,
  placeholder,
  required,
}: Props) {
  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={id} className="text-base">
        {`${required ? '* ' : ''}${label}`}
      </label>
      {type === 'tel' ? (
        <PhoneInput placeholder={placeholder} id={id} />
      ) : type === 'textarea' ? (
        <TextArea placeholder={placeholder} required={required} id={id} />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="placeholder:text-black-faded form-input grow text-base"
        />
      )}
    </div>
  );
}
