import React from 'react';
import {ISearch} from '../interfaces/ISearch';

export const SearchContext = React.createContext<{
  search: ISearch;
  setSearch: React.Dispatch<ISearch> | null;
}>({
  search: {imdb: null, title: null, specific: false, year: null, page: null},
  setSearch: null,
});

const SearchStorage = ({children}: {children: JSX.Element[]}) => {
  const [search, setSearch]: [
    ISearch,
    React.Dispatch<React.SetStateAction<ISearch>>,
  ] = React.useState<ISearch>({
    imdb: null,
    title: null,
    specific: false,
    year: null,
    page: null,
  });
  React.useEffect(() => {
    if (setSearch) {
      setSearch({...search});
    }
  }, []);

  return (
    <div>
      <SearchContext.Provider value={{search, setSearch}}>
        {children}
      </SearchContext.Provider>
    </div>
  );
};

export default SearchStorage;
