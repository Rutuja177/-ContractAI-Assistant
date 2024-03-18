import React from 'react';
import onbutton from '../assets/on-button (1).png'; // Importing the onbuttong icon
import list from '../assets/list.png'; // Importing the list icon
import undo from '../assets/undo.png'; // Importing the undo icon
import redo from '../assets/forward.png'; // Importing the redo icon
import italic from '../assets/italic.png'; // Importing the italic icon
import bold from '../assets/bold.png'; // Importing the bold icon
import code from '../assets/code.png'; // Importing the code icon
import cells from '../assets/cells.png'; // Importing the cells icon
import layout from '../assets/layout.png'; // Importing the layout icon
import zoomIn from '../assets/zoom-in.png'; // Importing the zoom-in icon
import zoomOut from '../assets/zoom-out.png'; // Importing the zoom-out icon
const Toolbar = () => {
    return (
        <div className="mt-9 border-r-2 h-11 border-gray-300 shadow-md right-0 w-screen">
         <button className="mx-2 my-2"><img src={undo} alt="undo"/></button> {/* Replace with proper icons */}
            <button className="mx-2"><img src={redo} alt="redo"/></button> {/* Replace with proper icons */}
            <select className="mx-2">
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                {/* Add more options as needed */}
            </select>
            <button className="mx-2 font-bold"><img src={bold} alt="bold"/></button> {/* Bold button */}
            <button className="mx-2"><img src={italic} alt="italic"/></button> {/* Italic button */}
            <button className="mx-2"><img src={list} alt="list"/></button> {/* Replace with ordered list icon */}
            <button className="mx-2">Quote</button> {/* Replace with quote icon */}
            <button className="mx-2"><img src={code} alt="code"/></button> {/* Replace with code icon */}
            <button className="mx-2"><img src={cells} alt="cells"/></button> {/* Replace with table icon */}
            <button className="mx-2"><img src={layout} alt="layout"/></button>
            <button className="mx-2"><img src={zoomIn} alt="zoomIn"/></button>
            <button className="mx-2"><img src={zoomOut} alt="zoomOut"/></button>
            <button className="mx-2 mt-2"><img src={onbutton} alt="onbutton"/></button> {/* Replace with toggle icon */}
        </div>
    );
};

export default Toolbar;