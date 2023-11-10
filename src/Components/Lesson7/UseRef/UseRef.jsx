import React, { useRef } from 'react';
import './UseRef.css';

const UseRef = () => {
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);


    const animation1 = () => {
        boxRef1.current.classList.toggle('active');
    }
    const animation2 = () => {
        boxRef2.current.classList.toggle('active2');
    }

    return (
        <div className='App'>
            <div className="block">
                <button onClick={animation1}>Click!</button>
                <div ref={boxRef1} className='box'></div>
            </div>
            <div className="block">
                <button onClick={animation2}>Click!</button>
                <div ref={boxRef2} className='box'></div>
            </div>
        </div>
    )
}

export default UseRef;
