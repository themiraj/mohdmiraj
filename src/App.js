import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <HomePage />
  );
}

export default App;
