import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="main-background">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
