import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStudent } from './actions';
import StudentInfo from './StudentInfo';

function Student() {
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [newId, setNewId] = useState('');
  const nameInputRef = useRef(null);

  const handleUpdate = () => {
    const updatedStudent = {
      name: newName,
      id: newId,
    };

    dispatch(updateStudent(updatedStudent));
    setNewName('');
    setNewId('');
    nameInputRef.current.focus();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <StudentInfo name={student.name} id={student.id} />
      <div className="mt-4">
        <input
          type="text"
          placeholder="New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="mr-2 px-4 py-2 border rounded"
          ref={nameInputRef}
        />
        <input
          type="text"
          placeholder="New ID"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
          className="mr-2 px-4 py-2 border rounded"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleUpdate}
        >
          Update Student Info
        </button>
      </div>
    </div>
  );
}

export default Student;
