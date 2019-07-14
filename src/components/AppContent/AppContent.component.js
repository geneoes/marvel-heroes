import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel.component';
import RightPanel from './RightPanel/RightPanel.component';

function AppContent() {

  const style = {
    overflow: 'none',
    display: 'flex',
    height: '100vh'
  }

  return (
    <div style={style}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default AppContent;
