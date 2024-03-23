import { type TPost } from '../global';

export const samplePosts: TPost[] = [
  {
    id: 1,
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    category: 0,
    createdAt: '2024-03-23T20:27:31.885Z',
    author: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    commentsCount: 24
  }, {
    id: 2,
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    category: 1,
    createdAt: '2024-03-23T20:27:31.885Z',
    author: {
      id: 2,
      name: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    commentsCount: 12
  }
];
