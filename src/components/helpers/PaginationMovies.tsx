import React from 'react';
import {Box, Pagination, Stack, Container, Typography} from '@mui/material';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import isMovieList from '../../interfaces/typeCheck/isMovieList';

const PaginationMovies = ({data, page}: {data: any; page?: string}) => {
  const [pagination, setPagination] = React.useState(1);

  const [results, setResults] = React.useState<number | null>(null);

  const navigate: NavigateFunction = useNavigate();

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    navigate(`/page/${value}`);
  }
  React.useEffect(() => {
    if (page) {
      setPagination(Number(page));
    }
  }, [page]);

  React.useEffect(() => {
    if (data && isMovieList(data)) {
      if (Number(data.totalResults) > 10) {
        setResults(Number(data.totalResults));
      }
    }
  }, [data]);

  return (
    <React.Fragment>
      {results && (
        <Box my={5}>
          <Stack
            direction={'row'}
            spacing={12}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box>
              {page && (
                <Typography fontWeight={'bold'}>Page: {page}</Typography>
              )}
            </Box>
            <Stack
              direction={'row'}
              spacing={2}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Typography>Results: {results} </Typography>
              <Typography>Pages: {Math.ceil(results / 10)}</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            spacing={12}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Pagination
              count={Math.ceil(results / 10)}
              page={pagination}
              onChange={handleChange}
            />
          </Stack>
        </Box>
      )}
    </React.Fragment>
  );
};

export default PaginationMovies;
