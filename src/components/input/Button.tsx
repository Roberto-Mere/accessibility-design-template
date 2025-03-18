interface Props {
  Content: string | React.FC;
  className?: string;
  ariaLabel?: string;
}

export default function Button({ Content, className, ariaLabel }: Props) {
  const isText = typeof Content === 'string';

  return (
    <button
      className={`bg-dark-green text-large cursor-pointer rounded-sm text-white ${className} ${isText ? 'px-48 py-12' : 'rounded-l-none p-8'}`}
      aria-label={ariaLabel}
    >
      {isText ? Content : <Content />}
    </button>
  );
}
