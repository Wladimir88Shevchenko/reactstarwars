import React from 'react';
import './loader.css';

const Loader = () => {

    return (
        <div className="loaderWrapper">
            <div className="spinner-grow" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}

export default Loader;