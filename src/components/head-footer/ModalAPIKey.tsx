import React from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
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

  return (
    <div>
      <Dialog open={state} onClose={handleClose}>
        <DialogTitle>Insira sua key</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To use this website you need to have an Open Movie Data Base api key
            If you don't have
            If you don't have one yet, go to: {' '}
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
            Save
          </Button>
          <Button
            onClick={deleteToken}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalAPIKey;
