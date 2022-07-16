import '../scss/Heading.scss';
import '../scss/main.scss';
import Decoration from '../assets/Decoration.svg';


function Heading({ text }) {
  
  return (
    <div className='heading'>
        <h2>{text}</h2>
        <img src={Decoration} height={33} alt='decoration' />
      </div>
  );
}

export default Heading;
