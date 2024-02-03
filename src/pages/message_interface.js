import React, { useState } from 'react';

const MessageInterface = () => {
  // State to hold the message content
  const [message, setMessage] = useState('');
  // State to hold the list of messages
  const [messages, setMessages] = useState([]);

  // Function to handle input change
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the new message to the list of messages
    setMessages([...messages, message]);

    // Clear the message input field
    setMessage('');
  };

  return (
    <div>
      <h1>Message Interface</h1>
      <div>
        {/* Display the list of messages */}
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg}</p>
          </div>
        ))}
      </div>
      {/* Form to input a new message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageInterface;
