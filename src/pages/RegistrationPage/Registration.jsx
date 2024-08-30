import { useState } from 'react';
import axios from 'axios';
import "./Registration.css";
import logo from '../HomePage/CarShare-Logo.png'; // Import the logo

function Registration() { 
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    license: null,
    identityDocument: null,
  }); 
  const [submissionStatus, setSubmissionStatus] = useState('');
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object to hold the form data
    const form = new FormData();

    // Append JSON data as a string
    form.append('user', JSON.stringify({
      name: {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
      },
      contact: {
        email: formData.email,
        phone: formData.phone,
      },
      address: {
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
      },
    }));
 
    if (formData.license) {
      form.append('license', formData.license);
    }
    if (formData.identityDocument) {
      form.append('identityDocument', formData.identityDocument);
    }

    try { 
      const response = await axios.post('/group19-capstone-project/user/create', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       
      setSubmissionStatus('Registration successful!');
      console.log(response.data);
    } catch (error) { 
      setSubmissionStatus('Registration failed. Please try again.');
      console.error('There was an error registering the user:', error);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <img src={logo} alt="Car Share Logo" className="logo" /> {/* Add logo */}
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-columns">
            <div className="column">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="column">
              <div className="form-group">
                <label>Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Province</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Drivers License</label>
                <input
                  type="file"
                  name="license"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>Identity Document</label>
                <input
                  type="file"
                  name="identityDocument"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        {submissionStatus && <p>{submissionStatus}</p>}
      </div>
    </div>
  );
}

export default Registration;
