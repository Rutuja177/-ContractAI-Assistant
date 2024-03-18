import React from 'react';

const AIAssistModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-5 max-w-md w-full">
                <h2 className="text-lg font-semibold">AI Assist</h2>
                <p className="mt-4">How would you like to redline this?</p>
                <form onSubmit={onSubmit}>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="radio" name="option" className="form-radio" value="option1" />
                            <span className="ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </label>
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="radio" name="option" className="form-radio" value="option2" />
                            <span className="ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </label>
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input type="radio" name="option" className="form-radio" value="option3" />
                            <span className="ml-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </label>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mr-2">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                            Redline
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AIAssistModal;
