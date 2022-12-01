import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import LowVoltagePanel from './pages/LowVoltagePanel';

const Main = () => (
  <div className="main">
    <SideBar />
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/panel" element={<LowVoltagePanel />} />
      </Routes>
    </div>
  </div>
);

export default Main;
