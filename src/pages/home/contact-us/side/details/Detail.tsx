interface Props {
  icon: string;
  text: string;
}

export default function Detail({ icon, text }: Props) {
  return (
    <div className="flex gap-24">
      <img src={icon} alt="" />
      <p className="text-base">{text}</p>
    </div>
  );
}
