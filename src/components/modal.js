import React from 'react';

const PDFModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Only render the modal if isOpen is true

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg">
                {/* Modal content goes here */}
                <h2>AI Assist</h2>
                <button onClick={onClose} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Close</button>
            </div>      
        </div>
    );
};

export default PDFModal;
