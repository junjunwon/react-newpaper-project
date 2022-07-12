import { AppWrap } from './appStyles';
import Header from './pages/header/header';
import Contents from './pages/contents/contents';
import Footer from './pages/footer/footer';
import Scrab from "./pages/contents/scrabPage"
import NotFound from "./pages/error/NotFound"
//router
import {BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <AppWrap>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/react-newpaper-project" element={<Contents />}></Route>
          <Route path="/scrab" element={<Scrab />}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrap>
      
  );
}

export default App;
