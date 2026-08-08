
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

    let QUESTIONS = DEFAULT_QUESTIONS;

    async function initQuiz() {
      renderAllQuestions();
      try {
        const res = await fetch('/api/get-questions');
        if (res.ok) {
          const data = await res.json();
          if (data.questions && data.questions.length > 0) {
            QUESTIONS = data.questions;
            renderAllQuestions();
          }
        }
      } catch (err) {
        console.warn('Using default static questions fallback:', err);
      }
    }

    const userAnswers = {}; // qIndex -> optionIndex

    const questionsContainer = document.getElementById('questions-list-container');
    const answeredStatus = document.getElementById('answered-status');
    const questionsLeftStatus = document.getElementById('questions-left-status');
    const progressBar = document.getElementById('progress-bar');
    const unansweredWarning = document.getElementById('unanswered-warning');
    const btnSubmitAll = document.getElementById('btn-submit-all');

    function renderAllQuestions() {
      if (!QUESTIONS || QUESTIONS.length === 0) return;
      questionsContainer.innerHTML = '';

      QUESTIONS.forEach((q, qIdx) => {
        const card = document.createElement('main');
        card.className = 'quiz-card';
        card.id = `q-card-${qIdx}`;
        card.style.transition = 'all 0.3s ease';

        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
          const isSelected = userAnswers[qIdx] === optIdx;
          optionsHtml += `
            <button type="button" class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectOption(${qIdx}, ${optIdx})">
              <span>${opt.text}</span>
              <span class="radio-circle"></span>
            </button>
          `;
        });

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="font-family: 'Space Mono', monospace; font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">QUESTION ${qIdx + 1} OF ${QUESTIONS.length}</span>
            <span id="q-tag-${qIdx}" style="font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${userAnswers[qIdx] !== undefined ? '✓ Answered' : 'Pending'}</span>
          </div>
          <h2 class="question-title" style="margin-bottom: 1.5rem;">${qIdx + 1}. ${q.text}</h2>
          <div class="options-grid" id="options-grid-${qIdx}">
            ${optionsHtml}
          </div>
        `;

        questionsContainer.appendChild(card);
      });

      updateProgress();
    }

    function selectOption(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      
      const grid = document.getElementById(`options-grid-${qIdx}`);
      if (grid) {
        const allBtns = grid.querySelectorAll('.option-btn');
        allBtns.forEach((b, i) => {
          if (i === optIdx) b.classList.add('selected');
          else b.classList.remove('selected');
        });
      }

      const qCard = document.getElementById(`q-card-${qIdx}`);
      if (qCard) {
        qCard.style.borderColor = 'var(--card-border)';
      }

      const qTag = document.getElementById(`q-tag-${qIdx}`);
      if (qTag) {
        qTag.textContent = '✓ Answered';
        qTag.style.color = '#10b981';
      }

      unansweredWarning.style.display = 'none';
      updateProgress();
    }

    function updateProgress() {
      const total = QUESTIONS.length;
      const answeredCount = Object.keys(userAnswers).length;
      const remaining = total - answeredCount;
      const percent = Math.round((answeredCount / total) * 100);

      answeredStatus.textContent = `${answeredCount} OF ${total} ANSWERED`;
      if (remaining === 0) {
        questionsLeftStatus.textContent = `ALL QUESTIONS COMPLETE! 🎉`;
        questionsLeftStatus.style.color = '#10b981';
      } else if (remaining === 1) {
        questionsLeftStatus.textContent = `1 QUESTION REMAINING`;
        questionsLeftStatus.style.color = 'var(--primary)';
      } else {
        questionsLeftStatus.textContent = `${remaining} QUESTIONS REMAINING`;
        questionsLeftStatus.style.color = 'var(--primary)';
      }

      progressBar.style.width = `${percent}%`;
    }

    btnSubmitAll.onclick = async () => {
      const answeredCount = Object.keys(userAnswers).length;
      if (answeredCount < QUESTIONS.length) {
        unansweredWarning.style.display = 'block';
        
        // Highlight first unanswered question
        for (let i = 0; i < QUESTIONS.length; i++) {
          if (userAnswers[i] === undefined) {
            const card = document.getElementById(`q-card-${i}`);
            if (card) {
              card.style.borderColor = '#e63946';
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            break;
          }
        }
        return;
      }

      // Calculate dimension scores
      const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      Object.keys(userAnswers).forEach(qIdx => {
        const optSelected = QUESTIONS[qIdx].options[userAnswers[qIdx]];
        if (optSelected && optSelected.value) {
          Object.keys(optSelected.value).forEach(k => {
            scores[k] += optSelected.value[k];
          });
        }
      });

      btnSubmitAll.disabled = true;
      btnSubmitAll.innerHTML = `<span class="spinner"></span> ANALYZING PERSONALITY ARCHETYPE...`;

      try {
        const res = await fetch('/api/submit-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: scores })
        });

        const data = await res.json();
        if (data.resultId) {
          window.location.href = `/results.html?id=${data.resultId}`;
        } else if (data.type) {
          window.location.href = `/results.html?type=${data.type}`;
        } else {
          throw new Error('Invalid response structure');
        }
      } catch (err) {
        console.warn('Backend API submission fallback:', err.message);
        const type = [
          scores.E >= scores.I ? "E" : "I",
          scores.N >= scores.S ? "N" : "S",
          scores.T >= scores.F ? "T" : "F",
          scores.J >= scores.P ? "J" : "P"
        ].join("");
        window.location.href = `/results.html?type=${type}`;
      }
    };

    function startQuiz() {
      const hero = document.getElementById('landing-hero');
      const section = document.getElementById('quiz-section');
      if (hero) hero.style.display = 'none';
      if (section) section.style.display = 'block';
      renderAllQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.startQuiz = startQuiz;

    initQuiz();
  