import Main from './views/Main';
import JobTracker from './views/JobTracker';
import EcommerceClone from './views/EcommerceClone';
import FutureProjects from './views/FutureProjects';
import Resume from './views/Resume';
import Portfolio from './views/Portfolio';
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
        <Route path='/project3' element={<Portfolio/>}></Route>
        <Route path='/future-projects' element={<FutureProjects />}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
