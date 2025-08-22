'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { motion, AnimatePresence } from 'framer-motion';

// Add this to your global CSS or in this file with a CSS module
const globalStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;
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

const BentoBox = ({ 
  title, 
  description, 
  isExpanded, 
  onClick,
  tags = []
}: { 
  title: string; 
  description: string; 
  isExpanded: boolean; 
  onClick: () => void;
  tags?: string[];
}) => (
  <motion.div
    layout
    initial={{ borderRadius: 12 }}
    className={`bg-white/80 backdrop-blur-sm border border-gray-200 overflow-hidden cursor-pointer transition-all ${
      isExpanded ? 'row-span-2' : 'hover:bg-white/90'
    }`}
    onClick={onClick}
  >
    <motion.div 
      className="p-4"
      layout="position"
    >
      <h4 className="font-mono font-medium text-sm">{title}</h4>
      <motion.p 
        className="text-xs text-gray-500 mt-0.5"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isExpanded ? 1 : 0.8 }}
      >
        {description}
      </motion.p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono bg-gray-100 text-gray-600 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      {isExpanded && (
        <motion.div 
          className="mt-4 pt-4 border-t border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-3">
            <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md" />
            <p className="text-xs text-gray-600">Click to view project details, screenshots, and more information about the implementation.</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  </motion.div>
);

const NavigationContent = ({ path }: { path: string }) => {
  // Remove the back button from the content since we've moved it to the header
  if (!path) return null;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: '2',
      title: 'Task Management',
      description: 'Collaborative task management for teams',
      tags: ['Next.js', 'TypeScript', 'Firebase']
    },
    {
      id: '3',
      title: 'AI Chatbot',
      description: 'Conversational AI for customer support',
      tags: ['Python', 'TensorFlow', 'NLP']
    },
    {
      id: '4',
      title: 'Portfolio Site',
      description: 'Personal portfolio website',
      tags: ['Next.js', 'Framer Motion']
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-6">
      <h3 className="text-lg font-mono font-semibold mb-6">
        {path === '/projects' ? 'Projects' : 
         path === '/about' ? 'About' :
         path === '/contact' ? 'Contact' :
         path === '/blog' ? 'Blog' :
         path === '/resume' ? 'Resume' : 'Content'}
      </h3>
      
      {path === '/projects' ? (
        <div className="grid grid-cols-2 gap-4 auto-rows-[minmax(100px,auto)]">
          {projects.map((project) => (
            <BentoBox
              key={project.id}
              title={project.title}
              description={project.description}
              isExpanded={expandedId === project.id}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
              <div className="font-mono text-sm font-medium">
                {path === '/blog' ? `Blog Post ${i + 1}` : `Item ${i + 1}`}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                This is a sample {path === '/blog' ? 'blog post' : 'item'} content.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SpotlightContent = () => {
  const { close, isOpen } = useSpotlight();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  
  // Reset currentPath when closing the spotlight
  useEffect(() => {
    if (!isOpen) {
      setCurrentPath(null);
    }
  }, [isOpen]);

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

    // Handle back command
    if (['back', 'go back', 'return', 'exit'].includes(currentQuery.trim().toLowerCase())) {
      if (currentPath) {
        setCurrentPath(null);
        setIsLoading(false);
        return;
      }
    }

    // Handle navigation
    const navItem = NAVIGATION_ITEMS.find(item => 
      item.name.toLowerCase() === currentQuery.trim().toLowerCase() ||
      item.path.toLowerCase() === currentQuery.trim().toLowerCase()
    );

    if (navItem) {
      // Set the current path to show navigation content
      setCurrentPath(navItem.path);
      setIsLoading(false);
    } else {
      // Otherwise show a helpful message
      setTimeout(() => {
        const aiMessage: AIMessage = {
          id: (Date.now() + 1).toString(),
          content: currentPath 
            ? `Type "back" to return to search.`
            : `I can help you navigate to: ${NAVIGATION_ITEMS.map(i => i.name).join(', ')}`,
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
    <>
      <style jsx global>{globalStyles}</style>
      <AnimatePresence>
      <div className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="relative flex items-start justify-center p-4 h-full overflow-hidden">
          <div className={`w-full max-w-[1200px] ${currentPath ? 'h-auto max-h-[80vh]' : 'h-auto max-h-[90vh]'} flex ${currentPath ? 'justify-between gap-4' : 'justify-center'}`}>
            {/* Left Panel - Chat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                width: currentPath ? 'calc(50% - 12px)' : '100%',
                maxWidth: currentPath ? '600px' : '42rem',
              }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full max-h-[80vh]"
              ref={spotlightRef}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="relative flex flex-col h-full overflow-hidden"
              >
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
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
                        placeholder={currentPath ? 'Type "back" to return to search...' : 'Search or navigate...'}
                        className="w-full bg-gray-50 rounded-lg py-3 pl-11 pr-4 text-gray-900 placeholder-gray-500 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        autoComplete="off"
                        spellCheck="false"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <kbd className="inline-flex items-center px-2 py-1 rounded border border-gray-200 text-xs font-mono text-gray-600 bg-white">
                          {navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl K'}
                        </kbd>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-2 space-y-3 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                          message.isUser
                            ? 'bg-black text-white rounded-br-none'
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-medium">
                            {message.isUser ? 'You' : 'Assistant'}
                          </span>
                          <span className="text-xs opacity-70 ml-2">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} className="h-4" />
                </div>
                {messages.length === 0 && (
                  <div className="text-xs text-gray-500 text-center py-6 px-4 font-mono">
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-3 text-gray-700">How can I help you today?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <div 
                          className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer" 
                          onClick={() => {
                            setCurrentPath('/projects');
                            setQuery('');
                            setMessages(prev => [...prev, {
                              id: Date.now().toString(),
                              content: 'Show me your projects',
                              isUser: true,
                              timestamp: new Date()
                            }]);
                          }}
                        >
                          <div className="font-medium text-gray-800">Show projects</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">View my latest work</div>
                        </div>
                        <div 
                          className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => {
                            setCurrentPath('/about');
                            setQuery('');
                            setMessages(prev => [...prev, {
                              id: Date.now().toString(),
                              content: 'What are your skills?',
                              isUser: true,
                              timestamp: new Date()
                            }]);
                          }}
                        >
                          <div className="font-medium text-gray-800">View skills</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">See my technical expertise</div>
                        </div>
                        <div 
                          className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => {
                            setCurrentPath('/contact');
                            setQuery('');
                            setMessages(prev => [...prev, {
                              id: Date.now().toString(),
                              content: 'How to contact you?',
                              isUser: true,
                              timestamp: new Date()
                            }]);
                          }}
                        >
                          <div className="font-medium text-gray-800">Contact info</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">Get in touch with me</div>
                        </div>
                        <div 
                          className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => {
                            setCurrentPath('/about');
                            setQuery('');
                            setMessages(prev => [...prev, {
                              id: Date.now().toString(),
                              content: 'Tell me about yourself',
                              isUser: true,
                              timestamp: new Date()
                            }]);
                          }}
                        >
                          <div className="font-medium text-gray-800">About me</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">Learn more about who I am</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-400 space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Press</span>
                        <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">Esc</kbd>
                        <span>to close</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <span>Press</span>
                        <kbd className="px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">
                          {navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl K'}
                        </kbd>
                        <span>to open this menu</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {currentPath && (
              <motion.div
                key="navigation-panel"
                initial={{ opacity: 0, x: 20, width: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  width: 'calc(50% - 12px)',
                  transition: { 
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    width: { duration: 0.2 }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  x: 20,
                  width: 0,
                  transition: { 
                    duration: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                className="h-full max-h-[80vh] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-3 flex items-center">
                  <button
                    onClick={() => setCurrentPath(null)}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                      <path d="m12 19-7-7 7-7"/>
                      <path d="M19 12H5"/>
                    </svg>
                    <span>Back to chat</span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <NavigationContent path={currentPath} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      </AnimatePresence>
    </>
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
