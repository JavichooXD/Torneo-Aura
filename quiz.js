// ============================================================
// CONCURSO DÍA DE LA PRIMAVERA 2026 – Quiz de Cultura General
// ============================================================

const QUESTIONS_DATA = [
  {
    id: 1,
    question: "¿Cuál es el río más largo del mundo?",
    correct: "El Amazonas",
    wrong: ["El Nilo", "El Yangtsé", "El Mississippi"]
  },
  {
    id: 2,
    question: "¿Cuál es el océano más grande del mundo?",
    correct: "Océano Pacífico",
    wrong: ["Océano Atlántico", "Océano Índico", "Océano Ártico"]
  },
  {
    id: 3,
    question: "¿Quién pintó la Mona Lisa?",
    correct: "Leonardo da Vinci",
    wrong: ["Miguel Ángel", "Rafael Sanzio", "Sandro Botticelli"]
  },
  {
    id: 4,
    question: "¿Cuál es el animal terrestre más grande?",
    correct: "Elefante africano",
    wrong: ["Jirafa", "Rinoceronte blanco", "Hipopótamo"]
  },
  {
    id: 5,
    question: "¿Qué instrumento mide la temperatura?",
    correct: "Termómetro",
    wrong: ["Barómetro", "Higrómetro", "Anemómetro"]
  },
  {
    id: 6,
    question: "¿Qué país tiene forma de bota?",
    correct: "Italia",
    wrong: ["España", "Grecia", "Portugal"]
  },
  {
    id: 7,
    question: "¿Cuál es la lengua oficial de Brasil?",
    correct: "Portugués",
    wrong: ["Español", "Inglés", "Guaraní"]
  },
  {
    id: 8,
    question: "¿Cuál es el país donde se originó el tango?",
    correct: "Argentina",
    wrong: ["Uruguay", "Brasil", "Cuba"]
  },
  {
    id: 9,
    question: "¿Cuál es el planeta más cercano al Sol?",
    correct: "Mercurio",
    wrong: ["Venus", "Marte", "Tierra"]
  },
  {
    id: 10,
    question: "¿Qué colores tiene la bandera de México?",
    correct: "Verde, blanco y rojo",
    wrong: ["Azul, blanco y rojo", "Verde, amarillo y rojo", "Rojo, blanco y verde"]
  },
  {
    id: 11,
    question: "¿Quién descubrió América en 1492?",
    correct: "Cristóbal Colón",
    wrong: ["Américo Vespucio", "Fernando Magallanes", "Juan de la Cosa"]
  },
  {
    id: 12,
    question: "¿Qué animal es conocido como el rey de la selva?",
    correct: "León",
    wrong: ["Tigre", "Leopardo", "Jaguar"]
  },
  {
    id: 13,
    question: "¿En qué continente está Egipto?",
    correct: "África",
    wrong: ["Asia", "Europa", "Oriente Medio"]
  },
  {
    id: 14,
    question: "¿Quién fue el primer hombre en pisar la Luna?",
    correct: "Neil Armstrong",
    wrong: ["Buzz Aldrin", "Yuri Gagarin", "John Glenn"]
  },
  {
    id: 15,
    question: "¿Qué año inició la Primera Guerra Mundial?",
    correct: "1914",
    wrong: ["1918", "1939", "1905"]
  },
  {
    id: 16,
    question: "¿En qué país se encuentra la Torre de Pisa?",
    correct: "Italia",
    wrong: ["España", "Francia", "Portugal"]
  },
  {
    id: 17,
    question: "¿Cuál es el país más pequeño del mundo en territorio?",
    correct: "Ciudad del Vaticano",
    wrong: ["Mónaco", "San Marino", "Liechtenstein"]
  },
  {
    id: 18,
    question: "¿Quién fue el libertador de cinco países de América del Sur?",
    correct: "Simón Bolívar",
    wrong: ["José de San Martín", "Bernardo O'Higgins", "Antonio José de Sucre"]
  },
  {
    id: 19,
    question: "¿En qué año llegó Cristóbal Colón a América?",
    correct: "1492",
    wrong: ["1488", "1500", "1510"]
  },
  {
    id: 20,
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
    correct: "La piel",
    wrong: ["El hígado", "El corazón", "El pulmón"]
  },
  {
    id: 21,
    question: "¿Qué famoso científico formuló la teoría de la relatividad?",
    correct: "Albert Einstein",
    wrong: ["Isaac Newton", "Stephen Hawking", "Nikola Tesla"]
  },
  {
    id: 22,
    question: "¿Qué civilización construyó Machu Picchu?",
    correct: "Los Incas",
    wrong: ["Los Mayas", "Los Aztecas", "Los Olmecas"]
  },
  {
    id: 23,
    question: "¿Qué instrumento musical usaba Beethoven?",
    correct: "Piano",
    wrong: ["Violín", "Violonchelo", "Flauta"]
  },
  {
    id: 24,
    question: "¿Qué país es conocido como 'La tierra del sol naciente'?",
    correct: "Japón",
    wrong: ["China", "Corea del Sur", "Vietnam"]
  },
  {
    id: 25,
    question: "¿Qué escritor peruano ganó el Premio Nobel de Literatura en 2010?",
    correct: "Mario Vargas Llosa",
    wrong: ["Julio Cortázar", "Gabriel García Márquez", "Pablo Neruda"]
  },
  {
    id: 26,
    question: "¿Qué gas necesitan las plantas para realizar la fotosíntesis?",
    correct: "Dióxido de carbono",
    wrong: ["Oxígeno", "Nitrógeno", "Hidrógeno"]
  },
  {
    id: 27,
    question: "¿En qué país se encuentra la ciudad de Estambul?",
    correct: "Turquía",
    wrong: ["Grecia", "Siria", "Bulgaria"]
  },
  {
    id: 28,
    question: "¿Qué país inventó la pólvora?",
    correct: "China",
    wrong: ["India", "Persia", "Arabia"]
  },
  {
    id: 29,
    question: "¿Qué artista pintó el techo de la Capilla Sixtina?",
    correct: "Miguel Ángel",
    wrong: ["Leonardo da Vinci", "Rafael Sanzio", "Botticelli"]
  },
  {
    id: 30,
    question: "¿Qué rama de la biología estudia los animales?",
    correct: "Zoología",
    wrong: ["Botánica", "Ecología", "Entomología"]
  },
  {
    id: 31,
    question: "¿En qué continente se encuentra la Cordillera del Himalaya?",
    correct: "Asia",
    wrong: ["Europa", "América del Sur", "África"]
  },
  {
    id: 32,
    question: "¿Qué país ganó el Mundial de Fútbol en 2022?",
    correct: "Argentina",
    wrong: ["Francia", "Brasil", "Alemania"]
  },
  {
    id: 33,
    question: "¿Qué científico desarrolló la teoría heliocéntrica?",
    correct: "Nicolás Copérnico",
    wrong: ["Galileo Galilei", "Johannes Kepler", "Tycho Brahe"]
  },
  {
    id: 34,
    question: "¿Cuál es el metal más ligero de la tabla periódica?",
    correct: "Litio",
    wrong: ["Sodio", "Potasio", "Magnesio"]
  },
  {
    id: 35,
    question: "¿Qué escritor griego es considerado el autor de 'La Ilíada' y 'La Odisea'?",
    correct: "Homero",
    wrong: ["Sócrates", "Platón", "Aristóteles"]
  },
  {
    id: 36,
    question: "¿En qué ciudad se firmó la Declaración de Independencia de EE. UU.?",
    correct: "Filadelfia",
    wrong: ["Washington D.C.", "Nueva York", "Boston"]
  },
  {
    id: 37,
    question: "¿Qué país africano fue conocido antiguamente como Abisinia?",
    correct: "Etiopía",
    wrong: ["Somalia", "Eritrea", "Sudán"]
  },
  {
    id: 38,
    question: "¿Cómo se llama el fenómeno natural que produce la aurora boreal?",
    correct: "Interacción de partículas solares con la atmósfera",
    wrong: ["Refracción de la luz solar en los polos", "Efecto invernadero polar", "Reflexión de la luz en el hielo ártico"]
  },
  {
    id: 39,
    question: "¿Quién fue el primer emperador romano?",
    correct: "Augusto",
    wrong: ["Julio César", "Nerón", "Trajano"]
  },
  {
    id: 40,
    question: "¿Qué filósofo escribió 'La República'?",
    correct: "Platón",
    wrong: ["Sócrates", "Aristóteles", "Epicuro"]
  },
  {
    id: 41,
    question: "¿Qué pintor neerlandés es famoso por su obra 'La noche estrellada'?",
    correct: "Vincent van Gogh",
    wrong: ["Rembrandt van Rijn", "Johannes Vermeer", "Piet Mondrian"]
  },
  {
    id: 42,
    question: "¿Cuál es el elemento químico con símbolo Au?",
    correct: "Oro",
    wrong: ["Plata", "Platino", "Cobre"]
  },
  {
    id: 43,
    question: "¿En qué año cayó el Muro de Berlín?",
    correct: "1989",
    wrong: ["1991", "1985", "1993"]
  },
  {
    id: 44,
    question: "¿Quién fue la primera mujer en ganar dos premios Nobel?",
    correct: "Marie Curie",
    wrong: ["Rosalind Franklin", "Lise Meitner", "Dorothy Hodgkin"]
  },
  {
    id: 45,
    question: "¿Qué antigua ciudad fue destruida por la erupción del Vesubio?",
    correct: "Pompeya",
    wrong: ["Herculano", "Cartago", "Troya"]
  },
  {
    id: 46,
    question: "¿Qué obra literaria comienza con la frase 'En un lugar de la Mancha...'?",
    correct: "Don Quijote de la Mancha",
    wrong: ["El Quijote apócrifo", "La Celestina", "El Lazarillo de Tormes"]
  },
  {
    id: 47,
    question: "¿Qué civilización antigua usaba jeroglíficos?",
    correct: "La egipcia",
    wrong: ["La mesopotámica", "La griega", "La china"]
  },
  {
    id: 48,
    question: "¿Qué nave espacial llevó al hombre a la Luna en 1969?",
    correct: "Apolo 11",
    wrong: ["Apolo 13", "Soyuz 1", "Gemini 12"]
  },
  {
    id: 49,
    question: "¿En qué país se encuentran las ruinas de Petra?",
    correct: "Jordania",
    wrong: ["Israel", "Egipto", "Arabia Saudita"]
  },
  {
    id: 50,
    question: "¿Quién fue conocido como el 'sabio de Samos'?",
    correct: "Pitágoras",
    wrong: ["Tales de Mileto", "Arquímedes", "Euclides"]
  }
];

