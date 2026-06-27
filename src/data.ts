import { ShortFormProject, LongFormProject, ServiceItem, FAQItem, StatResult } from './types';

export const SHORT_FORM_PROJECTS: ShortFormProject[] = [
  {
    id: 'short-1',
    title: 'Alex Hormozi Style Edit',
    duration: '0:45',
    category: 'Retention Hack',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-video-editor-using-keypad-and-mouse-42795-large.mp4',
    tags: ['Dynamic Captions', 'Sound FX', 'Aggressive Zooms', 'Retention Boost']
  },
  {
    id: 'short-2',
    title: 'AI Startup Reel',
    duration: '0:58',
    category: 'Product Promo',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-at-night-42407-large.mp4',
    tags: ['3D Motion Graphics', 'Futuristic UI', 'Synths', 'Fast Paced']
  },
  {
    id: 'short-3',
    title: 'Productivity Reel',
    duration: '0:30',
    category: 'Storytelling',
    thumbnail: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-screen-of-a-video-editing-software-42813-large.mp4',
    tags: ['Kinetic Typography', 'B-Roll Sync', 'Satisfying Sound Design']
  },
  {
    id: 'short-4',
    title: 'Fitness Transformation Reel',
    duration: '0:50',
    category: 'High Energy',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-shot-of-a-dj-at-work-41804-large.mp4',
    tags: ['Speed Ramps', 'Beat Syncing', 'Gritty Color Grading', 'Glitch FX']
  },
  {
    id: 'short-5',
    title: 'Finance Content Edit',
    duration: '0:40',
    category: 'Infographics',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-recording-studio-soundboard-close-up-41566-large.mp4',
    tags: ['Dynamic Charts', 'Minimalist Iconography', 'Text Highlights']
  },
  {
    id: 'short-6',
    title: 'Personal Brand Reel',
    duration: '0:55',
    category: 'Authority Builder',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-streamer-guy-playing-first-person-shooter-game-42277-large.mp4',
    tags: ['Camera Shake', 'Visual Metaphors', 'Subtle Glows', 'Clean Cut']
  }
];

