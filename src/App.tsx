
import { Routes, Route } from 'react-router-dom';
import Habitaciones from './components/pages/habitaciones/Habitaciones';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/habitaciones' element={<Habitaciones/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App