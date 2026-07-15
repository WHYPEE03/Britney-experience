import { useState } from "react";
import { X, Menu, Star, ArrowRight, Crown, Mic, Music, Sparkles, Heart, ChevronDown, Download, Video, Image, FileText, Archive } from "lucide-react";
import ticketNormal from "../assets/ticket normal.png";
import ticketVip from "../assets/ticket vip.png";
import heroImage from "../assets/Heroimage.png";
import babyOneMoreTime from "../assets/baby one more time.png";
import musicVideoSet from "../assets/music video set.png";
import toxicFlight from "../assets/toxic flight.png";
import paparazziNightclub from "../assets/paparazzi nightclub.png";
import circusFinale from "../assets/circus finale.png";
import logo from "../assets/britney logo transparent.png";
import performance01 from "../assets/performance 01.png"; // Using available image as performance01.jpg replacement
import paparazzi01 from "../assets/paparazzi 01.png"; // Using available image as paparazzi01.jpg replacement
import SimpleGallery from "../components/SimpleGallery";
import andreasBritney from "../assets/Andreas britney.png";
import nastaranBritney from "../assets/Nastaran_Britney.png";
import rendyBritney from "../assets/Rendy Britney.jpeg";
import yarenBritney from "../assets/Yaren-britney.png";
import simgeBritney from "../assets/simge-britney.jpeg";
import andreasPaparazzi from "../assets/andreas paparazzi.jpeg";
import nastaranPaparazzi from "../assets/Nastaran Paparazzi.jpeg";
import rendyPaparazzi from "../assets/rendy paparazzi.jpeg";
import yarenPaparazzi from "../assets/yaren paparazzi.jpeg";
import simgePaparazzi from "../assets/simge paparazzi.jpeg";

const EXPERIENCES = [
  {
    id: 1,
    era: "BABY ONE MORE TIME",
    title: "Immersive Experience",
    desc: "Step into the world of pop royalty with our signature immersive attraction. Engage with holographic performances, interactive exhibits, and behind-the-scenes secrets.",
    duration: "Full day",
    level: "All ages welcome",
    date: "Open Daily",
    price: 70,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1619107372089-9b05ed524774?w=800&h=600&fit=crop&auto=format",
    tag: "PREMIUM",
    tagColor: "#ff2d78",
    spots: 150,
  },
  {
    id: 2,
    era: "TOXIC",
    title: "VIP Immersive Tour",
    desc: "Exclusive access to premium areas, meet-and-greet opportunities, and intimate performances in specially designed venues.",
    duration: "Evening",
    level: "Age 16+",
    date: "Open Daily",
    price: 90,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?w=800&h=600&fit=crop&auto=format",
    tag: "LIMITED",
    tagColor: "#c62a6b",
    spots: 50,
  },
  {
    id: 3,
    era: "OOPS!... I DID IT AGAIN",
    title: "Group Experience",
    desc: "Special discounted tickets for groups of 4 or more. Perfect for friends and family to enjoy together.",
    duration: "Half day",
    level: "All ages welcome",
    date: "Open Daily",
    price: 60,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&h=600&fit=crop&auto=format",
    tag: "GROUP",
    tagColor: "#ff85c2",
    spots: 200,
  },
  {
    id: 4,
    era: "GIMME MORE",
    title: "Collector's Package",
    desc: "Premium experience with exclusive merchandise, digital content, and private preview access to new installations.",
    duration: "Extended",
    level: "Age 16+",
    date: "Open Daily",
    price: 120,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1695314303607-93d107c60c1b?w=800&h=600&fit=crop&auto=format",
    tag: "COLLECTOR",
    tagColor: "#ff2d78",
    spots: 30,
  },
  {
    id: 5,
    era: "TOXIC",
    title: "Weekend Festival Pass",
    desc: "Multi-day access to all attractions plus special weekend events, artist meet-ups, and extended hours.",
    duration: "2 days",
    level: "Age 16+",
    date: "Weekends",
    price: 150,
    originalPrice: 180,
    img: "https://images.unsplash.com/photo-1560195183-570e72bb6fd8?w=800&h=600&fit=crop&auto=format",
    tag: "WEEKEND",
    tagColor: "#c62a6b",
    spots: 100,
  },
  {
    id: 6,
    era: "PIECE OF ME",
    title: "Lifetime VIP Membership",
    desc: "Ultimate access with unlimited entry, exclusive events, and special recognition as a founding member of the attraction.",
    duration: "Annual",
    level: "Age 16+",
    date: "Available Now",
    price: 350,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1619107372089-9b05ed524774?w=800&h=600&fit=crop&auto=format",
    tag: "LIFETIME",
    tagColor: "#ffadd6",
    spots: 20,
  },
];

