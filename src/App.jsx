import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import DailyUpdate from './components/DailyUpdate';

const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-grow p-2 lg:p-6">
          <h1 className="text-3xl text-[#FE921C] text-center font-bold mb-4">Employee Dashboard</h1>
          
            <Dashboard />
            <Attendance />
            <DailyUpdate />
     
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
