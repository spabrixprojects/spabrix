'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Mic, MicOff, Sparkles, ChevronRight, Zap, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event & { error?: string }) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionConstructor {
  new(): SpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const SpeechRecognitionConstructor: SpeechRecognitionConstructor | undefined =
  typeof window !== 'undefined'
    ? (window.SpeechRecognition || window.webkitSpeechRecognition)
    : undefined;

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedQA: { question: string; answer: string }[] = [
  // ... same questions as before ...
  { question: 'what services do you offer', answer: 'We offer **web development**, **creative web design**, **ecommerce solutions**, and **performance optimization**.' },
  { question: 'contact', answer: 'You can reach us at **fozecode@gmail.com** or call **+91 8129780845**.' },
  { question: 'pricing', answer: 'Our pricing is flexible based on project scope. **Contact us** for a free custom quote.' },
  { question: 'projects', answer: 'We have delivered impactful solutions for healthcare, e-commerce, and corporate sectors. Check our portfolio section.' },
  { question: 'technologies', answer: 'We specialize in **Next.js**, **React**, **Tailwind CSS**, and **Node.js** for high-performance apps.' },
  { question: 'how are you', answer: 'I am **Spabrix AI**, functioning at peak performance and ready to assist you.' },
];

const quickChips = [
  "Services",
  "Pricing",
  "Contact Info",
  "Technologies"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I am **SPABRIX AI**. How can I elevate your digital presence today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!SpeechRecognitionConstructor) return;
    recognitionRef.current = new SpeechRecognitionConstructor();
    recognitionRef.current.continuous = false;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      setInput(transcript);
      setIsListening(false);
      handleAutoAnswer(transcript);
    };

    recognitionRef.current.onerror = (event: Event & { error?: string }) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => setIsListening(false);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition not supported.');
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleAutoAnswer = async (transcript: string) => {
    // Add user message immediately
    setMessages((prev) => [...prev, { text: transcript, isUser: true, timestamp: new Date() }]);
    setInput('');
    setIsLoading(true);

    const lowerTranscript = transcript.toLowerCase();
    const matchedQA = predefinedQA.find(({ question }) => lowerTranscript.includes(question));

    // Simulate "thinking" delay
    setTimeout(async () => {
      let responseText = "";

      if (matchedQA) {
        responseText = matchedQA.answer;
      } else {
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: transcript }),
          });
          if (!response.ok) throw new Error('API Error');
          const data = await response.json();
          responseText = data.response;
        } catch {
          responseText = "I'm optimizing my connection. Please try again in a moment.";
        }
      }

      setMessages((prev) => [...prev, { text: responseText, isUser: false, timestamp: new Date() }]);
      setIsLoading(false);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleAutoAnswer(input.trim());
  };

  const handleChipClick = (chip: string) => {
    handleAutoAnswer(chip.toLowerCase());
  };

  // Simple parser to render bold text surrounded by **
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-cyan-300 font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-2xl z-50 flex items-center justify-center group border border-white/20"
          >
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_2s_ease-in-out_infinite] opacity-20" />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-400/40 transition-all duration-500" />
            <Bot className="text-white w-8 h-8 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-4 sm:right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[85vh] rounded-3xl overflow-hidden z-50 shadow-2xl border border-white/10 backdrop-blur-2xl bg-slate-900/90 flex flex-col font-sans"
          >
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-b border-white/5 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'} shadow-[0_0_10px_currentColor]`} />
                  {isLoading && <div className="absolute inset-0 w-3 h-3 rounded-full bg-amber-400 animate-ping opacity-50" />}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg tracking-wide flex items-center gap-2">
                    SPABRIX AI <Sparkles className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-slate-400 text-xs font-medium">Online & Ready</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Header Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -z-10" />
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!msg.isUser && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mr-3 mt-1 shadow-lg shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl relative ${msg.isUser
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-sm'
                        : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-sm backdrop-blur-md'
                      }`}
                  >
                    <p className="text-sm leading-relaxed">{renderText(msg.text)}</p>
                    <span className={`text-[10px] mt-2 block opacity-60 ${msg.isUser ? 'text-blue-100' : 'text-slate-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mr-3 mt-1 shadow-lg shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips & Input */}
            <div className="p-4 bg-slate-900/80 border-t border-white/10 backdrop-blur-md">
              {/* Chips */}
              {messages.length < 3 && (
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-2">
                  {quickChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleChipClick(chip)}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all whitespace-nowrap"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-3 rounded-xl transition-all duration-300 ${isListening ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
                >
                  {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                </button>

                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {input.length > 0 && <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={20} />
                </button>
              </form>

              <div className="mt-3 text-center">
                <p className="text-[10px] text-slate-600 flex items-center justify-center gap-1">
                  Powered by <Zap size={10} className="text-amber-400" /> Spabrix Neural Engine
                </p>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