const JOURNEY_LEVELS = [
  {
    number: "01",
    era: "Baby One More Time",
    title: "Discover The Talent",
    desc: "School Corridor",
    icon: <Music size={20} />,
  },
  {
    number: "02",
    era: "Oops!... I Did It Again",
    title: "Film Your First Music Video",
    desc: "Oops!... I Did It Again Set",
    icon: <Star size={20} />,
  },
  {
    number: "03",
    era: "Toxic",
    title: "Join The World Tour",
    desc: "Toxic Plane Experience",
    icon: <Sparkles size={20} />,
  },
  {
    number: "04",
    era: "Gimme More",
    title: "Survive The Paparazzi",
    desc: "Blackout Club",
    icon: <Crown size={20} />,
  },
  {
    number: "05",
    era: "Circus Finale",
    title: "Step Into The Spotlight",
    desc: "Circus Finale",
    icon: <Heart size={20} />,
  },
];

const TESTIMONIALS = [
  {
    name: "Alex T.",
    city: "London",
    text: "The Toxic World Tour sequence genuinely felt like stepping onto a real concert stage. It was an unforgettable rush performing with Britney on screen.",
    level: "Level 5 Visitor",
    stars: 5,
  },
  {
    name: "Samira H.",
    city: "Manchester",
    text: "I came for the music video and stayed for the paparazzi room. It was stressful in the best possible way - authentic pressure of fame simulation.",
    level: "Level 4 Participant",
    stars: 5,
  },
  {
    name: "Jordan P.",
    city: "Brighton",
    text: "Watching my own music video afterwards made the whole experience feel incredibly personal. They really captured my unique style and energy.",
    level: "Level 5 Visitor",
    stars: 5,
  },
];

type Exp = typeof EXPERIENCES[0];

