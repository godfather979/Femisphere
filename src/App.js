import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hello from './components/Hello';
import Bye from './components/Bye';
import WellnessCard from './components/wellness';
import Job from './components/Job';
import Tracking from './components/Tracking';
import Navbar from './components/Navbar';
import Legal from './components/Legal';

import Ria from './components/Ria'

function App() {



  return (
    <>
    <BrowserRouter>
      <RoutesWeb />
    </BrowserRouter>
    </>
  );
}

const RoutesWeb = () => {
  const location = useLocation(); // Get the current route

  return (
      <>
      {/* {loading && <Loader />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/bye" element={<Bye />} />
        <Route path="/wellness" element={<WellnessCard/>} />
        <Route path="/job" element={<Job/>} />
        <Route path="/tracking" element={<Tracking/>} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/nav" element={<Navbar/>} />
        <Route path="/Ria" element={<Ria/>} />

      </Routes>
      {/* {!isAdminRoute && <Footer />}       Conditionally render Footer */}
      </>
  );
};

export default App;
