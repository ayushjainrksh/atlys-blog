import logo from '../../assets/images/logo.svg';
import './styles/home.scss';
import Login from './Login';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  return (
    <div className='home'>
      <Link to='/blog'>
        <img className='home__logo' src={logo} alt="logo" />
      </Link>
      <div className='home__content'>
        <Login />
      </div>
    </div>
  );
};

export default Home;
