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
    compatibility: ["ENFP", "ENTP"]
  },
  INTP: {
    title: "Logician",
    motto: "Innovative inventor with an unquenchable thirst for knowledge.",
    overview: "INTPs are quiet, analytical individuals who enjoy spending time alone, thinking about how things work.",
    strengths: ["Analytical & Strategic", "Great Thinkers", "Open-Minded", "Objective & Objective"],
    weaknesses: ["Disconnected", "Insensitive", "Impatient", "Second-Guesses Themselves"],
    careers: ["Computer Scientist", "Research Mathematician", "Philosophy Professor", "Financial Analyst"],
    famous: ["Albert Einstein", "Bill Gates", "Isaac Newton", "René Descartes"],
    compatibility: ["ENTJ", "ENFJ"]
  },
  ENTJ: {
    title: "Commander",
    motto: "Bold, imaginative, and strong-willed leader.",
    overview: "ENTJs are strategic leaders, motivated to organize change and drive efficiency across organizations.",
    strengths: ["Efficient & Energetic", "Self-Confident", "Strong-Willed", "Strategic Thinkers"],
    weaknesses: ["Stubborn & Dominant", "Intolerant", "Impatient", "Cold & Ruthless"],
    careers: ["Executive CEO", "Management Consultant", "Corporate Lawyer", "Venture Capitalist"],
    famous: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay", "Napoleon Bonaparte"],
    compatibility: ["INTP", "INFP"]
  },
  ENTP: {
    title: "Debater",
    motto: "Smart and curious thinker who cannot resist an intellectual challenge.",
    overview: "ENTPs are inspired innovators, motivated to find new solutions to challenging problems.",
    strengths: ["Knowledgeable", "Quick Thinkers", "Original", "Excellent Brainstormers"],
    weaknesses: ["Very Argumentative", "Insensitive", "Intolerant", "Finds It Hard to Focus"],
    careers: ["Entrepreneur", "Creative Director", "Attorney", "Political Strategist"],
    famous: ["Thomas Edison", "Mark Twain", "Walt Disney", "Robert Downey Jr."],
    compatibility: ["INFJ", "INTJ"]
  },
  INFJ: {
    title: "Advocate",
    motto: "Quiet, mystical, yet inspiring and tireless idealist.",
    overview: "INFJs are thoughtful visionaries who seek deep purpose and meaningful connection with others.",
    strengths: ["Creative & Insightful", "Principled", "Passionate & Altruistic", "Determined"],
    weaknesses: ["Sensitive to Criticism", "Extremely Private", "Perfectionistic", "Can Burn Out Easily"],
    careers: ["Psychologist", "Author / Writer", "Counselor", "Humanitarian Lead", "UX Designer"],
    famous: ["Martin Luther King Jr.", "Nelson Mandela", "Mother Teresa", "Carl Jung"],
    compatibility: ["ENTP", "ENFP"]
  },
  INFP: {
    title: "Mediator",
    motto: "Poetic, kind, and altruistic person, always eager to help a good cause.",
    overview: "INFPs are imaginative idealists, guided by their core values and beliefs.",
    strengths: ["Empathetic", "Generous", "Open-Minded", "Creative & Expressive"],
    weaknesses: ["Unrealistic", "Self-Isolating", "Unfocused", "Emotionally Vulnerable"],
    careers: ["Writer / Journalist", "Art Director", "Social Worker", "Environmental Specialist"],
    famous: ["William Shakespeare", "J.R.R. Tolkien", "Vincent van Gogh", "Keanu Reeves"],
    compatibility: ["ENFJ", "ENTJ"]
  },
  ENFJ: {
    title: "Protagonist",
    motto: "Charismatic and inspiring leader, able to mesmerize listeners.",
    overview: "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity.",
    strengths: ["Receptive", "Reliable", "Passionate", "Natural Leaders"],
    weaknesses: ["Overly Idealistic", "Too Selfless", "Overly Sensitive", "Fluctuating Self-Esteem"],
    careers: ["Nonprofit Director", "Public Relations Specialist", "Teacher", "Executive Coach"],
    famous: ["Barack Obama", "Oprah Winfrey", "Maya Angelou", "Ben Affleck"],
    compatibility: ["INFP", "ISFP"]
  },
  ENFP: {
    title: "Campaigner",
    motto: "Enthusiastic, creative, and sociable free spirit.",
    overview: "ENFPs are people-centered creators, motivated by possibilities and enthusiastic energy.",
    strengths: ["Curious", "Perceptive", "Enthusiastic", "Excellent Communicators"],
    weaknesses: ["People-Pleaser", "Unfocused", "Disorganized", "Overly Optimistic"],
    careers: ["Brand Strategist", "Creative Writer", "Event Planner", "Marketing Manager"],
    famous: ["Robin Williams", "Mark Twain", "Robert Downey Jr.", "Quentin Tarantino"],
    compatibility: ["INTJ", "INFJ"]
  },
  ISTJ: {
    title: "Logistician",
    motto: "Practical and fact-minded individual, whose reliability cannot be doubted.",
    overview: "ISTJs are responsible organizers, driven to create order and stability.",
    strengths: ["Honest & Direct", "Strong-Willed & Dutiful", "Very Responsible", "Calm & Practical"],
    weaknesses: ["Stubborn", "Insensitive", "Always by the Book", "Often Unreasonably Blame Themselves"],
    careers: ["Auditor / Accountant", "Chief Financial Officer", "Judge", "Supply Chain Director"],
    famous: ["George Washington", "Warren Buffett", "Angela Merkel", "Henry Ford"],
    compatibility: ["ESFP", "ESTP"]
  },
  ISFJ: {
    title: "Defender",
    motto: "Very dedicated and warm protector, always ready to defend loved ones.",
    overview: "ISFJs are industrious caretakers, loyal to traditions and devoted to supporting others.",
    strengths: ["Supportive", "Reliable & Patient", "Imaginative & Observant", "Enthusiastic"],
    weaknesses: ["Overly Humble", "Takes Things Personally", "Represses Feelings", "Overcommitted"],
    careers: ["Nurse Specialist", "Elementary Teacher", "Human Resources Manager", "Librarian"],
    famous: ["Queen Elizabeth II", "Beyoncé", "Kate Middleton", "Mother Teresa"],
    compatibility: ["ESFJ", "ESTJ"]
  },
  ESTJ: {
    title: "Executive",
    motto: "Excellent administrator, unsurpassed at managing things – or people.",
    overview: "ESTJs are traditional organizers, eager to take charge and structure projects.",
    strengths: ["Dedicated", "Strong-Willed", "Direct & Honest", "Loyal & Reliable"],
    weaknesses: ["Inflexible & Stubborn", "Uncomfortable with Unconventional Situations", "Judgmental"],
    careers: ["Operations Manager", "Project Director", "Judge", "Police Officer / Commander"],
    famous: ["Frank Sinatra", "Sonia Sotomayor", "James Monroe", "Lyndon B. Johnson"],
    compatibility: ["ISFP", "INFP"]
  },
  ESFJ: {
    title: "Consul",
    motto: "Extraordinarily caring, social, and popular person.",
    overview: "ESFJs are eager helpers, sensitive to the needs of others and dedicated to harmony.",
    strengths: ["Strong Practical Skills", "Strong Sense of Duty", "Very Loyal", "Sensitive & Warm"],
    weaknesses: ["Inflexible", "Vulnerable to Criticism", "Often Too Needy", "Too Selfless"],
    careers: ["Event Coordinator", "Healthcare Administrator", "Public Relations Lead", "Sales Director"],
    famous: ["Taylor Swift", "Jennifer Garner", "Bill Clinton", "Steve Harvey"],
    compatibility: ["ISFJ", "ISTJ"]
  },
  ISTP: {
    title: "Virtuoso",
    motto: "Bold and practical experimenter, master of all kinds of tools.",
    overview: "ISTPs are observant artisans, driven to master mechanics and practical craftsmanship.",
    strengths: ["Optimistic & Energetic", "Creative & Practical", "Spontaneous & Rational", "Great in a Crisis"],
    weaknesses: ["Stubborn", "Insensitive", "Private & Reserved", "Easily Bored"],
    careers: ["Mechanical Engineer", "Pilot", "Forensic Scientist", "Software Developer"],
    famous: ["Clint Eastwood", "Tom Cruise", "Michael Jordan", "Bear Grylls"],
    compatibility: ["ESTJ", "ESTJ"]
  },
  ISFP: {
    title: "Adventurer",
    motto: "Flexible and charming artist, always ready to explore something new.",
    overview: "ISFPs are gentle caretakers, driven by aesthetic sensitivity and personal values.",
    strengths: ["Charming", "Sensitive to Others", "Imaginative", "Passionate & Curious"],
    weaknesses: ["Fiercely Independent", "Unpredictable", "Easily Stressed", "Overly Competitive"],
    careers: ["Graphic Designer", "Fashion Stylist", "Landscape Architect", "Photographer"],
    famous: ["Michael Jackson", "Frida Kahlo", "Britney Spears", "Lana Del Rey"],
    compatibility: ["ENFJ", "ESFJ"]
  },
  ESTP: {
    title: "Entrepreneur",
    motto: "Smart, energetic, and perceptive person, who truly enjoys living on the edge.",
    overview: "ESTPs are energetic thrill-seekers, driven to solve problems in dynamic environments.",
    strengths: ["Bold", "Rational & Practical", "Original", "Perceptive & Direct"],
    weaknesses: ["Insensitive", "Impatient", "Risk-Prone", "Misses the Bigger Picture"],
    careers: ["Startup Founder", "Stock Broker", "Emergency Paramedic", "Real Estate Developer"],
    famous: ["Ernest Hemingway", "Madonna", "Donald Trump", "Jack Nicholson"],
    compatibility: ["ISFJ", "ISTJ"]
  },
  ESFP: {
    title: "Entertainer",
    motto: "Spontaneous, energetic, and enthusiastic entertainer – life is never boring.",
    overview: "ESFPs are vibrant performers, driven to bring joy and energy to every interaction.",
    strengths: ["Bold", "Original", "Aesthetic & Showmanship", "Practical & Perceptive"],
    weaknesses: ["Sensitive", "Conflict-Averse", "Easily Bored", "Poor Long-Term Planner"],
    careers: ["Actor / Performer", "Event Host", "Publicist", "Fitness Instructor"],
    famous: ["Marilyn Monroe", "Elton John", "Adele", "Will Smith"],
    compatibility: ["ISTJ", "ISFJ"]
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
