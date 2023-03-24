import React from 'react';
import useForm from '../hooks/useForm';
import Button from './forms/Button';
import Input from './forms/Input';

const Home = () => {
  const buscar = useForm();
  return (
    <div>
      <h1>MB0t3D3v Movie Database</h1>
      <p>The Open Movie Database API Catalog</p>
      <form action="">
        <Input label="Buscar" name="buscar" type="text" {...buscar} />
        <Button>Buscar</Button>
      </form>
    </div>
  );
};

export default Home;
