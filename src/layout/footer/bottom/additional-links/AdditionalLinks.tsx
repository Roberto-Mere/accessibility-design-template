import { additionalLinkNames } from './additionalLinkNames';

export default function AdditionalLinks() {
  return (
    <ul className="flex justify-end gap-16 max-sm:col-start-2 max-sm:row-start-2">
      {additionalLinkNames.map((link) => (
        <li key={link} className="w-max">
          <a href="/" className="text-black-faded w-max text-base">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
