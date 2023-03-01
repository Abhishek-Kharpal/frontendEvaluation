import './style.css';

const Search = ()=>{
  return (
    <div className='search'>
      <input type="text" placeholder='EVENT NAME' style={{border: '1px solid #800080',marginLeft:'10px', height: '28px', borderRadius: '5px'}}/>
      <i className='fa fa-search' style={{fontSize:'24px',color: '#800080', marginLeft: '5px' }}></i>
    </div>
  );
};

export default Search;