import '../scss/Hero.scss';
import '../scss/main.scss';
import Image from '../assets/Home-Hero-Image.jpg';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';


function Header() {
  return (
    <div className='hero container'>
      <div className='hero-image'>
        <img src={Image} height={700} alt='hero' />
      </div>
      <div className='content'>
        <Heading
          text='Zacznij pomagać!
          Oddaj niechciane rzeczy w zaufane ręce' />

        <div className='buttons'>
          <button className='button-home'><Link to='/login'>Oddaj <br></br>rzeczy</Link></button>
          <button className='button-home'><Link to='/login'>Zorganizuj <br></br>zbiórkę</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
