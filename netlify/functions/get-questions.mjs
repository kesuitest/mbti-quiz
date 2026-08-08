import { getStore } from "@netlify/blobs";

const DEFAULT_QUESTIONS = [
  {
    id: 1,
    dim: 'EI',
    text: "At social gatherings or networking events, how do you feel after interacting with many people?",
    options: [
      { text: "Energized and inspired to keep socializing", value: { E: 2, I: 0 } },
      { text: "Slightly energized, but ready for a quiet chat", value: { E: 1, I: 0 } },
      { text: "A bit drained, needing quiet time to recharge", value: { E: 0, I: 1 } },
      { text: "Completely exhausted, wanting immediate alone time", value: { E: 0, I: 2 } }
    ]
  },
  {
    id: 2,
    dim: 'SN',
    text: "When taking on a new project or problem, what attracts your focus first?",
    options: [
      { text: "Concrete facts, immediate details, and proven methods", value: { S: 2, N: 0 } },
      { text: "Practical reality with a touch of theoretical ideas", value: { S: 1, N: 0 } },
      { text: "Future possibilities and underlying conceptual patterns", value: { S: 0, N: 1 } },
      { text: "Big picture vision, abstract theories, and radical innovation", value: { S: 0, N: 2 } }
    ]
  },
  {
    id: 3,
    dim: 'TF',
    text: "When making tough decisions that affect others, what guides your final choice?",
    options: [
      { text: "Strict objective logic, fairness, and data analysis", value: { T: 2, F: 0 } },
      { text: "Rational reasoning with consideration for feelings", value: { T: 1, F: 0 } },
      { text: "Empathy, personal values, and group harmony", value: { T: 0, F: 1 } },
      { text: "Deep compassionate intuition for how individuals will feel", value: { T: 0, F: 2 } }
    ]
  },
  {
    id: 4,
    dim: 'JP',
    text: "How do you prefer to manage your daily life and schedules?",
    options: [
      { text: "Detailed plans, strict checklists, and structured routines", value: { J: 2, P: 0 } },
      { text: "General organization with room for minor shifts", value: { J: 1, P: 0 } },
      { text: "Spontaneous flow, keeping options open until the last minute", value: { J: 0, P: 1 } },
      { text: "Complete adaptability, avoiding rigid schedules", value: { J: 0, P: 2 } }
    ]
  },
  {
    id: 5,
    dim: 'EI',
    text: "In group conversations, do you tend to speak out ideas as they come or process quietly beforehand?",
    options: [
      { text: "Think out loud, sharing thoughts instantly as they form", value: { E: 2, I: 0 } },
      { text: "Rehearse thoughts internally first before speaking", value: { E: 0, I: 2 } }
    ]
  },
  {
    id: 6,
    dim: 'SN',
    text: "Which description best fits your reading or learning preference?",
    options: [
      { text: "Real-world stories, step-by-step guides, and historical facts", value: { S: 2, N: 0 } },
      { text: "Speculative fiction, metaphors, and grand philosophical ideas", value: { S: 0, N: 2 } }
    ]
  },
  {
    id: 7,
    dim: 'TF',
    text: "If a friend presents a flawed plan, what is your instinctual reaction?",
    options: [
      { text: "Point out the logical oversights directly so they can fix it", value: { T: 2, F: 0 } },
      { text: "Offer encouragement first and gently suggest alternative ideas", value: { T: 0, F: 2 } }
    ]
  },
  {
    id: 8,
    dim: 'JP',
    text: "How do you handle deadlines and major assignments?",
    options: [
      { text: "Finish early to avoid stress and ensure quality", value: { J: 2, P: 0 } },
      { text: "Work best under pressure in a burst of last-minute energy", value: { J: 0, P: 2 } }
    ]
  },
  {
    id: 9,
    dim: 'EI',
    text: "Where do you prefer to spend a free weekend afternoon?",
    options: [
      { text: "Exploring a bustling city event or party with friends", value: { E: 2, I: 0 } },
      { text: "Relaxing at home with a favorite book, movie, or solo hobby", value: { E: 0, I: 2 } }
    ]
  },
  {
    id: 10,
    dim: 'SN',
    text: "When learning a complex subject, do you prefer step-by-step instructions or seeing the big picture first?",
    options: [
      { text: "Step-by-step practical examples first", value: { S: 2, N: 0 } },
      { text: "Overall theoretical framework first", value: { S: 0, N: 2 } }
    ]
  },
  {
    id: 11,
    dim: 'TF',
    text: "What brings you a stronger sense of accomplishment?",
    options: [
      { text: "Building an efficient, perfectly optimized system", value: { T: 2, F: 0 } },
      { text: "Helping someone feel understood, supported, and happy", value: { T: 0, F: 2 } }
    ]
  },
  {
    id: 12,
    dim: 'JP',
    text: "When packing for a vacation, how prepared are you?",
    options: [
      { text: "Everything itemized, labeled, and planned per day", value: { J: 2, P: 0 } },
      { text: "Toss essentials into a bag and figure the rest out on arrival", value: { J: 0, P: 2 } }
    ]
  }
];

export default async (req, context) => {
  let questions = DEFAULT_QUESTIONS;
  let isCustom = false;

  try {
    const store = getStore("mbti-config");
    const customData = await store.get("questions", { type: "json" });
    if (customData && Array.isArray(customData) && customData.length > 0) {
      questions = customData;
      isCustom = true;
    }
  } catch (err) {
    console.warn("Netlify Blobs questions lookup fallback:", err.message);
  }

  return new Response(JSON.stringify({ questions, isCustom, total: questions.length }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
