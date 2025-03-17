import { additionalLinkNames } from './additionalLinkNames';

export default function AdditionalLinks() {
  return (
    <ul className="flex gap-16">
      {additionalLinkNames.map((link) => (
        <li key={link}>
          <a href="/" className="text-black-faded text-base">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
