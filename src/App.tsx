import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TOKENS = {
  accent: "var(--accent)",
  accentHover: "var(--accent-hover)",
  accentTint: "var(--accent-tint)",
  accentSage: "var(--accent-sage)",
  gold: "var(--gold)",
  goldDark: "var(--gold-dark)",
  goldTint: "var(--gold-tint)",
  mint: "var(--mint)",
  forest: "var(--forest)",
  peach: "var(--peach)",
  peachTint: "var(--peach-tint)",
  cream: "var(--cream)",
  statusGreen: "var(--status-green)",
  textPrimary: "var(--text-primary)",
  textMuted: "var(--text-muted)",
  bgMain: "var(--bg-main)",
  bgSection: "var(--bg-section)",
  bgCard: "var(--bg-card)",
  border: "var(--border)",
  borderHover: "var(--border-hover)",
  shadow: "0 2px 12px rgba(0,0,0,0.08)",
  heroGradient: "linear-gradient(135deg, var(--accent) 0%, #1A1A1A 100%)",
  heroOverlay: "linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.4) 100%)",
} as const;

const SectionWrapper = ({ children, className = "", style = {}, isAlt = false }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, isAlt?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className={`${isAlt ? "section-alt" : ""} ${className}`}
      style={{
        padding: "72px 24px",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        ...style
      }}
    >
      <div className="max-w-custom">
        {children}
      </div>
    </section>
  );
};

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any } }
} as any;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] as any }
  })
} as any;

// Icons
const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
  </svg>
);

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="1em" height="1em">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="1em" height="1em">
    <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowDownRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);

const PulseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const PillIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M10.5 20.5 19 12a4.95 4.95 0 1 0-7-7L3.5 13.5a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const AtomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(135 12 12)" />
  </svg>
);

const SyringeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.4 0-3.4L15 5" />
    <path d="m9 11 4 4" />
    <path d="m5 19-3 3" />
    <path d="m14 4 6 6" />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MessageCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const TowerSVG = () => (
  <svg viewBox="0 0 200 300" fill="none"
    style={{ position: "absolute", left: "50%", top: "50%",
      transform: "translate(-50%,-50%)", width: 280, height: 420, opacity: 0.5 }}>
    <ellipse cx="100" cy="150" rx="35" ry="150" fill="white" opacity="0.15"/>
    <ellipse cx="100" cy="150" rx="65" ry="160" stroke="white" strokeWidth="1" opacity="0.2" fill="none"/>
    <ellipse cx="100" cy="150" rx="95" ry="170" stroke="white" strokeWidth="0.8" opacity="0.15" fill="none"/>
    <ellipse cx="100" cy="150" rx="125" ry="180" stroke="white" strokeWidth="0.6" opacity="0.1" fill="none"/>
    <path d="M70 40 Q100 5 130 40 L135 260 Q100 295 65 260 Z" fill="white" opacity="0.15"/>
    <circle cx="100" cy="150" r="4" fill="white" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// Components
const Navbar = ({ isDark, toggleDark }: { isDark: boolean, toggleDark: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
      height: 48,
      borderBottom: `1px solid ${TOKENS.border}`,
      backgroundColor: scrolled ? TOKENS.bgCard : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <GridIcon />
        <span style={{ fontSize: 14, fontWeight: 700, color: TOKENS.textPrimary }}>Arogya Saarthi</span>
      </div>
      
      <div onClick={toggleDark} style={{
        width: 40, height: 22, backgroundColor: TOKENS.textPrimary, borderRadius: 100,
        position: "relative", cursor: "pointer", display: "flex", alignItems: "center",
        padding: "0 2px", justifyContent: isDark ? "flex-end" : "flex-start"
      }}>
        <motion.div layout transition={{ type: "spring", stiffness: 700, damping: 30 }} style={{
          width: 18, height: 18, backgroundColor: TOKENS.bgMain, borderRadius: "50%"
        }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, color: TOKENS.textMuted }}>New York, USA 3:47 PM</span>
        <motion.button whileHover={{ scale: 1.04, color: TOKENS.accent }} whileTap={{ scale: 0.96 }} style={{
          width: 28, height: 28, borderRadius: "50%", border: `1px solid ${TOKENS.border}`,
          display: "flex", alignItems: "center", justifyContent: "center", background: TOKENS.bgCard, cursor: "pointer",
          color: TOKENS.textPrimary
        }}>
          <QuestionIcon />
        </motion.button>
        <motion.button whileHover={{ scale: 1.04, color: TOKENS.accent }} whileTap={{ scale: 0.96 }} style={{
          width: 28, height: 28, borderRadius: "50%", border: `1px solid ${TOKENS.border}`,
          display: "flex", alignItems: "center", justifyContent: "center", background: TOKENS.bgCard, cursor: "pointer",
          color: TOKENS.textPrimary
        }}>
          <HamburgerIcon />
        </motion.button>
      </div>
    </nav>
  );
};