export const LONG_FORM_PROJECTS: LongFormProject[] = [
  {
    id: 'long-1',
    title: 'Podcast Edit — High Stakes Conversation',
    duration: '42:15',
    viewCount: '1.2M+ Views',
    projectType: 'Multi-cam Podcast',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-recording-studio-soundboard-close-up-41566-large.mp4',
    description: 'A multi-camera high-production podcast featuring dramatic, tension-aware cuts, multi-band sound optimization, and customized visual slides to support complex topics.',
    challenge: 'Handling a 3-hour raw feed to select the most intense, high-retention 42-minute narrative cut while maintaining smooth audio levels and seamless visual pacing.',
    retentionRate: '61%',
    hookRate: '72%',
    softwareUsed: ['Adobe Premiere Pro', 'Adobe Audition', 'After Effects'],
    keyEdits: ['Active speaker visual priority triggers', 'Visual markers for conceptual diagrams', 'Multi-band audio compression for pristine vocal presence', 'Dynamic background ambiance adjustments']
  },
  {
    id: 'long-2',
    title: 'Documentary Edit — The New AI Horizon',
    duration: '18:40',
    viewCount: '850K+ Views',
    projectType: 'Mini-Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-at-night-42407-large.mp4',
    description: 'A cinematic exploration of emerging technologies, utilizing heavy storytelling elements, custom color grading (orange and teal dark moody tones), and custom sound design layers.',
    challenge: 'Weaving diverse, low-resolution Zoom interview feeds into 4K professional camera B-rolls while making the transition feel deliberate and cinematic.',
    retentionRate: '58%',
    hookRate: '68%',
    softwareUsed: ['DaVinci Resolve Studio', 'After Effects', 'Pro Tools'],
    keyEdits: ['3D camera tracker integrations', 'Custom grain & LUT application for cinematic cohesion', 'Orchestral custom sound design orchestration', 'Subtle motion design maps']
  },
  {
    id: 'long-3',
    title: 'Educational YouTube Video — Coding a 3D Game',
    duration: '22:10',
    viewCount: '2.1M+ Views',
    projectType: 'Educational Content',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-screen-of-a-video-editing-software-42813-large.mp4',
    description: 'A high-engagement software tutorial. Includes custom terminal mockups, step-by-step interactive animations, zoom indicators, and lightweight sound feedback triggers.',
    challenge: 'Structuring dry technical content to keep high retention without losing the educational depth expected by developers.',
    retentionRate: '54%',
    hookRate: '81%',
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'Figma'],
    keyEdits: ['Code highlight zooms', 'Side-by-side terminal & rendering comparisons', 'Sleek progress bars', 'Micro-interactions on keyboard stroke overlays']
  },
  {
    id: 'long-4',
    title: 'Case Study Video — How Shopify Scaled to $10B',
    duration: '14:35',
    viewCount: '3.4M+ Views',
    projectType: 'Corporate Breakdown',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-video-editor-using-keypad-and-mouse-42795-large.mp4',
    description: 'An analytical corporate case study featuring fast-paced graphics, historical footage restoration, sleek animations of data charts, and voiceover pacing adjustments.',
    challenge: 'Transforming boring financial tables and spreadsheets into dynamic, satisfying 3D motion-tracked graphs that animate in sync with the narration.',
    retentionRate: '65%',
    hookRate: '79%',
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'Blender'],
    keyEdits: ['3D bar chart extrusions', 'Isometric business timelines', 'Scribble effect annotations on archive footage', 'Paper tear transit transitions']
  },
  {
    id: 'long-5',
    title: 'Vlog Edit — Solo Traveling in Tokyo',
    duration: '11:20',
    viewCount: '620K+ Views',
    projectType: 'Cinematic Vlog',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-shot-of-a-dj-at-work-41804-large.mp4',
    description: 'A beautiful visual travel narrative containing high-end transitions, whip pans, color matching across varied outdoor/indoor environments, and deep ambient soundscapes.',
    challenge: 'Editing highly shaky handheld camera files into a smooth, buttery visual journey with a cohesive artistic tone.',
    retentionRate: '60%',
    hookRate: '75%',
    softwareUsed: ['DaVinci Resolve Studio', 'Premiere Pro', 'Dehancer'],
    keyEdits: ['Whip pan and directional blur match cuts', 'Sound effects of Tokyo crosswalks & train chime cues', 'Vintage 16mm film emulation styling', 'Speed ramping sequences']
  },
  {
    id: 'long-6',
    title: 'Business Breakdown Video — The Apple Ecosystem Monopoly',
    duration: '16:50',
    viewCount: '4.8M+ Views',
    projectType: 'Financial Essay',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-streamer-guy-playing-first-person-shooter-game-42277-large.mp4',
    description: 'An analytical video essay investigating Apples market mechanics, detailing its hardware-software synergy through elegant minimal UX motion graphics and dark interfaces.',
    challenge: 'Adhering to a highly polished, Apple-like minimal aesthetic while delivering intricate economic breakdown visuals.',
    retentionRate: '68%',
    hookRate: '85%',
    softwareUsed: ['After Effects', 'Premiere Pro', 'Adobe Illustrator'],
    keyEdits: ['Clean dark glass UI overlays', 'Mock iPhone & Mac hardware mockups in motion', 'Dynamic vector-drawn user-flow maps', 'Elegant, understated sound effects']
  }
];

