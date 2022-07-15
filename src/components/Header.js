import '../scss/Header.scss';
import '../scss/main.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header container'>
      <ul className='login'>
        <li><Link to='/login'>Zaloguj</Link></li>
        <li><Link to='/register'>Załóż konto</Link></li>
      </ul> 

      <ul className='menu'>
        <li><Link to='/'>Start</Link></li>
        <li>O co chodzi?</li>
        <li>O nas</li>
        <li>Fundacja i organizacje</li>
        <li>Kontakt</li>
      </ul>
    </header>  
  );
}

export default Header;
