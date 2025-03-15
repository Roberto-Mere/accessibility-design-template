interface Props {
  id: string;
  placeholder: string;
}

export default function TextArea({ id, placeholder }: Props) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className="form-input placeholder:text-black-faded h-96 resize-none text-base"
    ></textarea>
  );
}