// ============================================================
// CONFIG
// ============================================================
const TIME_PER_QUESTION = 30; // segundos por pregunta
const TOTAL_QUESTIONS = QUESTIONS_DATA.length;

// ============================================================
// STATE
// ============================================================
let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  timer: null,
  timeLeft: TIME_PER_QUESTION,
  answered: false,
  answers: [], // {questionId, correct, selected}
  startTime: null,
};

// ============================================================
// UTILITY
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildOptions(q) {
  return shuffle([q.correct, ...q.wrong]);
}

function prepareQuestions() {
  return shuffle(QUESTIONS_DATA).map(q => ({
    ...q,
    options: buildOptions(q),
  }));
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = TIME_PER_QUESTION;
  updateTimerUI();

  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI();

    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      if (!state.answered) {
        timeUp();
      }
    }
  }, 1000);
}

function updateTimerUI() {
  const timerEl = document.getElementById('timer-value');
  const timerRing = document.getElementById('timer-ring');
  const timerContainer = document.getElementById('timer-container');

  if (!timerEl) return;
  timerEl.textContent = state.timeLeft;

  const pct = state.timeLeft / TIME_PER_QUESTION;
  const circumference = 2 * Math.PI * 36;
  const offset = circumference * (1 - pct);
  timerRing.style.strokeDashoffset = offset;

  // Color change
  timerContainer.classList.remove('warning', 'danger');
  if (pct <= 0.33) timerContainer.classList.add('danger');
  else if (pct <= 0.6) timerContainer.classList.add('warning');
}

