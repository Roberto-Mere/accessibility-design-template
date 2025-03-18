import { sideDetails } from './sideDetails';
import Detail from './Detail';

export default function DetailsList() {
  return (
    <ul className="mb-[24rem] flex flex-col gap-16">
      {sideDetails.map((detail) => (
        <li key={detail.text}>
          <Detail icon={detail.icon} text={detail.text} />
        </li>
      ))}
    </ul>
  );
}
