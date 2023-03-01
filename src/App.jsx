import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { HOME_ROUTE,ERROR_ROUTE } from './constants/routes';
import Home from './pages/home';
import PageNotFound from './pages/PageNotFound';
import Error from './pages/Error'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;