import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Favs from './pages/Favs';
import Home from './pages/Home';
import { AppProvider } from './context'
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
