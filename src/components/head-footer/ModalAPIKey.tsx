import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import useForm from '../../hooks/useForm';

const ModalAPIKey = ({
  state,
  setState,
}: {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClose = () => {
    setState(false);
  };
  function saveToken() {
    window.localStorage.setItem('apikey', apiKeyInput.value);
    setState(!state);
  }
  function deleteToken() {
    window.localStorage.removeItem('apikey');
    apiKeyInput.setValue('');
  }
  React.useEffect(() => {
    setState(state);
  }, [state, setState]);

  const apiKeyInput = useForm();

  React.useEffect(() => {
    const apikey = window.localStorage.getItem('apikey');
    if (apikey) {
      apiKeyInput.setValue(apikey);
    } else {
      apiKeyInput.setValue('');
    }
    if (!apikey) {
      setState(true);
    }
  }, [setState]);

  /*<div>
    <Input label="Salvar" name="salvar" type="text" {...salvar} />
    <p>{salvar.value}</p>
    <Button onClick={saveToken}>Salvar</Button>
    <Button onClick={deleteToken}>Deletar</Button>
  </div>;*/
  return (
    <div>
      <Dialog open={state} onClose={handleClose}>
        <DialogTitle>Insira sua key</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para usar esse site você precisa ter uma chave da api do Open Movie
            Data Base, Se você ainda não tem uma acesse{' '}
            <Link to={'https://www.omdbapi.com/apikey.aspx'}>
              www.omdbapi.com/apikey.aspx
            </Link>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="apikey"
            label="API Key"
            type="text"
            fullWidth
            variant="outlined"
            value={apiKeyInput.value}
            onChange={apiKeyInput.onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={saveToken}
            startIcon={<SaveIcon />}
          >
            Salvar
          </Button>
          <Button
            onClick={deleteToken}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalAPIKey;
