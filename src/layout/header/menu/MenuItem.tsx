interface Props {
  name: string;
}

export default function MenuItem({ name }: Props) {
  return (
    <a href="/" className="text-large">
      {name}
    </a>
  );
}
