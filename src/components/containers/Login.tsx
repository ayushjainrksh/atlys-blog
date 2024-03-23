import { useState } from 'react';
import Input from '../library/Input';
import './styles/login.scss';
import Button from '../library/Button';
import { Link } from 'react-router-dom';

const Login = (): JSX.Element => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='login'>
      <div className='login__header'>WELCOME BACK</div>
      <h1 className='login__title'>Log into your account</h1>
      <form className='login__form'>
        <Input
          name='email'
          type='email'
          label='Email or Username'
          placeholder='Enter your email or username'
          onChange={onChange}
          value={formInput?.email}/>
        <Input
          name='password'
          type='password'
          label='Password'
          placeholder='Enter your password'
          onChange={onChange}
          value={formInput?.password}/>
        <div className='login__action'>
          <Button text='Login now' variant='primary' size='large' type='submit'/>
        </div>
        <div className='login__footer'>
          Not registered yet?
          <Link className='login__footer__action' to='/signup'>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
