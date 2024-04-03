import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import chatbotImage from '../../assets/images/MaitreyaChatBot.png';
import './ChatBotComponent.scss';

const ChatBotComponent = () => {
  const [showOptions, setShowOptions] = useState(false);
  const categories = useSelector((state) => state.category.categories);
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/cart');
    setShowOptions(false);
  };

  const handleTalkToAgent = () => {
    alert('Connecting to an agent...');
    setShowOptions(false);
  };

  const handleCategorySelection = (category) => {
    navigate(`/category/${category}`);
    setShowOptions(false);
  };

  const toggleChat = () => {
    console.log('Chat icon clicked, current state:', showOptions);
    setShowOptions(!showOptions);
  };
  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={() => setShowOptions(!showOptions)}>
        {/* Icon */}
      </div>
      {showOptions && (
        <div className="chatbot-dialogue">
          <div className="chatbot-message">What would you like to do?</div>
          <div className="chatbot-option" onClick={handleNavigateToCart}>Go to your Cart</div>
          <div className="chatbot-option" onClick={handleTalkToAgent}>Talk to an Agent</div>
          <div className="chatbot-option" onClick={() => setShowOptions(false)}>Browse by Category</div>
          <div className="chatbot-categories">
            {categories.slice(0, 8).map((category, index) => (
              <div key={index} className="chatbot-option" onClick={() => handleCategorySelection(category)}>
                {category.replace('-', ' ')}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;