const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      background: TOKENS.heroGradient,
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: 420, overflow: "hidden" }}>
      {/* Background with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85
          }}
          src="https://assets.mixkit.co/videos/preview/mixkit-medical-laboratory-with-blue-light-40158-large.mp4"
        />
        {/* Subtle gradient to ensure text readability if needed, but keeping it light as requested */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          zIndex: 1
        }} />
      </motion.div>

      {/* Left side icon bar */}
      <Sidebar />

      {/* Innovative health solutions card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute", left: 20, bottom: 30, background: TOKENS.bgCard, borderRadius: 10,
          padding: "10px 14px", boxShadow: TOKENS.shadow, zIndex: 10,
          display: "flex", flexDirection: "column", gap: 4
        }}
      >
        <div style={{ position: "absolute", top: 6, left: 6, color: TOKENS.textMuted, fontSize: 10 }}>
          <SettingsIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
          <strong style={{ fontSize: 12, fontWeight: 700, color: TOKENS.textPrimary }}>Innovative</strong>
          <span style={{ fontSize: 11, color: TOKENS.textMuted }}>health solutions</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ color: TOKENS.accent, fontSize: 12, display: "flex" }}
          >
            <PlusIcon />
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: TOKENS.accentSage }} 
          />
        </div>
      </motion.div>

      {/* Our Mission floating pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 10
        }}
      >
        <div style={{
          width: 40, height: 40, borderRadius: "50%", backgroundColor: TOKENS.peach,
          position: "relative", border: `2px solid ${TOKENS.bgMain}`, boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            position: "absolute", top: -2, right: -2, width: 14, height: 14, background: TOKENS.bgMain,
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            <ArrowUpRightIcon />
          </div>
        </div>
        <div style={{ fontSize: 11, color: TOKENS.textMuted, fontWeight: 500 }}>Our Mission</div>
      </motion.div>

      {/* Right side floating cards */}
      <div style={{ position: "absolute", right: 24, top: 10, display: "flex", flexDirection: "column", gap: 12, zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 200, background: TOKENS.bgCard, borderRadius: 12, padding: 16, boxShadow: TOKENS.shadow,
              display: "flex", flexDirection: "column", gap: 8
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.textPrimary }}>Collaborate With Us</div>
            <div style={{ fontSize: 11, color: TOKENS.textMuted, lineHeight: 1.4 }}>
              Join our network of healthcare providers and emergency response units.
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: TOKENS.accentHover }} whileTap={{ scale: 0.98 }}
              style={{
                width: "100%", background: TOKENS.accent, color: "white", border: "none",
                borderRadius: 8, padding: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{
              width: 200, background: TOKENS.bgCard, borderRadius: 12, padding: 16, boxShadow: TOKENS.shadow,
              display: "flex", flexDirection: "column", gap: 8
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.textPrimary }}>Stay Updated</div>
            <div style={{ fontSize: 11, color: TOKENS.textMuted, lineHeight: 1.4 }}>
              Get the latest insights on healthcare technology and system innovations.
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: TOKENS.accentHover }} whileTap={{ scale: 0.98 }}
              style={{
                width: "100%", background: TOKENS.accent, color: "white", border: "none",
                borderRadius: 8, padding: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif"
              }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const icons = [<PhoneIcon key="1"/>, <GridIcon key="2"/>, <GlobeIcon key="3"/>, <SettingsIcon key="4"/>];
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 0, zIndex: 20 }}
    >
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          whileHover={{ x: 3, scale: 1.05, color: TOKENS.accent }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 32, height: 32, borderRadius: "50%",
            border: `1px solid ${TOKENS.border}`,
            background: TOKENS.bgMain,
            color: TOKENS.textPrimary,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            margin: "4px 8px",
            transition: "all 0.2s ease"
          }}
        >
          {Icon}
        </motion.div>
      ))}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 24, height: 24, borderRadius: "50%",
          background: TOKENS.textPrimary,
          color: TOKENS.bgMain,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          margin: "4px 12px"
        }}
      >
        <CloseIcon />
      </motion.div>
    </motion.div>
  );
};

const Headline = () => {
  const headlineText = "Connecting Healthcare Resources When Every Second Matters";
  const words = headlineText.split(" ");

  return (
    <div style={{ padding: "40px 24px 48px", maxWidth: 820, margin: "0 auto", backgroundColor: TOKENS.bgMain }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 12 }}>
        <div style={{ color: TOKENS.textMuted, fontSize: 16, marginTop: 4 }}><PlusCircleIcon /></div>
        <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.2, color: TOKENS.textPrimary, margin: 0 }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
          <span style={{ display: "inline-flex", gap: 4, verticalAlign: "middle", marginLeft: 6, color: TOKENS.textMuted, fontSize: 18 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px solid currentColor" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px solid currentColor" }} />
          </span>
        </h1>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ fontSize: 15, color: TOKENS.textMuted, lineHeight: 1.65, maxWidth: 620, marginTop: 16 }}
      >
        Across cities and healthcare networks, critical information about ICU beds, doctors, ambulances, and medical equipment remains fragmented. Arogya Saarthii brings these resources into a unified real-time system.
      </motion.p>

      <div style={{ display: "flex", gap: 12, marginTop: 28, alignItems: "center" }}>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.04, backgroundColor: TOKENS.accentHover }} whileTap={{ scale: 0.96 }}
          style={{
            background: TOKENS.accent, color: "white", border: "none", borderRadius: 24,
            padding: "12px 24px", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif"
          }}
        >
          Explore Platform
          <ArrowUpRightIcon />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.04, backgroundColor: TOKENS.bgSection }} whileTap={{ scale: 0.96 }}
          style={{
            background: "transparent", color: TOKENS.textPrimary, border: `1.5px solid ${TOKENS.borderHover}`, borderRadius: 24,
            padding: "12px 24px", fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif"
          }}
        >
          See How It Works
        </motion.button>
      </div>

      <StatsBar />
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { bold: "98+", light: " Partner Hospitals" },
    { icon: <PersonIcon />, light: " Certified Specialists Network" },
    { icon: <ActivityIcon />, light: " Integrated Medical Technologies" },
    { bold: "1.5K+", light: " Patients Assisted" }
  ];

  return (
    <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
          style={{
            border: `1px solid ${TOKENS.border}`, borderRadius: 24, padding: "7px 14px",
            background: TOKENS.bgCard, display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap", fontSize: 12
          }}
        >
          {stat.icon && <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 14, height: 14 }}>{stat.icon}</span>}
          {stat.bold && <strong style={{ fontWeight: 700, color: TOKENS.accent }}>{stat.bold}</strong>}
          <span style={{ color: TOKENS.textMuted }}>{stat.light}</span>
        </motion.div>
      ))}
    </div>
  );
};

