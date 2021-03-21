import './App.css';
import PhonesList from './components/PhonesList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <h1>The Phone Cave</h1>
      <h2>Phones List</h2>
      <PhonesList/>
    </div>
  );
}

export default App;
