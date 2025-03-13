import ArrowDown from '../assets/svg/arrow-down.svg';

interface Props {
  Name: React.FC;
}

export default function DropdownSelect({ Name }: Props) {
  return (
    <div className="flex items-center gap-1.5">
      <Name />
      <ArrowDown />
    </div>
  );
}
