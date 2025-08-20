'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSpotlight } from '@/hooks/use-spotlight';

const NAVIGATION_ITEMS = [
  { name: "Home", path: "/", description: "Go to the home page" },
  { name: "Projects", path: "/projects", description: "View all projects" },
  { name: "About", path: "/about", description: "Learn more about me" },
  { name: "Contact", path: "/contact", description: "Get in touch" },
  { name: "Blog", path: "/blog", description: "Read my latest articles" },
  { name: "Resume", path: "/resume", description: "View or download my resume" }
];

type AIMessage = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const SpotlightContent = () => {
  const { close, isOpen } = useSpotlight();
  
  // Handle mount/unmount
  useEffect(() => {
    return () => {};
  }, []);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      window.addEventListener('keydown', handleKeyDown);
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  // Handle clicks outside the spotlight
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Only proceed if the click is outside the spotlight content
      if (spotlightRef.current && !spotlightRef.current.contains(e.target as Node)) {
        // Stop propagation to prevent event bubbling
        e.stopPropagation();
        // Close the spotlight
        close();
      }
    };

    // Use a small timeout to ensure the listener is added after the click that opened the spotlight
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside, true);
    }, 0);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [close]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const currentQuery = input?.value || '';
    if (!currentQuery.trim()) return;

    // Add user message
    const userMessage: AIMessage = {
      id: Date.now().toString(),
      content: currentQuery,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    // Handle navigation
    const navItem = NAVIGATION_ITEMS.find(item => 
      item.name.toLowerCase() === currentQuery.trim().toLowerCase() ||
      item.path.toLowerCase() === currentQuery.trim().toLowerCase()
    );

    if (navItem) {
      // If it's a direct match, navigate immediately
      window.location.href = navItem.path;
      close();
    } else {
      // Otherwise show a helpful message
      setTimeout(() => {
        const aiMessage: AIMessage = {
          id: (Date.now() + 1).toString(),
          content: `I can help you navigate to: ${NAVIGATION_ITEMS.map(i => i.name).join(', ')}`,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 300);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        {/* Spotlight container */}
        <div className="relative flex items-start justify-center pt-16 pb-4 px-4 h-full">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          ref={spotlightRef}
          className="w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl bg-white/95 border border-gray-200 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search or navigate..."
                  className="w-full bg-transparent py-4 pl-11 pr-4 text-gray-900 placeholder-gray-500 text-sm font-mono focus:outline-none font-medium"
                  autoComplete="off"
                  spellCheck="false"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <kbd className="inline-flex items-center px-2 py-1 rounded border border-gray-200 text-xs font-mono text-gray-600 bg-gray-50">
                    {navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl K'}
                  </kbd>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </form>

            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {messages.length === 0 && !query ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center py-8"
                >
                  <div className="text-gray-900 text-xs font-mono tracking-wider mb-4 font-semibold uppercase">NAVIGATE QUICKLY</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left px-8">
                    {NAVIGATION_ITEMS.map((item, i) => (
                      <a
                        key={i}
                        href={item.path}
                        onClick={close}
                        className="block p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-900 transition-colors duration-150 border border-gray-200 font-medium"
                      >
                        <span className="text-blue-600 dark:text-blue-300 mr-2 font-medium">/</span>
                        {item.name}
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {/* Search results or AI response will be shown here */}
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                            message.isUser
                            ? 'bg-blue-600 text-white rounded-br-none font-medium shadow-md'
                            : 'bg-white text-gray-900 rounded-bl-none border border-gray-200 shadow-sm'
                        }`}
                      >
                        <div className="text-sm">{message.content}</div>
                        <div 
                          className={`text-[10px] mt-1.5 font-mono tracking-wide ${
                            message.isUser ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 p-4"
                    >
                      <div className="flex space-x-1.5">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-blue-500"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                          }}
                        />
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-blue-500"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                            delay: 0.2
                          }}
                        />
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-blue-500"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                            delay: 0.4
                          }}
                        />
                      </div>
                      <Command className="h-3.5 w-3.5 text-gray-500" />
                      <span className="text-xs text-gray-500">
                        {navigator.platform.includes('Mac') ? 'K' : 'Ctrl K'}
                      </span>
                      <span className="text-xs text-gray-700 font-mono font-medium">Thinking...</span>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
              
              {/* Close instruction - only show when there are no messages */}
              {messages.length === 0 && (
                <div className="text-xs text-gray-500 text-center py-4 font-mono">
                  <div className="mb-2">
                    Press <kbd className="mx-1 px-1.5 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">Esc</kbd> to close
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Tip: Press <kbd className="mx-0.5 px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">⌘K</kbd> or <kbd className="mx-0.5 px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">Ctrl K</kbd> to open this menu
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

const SpotlightSearch = () => {
  const { isOpen, close } = useSpotlight();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Add a small delay for the exit animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return <SpotlightContent />;
};

export default SpotlightSearch;
