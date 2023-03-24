import React from 'react';

type Validador = 'email' | 'number' | 'password' | false;

const validacao: {[key: string]: {regex: RegExp; message: string}} = {
  email: {
    regex: /[^\s@]+@[^\s@]+\.[^\s@]+/,
    message: 'Preencha um Email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter caracter maiúsculo, minúsculo e digito. Com no mínimo 8 caracteres',
  },
  number: {regex: /^\d+$/, message: 'Utilize números apenas'},
};
const useForm: (type?: Validador) => {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  error: string | null;
  validate: () => boolean;
  onBlur: () => boolean;
} = (type?: Validador) => {
  const [value, setValue]: [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ] = React.useState('');
  const [error, setError]: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ] = React.useState<string | null>(null);

  function validate(value: string): boolean {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (type && validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: React.FocusEvent<HTMLInputElement>): void {
    if (event && event.target instanceof HTMLInputElement) {
      if (error) validate(event.target.value);
      setValue(event.target.value);
    }
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
