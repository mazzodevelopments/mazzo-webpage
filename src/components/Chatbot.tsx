'use client';
import React, {
  useState,
  ChangeEvent,
  useRef,
  useEffect,
  KeyboardEvent
} from 'react';
import { Button } from '@nextui-org/react';
import { FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import TypingIndicator from './TypingIndicator';
import { IoSparklesSharp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  button?: {
    text: string;
    url: string;
  };
  isDefault?: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFirstOpen, setIsFirstOpen] = useState<boolean>(true);
  const [hasAddedDefaultMessages, setHasAddedDefaultMessages] =
    useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const timestamp = formatTime(new Date());
    const newMessages: Message[] = [
      ...messages,
      { text: userInput, sender: 'user', timestamp }
    ];
    setMessages(newMessages);
    setUserInput('');

    // TYPING INDICATOR (HUMANIZE)
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      // SIMULATE DELAY (HUMANIZE)
      setTimeout(() => {
        setMessages([
          ...newMessages,
          {
            text: data.response,
            sender: 'bot',
            timestamp: formatTime(new Date()),
            button: data.contactButton
          }
        ]);
        setIsTyping(false);
      }, Math.floor(Math.random() * 2000) + 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
    }

    if (isFirstOpen) {
      setIsFirstOpen(false);
    }
  };

  const handleDefaultMessageClick = (text: string) => {
    setUserInput(text);
  };

  const handleMessageClick = (message: Message) => {
    if (message.isDefault) {
      handleDefaultMessageClick(message.text);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isOpen && animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }
  };

  // AUTO SCROLL
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && isFirstOpen && !hasAddedDefaultMessages) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "What's the most popular service?",
          sender: 'bot',
          timestamp: '',
          isDefault: true
        },
        {
          text: 'How can I contact support?',
          sender: 'bot',
          timestamp: '',
          isDefault: true
        }
      ]);
      setHasAddedDefaultMessages(true);
    }
  }, [isOpen, isFirstOpen, hasAddedDefaultMessages]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleChatbot}
            />
            <motion.div
              className="fixed bottom-0 right-0 w-full sm:w-80 mx-auto sm:m-4 bg-slate-900 border border-gray-800 sm:rounded-b-2xl md:rounded-b-2xl rounded-t-2xl shadow-lg text-gray-100 flex flex-col z-50" // Asegúrate de que el chatbot tenga un z-index mayor que el overlay
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '24rem', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 border-b border-gray-700 text-md font-semibold flex items-center relative">
                <h2 className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                  <span className="text-gray-100">AI Assistant</span>
                  <IoSparklesSharp className="text-xl" />
                </h2>
                <button
                  className="ml-auto text-gray-600 hover:text-gray-300"
                  onClick={toggleChatbot}
                >
                  <FaArrowDown />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start p-3 mb-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-gray-800 text-gray-100'
                    } ${message.isDefault ? 'cursor-pointer' : ''}`}
                    onClick={() => handleMessageClick(message)}
                  >
                    <div className="flex-1">
                      <div className="text-sm">{message.text}</div>
                      {message.button && (
                        <div className="mt-2">
                          <Button
                            as={ScrollLink}
                            to={message.button.url}
                            onClick={() => setIsOpen(false)}
                            smooth={true}
                            duration={500}
                            offset={-64}
                            className="w-full bg-emerald-700 text-emerald-100 border border-emerald-500 mb-3"
                          >
                            {message.button.text}
                          </Button>
                        </div>
                      )}
                      <div className="text-xs text-gray-300">
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 pb-2 border-t border-gray-700 flex items-center justify-between">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  className="p-2.5 mr-2.5 w-full bg-gray-700 text-gray-100 rounded-xl border border-gray-600 text-sm focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition duration-300"
                  ref={inputRef}
                />
                <Button
                  className="bg-emerald-700 text-emerald-100 border border-emerald-500"
                  onClick={handleSendMessage}
                >
                  Send
                </Button>
              </div>
              <div className="border-gray-700 text-gray-500 flex items-center justify-center pb-2 text-xs">
                <span>*</span> AI responses may not always be accurate
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!isOpen && (
        <div
          className={`cursor-pointer text-xl fixed bottom-4 right-4 bg-emerald-700 text-emerald-100 border border-emerald-500 p-4 rounded-full ${
            isAnimating ? 'animate-bounce' : ''
          }`}
          onClick={toggleChatbot}
        >
          {' '}
          <IoSparklesSharp />{' '}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
