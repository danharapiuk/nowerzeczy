import '../scss/ThreeColumnsHome.scss';
import Column from './Column';

function FourStepsDwa() {
  return (
    <section className='three-columns'>
      <div><Column
        counter='10'
        title='Oddanych worków'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
        /></div>
      <div><Column
        counter='5'
        title='Wspartych organizacji'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
        /></div>
      <div><Column
        counter='10'
        title='Zorganizowanych zbiórek'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
        /></div>
      </section>
  );
}

export default FourStepsDwa;
