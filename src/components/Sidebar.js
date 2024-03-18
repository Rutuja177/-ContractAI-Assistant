import React, { useState } from 'react';
import ArrowIcon from '../assets/arrow-down-sign-to-navigate.png'; // Importing the arrow icon
import redMark from '../assets/mark.png'; // Importing the red mark icon
import greenMark from '../assets/check.png'; // Importing the green mark icon
const Sidebar = () => {

  const [isOpenReject, setIsOpenReject] = useState(true);
  const [isOpenAccept, setIsOpenAccept] = useState(true);
  // Sample data for the sidebar
  const reviewItems = [
    { id: 1, title: 'Governing Law', description: 'Fix non-standard term', page: 'p. 7' },
    { id: 2, title: 'Indemnification', description: 'Remove unacceptable Clause', page: 'p. 9, p.4, p.8' },
    { id: 3, title: 'Payment Description', description: 'Fix non-standard term', page: 'p. 9' },
    { id: 4, title: 'Attorney Fees', description: 'Fix non-standard term', page: 'p. 2' },
  ];

  const acceptableItems = [
    { id: 1, title: 'Governing Law', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', page: '' },
    { id: 2, title: 'Confidential Information', description: 'Uses Custom Language', page: '' },
    { id: 3, title: 'Confidential Information', description: 'Uses Custom Language', page: '' },
    // Add more items as needed
  ];

  return (
    <aside className="bg-white fixed left-0 w-80 h-screen border-r-2 border-gray-300 shadow-md mt-9 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'gray' }}>
      <div className="flex items-center ml-5">
        <img src={ArrowIcon} alt="Dropdown Arrow" className={`transform ${isOpenReject ? 'rotate-180' : 'rotate-0'}`} style={{ cursor: 'pointer', height:'10px' }} />
        <h2 className="flex  px-4 py-2 cursor-pointer" onClick={() => setIsOpenReject(!isOpenReject)}>
          Review ({reviewItems.length})
        </h2>
      </div>
      <div className='px-4'>
        {isOpenReject && reviewItems.map((item) => (
          <div key={item.id} className="border-2 border-gray-300 rounded-md shadow-md my-5">
            <h3 className="text-sm font-medium text-left p-2">{item.title}</h3>
            <div className="flex items-center p-1">
              <img src={redMark} alt="Indicator" />
              <p className="text-xs text-gray-500 ml-2">{item.description}</p>
            </div>
            <p className="flex text-xs text-gray-500 p-2">{item.page}</p>
          </div>
        ))}
      </div>
      {/* Add the Acceptable Items section */}
      <div className="flex items-center ml-5">
        <img src={ArrowIcon} alt="Dropdown Arrow" className={`transform ${isOpenAccept ? 'rotate-180' : 'rotate-0'}`} style={{ cursor: 'pointer', height:'10px' }} />
        <h2 className="flex  px-4 py-2 cursor-pointer" onClick={() => setIsOpenAccept(!isOpenAccept)}>
          Acceptable ({acceptableItems.length})
        </h2>
      </div>
      <div className='px-4'>
        {isOpenAccept && acceptableItems.map((item) => (
          <div key={item.id} className="border-2 border-gray-300 rounded-md shadow-md my-5">
            <h3 className="text-sm font-medium text-left p-2">{item.title}</h3>
            <div className="flex items-center p-1">
              <img src={greenMark} alt="Marked" className='w-5'/>
              <p className="text-xs text-gray-500 ml-2">{item.description}</p>
            </div>
            <p className="flex text-xs text-gray-500 p-2">{item.page}</p>
          </div>
        ))}
      </div>
    </aside>
  )
};

export default Sidebar;
