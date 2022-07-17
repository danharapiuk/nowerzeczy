import '../scss/Contact.scss';
import Heading from './Heading';
import ContactForm from '../components/ContactForm';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';



function Contact() {
  return (
    <>
      <section className='contact' id='contact'>
        <div className='image'></div>
        <div className='forms'>
          <Heading
            text='Skontaktuj się z nami'
          />
            <ContactForm />
        </div>
      </section>
      <footer>
        <div className='footer'>
          Copyright by Coders Lab
        </div>
        <div className='icons'>
          <img src={Facebook} height={20} alt='facebook' />
          <img src={Instagram} height={20} alt='instagram' />
        </div>
      </footer>
    </>

  );
}

export default Contact;
