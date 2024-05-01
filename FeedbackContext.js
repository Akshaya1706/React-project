import React, { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState('');

  const submitFeedback = (newFeedback) => {
    setFeedback(newFeedback);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, submitFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
