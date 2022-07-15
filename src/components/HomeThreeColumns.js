import '../scss/HomeThreeColumns.scss';

function HomeThreeColumns() {
  return (
    <section className='three-columns'>
      <div className='columns container'>
      <div className='column'>
        <p className='counter'>10</p>
        <p className='title'>Oddanych worków</p>
        <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur elit eget felis rhoncus, sed sagittis dui vehicula. Praesent tincidunt libero nec pretium sagittis. Morbi arcu mi, venenatis vel vestibulum quis, rutrum a tortor.</p>
      </div>
      <div className='column'>
        <p className='counter'>5</p>
        <p className='title'>Wspartych organizacji</p>
        <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur elit eget felis rhoncus, sed sagittis dui vehicula. Praesent tincidunt libero nec pretium sagittis. Morbi arcu mi, venenatis vel vestibulum quis, rutrum a tortor.</p>
      </div>
      <div className='column'>
        <p className='counter'>7</p>
        <p className='title'>Zorganizowanych zbiórek</p>
        <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur elit eget felis rhoncus, sed sagittis dui vehicula. Praesent tincidunt libero nec pretium sagittis. Morbi arcu mi, venenatis vel vestibulum quis, rutrum a tortor.</p>
        </div>
        </div>
  </section> 
  );
}

export default HomeThreeColumns;
