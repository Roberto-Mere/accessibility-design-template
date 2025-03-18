import Logo from '../../assets/svg/logo.svg?react';
import Menu from './menu/Menu';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="max-xs:mx-16 mx-64 my-16 flex flex-wrap items-center gap-y-24 max-sm:mx-32">
      <Logo />
      <Menu />
      <SearchBar />
    </header>
  );
}
