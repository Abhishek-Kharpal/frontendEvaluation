export const BACKEND_URL = 'http://localhost:8000/';

export const GET_ALL_EVENTS = {
  url: 'api/events',
  method: 'GET',
};

export const UPDATE_BOOKMARK = (id)=>({
  url: `api/events/${id}`,
  method: 'PATCH'
});
