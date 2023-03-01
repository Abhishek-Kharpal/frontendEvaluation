import Filter from './filter';
import Search from './search';
import './style.css';

const Content = ()=>{
  return (
    <div className='content-container'>
      <div className='query basic-padding' style={{marginTop: '10px'}}>
        <Filter/>
        <Search/>
      </div>
    </div>
  );
};

export default Content;