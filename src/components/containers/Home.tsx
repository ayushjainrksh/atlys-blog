import { Link, useLocation } from 'react-router-dom';

const Home = (): JSX.Element => {
  const location = useLocation();

  return (
    <div>
      Home
      <Link to="/login" state={{ previousLocation: location }}>Login</Link>
    </div>
  );
};

export default Home;
