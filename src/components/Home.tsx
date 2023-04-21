import React from 'react';
import {Box, Container} from '@mui/material';
import MovieList from './movie/MovieList';
import {SearchContext} from '../providers/SearchStorage';
import useFetch from '../hooks/useFetch';
import {searchMoviesList} from '../functions/searchMovies';

import PaginationMovies from './helpers/PaginationMovies';

const Home = () => {
  const {search, setSearch} = React.useContext(SearchContext);
  const {data, request, loading} = useFetch();

  React.useEffect(() => {
    const {request_url} = searchMoviesList(search);
    if (request_url) {
      request(request_url, {});
    }
  }, [search, setSearch]);

  return (
    <Container>
      <PaginationMovies data={data} />
      <Box my={2}>
        <Container>
          <MovieList movieList={data} loading={loading} />
        </Container>
      </Box>
    </Container>
  );
};

export default Home;
