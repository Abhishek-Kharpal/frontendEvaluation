import './style.css';

const Filter = () => {
  return (
    <div className='filter'>
      <i className='fa fa-filter' style={{ fontSize: '28px', color: '#800080' }}></i>
      <p>FILTER</p>
      <i
        className='fa fa-chevron-down'
        style={{ fontSize: '24px', marginLeft: '5px', color: '#800080', cursor: 'pointer' }}
      ></i>
    </div>
  );
};

export default Filter;
