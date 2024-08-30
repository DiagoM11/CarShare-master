import { useState } from 'react';
import './AddCar.css';

function AddCar() {
    const [formData, setFormData] = useState({
        carInformation: {
            carInformationID: '',
            make: '',
            model: '',
            year: '',
            licensePlate: '',
            description: '',
            type: '',
            features: ''
        },
        rentalRate: '',
        availabilityStatus: '',
        picture1: null,
        picture2: null,
        picture3: null
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (name.startsWith('carInformation')) {
            const infoField = name.split('.')[1];
            setFormData(prevFormData => ({
                ...prevFormData,
                carInformation: {
                    ...prevFormData.carInformation,
                    [infoField]: value
                }
            }));
        } else if (type === 'file') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: e.target.files[0] 
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
    
       
        formDataToSend.append('carInformationID', formData.carInformation.carInformationID);
        formDataToSend.append('make', formData.carInformation.make);
        formDataToSend.append('model', formData.carInformation.model);
        formDataToSend.append('year', formData.carInformation.year);
        formDataToSend.append('licensePlate', formData.carInformation.licensePlate);
        formDataToSend.append('description', formData.carInformation.description);
        formDataToSend.append('type', formData.carInformation.type);
        formDataToSend.append('features', formData.carInformation.features);
        formDataToSend.append('rentalRate', formData.rentalRate);
        formDataToSend.append('availabilityStatus', formData.availabilityStatus);
        formDataToSend.append('picture1', formData.picture1);
        formDataToSend.append('picture2', formData.picture2);
        formDataToSend.append('picture3', formData.picture3);
    
        try {
            const response = await fetch('http://localhost:8080/group19-capstone-project/api/carInformation/create', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa('user:password'), 
                    
                },
                body: formDataToSend 
            });
    
            if (response.ok) {
                setMessage('Car added successfully!');
            } else {
                setMessage('Failed to add car. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="add-car-page">
            <div className="add-car-container">
                <h2>Add New Car</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Car Information */}
                    <div className="input-group">
                        <label htmlFor="car_informationid">Car Information ID</label>
                        <input type="text" id="car_informationid" name="carInformation.car_informationid" value={formData.carInformation.car_informationid} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="make">Make</label>
                        <input type="text" id="make" name="carInformation.make" value={formData.carInformation.make} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="model">Model</label>
                        <input type="text" id="model" name="carInformation.model" value={formData.carInformation.model} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" name="carInformation.year" value={formData.carInformation.year} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="license_plate">License Plate</label>
                        <input type="text" id="license_plate" name="carInformation.license_plate" value={formData.carInformation.license_plate} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="carInformation.description" value={formData.carInformation.description} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" id="type" name="carInformation.type" value={formData.carInformation.type} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="features">Features</label>
                        <textarea id="features" name="carInformation.features" value={formData.carInformation.features} onChange={handleChange} required />
                    </div>

                    {/* Other Car Details */}
                    <div className="input-group">
                        <label htmlFor="rental_rate">Rental Rate</label>
                        <input type="text" id="rental_rate" name="rentalRate" value={formData.rentalRate} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="availability_status">Availability Status</label>
                        <input type="text" id="availability_status" name="availability_status" value={formData.availability_status} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="picture1">Car Picture 1</label>
                        <input type="file" id="picture1" name="picture1" onChange={handleChange} accept="image/*" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="picture2">Car Picture 2</label>
                        <input type="file" id="picture2" name="picture2" onChange={handleChange} accept="image/*" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="picture3">Car Picture 3</label>
                        <input type="file" id="picture3" name="picture3" onChange={handleChange} accept="image/*" />
                    </div>

                    <button type="submit" className="add-car-btn">Add Car</button>
                </form>
                {message && <p>{message}</p>} {/* Display success/failure message */}
            </div>
        </div>
    );
}

export default AddCar;
