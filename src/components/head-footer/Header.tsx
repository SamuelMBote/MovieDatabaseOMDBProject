import React from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  AppBar,
  Container,
  Tooltip,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ModalAPIKey from './ModalAPIKey';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const [openCloseModal, setOpenCloseMOdal]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = React.useState<boolean>(false);

  function handleAPIKeyModal() {
    setOpenCloseMOdal(!openCloseModal);
  }
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMoviesIcon sx={{mr: 1}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},

              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie Database
            <Typography
              variant="caption"
              component={'span'}
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},

                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {' '}
              by OMDB API
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,

              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie Database
            <Typography
              variant="caption"
              component={'span'}
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},

                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {' '}
              by OMDB API
            </Typography>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}></Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleAPIKeyModal} sx={{p: 0}}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <ModalAPIKey state={openCloseModal} setState={setOpenCloseMOdal} />
    </AppBar>
  );
};
export default Header;
