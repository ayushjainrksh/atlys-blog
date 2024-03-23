import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './styles/home.scss';

const Home = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className='home'>
      <img src={logo} alt="logo" />
      <Link to="/login" state={{ previousLocation: location }}>Login</Link>
    </div>
  );
};

export default Home;
