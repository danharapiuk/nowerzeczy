import '../scss/FourSteps.scss';
import Step from '../components/Step';
import Decoration from '../assets/Decoration.svg';
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';




function FourSteps() {
  return (
    <section className='four-steps container'>
      <h2>Wystarczą 4 proste kroki</h2>
      <img src={Decoration} height={33} alt='decoration' />

      <div className='steps'>
        <Step
        icon={<img src={Icon1} height={83} alt='icon1' />}
        title='Wybierz rzeczy'
        text='Ubrania, zabawki, sprzęt i inne'/>
          
        <Step
        icon={<img src={Icon2} height={83} alt='icon2' />}
        title='Wybierz rzeczy'
        text='Ubrania, zabawki, sprzęt i inne' />
        
          <Step
        icon={<img src={Icon3} height={83} alt='icon3' />}
        title='Wybierz rzeczy'
        text='Ubrania, zabawki, sprzęt i inne'/>

         <Step
        icon={<img src={Icon4} height={83} alt='icon4' />}
        title='Wybierz rzeczy'
        text='Ubrania, zabawki, sprzęt i inne'/>
        
        </div>
      
      </section>
  );
}

export default FourSteps;
