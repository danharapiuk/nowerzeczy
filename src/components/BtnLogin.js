import '../scss/ButtonLogin.scss';
import '../scss/main.scss';
import { Link } from 'react-router-dom';


function ButtonLogin({text, link}) {
  return (
    <>
      <button><Link to={link}>{text}</Link></button>
    </>
  );
}

export default ButtonLogin;
