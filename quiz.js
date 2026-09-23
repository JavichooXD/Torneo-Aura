// ============================================================
// CONCURSO DÍA DE LA PRIMAVERA 2026 – TORNEO AURA
// 50 Preguntas de Cultura General con Temporizador y Opciones
// ============================================================

const RAW_QUESTIONS = [
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

// Configuration
const SECONDS_PER_QUESTION = 30;
const TOTAL_QUESTIONS_COUNT = RAW_QUESTIONS.length;

// Game State
let gameState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  timerInterval: null,
  secondsLeft: SECONDS_PER_QUESTION,
  hasAnswered: false,
  answersRecord: [],
  quizStartTime: null,
  soundEnabled: true
};

// Web Audio API Synthesizer (Zero Dependencies)
let audioCtx = null;
function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
  if (!gameState.soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may fail if blocked by browser policy
  }
}

function playCorrectSound() {
  if (!gameState.soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  } catch (e) {}
}

function playWrongSound() {
  if (!gameState.soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.35);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  } catch (e) {}
}

function playTimerTick() {
  playTone(880, 'sine', 0.04, 0.02);
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// Prepare Questions with Shuffled Options
function prepareQuizData() {
  return shuffleArray(RAW_QUESTIONS).map(q => ({
    ...q,
    shuffledOptions: shuffleArray([q.correct, ...q.wrong])
  }));
}

// Timer Functions
function startCountdownTimer() {
  clearInterval(gameState.timerInterval);
  gameState.secondsLeft = SECONDS_PER_QUESTION;
  updateTimerGraphics();

  gameState.timerInterval = setInterval(() => {
    gameState.secondsLeft--;
    updateTimerGraphics();

    if (gameState.secondsLeft <= 5 && gameState.secondsLeft > 0) {
      playTimerTick();
    }

    if (gameState.secondsLeft <= 0) {
      clearInterval(gameState.timerInterval);
      if (!gameState.hasAnswered) {
        handleTimeExpiration();
      }
    }
  }, 1000);
}

function updateTimerGraphics() {
  const numberEl = document.getElementById('timer-seconds-count');
  const ringEl = document.getElementById('timer-svg-progress');
  const boxEl = document.getElementById('timer-container-box');

  if (numberEl) numberEl.textContent = gameState.secondsLeft;

  const pct = gameState.secondsLeft / SECONDS_PER_QUESTION;
  const circumference = 2 * Math.PI * 36; // ~226.19
  const offset = circumference * (1 - pct);

  if (ringEl) {
    ringEl.style.strokeDashoffset = offset;
  }

  if (boxEl) {
    boxEl.classList.remove('timer-warning', 'timer-danger');
    if (gameState.secondsLeft <= 7) {
      boxEl.classList.add('timer-danger');
    } else if (gameState.secondsLeft <= 15) {
      boxEl.classList.add('timer-warning');
    }
  }
}

function handleTimeExpiration() {
  gameState.hasAnswered = true;
  playWrongSound();

  const currentQ = gameState.questions[gameState.currentIndex];
  gameState.answersRecord.push({
    questionId: currentQ.id,
    isCorrect: false,
    selected: null,
    reason: 'timeout'
  });

  highlightAnswers(currentQ.correct, null);
  setFeedbackBanner('⏰ ¡Tiempo agotado!', 'feedback-timeout');
  advanceToNextQuestionWithDelay();
}

// Question Rendering
function displayCurrentQuestion() {
  const q = gameState.questions[gameState.currentIndex];
  gameState.hasAnswered = false;

  // Update progress
  const progressFill = document.getElementById('quiz-progress-fill');
  const progressText = document.getElementById('progress-counter-text');
  const progressPct = document.getElementById('progress-percent-val');
  const scoreBadge = document.getElementById('current-score-text');

  const currentIndexNumber = gameState.currentIndex + 1;
  const pctValue = Math.round(((currentIndexNumber - 1) / TOTAL_QUESTIONS_COUNT) * 100);

  if (progressFill) progressFill.style.width = pctValue + '%';
  if (progressText) progressText.textContent = `Pregunta ${currentIndexNumber} de ${TOTAL_QUESTIONS_COUNT}`;
  if (progressPct) progressPct.textContent = `${pctValue}%`;
  if (scoreBadge) scoreBadge.textContent = `⭐ ${gameState.score}`;

  // Question Info
  const qIndexTag = document.getElementById('question-index-tag');
  const qText = document.getElementById('active-question-text');

  if (qIndexTag) qIndexTag.textContent = `Pregunta #${currentIndexNumber}`;
  if (qText) {
    qText.textContent = q.question;
    qText.style.animation = 'none';
    void qText.offsetWidth;
    qText.style.animation = 'fadeInQuestion 0.35s ease';
  }

  // Render Options
  const container = document.getElementById('answers-options-grid');
  if (container) {
    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.shuffledOptions.forEach((optionText, idx) => {
      const button = document.createElement('button');
      button.className = 'option-card-btn';
      button.dataset.answer = optionText;
      button.innerHTML = `
        <span class="option-badge-key">${letters[idx]}</span>
        <span class="option-label-text">${optionText}</span>
      `;
      button.addEventListener('click', () => handleOptionSelected(button, optionText, q.correct));
      container.appendChild(button);
    });
  }

  // Clear Feedback
  clearFeedbackBanner();

  // Start timer
  startCountdownTimer();
}

function handleOptionSelected(buttonEl, chosenAnswer, correctAnswer) {
  if (gameState.hasAnswered) return;
  gameState.hasAnswered = true;
  clearInterval(gameState.timerInterval);

  const isCorrect = chosenAnswer === correctAnswer;

  if (isCorrect) {
    gameState.score++;
    playCorrectSound();
    triggerConfettiParticles();
    setFeedbackBanner('🎉 ¡Respuesta Correcta! ¡Excelente!', 'feedback-correct');
  } else {
    playWrongSound();
    setFeedbackBanner('❌ ¡Incorrecto! Sigue adelante', 'feedback-wrong');
  }

  gameState.answersRecord.push({
    questionId: gameState.questions[gameState.currentIndex].id,
    isCorrect,
    selected: chosenAnswer
  });

  const scoreBadge = document.getElementById('current-score-text');
  if (scoreBadge) scoreBadge.textContent = `⭐ ${gameState.score}`;

  highlightAnswers(correctAnswer, chosenAnswer);
  advanceToNextQuestionWithDelay();
}

function highlightAnswers(correctAnswer, chosenAnswer) {
  const buttons = document.querySelectorAll('.option-card-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const value = btn.dataset.answer;
    if (value === correctAnswer) {
      btn.classList.add('state-correct');
    } else if (value === chosenAnswer) {
      btn.classList.add('state-wrong');
    }
  });
}

