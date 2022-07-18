import '../scss/ContactForm.scss';

function ContactForm() {
  return (
    <>
      <div className='formularz'>
      <div class='form1'>
        <label><p>Wpisz swoje imię</p><br></br>
          <input type='text' placeholder='Krzysztof' />
        </label>
        <label><p>Wpisz swój email</p><br></br>
          <input type='text' placeholder='abc@xyz.pl' />
        </label>
      </div>
      
        <div className='form2'>
          <label><p>Wpisz swoją wiadomość</p>
            <input type='text'
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              minLength="1"
            rows='6'/>     
          </label>
          <button type = "submit" id= "submitBtn" className = "submitBtn"> Wyślij</button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
