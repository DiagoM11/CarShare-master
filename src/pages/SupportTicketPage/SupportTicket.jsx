import { useState } from 'react';
import './SupportTicket.css';

function SupportTicketForm() {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        dateCreated: new Date().toISOString().split('T')[0] // Current date
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { subject, message, dateCreated } = formData;

        // Validation before submitting
        if (!subject || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        // Example of form submission (you would replace this with your actual submission logic)
        console.log('Form submitted:', { subject, message, dateCreated });

        // Clear the form fields after submission (optional)
        setFormData({
            subject: '',
            message: '',
            dateCreated: new Date().toISOString().split('T')[0] // Reset to current date
        });
    };

    return (
        <div className="support-ticket-page">
            <div className="support-ticket-container">
                <h2>Create Support Ticket</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="subject">Subject</label>
                        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                            <option value="">Select a subject</option>
                            <option value="Mechanical Problems">Mechanical Problems</option>
                            <option value="Cleanliness or Condition">Cleanliness or Condition</option>
                            <option value="Accident Reporting">Accident Reporting</option>
                            <option value="Insurance and Claims">Insurance and Claims</option>
                            <option value="Booking Issues">Booking Issues</option>
                            <option value="Payment and Billing Disputes">Payment and Billing Disputes</option>
                            <option value="Account and Verification Issues">Account and Verification Issues</option>
                            <option value="General Inquiries">General Inquiries</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="dateCreated">Date Created</label>
                        <input type="date" id="dateCreated" name="dateCreated" value={formData.dateCreated} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Submit Ticket</button>
                </form>
            </div>
        </div>
    );
}

export default SupportTicketForm;

 
