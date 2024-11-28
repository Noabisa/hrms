import React, { useState } from 'react';  
import axios from 'axios';  

const VehicleForm = () => {  
    const [vehicle, setVehicle] = useState({  
        vin: '',  
        model: '',  
        mileage: '',  
        driver: '',  
        status: 'available'  
    });  

    const handleChange = (e) => {  
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });  
    };  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        await axios.post('http://localhost:5000/api/vehicles', vehicle);  
        // Reset form or provide feedback  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input name="vin" onChange={handleChange} placeholder="VIN" required />  
            <input name="model" onChange={handleChange} placeholder="Model" required />  
            <input name="mileage" type="number" onChange={handleChange} placeholder="Mileage" required />  
            <input name="driver" onChange={handleChange} placeholder="Driver" required />  
            <button type="submit">Add Vehicle</button>  
        </form>  
    );  
};  

export default VehicleForm;