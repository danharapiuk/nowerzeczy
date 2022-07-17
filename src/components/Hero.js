import '../scss/Hero.scss';
import '../scss/main.scss';

import Image from '../assets/Home-Hero-Image.jpg';
import Heading from '../components/Heading';
import Button from './Btn';


function Header() {
  return (
    <div className='hero container'>
      
      <div className='hero-image'>
        <img src={Image} height={500} alt='hero' />
      </div>

      <div className='content'>
        <div className='hero-content'>
          <Heading
            text='Zacznij pomagać!
            Oddaj niechciane rzeczy w zaufane ręce'
          />
    
          <div className='buttons'>
            <Button
              text='Oddaj rzeczy'
              link='/login'/>
            <Button
              text='Zorganizuj zbiórkę'
              link='/login'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
