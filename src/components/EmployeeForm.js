import React, { useState } from 'react';  
import axios from 'axios';  

const EmployeeForm = () => {  
    const [employee, setEmployee] = useState({  
        staffNumber: '',  
        fullName: '',  
        identityNumber: '',  
        qualifications: [],  
        position: '',  
        salary: ''  
    });  

    const handleChange = (e) => {  
        setEmployee({ ...employee, [e.target.name]: e.target.value });  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        await axios.post('http://localhost:5000/api/employees', employee);  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input name="staffNumber" onChange={handleChange} placeholder="Staff Number" required />  
            <input name="fullName" onChange={handleChange} placeholder="Full Name" required />  
            <input name="identityNumber" onChange={handleChange} placeholder="Identity Number" required /> 
            <input name="qualification" onChange={handleChange} placeholder="Qualifications" required /> 
            <input name="position" onChange={handleChange} placeholder="Position" required />  
            <input name="salary" type="number" onChange={handleChange} placeholder="Salary" required />  
            <button type="submit">Add Employee</button>  
        </form>  
    );  
};  

export default EmployeeForm;