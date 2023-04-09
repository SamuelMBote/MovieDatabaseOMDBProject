import {Grid} from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import MovieCard from './MovieCard';

const Feed = () => {
  const response = {
    Search: [
      {
        Title: 'Bling Empire: New York',
        Year: '2023–',
        imdbID: 'tt22481904',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOGRlOGNjNjctMDFmZC00YzhhLWFkOWUtNDQ4Zjc3N2U0ZmQyXkEyXkFqcGdeQXVyMTA3MTI2ODc5._V1_SX300.jpg',
      },
      {
        Title: 'Brain Hunter: New Breed',
        Year: '2023',
        imdbID: 'tt12103444',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzM3NjUyZTAtZTMzZS00ZjhiLTgzZjUtNTdhMDMzZmQ1YmYxXkEyXkFqcGdeQXVyNzk0ODI5NTU@._V1_SX300.jpg',
      },
      {
        Title: "New Year's Special",
        Year: '2023',
        imdbID: 'tt25753082',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYmQ2NTAzZTktMTNkNy00N2FiLWFmODEtMjg0MzMwYzgyMzQxXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_SX300.jpg',
      },
      {
        Title: "New Year's Eve",
        Year: '2023',
        imdbID: 'tt23767120',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNjIzNjY0YTEtMjAzZC00NTMyLTgxMDQtMmY2NTNkYjlkNTgzXkEyXkFqcGdeQXVyNTM0NDE2MzM@._V1_SX300.jpg',
      },
      {
        Title: 'The Golden Boy - Harvesting A Major New Martial Arts Maverick',
        Year: '2023',
        imdbID: 'tt24576880',
        Type: 'movie',
        Poster: 'N/A',
      },
      {
        Title: 'The New Americans: Gaming a Revolution',
        Year: '2023',
        imdbID: 'tt25050960',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDg2YmQ0YzEtYzcxZi00N2MyLWI1MjYtZjA3NDkzZWU2Y2Y1XkEyXkFqcGdeQXVyMTU0ODMwNjg2._V1_SX300.jpg',
      },
      {
        Title: 'Incubus: New Beginnings',
        Year: '2023',
        imdbID: 'tt15824136',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZGY4YjU0NTEtMjQ1ZS00OTdkLWFkNTgtOThmOWVkMGY5Y2FjXkEyXkFqcGdeQXVyNDg4NjU2Nw@@._V1_SX300.jpg',
      },
      {
        Title: 'Captain Smith A New Beginning',
        Year: '2023',
        imdbID: 'tt16377612',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMGVhNTI0ODEtYjMzNy00ZDZiLWFlYmItYjEyZWNkNjI0N2M3XkEyXkFqcGdeQXVyNDYyODc0OTQ@._V1_SX300.jpg',
      },
      {
        Title: 'NV DE (Old Fashion, New Life)',
        Year: '2023',
        imdbID: 'tt18329142',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMmJkYTU3MjctMTJiZC00MDM2LWFlZjktNTUyZjY1OTllM2RjXkEyXkFqcGdeQXVyNDkzMDk0Mw@@._V1_SX300.jpg',
      },
      {
        Title: 'The Littlest Angel 2: The New Female Angel',
        Year: '2023',
        imdbID: 'tt18562292',
        Type: 'movie',
        Poster: 'N/A',
      },
    ],
    totalResults: '18',
    Response: 'True',
  };
  return (
    <section>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          {response.Search.map((item) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <MovieCard {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Feed;
