import React from 'react';
import {Grid, Typography, Box, Container} from '@mui/material';

import MovieCard from './MovieCard';
import {IMovieList} from '../../interfaces/IMovieList';
import IMoviePartial from '../../interfaces/IMoviePartial';
import isMovieList from '../../interfaces/typeCheck/isMovieList';
import isMovie from '../../interfaces/typeCheck/isMovie';
import ErrorAlert from '../helpers/ErrorAlert';

const MovieList = ({
  movieList,
  page,
}: {
  movieList: IMovieList | IMoviePartial | null;
  page?: string;
}) => {
  if (
    movieList &&
    typeof movieList === 'object' &&
    'Response' in movieList &&
    'Error' in movieList &&
    movieList.Response === 'False' &&
    typeof movieList.Error === 'string'
  ) {
    return (
      <section>
        <Box>
          <Container>
            <ErrorAlert
              error={true}
              message={movieList.Error}
              severity="error"
            />
          </Container>
        </Box>
      </section>
    );
  } else if (
    movieList &&
    isMovieList(movieList) &&
    Array.isArray(movieList.Search)
  ) {
    return (
      <section>
        <Container>
          <Grid container spacing={3}>
            {movieList &&
              movieList.Search.map((movie) => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={3} key={movie.imdbID}>
                    <MovieCard {...movie} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </section>
    );
  } else if (movieList && isMovie(movieList)) {
    return (
      <section>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <MovieCard {...movieList} />
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  } else
    return (
      <section>
        <Box>
          <Container>
            <Typography variant="body1">
              No search made or no results found
            </Typography>
          </Container>
        </Box>
      </section>
    );
};

export default MovieList;
