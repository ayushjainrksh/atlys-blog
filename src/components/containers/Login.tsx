import { useState } from 'react';
import Input from '../library/Input';
import './styles/login.scss';
import Button from '../library/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import { ROUTES } from '../../constants/routes';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const onSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();

    // Make API call to login user
    if (formInput.email === '' || formInput.password === '') {
      return;
    }

    const user = {
      email: formInput.email,
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
      username: 'Jane Doe',
      id: 3,
      token: 'randomtoken'
    };

    if (login(user)) {
      navigate(String(location.state?.previousLocation ?? ROUTES.BLOG));
    }
  };

  return (
    <div className='login'>
      <div className='login__header'>WELCOME BACK</div>
      <h1 className='login__title'>Log into your account</h1>
      <form className='login__form'>
        <Input
          name='email'
          type='text'
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
          <Button
            text='Login now'
            variant='primary'
            size='large'
            type='submit'
            onClick={onSubmit}
          />
        </div>
        <div className='login__footer'>
          Not registered yet?
          <Link className='login__footer__action'
            to={ROUTES.SIGNUP}
            state={{ previousLocation: location.state?.previousLocation }}
          >
            Register →
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
