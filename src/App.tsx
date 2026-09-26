import {
  ArrowRight, Camera, ChevronDown, CircleDollarSign, Globe2, Menu,
  Landmark, Mic, PackageCheck, Play, Share2, Sparkles, Store, Truck, Users, X,
} from "lucide-react";
import { useState } from "react";
import "./index.css";

type Icon = typeof Mic;
type Item = [Icon, string, string];

const features: Item[] = [
  [Mic, "Voice-first cataloguing", "Speak naturally. We turn your words into a ready listing."],
  [Camera, "AI product studio", "One photograph, beautifully prepared for every marketplace."],
  [CircleDollarSign, "Fair-wage pricing", "Price with confidence, built around the value of your work."],
  [Share2, "Multi-marketplace reach", "Sell through trusted channels from one simple place."],
  [Truck, "Doorstep payments", "Reliable delivery and payouts that reach you."],
];

const problems: Item[] = [
  [Camera, "Poor product presentation", "Professional photography and polished listings are out of reach for most artisans."],
  [Globe2, "Language barriers", "Digital platforms are difficult to navigate in regional languages."],
  [CircleDollarSign, "Middlemen & price pressure", "The value of exceptional craft often gets lost along the way."],
  [Store, "Fragmented market access", "Access to buyers, delivery and payment is spread across too many places."],
];

const steps: Item[] = [
  [Mic, "Speak", "Tell us about your craft in the language you are most comfortable with."],
  [Camera, "Create", "AI turns a simple photograph into a clean, market-ready product story."],
  [CircleDollarSign, "Price fairly", "Get an intelligent suggestion based on materials, labour and market trends."],
  [Share2, "Reach buyers", "Publish across connected marketplaces with one tap."],
  [PackageCheck, "Get paid", "Track orders and receive your earnings securely."],
];

function Mark() {
  return <div className="brand">
    <img className="brand-logo" src="/kalakosh-logo.png" alt="Kalakosh — The Treasury of Indian Hands" />
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <div className="nav-shell">
      <Mark />
      <nav className={open ? "nav-links is-open" : "nav-links"}>
        <a className="active" href="#home">Home</a><a href="#how">How it works</a>
        <a href="#artisans">For artisans</a><a href="#impact">Our impact</a>
      </nav>
      <div className="nav-actions">
        <button className="language"><Globe2 size={16} /> English <ChevronDown size={14} /></button>
        <a className="nav-cta" href="#join">Join Kalakosh <ArrowRight size={16} /></a>
        <button className="menu" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-video"><video autoPlay muted loop playsInline src="/sanjivani-final.mp4" /></div>
    <div className="hero-shade" />
    <div className="hero-content">
      <p className="eyebrow light">ARTISAN VOICES. REAL MARKETS. FAIRER INCOMES.</p>
      <h1>From an artisan’s<br />voice to the <em>marketplace.</em></h1>
      <p className="hero-copy">Kalakosh helps India’s makers create beautiful product listings, find fair prices and reach more buyers — simply by speaking.</p>
      <div className="hero-buttons">
        <a href="#artisans" className="button primary"><Mic size={18} /> List a product with voice <ArrowRight size={17} /></a>
        <a href="#how" className="button ghost"><span className="play"><Play size={14} fill="currentColor" /></span> See how it works</a>
      </div>
    </div>
    <div className="hero-quote">“Our hands create more than products —<br />they carry our stories.”</div>
  </section>;
}

function FeatureRail() {
  return <section className="feature-rail"><div className="container feature-grid">
    {features.map(([Icon, title, description]) => <div className="feature" key={title}>
      <span className="icon-disc"><Icon size={21} /></span><div><b>{title}</b><small>{description}</small></div>
    </div>)}
  </div></section>;
}

function Problem() {
  return <section className="section problem"><div className="container">
    <p className="eyebrow">THE PROBLEM</p>
    <div className="split-heading">
      <h2>The artisan can make the craft.<br /><em>The system fails after that.</em></h2>
      <p>Despite immense talent, millions of artisans struggle to reach fair markets and fair incomes due to gaps in digital access, language, pricing and market linkages.</p>
    </div>
    <div className="problem-grid">{problems.map(([Icon, title, text]) => <article key={title}>
      <span className="icon-disc"><Icon size={21} /></span><div><h3>{title}</h3><p>{text}</p></div>
    </article>)}</div>
  </div></section>;
}

function HowItWorks() {
  return <section className="section journey" id="how"><div className="container">
    <p className="eyebrow">THE KALAKOSH DIFFERENCE</p>
    <div className="split-heading"><h2>A complete livelihood rail for artisans.</h2><p>One thoughtful system connects cataloguing, pricing, market access and fulfilment.</p></div>
    <div className="steps">{steps.map(([Icon, title, text], index) => <article key={title}>
      <div className="step-top"><span>{index + 1}</span><span className="icon-disc"><Icon size={21} /></span></div>
      <h3>{title}</h3><p>{text}</p>
    </article>)}</div>
  </div></section>;
}

function Paths() {
  const journey = (kind: "artisan" | "csc", title: string, description: string, content: string[]) => <article className={`path ${kind}`}>
    <div className="path-title">{kind === "artisan" ? <Mic /> : <Store />}<div><h3>{title}</h3><p>{description}</p></div></div>
    <ol>{content.map((step) => <li key={step}>{step}</li>)}</ol>
  </article>;
  return <section className="paths" id="artisans"><div className="container">
    <p className="eyebrow">TWO WAYS IN. ONE ECOSYSTEM.</p>
    <div className="path-grid">
      {journey("artisan", "Artisan journey", "For makers with smartphones — anytime, anywhere.", ["Speak and add product details", "AI creates a catalogue", "Review and set price", "Publish across channels", "Track sales and earnings"])}
      {journey("csc", "CSC / SHG journey", "For makers with limited smartphone access.", ["Enrol the artisan", "Capture craft and catalogue", "Review the fair price", "Publish across channels", "Manage products & earnings"])}
    </div>
  </div></section>;
}

