import ArrowDown from '../../assets/svg/arrow-down.svg?react';

interface Props {
  Name: React.FC | string;
}

export default function DropdownSelect({ Name }: Props) {
  const isText = typeof Name === 'string';

  return (
    <div className="flex items-center gap-1.5">
      {isText ? Name : <Name />}
      <ArrowDown />
    </div>
  );
}
