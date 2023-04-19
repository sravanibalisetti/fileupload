import React, { useState } from 'react';

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Show Popup</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Title</h2>
            <p>Popup content goes here.</p>
            <button onClick={handleCloseClick}>Close Popup</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Popup;

