import Header from '../../components/header';
import Content from '../../components/content';
import Theme from '../../components/theme';

import './style.css';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
      <Theme />
    </div>
  );
};

export default Home;
