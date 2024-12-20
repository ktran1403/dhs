import React from 'react'
import Sidebar from '../components/Sidebar';
function BookUs(){
    return(
        <div classname ="relative w-full h-screen">
            <div className="absolute top-0 left-0 right-0 z-20">
                <Sidebar/>
            </div>
        </div>
    );
}

export default BookUs; 