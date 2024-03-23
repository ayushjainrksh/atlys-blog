import { useState } from 'react';
import Input from '../library/Input';
import './styles/signup.scss';
import Button from '../library/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    email: '',
    username: '',
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

    // Make API call to create account
    if (formInput.email === '' || formInput.username === '' || formInput.password === '') {
      return;
    }

    navigate('/blog');
  };

  return (
    <div className='signup'>
      <div className='signup__header'>SIGN UP</div>
      <h1 className='signup__title'>Create an account to continue</h1>
      <form className='signup__form'>
        <Input
          name='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
          onChange={onChange}
          value={formInput?.email}/>
        <Input
          name='username'
          type='text'
          label='Username'
          placeholder='Enter your username'
          onChange={onChange}
          value={formInput?.username}/>
        <Input
          name='password'
          type='password'
          label='Password'
          placeholder='Enter your password'
          onChange={onChange}
          value={formInput?.password}/>
        <div className='signup__action'>
          <Button
            text='Continue'
            variant='primary'
            size='large'
            type='submit'
            onClick={onSubmit}
          />
        </div>
        <div className='signup__footer'>
          Already have an account?
          <Link className='signup__footer__action'
            to='/login'
            state={{ previousLocation: location.state?.previousLocation }}
          >
            Login →
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
