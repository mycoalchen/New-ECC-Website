import React from 'react';

import '../App.css';

function FindADev() {
  React.useEffect(() => {
    // Redirect to whichever form needed
    window.location.replace('https://www.google.com');
  }, []);
  return (
    <div />
  );
}

export default FindADev;
