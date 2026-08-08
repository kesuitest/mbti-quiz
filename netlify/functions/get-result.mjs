import { getStore } from "@netlify/blobs";

const FUNCTION_META = {
  Ni: {
    nickname: "The Visionary Synthesizer",
    type: "Perceiving (Information Input)",
    orientation: "Introverted (Inward Vision)",
    coreFocus: "Synthesizing complex data into singular long-term strategic vision.",
    howItWorks: "Operates below conscious awareness to connect abstract dots and predict future trajectories."
  },
  Ne: {
    nickname: "The Possibility Explorer",
    type: "Perceiving (Information Input)",
    orientation: "Extraverted (Outward Innovation)",
    coreFocus: "Brainstorming infinite connections, novel patterns, and alternative angles.",
    howItWorks: "Asks 'what if?', rapidly linking disparate ideas to discover fresh possibilities."
  },
  Si: {
    nickname: "The Experiential Vault",
    type: "Perceiving (Information Input)",
    orientation: "Introverted (Inward Memory)",
    coreFocus: "Comparing present input to past experiences, stored facts, and proven traditions.",
    howItWorks: "Creates a stable internal library of detailed memories, bodily awareness, and reliable routines."
  },
  Se: {
    nickname: "The Real-Time Actuator",
    type: "Perceiving (Information Input)",
    orientation: "Extraverted (Outward Action)",
    coreFocus: "Immersing in physical sensory reality, aesthetic details, and immediate hands-on opportunities.",
    howItWorks: "Responds instantly to real-time environment with physical agility and pragmatic alertness."
  },
  Ti: {
    nickname: "The Systems Architect",
    type: "Judging (Decision Making)",
    orientation: "Introverted (Inward Logic)",
    coreFocus: "Building precise internal frameworks of truth down to first principles.",
    howItWorks: "Categorizes concepts meticulously, removing logical inconsistencies regardless of popular opinion."
  },
  Te: {
    nickname: "The Executive Driver",
    type: "Judging (Decision Making)",
    orientation: "Extraverted (Outward Structure)",
    coreFocus: "Organizing external resources, optimizing workflows, and driving measurable efficiency.",
    howItWorks: "Evaluates results objectively using metrics, logic, and structured step-by-step action plans."
  },
  Fi: {
    nickname: "The Authenticity Guardian",
    type: "Judging (Decision Making)",
    orientation: "Introverted (Inward Morals)",
    coreFocus: "Living by an unshakeable internal moral compass, personal integrity, and emotional truth.",
    howItWorks: "Evaluates choices by asking 'Does this feel authentic and aligned with my deepest values?'"
  },
  Fe: {
    nickname: "The Harmonic Catalyst",
    type: "Judging (Decision Making)",
    orientation: "Extraverted (Outward Harmony)",
    coreFocus: "Reading emotional atmosphere, nurturing interpersonal bonds, and uniting groups.",
    howItWorks: "Prioritizes social cohesion and shared emotional needs, making people feel understood."
  }
};

const ROLE_EXPLANATIONS = {
  Dominant: {
    title: "Dominant (The Driver / Hero)",
    subtitle: "PRIMARY SUPERPOWER & CORE IDENTITY",
    analogy: "The Driver steering your Mental Car",
    explanation: "This is your primary mental flow state, accounting for ~80% of your daily mental energy. It is your ultimate strength and natural talent, operating with effortless confidence.",
    strengthImpact: "Provides your greatest creative, strategic, and analytical breakthroughs.",
    weaknessWarning: "Relying exclusively on your Driver without balance can cause tunnel vision or over-dominance."
  },
  Auxiliary: {
    title: "Auxiliary (The Co-Pilot)",
    subtitle: "CONSCIOUS GROWTH LEVER & BALANCE ENGINE",
    analogy: "The Co-Pilot Navigating in the Front Seat",
    explanation: "Your Co-Pilot is the single most important function for personal growth and emotional maturity. It balances your Driver by operating in the opposite energy direction (extraverted if your Driver is introverted, and vice versa).",
    strengthImpact: "Consciously engaging your Co-Pilot brings real-world balance, sound decision-making, and emotional stability.",
    weaknessWarning: "If neglected, you risk entering a 'Dominant-Tertiary loop' where you skip real-world feedback."
  },
  Tertiary: {
    title: "Tertiary (The 10-Year-Old)",
    subtitle: "RECREATION, COMFORT & PLAYGROUND",
    analogy: "The Energetic 10-Year-Old Child in the Back Seat",
    explanation: "This function acts like a 10-year-old child: creative, fun, and comforting when unwinding, but easily defensive or immature under pressure.",
    strengthImpact: "Provides playful creativity, relaxation, and fresh perspective when used for leisure.",
    weaknessWarning: "Do not let the 10-Year-Old make major life decisions or defend ego insecurities."
  },
  Inferior: {
    title: "Inferior (The 3-Year-Old / Life Mastery Gateway)",
    subtitle: "PRIMARY WEAKNESS & ULTIMATE GROWTH DOORWAY",
    analogy: "The Vulnerable 3-Year-Old Toddler in the Car Seat",
    explanation: "This is your greatest vulnerability and subconscious blind spot. Under severe stress or exhaustion, this 3-year-old 'takes the wheel' causing irrational, reactive behavior ('Grip State').",
    strengthImpact: "Gently honoring and integrating this function over time unlocks profound self-mastery, emotional resilience, and lifelong balance.",
    weaknessWarning: "Source of core insecurities and stress triggers; requires patience and self-compassion to develop."
  }
};

