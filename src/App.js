import React from 'react';
import { BrowserRouter as Router, Routes, Route,Outlet  } from 'react-router-dom';
import Header from './component/Header';
import ManuBar from './component/ManuBar';
import Sidebar from './component/Sidebar';
import Home from './pages/Home';
import Fence from './pages/Fence';
import Help from './pages/Help';
import Live from './pages/Live'
import UpLadingSystem from './pages/UpLadingSystem';
import './App.css';
import FileConversion from './pages/FileConversion';


const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <ManuBar />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fence" element={<Fence />} />
          <Route path="/help" element={<Help />} />
          <Route path="/live" element={<Live />} />
          <Route path="/FileConversion" element={<FileConversion />} />
          <Route path="/uploading-setup" element={<UpLadingSystemWithSidebar />}>
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
};

const UpLadingSystemWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {/* <Outlet /> */}
      <div style={{marginLeft:"250px", backgroundColor:"black", width:"90%",height:"100vh" }}>
      <UpLadingSystem />
      </div>
    </div>
  );
};

export default App;

// 
