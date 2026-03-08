import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ────────────────────────────────────────────────────────
//  CV KNOWLEDGE BASE
// ────────────────────────────────────────────────────────
const KB = {
  name: "Kamvelihle Fatman",
  nickname: "Kamva",
  role: "Full-Stack Developer",
  location: "Johannesburg, Gauteng, South Africa",
  email: "kamvelihlefatman@gmail.com",
  github: "https://github.com/Kamva-pro",
  skills: [
    "HTML", "CSS", "JavaScript", "React", "React Native",
    "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    "Supabase", "Firebase", "Flutter", "Three.js",
    "Tailwind CSS", "Bootstrap", "Figma", "WordPress", "WooCommerce"
  ],
  experience: [
    {
      role: "Junior Web Developer",
      company: "Luminous Graphics",
      highlights: [
        "Developed and maintained WordPress and Shopify websites, improving UI/UX and functionality.",
        "Converted Figma mockups into responsive, functional user interfaces.",
        "Maintained clean, well-documented code and contributed to workflow improvements."
      ]
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      highlights: [
        "Designed and developed custom websites for local businesses, focusing on responsive design, 100% uptime, and fast rendering speeds.",
        "Implemented SEO best practices to improve search engine visibility and drive traffic."
      ]
    }
  ],
  education: [
    {
      qualification: "Web Design",
      institution: "CodeSpace Academy",
      highlights: ["Developed expertise in HTML, CSS, JavaScript, and UI/UX design."]
    },
    {
      qualification: "Information Technology: Software Engineering",
      institution: "WeThinkCode_",
      highlights: [
        "Gained hands-on experience in Object Oriented Programming, Software Architecture and Agile methodologies.",
        "Developed expertise in software testing and integrating CI/CD pipelines."
      ]
    }
  ],
  projects: [
    { name: "PM Grave Closures", tech: "HTML, CSS, JavaScript", desc: "Soweto-based grave maintenance business website." },
    { name: "Trip Tips", tech: "React, Bootstrap", desc: "Travel blog with ideas and insights on places to visit worldwide." },
    { name: "Mate Bets", tech: "React, Express.js, Axios, Supabase, Firebase", desc: "Interactive chess betting website." },
    { name: "Kasi IN", tech: "React Native, Expo, Node.js, PostgreSQL, Supabase", desc: "Township food delivery mobile app." },
    { name: "Mgijima", tech: "HTML, CSS, Firebase, JavaScript", desc: "NPO website providing assistance for schools and organisations." },
    { name: "EduConnect", tech: "React, Node.js, Express, MongoDB", desc: "Educational platform connecting students with tutors." }
  ]
};

// ────────────────────────────────────────────────────────
//  SIMPLE LOCAL LLM / RULE ENGINE
// ────────────────────────────────────────────────────────
function getAnswer(question) {
  const q = question.toLowerCase();

  // Greetings
  if (/\b(hi|hello|hey|sup|wassup|yo)\b/.test(q)) {
    return `Hey! 👋 I'm Kamva's AI assistant. Ask me anything about him — his skills, projects, experience, or education!`;
  }

  // Contact
  if (/email|contact|reach|mail/.test(q)) {
    return `You can reach Kamvelihle at 📧 **${KB.email}**.`;
  }

  // Location
  if (/where|location|based|live|city|johannesburg/.test(q)) {
    return `Kamvelihle is based in **${KB.location}** 🇿🇦.`;
  }

  // Name / who
  if (/\b(who|name)\b/.test(q)) {
    return `Kamvelihle Fatman (also known as **Kamva**) is a **${KB.role}** based in ${KB.location}.`;
  }

  // Role
  if (/role|job|title|what does|work as/.test(q)) {
    return `Kamvelihle is a **${KB.role}** who builds web and mobile applications across the full stack.`;
  }

  // Skills
  if (/skill|tech|stack|know|languages|tools|use/.test(q)) {
    return `Kamva's tech stack includes:\n\n${KB.skills.map(s => `• ${s}`).join('\n')}`;
  }

  // Experience
  if (/experience|work|job|career|luminous|freelance/.test(q)) {
    return KB.experience.map(e =>
      `**${e.role}** at *${e.company}*:\n${e.highlights.map(h => `• ${h}`).join('\n')}`
    ).join('\n\n');
  }

  // Education
  if (/education|study|school|university|codespace|wethinkcode|degree|qualification/.test(q)) {
    return KB.education.map(e =>
      `**${e.qualification}** — *${e.institution}*:\n${e.highlights.map(h => `• ${h}`).join('\n')}`
    ).join('\n\n');
  }

  // Projects
  if (/project|built|portfolio|app|website|kasi|trip|mate|mgijima|educonnect|pmgrave/.test(q)) {
    return `Here are some of Kamva's notable projects:\n\n${KB.projects.map(p =>
      `**${p.name}** (${p.tech})\n${p.desc}`
    ).join('\n\n')}`;
  }

  // GitHub
  if (/github|code|repo|source/.test(q)) {
    return `Check out Kamva's work on GitHub: [Kamva-pro](${KB.github}) 🚀`;
  }

  // Availability / hire
  if (/hire|available|freelance|open to|opportunities/.test(q)) {
    return `Kamvelihle is always open to exciting opportunities! Reach out at **${KB.email}** to discuss working together.`;
  }

  // About
  if (/about|tell me|describe|bio|summary/.test(q)) {
    return `${KB.name} is a passionate **${KB.role}** from ${KB.location}. He has experience working at Luminous Graphics and as a freelance developer — building websites, mobile apps, and creative digital solutions for clients ranging from local businesses to NPOs. He studied at WeThinkCode_ and CodeSpace Academy.`;
  }

  return `Hmm, I'm not sure about that one! 🤔 Try asking about Kamva's **skills**, **projects**, **experience**, **education**, or **contact info**.`;
}

