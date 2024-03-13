import React,{useEffect, useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./components/Leave/Main";
import LeaveDetails from "./components/Leave/LeaveDetails";
import NewLeave from "./components/Leave/NewLeave";
const sampleDataa = [
  {
    leaveId: 1,
    employeeName: "Siva",
    leaveDays: 2,
    startDate: "10-04-2022",
    endDate: "12-04-2022",
    // Salary(PA):2lpa,
    reason:
      "Having a serious eye problem need to consult doctor and take some rest.",
    leaveType: "Annual Leave",
  },
  {
    leaveId: 2,
    employeeName: "Kumar",
    leaveDays: 3,
    startDate: "10-04-2022",
    endDate: "13-04-2022",
    reason: "Need to attend my cousins marriage.",
    leaveType: "Medical Leave",
  },
  {
    leaveId: 3,
    employeeName: "Pallavi",
    Designation: software_developer,
    startDate: "10-04-2022",
    endDate: "12-04-2022",
    reason: "Going to get married",
    leaveType: "Emergency Leave",
  },
];

function App() {
  const[sampleData,setSampleData]=useState(sampleDataa);
  const[addData,setAddData]=useState({});
  useEffect(()=>{
    const newData = [...sampleData,addData ]
    setSampleData(newData)

  },[addData])
  console.log('In App.js===>',addData);
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main sampleData={sampleData} />}/>
        <Route path="/details/:id" element={<LeaveDetails sampleData={sampleData}/>}/>
        <Route path="/new" element={<NewLeave setAddData={setAddData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
