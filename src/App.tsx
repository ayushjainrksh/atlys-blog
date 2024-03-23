import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/containers/Navigation';

function App (): JSX.Element {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
