import {motion, AnimatePresence} from 'framer-motion';
import React, {useState, useEffect, useRef} from 'react';
import {styles} from '../styles';

// ─────────────────────────────────────────────
//  CV KNOWLEDGE BASE
// ─────────────────────────────────────────────
const KB = {
  name: "Kamvelihle Fatman",
  role: "Full-Stack Developer",
  location: "Johannesburg, Gauteng, South Africa",
  email: "kamvelihlefatman@gmail.com",
  github: "https://github.com/Kamva-pro",
  skills: ["HTML","CSS","JavaScript","React","React Native","Node.js","Express.js","MongoDB","PostgreSQL","Supabase","Firebase","Flutter","Three.js","Tailwind CSS","Bootstrap","Figma","WordPress","WooCommerce"],
  experience: [
    { role:"Junior Web Developer", company:"Luminous Graphics", highlights:["Built and maintained WordPress & Shopify sites, improving UI/UX and functionality.","Converted Figma mockups into responsive, pixel-perfect web interfaces.","Maintained clean documentation and contributed to workflow improvements."] },
    { role:"Freelance Developer", company:"Self-employed", highlights:["Designed & developed custom websites for local businesses with a focus on responsive design, 100% uptime, and fast rendering.","Implemented SEO best practices to boost search visibility and drive traffic."] }
  ],
  education: [
    { qual:"Web Design", inst:"CodeSpace Academy", note:"HTML, CSS, JavaScript & UI/UX design." },
    { qual:"Information Technology: Software Engineering", inst:"WeThinkCode_", note:"OOP, Software Architecture, Agile, testing & CI/CD pipelines." }
  ],
  projects: [
    { name:"PM Grave Closures", tech:"HTML, CSS, JS", desc:"Soweto grave maintenance business web presence." },
    { name:"Trip Tips", tech:"React, Bootstrap", desc:"Travel blog — cool places worldwide." },
    { name:"Mate Bets", tech:"React, Express, Supabase, Firebase", desc:"Interactive chess betting platform." },
    { name:"Kasi IN", tech:"React Native, Expo, Node.js, PostgreSQL", desc:"Township food delivery mobile app." },
    { name:"Mgijima", tech:"HTML, CSS, Firebase, JS", desc:"NPO website for schools & community orgs." },
    { name:"EduConnect", tech:"React, Node.js, Express, MongoDB", desc:"E-learning platform connecting students with tutors." }
  ]
};

function getAnswer(q) {
  const t = q.toLowerCase();
  if (/\b(hi|hello|hey|sup|yo|howzit)\b/.test(t)) return "Hey! 👋 I'm Kamva's AI. Ask me anything — skills, projects, experience, or education!";
  if (/\b(who|name|about|tell me|describe)\b/.test(t)) return `${KB.name} is a **${KB.role}** based in ${KB.location}. He's passionate about building web and mobile products that make a real impact.`;
  if (/email|contact|reach/.test(t)) return `📧 Reach Kamva at **${KB.email}**`;
  if (/location|based|where|city/.test(t)) return `📍 **${KB.location}**`;
  if (/role|job|title|what does|work/.test(t)) return `Kamva is a **${KB.role}** — fluent across frontend, backend, and mobile development.`;
  if (/skill|tech|stack|know|language|tool/.test(t)) return `**Tech Stack:**\n${KB.skills.map(s=>`• ${s}`).join('\n')}`;
  if (/experienc|work|career|luminous|freelanc/.test(t)) return KB.experience.map(e=>`**${e.role}** @ *${e.company}*\n${e.highlights.map(h=>`• ${h}`).join('\n')}`).join('\n\n');
  if (/education|study|school|codespace|wethink|degree/.test(t)) return KB.education.map(e=>`**${e.qual}** — *${e.inst}*\n${e.note}`).join('\n\n');
  if (/project|built|portfolio|app|website|kasi|trip|mate|mgijima|educonnect|pmgrave/.test(t)) return `**Projects:**\n\n${KB.projects.map(p=>`**${p.name}** *(${p.tech})*\n${p.desc}`).join('\n\n')}`;
  if (/github|code|repo/.test(t)) return `🚀 Check out his work: **github.com/Kamva-pro**`;
  if (/hire|available|opportunit|freelanc/.test(t)) return `Kamva is open to exciting opportunities! Drop him a line at **${KB.email}** 🙌`;
  return `Hmm, not sure about that one 🤔\nTry asking about my **skills**, **projects**, **experience**, **education**, or **contact info**.`;
}

// ─────────────────────────────────────────────
//  NAV SECTIONS
// ─────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "about",    label: "About",    icon: "👤" },
  { id: "projects", label: "Projects", icon: "💼" },
  { id: "contact",  label: "Contact",  icon: "📬" },
];

const WELCOME = [
  { id: 1, text: "👋 Hey, I'm Kamva's AI." },
  { id: 2, text: "Ask me anything about him — skills, projects, experience, or education." },
  { id: 3, text: "Or jump to a section using the buttons below ↓" },
];

