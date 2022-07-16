import '../scss/Column.scss';
import '../scss/main.scss';

function Column({ counter, title, subtitle }) {
  
  return (
    <div className='column container'>
        <h2>{counter}</h2>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
  );
}

export default Column;
