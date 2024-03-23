import logo from '../../assets/images/logo.svg';
import './styles/home.scss';
import Login from './Login';

const Home = (): JSX.Element => {
  return (
    <div className='home'>
      <img className='home__logo' src={logo} alt="logo" />
      <div className='home__content'>
        <Login />
      </div>
    </div>
  );
};

export default Home;
