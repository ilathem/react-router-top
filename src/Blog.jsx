import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Blog = () => {
  const { '*': splat } = useParams();

  return (
    <div>
      <h1>Welcome to the blog!</h1>
      {splat === 'post1' ? (
        <Post title={'post1'} />
      ) : splat === 'post2' ? (
        <Post title='post2' />
      ) : (
        <div>
          <h2>Home page</h2>
          <p>Navigate to one of these:</p>
          <ul>
            <li>
              <Link to='/blog/post1'>Post 1</Link>
            </li>
            <li>
              <Link to='/blog/post2'>Post 2</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Post = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero
        rem temporibus quaerat iure earum laboriosam autem cumque, minus
        voluptate, soluta itaque reiciendis quis non tempore quisquam ipsa quo.
        Doloribus.
      </p>
      <p>
        <Link to='/blog'>Go back</Link>
      </p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Blog;
