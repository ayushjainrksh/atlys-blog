import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Blog from './Blog';
import Modal from '../library/Modal';
import Signup from './Signup';

const Navigation = (): JSX.Element => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {
        previousLocation && (
          <Routes>
            <Route path="/login" element={<Modal><Login /></Modal>} />
            <Route path="/signup" element={<Modal><Signup /></Modal>} />
          </Routes>
        )
      }
    </>
  );
};

export default Navigation;
