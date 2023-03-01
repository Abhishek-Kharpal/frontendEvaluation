import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from './filter';
import Search from './search';
import Card from './card';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS,UPDATE_BOOKMARK } from '../../constants/apiEndpoints';
import './style.css';

const Content = ()=>{
  const [events,setEvents] = useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    makeRequest(GET_ALL_EVENTS,{},navigate)
      .then((res)=>setEvents([...res]))
  },[]);

  const handleBookmark = async (id)=>{
    const eventData = events.filter((event)=>(event.id===id))[0];
    await makeRequest(UPDATE_BOOKMARK(id), {
      data: {
        isBookmarked: !(eventData.isBookmarked),
      },
    }).catch((e)=>console.log(e))
    
    events.forEach((event)=>{
      if(event.id===id){
        event.isBookmarked=!(event.isBookmarked);
      }
    })
    setEvents([...events]);
  };

  return events?(
    <div className='content-container'>
      <div className='query basic-padding' style={{marginTop: '10px'}}>
        <Filter/>
        <Search/>
      </div>
      <div className='card-container'>
        {events.map((event)=><Card key={event.id} id={event.id} name={event.name} description={event.description} venue={event.venue} datetime={event.datetime} image={event.imgUrl} isbookmarked={event.isBookmarked} handleBookmark={handleBookmark} isRegistered={event.isRegistered}/>)}
      </div>
    </div>
  ):(
    <div>
      Loading...
    </div>
  );
};

export default Content;