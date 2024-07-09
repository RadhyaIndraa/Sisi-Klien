import React, { createContext, useState, useEffect } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    name: 'Radhya Adiyatma Indarto',
    id: 'A11.2021.13447',
  });

  useEffect(() => {
    // Fetch data from API when the component mounts
    fetch('https://api.example.com/student/1')
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.error('Error fetching student data:', error));
  }, []);

  const updateStudent = (newStudent) => {
    // Update data to API
    fetch('https://api.example.com/student/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.error('Error updating student data:', error));
  };

  return (
    <StudentContext.Provider value={{ student, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
