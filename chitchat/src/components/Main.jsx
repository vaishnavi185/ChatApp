import React, { useState, useEffect } from 'react';

export default function Main({ selectedGroup }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (selectedGroup) {
      setMessages(selectedGroup.messages || []);
    }
  }, [selectedGroup]);

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessages = [...messages, input];
      setMessages(newMessages);
      setInput('');
    }
  };

  if (!selectedGroup) {
    return <div className="text-gray-500 text-lg p-4">Select a group to start chatting</div>;
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className="p-2 mb-2 bg-blue-500 text-white rounded-lg max-w-xs">
            {message}
          </div>
        ))}
      </div>

      {/* Input box and send button */}
      <div className="flex items-center mt-2 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg outline-none"
        />
        <button onClick={handleSend} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
