import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { DETAIL_EVENT } from '../../../constants/routes';
import './style.css';

const Card = ({
  id,
  name,
  description,
  venue,
  datetime,
  image,
  isbookmarked,
  handleBookmark,
  isRegistered,
  areSeatsAvailable
}) => {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`${DETAIL_EVENT}/${id}`);
  };

  return (
    <div
      className='card basic-padding'
      onClick={() => {
        handleDetail(id);
      }}
    >
      <div style={{ height: '40%' }}>
        <img src={image} alt='event-image' width='100%' height='99%' />
      </div>

      <div
        className='card-content'
        style={{ backgroundColor: '#800080', height: '60%', color: 'white' }}
      >
        <div style={{ textAlign: 'center' }}>
          <p>{name}</p>
        </div>

        <div style={{ paddingLeft: '15px', paddingRight: '5px' }}>
          <p className='handle-overflow-desc'>{description}</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className='basic-padding'>
            <p className='handle-overflow-venue'>
              <strong>VENUE</strong>: {venue}
            </p>
            <p>
              <strong>DATE</strong>: {datetime}
            </p>
          </div>
        </div>

        <div className='card-icons basic-margin'>
          <div onClick={(e) => e.stopPropagation()}>
            {isRegistered && (
              <div style={{ color: '#A0F3AD', fontSize: '20px' }}>
                <i
                  className='fa fa-check-circle'
                  style={{ fontSize: '30px', color: '#A0F3AD', cursor: 'pointer' }}
                ></i>{' '}
                <strong>REGISTERED</strong>
              </div>
            )}
            
            {
              ((!isRegistered)&&(!areSeatsAvailable))&&
                (
                  <div style={{ color: '#ECECAB', fontSize: '20px' }}>
                      <i
                        className='fa fa-times-circle'
                        style={{ fontSize: '30px', color: '#ECECAB', cursor: 'pointer' }}
                      ></i>{' '}
                      <strong>NO SEATS AVAILABLE</strong>
                  </div>
                )
            }

          </div>
          <div onClick={(e) => e.stopPropagation()}>
            {isbookmarked ? (
              <i
                className='fa fa-bookmark-o'
                onClick={() => handleBookmark(id)}
                style={{ fontSize: '30px', color: '#EA8282', cursor: 'pointer' }}
              ></i>
            ) : (
              <i
                className='fa fa-bookmark'
                onClick={() => handleBookmark(id)}
                style={{ fontSize: '30px', color: '#EA8282', cursor: 'pointer' }}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  venue: PropTypes.string,
  datetime: PropTypes.string,
  image: PropTypes.string,
  isbookmarked: PropTypes.bool,
  handleBookmark: PropTypes.func,
  isRegistered: PropTypes.bool,
  areSeatsAvailable: PropTypes.bool
};
export default Card;
