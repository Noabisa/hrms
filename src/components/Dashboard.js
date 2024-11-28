import React from 'react';  
import EmployeeForm from './EmployeeForm';  
import VehicleForm from './VehicleForm';  

const Dashboard = () => {  
    return (  
        <div>  
            <h1>HR Management System</h1>  
            <h2>Add Employee</h2>  
            <EmployeeForm />  
            <h2>Add Vehicle</h2>  
            <VehicleForm />  
        </div>  
    );  
};  

export default Dashboard;