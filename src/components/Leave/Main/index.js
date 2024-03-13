import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeaveDetails from '../LeaveDetails';
import '../style.css';

function Main({sampleData}) {
    const navigate=useNavigate();

    return (
        <div className='inner-container'>
            <h1>Employement List</h1>
            <table className='leave-table' border='0'>
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Date of joining</th>
                        <th>Salary(PA)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sampleData.map((data) => <tr key={data.leaveId}>
                            <td>{data.leaveId}</td>
                            <td>{data.employeeName}</td>
                            <td>{data.Designation}</td>
                            <td>
                                {/* <Link to={`details/${index}`} 
                                    element={<LeaveDetails values={data}/>} 
                                    className='button'
                                >View Details</Link> */}
                                <button onClick={()=>{navigate(`/details/${data.leaveId}`)}}>View Details</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main