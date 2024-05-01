import React, { useState } from 'react';
import { useFeedback } from './FeedbackContext';

const FeedbackForm = () => {
  const [input, setInput] = useState('');
  const { submitFeedback } = useFeedback();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Enter your feedback here..."
        rows="4"
        cols="50"
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
