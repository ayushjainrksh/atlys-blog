import { Link } from 'react-router-dom';

const Blog = (): JSX.Element => {
  return (
    <div>
      <div>Blog</div>
      <Link to="/login" state={{ previousLocation: location }}>Login</Link>
    </div>
  );
};

export default Blog;
