
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import RoomPage from './pages/RoomPage';
import ContactUsPage from './pages/ContactUsPage';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/habitaciones' element={<RoomPage />} />
        <Route path='/contacto' element={<ContactUsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App