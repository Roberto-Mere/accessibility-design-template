import Button from '../../components/input/Button';
import SearchIcon from '../../assets/svg/search.svg?react';

export default function SearchBar() {
  return (
    <>
      <input
        id="search"
        type="search"
        placeholder="Search this site"
        className="placeholder:text-dark-green-faded text-large border-dark-green leading-large min-w-xl border-2 px-16 py-8"
      />
      <Button Content={() => <SearchIcon />} ariaLabel="Search" />
    </>
  );
}
