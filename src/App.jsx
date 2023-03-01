import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { HOME_ROUTE,ERROR_ROUTE,DETAIL_EVENT } from './constants/routes';
import Home from './pages/home';
import DetailEvent from './pages/detailEvent';
import PageNotFound from './pages/pageNotFound';
import Error from './pages/Error'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={`${DETAIL_EVENT}/:id`} element={<DetailEvent />} />
            <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;