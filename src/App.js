import Layout from './components/Layouts';
import './styles/App.css';
import injectContext from './store/appContext';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
      <Layout />
      </div>
    </div>
  );
}

export default injectContext(App);
