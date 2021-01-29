import React from 'react';
// import '../../App.css';
import '../404.css';

export default function error404(){
    return (
        <div className='container__404'>
            <div className='box'>
                <h2>4<span className='zero'></span>4</h2>
                <p>Hmmm. Looks like we cant find that page.</p>
            </div>
        </div>
    );
}
