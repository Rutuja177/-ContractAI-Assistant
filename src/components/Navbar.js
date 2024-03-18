import React from 'react';
import { DocumentTextIcon, CogIcon } from '@heroicons/react/solid'; // Importing icons
import aiAssistantImage from '../assets/ai-assistant.png'; // Importing the image


const Navbar = () => {
  return (
    <nav className="bg-gray-200 w-full fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-2 z-10"> {/* Adjusted background color and height */}
      <div className="flex items-center">
        <DocumentTextIcon className="h-6 w-6 text-blue-500 mr-2"/> 
        <span className="text-gray-800 ">Document Name</span> 
      </div>
      <div className="flex items-center m-auto">
        <div className="flex items-center justify-center text-gray-800 m-auto h-full"> 
          <img src={aiAssistantImage} alt="AI logo" className="h-8 mr-2" />
          <span className='font-medium pr-20'>AI Tool Assistant</span>
        </div>
      </div>
      <div className="flex items-end">
        <button className="bg-gray-300 text-gray-800 hover:bg-gray-400 px-5 py-2 rounded-l focus:outline-none" >Save</button> {/* Save button */}
        <button className= "text-gray-800 px-5 py-2 rounded-r focus:outline-none">X Close</button> {/* Close button */}
      </div>
    </nav>
  );
};

export default Navbar;
