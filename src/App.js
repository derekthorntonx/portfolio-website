import Main from './views/Main';
import JobTracker from './views/JobTracker';
import EcommerceClone from './views/EcommerceClone';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/project1' element={<JobTracker/>}></Route>
        <Route path='/project2' element={<EcommerceClone/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
