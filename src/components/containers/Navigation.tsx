import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Blog from './Blog';
import Modal from '../library/Modal';

const Navigation = (): JSX.Element => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  console.log(location, previousLocation);

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
          </Routes>
        )
      }
    </>
  );
};

export default Navigation;