function SihDetails() {
  return <section className="sih-section" aria-labelledby="sih-title">
    <div className="container sih-shell">
      <div className="sih-intro">
        <p className="eyebrow">SMART INDIA HACKATHON 2026</p>
        <h2 id="sih-title">Built to take every artisan <em>beyond the fair.</em></h2>
        <p>Kalakosh is an AI-powered virtual business manager: it improves product images, turns regional-language voice notes into market-ready catalogues, and helps artisans price with confidence.</p>
      </div>
      <div className="sih-card">
        <div className="sih-card-top"><Sparkles size={20} /><span>SIH SUBMISSION</span></div>
        <dl>
          <div><dt>Problem Statement ID</dt><dd>SIH26090</dd></div>
          <div><dt>Theme</dt><dd>Heritage &amp; Culture</dd></div>
          <div><dt>PS Category</dt><dd>Software</dd></div>
          <div><dt>Team ID</dt><dd>164843</dd></div>
          <div><dt>Team Name</dt><dd>Mythos0827</dd></div>
        </dl>
      </div>
    </div>
    <div className="container"><div className="sih-title-strip"><Landmark size={19} /><span>AI-Driven Market Linkage and Smart Cataloging Mobile Application for Marginalized Artisans</span><Users size={19} /></div></div>
  </section>;
}

function TeamSection() {
  const members = [
    "Aarushi Shah", "Aditya Kumrawat", "Vedanshi Dabbawala",
    "Aditya Tiwari", "Mahima Jain", "Shreyansh Sharma",
  ];
  return <section className="team-section" id="team" aria-labelledby="team-title">
    <div className="container">
      <p className="eyebrow">MEET THE TEAM</p>
      <div className="team-heading"><div><h2 id="team-title">The people behind <em>Kalakosh.</em></h2><p>Mythos0827 brings together product thinking, AI, design and technology to make digital commerce feel simple for every artisan.</p></div><div className="team-meta"><b>TEAM 164843</b><span>Smart India Hackathon · SIH26090</span></div></div>
      <div className="team-grid">{members.map((name, index) => <article className="team-member" key={name}>
        <span className="team-index">{String(index + 1).padStart(2, "0")}</span>
        <h3>{name}</h3><p>Mythos0827 · Kalakosh</p>
      </article>)}</div>
      <div className="team-solution-grid"><article><Camera size={23} /><div><b>AI Product Studio</b><span>Professional listings from a simple product photograph.</span></div></article><article><Mic size={23} /><div><b>Multilingual cataloguing</b><span>Voice-first product stories in regional languages.</span></div></article><article><CircleDollarSign size={23} /><div><b>Fair price intelligence</b><span>Costs, effort and market signals in one clear recommendation.</span></div></article></div>
    </div>
  </section>;
}

function Partners() {
  const rails = [
    ["ondc", "ONDC", "Open Network for Digital Commerce"],
    ["gem", "GeM", "Government e-Marketplace"],
    ["handmade", "IndiaHandmade", "A Government of India initiative"],
    ["post", "India Post", "Doorstep delivery & cash payout"],
  ];
  return <section className="partners"><div className="container"><p className="eyebrow">BUILT ON TRUSTED DIGITAL RAILS</p><div className="partner-grid">
    {rails.map(([kind, name, detail]) => <div className={`partner partner-${kind}`} key={name}>
      <div className="partner-mark" aria-hidden="true" /><strong>{name}</strong><span>{detail}</span>
    </div>)}
  </div></div></section>;
}

function Impact() {
  return <section className="impact" id="impact"><div className="container impact-inner">
    <div><p className="eyebrow light">POWERED BY AI, BUILT FOR SCALE</p><h2>Technology that feels<br /><em>human.</em></h2><p>Simple tools, regional language support and trusted public rails help every maker move from craft to commerce.</p></div>
    <div className="impact-card"><p className="eyebrow">OUR IMPACT GOAL</p><div className="numbers"><div><b>30 Lakh+</b><span>Artisans reached</span></div><div><b>68.8%</b><span>Women artisans</span></div><div><b>₹7,000</b><span>Monthly income goal</span></div></div></div>
  </div></section>;
}

export default function App() {
  const floatingActions = <div className="floating-actions">
    <a className="floating-team-link" href="/team"><span>Visit our</span> Team <ArrowRight size={17} /></a>
    <a className="floating-journey-link" href="https://sih4-t6uc.onrender.com/" target="_blank" rel="noreferrer"><span>Begin your</span> Journey <ArrowRight size={17} /></a>
  </div>;
  const footer = <footer id="join"><Mark /><p>Turning India’s crafts into opportunities, not just memories.</p><span className="footer-sih">SIH26090 · Mythos0827</span></footer>;
  if (window.location.pathname === "/team") return <div className="team-page"><Header /><main><TeamSection /></main>{floatingActions}{footer}</div>;
  return <><Header /><main><Hero /><FeatureRail /><Problem /><HowItWorks /><Paths /><SihDetails /><Partners /><Impact /></main>{floatingActions}{footer}</>;
}
