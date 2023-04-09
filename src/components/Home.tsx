import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchForm from './SearchForm';

const Home = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" align="center" m={2}>
          Movie Database
        </Typography>
        <Typography variant="subtitle1" fontSize={22} align="center" m={3}>
          The Open Movie Database API Catalog
        </Typography>
        <Box alignContent={'center'} alignItems={'center'}>
          <SearchForm />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
