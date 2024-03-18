import React, { useState } from 'react';

const PDFModal = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const sampleOptions = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', 
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    ];
    if (!isOpen) return null; // Only render the modal if isOpen is true

    const handleSelection = (option) => {
        setSelectedOption(option);
        //action to perform when an option is selected
    };

    const handleRedline = () => {
        console.log(selectedOption); //logging the selected option
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg relative w-full max-w-2xl max-h-full">
                <div>
                    <button onClick={onClose} className="absolute top-2 right-2 text-2xl">&times;</button>
                    <h2 className="mb-4 text-left">AI Assist</h2>
                </div>
                <div className="my-4 border-2 border-gray-300 p-2 shadow-md rounded-md" >
                <h1 className="text-left">How would you like to readline this?</h1>
                    {/* Options */}
                    {sampleOptions.map((option, index) => (
                        <div key={index} className="flex items-center m-2 p-2 shadow-md rounded-md border-2 border-gray-300">
                            <input
                                type="radio"
                                id={`option-${index}`}
                                name="option"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleSelection(option)}
                                className="mr-2 "
                            />
                            <label htmlFor={`option-${index}`} className="flex-1">{option}</label>
                        </div>
                    ))}
                </div>
                <div className="flex justify space-x-4">
                    <button onClick={handleRedline} className="py-2 px-4 bg-blue text-white rounded hover:bg-blue-700">Redline</button>
                </div>
            </div>
        </div>
    );
};

export default PDFModal;
