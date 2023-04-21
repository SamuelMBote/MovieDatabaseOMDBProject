import React from 'react';
import useForm from '../hooks/useForm';
import {
  Box,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  ButtonGroup,
  Checkbox,
  Container,
  Typography,
  AlertColor,
} from '@mui/material';

import {SearchContext} from '../providers/SearchStorage';
import {useNavigate} from 'react-router-dom';
import ErrorAlert from './helpers/ErrorAlert';

const SearchForm = () => {
  const title = useForm();
  const imdbid = useForm('imdb');
  const year = useForm();

  const {search, setSearch} = React.useContext(SearchContext);

  const [specificTitle, setSpecificTitle]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const [error, setError]: [
    {error: boolean; message: string; severity: AlertColor},
    React.Dispatch<
      React.SetStateAction<{
        error: boolean;
        message: string;
        severity: AlertColor;
      }>
    >,
  ] = React.useState<{error: boolean; message: string; severity: AlertColor}>({
    error: false,
    message: '',
    severity: 'info',
  });

  function resetSearch() {
    imdbid.setValue('');
    title.setValue('');
    year.setValue('');
    setSpecificTitle(false);
    if (setSearch) setSearch({...search, title: null, imdb: null, year: null});
    navigate('/');
  }

  function doSearch(): void {
    try {
      if (!imdbid.value.length && !title.value.length) {
        throw new Error('Fill the fields of search');
      } else if (
        imdbid.value.length &&
        (title.value.length || year.value.length)
      ) {
        title.setValue('');
        year.setValue('');
        if (setSearch)
          setSearch({
            ...search,
            imdb: imdbid.value,
            title: null,
            year: null,
            specific: false,
          });
        setError({
          ...error,
          error: true,
          message:
            'Attention! The 3 fields were filled in but the search will only be done through the IMDB code',
        });
      } else {
        if (setSearch)
          setSearch({
            ...search,
            title: title.value,
            year: year.value,
            imdb: null,
            specific: specificTitle,
          });
      }
    } catch (error) {
      if (error instanceof Error)
        setError({
          ...error,
          error: true,
          message: error.message,
          severity: 'error',
        });
    }
    navigate('/');
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="subtitle1" fontSize={22} align="center" m={3}>
        Search about your favorite movie in Open Movie Database API Catalog
      </Typography>
      <Box component={'form'}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{xs: 2, md: 3}}
        >
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="searchByTitle"
              label="Movie Title"
              variant="outlined"
              onChange={title.onChange}
              value={title.value}
              onBlur={() => {
                title.onBlur();
                document.getElementById('btnSearch')?.focus();
              }}
              helperText="You can search using the title"
            />
          </Grid>{' '}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              id="searchWithYear"
              label="Movie Year"
              variant="outlined"
              type="number"
              value={year.value}
              onChange={year.onChange}
              onBlur={() => {
                year.onBlur();
                document.getElementById('btnSearch')?.focus();
              }}
              helperText="If you want, enter a year"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              id="searchByIMDBID"
              label="IMDB code"
              variant="outlined"
              type="text"
              value={imdbid.value}
              onChange={imdbid.onChange}
              onBlur={() => {
                imdbid.onBlur();
                document.getElementById('btnSearch')?.focus();
              }}
              error={imdbid.error ? true : false}
              helperText={
                imdbid.error ? imdbid.error : 'Or search using the IMDB ID'
              }
            />
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup
              disableElevation
              aria-label="Button Group"
              size="large"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value={specificTitle ? 'on' : 'off'}
                    checked={specificTitle}
                    onChange={() => setSpecificTitle(!specificTitle)}
                  />
                }
                label="Click here for specific title"
              />
              <Button variant="contained" color="error" onClick={resetSearch}>
                Reset
              </Button>
              <Button id="btnSearch" variant="outlined" onClick={doSearch}>
                Search
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
      <ErrorAlert
        error={error.error}
        message={error.message}
        severity={error.severity}
      />
    </Container>
  );
};

export default SearchForm;
