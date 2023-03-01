import Header from '../../components/header';
import Card from '../../components/content/card';
import { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { GET_EVENT_BY_ID,UPDATE_BOOKMARK } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';
import './style.css';

const DetailEvent = ()=>{
  const [event,setEvent] = useState({});
  const navigate = useNavigate();
  const eventId = useParams();

  useEffect(()=>{
    makeRequest(GET_EVENT_BY_ID(eventId.id),{},navigate)
      .then((res)=>setEvent({...res}));
  },[]);

  const handleBookmark = async (id)=>{
    await makeRequest(UPDATE_BOOKMARK(id), {
      data: {
        isBookmarked: !(event.isBookmarked),
      },
    }).catch((e)=>console.log(e))
    
    setEvent({
      ...event,
      isBookmarked: !(event.isBookmarked)
    });
  };
  return event?(
    <div className='container'>
      <Header/>
      <div className='card-container basic-margin'>
        <Card key={event.id} id={event.id} name={event.name} description={event.description} venue={event.venue} datetime={event.datetime} image={event.imgUrl} isbookmarked={event.isBookmarked} handleBookmark={handleBookmark}/>
      </div>
    </div>
  ):(
    <div>
      Loading...
    </div>
  );
};

export default DetailEvent;