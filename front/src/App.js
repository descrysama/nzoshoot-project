import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbarComponent';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
