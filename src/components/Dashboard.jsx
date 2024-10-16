import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchEmployee, fetchAttendance } from '../api';

const Dashboard = () => {
  const { state, dispatch } = useAppContext();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const loadData = async () => {
      const employeeData = await fetchEmployee();
      dispatch({ type: 'SET_EMPLOYEE', payload: employeeData });
      
      const attendanceData = await fetchAttendance();
      dispatch({ type: 'SET_ATTENDANCE', payload: attendanceData });
    };

    loadData();

    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);

  return (
    <div className=" p-8 rounded-lg shadow-lg text-white">
     
      <div className="flex-col  lg:flex  lg:flex-row items-center justify-center gap-10">
      <p className=" text-[#58575A] text-lg font-bold">Employee Name: {state.employee.name}</p>
      <p className="text-[#58575A] text-lg font-bold">Email: {state.employee.email}</p>
        <p className="text-xl text-[#58575A] font-bold">Current Time: {currentTime}</p>
        <p className=" text-xl text-[#58575A] font-bold">Status: <span className={state.attendance.status === 'in' ? 'text-green-400 font-bold text-xl' : 'text-red-600 font-bold text-xl'}>{state.attendance.status}</span></p>
        <p className="text-xl text-[#58575A] font-bold">Total Hours: {state.attendance.totalHours}</p>
      </div>
    </div>
  );
};

export default Dashboard;