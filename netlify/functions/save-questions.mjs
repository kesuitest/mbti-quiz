import { getStore } from "@netlify/blobs";

const ADMIN_PASSWORD = "mewmewdog";

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await req.json();
    const { questions, reset, password } = body;
    const authHeader = req.headers.get("x-admin-password");

    const providedPassword = password || authHeader;

    if (providedPassword !== ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Unauthorized: Invalid admin password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    const store = getStore("mbti-config");

    if (reset) {
      await store.delete("questions");
      return new Response(JSON.stringify({ success: true, reset: true, message: "Questions reset to default set." }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      return new Response(JSON.stringify({ error: "Questions must be a non-empty array." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const formattedQuestions = questions.map((q, index) => ({
      id: index + 1,
      dim: q.dim || 'EI',
      text: q.text || `Question ${index + 1}`,
      options: q.options || []
    }));

    await store.setJSON("questions", formattedQuestions);

    return new Response(JSON.stringify({
      success: true,
      questions: formattedQuestions,
      total: formattedQuestions.length,
      message: "Questions updated successfully in Netlify Blobs!"
    }), {
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
