// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreatePost from '../views/CreatePost';
import './styles/blog.scss';
import { samplePosts } from '../../constants/sample';
import { type TPost } from '../../global';
import Post from '../views/Post';

const Blog = (): JSX.Element => {
  const [posts, setPosts] = useState<TPost[]>([]);

  const handlePost = (postContent: string, category: number): void => {
    console.log(postContent, category);
    const newPost: TPost = {
      id: Math.floor(100 * Math.random()),
      content: postContent,
      category,
      createdAt: new Date().toISOString(),
      author: {
        id: 3,
        name: 'Theresa Doe',
        avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
      },
      commentsCount: 0
    };

    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    // Fetch posts from the server
    setPosts(samplePosts);
  }, []);

  return (
    <div className='blog'>
      <div className='blog__content'>
        <h1 className='blog__content__title'>Hello Jane</h1>
        <div className='blog__content__description'>How are you doing today? Would you like to share something with the community 🤗</div>
        {/* <Link to="/login" state={{ previousLocation: location }}>Login</Link> */}
        <div className='blog__content__posts'>
          <CreatePost handlePost={handlePost} />

          {
            posts.map((post: TPost) => (
              <Post key={post.id} {...post} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;
