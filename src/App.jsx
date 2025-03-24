import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <div className='background'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
