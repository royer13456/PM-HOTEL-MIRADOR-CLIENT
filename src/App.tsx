
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='' />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App