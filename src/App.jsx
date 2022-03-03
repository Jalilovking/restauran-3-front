import './App.css';
import Home from './Pages/Home/Home';
import Restauran from './Pages/Restauran/Restauran';
import Foods from './Pages/Foods/Foods';
import Basket from './Pages/Basket/Basket';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/catagory/:catagoryID' element = {<Restauran/>}/>
        <Route path='/sub_catagory/:restauranID' element = {<Foods/>}/>
        <Route path='/basket' element = {<Basket/>}/>
      </Routes>
    </>
  );
}

export default App;