const ProblemSection = () => (
  <SectionWrapper isAlt style={{ borderLeft: `4px solid ${TOKENS.accentSage}` }}>
    <motion.div variants={fadeUp} style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: TOKENS.textPrimary }}>
        Healthcare Systems Still Operate in Silos
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ fontSize: 14, color: TOKENS.textPrimary, lineHeight: 1.6 }}>
          Across cities and healthcare networks, hospitals operate using disconnected systems. Critical information about ICU beds, doctors, ambulances, and life-saving equipment is often scattered across institutions, making coordination difficult during emergencies.
        </p>
        <p style={{ fontSize: 14, color: TOKENS.textPrimary, lineHeight: 1.6 }}>
          The result is delayed response, inefficient patient transfers, and underutilized medical resources.
        </p>
        <p style={{ fontSize: 16, fontWeight: 600, color: TOKENS.accent, lineHeight: 1.5, marginTop: 8 }}>
          The resources exist.<br/>
          The system simply cannot see them.
        </p>
      </div>
    </motion.div>
  </SectionWrapper>
);

const Products = () => {
  const productColors = [TOKENS.accent, TOKENS.forest, TOKENS.goldDark];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.bgSection }}>
      <motion.h2 variants={fadeUp} style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, textAlign: "center", marginBottom: 16, color: TOKENS.textPrimary }}>
        Explore Our Healthcare Solutions<br/>and Capabilities
      </motion.h2>
      <motion.p variants={fadeUp} style={{
        textAlign: "center", fontSize: 15, color: TOKENS.textMuted, lineHeight: 1.6,
        maxWidth: 700, margin: "0 auto 40px"
      }}>
        Our platform connects hospitals, doctors, ambulances, and critical infrastructure into a single intelligent network designed to support faster medical response and better healthcare coordination.
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1fr", gridTemplateRows: "auto auto", gap: 16, marginBottom: 32 }}>
        <motion.div variants={cardVariants} custom={0} whileHover={{ y: -5, boxShadow: TOKENS.shadow }} style={{
          border: `1px solid ${TOKENS.border}`, background: TOKENS.bgCard, borderRadius: 24, padding: "32px 20px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 12, cursor: "pointer"
        }}>
          <div style={{ fontSize: 28, color: productColors[0] }}><PulseIcon /></div>
          <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2, color: TOKENS.textPrimary }}>Hospital Resource Network</span>
          <span style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.5 }}>Real-time visibility of ICU beds, ventilators, and emergency resources across connected hospitals.</span>
        </motion.div>
        
        <motion.div variants={cardVariants} custom={1} whileHover={{ y: -5, boxShadow: TOKENS.shadow }} style={{
          gridRow: "span 2", border: `1px solid ${TOKENS.accentSage}`, background: TOKENS.accentTint, borderRadius: 28, padding: "40px 24px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, cursor: "pointer", minHeight: 280
        }}>
          <div style={{ fontSize: 48, color: TOKENS.accent }}><PillIcon /></div>
          <span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2, color: TOKENS.textPrimary }}>Smart Emergency Coordination</span>
          <span style={{ fontSize: 14, color: TOKENS.textMuted, lineHeight: 1.6 }}>AI-assisted system that helps ambulances and emergency teams identify the nearest hospital with available resources instantly.</span>
        </motion.div>

        <motion.div variants={cardVariants} custom={2} whileHover={{ y: -5, boxShadow: TOKENS.shadow }} style={{
          border: `1px solid ${TOKENS.border}`, background: TOKENS.bgCard, borderRadius: 24, padding: "32px 20px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 12, cursor: "pointer"
        }}>
          <div style={{ fontSize: 28, color: productColors[1] }}><StethoscopeIcon /></div>
          <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2, color: TOKENS.textPrimary }}>Medical Devices Integration</span>
          <span style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.5 }}>Connect and monitor hospital equipment to ensure availability and efficient utilization across healthcare facilities.</span>
        </motion.div>

        <motion.div variants={cardVariants} custom={3} whileHover={{ y: -5, boxShadow: TOKENS.shadow }} style={{
          border: `1px solid ${TOKENS.border}`, background: TOKENS.bgCard, borderRadius: 24, padding: "32px 20px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 12, cursor: "pointer"
        }}>
          <div style={{ fontSize: 28, color: productColors[2] }}><AtomIcon /></div>
          <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2, color: TOKENS.textPrimary }}>Biological & Diagnostic Support</span>
          <span style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.5 }}>Integrated data systems enabling laboratories and diagnostic centers to share critical patient insights securely.</span>
        </motion.div>

        <motion.div variants={cardVariants} custom={4} whileHover={{ y: -5, boxShadow: TOKENS.shadow }} style={{
          border: `1px solid ${TOKENS.border}`, background: TOKENS.bgCard, borderRadius: 24, padding: "32px 20px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 12, cursor: "pointer"
        }}>
          <div style={{ fontSize: 28, color: productColors[0] }}><SyringeIcon /></div>
          <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2, color: TOKENS.textPrimary }}>Vaccination & Public Health</span>
          <span style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.5 }}>Support large-scale vaccination and healthcare initiatives through centralized planning and resource coordination.</span>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 16, padding: "0 10px" }}>
        <motion.div whileHover={{ scale: 1.04, color: TOKENS.accent }} whileTap={{ scale: 0.96 }} style={{
          width: 40, height: 40, borderRadius: "50%", border: `1px solid ${TOKENS.border}`,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer", color: TOKENS.textPrimary
        }}>
          <PlusIcon />
        </motion.div>
        <p style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.5 }}>
          Arogya Saarthii connects healthcare providers, emergency responders, and infrastructure into a unified digital healthcare ecosystem.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

