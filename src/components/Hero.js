import '../scss/Hero.scss';
import '../scss/main.scss';
import Image from '../assets/Home-Hero-Image.jpg';
import Decoration from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='hero container'>
      <div className='hero-image'>
        <img src={Image} height={500} alt='hero'/>
      </div>
      <div className='content'>
        <h1>Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={Decoration} height={33} alt='decoration' />
        <div className='buttons'>
          <button className='button-home'><Link to='/login'>Oddaj <br></br>rzeczy</Link></button>
          <button className='button-home'><Link to='/login'>Zorganizuj <br></br>zbiórkę</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
