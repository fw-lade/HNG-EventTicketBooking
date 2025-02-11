import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './component/navbar/Navbar';

function App() {

  return (
    <>
      <main className="app-wrapper">
        <Navbar/>
        <Outlet />
      </main>
    </>
  );
}

export default App
