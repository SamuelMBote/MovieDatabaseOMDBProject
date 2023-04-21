import React from 'react';
import {Paper, Box, Container, Typography, Grid} from '@mui/material';
const Footer = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        height: 'auto',

        bottom: 0,
        position: 'fixed',
      }}
      component={'footer'}
      square
      variant="outlined"
    >
      <Box>
        {' '}
        <Container
          maxWidth="lg"
          sx={{paddingTop: '1rem', paddingBottom: '1rem'}}
        >
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="black" variant="h5">
                Movie Database by OMDB API
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                {`2023 | React | TypeScript | Material UI | React Router`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                Developed by{' '}
                <Typography
                  component={'a'}
                  sx={{textDecoration: 'none', color: 'red'}}
                  href="https://github.com/SamuelMBote"
                >
                  SamuelMBote
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Paper>
  );
};

export default Footer;
