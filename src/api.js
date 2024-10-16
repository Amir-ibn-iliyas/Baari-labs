const API_URL = 'http://localhost:3001';

export const fetchEmployee = async () => {
  const response = await fetch(`${API_URL}/employee`);
  return response.json();
};

export const fetchAttendance = async () => {
  const response = await fetch(`${API_URL}/attendance`);
  return response.json();
};

export const updateAttendance = async (status) => {
  const response = await fetch(`${API_URL}/attendance`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status,
      clockInTime: status === 'in' ? new Date().toISOString() : null,
      clockOutTime: status === 'out' ? new Date().toISOString() : null,
      totalHours: status === 'out' ? 0 : null, // Initialize totalHours on clock in
    }),
  });
  return response.json();
};

export const fetchDailyUpdates = async () => {
  const response = await fetch(`${API_URL}/dailyUpdates`);
  return response.json();
};

export const postDailyUpdate = async (update) => {
  const response = await fetch(`${API_URL}/dailyUpdates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  });
  return response.json();
};
