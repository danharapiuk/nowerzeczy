import '../scss/main.scss';
import Heading from './Heading';
import '../scss/WhoWeHelp.scss';


function WhoWeHelp() {

  return (
    <section className='whoWeHelp container' id='fundacja'>
      <Heading
        text='hello'
      />

      <div className='buttons'>
        <button></button>
      </div>
      <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
    </section>

  );
}

export default WhoWeHelp;
