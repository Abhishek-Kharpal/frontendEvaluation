import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import './style.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <div className='header basic-padding' style={{ backgroundColor: '#800080' }}>
      <p>
        <strong onClick={handleNavigate}>EVENTIFY</strong>
      </p>
    </div>
  );
};

export default Header;
