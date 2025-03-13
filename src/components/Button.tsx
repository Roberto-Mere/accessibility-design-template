interface Props {
  Content: string | React.FC;
}

export default function Button({ Content }: Props) {
  const isText = typeof Content === 'string';

  return (
    <button
      className={`bg-dark-green rounded-sm ${isText ? 'px-24 py-12' : 'rounded-l-none p-8'}`}
    >
      {isText ? Content : <Content />}
    </button>
  );
}
