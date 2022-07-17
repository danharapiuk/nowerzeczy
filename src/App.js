import './scss/main.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Wylogowano from './pages/Wylogowano';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/wylogowano' element={<Wylogowano />} />
        <Route path='*' element ={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 