import { sideDetails } from './sideDetails';
import Detail from './Detail';

export default function DetailsList() {
  return (
    <ul className="mb-[24rem] flex flex-col gap-16">
      {sideDetails.map((detail) => (
        <Detail key={detail.text} icon={detail.icon} text={detail.text} />
      ))}
    </ul>
  );
}