const Awards = () => {
  const awardsList = [
    { title: "Global Vaccination Leadership", sub: "Recognized for supporting healthcare organizations in improving vaccination coordination and resource accessibility.", icon: <ArrowUpRightIcon /> },
    { title: "Medical Innovation Excellence", sub: "Awarded for developing technology that improves healthcare system efficiency and emergency response coordination.", icon: <ArrowDownRightIcon /> },
    { title: "Healthcare Impact Initiative of the Year", sub: "Honored for creating digital infrastructure that connects hospitals, ambulances, and healthcare professionals.", icon: <ArrowDownRightIcon /> }
  ];

  return (
    <SectionWrapper>
      <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 16 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2, flex: 1, maxWidth: "55%", color: TOKENS.textPrimary }}>Our Impact & Recognition</h2>
        <p style={{ fontSize: 11, color: TOKENS.textMuted, lineHeight: 1.5, flex: 1, maxWidth: "42%" }}>
          Our mission is to strengthen healthcare coordination through technology. The impact of our work is reflected in collaborations, recognition, and the trust placed in us by healthcare institutions.
        </p>
      </motion.div>

      <div style={{ display: "flex", gap: 16 }}>
        <motion.div variants={fadeUp} style={{
          width: "45%", height: 200, borderRadius: 20, background: TOKENS.heroGradient, position: "relative", overflow: "hidden"
        }}>
          <TowerSVG />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 10, display: "flex", gap: 8, alignItems: "center" }}>
            <motion.div whileHover={{ scale: 1.04, backgroundColor: TOKENS.accentTint }} whileTap={{ scale: 0.96 }} style={{
              background: "rgba(255,255,255,0.9)", borderRadius: 100, padding: "6px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer", color: TOKENS.textPrimary, border: `1px solid ${TOKENS.border}`
            }}>
              Learn More
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, backgroundColor: TOKENS.accentTint }} whileTap={{ scale: 0.96 }} style={{
              width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: TOKENS.textPrimary, border: `1px solid ${TOKENS.border}`
            }}>
              <ShareIcon />
            </motion.div>
          </div>
        </motion.div>

        <div style={{ width: "55%", display: "flex", flexDirection: "column", gap: 8 }}>
          {awardsList.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ x: 2, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", borderColor: TOKENS.gold }}
              style={{
                border: `1px solid ${TOKENS.border}`, borderRadius: 14, padding: "12px 14px",
                display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", background: TOKENS.bgCard
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingRight: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2, color: TOKENS.textPrimary }}>{award.title}</span>
                {award.sub && <span style={{ fontSize: 11, color: TOKENS.textMuted, lineHeight: 1.3 }}>{award.sub}</span>}
              </div>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: TOKENS.accentTint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: TOKENS.goldDark }}>
                {award.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const Footer = () => (
  <footer
    style={{
      padding: "60px 24px 40px",
      borderTop: `1px solid ${TOKENS.border}`,
      marginTop: 40,
      backgroundColor: TOKENS.bgSection,
      color: TOKENS.textPrimary
    }}
  >
    <div className="max-w-custom" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 40 }}>
      <div style={{ gridColumn: "span 2" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <GridIcon />
          <span style={{ fontSize: 16, fontWeight: 700, color: TOKENS.textPrimary }}>Arogya Saarthi</span>
        </div>
        <p style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.6, maxWidth: 300 }}>
          Building the digital backbone for connected healthcare. Real-time coordination for life-saving moments.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: TOKENS.statusGreen, boxShadow: `0 0 8px ${TOKENS.statusGreen}` }} className="pulse-dot" />
          <span style={{ fontSize: 11, fontWeight: 600, color: TOKENS.textMuted }}>All Systems Operational</span>
        </div>
      </div>
      
      <div>
        <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: TOKENS.textPrimary }}>Product</h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {["Network", "Coordination", "Resources", "Analytics"].map(item => (
            <li key={item}><a href="#" className="footer-link" style={{ fontSize: 13, color: TOKENS.textMuted, textDecoration: "none", transition: "color 0.2s ease" }}>{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: TOKENS.textPrimary }}>Company</h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {["About", "Mission", "Team", "Contact"].map(item => (
            <li key={item}><a href="#" className="footer-link" style={{ fontSize: 13, color: TOKENS.textMuted, textDecoration: "none", transition: "color 0.2s ease" }}>{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: TOKENS.textPrimary }}>Legal</h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {["Privacy", "Terms", "Security", "Compliance"].map(item => (
            <li key={item}><a href="#" className="footer-link" style={{ fontSize: 13, color: TOKENS.textMuted, textDecoration: "none", transition: "color 0.2s ease" }}>{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="max-w-custom" style={{ marginTop: 40, paddingTop: 20, borderTop: `1px solid ${TOKENS.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <p style={{ fontSize: 11, color: TOKENS.textMuted }}>© 2026 Arogya Saarthi. All rights reserved.</p>
      <div style={{ display: "flex", gap: 16 }}>
        {/* Social icons would go here */}
      </div>
    </div>
  </footer>
);

// --- NEW SECTIONS ---

const TrustBar = () => {
  const hospitals = [
    "AIIMS Delhi", "Apollo Hospitals", "Fortis Healthcare", "Medanta",
    "Manipal Hospitals", "Max Healthcare", "Narayana Health", "Aster DM Healthcare"
  ];

  const pillColors = [
    { bg: "#E8F0DA", text: "#3a5016", border: "#c8daa0" }, // Olive tint
    { bg: "#F0F4F8", text: "#2c4a6e", border: "#c5d5e8" }, // Slate tint
    { bg: "#FDF6EC", text: "#7a4f1a", border: "#f0d9b0" }, // Warm amber tint
    { bg: "#F0F8F4", text: "#1a5c3a", border: "#a8d9bc" }, // Mint tint
    { bg: "#F5F0FA", text: "#4a2c7a", border: "#d0b8f0" }, // Lavender tint
    { bg: "#FEF0F0", text: "#7a1f1f", border: "#f0b8b8" }, // Rose tint
  ];

  const marqueeItems = [...hospitals, ...hospitals, ...hospitals, ...hospitals];

  return (
    <div style={{
      backgroundColor: "#F9F9F9",
      borderTop: "1px solid #E5E5E5",
      borderBottom: "1px solid #E5E5E5",
      padding: "24px 0",
      overflow: "hidden",
      position: "relative"
    }}>
      <style>{`
        .marquee-container { width: 100%; overflow: hidden; }
        .marquee-content { 
          display: flex; 
          width: max-content; 
          animation: marquee 40s linear infinite; 
          gap: 30px; 
          padding-left: 30px; 
        }
        .marquee-content:hover { animation-play-state: paused; }
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .trust-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
          white-space: nowrap;
        }
        .trust-pill:hover {
          filter: brightness(0.96);
          transform: scale(1.03);
        }
        .pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>
      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeItems.map((name, i) => {
            const colors = pillColors[i % pillColors.length];
            return (
              <div
                key={i}
                className="trust-pill"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  borderColor: colors.border
                }}
              >
                <div className="pill-dot" style={{ backgroundColor: colors.text }} />
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    { 
      title: "Connect", 
      desc: "Hospitals & ambulances join the unified network securely.", 
      icon: <GlobeIcon />,
      theme: {
        bg: TOKENS.accentTint,
        border: TOKENS.accentSage,
        ring: TOKENS.accentTint,
        stroke: TOKENS.accent
      }
    },
    { 
      title: "Coordinate", 
      desc: "Real-time visibility into beds, doctors, and resources.", 
      icon: <ActivityIcon />,
      theme: {
        bg: TOKENS.goldTint,
        border: TOKENS.gold,
        ring: TOKENS.goldTint,
        stroke: TOKENS.goldDark
      }
    },
    { 
      title: "Deliver", 
      desc: "Optimized routing and prep for immediate patient care.", 
      icon: <LeafIcon />,
      theme: {
        bg: TOKENS.mint,
        border: TOKENS.forest,
        ring: TOKENS.mint,
        stroke: TOKENS.forest
      }
    }
  ];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.bgSection }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 60, color: TOKENS.textPrimary }}>How It Works</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
        {/* Dashed Line */}
        <svg style={{ position: "absolute", top: 40, left: "10%", width: "80%", height: 2, zIndex: 0 }}>
          <line x1="0" y1="0" x2="50%" y2="0" stroke={TOKENS.accentSage} strokeWidth="2" strokeDasharray="6 6" className="dashed-line" />
          <line x1="50%" y1="0" x2="100%" y2="0" stroke={TOKENS.gold} strokeWidth="2" strokeDasharray="6 6" className="dashed-line" />
        </svg>
        
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
            style={{ width: "28%", textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <motion.div 
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ 
                width: 80, 
                height: 80, 
                borderRadius: "50%", 
                backgroundColor: step.theme.bg, 
                margin: "0 auto 20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                border: `2px solid ${step.theme.border}`,
                boxShadow: `0 0 0 6px ${step.theme.ring}`,
                position: "relative"
              }}
            >
              <div style={{ fontSize: 32, color: step.theme.stroke, display: "flex" }}>{step.icon}</div>
              
              {/* Step Number Badge */}
              <div style={{ 
                position: "absolute", 
                top: -2, 
                right: -2, 
                width: 20, 
                height: 20, 
                borderRadius: "50%", 
                backgroundColor: step.theme.stroke, 
                color: "white", 
                fontSize: 10, 
                fontWeight: 700, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                border: "2px solid white"
              }}>
                {i + 1}
              </div>

              {/* Pulse Ring Animation */}
              <div className="pulse-ring" style={{ borderColor: step.theme.stroke }} />
            </motion.div>
            
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: TOKENS.textPrimary }}>{step.title}</h3>
            <p style={{ fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.5 }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <style>{`
        .dashed-line { stroke-dashoffset: 0; animation: dash 20s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -100; } }
        .pulse-ring { 
          position: absolute; 
          inset: -4px; 
          border: 1px solid; 
          border-radius: 50%; 
          opacity: 0; 
          animation: pulse-ring-anim 2s infinite; 
          pointer-events: none;
        }
        @keyframes pulse-ring-anim { 
          0% { transform: scale(0.8); opacity: 0.5; } 
          100% { transform: scale(1.2); opacity: 0; } 
        }
      `}</style>
    </SectionWrapper>
  );
};

const LiveCounters = () => {
  const stats = [
    { target: 90, label: "Partner Hospitals", suffix: "+" },
    { target: 1.5, label: "Patients Assisted", suffix: "K+", isFloat: true },
    { target: 15, label: "Integrated Technologies", suffix: "+" },
    { target: 3, label: "Cities Active", suffix: "" }
  ];

  const Counter = ({ target, isFloat }: { target: number, isFloat?: boolean }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentCount = easeOutCubic * target;
          
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, target]);

    return <span ref={ref}>{isFloat ? count.toFixed(1) : Math.floor(count)}</span>;
  };

  return (
    <section style={{ padding: "72px 24px", backgroundColor: TOKENS.bgSection, color: TOKENS.textPrimary, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `radial-gradient(circle at 2px 2px, ${TOKENS.accent} 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
      <div className="max-w-custom" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, position: "relative" }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, color: TOKENS.accent }}>
              <Counter target={stat.target} isFloat={stat.isFloat} />{stat.suffix}
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, color: TOKENS.textMuted }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const DashboardPreview = () => (
  <SectionWrapper style={{ backgroundColor: TOKENS.accentTint }}>
    <div style={{ border: `1px solid ${TOKENS.border}`, borderRadius: 12, overflow: "hidden", boxShadow: TOKENS.shadow, backgroundColor: TOKENS.bgCard }}>
      <div style={{ padding: "12px 20px", borderBottom: `1px solid ${TOKENS.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: TOKENS.bgCard }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E53E3E" }} className="pulse-alert" />
          <span style={{ fontSize: 12, fontWeight: 700, color: TOKENS.textPrimary }}>LIVE TRACKING: AMB-042</span>
        </div>
        <div style={{ fontSize: 11, color: TOKENS.textMuted }}>ETA: 4 MINS</div>
      </div>
      <div style={{ height: 300, position: "relative", backgroundColor: TOKENS.bgCard, padding: 20 }}>
        {/* Simplified Map UI */}
        <svg style={{ width: "100%", height: "100%" }}>
          <path d="M50 250 Q 150 200 250 250 T 450 150" fill="none" stroke={TOKENS.border} strokeWidth="4" strokeLinecap="round" />
          <motion.circle
            r="6"
            fill={TOKENS.accent}
            style={{ offsetPath: "path('M50 250 Q 150 200 250 250 T 450 150')" }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, backgroundColor: "rgba(255,255,255,0.95)", padding: 12, borderRadius: 8, border: `1px solid ${TOKENS.border}`, boxShadow: TOKENS.shadow }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: TOKENS.textPrimary }}>Route Progress</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: TOKENS.accent }}>72%</span>
          </div>
          <div style={{ height: 4, backgroundColor: TOKENS.accentTint, borderRadius: 2, overflow: "hidden" }}>
            <motion.div
              style={{ height: "100%", backgroundColor: TOKENS.accent }}
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .pulse-alert { animation: pulse-red 1.5s infinite; }
      @keyframes pulse-red { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } 100% { opacity: 1; transform: scale(1); } }
    `}</style>
  </SectionWrapper>
);

const Testimonials = () => {
  const items = [
    { quote: "Arogya Saarthi has reduced our response time by 40%. It's a game changer.", name: "Dr. A. Sharma", role: "ER Chief", hospital: "City General", color: TOKENS.accent },
    { quote: "The visibility into bed availability saves lives during critical transfers.", name: "Nurse Priya", role: "Head Nurse", hospital: "Care Plus", color: TOKENS.gold },
    { quote: "Finally, a system that connects all stakeholders in real-time.", name: "Rajesh K.", role: "Admin", hospital: "Metro Health", color: TOKENS.forest }
  ];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.bgSection }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            style={{ padding: 24, border: `1px solid ${TOKENS.border}`, borderRadius: 12, backgroundColor: TOKENS.bgCard, boxShadow: TOKENS.shadow }}
          >
            <p style={{ fontSize: 14, fontStyle: "italic", color: TOKENS.textPrimary, marginBottom: 20, lineHeight: 1.6 }}>"{item.quote}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white", border: `1px solid ${TOKENS.border}` }} className="avatar-float">
                {item.name[4]}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.textPrimary }} className="underline-hover">{item.name}</div>
                <div style={{ fontSize: 11, color: TOKENS.textMuted }}>{item.role}, {item.hospital}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .underline-hover { position: relative; display: inline-block; }
        .underline-hover::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: var(--accent); transition: width 0.3s; }
        .underline-hover:hover::after { width: 100%; }
        .avatar-float { animation: float 3s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>
    </SectionWrapper>
  );
};

const IntegrationHub = () => (
  <SectionWrapper style={{ textAlign: "center", backgroundColor: TOKENS.bgSection }}>
    <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 60, color: TOKENS.textPrimary }}>Integration Hub</h2>
    <div style={{ position: "relative", width: 300, height: 300, margin: "0 auto" }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 0, border: `1px dashed ${TOKENS.accentSage}`, borderRadius: "50%", opacity: 0.5 }}
      />
      <div style={{ position: "absolute", inset: "35%", backgroundColor: TOKENS.bgCard, borderRadius: "50%", border: `2px solid ${TOKENS.accent}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, boxShadow: TOKENS.shadow, color: TOKENS.accent }}>
        <GridIcon />
      </div>
      
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: "50%", height: 2, backgroundColor: TOKENS.accentSage, transformOrigin: "left center", transform: `rotate(${angle}deg)`, zIndex: 1 }}>
          <motion.div
            style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: TOKENS.accent, position: "absolute", top: -2 }}
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
          <div style={{ position: "absolute", right: -20, top: -10, width: 20, height: 20, borderRadius: 4, backgroundColor: TOKENS.bgCard, border: `1px solid ${TOKENS.border}`, transform: `rotate(-${angle}deg)` }} />
        </div>
      ))}
    </div>
  </SectionWrapper>
);