export const CLIENT_LOGOS = [
  { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100' }, // Standard proxy or clean symbol
  { name: 'Adobe', logo: '' },
  { name: 'Shopify', logo: '' },
  { name: 'Notion', logo: '' },
  { name: 'OpenAI', logo: '' },
  { name: 'HubSpot', logo: '' },
  { name: 'Canva', logo: '' },
  { name: 'Tesla', logo: '' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Short Form Editing',
    description: 'Reels, TikToks, and Shorts optimized for maximum retention, utilizing aggressive hooks, smart captions, sound FX, and zoom patterns to double viewer average duration.',
    iconName: 'Zap',
    features: ['Custom Animated Captions', 'Whip Cuts & Sound FX', 'Pacing & Loop Engineering', 'Platform Formatting Optimizations']
  },
  {
    id: 'service-2',
    title: 'YouTube Editing',
    description: 'High-end long-form editing that treats YouTube like a modern television network. Includes narrative structuring, dynamic B-roll mapping, and psychological pacing.',
    iconName: 'Youtube',
    features: ['A/B Tested Hook Frameworks', 'Retention Curve Diagnostics', 'Soundscape Design & Master', 'Color Cohesive Correction']
  },
  {
    id: 'service-3',
    title: 'Motion Graphics',
    description: 'Transforming complex data, timelines, and abstractions into sleek, premium 2D/3D visualizations that keep viewers visually stimulated without breaking focus.',
    iconName: 'Layers',
    features: ['Sleek Interface Mockups', 'Custom Data Graphic Animations', 'Map & Asset Tracking', 'Kinetic Typography Panels']
  },
  {
    id: 'service-4',
    title: 'Color Grading',
    description: 'Professional-grade correction and creative grading utilizing LUTs, film grain, and custom node adjustments to match the mood and raise the final production value.',
    iconName: 'Sliders',
    features: ['SDR to HDR Matching', 'Cinema-style Film Emulation', 'Skin Tone Color Preservation', 'Atmospheric Moody Adjustments']
  },
  {
    id: 'service-5',
    title: 'Sound Design',
    description: 'Sound is 50% of the cinematic experience. I design immersive sound beds with multi-layered sound FX, risers, swooshes, sub-drops, and ducked audio.',
    iconName: 'Volume2',
    features: ['Sub-Ambiance Orchestration', 'Vocal Enhancement & Denoising', 'Precision Beat Match Cuts', 'Dynamic Foley Integration']
  },
  {
    id: 'service-6',
    title: 'Thumbnail Design',
    description: 'A videos edit is useless if no one clicks. I design high-contrast, high-CTR dark luxury style thumbnails aligned with the videos look and feel.',
    iconName: 'Image',
    features: ['Cinematic Color Grading Match', 'High-Contrast Text Overlay', 'Expression Enhancements', 'Platform Previews Testing']
  },
  {
    id: 'service-7',
    title: 'Content Repurposing',
    description: 'Turn one podcast or long video into 10+ high-impact vertical assets. I audit your footage, extract the most viral segments, and build vertical narratives.',
    iconName: 'RefreshCw',
    features: ['Long-to-Short Narrative Audit', 'Batch Caption Export', 'A/B Test Clip Suggestions', 'Cross-Platform Safe Margins']
  },
  {
    id: 'service-8',
    title: 'Personal Branding Videos',
    description: 'Crafting content that builds extreme leverage, authority, and trust for founders, executives, and elite online creators seeking high-ticket clients.',
    iconName: 'Sparkles',
    features: ['Executive Positioning Pacing', 'Elegant Graphic Annotations', 'Premium Cinematic Feel', 'Tailored Audio Styling']
  }
];

export const STATS: StatResult[] = [
  { value: 50, suffix: 'M+', label: 'Views Generated', sublabel: 'Across client networks' },
  { value: 150, suffix: '+', label: 'Projects Delivered', sublabel: 'With impeccable client reviews' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', sublabel: 'Long-term recurring contracts' },
  { value: 4, suffix: '+', label: 'Years Experience', sublabel: 'Editing at professional scale' }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How long does a project take?',
    answer: 'Timeline varies by project. Typically, standard short-form deliverables are completed in 24-48 hours. Long-form videos, podcasts, and mini-documentaries take between 3-7 business days, including motion design integration and sound layering. Rush options are available.'
  },
  {
    question: 'How many revisions are included?',
    answer: 'Every project includes 2 full rounds of feedback/revisions. To ensure we align perfectly, I set up interactive Frame.io links where you can add timecode-specific annotations. This minimizes friction and guarantees the absolute highest quality output.'
  },
  {
    question: 'Do you edit short-form content?',
    answer: 'Absolutely. Short-form edits optimized for retention and viral distribution (TikTok, Reels, Shorts) are a core pillar of my services. I apply proven pacing frameworks, animated captions, and high-quality sound designs to boost engagement rates by up to 2.5x.'
  },
  {
    question: 'Can you create motion graphics?',
    answer: 'Yes. I design premium minimal 2D and 3D motion graphics to illustrate complex ideas, display data graphs, track UI elements, and build bespoke kinetic typography. I specialize in the sleek, dark luxury aesthetic popularized by top-tier creators like Apple and Linear.'
  },
  {
    question: 'What are your pricing models?',
    answer: 'I offer two flexible payment models: Retainer packages starting at 4 videos/month (best for high-volume content creators seeking consistency and dedicated priority editing hours) and Flat Project-based rates (ideal for standalone commercial campaigns, brand trailers, or documentaries).'
  }
];
