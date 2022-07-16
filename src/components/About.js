import '../scss/About.scss';
import Heading from './Heading';
import Image from '../assets/People.jpg';
import Signature from '../assets/Signature.svg';



function About() {
  return (

    <section className='about' id='about'>
      <div className='first container'>
        <Heading
          text='O nas'
        />
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        <div className='signature'><img src={Signature} height={100} alt='signature' /></div>
      </div>
      <div className='second'><img src={Image} height={700} alt='hero' />
</div>
  </section>

  );
}

export default About;
