import PropTypes from 'prop-types';
import './style.css';

const Search = ({setSearch,search,handleSearch}) => {
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
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <i
        className='fa fa-search'
        style={{ fontSize: '24px', color: '#800080', marginLeft: '2px' }}
        onClick={handleSearch}
      ></i>
    </div>
  );
};

Search.propTypes={
  setSearch: PropTypes.func,
  search: PropTypes.string,
  handleSearch: PropTypes.func
};

export default Search;
