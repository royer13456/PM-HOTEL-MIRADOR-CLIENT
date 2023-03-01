
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import RoomPage from './pages/RoomPage';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/habitaciones' element={<RoomPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App