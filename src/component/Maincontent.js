import React, { useState } from 'react';
// import Sidebar from './component/Sidebar';
const Maincontent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="main-content">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {showSidebar}
      <p>Main content goes here.</p>
    </div>
  );
};

export default Maincontent;
