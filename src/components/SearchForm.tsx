import React from 'react';
import useForm from '../hooks/useForm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar, {SnackbarOrigin} from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';
import ISearch from '../interfaces/ISearch';
import ButtonGroup from '@mui/material/ButtonGroup';
import MuiAlert, {AlertProps, AlertColor} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface StateAlert extends SnackbarOrigin {
  open: boolean;
  message: string;
  severity?: AlertColor;
}

const SearchForm = () => {
  const title = useForm();
  const imdbid = useForm('imdb');
  const year = useForm();

  const [snackBarState, setSnackBarState] = React.useState<StateAlert>({
    open: false,
    message: '',
    vertical: 'bottom',
    horizontal: 'right',
  });

  const {vertical, horizontal, open, message, severity} = snackBarState;

  function handleClick(
    newState: SnackbarOrigin,
    message: string,
    severity: AlertColor,
  ) {
    setSnackBarState({open: true, message, severity, ...newState});
  }

  function handleClose() {
    setSnackBarState({...snackBarState, open: false});
  }

  function doSearch() {
    const search: ISearch = {title: null, imdb: null, year: null};
    try {
      if (!imdbid.value.length && !title.value.length)
        throw new Error('Insira informações de busca');

      if (imdbid.value.length) {
        const idValido = imdbid.validate();
        if (idValido) {
          search.imdb = imdbid.value;

          title.setValue('');
          year.setValue('');
        }
      }

      if (title.value.length) search.title = title.value;

      if (year.value.length) {
        search.year = year.value;
      }
    } catch (error) {
      if (error instanceof Error)
        handleClick(
          {horizontal: 'right', vertical: 'bottom'},
          error.message,
          'error',
        );
    }

    try {
      if (
        search.imdb?.length &&
        (search.title?.length || search.year?.length)
      ) {
        const message =
          'Atenção você digitou um código IMDB, a pesquisa será feita através desse código e desconsiderará título e/ou ano digitado.';
        handleClick({horizontal: 'right', vertical: 'bottom'}, message, 'info');
      }
    } catch (error) {}
    requestMovies(search);
    return search;
  }

  async function requestMovies(search: ISearch) {
    let searchLink;
    const key = window.localStorage.getItem('apikey');
    const apilink = `http://www.omdbapi.com/?apikey=${key}`;
    if (search && search.imdb?.length)
      searchLink = apilink + `&i=${search.imdb}`;
    console.log(searchLink);
    return searchLink;
  }
  function resetSearch() {
    imdbid.setValue('');
    title.setValue('');
    year.setValue('');
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{xs: 2, md: 3}}
        columns={{xs: 4, sm: 8, md: 12}}
      >
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="searchByTitle"
            label="Digite o título"
            variant="outlined"
            onChange={title.onChange}
            value={title.value}
            onBlur={title.onBlur}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            id="searchByIMDBID"
            label="Digite código IMDB"
            variant="outlined"
            type="text"
            value={imdbid.value}
            onChange={imdbid.onChange}
            error={imdbid.error ? true : false}
            helperText={imdbid.error ? imdbid.error : false}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            id="searchWithYear"
            label="Digite o ano do filme"
            variant="outlined"
            type="number"
            value={year.value}
            onChange={year.onChange}
            onBlur={year.onBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup
            disableElevation
            aria-label="Disabled elevation buttons"
            size="large"
          >
            <Button variant="contained" color="error" onClick={resetSearch}>
              Reset
            </Button>
            <Button variant="outlined" onClick={doSearch}>
              Buscar
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{vertical, horizontal}}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={severity ? severity : 'info'}
          sx={{width: '100%'}}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SearchForm;
