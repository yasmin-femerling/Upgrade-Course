import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui);

  const [formValues, handleInputChange] =  useForm({
    name: 'Yasmin',
    email: 'yas@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if( isFormValid() ) {
      dispatch(startRegisterWithEmailPasswordName(email,password,name));
    }

  }

  const isFormValid = () => {
    if(name.trim().length === 0) {
      dispatch(setError('Nombre requerido'));
      return false;
    }
    if(!validator.isEmail(email)) {
      dispatch(setError('Correo invalido'));
      return false;
    }
    if(password !== password2 || password.length < 5) {
      dispatch(setError('Contrasenas no coinciden o son menores a 5 caracteres'));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>

        {
          msgError && (
            <div className='auth__alert-error'>
             { msgError }
            </div>
          )
        }
          <input className="auth__input" autoComplete="off" value={name} onChange={handleInputChange} text="text" placeholder="Name" name="name" />
          <input className="auth__input" autoComplete="off" value={email} onChange={handleInputChange} text="text" placeholder="Email" name="email" />
          <input className="auth__input" autoComplete="off" value={password} onChange={handleInputChange} text="password" placeholder="Password" name="password" />
          <input className="auth__input" autoComplete="off" value={password2} onChange={handleInputChange} text="password" placeholder="Confirm" name="password2" />

          <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>

          <Link to='/auth/login' className="link">Already Registered</Link>
        </form>
      </>
  )
}
