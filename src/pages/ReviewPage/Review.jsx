import {useState} from 'react';

function ReviewForm() {
    const [formData, setFormData] = useState({
        bookingID: '', // Assuming you have booking ID or booking details in your application
        rating: '',
        comment: ''
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
        const { bookingID, rating, comment } = formData;

        // You can add validation here before submitting
        if (!bookingID || !rating || !comment) {
            alert('Please fill out all required fields.');
            return;
        }

        // Example of form submission (you would replace this with your actual submission logic)
        console.log('Form submitted:', { bookingID, rating, comment });

        // Clear the form fields after submission (optional)
        setFormData({
            bookingID: '',
            rating: '',
            comment: ''
        });
    };

    return (
        <div className="review-form-page">
            <div className="review-form-container">
                <h2>Leave a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="bookingID">Booking ID</label>
                        <input type="text" id="bookingID" name="bookingID" value={formData.bookingID} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Submit Review</button>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
