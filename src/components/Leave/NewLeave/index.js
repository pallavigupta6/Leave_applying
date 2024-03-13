import React,{useState} from 'react'

function NewLeave({setAddData}) {

    const [values,setValues] = useState({
        startDate: '',
        endDate: '',
        leaveType: '',
        reason: ''
    });

    const handleChange = (event) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
        setAddData(values);
    }

    return (
        <div className='inner-container'>
            <h1>Apply Leave</h1>
            <div className='form-container'>
                <form>
                    <div className='input-container'>
                        <label>From Date</label>
                        <input type='date' 
                            className='input-field input' 
                            name='startDate' 
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className='input-container'>
                        <label>To Date</label>
                        <input type='date' 
                            className='input-field input' 
                            name='endDate' 
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className='input-container'>
                        <label>Leave type</label>
                        <select className='select-field input' name='leaveType' onChange={handleChange}>
                            <option value='annual'>Annual Leave</option>
                            <option value='paid'>Paid Leave</option>
                            <option value='emergency'>Emergency Leave</option>
                            <option value='medical'>Medical Leave</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label>Reason</label>
                        <textarea className='text-field input' 
                            name='reason' 
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button onClick={handleSubmit}>Apply Leave</button>
                </form>
            </div>
        </div>
    )
}

export default NewLeave