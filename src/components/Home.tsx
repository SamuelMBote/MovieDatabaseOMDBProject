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
    const {request_url, request_options} = searchMoviesList(search);
    if (request_url) {
      const response = request(request_url, {});
      console.log(request_url, request_options);
      console.log(response);
      console.log(data);
    }
  }, [search, setSearch]);

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
