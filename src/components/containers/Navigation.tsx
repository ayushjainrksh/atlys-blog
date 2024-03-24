import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Blog from './Blog';
import Modal from '../library/Modal';
import Signup from './Signup';
import { type TUser } from '../../global';
import { getUser, isLoggedIn } from '../../services/auth';
import { ROUTES } from '../../constants/routes';

const Navigation = (): JSX.Element => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  const [currentUser, setCurrentUser] = useState<TUser>();
  const isLoggedInUser = isLoggedIn();

  useEffect(() => {
    const user = getUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [isLoggedInUser]);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path={ROUTES.HOME} element={<Home currentUser={currentUser} />} />
        <Route path={ROUTES.BLOG} element={<Blog currentUser={currentUser}/>} />
        {!previousLocation && (
          <>
            <Route path={ROUTES.LOGIN} element={<Home currentUser={currentUser} />} />
            <Route path={ROUTES.SIGNUP} element={<Home currentUser={currentUser} />} />
          </>
        )}
      </Routes>
      {
        previousLocation && (
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Modal><Login /></Modal>} />
            <Route path={ROUTES.SIGNUP} element={<Modal><Signup /></Modal>} />
          </Routes>
        )
      }
    </>
  );
};

export default Navigation;
