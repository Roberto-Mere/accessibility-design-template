import SocialIconLink from '../../../../components/SocialIconLink';
import SocialLogo from '../../../../assets/svg/facebook.svg?react';

export default function Socials() {
  return (
    <ul className="flex gap-36">
      {new Array(3).fill(null).map((_, index) => (
        <li key={index}>
          <SocialIconLink Icon={() => <SocialLogo height={32} width={32} />} />
        </li>
      ))}
    </ul>
  );
}
