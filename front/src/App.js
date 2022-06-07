import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import AlbumContent from './pages/AlbumContent';
import Tarifs from './pages/Tarifs';
import Error404 from './pages/Error404';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/galerie' element={<Galerie/>}></Route>
          <Route path='/tarifs' element={<Tarifs/>}></Route>
          <Route path='/album/:albumid' element={<AlbumContent/>}></Route>
          <Route path='*' element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
