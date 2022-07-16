import '../scss/FourSteps.scss';
import Step from '../components/Step';
import Heading from '../components/Heading';
import Btn from '../components/Btn';

import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';

function FourSteps() {
  return (

<section className='four-steps px' id='four-steps-id'>
      <Heading 
        text='Wystarczą 4 proste kroki' />

      <div className='steps '>
        <Step
        icon={<img src={Icon1} height={83} alt='icon1' />}
        title='Wybierz rzeczy'
        text='Ubrania, zabawki, sprzęt i inne'/>
          
        <Step
        icon={<img src={Icon2} height={83} alt='icon2' />}
        title='Spakuj je'
        text='skorzystaj z worków na śmieci' />
        
          <Step
        icon={<img src={Icon3} height={83} alt='icon3' />}
        title='Zdecyduj komu chcesz pomóc'
        text='wybierz zaufane miejsce'/>

         <Step
        icon={<img src={Icon4} height={83} alt='icon4' />}
        title='Zamów kuriera'
        text='kurier przyjedzie w dogodnym terminie'/>
        
      </div>

      <Btn
        text='Oddaj rzeczy'
        link='/login'/>
    
      </section>

  );
}

export default FourSteps;
