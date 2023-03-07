
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import RoomPage from './pages/RoomPage';
import ContactUsPage from './pages/ContactUsPage';
import Reserve from './components/Reserve';
import About from './pages/About';


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/habitaciones' element={<RoomPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacto' element={<ContactUsPage />} />
        <Route path='/reserve/:id' element={<Reserve />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App