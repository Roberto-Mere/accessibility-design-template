interface Props {
  id: string;
  placeholder: string;
  required: boolean | undefined;
}

export default function TextArea({ id, placeholder, required }: Props) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      required={required}
      className="form-input placeholder:text-black-faded h-96 resize-none text-base"
    ></textarea>
  );
}
