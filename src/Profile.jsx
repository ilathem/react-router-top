import { useParams } from 'react-router-dom';
import DefaultProfile from './DefaultProfile';
import Spinach from './Spinach';
import Popeye from './Popeye';

const Profile = () => {
  // use params to get url parameters (defined in main.jsx as
  // dynamic route segment)
  const { '*': splat } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {splat === 'popeye' ? (
        <Popeye />
      ) : splat === 'spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
