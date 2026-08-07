import { getStore } from "@netlify/blobs";

const PERSONALITY_DETAILS = {
  INTJ: { title: "Architect", motto: "Strategic, logical, and independent mindset." },
  INTP: { title: "Logician", motto: "Innovative inventor with an unquenchable thirst for knowledge." },
  ENTJ: { title: "Commander", motto: "Bold, imaginative, and strong-willed leader." },
  ENTP: { title: "Debater", motto: "Smart and curious thinker who cannot resist an intellectual challenge." },
  INFJ: { title: "Advocate", motto: "Quiet, mystical, yet inspiring and tireless idealist." },
  INFP: { title: "Mediator", motto: "Poetic, kind, and altruistic person, always eager to help a good cause." },
  ENFJ: { title: "Protagonist", motto: "Charismatic and inspiring leader, able to mesmerize listeners." },
  ENFP: { title: "Campaigner", motto: "Enthusiastic, creative, and sociable free spirit." },
  ISTJ: { title: "Logistician", motto: "Practical and fact-minded individual, whose reliability cannot be doubted." },
  ISFJ: { title: "Defender", motto: "Very dedicated and warm protector, always ready to defend loved ones." },
  ESTJ: { title: "Executive", motto: "Excellent administrator, unsurpassed at managing things – or people." },
  ESFJ: { title: "Consul", motto: "Extraordinarily caring, social, and popular person." },
  ISTP: { title: "Virtuoso", motto: "Bold and practical experimenter, master of all kinds of tools." },
  ISFP: { title: "Adventurer", motto: "Flexible and charming artist, always ready to explore something new." },
  ESTP: { title: "Entrepreneur", motto: "Smart, energetic, and perceptive person, who truly enjoys living on the edge." },
  ESFP: { title: "Entertainer", motto: "Spontaneous, energetic, and enthusiastic entertainer – life is never boring." }
};

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await req.json();
    const { answers } = body;

    let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    if (answers && typeof answers === "object") {
      Object.keys(answers).forEach((key) => {
        if (scores.hasOwnProperty(key)) {
          scores[key] += Number(answers[key]) || 0;
        }
      });
    }

    const totalEI = (scores.E + scores.I) || 1;
    const totalSN = (scores.S + scores.N) || 1;
    const totalTF = (scores.T + scores.F) || 1;
    const totalJP = (scores.J + scores.P) || 1;

    const E_pct = Math.round((scores.E / totalEI) * 100);
    const I_pct = 100 - E_pct;

    const S_pct = Math.round((scores.S / totalSN) * 100);
    const N_pct = 100 - S_pct;

    const T_pct = Math.round((scores.T / totalTF) * 100);
    const F_pct = 100 - T_pct;

    const J_pct = Math.round((scores.J / totalJP) * 100);
    const P_pct = 100 - J_pct;

    const type = [
      scores.E >= scores.I ? "E" : "I",
      scores.N >= scores.S ? "N" : "S",
      scores.T >= scores.F ? "T" : "F",
      scores.J >= scores.P ? "J" : "P"
    ].join("");

    const resultId = crypto.randomUUID();
    const meta = PERSONALITY_DETAILS[type] || { title: "Explorer", motto: "Unique and multifaceted personality." };

    const resultPayload = {
      id: resultId,
      type,
      title: meta.title,
      motto: meta.motto,
      createdAt: new Date().toISOString(),
      percentages: {
        E: E_pct, I: I_pct,
        S: S_pct, N: N_pct,
        T: T_pct, F: F_pct,
        J: J_pct, P: P_pct
      },
      scores
    };

    // Store in Netlify Blobs store 'mbti-results'
    try {
      const store = getStore("mbti-results");
      await store.setJSON(resultId, resultPayload);
    } catch (blobErr) {
      console.warn("Netlify Blobs storage fallback / warning:", blobErr.message);
    }

    return new Response(JSON.stringify({ resultId, type, result: resultPayload }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
