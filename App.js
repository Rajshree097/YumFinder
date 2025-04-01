import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo';

function App() {
  return (
    
   // <Mainpage/>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>
   </BrowserRouter>
    
    
  );
}

export default App;
