
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
    <Header />
<Navbar />




    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
    

  );
}

export default App;
