import React from 'react';
import SidebarContent from './Sidebar';
import Toolbar from './Toolbar';
import Navbar from './Navbar';
import PDFViewer from './DocumentViewer';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
      <Navbar/>
      <SidebarContent/>
      </div>
       <PDFViewer/>      
    </div>
  );
}

export default Dashboard;