// ─────────────────────────────────────────────
//  FORMAT helper
// ─────────────────────────────────────────────
function Formatted({ text }) {
  return (
    <span>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {line.split(/(\*\*[^*]+\*\*)/).map((chunk, j) =>
            chunk.startsWith('**') && chunk.endsWith('**')
              ? <strong key={j}>{chunk.slice(2,-2)}</strong>
              : chunk
          )}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}

// ─────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────
const Hero = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput]       = useState('');
  const [typing, setTyping]     = useState(false);
  const bottomRef               = useRef(null);

  // Staggered welcome messages
  useEffect(() => {
    WELCOME.forEach((w, i) => {
      setTimeout(() => {
        setMessages(prev => [...prev, { role:'bot', text: w.text, id: w.id + Date.now() }]);
      }, 400 + i * 700);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }, [messages, typing]);

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setMessages(p => [...p, { role:'user', text:t, id: Date.now() }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages(p => [...p, { role:'bot', text: getAnswer(t), id: Date.now() + 1 }]);
      setTyping(false);
    }, 900);
  };

  const onKey = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center px-4 pt-20 pb-4 overflow-hidden">

  
      {/* Headline */}
      <motion.h1
        initial={{ opacity:0, y:-10 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.7, delay:0.1 }}
        className={`${styles.heroHeadText} text-white text-center mb-4`}
      >
        Hi, I'm <span style={{ color:'#915eff' }}>Kamvelihle</span>
      </motion.h1>

      {/* Section nav buttons */}
      <motion.div
        initial={{ opacity:0, y:10 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay:0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-4"
      >
        {NAV_SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => {
              const element = document.getElementById(s.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.hash = '#/';
                setTimeout(() => {
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              }
            }}
            className="px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background:'rgba(145,94,255,0.12)',
              border:'1px solid rgba(145,94,255,0.3)',
              color:'#c4b5fd'
            }}
          >
            {s.icon} {s.label}
          </button>
        ))}
      </motion.div>

      {/* ── CHAT BOX ── */}
      <motion.div
        initial={{ opacity:0, scale:0.97 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:0.5, delay:0.3 }}
        className="w-full max-w-2xl flex flex-col rounded-3xl overflow-hidden"
        style={{
          background:'linear-gradient(145deg, #0f0f1f 0%, #1a1a2e 100%)',
          border:'1px solid rgba(145,94,255,0.25)',
          boxShadow:'0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(145,94,255,0.1)',
          minHeight: 0
        }}
      >
        {/* Chat header */}
        <div
          className="flex items-center gap-3 px-6 py-4"
          style={{ borderBottom:'1px solid rgba(145,94,255,0.15)', background:'rgba(145,94,255,0.05)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg"
            style={{ background:'linear-gradient(135deg, #915eff, #4a9eff)', boxShadow:'0 4px 20px rgba(145,94,255,0.5)' }}
          >
            K
          </div>
          <div>
            <p className="text-white font-bold text-sm">Kamva AI</p>
            <p className="text-xs flex items-center gap-1" style={{ color:'#4ade80' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"/>
              Online · Full-Stack Developer · JHB 🇿🇦
            </p>
          </div>
          {/* Decorative dots */}
          <div className="ml-auto flex gap-1.5">
            {['#ff5f5f','#ffbe2e','#27c93f'].map(c => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ background:c }}/>
            ))}
          </div>
        </div>

        <div
          className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3"
          style={{ minHeight:120, maxHeight:'22vh' }}
        >
          <AnimatePresence initial={false}>
            {messages.map(msg => (
              <motion.div
                key={msg.id}
                initial={{ opacity:0, y:8 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.25 }}
                className={`flex ${msg.role==='user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'bot' && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2 shrink-0 mt-0.5"
                    style={{ background:'linear-gradient(135deg,#915eff,#4a9eff)' }}
                  >K</div>
                )}
                <div
                  className="max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  style={msg.role==='user' ? {
                    background:'linear-gradient(135deg,#915eff,#4a9eff)',
                    color:'#fff',
                    borderBottomRightRadius:4
                  } : {
                    background:'rgba(255,255,255,0.06)',
                    border:'1px solid rgba(255,255,255,0.08)',
                    color:'#e2e8f0',
                    borderBottomLeftRadius:4
                  }}
                >
                  <Formatted text={msg.text} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                style={{ background:'linear-gradient(135deg,#915eff,#4a9eff)' }}
              >K</div>
              <div
                className="px-4 py-3 rounded-2xl flex gap-1 items-center"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)', borderBottomLeftRadius:4 }}
              >
                {[0,1,2].map(i => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background:'#915eff' }}
                    animate={{ y:[0,-5,0] }}
                    transition={{ duration:0.55, repeat:Infinity, delay:i*0.15 }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef}/>
        </div>

        {/* Input */}
        <div
          className="px-5 py-4 flex gap-3 items-end"
          style={{ borderTop:'1px solid rgba(145,94,255,0.12)' }}
        >
          <textarea
            id="hero-chat-input"
            rows={1}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask me about Kamva's skills, projects, experience..."
            className="flex-1 resize-none text-sm text-white placeholder-gray-500 bg-transparent outline-none leading-relaxed"
            style={{
              background:'rgba(255,255,255,0.05)',
              border:'1px solid rgba(145,94,255,0.2)',
              borderRadius:14,
              padding:'10px 14px',
              maxHeight:80
            }}
          />
          <button
            id="hero-chat-send"
            onClick={send}
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-all hover:scale-105 active:scale-95"
            style={{ background:'linear-gradient(135deg,#915eff,#4a9eff)', boxShadow:'0 4px 15px rgba(145,94,255,0.4)' }}
          >↑</button>
        </div>
      </motion.div>

      {/* Suggested questions */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.5, duration:0.5 }}
        className="mt-5 flex flex-wrap justify-center gap-2 max-w-2xl"
      >
        {['What skills do you have?','Tell me about your projects','Where did you study?','How can I hire you?'].map(q => (
          <button
            key={q}
            onClick={() => { setInput(q); }}
            className="text-xs px-3 py-1.5 rounded-lg transition-all hover:scale-105"
            style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#94a3b8' }}
          >
            {q}
          </button>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;