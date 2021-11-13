import Layout from './components/Layouts';
import './styles/App.css';
import injectContext from './store/appContext';

function App() {
  return (
    <div className="container-fluid">
    <div className="App container-fluid">
      <Layout />
      </div>
    </div>
  );
}

export default injectContext(App);