function BookingModal({ exp, onClose }: { exp: Exp; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const [tier, setTier] = useState("Standard");

  const tiers = [
    { label: "Standard", price: exp.price },
    { label: "VIP", price: Math.round(exp.price * 1.75) },
    { label: "Founding", price: Math.round(exp.price * 0.8), note: "Early access" },
  ];
  const selected = tiers.find((t) => t.label === tier)!;
  const total = selected.price * qty;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <div
        className="relative w-full md:max-w-lg bg-card border border-border z-10 md:mx-4 md:rounded-2xl overflow-hidden"
        style={{ fontFamily: "'Nunito', sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pink glow top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Header */}
        <div className="p-6 border-b border-border flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-primary tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              {exp.era.toUpperCase()} ERA
            </p>
            <h2 className="text-2xl font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Abril Fatface', serif" }}>
              {exp.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{exp.date} · {exp.duration}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        {/* Tier selection */}
        <div className="p-6 border-b border-border">
          <p className="text-xs tracking-widest text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>CHOOSE YOUR TIER</p>
          <div className="grid grid-cols-3 gap-2">
            {tiers.map((t) => (
              <button
                key={t.label}
                onClick={() => setTier(t.label)}
                className={`border rounded-xl p-3 text-left transition-all ${
                  tier === t.label
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <p className={`text-xs font-bold mb-1 ${tier === t.label ? "text-primary" : "text-muted-foreground"}`} style={{ fontFamily: "'DM Mono', monospace" }}>
                  {t.label.toUpperCase()}
                </p>
                <p className="text-xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>€{t.price}</p>
                {t.note && <p className="text-xs text-accent mt-0.5">{t.note}</p>}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="p-6 border-b border-border">
          <p className="text-xs tracking-widest text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>HOW MANY SPOTS?</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all text-xl"
            >
              −
            </button>
            <span className="text-2xl font-black w-8 text-center text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>{qty}</span>
            <button
              onClick={() => setQty(Math.min(6, qty + 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all text-xl"
            >
              +
            </button>
            <span className="text-sm text-muted-foreground ml-2">{exp.spots} spots left</span>
          </div>
        </div>

        {/* Total + CTA */}
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>TOTAL</p>
            <p className="text-3xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>€{total}</p>
            <p className="text-xs text-muted-foreground">incl. booking fee</p>
          </div>
                  <button className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 button-enhanced-glow">
                    Reserve My Spot <ArrowRight size={15} />
                  </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<Exp | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState<number | null>(null);
  const [traineeId, setTraineeId] = useState("");
  const [memoriesVisible, setMemoriesVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{src: string, alt: string}|null>(null);

  const handleRetrieveMemories = () => {
    if (traineeId.trim() === "BE-LDN-2026-01482") {
      setMemoriesVisible(true);
      setErrorMessage("");
    } else {
      setMemoriesVisible(false);
      setErrorMessage("Trainee ID not found.");
    }
  };

  const openModal = (src: string, alt: string) => {
    setCurrentImage({src, alt});
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  const handleDownload = (fileName: string) => {
    // In a real implementation, this would download the actual file
    // For this demo, we'll just log the download action
    console.log(`Download initiated: ${fileName}`);
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '#'; // Since we don't have actual files to serve
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Define the type for a memory item
  type MemoryItem = {
    id: number;
    name: string;
    type: string;
    size: string;
    icon: React.ReactNode;
    fileName: string;
    isPlaceholder?: boolean;
    isImage?: boolean;
    imageSrc?: string;
    details?: string[];
  };

  // Mock downloadable memories data
  const downloadableMemories: MemoryItem[] = [
    {
      id: 1,
      name: "Music Video",
      type: "MP4",
      size: "245 MB",
      icon: <Video size={20} />,
      fileName: "britney_experience_music_video.mp4",
      isPlaceholder: true
    },
    {
      id: 2,
      name: "Performance Photos",
      type: "JPG",
      size: "4.2 MB",
      icon: <Image size={20} />,
      fileName: "performance_photos.jpg",
      isImage: true,
      imageSrc: performance01
    },
    {
      id: 3,
      name: "Paparazzi Headlines",
      type: "JPG",
      size: "3.8 MB",
      icon: <Image size={20} />,
      fileName: "paparazzi_headlines.jpg",
      isImage: true,
      imageSrc: paparazzi01
    },
    {
      id: 4,
      name: "Reputation Report",
      type: "PDF",
      size: "1.8 MB",
      icon: <FileText size={20} />,
      fileName: "reputation_report.pdf",
      details: [
        "Reputation Score: S+",
        "Fan Approval: 98%",
        "Media Reach: 1.2M"
      ]
    },
    {
      id: 5,
      name: "Souvenir Package",
      type: "ZIP",
      size: "89 MB",
      icon: <Archive size={20} />,
      fileName: "souvenir_package.zip"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
           <a href="#" className="flex items-center">
             <img src={logo} alt="Britney Experience" className="h-18" />
           </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Experience", "Rooms", "Tickets", "Memories"].map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold px-4 py-2">
              Sign In
            </button>
            <button className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-bold text-sm hover:opacity-90 transition-opacity">
              Enrol Now
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-6 flex flex-col gap-4">
            {["The Journey", "Experiences", "The Method", "Stories"].map((link) => (
              <a key={link} href="#" className="text-base text-muted-foreground hover:text-foreground font-semibold transition-colors">
                {link}
              </a>
            ))}
            <button className="bg-primary text-primary-foreground rounded-full py-3 font-bold text-sm mt-2">Enrol Now</button>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
          {/* Background */}
          <div className="absolute inset-0 bg-background">
            <img
              src={heroImage}
              alt="Stage lights for Step Into The Spotlight"
              className="w-full h-full object-cover opacity-25 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            {/* Pink radial glow */}
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255,45,120,0.18) 0%, transparent 70%)" }}
            />
          </div>

        {/* Floating decorative sparkles */}
        <div className="absolute top-32 left-8 md:left-24 text-primary/30 text-xl animate-float">✦</div>
        <div className="absolute top-48 right-12 md:right-36 text-accent/40 text-2xl animate-float-delay-1">✦</div>
        <div className="absolute bottom-40 left-16 md:left-48 text-primary/20 text-3xl animate-float-delay-2">✦</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center md:text-left">
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8 bg-primary/5">
            <Crown size={13} className="text-primary" />
            <span className="text-primary text-xs font-bold tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
              YOUR POP ICON JOURNEY STARTS HERE
            </span>
          </div>

          {/* Main headline */}
            <h1
              className="text-foreground leading-none mb-6"
              style={{
                fontFamily: "'Abril Fatface', serif",
                fontSize: "clamp(3rem, 10vw, 8.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
              }}
            >
              STEP INTO<br />
              <span
                className="text-primary"
                style={{ textShadow: "0 0 60px rgba(255,45,120,0.5)" }}
              >
                THE SPOTLIGHT
              </span>
            </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-4 leading-relaxed md:mx-0 mx-auto">
            Britney Experience is the world's first pop icon immersive experience. Over five transformative levels, you will find your sound, own your stage, and build your empire through participatory experiences.
          </p>
           <p className="text-accent text-sm font-semibold mb-10 md:mx-0 mx-auto" style={{ fontFamily: "'DM Mono', monospace" }}>
             ✦ The Beams, London · Now Open ✦
           </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="bg-primary text-primary-foreground rounded-full px-10 py-4 font-bold text-base hover:opacity-90 transition-opacity button-enhanced-glow"
              onClick={() => document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Your Experience
            </button>
        <button
          className="border border-border text-foreground rounded-full px-10 py-4 font-bold text-base hover:border-primary hover:text-primary transition-all button-enhanced-glow"
          onClick={() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })}
        >
          Access Your Memories
        </button>
      </div>

           {/* Social proof */}
           <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 mt-9">
             <div className="text-center">
               <div className="text-3xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>4,200+</div>
               <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>VISITORS</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>15,000+</div>
               <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>PERSONALIZED VIDEOS</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>4.8/5</div>
               <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>AVERAGE RATING</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>98%</div>
               <div className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>RECOMMENDATION RATE</div>
             </div>
           </div>
         </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ── THE JOURNEY ─────────────────────────────────────────── */}
      <section id="journey" className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-primary text-xs tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
            THE BRITNEY METHOD
          </p>
          <h2
            className="text-foreground leading-none"
            style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Five Levels.<br />One Icon.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Each level is its own transformation. You move through them at your pace, collecting experiences, shedding doubts, building something no one can take away.
          </p>
        </div>

        <div className="space-y-3">
          {JOURNEY_LEVELS.map((level, i) => (
            <div
              key={level.number}
              className="border border-border rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-primary/50"
              onClick={() => setJourneyOpen(journeyOpen === i ? null : i)}
            >
               <div className="flex items-center gap-6 p-6">
                 <span
                   className="text-primary/30 font-black flex-shrink-0 hidden sm:block"
                   style={{ fontFamily: "'Abril Fatface', serif", fontSize: "2rem" }}
                 >
                   {level.number}
                 </span>
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                   {level.icon}
                 </div>
                 <div className="flex-1">
                   <p className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
                     {level.era.toUpperCase()}
                   </p>
                   <h3 className="text-foreground font-extrabold text-xl" style={{ fontFamily: "'Abril Fatface', serif" }}>
                     {level.title}
                   </h3>
                 </div>
                 <ChevronDown
                   size={18}
                   className={`text-muted-foreground transition-transform flex-shrink-0 ${journeyOpen === i ? "rotate-180" : ""}`}
                 />
               </div>

                <div className={`journey-accordion-panel ${journeyOpen === i ? 'journey-card-expand-animation' : 'journey-card-collapse-animation'}`}>
                  <div className="px-6 pb-6 pt-0 journey-expanded-content">
                    <div className="border-t border-border pt-5 pl-0 sm:pl-16">
                      <p className="text-muted-foreground leading-relaxed">{level.desc}</p>
                      
                       {/* Cinematic image container for each journey level */}
                       {i === 0 && (
                         <div className="journey-image-container">
                           <div className="journey-overlay pink"></div>
                           <img 
                             src={babyOneMoreTime} 
                             alt="Discover The Talent / School Corridor" 
                             className="journey-image"
                           />
                           <div className="journey-content-overlay">
                             <h3 className="journey-title-overlay text-2xl font-extrabold" style={{ fontFamily: "'Abril Fatface', serif" }}>
                               Discover The Talent
                             </h3>
                             <p className="journey-subtitle-overlay text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                               School Corridor
                             </p>
                             <button
                               className="journey-cta-overlay"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
                               }}
                             >
                               Explore Level <ArrowRight size={14} />
                             </button>
                           </div>
                         </div>
                       )}
                       {i === 1 && (
                         <div className="journey-image-container">
                           <div className="journey-overlay pink"></div>
                           <img 
                             src={musicVideoSet} 
                             alt="Film Your First Music Video / Oops!... I Did It Again Set" 
                             className="journey-image"
                           />
                           <div className="journey-content-overlay">
                             <h3 className="journey-title-overlay text-2xl font-extrabold" style={{ fontFamily: "'Abril Fatface', serif" }}>
                               Film Your First Music Video
                             </h3>
                             <p className="journey-subtitle-overlay text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                               Oops!... I Did It Again Set
                             </p>
                             <button
                               className="journey-cta-overlay"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
                               }}
                             >
                               Explore Level <ArrowRight size={14} />
                             </button>
                           </div>
                         </div>
                       )}
                       {i === 2 && (
                         <div className="journey-image-container">
                           <div className="journey-overlay pink"></div>
                           <img 
                             src={toxicFlight} 
                             alt="Join The World Tour / Toxic Plane Experience" 
                             className="journey-image"
                           />
                           <div className="journey-content-overlay">
                             <h3 className="journey-title-overlay text-2xl font-extrabold" style={{ fontFamily: "'Abril Fatface', serif" }}>
                               Join The World Tour
                             </h3>
                             <p className="journey-subtitle-overlay text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                               Toxic Plane Experience
                             </p>
                             <button
                               className="journey-cta-overlay"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
                               }}
                             >
                               Explore Level <ArrowRight size={14} />
                             </button>
                           </div>
                         </div>
                       )}
                       {i === 3 && (
                         <div className="journey-image-container">
                           <div className="journey-overlay pink"></div>
                           <img 
                             src={paparazziNightclub} 
                             alt="Survive The Paparazzi / Blackout Club" 
                             className="journey-image"
                           />
                           <div className="journey-content-overlay">
                             <h3 className="journey-title-overlay text-2xl font-extrabold" style={{ fontFamily: "'Abril Fatface', serif" }}>
                               Survive The Paparazzi
                             </h3>
                             <p className="journey-subtitle-overlay text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                               Blackout Club
                             </p>
                             <button
                               className="journey-cta-overlay"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
                               }}
                             >
                               Explore Level <ArrowRight size={14} />
                             </button>
                           </div>
                         </div>
                       )}
                       {i === 4 && (
                         <div className="journey-image-container">
                           <div className="journey-overlay pink"></div>
                           <img 
                             src={circusFinale} 
                             alt="Step Into The Spotlight / Circus Finale" 
                             className="journey-image"
                           />
                           <div className="journey-content-overlay">
                             <h3 className="journey-title-overlay text-2xl font-extrabold" style={{ fontFamily: "'Abril Fatface', serif" }}>
                               Step Into The Spotlight
                             </h3>
                             <p className="journey-subtitle-overlay text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>
                               Circus Finale
                             </p>
                             <button
                               className="journey-cta-overlay"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
                               }}
                             >
                               Explore Level <ArrowRight size={14} />
                             </button>
                           </div>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCES GRID ─────────────────────────────────────── */}
      <section id="experiences" className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              BOOK YOUR EXPERIENCE
            </p>
            <h2
              className="text-foreground leading-none"
              style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Pick Your Era.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Each experience can be booked standalone — or stack them all and go the full distance. There&apos;s no wrong entry point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard Experience Card */}
            <div
              className="bg-background border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all hover:-translate-y-1"
              style={{ transition: "transform 0.25s, border-color 0.25s" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={ticketNormal}
                  alt="Standard Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-bold tracking-widest"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    backgroundColor: "#ff2d78",
                    color: "#fff",
                    fontSize: "0.65rem",
                  }}
                >
                  STANDARD
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-primary tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  FULL EXPERIENCE
                </p>
                <h3 className="font-black text-foreground text-xl mb-2 leading-tight" style={{ fontFamily: "'Abril Fatface', serif" }}>
                  Standard Experience
                </h3>
                <ul className="text-sm text-muted-foreground leading-relaxed mb-5 space-y-1">
                  <li>• Full Britney Academy experience </li>
                  <li>• Personalized wristband</li>
                  <li>• Personalized music video</li>
                  <li>• Performance photos</li>
                  <li>• Paparazzi headlines</li>
                  <li>• Britney Academy trainee contract </li>
                  <li>• Access to your online profile after the experience </li>
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>
                      £75
                    </span>
                    <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>per person</p>
                  </div>
                  <button className="bg-primary text-primary-foreground rounded-full px-5 py-2.5 font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-1.5 button-enhanced-glow">
                    Book <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* VIP Experience Card */}
            <div
              className="bg-background border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all hover:-translate-y-1"
              style={{ transition: "transform 0.25s, border-color 0.25s" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={ticketVip}
                  alt="VIP Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-bold tracking-widest"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    backgroundColor: "#c62a6b",
                    color: "#fff",
                    fontSize: "0.65rem",
                  }}
                >
                  VIP
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-primary tracking-widest mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  PREMIUM PACKAGE
                </p>
                <h3 className="font-black text-foreground text-xl mb-2 leading-tight" style={{ fontFamily: "'Abril Fatface', serif" }}>
                  VIP Experience
                </h3>
                <ul className="text-sm text-muted-foreground leading-relaxed mb-5 space-y-1">
                  <li>• Priority check-in and fast-track entry </li>
                  <li>• Exclusive VIP lanyard and commemorative backstage pass</li>
                  <li>• Complimentary drink at the Central Hub</li>
                  <li>• Exclusive Press Interview</li>
                  <li>• Early access to your downloadable content after your visit HD </li>
                  <li>• Exclusive merchandise gift </li>
                  <li>• Exclusive bonus content</li>
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>
                      £120
                    </span>
                    <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>per person</p>
                  </div>
                  <button className="bg-primary text-primary-foreground rounded-full px-5 py-2.5 font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-1.5 button-enhanced-glow">
                    Book <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY STEP INTO THE SPOTLIGHT ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-xs tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              THE BRITNEY DIFFERENCE
            </p>
            <h2
              className="text-foreground leading-none mb-6"
              style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Not an attraction.<br />
              <span className="text-primary">An experience.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Britney Experience wasn't built for passive audiences. It was designed to place you inside the world of a global pop icon. Every room, every challenge, and every memory asks the same question: what does it feel like to step into the spotlight?
            </p>
            <div className="space-y-4">
              {[
                { icon: <Mic size={18} />, title: "Immersive Storytelling", body: "Every room places you inside a new chapter of your journey to the spotlight." },
                { icon: <Crown size={18} />, title: "Personalized Memories", body: "Leave with your own music video, professional photos, headlines, and achievements." },
                { icon: <Sparkles size={18} />, title: "Your Journey Evolves", body: "Your scores, choices, and performances shape the story you take home." },
                { icon: <Heart size={18} />, title: "Become The Star", body: "For one unforgettable evening, the spotlight belongs to you." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden border border-border">
              <img src={babyOneMoreTime} alt="Baby One More Time Experience" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-56 h-72 rounded-2xl overflow-hidden border border-border">
              <img src={musicVideoSet} alt="Music Video Set Experience" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-32 right-8 w-44 h-44 rounded-2xl overflow-hidden border border-border">
              <img src={circusFinale} alt="Circus Finale Experience" className="w-full h-full object-cover" />
            </div>
            {/* Pink glow blob */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,45,120,0.12) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              VISITOR MEMORIES
            </p>
            <h2
              className="text-foreground"
              style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              They did it. So can you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-background border border-border rounded-2xl p-7">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 font-medium">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm" style={{ fontFamily: "'Abril Fatface', serif" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.level} · {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT AVAILABLE SESSIONS ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card">
        <div className="absolute inset-0">
          <div style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,45,120,0.15) 0%, transparent 70%)" }} className="absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
          <p className="text-primary text-xs tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            ✦ NEXT AVAILABLE SESSIONS ✦
          </p>
          <h2
            className="text-foreground leading-none mb-8"
            style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Secure Your Spot
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Today's sessions */}
            <div className="bg-background border border-border rounded-2xl p-6 text-left">
              <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Abril Fatface', serif" }}>Today</h3>
              <div className="grid grid-cols-3 gap-2">
                {["10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"].map((time) => (
                  <button key={time} className="border border-border rounded-lg py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tomorrow's sessions */}
            <div className="bg-background border border-border rounded-2xl p-6 text-left">
              <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Abril Fatface', serif" }}>Tomorrow</h3>
              <div className="grid grid-cols-3 gap-2">
                {["09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"].map((time) => (
                  <button key={time} className="border border-border rounded-lg py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT INFORMATION ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card">
        <div className="absolute inset-0">
          <div style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,45,120,0.15) 0%, transparent 70%)" }} className="absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-24 text-center">
          <p className="text-primary text-xs tracking-widest mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            ✦ VISIT INFORMATION ✦
          </p>
          <h2
            className="text-foreground leading-none mb-6"
            style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Plan Your Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="text-primary text-sm font-bold mb-2">Location</p>
              <p className="text-foreground">The Beams, London</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="text-primary text-sm font-bold mb-2">Duration</p>
              <p className="text-foreground">120 minutes + 30-minutes break</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="text-primary text-sm font-bold mb-2">Group Size</p>
              <p className="text-foreground">10 guests per session</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="text-primary text-sm font-bold mb-2">Sessions</p>
              <p className="text-foreground">Every 15 minutes</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="text-primary text-sm font-bold mb-2">Accessibility</p>
              <p className="text-foreground">Fully accessible venue</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-background border border-border rounded-2xl p-6 text-left">
              <p className="text-primary text-sm font-bold mb-2">Merchandise Store</p>
              <p className="text-foreground text-sm">Official Britney Experience merchandise available for purchase</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 text-left">
              <p className="text-primary text-sm font-bold mb-2">Central Hub Bar</p>
              <p className="text-foreground text-sm">Relax before or after your experience with themed cocktails</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESS YOUR MEMORIES ─────────────────────────────────────────────── */}
      <section id="memories" className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-primary text-xs tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
            YOUR PERSONALIZED EXPERIENCE
          </p>
          <h2
            className="text-foreground leading-none mb-6"
            style={{ fontFamily: "'Abril Fatface', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Access Your<br />
            <span className="text-primary">Memories</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Enter your wristband ID and ticket number to retrieve your personalized experience highlights, photos, videos, and achievements from your journey through the Britney Experience.
          </p>
        </div>

        {/* Form Section */}
            <div className="max-w-md mx-auto mb-20">
              <div className="space-y-6">
                <div>
                <label className="block text-sm font-bold text-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                  EXPERIENCE ID
                </label>
                  <input
                    type="text"
                    value={traineeId}
                    onChange={(e) => setTraineeId(e.target.value)}
                    placeholder="e.g. BE-LDN-2026-01482"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  />
                </div>
                <button 
                  className="w-full bg-primary text-primary-foreground rounded-full px-6 py-4 font-bold text-base hover:opacity-90 transition-opacity mt-6"
                  onClick={handleRetrieveMemories}
                >
                  Retrieve My Experience
                </button>
                
                 {errorMessage && (
                   <div className="mt-4 p-4 bg-destructive/10 border border-destructive rounded-xl text-destructive text-center">
                     {errorMessage}
                   </div>
                 )}
               </div>
             </div>

         {/* Downloadable Memories Section - Only shows after successful validation */}
         {memoriesVisible && (
           <div className="space-y-8">
             {/* Music Video Placeholder Card */}
             <div className="bg-background border border-border rounded-2xl p-6">
               <h3 className="font-black text-foreground text-lg mb-2" style={{ fontFamily: "'Abril Fatface', serif" }}>
                 Your Music Video
               </h3>
               <p className="text-muted-foreground mb-4">
                 Your personalized music video is currently rendering and will be available within 24 hours of your visit.
               </p>
               <div className="bg-muted border border-border rounded-xl aspect-video flex items-center justify-center">
                 <div className="text-center">
                   <Video className="mx-auto mb-2 text-muted-foreground" size={32} />
                   <p className="text-sm text-muted-foreground">Rendering in progress...</p>
                 </div>
               </div>
             </div>

         {/* Retrieved Memories Section */}
         <div>
           <h3 className="font-black text-foreground text-xl mb-6" style={{ fontFamily: "'Abril Fatface', serif" }}>
             Retrieved Memories
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {downloadableMemories.filter(item => !item.isPlaceholder).map((item) => (
               <div key={item.id} className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col h-full">
                 <div className="aspect-video bg-muted relative overflow-hidden">
                   {item.name === "Performance Photos" ? (
                     <SimpleGallery 
                       galleryName="Performance Photos" 
                       images={[andreasBritney, nastaranBritney, rendyBritney, yarenBritney, simgeBritney]} 
                     />
                   ) : item.name === "Paparazzi Headlines" ? (
                     <SimpleGallery 
                       galleryName="Paparazzi Headlines" 
                       images={[andreasPaparazzi, nastaranPaparazzi, rendyPaparazzi, yarenPaparazzi, simgePaparazzi]} 
                     />
                   ) : (
                     <>
                       {item.isImage ? (
                         <>
                           <img 
                             src={item.imageSrc || ''} 
                             alt={item.name} 
                             className="w-full h-full object-cover cursor-pointer"
                             onClick={() => openModal(item.imageSrc || '', item.name)}
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                             <button 
                               className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-bold flex items-center gap-2"
                               onClick={() => openModal(item.imageSrc || '', item.name)}
                             >
                               <Image size={14} /> View Memory
                             </button>
                           </div>
                         </>
                       ) : (
                         <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                             {item.icon}
                           </div>
                         </div>
                       )}
                     </>
                   )}
                 </div>
                 {!(item.name === "Performance Photos" || item.name === "Paparazzi Headlines") && (
                   <div className="p-4 flex-1 flex flex-col">
                     <div className="flex items-center justify-between mb-2">
                       <h3 className="font-black text-foreground text-sm" style={{ fontFamily: "'Abril Fatface', serif" }}>
                         {item.name}
                       </h3>
                       <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
                         {item.type}
                       </span>
                     </div>
                     <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                       {item.size}
                     </p>
                     {item.details && (
                       <div className="space-y-1 mb-3">
                         {item.details.map((detail, idx) => (
                           <p key={idx} className="text-xs text-foreground font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                             {detail}
                           </p>
                         ))}
                       </div>
                     )}
                     <div className="flex-1"></div>
                     <div className="flex gap-3 mt-3">
                       {item.isImage && (
                         <button 
                           className="flex-1 flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg transition-colors"
                           onClick={() => openModal(item.imageSrc || '', item.name)}
                         >
                           <Image size={14} />
                           <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>VIEW</span>
                         </button>
                       )}
                       <button 
                         className="flex-1 flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg transition-colors"
                         onClick={() => handleDownload(item.fileName)}
                       >
                         <Download size={14} />
                         <span className="text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>DOWNLOAD</span>
                       </button>
                     </div>
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
           </div>
         )}

         {/* Show message if no memories are visible yet */}
         {!memoriesVisible && !errorMessage && (
           <div className="text-center py-12">
             <p className="text-muted-foreground">Enter your trainee ID to access your personalized memories.</p>
           </div>
         )}
         
         {/* Modal for displaying images */}
         {modalOpen && currentImage && (
           <div 
             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
             onClick={closeModal}
           >
             <div 
               className="relative bg-background border border-border rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
               onClick={(e) => e.stopPropagation()}
             >
               <div className="p-4 border-b border-border flex justify-between items-center">
                 <h3 className="font-bold text-foreground" style={{ fontFamily: "'Abril Fatface', serif" }}>{currentImage.alt}</h3>
                 <button 
                   onClick={closeModal}
                   className="text-foreground hover:text-primary transition-colors"
                 >
                   <X size={20} />
                 </button>
               </div>
               <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
                 <img 
                   src={currentImage.src} 
                   alt={currentImage.alt} 
                   className="max-h-[70vh] max-w-full object-contain"
                 />
               </div>
               <div className="p-4 border-t border-border flex justify-end">
                 <button 
                   className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-bold"
                   onClick={() => handleDownload((currentImage.alt || '') + ".jpg")}
                 >
                   <Download size={14} /> Download
                 </button>
               </div>
             </div>
           </div>
         )}
       </section>

      {/* ── AS SEEN IN ───────────────────────────────────────────── */}
      <section className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-xs text-muted-foreground text-center mb-8 tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>AS SEEN IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-foreground">
            <span className="font-bold text-lg md:text-xl">BBC</span>
            <span className="font-bold text-lg md:text-xl">TIME OUT LONDON</span>
            <span className="font-bold text-lg md:text-xl">NME</span>
            <span className="font-bold text-lg md:text-xl">ROLLING STONE</span>
            <span className="font-bold text-lg md:text-xl">THE GUARDIAN</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
               <div className="mb-6">
                 <img src={logo} alt="Britney Experience" className="h-24" />
               </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The world's first pop icon immersive experience. Five levels. One icon. You.
              </p>
            </div>
           <div style={{ height: '24px' }}></div>
          {[
            { heading: "Plan Your Visit", links: ["Tickets", "Opening Hours", "Accessibility", "Getting Here", "FAQ"] },
            { heading: "Information", links: ["About", "Contact", "Safety", "Terms", "Privacy"] },
            { heading: "Support", links: ["Help Center", "Cancellation Policy", "Refunds", "Contact Us"] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-xs tracking-widest text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                {col.heading.toUpperCase()}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              © 2026 STEP INTO THE SPOTLIGHT LTD. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── BOOKING MODAL ────────────────────────────────────────── */}
      {selectedExp && <BookingModal exp={selectedExp} onClose={() => setSelectedExp(null)} />}
    </div>
  );
}
