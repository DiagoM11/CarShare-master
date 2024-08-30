import { useState } from 'react';

const faqData = [
  {
    question: "What documents do I need to rent a car?",
    answer: "To rent a car, you typically need a valid driver’s license, a credit card in the renter’s name, and a government-issued ID or passport. International renters may need an International Driving Permit (IDP) along with their home country’s driver’s license."
  },
  {
    question: "Are there any additional fees or charges I should be aware of?",
    answer: "Additional fees may include insurance coverage, young driver surcharges, additional driver fees, fuel charges, and late return fees. It's important to review the rental agreement for any potential extra costs before confirming your reservation."
  },
  {
    question: "Can I return the rental car to a different location?",
    answer: "Yes, we offer one-way rentals, allowing you to return the car to a different location. However, this may incur an additional fee. It's recommended to check with our rental company beforehand to understand any associated costs and ensure availability."
  },
  {
    question: "What are the requirements to add my car to the rental list?",
    answer: `To add your car to the rental list, you typically need to meet the following requirements:
    - Vehicle Age and Condition: Your car must be within a certain age range (usually less than 10-15 years old) and in good working condition.
    - Insurance: Your vehicle must be insured. Some platforms may offer their own insurance coverage, but you should verify the specifics.
    - Registration and Documentation: Your car must have a valid registration and all necessary documentation, including a clear title and any state-required inspections.
    - Safety Features: Your car should meet all safety standards and be equipped with necessary safety features, such as airbags, seat belts, and anti-lock brakes.
    - Cleanliness: Your vehicle should be clean and well-maintained, both inside and out, before being listed.
    - Ownership Proof: You may need to provide proof of ownership or permission from the owner if you are listing a car that is not registered in your name.`
  }
];

const HelpPage = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    const foundFaq = faqData.find(faq => faq.question.toLowerCase().includes(userQuestion.toLowerCase()));
    setDisplayedAnswer(foundFaq ? foundFaq.answer : 'Sorry, we could not find an answer to your question.');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Help Page</h1>
      <form onSubmit={handleQuestionSubmit} style={{ marginBottom: '20px' }}>
        <label>
          Enter your question:
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px', padding: '5px' }}>Submit</button>
      </form>
      {displayedAnswer && (
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <strong>Answer:</strong>
          <p>{displayedAnswer}</p>
        </div>
      )}
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <button 
              onClick={() => setDisplayedAnswer(faq.answer)}
              style={{
                background: 'none',
                border: 'none',
                color: '#007BFF',
                textDecoration: 'underline',
                cursor: 'pointer',
                padding: '0'
              }}
            >
              {faq.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpPage;
