import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';

import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import isMovieFull from '../../interfaces/typeCheck/isMovieFull';
import {searchByID} from '../../functions/searchMovies';
import isSerieFull from '../../interfaces/typeCheck/isSerieFull';

const Movie = () => {
  const {id} = useParams();

  const {data, request} = useFetch();
  React.useEffect(() => {
    if (id) {
      const {URL, options} = searchByID({id, plot: 'full'});
      request(URL, {});
    }
  }, [id, request]);

  React.useEffect(() => {
    if (data && (isMovieFull(data) || isSerieFull(data)))
      document.title = data.Title;
  }, [data]);
  if (data && isMovieFull(data) && data.Type === 'movie') {
    return (
      <Box component={'section'} my={2} sx={{flexGrow: 1}}>
        <Container maxWidth="lg">
          <Box component={'div'} mt={4} mb={2}>
            <Typography variant="h3" component={'h3'}>
              {data.Title}
            </Typography>
            <Typography component={'p'}>
              {data.Year}, directed by {data.Director}
            </Typography>
          </Box>
          <Grid container spacing={1} direction={'row'}>
            <Grid item xs={12} md={5}>
              <img src={data.Poster} alt={data.Title} />

              <List>
                {data.Ratings.map((rating) => {
                  return (
                    <ListItem key={rating.Source}>
                      <ListItemText
                        primary={rating.Source}
                        secondary={rating.Value}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box component={'div'}>
                <Stack direction="row" spacing={1}>
                  <Chip
                    avatar={
                      <Avatar>{data.Type.charAt(0).toUpperCase()}</Avatar>
                    }
                    label={data.Type}
                  />
                </Stack>
                <Typography>Released: {data.Released}</Typography>
                <Typography mb={2}>
                  Runtime: {data.Runtime},{' '}
                  {(Number(data.Runtime.replace('min', '')) / 60).toFixed(2) +
                    ' hrs'}
                </Typography>
                <Typography component={'p'}>{data.Plot}</Typography>
              </Box>
              <Box component={'div'} my={2}>
                <Typography component={'p'} fontWeight={'bolder'}>
                  IMDB ID: {data.imdbID}
                </Typography>
                <Typography component={'p'}>
                  Language: {data.Language}
                </Typography>
                <Typography component={'p'}>Country: {data.Country}</Typography>
                <>
                  Genre:{' '}
                  {data.Genre.split(', ').map((genre) => {
                    return <Chip key={genre} label={genre} />;
                  })}
                </>
              </Box>
              <Box component={'div'} my={2}>
                <Typography component={'p'}>
                  Director: {data.Director}
                </Typography>
                <>
                  Writer:{' '}
                  <List dense={true}>
                    {data.Writer.split(', ').map((writer) => {
                      return (
                        <ListItem key={writer}>
                          <ListItemText>{writer}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </>
                <>
                  Actors:
                  <List dense={true}>
                    {data.Actors.split(', ').map((actor) => {
                      return (
                        <ListItem key={actor}>
                          <ListItemText>{actor}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              </Box>
              <Box component={'div'} my={2}>
                <Typography component={'p'}>Awards: {data.Awards}</Typography>
                <Typography component={'p'}>
                  MetaScore: {data.Metascore}
                </Typography>
                <Typography component={'p'}>
                  IMDB Rating: {data.imdbRating}
                </Typography>
                <Typography component={'p'}>
                  IMDB Votes: {data.imdbVotes}
                </Typography>
                <Typography component={'p'}>DVD: {data.DVD}</Typography>
                <Typography component={'p'}>
                  BoxOffice: {data.BoxOffice}
                </Typography>
                <Typography component={'p'}>
                  Production: {data.Production}
                </Typography>
                <Typography component={'p'}>Website: {data.Website}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  } else if (data && isSerieFull(data) && data.Type === 'series') {
    return (
      <Box component={'section'} my={2} sx={{flexGrow: 1}}>
        <Container maxWidth="lg">
          <Box component={'div'} mt={4} mb={2}>
            <Typography variant="h3" component={'h3'}>
              {data.Title}
            </Typography>
            <Typography component={'p'}>
              {data.Year}, directed by {data.Director}
            </Typography>
          </Box>
          <Grid container spacing={1} direction={'row'}>
            <Grid item xs={12} md={5}>
              <img src={data.Poster} alt={data.Title} />

              <List>
                {data.Ratings.map((rating) => {
                  return (
                    <ListItem key={rating.Source}>
                      <ListItemText
                        primary={rating.Source}
                        secondary={rating.Value}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box component={'div'}>
                <Stack direction="row" spacing={1}>
                  <Chip
                    avatar={
                      <Avatar>{data.Type.charAt(0).toUpperCase()}</Avatar>
                    }
                    label={data.Type}
                  />
                </Stack>
                <Typography component={'p'}>
                  Released: {data.Released}
                </Typography>
                <Typography component={'p'} mb={2}>
                  Runtime: {data.Runtime}
                </Typography>
                <Typography component={'p'} mb={2}>
                  Total Seasons: {data.totalSeasons}
                </Typography>
                <Typography component={'p'}>{data.Plot}</Typography>
              </Box>
              <Box component={'div'} my={2}>
                <Typography component={'p'} fontWeight={'bolder'}>
                  IMDB ID: {data.imdbID}
                </Typography>
                <Typography component={'p'}>
                  Language: {data.Language}
                </Typography>
                <Typography component={'p'}>Country: {data.Country}</Typography>
                <>
                  Genre:{' '}
                  {data.Genre.split(', ').map((genre) => {
                    return <Chip key={genre} label={genre} />;
                  })}
                </>
              </Box>
              <Box component={'div'} my={2}>
                <Typography component={'p'}>
                  Director: {data.Director}
                </Typography>
                <>
                  Writer:
                  <List dense={true}>
                    {data.Writer.split(', ').map((writer) => {
                      return (
                        <ListItem key={writer}>
                          <ListItemText>{writer}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </>
                <>
                  Actors:
                  <List dense={true}>
                    {data.Actors.split(', ').map((actor) => {
                      return (
                        <ListItem key={actor}>
                          <ListItemText>{actor}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              </Box>
              <Box component={'div'} my={2}>
                <Typography component={'p'}>Awards: {data.Awards}</Typography>
                <Typography component={'p'}>
                  MetaScore: {data.Metascore}
                </Typography>
                <Typography component={'p'}>
                  IMDB Rating: {data.imdbRating}
                </Typography>
                <Typography component={'p'}>
                  IMDB Votes: {data.imdbVotes}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  } else {
    return (
      <Box component={'section'} my={2} sx={{flexGrow: 1}}>
        <Container maxWidth="lg">
          <Typography>Invalid IMDB ID</Typography>
        </Container>
      </Box>
    );
  }
};

export default Movie;
