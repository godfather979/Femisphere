import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hello from './components/Hello';
import Bye from './components/Bye';
import WellnessCard from './components/wellness';
import Job from './components/Job';
import Tracking from './components/Tracking';


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
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/bye" element={<Bye />} />
        <Route path="/wellness" element={<WellnessCard/>} />
        <Route path="/job" element={<Job/>} />
        <Route path="/tracking" element={<Tracking/>} />

      </Routes>
      {/* {!isAdminRoute && <Footer />}       Conditionally render Footer */}
      </>
  );
};

export default App;
