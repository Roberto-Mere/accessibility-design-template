import { linkNames } from './linkNames';

export default function Links() {
  return (
    <ul className="flex flex-col gap-16">
      {linkNames.map((link) => (
        <li key={link}>
          <a href="/" className="text-large">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
