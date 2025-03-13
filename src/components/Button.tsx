interface Props {
  Content: string | React.FC;
}

export default function Button({ Content }: Props) {
  const isText = typeof Content === 'string';

  return (
    <button
      className={`bg-dark-green text-large cursor-pointer rounded-sm text-white ${isText ? 'px-48 py-12' : 'rounded-l-none p-8'}`}
    >
      {isText ? Content : <Content />}
    </button>
  );
}
