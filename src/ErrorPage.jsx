// profiles have to have url params (there's no such thing
// as an empty profile), so this will show if the user tries
// to go to /profile/
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
