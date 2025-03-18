interface Props {
  Icon: React.FC;
}

export default function SocialIconLink({ Icon }: Props) {
  return (
    <a href="/" aria-label="Go to Social">
      <Icon />
    </a>
  );
}
