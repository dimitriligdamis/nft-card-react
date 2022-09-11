import './style.scss';
import equilibrium from "../../assets/images/image-equilibrium.jpg"
import avatar from "../../assets/images/image-avatar.png"

export default function CardNft() {
  return (
    <div className='CardNft'>
      <img className='CardNft__img' src={equilibrium} alt='equilibrium' />
      <h1 className='CardNft__name'>Equilibrium #3429</h1>
      <p className='CardNft__description'>Our Equilibrium collection promotes balance and calm.</p>
      <div className='CardNft__stats'>
        <h2 className='CardNft__eth'>0.041 ETH</h2>
        <p className='CardNft__days-left'>3 days left</p>
      </div>
      <div className='CardNft__info'>
        <img className='CardNft__avatar' src={avatar} alt='avatar' />
        <h3 className='CardNft__author'>Creation of Jules Wyvern</h3>
      </div>
    </div>
  )
}
