import { getStore } from "@netlify/blobs";

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
    cognitiveFunctions: [
      { code: "Ni", name: "Introverted Intuition", role: "Dominant (Hero)", desc: "Synthesizes complex patterns to form a singular long-term strategic vision." },
      { code: "Te", name: "Extraverted Thinking", role: "Auxiliary (Co-Pilot)", desc: "Executes plans efficiently, organizing resources and systems to achieve goals." },
      { code: "Fi", name: "Introverted Feeling", role: "Tertiary (Relief)", desc: "Applies quiet internal values and personal ethics to guide decision-making." },
      { code: "Se", name: "Extraverted Sensing", role: "Inferior (Aspiration)", desc: "Vulnerable to sensory overload, but provides present-moment physical ground under stress." }
    ]
  },
  INTP: {
    title: "Logician",
    motto: "Innovative inventor with an unquenchable thirst for knowledge.",
    overview: "INTPs are quiet, analytical individuals who enjoy spending time alone, thinking about how things work.",
    strengths: ["Analytical & Strategic", "Great Thinkers", "Open-Minded", "Objective & Objective"],
    weaknesses: ["Disconnected", "Insensitive", "Impatient", "Second-Guesses Themselves"],
    careers: ["Computer Scientist", "Research Mathematician", "Philosophy Professor", "Financial Analyst"],
    famous: ["Albert Einstein", "Bill Gates", "Isaac Newton", "René Descartes"],
    compatibility: ["ENTJ", "ENFJ"],
    cognitiveFunctions: [
      { code: "Ti", name: "Introverted Thinking", role: "Dominant (Hero)", desc: "Analyzes systems down to first principles, seeking absolute internal logical precision." },
      { code: "Ne", name: "Extraverted Intuition", role: "Auxiliary (Co-Pilot)", desc: "Explores infinite theoretical possibilities, connections, and innovative hypotheses." },
      { code: "Si", name: "Introverted Sensing", role: "Tertiary (Relief)", desc: "Stores detailed past data and facts to support logical frameworks." },
      { code: "Fe", name: "Extraverted Feeling", role: "Inferior (Aspiration)", desc: "Desires social connection, but can struggle with expressiveness and emotional atmosphere." }
    ]
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
    cognitiveFunctions: [
      { code: "Te", name: "Extraverted Thinking", role: "Dominant (Hero)", desc: "Drives maximum efficiency, structuring environments and leading strategic execution." },
      { code: "Ni", name: "Introverted Intuition", role: "Auxiliary (Co-Pilot)", desc: "Provides long-range foresight and deep conceptual vision behind executive decisions." },
      { code: "Se", name: "Extraverted Sensing", role: "Tertiary (Relief)", desc: "Engages directly with real-world action and tactical opportunities." },
      { code: "Fi", name: "Introverted Feeling", role: "Inferior (Aspiration)", desc: "Guards internal vulnerability; strives to align ruthless drive with personal principles." }
    ]
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
    cognitiveFunctions: [
      { code: "Ne", name: "Extraverted Intuition", role: "Dominant (Hero)", desc: "Generates novel concepts, challenging paradigms and connecting disparate ideas." },
      { code: "Ti", name: "Introverted Thinking", role: "Auxiliary (Co-Pilot)", desc: "Refines creative ideas with rigorous internal logic and critical analysis." },
      { code: "Fe", name: "Extraverted Feeling", role: "Tertiary (Relief)", desc: "Uses charm and group dynamics to debate and engage audience interest." },
      { code: "Si", name: "Introverted Sensing", role: "Inferior (Aspiration)", desc: "Struggles with repetitive routine, but learns over time to ground ideas in proven facts." }
    ]
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
    cognitiveFunctions: [
      { code: "Ni", name: "Introverted Intuition", role: "Dominant (Hero)", desc: "Perceives hidden meanings, underlying patterns, and future trajectories for humanity." },
      { code: "Fe", name: "Extraverted Feeling", role: "Auxiliary (Co-Pilot)", desc: "Empathizes deeply with others, creating interpersonal warmth and group harmony." },
      { code: "Ti", name: "Introverted Thinking", role: "Tertiary (Relief)", desc: "Analyzes insights logically to validate intuitive impressions." },
      { code: "Se", name: "Extraverted Sensing", role: "Inferior (Aspiration)", desc: "Can feel overwhelmed by noisy environments, but enjoys rich aesthetic experiences." }
    ]
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
    cognitiveFunctions: [
      { code: "Fi", name: "Introverted Feeling", role: "Dominant (Hero)", desc: "Lives by a deeply personal internal moral compass and intense authenticity." },
      { code: "Ne", name: "Extraverted Intuition", role: "Auxiliary (Co-Pilot)", desc: "Explores creative metaphors, art, and compassionate possibilities for the world." },
      { code: "Si", name: "Introverted Sensing", role: "Tertiary (Relief)", desc: "Nurtures nostalgia, sentimental memories, and personal comfort traditions." },
      { code: "Te", name: "Extraverted Thinking", role: "Inferior (Aspiration)", desc: "Struggles with rigid external structure, but learns to organize projects to fulfill dreams." }
    ]
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
    cognitiveFunctions: [
      { code: "Fe", name: "Extraverted Feeling", role: "Dominant (Hero)", desc: "Radiates empathy, inspiring others and uniting groups around shared human growth." },
      { code: "Ni", name: "Introverted Intuition", role: "Auxiliary (Co-Pilot)", desc: "Guides interpersonal leadership with vision for individual potential." },
      { code: "Se", name: "Extraverted Sensing", role: "Tertiary (Relief)", desc: "Brings expressive energy, presence, and charisma to social interactions." },
      { code: "Ti", name: "Introverted Thinking", role: "Inferior (Aspiration)", desc: "Can overthink criticism internally, but seeks objective clarity under pressure." }
    ]
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
    cognitiveFunctions: [
      { code: "Ne", name: "Extraverted Intuition", role: "Dominant (Hero)", desc: "Sparks enthusiasm for new ideas, potential connections, and creative adventures." },
      { code: "Fi", name: "Introverted Feeling", role: "Auxiliary (Co-Pilot)", desc: "Filters ideas through personal authenticity and empathy for human values." },
      { code: "Te", name: "Extraverted Thinking", role: "Tertiary (Relief)", desc: "Rallies resources and takes organized action to turn passion projects into reality." },
      { code: "Si", name: "Introverted Sensing", role: "Inferior (Aspiration)", desc: "Resists mundane routine, but gains stability by building healthy habits over time." }
    ]
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
    cognitiveFunctions: [
      { code: "Si", name: "Introverted Sensing", role: "Dominant (Hero)", desc: "Anchors decisions in concrete experience, proven facts, and reliable precedent." },
      { code: "Te", name: "Extraverted Thinking", role: "Auxiliary (Co-Pilot)", desc: "Organizes workflows, enforcing structure and high standards of execution." },
      { code: "Fi", name: "Introverted Feeling", role: "Tertiary (Relief)", desc: "Holds quiet, unwavering personal principles and loyalty to duty." },
      { code: "Ne", name: "Extraverted Intuition", role: "Inferior (Aspiration)", desc: "Cautious of sudden unexpected change, but learns to adapt to novel ideas." }
    ]
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
    cognitiveFunctions: [
      { code: "Si", name: "Introverted Sensing", role: "Dominant (Hero)", desc: "Remembers subtle personal details, building stability and tradition for loved ones." },
      { code: "Fe", name: "Extraverted Feeling", role: "Auxiliary (Co-Pilot)", desc: "Attends warmly to the practical emotional and physical needs of others." },
      { code: "Ti", name: "Introverted Thinking", role: "Tertiary (Relief)", desc: "Uses practical problem-solving logic to analyze and streamline caretaking." },
      { code: "Ne", name: "Extraverted Intuition", role: "Inferior (Aspiration)", desc: "Prefers predictability, but develops open-mindedness to future possibilities." }
    ]
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
    cognitiveFunctions: [
      { code: "Te", name: "Extraverted Thinking", role: "Dominant (Hero)", desc: "Establishes order, rules, and objective systems to maximize productivity." },
      { code: "Si", name: "Introverted Sensing", role: "Auxiliary (Co-Pilot)", desc: "Applies past experience and proven methodologies to ensure reliable results." },
      { code: "Ne", name: "Extraverted Intuition", role: "Tertiary (Relief)", desc: "Enjoys brainstorming pragmatic improvements and alternative solutions." },
      { code: "Fi", name: "Introverted Feeling", role: "Inferior (Aspiration)", desc: "May suppress personal feelings to remain efficient, but deeply values loyalty." }
    ]
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
    cognitiveFunctions: [
      { code: "Fe", name: "Extraverted Feeling", role: "Dominant (Hero)", desc: "Creates harmonious communities, encouraging others and fostering social bonding." },
      { code: "Si", name: "Introverted Sensing", role: "Auxiliary (Co-Pilot)", desc: "Honors tradition, social etiquette, and reliable practical support routines." },
      { code: "Ne", name: "Extraverted Intuition", role: "Tertiary (Relief)", desc: "Enjoys exploring fun social activities and creative group gatherings." },
      { code: "Ti", name: "Introverted Thinking", role: "Inferior (Aspiration)", desc: "Can take logical critiques personally, but grows by embracing impartial analysis." }
    ]
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
    cognitiveFunctions: [
      { code: "Ti", name: "Introverted Thinking", role: "Dominant (Hero)", desc: "Deconstructs mechanical and abstract systems to understand how components function." },
      { code: "Se", name: "Extraverted Sensing", role: "Auxiliary (Co-Pilot)", desc: "Acts with physical precision, reacting calmly and tactically in real-time scenarios." },
      { code: "Ni", name: "Introverted Intuition", role: "Tertiary (Relief)", desc: "Synthesizes tactical observations into sudden intuitive breakthroughs." },
      { code: "Fe", name: "Extraverted Feeling", role: "Inferior (Aspiration)", desc: "Prefers autonomy over emotional drama, but seeks meaningful bonds." }
    ]
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
    cognitiveFunctions: [
      { code: "Fi", name: "Introverted Feeling", role: "Dominant (Hero)", desc: "Expresses deep personal integrity and aesthetic sensitivity through authentic action." },
      { code: "Se", name: "Extraverted Sensing", role: "Auxiliary (Co-Pilot)", desc: "Immerses in sensory art, nature, and hands-on creative experiences." },
      { code: "Ni", name: "Introverted Intuition", role: "Tertiary (Relief)", desc: "Gleans subtle symbolic meanings and personal future goals." },
      { code: "Te", name: "Extraverted Thinking", role: "Inferior (Aspiration)", desc: "Can feel drained by harsh regimentation, but learns to structure creative output." }
    ]
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
    cognitiveFunctions: [
      { code: "Se", name: "Extraverted Sensing", role: "Dominant (Hero)", desc: "Thrives in high-stakes environments, responding instantly to physical reality." },
      { code: "Ti", name: "Introverted Thinking", role: "Auxiliary (Co-Pilot)", desc: "Calculates risks and logical solutions on the fly with sharp pragmatic accuracy." },
      { code: "Fe", name: "Extraverted Feeling", role: "Tertiary (Relief)", desc: "Uses charisma, humor, and social perception to navigate crowds." },
      { code: "Ni", name: "Introverted Intuition", role: "Inferior (Aspiration)", desc: "Focuses on the immediate present, but develops deeper foresight as they mature." }
    ]
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
    cognitiveFunctions: [
      { code: "Se", name: "Extraverted Sensing", role: "Dominant (Hero)", desc: "Lives enthusiastically in the moment, bringing vibrant energy and flair." },
      { code: "Fi", name: "Introverted Feeling", role: "Auxiliary (Co-Pilot)", desc: "Shares genuine warmth, empathy, and personal passion with everyone around them." },
      { code: "Te", name: "Extraverted Thinking", role: "Tertiary (Relief)", desc: "Executes fun events and practical tasks with efficient flair." },
      { code: "Ni", name: "Introverted Intuition", role: "Inferior (Aspiration)", desc: "Can avoid long-term planning, but gains profound purpose by finding future vision." }
    ]
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

  const responsePayload = {
    id: resultId || "demo-result",
    type: mbtiType,
    title: profileDetails.title,
    motto: profileDetails.motto,
    overview: profileDetails.overview,
    strengths: profileDetails.strengths,
    weaknesses: profileDetails.weaknesses,
    careers: profileDetails.careers,
    famous: profileDetails.famous,
    compatibility: profileDetails.compatibility,
    cognitiveFunctions: profileDetails.cognitiveFunctions || [],
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
