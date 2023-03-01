import PropTypes from 'prop-types';
import './style.css';

const Card = ({id,name,description,venue,datetime,image,isbookmarked})=>{
  return (
    <div className='card basic-padding'>
      <div style={{height: '40%'}}>
        <img src={image} alt='event-image' width='100%' height='99%'/>
      </div>

      <div className='card-content' style={{backgroundColor: '#800080', height: '60%', color: 'white'}}>
        <div style={{textAlign: 'center'}}>
          <p>{name}</p>
        </div>

        <div style={{paddingLeft: '15px', paddingRight: '5px'}}>
          <p className='handle-overflow-desc'>
            {description}
          </p>
        </div>

        <div style={{textAlign: 'center'}}>
          <div className='basic-padding'>
            <p className='handle-overflow-venue'><strong>VENUE</strong>: {venue}</p>
            <p><strong>DATE</strong>: {datetime}</p>
          </div>
        </div>

        <div className='card-icons basic-margin'>
          <div>
            {/* For register but in feature 3 */}
          </div>
          <div>
            {
              (isbookmarked)
                ?<i className='fa fa-bookmark-o' style={{fontSize: '30px', color: '#EA8282'}}></i>
                :<i className='fa fa-bookmark' style={{fontSize: '30px', color: '#EA8282'}}></i>
            }
          </div>
        </div>
      </div>  
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isbookmarked: PropTypes.bool.isRequired
};
export default Card;