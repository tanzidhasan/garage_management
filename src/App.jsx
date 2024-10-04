import React, { useState } from 'react';
import { Routes, Route } from 'react-router';

import Welcome from './component/web_page/welcome/welcome';



export default function App() {

    return (
        <>
        
            <Routes>

                <Route index element= {<Welcome />} />

                <Route 
                    path='/'
                    element={<Welcome />}
                />



            </Routes>


        
        
        </>
    )
}

