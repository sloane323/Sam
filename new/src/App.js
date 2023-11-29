import { Routes, Route } from 'react-router-dom';
import Side from './Side';
import './App.css';
import Body from './Body';
import One from './Page/One';
import Two from './Page/Two';
import Three from './Page/Three';
import Four from './Page/Four';
import Five from './Page/Five';
import Six from './Page/Six';
import Seven from './Page/Seven';
import Eight from './Page/Eight';
import Nine from './Page/Nine';
import Ten from './Page/Ten';
import Oneone from './Page/Oneone';
import Onetwo from './Page/Onetwo';

function App() {
  return (
    <div className="App">
    <Side />
    <div className='contents'>
    <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/one' element={<One />} />
        <Route path='/two' element={<Two />} />
        <Route path='/three' element={<Three />} />
        <Route path='/four' element={<Four />} />
        <Route path='/five' element={<Five />} />
        <Route path='/six' element={<Six />} />
        <Route path='/seven' element={<Seven />} />
        <Route path='/eight' element={<Eight />} />
        <Route path='/nine' element={<Nine />} />
        <Route path='/ten' element={<Ten />} />
        <Route path='/oneone' element={<Oneone />} />
        <Route path='/onetwo' element={<Onetwo />} />
    </Routes>
    </div>


    </div>
  );
}

export default App;
