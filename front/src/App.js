import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAlbums from './pages/admin/albums/AdminAlbums';
import AdminAlbumsCreate from './pages/admin/albums/AdminAlbumCreate';
import AdminAlbumEdit from './pages/admin/albums/AdminAlbumEdit';
import AdminTarifs from './pages/admin/Tarifs/AdminTarifs';
import AdminTarifsEdit from './pages/admin/Tarifs/AdminTarifsEdit';
import AdminTarifsCreate from './pages/admin/Tarifs/AdminTarifsCreate';
import ContactDetail from './pages/admin/Contacts/ContactsDetail';
import AdminAddPhoto from './pages/admin/albums/AdminAddPhoto';
import ProtectLogin from './services/middlewares/ProtectLogin';
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
          <Route path='/ns-nimda/login' element={<ProtectLogin><Login/></ProtectLogin>}></Route>
          <Route path='/ns-nimda/dashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/albums' element={<ProtectedRoute><AdminAlbums/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/albums/create' element={<ProtectedRoute><AdminAlbumsCreate/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/albums/:albumid' element={<ProtectedRoute><AdminAlbumEdit/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/albums/add/:id' element={<ProtectedRoute><AdminAddPhoto/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/tarifs' element={<ProtectedRoute><AdminTarifs/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/tarifs/edit/:id' element={<ProtectedRoute><AdminTarifsEdit/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/tarifs/create/' element={<ProtectedRoute><AdminTarifsCreate/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/contact/' element={<ProtectedRoute><ContactDetail/></ProtectedRoute>}></Route>
          <Route path='/ns-nimda/' element={<Navigate to="/ns-nimda/login" />}></Route>


          <Route path='*' element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
