import './App.css';
import Main from './companent/2-main/main';
import Navs from "./companent/1-nav/nav";
import Home from './companent/3-home/home';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Fac from './companent/4-faculty/faculty';
import Co from './companent/4-faculty/co/co';
import Oop from './companent/4-faculty/oop/oop';
import Vid from './companent/4-faculty/vid';
import Or from './companent/4-faculty/or/or';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/fac' element={<Fac/>}/>
          <Route path='/fac/oop' element={<Oop/>}/>
          <Route path='/fac/oop/v1' element={<Vid title="oop first vid" vid_src="https://www.youtube.com/embed/QgleisXugYc?si=3n2xSmYcUKPcJWS-"/>}/>
          <Route path='/fac/oop/v2' element={<Vid title="oop second vid" vid_src="https://www.youtube.com/embed/QgleisXugYc?si=3n2xSmYcUKPcJWS-"/>}/>
          <Route path='/fac/co' element={<Co/>}/>
          <Route path='/fac/co/v1' element={<Vid title="co first vid" vid_src="https://www.youtube.com/embed/QgleisXugYc?si=3n2xSmYcUKPcJWS-"/>}/>
          <Route path='/fac/co/v2' element={<Vid title="co second vid" vid_src="https://www.youtube.com/embed/QgleisXugYc?si=3n2xSmYcUKPcJWS-"/>}/>
          <Route path='/fac/or' element={<Or/>}/>
          <Route path='/fac/or/v1' element={<Vid title="or first vid" vid_src="https://www.youtube.com/embed/QgleisXugYc?si=3n2xSmYcUKPcJWS-"/>}/>
          <Route path='/fac/or/v2' element={<Vid title="or second vid" vid_src="https://www.youtube.com/embed/QgleisXugYc?si=3n2xSmYcUKPcJWS-"/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
