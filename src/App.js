import './App.css';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <div>
        test link to test
        <div>
          <button>
            <Link to="/users">Go to user page</Link>
          </button>
          <button>
            <Link to="/admin">Go to Admin page</Link>
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