const SecurityCompliance = () => {
  const items = [
    { title: "HIPAA Aligned", icon: <ShieldIcon /> },
    { title: "End-to-End Encrypted", icon: <LockIcon /> },
    { title: "Audit Logged", icon: <FileTextIcon /> }
  ];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.accentTint }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {items.map((item, i) => (
          <div key={i} style={{ textAlign: "center", padding: 30, border: `1px solid ${TOKENS.border}`, borderRadius: 12, backgroundColor: TOKENS.bgCard, boxShadow: TOKENS.shadow }}>
            <div style={{ position: "relative", width: 60, height: 60, margin: "0 auto 20px" }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: -5, border: `1px dashed ${TOKENS.accentSage}`, borderRadius: "50%", opacity: 0.3 }}
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: TOKENS.accentTint, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: TOKENS.accent, border: `1px solid ${TOKENS.accentSage}` }}
              >
                {item.icon}
              </motion.div>
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: TOKENS.textPrimary }}>{item.title}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const tiers = [
    { name: "Pilot", price: 0, desc: "For single hospital trials." },
    { name: "Professional", price: isAnnual ? 199 : 249, desc: "For healthcare networks.", recommended: true },
    { name: "Enterprise", price: "Custom", desc: "For city-wide coordination." }
  ];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.bgSection }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: 4, backgroundColor: TOKENS.bgCard, borderRadius: 100, border: `1px solid ${TOKENS.border}` }}>
          <button onClick={() => setIsAnnual(false)} style={{ border: "none", padding: "6px 16px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", backgroundColor: !isAnnual ? TOKENS.accent : "transparent", boxShadow: !isAnnual ? TOKENS.shadow : "none", color: !isAnnual ? "white" : TOKENS.textPrimary }}>Monthly</button>
          <button onClick={() => setIsAnnual(true)} style={{ border: "none", padding: "6px 16px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", backgroundColor: isAnnual ? TOKENS.accent : "transparent", boxShadow: isAnnual ? TOKENS.shadow : "none", color: isAnnual ? "white" : TOKENS.textPrimary }}>Annual</button>
        </div>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {tiers.map((tier, i) => (
          <div key={i} style={{ padding: 30, border: tier.recommended ? `2px solid ${TOKENS.accent}` : `1px solid ${TOKENS.border}`, borderRadius: 12, backgroundColor: TOKENS.bgCard, position: "relative", boxShadow: tier.recommended ? "0 10px 30px rgba(61, 79, 28, 0.1)" : TOKENS.shadow }}>
            {tier.recommended && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: TOKENS.goldTint, color: TOKENS.goldDark, padding: "2px 10px", borderRadius: 100, fontSize: 10, fontWeight: 700, border: `1px solid ${TOKENS.gold}` }} className="glow-pulse">RECOMMENDED</div>}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: TOKENS.textPrimary }}>{tier.name}</h3>
            <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 10, color: TOKENS.accent }}>{typeof tier.price === 'number' ? `$${tier.price}` : tier.price}<span style={{ fontSize: 14, fontWeight: 400, color: TOKENS.textMuted }}>{typeof tier.price === 'number' ? '/mo' : ''}</span></div>
            <p style={{ fontSize: 12, color: TOKENS.textMuted, marginBottom: 20 }}>{tier.desc}</p>
            <button style={{ width: "100%", padding: "10px", borderRadius: 6, border: tier.recommended ? "none" : `1px solid ${TOKENS.border}`, backgroundColor: tier.recommended ? TOKENS.accent : "transparent", color: tier.recommended ? "white" : TOKENS.textPrimary, fontWeight: 600, cursor: "pointer" }}>Get Started</button>
          </div>
        ))}
      </div>
      <style>{`
        .glow-pulse { animation: glow 2s infinite; }
        @keyframes glow { 0% { box-shadow: 0 0 0 0 rgba(61, 79, 28, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(61, 79, 28, 0); } 100% { box-shadow: 0 0 0 0 rgba(61, 79, 28, 0); } }
      `}</style>
    </SectionWrapper>
  );
};

