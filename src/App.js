import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import { HashRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
   <HashRouter>
   <Navbar /> 
    <Routes>
      <Route exact path="/" element={<Main/>}/>
    </Routes>
    <Routes>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
   <Footer/>
   </HashRouter>
    </>
  );
}

export default App;
