import './App.css';
import AddressInput from './components/Layout/AddressInput';
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App">
      <AddressInput API_KEY={API_KEY} />
    </div>
  );
}

export default App;