function setFeedbackBanner(message, cssClass) {
  const banner = document.getElementById('feedback-alert-banner');
  if (!banner) return;
  banner.textContent = message;
  banner.className = `feedback-banner show-feedback ${cssClass}`;
}

function clearFeedbackBanner() {
  const banner = document.getElementById('feedback-alert-banner');
  if (!banner) return;
  banner.textContent = '';
  banner.className = 'feedback-banner';
}

function advanceToNextQuestionWithDelay() {
  setTimeout(() => {
    gameState.currentIndex++;
    if (gameState.currentIndex >= TOTAL_QUESTIONS_COUNT) {
      renderResultsScreen();
    } else {
      displayCurrentQuestion();
    }
  }, 1600);
}

// Confetti Effect
function triggerConfettiParticles() {
  const container = document.getElementById('confetti-canvas-container');
  if (!container) return;
  const colors = ['#f472b6', '#a855f7', '#38bdf8', '#34d399', '#facc15', '#fb7185'];

  for (let i = 0; i < 35; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = (Math.random() * 8 + 6) + 'px';
    confetti.style.height = (Math.random() * 12 + 8) + 'px';
    confetti.style.animationDuration = (Math.random() * 1.2 + 0.8) + 's';
    confetti.style.animationDelay = (Math.random() * 0.2) + 's';
    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2200);
  }
}

