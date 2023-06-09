import React from 'react';
import {useParams} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import MovieList from './movie/MovieList';
import PaginationMovies from './helpers/PaginationMovies';
import useFetch from '../hooks/useFetch';
import {SearchContext} from '../providers/SearchStorage';
import {searchMultipleTitle} from '../functions/searchMovies';

const Pages = () => {
  const {page} = useParams();
  const {data, request, loading} = useFetch();
  const {search, setSearch} = React.useContext(SearchContext);
  React.useEffect(() => {
    if (setSearch && page) {
      setSearch({...search, page});
    }
  }, [page]);

  React.useEffect(() => {
    if (search && search.title && page) {
      const {URL} = searchMultipleTitle({
        search: search.title,
        year: search.year,
        page: page,
      });

      request(URL, {});
      document.title = `Movie Database - Search: ${search.title} - Page: ${page}`;
    }
  }, [page]);

  return (
    <Container>
      <PaginationMovies data={data} page={page} />
      <Box my={2}>
        <Container>
          <MovieList movieList={data} loading={loading} />
        </Container>
      </Box>
    </Container>
  );
};

export default Pages;
