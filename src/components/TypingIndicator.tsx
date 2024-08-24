import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center mt-4">
      <div className="ml-2 flex items-center">
        <div className="dot animate-bounce delay-75" />
        <div className="dot animate-bounce delay-150" />
        <div className="dot animate-bounce delay-225" />
      </div>
    </div>
  );
};

export default TypingIndicator;
