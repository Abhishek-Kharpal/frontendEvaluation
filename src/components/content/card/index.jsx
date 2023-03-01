import './style.css';

const Card = ()=>{
  return (
    <div className='card basic-padding'>
      <div style={{height: '40%'}}>
        <img src="https://i.ibb.co/3zbdvWX/battle-of-bands.jpg" alt='event-image' width='100%' height='99%'/>
      </div>

      <div className='card-content' style={{backgroundColor: '#800080', height: '60%', color: 'white'}}>
        <div style={{textAlign: 'center'}}>
          <p>Battle of the Bands</p>
        </div>

        <div style={{paddingLeft: '15px', paddingRight: '5px'}}>
          <p className='handle-overflow-desc'>
          Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you wont want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Dont miss out on the most unforgettable rock competition of the year!
          </p>
        </div>

        <div style={{textAlign: 'center'}}>
          <div className='basic-padding'>
            <p className='handle-overflow-venue'><strong>VENUE</strong>: All Stars Arena, Las Vegas, NV, USA</p>
            <p><strong>DATE</strong>: 2023-03-01T05:00:00.000Z</p>
          </div>
        </div>

        <div className='card-icons'>
            {/* TODO FEATURE 3 */}
        </div>
      </div>  
    </div>
  );
};

export default Card;