const FULL_PROFILES = {
  INTJ: {
    title: "Architect",
    motto: "Strategic, logical, and independent thinker.",
    overview: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas.",
    strengths: ["Strategic Thinking", "High Self-Confidence", "Independent & Decisive", "Hardworking & Determined"],
    weaknesses: ["Arrogant", "Dismissive of Emotions", "Overly Critical", "Combative"],
    careers: ["Software Architect", "Data Scientist", "Strategic Planner", "Investment Banker", "Systems Engineer"],
    famous: ["Elon Musk", "Christopher Nolan", "Friedrich Nietzsche", "Stephen Hawking"],
    compatibility: ["ENFP", "ENTP"],
    stack: [
      { code: "Ni", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Synthesizes complex patterns to form a singular long-term strategic vision." },
      { code: "Te", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Executes plans efficiently, organizing resources and systems to achieve goals." },
      { code: "Fi", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Applies quiet internal values and personal ethics to guide decision-making." },
      { code: "Se", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Vulnerable to sensory overload, but provides present-moment physical grounding when developed." }
    ],
    growthRoadmap: {
      copilotAdvice: "Actively engage Extraverted Thinking (Te) by structuring your visionary ideas into concrete project milestones and sharing them early for real-world feedback.",
      inferiorAdvice: "Avoid overthinking in isolation. Practice grounding yourself in physical reality through physical exercise, art, or mindful observation of your environment (Se)."
    },
    enneagram: {
      primaryType: "Type 5w6 (The Problem Solver)",
      title: "The Analytical Investigator Core",
      coreDesire: "To be competent, masterful, and independent.",
      coreFear: "Being helpless, incompetent, or unprepared.",
      keyPassion: "Avarice / Detachment (hoarding knowledge and withholding energy).",
      integrationPath: "Integration to Type 8 (The Leader): Moving from detached intellectualization to bold, confident real-world execution.",
      guidance: "Practice sharing your strategic insights early instead of waiting for absolute certainty. Real-world execution brings true mastery."
    }
  },
  INTP: {
    title: "Logician",
    motto: "Innovative inventor with an unquenchable thirst for knowledge.",
    overview: "INTPs are quiet, analytical individuals who enjoy spending time alone, thinking about how things work.",
    strengths: ["Analytical & Strategic", "Great Thinkers", "Open-Minded", "Objective & Logical"],
    weaknesses: ["Disconnected", "Insensitive", "Impatient", "Second-Guesses Themselves"],
    careers: ["Computer Scientist", "Research Mathematician", "Philosophy Professor", "Financial Analyst"],
    famous: ["Albert Einstein", "Bill Gates", "Isaac Newton", "René Descartes"],
    compatibility: ["ENTJ", "ENFJ"],
    stack: [
      { code: "Ti", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Analyzes systems down to first principles, seeking absolute internal logical precision." },
      { code: "Ne", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Explores infinite theoretical possibilities, connections, and innovative hypotheses." },
      { code: "Si", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Stores detailed past data and facts to support logical frameworks." },
      { code: "Fe", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Desires social connection, but can struggle with expressiveness and emotional atmosphere under stress." }
    ],
    growthRoadmap: {
      copilotAdvice: "Use Extraverted Intuition (Ne) to test your internal logic against new ideas, conversations, and real-world experiments rather than staying trapped in internal analysis paralysis.",
      inferiorAdvice: "Acknowledge the emotional needs of others (Fe). Expressing genuine appreciation for people builds trust and balances your analytical nature."
    },
    enneagram: {
      primaryType: "Type 5w4 (The Iconoclast)",
      title: "The Visionary Analyst Core",
      coreDesire: "To understand fundamental truths and build flawless internal systems.",
      coreFear: "Being ignorant, incapable, or emotionally overwhelmed.",
      keyPassion: "Detachment & Intellectualization.",
      integrationPath: "Integration to Type 8 (The Challenger): Stepping out of theoretical paralysis and taking decisive action to manifest your concepts.",
      guidance: "Remember that action creates clarity faster than endless contemplation. Balance internal logic with real-world testing."
    }
  },
  ENTJ: {
    title: "Commander",
    motto: "Bold, imaginative, and strong-willed leader.",
    overview: "ENTJs are strategic leaders, motivated to organize change and drive efficiency across organizations.",
    strengths: ["Efficient & Energetic", "Self-Confident", "Strong-Willed", "Strategic Thinkers"],
    weaknesses: ["Stubborn & Dominant", "Intolerant", "Impatient", "Cold & Ruthless"],
    careers: ["Executive CEO", "Management Consultant", "Corporate Lawyer", "Venture Capitalist"],
    famous: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay", "Napoleon Bonaparte"],
    compatibility: ["INTP", "INFP"],
    stack: [
      { code: "Te", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Drives maximum efficiency, structuring environments and leading strategic execution." },
      { code: "Ni", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Provides long-range foresight and deep conceptual vision behind executive decisions." },
      { code: "Se", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Engages directly with real-world action and tactical opportunities." },
      { code: "Fi", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Guards internal vulnerability; strives to align ruthless drive with personal principles." }
    ],
    growthRoadmap: {
      copilotAdvice: "Engage Introverted Intuition (Ni) before jumping into rapid execution. Reflecting on long-term implications ensures your efficient plans serve meaningful goals.",
      inferiorAdvice: "Check in with your personal values (Fi) and empathy for team members to ensure your leadership remains ethical and inspiring rather than purely transactional."
    },
    enneagram: {
      primaryType: "Type 8w7 (The Maverick Commander)",
      title: "The Empowered Leader Core",
      coreDesire: "To be self-reliant, protect autonomy, and build lasting organizational legacy.",
      coreFear: "Being vulnerable, controlled, or ineffective.",
      keyPassion: "Lust / Intensity (Driving relentlessly for impact).",
      integrationPath: "Integration to Type 2 (The Helper): Channeling your powerful drive into supporting and empowering your team with compassion.",
      guidance: "True power comes from vulnerability and deep listening. Leading with heart creates unshakeable team loyalty."
    }
  },
  ENTP: {
    title: "Debater",
    motto: "Smart and curious thinker who cannot resist an intellectual challenge.",
    overview: "ENTPs are inspired innovators, motivated to find new solutions to challenging problems.",
    strengths: ["Knowledgeable", "Quick Thinkers", "Original", "Excellent Brainstormers"],
    weaknesses: ["Very Argumentative", "Insensitive", "Intolerant", "Finds It Hard to Focus"],
    careers: ["Entrepreneur", "Creative Director", "Attorney", "Political Strategist"],
    famous: ["Thomas Edison", "Mark Twain", "Walt Disney", "Robert Downey Jr."],
    compatibility: ["INFJ", "INTJ"],
    stack: [
      { code: "Ne", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Generates novel concepts, challenging paradigms and connecting disparate ideas." },
      { code: "Ti", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Refines creative ideas with rigorous internal logic and critical analysis." },
      { code: "Fe", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Uses charm and group dynamics to debate and engage audience interest." },
      { code: "Si", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Struggles with repetitive routine, but learns over time to ground ideas in proven facts." }
    ],
    growthRoadmap: {
      copilotAdvice: "Apply Introverted Thinking (Ti) to rigorously evaluate your ideas before launching them. Quality and logical consistency matter more than sheer quantity of concepts.",
      inferiorAdvice: "Build steady habits and finish what you start (Si). Documenting details and following through turns brilliant ideas into lasting achievements."
    },
    enneagram: {
      primaryType: "Type 7w6 (The Pathfinder Innovator)",
      title: "The Inspired Strategist Core",
      coreDesire: "To maintain freedom, explore new horizons, and avoid limitation.",
      coreFear: "Being trapped in routine, bored, or deprived of options.",
      keyPassion: "Gluttony (Constantly seeking novel intellectual stimulation).",
      integrationPath: "Integration to Type 5 (The Observer): Cultivating deep focus, patience, and mastering one major idea before moving on.",
      guidance: "Depth beats breadth. Embrace stillness and follow-through to transform your creative brilliance into lasting achievement."
    }
  },
  INFJ: {
    title: "Advocate",
    motto: "Quiet, mystical, yet inspiring and tireless idealist.",
    overview: "INFJs are thoughtful visionaries who seek deep purpose and meaningful connection with others.",
    strengths: ["Creative & Insightful", "Principled", "Passionate & Altruistic", "Determined"],
    weaknesses: ["Sensitive to Criticism", "Extremely Private", "Perfectionistic", "Can Burn Out Easily"],
    careers: ["Psychologist", "Author / Writer", "Counselor", "Humanitarian Lead", "UX Designer"],
    famous: ["Martin Luther King Jr.", "Nelson Mandela", "Mother Teresa", "Carl Jung"],
    compatibility: ["ENTP", "ENFP"],
    stack: [
      { code: "Ni", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Perceives hidden meanings, underlying patterns, and future trajectories for humanity." },
      { code: "Fe", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Empathizes deeply with others, creating interpersonal warmth and group harmony." },
      { code: "Ti", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Analyzes insights logically to validate intuitive impressions." },
      { code: "Se", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Can feel overwhelmed by noisy environments, but enjoys rich aesthetic experiences when relaxed." }
    ],
    growthRoadmap: {
      copilotAdvice: "Express your inner visions outwardly through Extraverted Feeling (Fe)—communicate your insights warmly to connect with and guide others.",
      inferiorAdvice: "Engage your physical senses (Se) through movement, nature walks, or mindful presence to avoid overthinking and emotional exhaustion."
    },
    enneagram: {
      primaryType: "Type 1w2 (The Idealist Advocate)",
      title: "The Purposeful Visionary Core",
      coreDesire: "To live with absolute moral integrity, heal humanity, and fulfill higher purpose.",
      coreFear: "Being corrupt, defective, or living a meaningless life.",
      keyPassion: "Perfectionistic Anger / Resentment.",
      integrationPath: "Integration to Type 7 (The Enthusiast): Releasing rigid self-criticism, celebrating spontaneous joy, and accepting human imperfection.",
      guidance: "Self-compassion is your highest calling. Allow yourself to enjoy the present moment without carrying the weight of the world."
    }
  },
  INFP: {
    title: "Mediator",
    motto: "Poetic, kind, and altruistic person, always eager to help a good cause.",
    overview: "INFPs are imaginative idealists, guided by their core values and beliefs.",
    strengths: ["Empathetic", "Generous", "Open-Minded", "Creative & Expressive"],
    weaknesses: ["Unrealistic", "Self-Isolating", "Unfocused", "Emotionally Vulnerable"],
    careers: ["Writer / Journalist", "Art Director", "Social Worker", "Environmental Specialist"],
    famous: ["William Shakespeare", "J.R.R. Tolkien", "Vincent van Gogh", "Keanu Reeves"],
    compatibility: ["ENFJ", "ENTJ"],
    stack: [
      { code: "Fi", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Lives by a deeply personal internal moral compass and intense authenticity." },
      { code: "Ne", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Explores creative metaphors, art, and compassionate possibilities for the world." },
      { code: "Si", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Nurtures nostalgia, sentimental memories, and personal comfort traditions." },
      { code: "Te", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Struggles with rigid external structure, but learns to organize projects to fulfill dreams." }
    ],
    growthRoadmap: {
      copilotAdvice: "Engage Extraverted Intuition (Ne) by sharing your creative work with the world and testing ideas in real life rather than staying isolated in feelings.",
      inferiorAdvice: "Develop small organizational structures (Te) like checklists and schedules to turn your ideals into tangible achievements."
    },
    enneagram: {
      primaryType: "Type 4w5 (The Individualist Idealist)",
      title: "The Authentic Creative Core",
      coreDesire: "To express true personal identity, create beauty, and find deep significance.",
      coreFear: "Being ordinary, defective, or lacking personal identity.",
      keyPassion: "Envy / Melancholy (Feeling something essential is missing).",
      integrationPath: "Integration to Type 1 (The Reformer): Grounding your rich emotional depth in steady daily discipline and constructive execution.",
      guidance: "You are not your feelings. Transform your inner emotional world into outward creative contribution through consistent action."
    }
  },
  ENFJ: {
    title: "Protagonist",
    motto: "Charismatic and inspiring leader, able to mesmerize listeners.",
    overview: "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity.",
    strengths: ["Receptive", "Reliable", "Passionate", "Natural Leaders"],
    weaknesses: ["Overly Idealistic", "Too Selfless", "Overly Sensitive", "Fluctuating Self-Esteem"],
    careers: ["Nonprofit Director", "Public Relations Specialist", "Teacher", "Executive Coach"],
    famous: ["Barack Obama", "Oprah Winfrey", "Maya Angelou", "Ben Affleck"],
    compatibility: ["INFP", "ISFP"],
    stack: [
      { code: "Fe", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Radiates empathy, inspiring others and uniting groups around shared human growth." },
      { code: "Ni", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Guides interpersonal leadership with vision for individual potential." },
      { code: "Se", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Brings expressive energy, presence, and charisma to social interactions." },
      { code: "Ti", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Can overthink criticism internally, but seeks objective clarity under pressure." }
    ],
    growthRoadmap: {
      copilotAdvice: "Spend time in quiet reflection with Introverted Intuition (Ni) to ensure you are prioritizing true long-term growth for people rather than pleasing everyone in the moment.",
      inferiorAdvice: "Practice objective self-analysis (Ti). Learning to detach emotionally from conflict allows you to set healthy personal boundaries."
    },
    enneagram: {
      primaryType: "Type 2w3 (The Inspiring Mentor)",
      title: "The Empathetic Catalyst Core",
      coreDesire: "To be genuinely loved, valued, and to elevate the potential of others.",
      coreFear: "Being unwanted, unappreciated, or emotionally isolated.",
      keyPassion: "Pride (Believing you must solve everyone else's problems).",
      integrationPath: "Integration to Type 4 (The Individualist): Turning inward to discover and honor your own authentic desires separate from others.",
      guidance: "Set firm emotional boundaries. You can only pour into others when your own cup is full."
    }
  },
  ENFP: {
    title: "Campaigner",
    motto: "Enthusiastic, creative, and sociable free spirit.",
    overview: "ENFPs are people-centered creators, motivated by possibilities and enthusiastic energy.",
    strengths: ["Curious", "Perceptive", "Enthusiastic", "Excellent Communicators"],
    weaknesses: ["People-Pleaser", "Unfocused", "Disorganized", "Overly Optimistic"],
    careers: ["Brand Strategist", "Creative Writer", "Event Planner", "Marketing Manager"],
    famous: ["Robin Williams", "Mark Twain", "Robert Downey Jr.", "Quentin Tarantino"],
    compatibility: ["INTJ", "INFJ"],
    stack: [
      { code: "Ne", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Sparks enthusiasm for new ideas, potential connections, and creative adventures." },
      { code: "Fi", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Filters ideas through personal authenticity and empathy for human values." },
      { code: "Te", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Rallies resources and takes organized action to turn passion projects into reality." },
      { code: "Si", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Resists mundane routine, but gains stability by building healthy habits over time." }
    ],
    growthRoadmap: {
      copilotAdvice: "Consult Introverted Feeling (Fi) before saying yes to every new opportunity. Ensure your projects align with your core principles.",
      inferiorAdvice: "Build grounding routines (Si) to anchor your energy and follow through on your most inspiring goals."
    },
    enneagram: {
      primaryType: "Type 7w8 (The Free-Spirited Catalyst)",
      title: "The Energetic Innovator Core",
      coreDesire: "To be free, inspired, and share authentic enthusiasm for life.",
      coreFear: "Being trapped in mundane routine, limited, or missing out.",
      keyPassion: "Gluttony for new experiences.",
      integrationPath: "Integration to Type 5 (The Thinker): Developing quiet contemplative focus, emotional grounding, and logical follow-through.",
      guidance: "True freedom comes from internal mastery and focus, not running away from routine."
    }
  },
  ISTJ: {
    title: "Logistician",
    motto: "Practical and fact-minded individual, whose reliability cannot be doubted.",
    overview: "ISTJs are responsible organizers, driven to create order and stability.",
    strengths: ["Honest & Direct", "Strong-Willed & Dutiful", "Very Responsible", "Calm & Practical"],
    weaknesses: ["Stubborn", "Insensitive", "Always by the Book", "Often Unreasonably Blame Themselves"],
    careers: ["Auditor / Accountant", "Chief Financial Officer", "Judge", "Supply Chain Director"],
    famous: ["George Washington", "Warren Buffett", "Angela Merkel", "Henry Ford"],
    compatibility: ["ESFP", "ESTP"],
    stack: [
      { code: "Si", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Anchors decisions in concrete experience, proven facts, and reliable precedent." },
      { code: "Te", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Organizes workflows, enforcing structure and high standards of execution." },
      { code: "Fi", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Holds quiet, unwavering personal principles and loyalty to duty." },
      { code: "Ne", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Cautious of sudden unexpected change, but learns to adapt to novel ideas over time." }
    ],
    growthRoadmap: {
      copilotAdvice: "Use Extraverted Thinking (Te) to share your methodologies and optimize processes with others clearly rather than carrying the whole workload silently.",
      inferiorAdvice: "Practice open-mindedness to new methods (Ne). Trying new approaches can increase your efficiency and prevent rigid routines."
    },
    enneagram: {
      primaryType: "Type 1w9 (The Duty Fulfiller)",
      title: "The Honest Steward Core",
      coreDesire: "To maintain order, stability, and fulfill responsibilities with total integrity.",
      coreFear: "Being chaotic, corrupt, wrong, or irresponsible.",
      keyPassion: "Resentment (Frustration when standards are broken).",
      integrationPath: "Integration to Type 7 (The Enthusiast): Embracing flexibility, humor, and relaxed spontaneous joy.",
      guidance: "Accept that perfection is impossible. Allowing room for small mistakes creates peace and innovation."
    }
  },
  ISFJ: {
    title: "Defender",
    motto: "Very dedicated and warm protector, always ready to defend loved ones.",
    overview: "ISFJs are industrious caretakers, loyal to traditions and devoted to supporting others.",
    strengths: ["Supportive", "Reliable & Patient", "Imaginative & Observant", "Enthusiastic"],
    weaknesses: ["Overly Humble", "Takes Things Personally", "Represses Feelings", "Overcommitted"],
    careers: ["Nurse Specialist", "Elementary Teacher", "Human Resources Manager", "Librarian"],
    famous: ["Queen Elizabeth II", "Beyoncé", "Kate Middleton", "Mother Teresa"],
    compatibility: ["ESFJ", "ESTJ"],
    stack: [
      { code: "Si", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Remembers subtle personal details, building stability and tradition for loved ones." },
      { code: "Fe", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Attends warmly to the practical emotional and physical needs of others." },
      { code: "Ti", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Uses practical problem-solving logic to analyze and streamline caretaking." },
      { code: "Ne", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Prefers predictability, but develops open-mindedness to future possibilities." }
    ],
    growthRoadmap: {
      copilotAdvice: "Express your care outwardly through Extraverted Feeling (Fe), while communicating your own needs and boundaries clearly.",
      inferiorAdvice: "Embrace unexpected positive possibilities (Ne) instead of assuming worst-case scenarios during times of change."
    },
    enneagram: {
      primaryType: "Type 6w5 (The Sentinel Defender)",
      title: "The Loyal Protector Core",
      coreDesire: "To have security, stability, and protect the well-being of loved ones.",
      coreFear: "Being helpless, abandoned, or exposed to chaos.",
      keyPassion: "Anxiety & Hypervigilance.",
      integrationPath: "Integration to Type 9 (The Peacemaker): Cultivating serene inner trust and calm self-assurance.",
      guidance: "Trust your innate strength. You are far more capable of handling uncertainty than your anxious thoughts suggest."
    }
  },
  ESTJ: {
    title: "Executive",
    motto: "Excellent administrator, unsurpassed at managing things – or people.",
    overview: "ESTJs are traditional organizers, eager to take charge and structure projects.",
    strengths: ["Dedicated", "Strong-Willed", "Direct & Honest", "Loyal & Reliable"],
    weaknesses: ["Inflexible & Stubborn", "Uncomfortable with Unconventional Situations", "Judgmental"],
    careers: ["Operations Manager", "Project Director", "Judge", "Police Officer / Commander"],
    famous: ["Frank Sinatra", "Sonia Sotomayor", "James Monroe", "Lyndon B. Johnson"],
    compatibility: ["ISFP", "INFP"],
    stack: [
      { code: "Te", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Establishes order, rules, and objective systems to maximize productivity." },
      { code: "Si", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Applies past experience and proven methodologies to ensure reliable results." },
      { code: "Ne", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Enjoys brainstorming pragmatic improvements and alternative solutions." },
      { code: "Fi", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "May suppress personal feelings to remain efficient, but deeply values loyalty." }
    ],
    growthRoadmap: {
      copilotAdvice: "Ground your managerial decisions in Introverted Sensing (Si) by reviewing historical data and giving teams time-tested procedures.",
      inferiorAdvice: "Value the emotional motivations of others (Fi). Showing empathy creates long-term loyalty beyond strict productivity goals."
    },
    enneagram: {
      primaryType: "Type 1w2 (The Administrator)",
      title: "The Systematic Leader Core",
      coreDesire: "To enforce order, drive productivity, and build reliable systems.",
      coreFear: "Chaos, inefficiency, or loss of control.",
      keyPassion: "Perfectionistic Control.",
      integrationPath: "Integration to Type 7 (The Optimist): Cultivating patience, humor, and flexible open-mindedness with others.",
      guidance: "Efficiency is worthless without empathy. Balance your drive for results with compassion for human limitations."
    }
  },
  ESFJ: {
    title: "Consul",
    motto: "Extraordinarily caring, social, and popular person.",
    overview: "ESFJs are eager helpers, sensitive to the needs of others and dedicated to harmony.",
    strengths: ["Strong Practical Skills", "Strong Sense of Duty", "Very Loyal", "Sensitive & Warm"],
    weaknesses: ["Inflexible", "Vulnerable to Criticism", "Often Too Needy", "Too Selfless"],
    careers: ["Event Coordinator", "Healthcare Administrator", "Public Relations Lead", "Sales Director"],
    famous: ["Taylor Swift", "Jennifer Garner", "Bill Clinton", "Steve Harvey"],
    compatibility: ["ISFJ", "ISTJ"],
    stack: [
      { code: "Fe", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Creates harmonious communities, encouraging others and fostering social bonding." },
      { code: "Si", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Honors tradition, social etiquette, and reliable practical support routines." },
      { code: "Ne", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Enjoys exploring fun social activities and creative group gatherings." },
      { code: "Ti", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Can take logical critiques personally, but grows by embracing impartial analysis." }
    ],
    growthRoadmap: {
      copilotAdvice: "Use Introverted Sensing (Si) to establish personal boundaries and healthy routines so you do not over-exert yourself for others.",
      inferiorAdvice: "Practice analyzing situations with objective detachment (Ti) to avoid taking constructive feedback personally."
    },
    enneagram: {
      primaryType: "Type 2w1 (The Community Pillar)",
      title: "The Caring Provider Core",
      coreDesire: "To foster harmony, support community, and feel appreciated.",
      coreFear: "Being rejected, excluded, or disapproved of.",
      keyPassion: "Over-extending for others.",
      integrationPath: "Integration to Type 4 (The Individualist): Honoring your personal feelings and self-care without fear of losing connection.",
      guidance: "Your worth is inherent, not earned through self-sacrifice. Take time to nurture your own soul."
    }
  },
  ISTP: {
    title: "Virtuoso",
    motto: "Bold and practical experimenter, master of all kinds of tools.",
    overview: "ISTPs are observant artisans, driven to master mechanics and practical craftsmanship.",
    strengths: ["Optimistic & Energetic", "Creative & Practical", "Spontaneous & Rational", "Great in a Crisis"],
    weaknesses: ["Stubborn", "Insensitive", "Private & Reserved", "Easily Bored"],
    careers: ["Mechanical Engineer", "Pilot", "Forensic Scientist", "Software Developer"],
    famous: ["Clint Eastwood", "Tom Cruise", "Michael Jordan", "Bear Grylls"],
    compatibility: ["ESTJ", "ESTJ"],
    stack: [
      { code: "Ti", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Deconstructs mechanical and abstract systems to understand how components function." },
      { code: "Se", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Acts with physical precision, reacting calmly and tactically in real-time scenarios." },
      { code: "Ni", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Synthesizes tactical observations into sudden intuitive breakthroughs." },
      { code: "Fe", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Prefers autonomy over emotional drama, but seeks meaningful social bonds." }
    ],
    growthRoadmap: {
      copilotAdvice: "Engage Extraverted Sensing (Se) by testing your ideas in hands-on environments and taking real-time action rather than endlessly tweaking theories.",
      inferiorAdvice: "Express appreciation to friends and colleagues (Fe). Small gestures of warmth build strong alliances."
    },
    enneagram: {
      primaryType: "Type 5w6 (The Pragmatic Artisan)",
      title: "The Independent Craftsman Core",
      coreDesire: "To master practical skills, understand how things work, and remain autonomous.",
      coreFear: "Being helpless, dependent, or overwhelmed by emotional demands.",
      keyPassion: "Detachment & Self-Reliance.",
      integrationPath: "Integration to Type 8 (The Challenger): Engaging directly with the world, leading boldly, and taking ownership.",
      guidance: "Don't hide behind detachment. Share your technical mastery to solve real human problems."
    }
  },
  ISFP: {
    title: "Adventurer",
    motto: "Flexible and charming artist, always ready to explore something new.",
    overview: "ISFPs are gentle caretakers, driven by aesthetic sensitivity and personal values.",
    strengths: ["Charming", "Sensitive to Others", "Imaginative", "Passionate & Curious"],
    weaknesses: ["Fiercely Independent", "Unpredictable", "Easily Stressed", "Overly Competitive"],
    careers: ["Graphic Designer", "Fashion Stylist", "Landscape Architect", "Photographer"],
    famous: ["Michael Jackson", "Frida Kahlo", "Britney Spears", "Lana Del Rey"],
    compatibility: ["ENFJ", "ESFJ"],
    stack: [
      { code: "Fi", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Expresses deep personal integrity and aesthetic sensitivity through authentic action." },
      { code: "Se", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Immerses in sensory art, nature, and hands-on creative experiences." },
      { code: "Ni", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Gleans subtle symbolic meanings and personal future goals." },
      { code: "Te", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Can feel drained by harsh regimentation, but learns to structure creative output." }
    ],
    growthRoadmap: {
      copilotAdvice: "Channel your internal values into physical creation or active artistic expression through Extraverted Sensing (Se).",
      inferiorAdvice: "Organize your workflow into simple steps (Te) so your creative vision reaches completion and impacts the world."
    },
    enneagram: {
      primaryType: "Type 9w8 (The Peaceful Artist)",
      title: "The Harmonious Creator Core",
      coreDesire: "To have inner peace, express aesthetic beauty, and live authentically.",
      coreFear: "Conflict, emotional disruption, or loss of personal identity.",
      keyPassion: "Sloth (Numbing out to avoid conflict).",
      integrationPath: "Integration to Type 3 (The Achiever): Setting ambitious goals, asserting your talents, and sharing your art publicly.",
      guidance: "Your peace is not threatened by taking bold action. Express your authentic truth without fear."
    }
  },
  ESTP: {
    title: "Entrepreneur",
    motto: "Smart, energetic, and perceptive person, who truly enjoys living on the edge.",
    overview: "ESTPs are energetic thrill-seekers, driven to solve problems in dynamic environments.",
    strengths: ["Bold", "Rational & Practical", "Original", "Perceptive & Direct"],
    weaknesses: ["Insensitive", "Impatient", "Risk-Prone", "Misses the Bigger Picture"],
    careers: ["Startup Founder", "Stock Broker", "Emergency Paramedic", "Real Estate Developer"],
    famous: ["Ernest Hemingway", "Madonna", "Donald Trump", "Jack Nicholson"],
    compatibility: ["ISFJ", "ISTJ"],
    stack: [
      { code: "Se", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Thrives in high-stakes environments, responding instantly to physical reality." },
      { code: "Ti", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Calculates risks and logical solutions on the fly with sharp pragmatic accuracy." },
      { code: "Fe", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Uses charisma, humor, and social perception to navigate crowds." },
      { code: "Ni", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Focuses on the immediate present, but develops deeper foresight as they mature." }
    ],
    growthRoadmap: {
      copilotAdvice: "Use Introverted Thinking (Ti) to weigh long-term consequences and logical risk before taking immediate physical action.",
      inferiorAdvice: "Reflect on long-range vision and trends (Ni) to build sustainable long-term success beyond short-term thrill."
    },
    enneagram: {
      primaryType: "Type 8w7 (The Action Thrill-Seeker)",
      title: "The Bold Dynamo Core",
      coreDesire: "To be strong, impact the world, and experience intense physical reality.",
      coreFear: "Being weak, controlled, or trapped.",
      keyPassion: "Lust for intensity.",
      integrationPath: "Integration to Type 2 (The Helper): Using your strength and courage to protect, support, and empower others.",
      guidance: "True courage includes gentleness. Harness your powerful drive to serve a purpose higher than yourself."
    }
  },
  ESFP: {
    title: "Entertainer",
    motto: "Spontaneous, energetic, and enthusiastic entertainer – life is never boring.",
    overview: "ESFPs are vibrant performers, driven to bring joy and energy to every interaction.",
    strengths: ["Bold", "Original", "Aesthetic & Showmanship", "Practical & Perceptive"],
    weaknesses: ["Sensitive", "Conflict-Averse", "Easily Bored", "Poor Long-Term Planner"],
    careers: ["Actor / Performer", "Event Host", "Publicist", "Fitness Instructor"],
    famous: ["Marilyn Monroe", "Elton John", "Adele", "Will Smith"],
    compatibility: ["ISTJ", "ISFJ"],
    stack: [
      { code: "Se", role: "Dominant", roleTitle: "Dominant (The Driver)", badge: "HERO FUNCTION", desc: "Lives enthusiastically in the moment, bringing vibrant energy and flair." },
      { code: "Fi", role: "Auxiliary", roleTitle: "Auxiliary (The Co-Pilot)", badge: "GROWTH ENGINE", desc: "Shares genuine warmth, empathy, and personal passion with everyone around them." },
      { code: "Te", role: "Tertiary", roleTitle: "Tertiary (The 10-Year-Old)", badge: "RECREATION & COMFORT", desc: "Executes fun events and practical tasks with efficient flair." },
      { code: "Ni", role: "Inferior", roleTitle: "Inferior (The 3-Year-Old / Gateway)", badge: "LIFE MASTERY GATEWAY", desc: "Can avoid long-term planning, but gains profound purpose by finding future vision." }
    ],
    growthRoadmap: {
      copilotAdvice: "Check in with Introverted Feeling (Fi) to ensure your energetic social activities align with your core values.",
      inferiorAdvice: "Set aside quiet time to contemplate your long-term life path and future goals (Ni)."
    },
    enneagram: {
      primaryType: "Type 7w6 (The Vibrant Performer)",
      title: "The Enthusiastic Creator Core",
      coreDesire: "To enjoy life fully, bring happiness to others, and express spontaneous energy.",
      coreFear: "Missing out, suffering, or emotional isolation.",
      keyPassion: "Gluttony for excitement.",
      integrationPath: "Integration to Type 5 (The Observer): Developing quiet contemplative focus, wisdom, and emotional grounding.",
      guidance: "Depth enriches joy. Quiet reflection will make your magnetic presence even more impactful."
    }
  }
};

export default async (req, context) => {
  const url = new URL(req.url);
  const resultId = url.searchParams.get("id");
  const fallbackType = (url.searchParams.get("type") || "INFJ").toUpperCase();

  let blobData = null;

  if (resultId) {
    try {
      const store = getStore("mbti-results");
      blobData = await store.get(resultId, { type: "json" });
    } catch (err) {
      console.warn("Netlify Blobs read notice:", err.message);
    }
  }

  const mbtiType = blobData?.type || fallbackType;
  const profileDetails = FULL_PROFILES[mbtiType] || FULL_PROFILES.INFJ;

  const defaultPercentages = blobData?.percentages || {
    E: 42, I: 58,
    S: 35, N: 65,
    T: 45, F: 55,
    J: 70, P: 30
  };

  const enrichedStack = (profileDetails.stack || []).map(item => {
    const meta = FUNCTION_META[item.code] || {};
    const roleMeta = ROLE_EXPLANATIONS[item.role] || {};
    return {
      code: item.code,
      name: meta.name || item.code,
      nickname: meta.nickname || "",
      type: meta.type || "",
      orientation: meta.orientation || "",
      coreFocus: meta.coreFocus || "",
      howItWorks: meta.howItWorks || "",
      role: item.role,
      roleTitle: item.roleTitle || roleMeta.title,
      badge: item.badge || roleMeta.badge,
      analogy: roleMeta.analogy || "",
      explanation: roleMeta.explanation || "",
      strengthImpact: roleMeta.strengthImpact || "",
      weaknessWarning: roleMeta.weaknessWarning || "",
      desc: item.desc
    };
  });

  const responsePayload = {
    id: resultId || "demo-result",
    userName: blobData?.userName || "",
    type: mbtiType,
    title: profileDetails.title,
    motto: profileDetails.motto,
    overview: profileDetails.overview,
    strengths: profileDetails.strengths,
    weaknesses: profileDetails.weaknesses,
    careers: profileDetails.careers,
    famous: profileDetails.famous,
    compatibility: profileDetails.compatibility,
    cognitiveFunctions: enrichedStack,
    growthRoadmap: profileDetails.growthRoadmap || {
      copilotAdvice: "Engage your secondary function to maintain healthy emotional and mental balance.",
      inferiorAdvice: "Practice mindfulness and self-awareness in your stress responses."
    },
    enneagram: profileDetails.enneagram || {
      primaryType: "Type 5w6",
      title: "The Analytical Core",
      coreDesire: "To understand and master reality.",
      coreFear: "Incompetence or loss of autonomy.",
      keyPassion: "Detachment.",
      integrationPath: "Integration to Type 8: Bold action.",
      guidance: "Balance analysis with decisive real-world action."
    },
    percentages: defaultPercentages,
    storedInBlobs: Boolean(blobData),
    createdAt: blobData?.createdAt || new Date().toISOString()
  };

  return new Response(JSON.stringify(responsePayload), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
