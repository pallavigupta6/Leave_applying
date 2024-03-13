import React from 'react'
import { useParams } from 'react-router-dom'

function LeaveDetails({sampleData}) {

    const params = useParams();
    return (
        <div className='inner-container'>
            <h1>Leave Details</h1>
            <div className='form-container'>
                <form>
                    <div className='input-container'>
                        <label>Employee Name</label>
                        <p className='input-field input' style={{textAlign:'start'}}>{sampleData[params.id - 1].employeeName}</p>
                    </div>
                    <div className='input-container'>
                        <label>From Date</label>
                        <p className='input-field input' style={{textAlign:'start'}}>{sampleData[params.id - 1].startDate}</p>
                    </div>
                    <div className='input-container'>
                        <label>To Date</label>
                        <p className='input-field input' style={{textAlign:'start'}}>{sampleData[params.id - 1].endDate}</p>
                    </div>
                    <div className='input-container'>
                        <label>Leave type</label>
                        <p className='input-field input' style={{textAlign:'start'}}>{sampleData[params.id - 1].leaveType}</p>
                    </div>
                    <div className='input-container'>
                        <label>Reason</label>
                        <p className='text-field input' style={{textAlign:'start'}}>{sampleData[params.id - 1].reason}</p>
                    </div>
                    <div className='button-box'>
                        <button className='but-reject'>Reject</button>
                        <button className='but-approve'>Approve</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LeaveDetails