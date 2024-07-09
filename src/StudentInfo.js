import React from 'react';

function StudentInfo({ name, id }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl">{name}</h1>
      <h2 className="text-xl">{id}</h2>
    </div>
  );
}

export default StudentInfo;
