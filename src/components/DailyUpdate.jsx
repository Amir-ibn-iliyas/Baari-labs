import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchDailyUpdates, postDailyUpdate } from '../api';

const DailyUpdate = () => {
  const { state, dispatch } = useAppContext();
  const [updateText, setUpdateText] = useState('');

  useEffect(() => {
    const loadUpdates = async () => {
      const updates = await fetchDailyUpdates();
      dispatch({ type: 'SET_DAILY_UPDATES', payload: updates });
    };

    loadUpdates();
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString().split('T')[0];
    const newUpdate = { date, update: updateText };
    await postDailyUpdate(newUpdate);
    setUpdateText('');
    
    const updates = await fetchDailyUpdates();
    dispatch({ type: 'SET_DAILY_UPDATES', payload: updates });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-xl  text-[#FE921C] font-bold">Daily Update</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your daily update..."
          rows="4"
          required
        />
        <button type="submit" className="bg-[#FE921C] hover:bg-[#ff8400] text-white font-semibold py-2 px-4 rounded">
          Submit Update
        </button>
      </form>
      <h3 className="mt-4 font-semibold">Previous Updates:</h3>
      <ul className="mt-2">
        {state.dailyUpdates.map((update) => (
          <li key={update.id} className="border-b py-2 text-gray-600">
            <span className="font-bold">{update.date}</span>: {update.update}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyUpdate;
