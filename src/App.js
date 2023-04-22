import './App.css';
import Navbar from './components/Navbar';
import Coursoul from './components/Coursoul';
import Recommded from './components/coursole/Recommded';
import StudentView from './components/coursole/StudentView';
import Topic from './components/Topic';
import Coursedetail from './components/Coursedetail';
import Lecture from './components/Lecture';
import Footer from './components/Footer';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<><Coursoul /><Recommded /><StudentView /><Topic /></>}></Route>

        <Route exact path="/detail" element={<><Coursedetail /></>}></Route>

        <Route exact path="/lecture" element={<><Lecture /></>}></Route>

        <Route exact path="/signup" element={<><Signup /></>}></Route>


      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
