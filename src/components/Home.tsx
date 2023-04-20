import React from 'react';
import {Box, Container} from '@mui/material';
import MovieList from './movie/MovieList';
import {SearchContext} from '../providers/SearchStorage';
import useFetch from '../hooks/useFetch';
import {searchMoviesList} from '../functions/searchMovies';

import PaginationMovies from './helpers/PaginationMovies';

const Home = () => {
  const {search, setSearch} = React.useContext(SearchContext);
  const {data, request} = useFetch();

  React.useEffect(() => {
    if (setSearch) {
      setSearch({...search});
    }
    const {request_url} = searchMoviesList(search);
    if (request_url) {
      request(request_url);
    }
    if (search) {
      document.title = `Movie Database - Search: ${
        search.title || search.imdb
      }`;
    }
  }, [search, request, setSearch]);

  return (
    <Container>
      <PaginationMovies data={data} />
      <Box my={2}>
        <Container>
          <MovieList movieList={data} />
        </Container>
      </Box>
    </Container>
  );
};

export default Home;
