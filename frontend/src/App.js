import './App.css';
import Homepage from './page/Homepage';
import { Route, Router, Routes } from 'react-router-dom';
import Detail from './page/Detail'
import Searchbar from './components/Searchbar';
import Search from './page/Search';
import Createpost from './page/Createpost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}>
        </Route>
        <Route path='/details/:id' element={<Detail></Detail>}></Route>
        <Route path='/search/:id' element={<Search></Search>}></Route>
        <Route path='/createpost' element={<Createpost></Createpost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