// ────────────────────────────────────────────────────────
//  WELCOME MESSAGE
// ────────────────────────────────────────────────────────
const WELCOME_MESSAGES = [
  "👋 Yo! I'm Kamva's AI twin.",
  "Ask me anything about him — skills, projects, experience, you name it.",
  "Or just pick a quick link below to explore the portfolio. 🚀"
];

const NAV_LINKS = [
  { label: "📖 About", href: "#about" },
  { label: "💼 Projects", href: "#projects" },
  { label: "📬 Contact", href: "#contact" }
];

// ────────────────────────────────────────────────────────
//  CHATBOT COMPONENT
// ────────────────────────────────────────────────────────
const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [welcomed, setWelcomed] = useState(false);
  const bottomRef = useRef(null);

  // Animate welcome messages in on first open
  useEffect(() => {
    if (open && !welcomed) {
      setWelcomed(true);
      let delay = 0;
      WELCOME_MESSAGES.forEach((msg, i) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'bot', text: msg }]);
        }, delay);
        delay += 700 + msg.length * 20;
      });
    }
  }, [open, welcomed]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const answer = getAnswer(trimmed);
      setMessages(prev => [...prev, { role: 'bot', text: answer }]);
      setTyping(false);
    }, 800);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  // Format text: bold **x**, line breaks
  const formatText = (text) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, j) => {
        if (p.startsWith('**') && p.endsWith('**')) {
          return <strong key={j}>{p.slice(2, -2)}</strong>;
        }
        return p;
      });
      return <span key={i}>{parts}<br /></span>;
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        id="chatbot-trigger"
        onClick={() => setOpen(o => !o)}
        className="relative flex items-center gap-2 bg-[#915eff] hover:bg-[#7a4ed4] transition-all duration-300 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-lg shadow-[#915eff]/30"
      >
        <span className="text-base">{open ? '✕' : '💬'}</span>
        <span className="hidden sm:inline">{open ? 'Close' : 'Ask Kamva'}</span>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-20 right-4 sm:right-8 w-[95vw] sm:w-[400px] z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)',
              border: '1px solid rgba(145,94,255,0.3)',
              maxHeight: '80vh'
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#915eff]/20"
              style={{ background: 'linear-gradient(90deg, #915eff22, transparent)' }}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#915eff] to-[#4a9eff] flex items-center justify-center text-lg font-black shadow-lg shadow-[#915eff]/40">
                K
              </div>
              <div>
                <p className="text-white font-bold text-sm">Kamva AI</p>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"/>
                  Online · Ask me anything
                </p>
              </div>
            </div>

            {/* Quick Nav Links */}
            <div className="flex gap-2 px-4 py-3 border-b border-[#915eff]/10 flex-wrap">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'rgba(145,94,255,0.15)',
                    color: '#c4b5fd',
                    border: '1px solid rgba(145,94,255,0.25)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ minHeight: 200, maxHeight: '50vh' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'text-white rounded-br-sm'
                        : 'text-gray-100 rounded-bl-sm'
                    }`}
                    style={msg.role === 'user' ? {
                      background: 'linear-gradient(135deg, #915eff, #4a9eff)'
                    } : {
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#915eff]"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#915eff]/10 flex gap-2 items-center">
              <input
                id="chatbot-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about skills, projects..."
                className="flex-1 text-sm px-4 py-2.5 rounded-xl outline-none text-white placeholder-gray-500"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(145,94,255,0.25)'
                }}
              />
              <button
                id="chatbot-send"
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold transition-all hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #915eff, #4a9eff)' }}
              >
                ↑
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
