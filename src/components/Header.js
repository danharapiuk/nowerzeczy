import '../scss/Header.scss';
import '../scss/main.scss';
import { Link } from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'

function Header() {
  return (
    <header className='header container'>
      <ul className='login'>
        <li><Link to='/login'>Zaloguj</Link></li>
        <li><Link to='/register'>Załóż konto</Link></li>
      </ul> 

      <ul className='menu'>
        <li><Link to='/'>Start</Link></li>
        <li><LinkScroll to="four-steps-id" spy={true} smooth={true} offset={50} duration={500}>O co chodzi?</LinkScroll></li>
        <li><LinkScroll to="about" spy={true} smooth={true} offset={50} duration={500}>O nas</LinkScroll></li>
        <li><LinkScroll to="fundacja" spy={true} smooth={true} offset={50} duration={500}>Fundacja i organizacje</LinkScroll></li>
        <li><LinkScroll to="contact" spy={true} smooth={true} offset={50} duration={500}>Kontakt</LinkScroll></li>


        
      </ul>
    </header>  
  );
}

export default Header;
