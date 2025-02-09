// need to use Link to avoid reloading the page
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <h1>Hello from the main page of the app!</h1>
    <p>Here are some exapmles fo links to other pages</p>
    <nav>
      <ul>
        <li>
          <Link to="profile">Profile page</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default App;