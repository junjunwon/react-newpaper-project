import { AppWrap } from './appStyles';
import Header from './pages/header/header';
import Contents from './pages/contents/contents';
import Footer from './pages/footer/footer';

//router
import {Link} from "react-router-dom";

function App() {
  
  return (
    <AppWrap>
      <Header />
      <Contents />
      {/* <Link to="/"></Link>
      <Link to="/scrab"></Link> */}
      <Footer />
    </AppWrap>
      
  );
}

export default App;
