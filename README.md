# 🌸 Concurso Día de la Primavera 2026

> **Cuestionario de Cultura General** – Quiz interactivo con 50 preguntas, tiempo límite de 30 segundos, opciones múltiples y orden aleatorio.

---

## 🚀 Subir a GitHub y desplegar en Vercel

### Paso 1 – Inicializar repositorio Git

Abre una terminal en la carpeta `Torneo Aura` y ejecuta:

```bash
git init
git add .
git commit -m "feat: quiz concurso día de la primavera 2026"
```

### Paso 2 – Subir a GitHub

1. Ve a [github.com/new](https://github.com/new) y crea un nuevo repositorio (ej. `concurso-primavera-2026`).
2. Copia la URL del repositorio y ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/concurso-primavera-2026.git
git branch -M main
git push -u origin main
```

### Paso 3 – Desplegar en Vercel

**Opción A – Desde la web (más fácil):**
1. Ve a [vercel.com](https://vercel.com) e inicia sesión.
2. Haz clic en **"Add New Project"**.
3. Importa el repositorio de GitHub que acabas de crear.
4. Vercel detecta automáticamente que es un sitio estático.
5. Haz clic en **"Deploy"** — ¡listo!

**Opción B – Con CLI de Vercel:**
```bash
npm i -g vercel
vercel --prod
```

---

## 🎮 Características del Quiz

| Característica | Detalle |
|---|---|
| **Preguntas** | 50 de cultura general |
| **Opciones** | 4 por pregunta (A, B, C, D) |
| **Tiempo** | 30 segundos por pregunta |
| **Orden** | Aleatorio en cada partida |
| **Opciones** | También mezcladas aleatoriamente |
| **Tema** | Glassmorphism oscuro + primavera |
| **Animaciones** | Confeti, shake, slide-in, timer SVG |
| **Responsive** | Funciona en móvil y escritorio |

---

## 📁 Estructura de archivos

```
Torneo Aura/
├── index.html     ← Estructura HTML (intro, quiz, resultados)
├── styles.css     ← Diseño premium con animaciones
├── quiz.js        ← Lógica: preguntas, timer, puntuación, confeti
├── vercel.json    ← Configuración de deploy en Vercel
└── README.md      ← Este archivo
```

---

## 🏆 Sistema de medallas

| Puntuación | Medalla |
|---|---|
| 90% – 100% | 🏆 ¡Experto Total! |
| 75% – 89%  | 🥇 ¡Excelente! |
| 60% – 74%  | 🥈 ¡Muy Bien! |
| 40% – 59%  | 🥉 Bien hecho |
| 0% – 39%   | 📚 ¡Sigue Estudiando! |
