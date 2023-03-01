import './style.css';

const Search = () => {
  return (
    <div className='search basic-padding'>
      <input
        type='text'
        placeholder='EVENT NAME'
        style={{
          border: '1px solid #800080',
          marginLeft: '10px',
          height: '28px',
          borderRadius: '5px',
        }}
      />
      <i
        className='fa fa-search'
        style={{ fontSize: '24px', color: '#800080', marginLeft: '2px' }}
      ></i>
    </div>
  );
};

export default Search;