// Results Calculation
function renderResultsScreen() {
  clearInterval(gameState.timerInterval);

  const totalTimeSeconds = Math.max(1, Math.round((Date.now() - gameState.quizStartTime) / 1000));
  const minutes = Math.floor(totalTimeSeconds / 60);
  const seconds = totalTimeSeconds % 60;
  const timeString = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  const percentage = Math.round((gameState.score / TOTAL_QUESTIONS_COUNT) * 100);

  let medal = '🥉';
  let rankTitle = '¡Gran Esfuerzo!';
  if (percentage >= 90) {
    medal = '🏆';
    rankTitle = '¡Gran Maestro de la Cultura!';
  } else if (percentage >= 75) {
    medal = '🥇';
    rankTitle = '¡Excelente Desempeño!';
  } else if (percentage >= 60) {
    medal = '🥈';
    rankTitle = '¡Muy Buen Nivel!';
  } else if (percentage >= 40) {
    medal = '🥉';
    rankTitle = '¡Buen Participante!';
  } else {
    medal = '📚';
    rankTitle = '¡A Seguir Practicando!';
  }

  // Update DOM elements
  document.getElementById('intro-view-section').classList.add('hidden');
  document.getElementById('quiz-view-section').classList.add('hidden');
  const resultsView = document.getElementById('results-view-section');
  resultsView.classList.remove('hidden');

  document.getElementById('final-medal-icon').textContent = medal;
  document.getElementById('final-rank-name').textContent = rankTitle;
  document.getElementById('final-time-text').textContent = `⏱️ Tiempo total empleado: ${timeString}`;
  document.getElementById('final-score-counter').textContent = gameState.score;
  document.getElementById('final-max-score').textContent = `de ${TOTAL_QUESTIONS_COUNT} (${percentage}%)`;

  const correctCount = gameState.answersRecord.filter(a => a.isCorrect).length;
  const wrongCount = gameState.answersRecord.filter(a => !a.isCorrect && a.reason !== 'timeout').length;
  const timeoutCount = gameState.answersRecord.filter(a => a.reason === 'timeout').length;

  document.getElementById('stat-metric-correct').textContent = correctCount;
  document.getElementById('stat-metric-wrong').textContent = wrongCount;
  document.getElementById('stat-metric-timeout').textContent = timeoutCount;

  // Fireworks if high score
  if (percentage >= 60) {
    triggerConfettiParticles();
    setTimeout(triggerConfettiParticles, 600);
    setTimeout(triggerConfettiParticles, 1200);
  }
}

// Navigation & Screen Switcher
function showSection(sectionId) {
  ['intro-view-section', 'quiz-view-section', 'results-view-section'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.remove('hidden');
}

function launchQuiz() {
  initAudio();
  gameState.questions = prepareQuizData();
  gameState.currentIndex = 0;
  gameState.score = 0;
  gameState.answersRecord = [];
  gameState.quizStartTime = Date.now();

  showSection('quiz-view-section');
  displayCurrentQuestion();
}

function showToastNotification(text) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show-toast');
  setTimeout(() => toast.classList.remove('show-toast'), 2500);
}

function copyResultsToClipboard() {
  const percentage = Math.round((gameState.score / TOTAL_QUESTIONS_COUNT) * 100);
  const text = `🌸 Concurso Día de la Primavera 2026 - Torneo Aura\n🏆 Mi Puntuación: ${gameState.score}/${TOTAL_QUESTIONS_COUNT} (${percentage}%)\n¿Te animas a superarme?`;
  navigator.clipboard.writeText(text).then(() => {
    showToastNotification('✅ ¡Resultado copiado al portapapeles!');
  }).catch(() => {
    showToastNotification('Resultado: ' + text);
  });
}

// Keyboard navigation (1-4 or A-D)
document.addEventListener('keydown', (e) => {
  const quizSection = document.getElementById('quiz-view-section');
  if (!quizSection || quizSection.classList.contains('hidden') || gameState.hasAnswered) return;

  const keyMap = {
    '1': 0, 'a': 0, 'A': 0,
    '2': 1, 'b': 1, 'B': 1,
    '3': 2, 'c': 2, 'C': 2,
    '4': 3, 'd': 3, 'D': 3
  };

  if (keyMap[e.key] !== undefined) {
    const buttons = document.querySelectorAll('.option-card-btn');
    const targetBtn = buttons[keyMap[e.key]];
    if (targetBtn) {
      targetBtn.click();
    }
  }
});

// Sound Toggle
function toggleSound() {
  gameState.soundEnabled = !gameState.soundEnabled;
  const btn = document.getElementById('sound-toggle-btn');
  if (btn) {
    btn.textContent = gameState.soundEnabled ? '🔊' : '🔇';
    btn.title = gameState.soundEnabled ? 'Silenciar sonido' : 'Activar sonido';
  }
}

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-quiz-cta-btn');
  if (startBtn) startBtn.addEventListener('click', launchQuiz);

  const restartBtn = document.getElementById('restart-quiz-btn');
  if (restartBtn) restartBtn.addEventListener('click', launchQuiz);

  const shareBtn = document.getElementById('share-results-btn');
  if (shareBtn) shareBtn.addEventListener('click', copyResultsToClipboard);

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) soundBtn.addEventListener('click', toggleSound);
});
