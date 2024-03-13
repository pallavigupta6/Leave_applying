import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Main from './Main';
import LeaveDetails from './LeaveDetails';
import NewLeave from './NewLeave';
import './style.css'

function Leave({data}) {
    return (
        <div className='container'>
            <Routes>
                <Route path="/main" element={<Main sampleData={data} />}></Route>
                <Route path="/details/:id" element={<LeaveDetails />}></Route>
                <Route path="/new" element={<NewLeave />}></Route>
            </Routes>
        </div>
)
}

export default Leave