import '../scss/Step.scss';
import '../scss/main.scss';

function Step({ icon, title, text }) {
  
  return (
    <div className='step'>
        <div>{icon}</div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
  );
}

export default Step;
