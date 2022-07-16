import '../scss/Button.scss';
import '../scss/main.scss';
import { Link } from 'react-router-dom';


function Button({text, link}) {
  return (
    <>
      <button><Link to={link}>{text}</Link></button>
    </>
  );
}

export default Button;
