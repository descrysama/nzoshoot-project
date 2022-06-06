import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbarComponent';
import './index.css';
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Tarifs from './pages/Tarifs';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/galerie' element={<Galerie/>}></Route>
          <Route path='/tarifs' element={<Tarifs/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
