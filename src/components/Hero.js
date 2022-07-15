import '../scss/Hero.scss';
import '../scss/main.scss';

function Header() {
  return (
    <div className='hero container'>
      <div className='hero-image'></div>
      <div className='content'>
        <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
        <div className='buttons'>
          <button>Oddaj rzeczy</button>
          <button>Zorganizuj zbiórkę</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
