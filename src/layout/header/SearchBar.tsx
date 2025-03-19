import Button from '../../components/input/Button';
import SearchIcon from '../../assets/svg/search.svg?react';

export default function SearchBar() {
  return (
    <div className="max-xs:ml-12 ml-36 flex grow justify-end">
      <input
        id="search"
        type="search"
        placeholder="Search this site"
        className="placeholder:text-dark-green-faded text-large border-dark-green leading-large max-xs:max-w-md max-w-xl grow border-2 px-16 py-8"
      />
      <Button Content={() => <SearchIcon />} ariaLabel="Search" />
    </div>
  );
}
