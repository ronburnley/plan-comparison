import React, { useState } from 'react';

const ChatbotInterface: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  // Placeholder for chat messages - in a real app, this would be state managed
  const messages = [
    { sender: 'ai', text: 'Hello! Ask me anything about these plans.' },
    // { sender: 'user', text: 'What is the deductible?' }, // Example user message
    // { sender: 'ai', text: 'The deductible is...' }, // Example AI response
  ];

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('User message:', inputValue); // Placeholder action
      // In a real app:
      // 1. Add user message to messages state
      // 2. Send inputValue to the chatbot API
      // 3. Receive response and add AI message to messages state
      setInputValue('');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 mt-6 md:mt-8">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">Ask AI Assistant</h2>

      {/* Chat History Area */}
      <div className="h-64 border border-gray-300 rounded-md p-3 mb-4 overflow-y-auto bg-gray-50 flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg max-w-[80%] ${
            msg.sender === 'ai'
              ? 'bg-blue-100 text-blue-900 self-start'
              : 'bg-green-100 text-green-900 self-end'
          }`}>
            {msg.text}
          </div>
        ))}
         {/* Placeholder if no messages */}
         {messages.length === 0 && (
            <p className="text-center text-gray-500">Chat history will appear here.</p>
         )}
      </div>

      {/* Input Area */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your question..."
          className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotInterface;
