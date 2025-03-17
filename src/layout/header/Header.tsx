import Logo from '../../assets/svg/logo.svg?react';
import Menu from './menu/Menu';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="mx-64 my-16 flex items-center">
      <Logo />
      <Menu />
      <SearchBar />
    </header>
  );
}
