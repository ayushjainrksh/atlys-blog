import logo from '../../assets/images/logo.svg';
import './styles/home.scss';
import Login from './Login';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { type TUser } from '../../global';
import { ROUTES } from '../../constants/routes';
import Signup from './Signup';

const Home = ({ currentUser }: { currentUser?: TUser }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      // Redirect to blog page
      navigate(ROUTES.BLOG);
    }
  }, [currentUser]);

  return (
    <div className='home'>
      <Link to={ROUTES.BLOG}>
        <img className='home__logo' src={logo} alt="logo" />
      </Link>
      <div className='home__content'>
        {
          location.pathname === ROUTES.SIGNUP
            ? <Signup />
            : <Login />
        }
      </div>
    </div>
  );
};

export default Home;