const Team = () => {
  const members = [
    { name: "Dr. Aryan", role: "Founder", bio: "Ex-WHO consultant." },
    { name: "S. Mehta", role: "CTO", bio: "Distributed systems expert." },
    { name: "R. Singh", role: "Ops", bio: "Healthcare logistics lead." },
    { name: "A. Patel", role: "Product", bio: "UI/UX for medical systems." }
  ];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.bgSection }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 40, color: TOKENS.textPrimary }}>Our Team</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {members.map((m, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} style={{ textAlign: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: TOKENS.accentTint, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: TOKENS.accent, border: `1px solid ${TOKENS.accentSage}` }}>{m.name[0]}</div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: TOKENS.textPrimary }}>{m.name}</h3>
            <div style={{ fontSize: 11, color: TOKENS.accent, fontWeight: 600, marginBottom: 6 }}>{m.role}</div>
            <p style={{ fontSize: 11, color: TOKENS.textMuted }}>{m.bio}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How secure is the data?", a: "We use end-to-end encryption and are fully HIPAA compliant." },
    { q: "Can it integrate with existing EMRs?", a: "Yes, we support HL7 and FHIR standards for seamless integration." },
    { q: "What is the setup time?", a: "A typical hospital can be onboarded in less than 48 hours." },
    { q: "Is there a mobile app?", a: "Yes, we have native apps for both iOS and Android." },
    { q: "How do you handle offline mode?", a: "Critical data is cached locally and synced once connection is restored." },
    { q: "What support do you offer?", a: "24/7 technical support for all enterprise partners." }
  ];

  return (
    <SectionWrapper style={{ backgroundColor: TOKENS.bgSection }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 40, color: TOKENS.textPrimary }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ border: `1px solid ${TOKENS.border}`, borderRadius: 8, overflow: "hidden", backgroundColor: TOKENS.bgCard }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: TOKENS.bgCard, border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: TOKENS.textPrimary }}>
                <MessageCircleIcon />
                <span style={{ fontSize: 14, fontWeight: 700 }}>{faq.q}</span>
              </div>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} style={{ color: TOKENS.textMuted }}><ChevronDownIcon /></motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === i ? "auto" : 0 }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "0 20px 20px 46px", fontSize: 13, color: TOKENS.textMuted, lineHeight: 1.6 }}>{faq.a}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const FinalCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const confettiColors = [TOKENS.gold, TOKENS.peach, TOKENS.mint];

  return (
    <section style={{ padding: "100px 24px", backgroundColor: TOKENS.accent, position: "relative", overflow: "hidden" }}>
      {/* Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", backgroundColor: "white", opacity: 0.1, filter: "blur(40px)" }}
      />
      
      <div className="max-w-custom" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, color: "white" }}>Ready to Connect Your Network?</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", marginBottom: 40 }}>Join the future of coordinated healthcare. Start your pilot today.</p>
        
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", gap: 10, maxWidth: 400, margin: "0 auto" }}>
            <input type="email" placeholder="Enter your email" required style={{ flex: 1, padding: "12px 16px", borderRadius: 6, border: "none", fontSize: 14, backgroundColor: "white", color: TOKENS.textPrimary }} />
            <button type="submit" style={{ padding: "12px 24px", borderRadius: 6, border: "none", backgroundColor: "white", color: TOKENS.accent, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Submit <SendIcon />
            </button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ fontSize: 20, fontWeight: 700, color: "white" }}>
            🎉 Thank you! We'll be in touch.
            <div className="confetti-container">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="confetti-particle" style={{ left: `${Math.random() * 100}%`, backgroundColor: confettiColors[i % 3], animationDelay: `${Math.random() * 2}s` }} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <style>{`
        .confetti-container { position: absolute; inset: 0; pointer-events: none; }
        .confetti-particle { position: absolute; width: 8px; height: 8px; top: -10px; opacity: 0; animation: confetti-fall 3s ease-out forwards; }
        @keyframes confetti-fall { 0% { transform: translateY(0) rotate(0); opacity: 1; } 100% { transform: translateY(200px) rotate(720deg); opacity: 0; } }
      `}</style>
    </section>
  );
};

export default function EvolveBio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        :root {
          /* Primary Olive */
          --accent:          #4A5E2A;
          --accent-hover:    #5A7233;
          --accent-tint:     #E8F0DA;
          --accent-sage:     #C8DFA8;

          /* Amber / Gold */
          --gold:            #E8C87A;
          --gold-dark:       #B87A20;
          --gold-tint:       #FDF6EC;

          /* Mint / Forest */
          --mint:            #D4EAD8;
          --forest:          #1A5C3A;

          /* Peach / Warm */
          --peach:           #F4A882;
          --peach-tint:      #FEF0EC;

          /* Neutrals */
          --cream:           #F5F2EB;
          --status-green:    #2D9E5F;

          /* Base */
          --text-primary:    #0A0A0A;
          --text-muted:      #666666;
          --bg-main:         #FFFFFF;
          --bg-section:      #F9F9F9;
          --bg-card:         #FFFFFF;
          --border:          #E5E5E5;
          --border-hover:    #D1D1D1;

          /* Legacy / Internal mappings */
          --bg: var(--bg-main);
          --text-h: var(--text-primary);
          --text-body: var(--text-primary);
          --dark: #1A1A1A;
          --radius: 12px;
          --border-strong: #D1D1D1;
        }
        [data-theme='dark'] {
          --bg: #121212;
          --text-primary: #FFFFFF;
          --text-secondary: #A0A0A0;
          --border: #333333;
          --pill-bg: #222222;
          --btn-bg: #8da36d;
          --dark-bg: #FFFFFF;
          --accent: #8da36d;
          --muted: #999999;
          --hero-grad: linear-gradient(to bottom, #1A262B 0%, #111111 100%);
          --hero-overlay: linear-gradient(to bottom, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.6) 100%);
          --card-shadow: 0 2px 12px rgba(0,0,0,0.4);
          --outer-shadow: 0 8px 60px rgba(0,0,0,0.6);
        }
        body, div, span, button, nav, section, footer, p, strong, h1, h2, h3, h4, h5, h6 {
          transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; box-sizing: border-box; margin: 0; padding: 0; }
        .footer-link:hover { color: var(--accent) !important; }
        .pulse-dot { animation: pulse-green 2s infinite; }
        @keyframes pulse-green { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: TOKENS.bgMain,
        color: TOKENS.textPrimary,
        display: "flex",
        justifyContent: "center",
        padding: 0,
        minHeight: "100vh",
        width: "100%"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            maxWidth: "100%",
            backgroundColor: TOKENS.bgMain,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
          <HeroWrapper>
            <Hero />
            <Sidebar />
            <Headline />
            <StatsBar />
          </HeroWrapper>
          <ProblemSection />
          <Products />
          
          <TrustBar />
          <HowItWorks />
          <LiveCounters />
          <DashboardPreview />
          <Testimonials />
          <IntegrationHub />
          <SecurityCompliance />
          <Pricing />
          <Team />
          <FAQ />
          <FinalCTA />

          <Awards />
          <Footer />
          {/* Original Footer removed or replaced by the new one above */}
        </motion.div>
      </div>
    </>
  );
}