function timeUp() {
  state.answered = true;
  state.answers.push({ questionId: state.questions[state.currentIndex].id, correct: false, selected: null });
  showCorrectAnswer();
  showTimeUpFeedback();
  scheduleNext();
}

// ============================================================
// RENDER
// ============================================================
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  state.answered = false;

  // Progress
  const progressEl = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const pct = ((state.currentIndex) / TOTAL_QUESTIONS) * 100;
  progressEl.style.width = pct + '%';
  const pctDisplay = Math.round(((state.currentIndex + 1) / TOTAL_QUESTIONS) * 100);
  const pctEl = document.getElementById('progress-pct');
  if (pctEl) pctEl.textContent = pctDisplay + '%';
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) progressBar.setAttribute('aria-valuenow', state.currentIndex + 1);
  progressText.textContent = `Pregunta ${state.currentIndex + 1} de ${TOTAL_QUESTIONS}`;

  // Score
  document.getElementById('score-display').textContent = `⭐ ${state.score}`;

  // Question text with slide-in animation
  const questionEl = document.getElementById('question-text');
  questionEl.classList.remove('slide-in');
  void questionEl.offsetWidth;
  questionEl.textContent = q.question;
  questionEl.classList.add('slide-in');

  // Question number badge
  document.getElementById('question-number').textContent = `#${state.currentIndex + 1}`;

  // Options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.value = opt;
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span class="option-text">${opt}</span>`;
    btn.style.animationDelay = `${i * 0.08}s`;
    btn.addEventListener('click', () => selectAnswer(btn, opt, q.correct));
    optionsContainer.appendChild(btn);
  });

  // Hide feedback
  const feedbackEl = document.getElementById('feedback-message');
  feedbackEl.className = 'feedback-message';
  feedbackEl.textContent = '';

  startTimer();
}

function selectAnswer(btn, selected, correct) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);

  const isCorrect = selected === correct;

  if (isCorrect) {
    state.score++;
    btn.classList.add('correct');
    showFeedback('¡Correcto! 🎉', 'correct');
    triggerConfetti();
  } else {
    btn.classList.add('wrong');
    showCorrectAnswer();
    showFeedback('¡Incorrecto! 😔', 'wrong');
  }

  state.answers.push({ questionId: state.questions[state.currentIndex].id, correct: isCorrect, selected });
  document.getElementById('score-display').textContent = `⭐ ${state.score}`;

  scheduleNext();
}

function showCorrectAnswer() {
  const q = state.questions[state.currentIndex];
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(btn => {
    if (btn.dataset.value === q.correct) {
      btn.classList.add('correct');
    }
    btn.disabled = true;
  });
}

function showFeedback(msg, type) {
  const el = document.getElementById('feedback-message');
  el.textContent = msg;
  el.className = `feedback-message show ${type}`;
}

function showTimeUpFeedback() {
  showFeedback('¡Tiempo agotado! ⏰', 'timeout');
}

function scheduleNext() {
  setTimeout(() => {
    state.currentIndex++;
    if (state.currentIndex >= TOTAL_QUESTIONS) {
      showResults();
    } else {
      renderQuestion();
    }
  }, 1800);
}

// ============================================================
// CONFETTI
// ============================================================
function triggerConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#c77dff', '#ff9a3c'];
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
    piece.style.animationDelay = Math.random() * 0.3 + 's';
    piece.style.width = piece.style.height = (Math.random() * 10 + 6) + 'px';
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 1500);
  }
}

// ============================================================
// RESULTS SCREEN
// ============================================================
function showResults() {
  clearInterval(state.timer);
  const elapsed = Math.round((Date.now() - state.startTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  const pct = Math.round((state.score / TOTAL_QUESTIONS) * 100);
  let medal = '🥉';
  let category = 'Participante';
  let categoryColor = '#cd7f32';
  if (pct >= 90) { medal = '🏆'; category = '¡Experto Total!'; categoryColor = '#ffd700'; }
  else if (pct >= 75) { medal = '🥇'; category = '¡Excelente!'; categoryColor = '#ffd700'; }
  else if (pct >= 60) { medal = '🥈'; category = '¡Muy Bien!'; categoryColor = '#c0c0c0'; }
  else if (pct >= 40) { medal = '🥉'; category = 'Bien hecho'; categoryColor = '#cd7f32'; }
  else { medal = '📚'; category = '¡Sigue Estudiando!'; categoryColor = '#888'; }

  document.getElementById('quiz-screen').classList.add('hidden');
  const resultsEl = document.getElementById('results-screen');
  resultsEl.classList.remove('hidden');

  document.getElementById('result-medal').textContent = medal;
  document.getElementById('result-score').textContent = `${state.score}`;
  document.getElementById('result-percentage').textContent = `${pct}%`;
  document.getElementById('result-category').textContent = category;
  document.getElementById('result-category').style.color = categoryColor;
  document.getElementById('result-time').textContent = `⏱️ Tiempo total: ${timeStr}`;

  // Animate score counter
  animateCounter('result-score-counter', 0, state.score, 1200);

  // Correct / Wrong / Skipped
  const correct = state.answers.filter(a => a.correct).length;
  const wrong = state.answers.filter(a => !a.correct && a.selected !== null).length;
  const skipped = state.answers.filter(a => a.selected === null).length;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-skipped').textContent = skipped;

  // Trigger fireworks if good score
  if (pct >= 60) {
    triggerFireworks();
  }
}

function animateCounter(id, from, to, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const step = (to - from) / (duration / 16);
  let current = from;
  const interval = setInterval(() => {
    current += step;
    if (current >= to) { current = to; clearInterval(interval); }
    el.textContent = Math.round(current);
  }, 16);
}

function triggerFireworks() {
  const container = document.getElementById('confetti-container');
  const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#c77dff', '#ff9a3c'];
  function burst() {
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.top = Math.random() * 40 + '%';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (Math.random() * 1.5 + 0.5) + 's';
      piece.style.width = piece.style.height = (Math.random() * 12 + 5) + 'px';
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 2000);
    }
  }
  burst();
  setTimeout(burst, 800);
  setTimeout(burst, 1600);
}

// ============================================================
// SCREENS
// ============================================================
function showScreen(id) {
  ['intro-screen', 'quiz-screen', 'results-screen'].forEach(s => {
    document.getElementById(s).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// ============================================================
// INIT
// ============================================================
function startQuiz() {
  state.questions = prepareQuestions();
  state.currentIndex = 0;
  state.score = 0;
  state.answers = [];
  state.startTime = Date.now();

  showScreen('quiz-screen');
  renderQuestion();
}

function restartQuiz() {
  startQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('restart-btn').addEventListener('click', restartQuiz);
});
