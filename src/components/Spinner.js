import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: '350px', margin: 'auto', height: '65vh', display: 'block',
        }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
