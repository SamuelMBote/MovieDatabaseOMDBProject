import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';
import Input from '../forms/Input';

const Header = () => {
  const salvar = useForm();

  function saveToken() {
    window.localStorage.setItem('apikey', salvar.value);
  }
  function deleteToken() {
    window.localStorage.removeItem('apikey');
  }
  return (
    <div>
      <Input label="Salvar" name="salvar" type="text" {...salvar} />
      <p>{salvar.value}</p>
      <Button onClick={saveToken}>Salvar</Button>
      <Button onClick={deleteToken}>Deletar</Button>
    </div>
  );
};
export default Header;
