import React from 'react';
import { useAppContext } from '../context/AppContext';
import { updateAttendance } from '../api';

const Attendance = () => {
  const { state, dispatch } = useAppContext();

  const handleClockIn = async () => {
    const updatedAttendance = await updateAttendance('in');
    dispatch({ type: 'SET_ATTENDANCE', payload: updatedAttendance });
  };

  const handleClockOut = async () => {
    const updatedAttendance = await updateAttendance('out');
    dispatch({ type: 'SET_ATTENDANCE', payload: updatedAttendance });
  };

  return (
    <div className="flex ml-6 space-x-4 mt-6">
      <button
        className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-200 transform ${state.attendance.status === 'in' ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleClockIn}
        disabled={state.attendance.status === 'in'}
      >
        Clock In
      </button>
      <button
        className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-200 transform ${state.attendance.status === 'out' ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleClockOut}
        disabled={state.attendance.status === 'out'}
      >
        Clock Out
      </button>
    </div>
  );
};

export default Attendance;
