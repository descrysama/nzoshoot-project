import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';

import ProtectedRoute from './services/middlewares/ProtectedRoutes';

import Home from './pages/Home';
import Galerie from './pages/Galerie';
import AlbumContent from './pages/AlbumContent';
import Tarifs from './pages/Tarifs';
import Error404 from './pages/Error404';
import ContactMe from './pages/ContactMe';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/galerie' element={<Galerie/>}></Route>
          <Route path='/tarifs' element={<Tarifs/>}></Route>
          <Route path='/album/:albumid' element={<AlbumContent/>}></Route>
          <Route path='/contactez-moi' element={<ContactMe/>}></Route>

          {/* ADMIN ROUTES */}
          <Route path='/admin/login' element={<Login/>}></Route>
          <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>


          <Route path='*' element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
