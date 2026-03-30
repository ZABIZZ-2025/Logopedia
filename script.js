// ============================================================
// BLOCCO 1 — DATABASE PAROLE + VARIABILI GLOBALI
// ============================================================

const wordDatabase = {
    tema_labels: {
        tutti:    "🌈 Tutti i temi",
        animali:  "🐾 Animali",
        cibo:     "🍎 Cibo",
        casa:     "🏠 Casa",
        corpo:    "🧍 Corpo",
        natura:   "🌿 Natura",
        scuola:   "📚 Scuola",
        vestiti:  "👕 Vestiti",
        veicoli:  "🚗 Veicoli",
        giochi:   "⚽ Giochi",
        famiglia: "👨‍👩‍👧 Famiglia"
    },
    animali: {
        2: ["cane","gatto","rana","orso","lupo","volpe","capra","topo","oca",
            "cervo","tigre","toro","pollo","gufo","falco","corvo","mucca","zebra",
            "merlo","cigno","riccio","lepre","mosca","trota","porco"],
        3: ["cavallo","coniglio","delfino","farfalla","aquila","pecora","cicala",
            "asino","leone","pavone","formica","cicogna","gallina","lucciola",
            "castoro","serpente","pinguino","criceto","medusa"],
        4: ["elefante","tartaruga","coccodrillo","lucertola","coccinella",
            "scoiattolo","calamaro","tarantola","pappagallo","pipistrello",
            "salamandra","scarafaggio","canarino"],
        5: ["rinoceronte","ippopotamo","camaleonte","orangotango","coleottero",
            "pterodattilo"]
    },
    cibo: {
        2: ["pane","latte","mela","torta","pasta","pizza","riso","pero","fico",
            "sale","miele","burro","olio","carne","pesce","zuppa","noce","mango",
            "succo","uova"],
        3: ["banana","fragola","limone","arancia","gelato","biscotto","formaggio",
            "patata","carota","zucchero","castagna","lampone","piadina","minestra",
            "ciambella","focaccia","pistacchio","fagioli","spinaci","ciliegia"],
        4: ["pomodoro","mandarino","melanzana","cioccolato","mozzarella",
            "tortellini","parmigiano","cavolfiore","maionese","carbonara",
            "cotoletta","cannelloni","tagliatelle"],
        5: ["cioccolatino","peperoncino","pomodorino"]
    },
    casa: {
        2: ["porta","letto","sedia","tetto","muro","vaso","bagno","scala",
            "chiave","stanza","forno","frigo","specchio","presa","piano",
            "tenda","stufa","secchio","panca"],
        3: ["tavolo","cucina","coperta","divano","finestra","armadio","poltrona",
            "terrazzo","balcone","cantina","giardino","tappeto","mensola",
            "cassetto","bollitore","cucchiaio"],
        4: ["comodino","lavandino","lampadina","lavatrice","candelabro",
            "cassapanca","materasso","battistero"],
        5: ["frigorifero","lavastoviglie","televisore","calorifero","portafinestra"]
    },
    corpo: {
        2: ["mano","piede","naso","bocca","dito","testa","collo","spalla",
            "braccio","schiena","guancia","mento","gamba","occhio"],
        3: ["capelli","caviglia","costola","stomaco","polpaccio","palpebra",
            "ascella","gomito","orecchio","ginocchio","polmone","intestino"],
        4: ["ginocchiera","polpastrello","sopracciglio","mandibola"],
        5: ["appendicite","circolazione","respirazione"]
    },
    natura: {
        2: ["sole","luna","mare","lago","monte","bosco","fiume","neve",
            "vento","fiore","erba","nube","rocca","sabbia","foglia","pioggia",
            "cielo","ghiaccio"],
        3: ["collina","foresta","montagna","vulcano","deserto","tempesta",
            "cascata","stagione","pianura","savana","tifone"],
        4: ["primavera","atmosfera","orizzonte","crepuscolo","temporale",
            "piantagione","prateria"],
        5: ["arcobaleno","biodiversita","inquinamento"]
    },
    scuola: {
        2: ["penna","libro","banco","carta","gomma","riga","classe","gesso",
            "zaino","colla","metro","squadra"],
        3: ["matita","quaderno","maestra","lavagna","compito","disegno",
            "racconto","cartella","righello","compasso","diagramma","tombola"],
        4: ["grammatica","insegnante","biblioteca","dizionario","lavagnetta",
            "triangolo","ricreazione"],
        5: ["matematica","geometria","calcolatrice","laboratorio","enciclopedia",
            "informatica"]
    },
    vestiti: {
        2: ["gonna","scarpa","borsa","guanto","calza","maglia","tuta","sciarpa",
            "fascia","polo","felpa","giacca","collant"],
        3: ["cappello","stivale","sandalo","maglione","cappotto","pigiama",
            "camicia","cravatta","borsetta","cintura","giubbotto","bretelle"],
        4: ["pantalone","calzamaglia","canottiera","sottoveste","cappellino"],
        5: ["abbigliamento","impermeabile"]
    },
    veicoli: {
        2: ["auto","bici","treno","barca","moto","tram","nave","taxi"],
        3: ["autobus","camion","trattore","veliero","traghetto","furgone",
            "rimorchio"],
        4: ["astronave","aereo","motociclo","vaporetto","fuoristrada"],
        5: ["motocicletta","locomotiva","sottomarino","portaerei","elicottero"]
    },
    giochi: {
        2: ["palla","dado","carte","corsa","salto","gioco","dama","gara",
            "calcio","judo"],
        3: ["pallone","bambola","scivolo","chitarra","disegno","pittura",
            "teatro","domino","tombola"],
        4: ["costruzioni","carnevale","pallanuoto","bicicletta","altalena",
            "filastrocca","aquilone","pallavolo","campionato","girotondo",
            "ginnastica"],
        5: ["videogioco","acrobatica","pallacanestro"]
    },
    famiglia: {
        2: ["mamma","papa","nonno","nonna","figlio","figlia","zio","zia","babbo"],
        3: ["fratello","sorella","bisnonno","padrino","madrina","famiglia",
            "cognato","cognata","parente","gemelli","nipote","cugino","cugina"],
        4: ["pronipote","matrimonio","genitore","parentela","adozione",
            "discendente","battesimo"],
        5: ["capofamiglia","anniversario","celebrazione","generazione"]
    }
};

// --- VARIABILI GLOBALI ---
let currentCompWord  = '';
let currentPronWord  = '';
let currentRipetiWord = '';
let speechRate = 1;
let selectedSpeechSynthesisVoice = null;
let tesseractScheduler = null;
let mediaRecorder  = null;
let audioChunks    = [];
let recordedAudioURL = null;

// Contatori sessione per i 3 moduli
const sessionStats = {
    comp:   { correct: 0, wrong: 0 },
    pron:   { correct: 0, wrong: 0 },
    ripeti: { correct: 0, wrong: 0 }
};

// ============================================================
// BLOCCO 2 — RIFERIMENTI DOM
// ============================================================

// Navigazione
const modules    = document.querySelectorAll('.module');
const navButtons = document.querySelectorAll('nav button');

// Modulo Comprensione
const compThemeSelect        = document.getElementById('compThemeSelect');
const compSyllableSelect     = document.getElementById('compSyllableSelect');
const compNewWordBtn         = document.getElementById('compNewWordBtn');
const compRepeatWordBtn      = document.getElementById('compRepeatWordBtn');
const compKeyboardInput      = document.getElementById('compKeyboardInput');
const compCheckKeyboardBtn   = document.getElementById('compCheckKeyboardBtn');
const compKeyboardFeedback   = document.getElementById('compKeyboardFeedback');
const letterBoxesContainer   = document.getElementById('letterBoxesContainer');
const compCheckHandwritingBtn= document.getElementById('compCheckHandwritingBtn');
const compClearCanvasBtn     = document.getElementById('compClearCanvasBtn');
const compHandwritingFeedback= document.getElementById('compHandwritingFeedback');
const compHandwritingStatus  = document.getElementById('compHandwritingStatus');
const compCorrectSpan        = document.getElementById('compCorrect');
const compWrongSpan          = document.getElementById('compWrong');

// Modulo Pronuncia
const pronThemeSelect            = document.getElementById('pronThemeSelect');
const pronSyllableSelect         = document.getElementById('pronSyllableSelect');
const pronFontSelect             = document.getElementById('pronFontSelect');
const pronNewWordBtn             = document.getElementById('pronNewWordBtn');
const textToPronounceElem        = document.getElementById('textToPronounce');
const pronRecordBtn              = document.getElementById('pronRecordBtn');
const recognizedPronunciationElem= document.getElementById('recognizedPronunciation');
const pronFeedback               = document.getElementById('pronFeedback');
const pronStatus                 = document.getElementById('pronStatus');
const pronPlayUserRecordingBtn   = document.getElementById('pronPlayUserRecordingBtn');
const pronClearUserRecordingBtn  = document.getElementById('pronClearUserRecordingBtn');
const pronCorrectSpan            = document.getElementById('pronCorrect');
const pronWrongSpan              = document.getElementById('pronWrong');

// Modulo Ripeti
const ripetiThemeSelect    = document.getElementById('ripetiThemeSelect');
const ripetiSyllableSelect = document.getElementById('ripetiSyllableSelect');
const ripetiNewWordBtn     = document.getElementById('ripetiNewWordBtn');
const ripetiHiddenWord     = document.getElementById('ripetiHiddenWord');
const ripetiListenBtn      = document.getElementById('ripetiListenBtn');
const ripetiRevealBtn      = document.getElementById('ripetiRevealBtn');
const ripetiRecordBtn      = document.getElementById('ripetiRecordBtn');
const ripetiRecognized     = document.getElementById('ripetiRecognized');
const ripetiFeedback       = document.getElementById('ripetiFeedback');
const ripetiStatus         = document.getElementById('ripetiStatus');
const ripetiCorrectSpan    = document.getElementById('ripetiCorrect');
const ripetiWrongSpan      = document.getElementById('ripetiWrong');

// Modulo Impostazioni
const speechRateRange = document.getElementById('speechRateRange');
const speechRateValue = document.getElementById('speechRateValue');
const voiceSelect     = document.getElementById('voiceSelect');

// Fuochi d'artificio
const fireworksContainer = document.getElementById('fireworksContainer');

// ============================================================
// BLOCCO 3 — FUNZIONI HELPER
// ============================================================

// Restituisce una parola casuale dal database per tema e numero di sillabe
function getRandomWord(syllables, tema) {
    const temi = Object.keys(wordDatabase).filter(k => k !== 'tema_labels');
    let wordList;
    if (!tema || tema === 'tutti') {
        wordList = temi.flatMap(t => wordDatabase[t][syllables] || []);
    } else {
        wordList = (wordDatabase[tema] && wordDatabase[tema][syllables]) || [];
        if (wordList.length === 0) {
            // Fallback su tutti i temi se quello scelto non ha parole per questa lunghezza
            wordList = temi.flatMap(t => wordDatabase[t][syllables] || []);
        }
    }
    if (!wordList || wordList.length === 0) {
        console.error(`Nessuna parola per: tema=${tema}, sillabe=${syllables}`);
        return null;
    }
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Legge un testo ad alta voce con la voce e la velocità impostate
function speakWord(text) {
    if (!('speechSynthesis' in window)) {
        alert('Il tuo browser non supporta la sintesi vocale.');
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.rate = speechRate;
    if (selectedSpeechSynthesisVoice) utterance.voice = selectedSpeechSynthesisVoice;
    window.speechSynthesis.speak(utterance);
}

// ⭐ NUOVO — Feedback audio dopo ogni risposta
function speakFeedback(isCorrect) {
    const frasi = isCorrect
        ? ['Bravo!', 'Ottimo!', 'Perfetto!', 'Fantastico!', 'Bravissimo!']
        : ['Riprova!', 'Quasi!', 'Non mollare!', 'Ce la puoi fare!'];
    speakWord(frasi[Math.floor(Math.random() * frasi.length)]);
}

// Normalizza il testo: maiuscolo, senza accenti, senza punteggiatura
function normalizeText(text) {
    if (typeof text !== 'string') return '';
    return text.trim().toUpperCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/gi, '');
}

// Calcola la distanza di Levenshtein tra due stringhe
function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, (_, i) =>
        Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0)
    );
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            dp[i][j] = a[i-1] === b[j-1]
                ? dp[i-1][j-1]
                : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    return dp[m][n];
}

// Accetta la risposta con tolleranza: 1 errore ≤4 lettere, 2 ≤7, 3 oltre
function isAnswerAccepted(user, correct) {
    if (user === correct) return true;
    const maxLen = Math.max(user.length, correct.length);
    const tolerance = maxLen <= 4 ? 1 : maxLen <= 7 ? 2 : 3;
    return levenshtein(user, correct) <= tolerance;
}

// Mostra il feedback visivo nell'elemento indicato
function displayFeedback(feedbackElem, inputElem, isCorrect, message) {
    feedbackElem.innerHTML = '';
    const span = document.createElement('span');
    span.textContent = message;
    span.className = 'feedback-text ' + (isCorrect ? 'correct-feedback' : 'incorrect-feedback');

    if (isCorrect) {
        if (inputElem) inputElem.classList.replace('incorrect', 'correct') || inputElem.classList.add('correct');
        triggerFireworks();
    } else {
        if (inputElem) inputElem.classList.replace('correct', 'incorrect') || inputElem.classList.add('incorrect');
    }
    feedbackElem.appendChild(span);

    if (inputElem) {
        const original = inputElem.id === 'textToPronounce' ? '#e3f2fd' : '';
        setTimeout(() => {
            inputElem.classList.remove('correct', 'incorrect');
            if (original) inputElem.style.backgroundColor = original;
        }, 2500);
    }
}

// ⭐ NUOVO — Aggiorna i contatori sessione nell'UI
function updateStats(module, isCorrect) {
    if (isCorrect) sessionStats[module].correct++;
    else           sessionStats[module].wrong++;
    document.getElementById(module + 'Correct').textContent = sessionStats[module].correct;
    document.getElementById(module + 'Wrong').textContent   = sessionStats[module].wrong;
}

// Animazione fuochi d'artificio
function triggerFireworks() {
    const colors = ['var(--primary-color)','var(--secondary-color)','var(--tertiary-color)',
                    '#4caf50','#f44336','#9c27b0'];
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const xS = Math.random() * fireworksContainer.offsetWidth;
        const yS = Math.random() * fireworksContainer.offsetHeight;
        const angle = Math.random() * Math.PI * 2;
        const dist  = Math.random() * 100 + 50;
        p.style.setProperty('--tx',     '0px');
        p.style.setProperty('--tx-end', `${Math.cos(angle) * dist}px`);
        p.style.setProperty('--ty',     '0px');
        p.style.setProperty('--ty-end', `${Math.sin(angle) * dist}px`);
        p.style.left = `${xS}px`;
        p.style.top  = `${yS}px`;
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworksContainer.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }
}

// ============================================================
// BLOCCO 4 — INIZIALIZZAZIONE TESSERACT
// ============================================================

async function initializeTesseract() {
    try {
        compHandwritingStatus.textContent = 'Caricamento Tesseract...';
        tesseractScheduler = Tesseract.createScheduler();
        if (!tesseractScheduler) {
            compHandwritingStatus.textContent = 'Errore Tesseract Scheduler.';
            return;
        }
        const worker = await Tesseract.createWorker('ita', 1, {
            logger: m => {
                if (m.status === 'loading language model' || m.status === 'initializing tesseract') {
                    compHandwritingStatus.textContent = `Tesseract: ${m.status} ${Math.round(m.progress * 100)}%`;
                } else if (m.status === 'recognizing text') {
                    compHandwritingStatus.textContent = `Riconoscimento: ${Math.round(m.progress * 100)}%`;
                }
            }
        });
        if (!worker) {
            compHandwritingStatus.textContent = 'Errore Tesseract Worker.';
            tesseractScheduler.terminate();
            tesseractScheduler = null;
            return;
        }
        // PSM 10 = singolo carattere; whitelist lettere maiuscole
        await worker.setParameters({
            tessedit_pageseg_mode: '10',
            tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        });
        await tesseractScheduler.addWorker(worker);
        compHandwritingStatus.textContent = 'Pronto per disegnare!';
    } catch (err) {
        console.error('Errore inizializzazione Tesseract:', err);
        compHandwritingStatus.textContent = 'Errore caricamento Tesseract. Ricarica la pagina.';
        if (tesseractScheduler) { tesseractScheduler.terminate(); tesseractScheduler = null; }
    }
}

initializeTesseract();

// ============================================================
// BLOCCO 5 — POPOLAMENTO DROPDOWN TEMI
// ============================================================

function populateThemeSelects() {
    const labels = wordDatabase.tema_labels;
    [compThemeSelect, pronThemeSelect, ripetiThemeSelect].forEach(sel => {
        sel.innerHTML = '';
        Object.entries(labels).forEach(([value, text]) => {
            const opt = document.createElement('option');
            opt.value = value;
            opt.textContent = text;
            sel.appendChild(opt);
        });
    });
}

populateThemeSelects();

// ============================================================
// BLOCCO 6 — NAVIGAZIONE TRA MODULI
// ============================================================

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.module;

        modules.forEach(m => m.classList.toggle('active', m.id === targetId));
        navButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');

        if      (targetId === 'comprensione') initComprensioneModule();
        else if (targetId === 'pronuncia')    initPronunciaModule();
        else if (targetId === 'ripeti')       initRipetiModule();
    });
});

// ============================================================
// BLOCCO 7 — MODULO "ASCOLTA E SCRIVI"
// ============================================================

// Stato canvas lettera per lettera
let letterCanvases  = [];
let letterContexts  = [];
let activeLetterIndex = 0;
let letterIsDrawing = false;
let letterLastX = 0;
let letterLastY = 0;

function initComprensioneModule() {
    compKeyboardInput.value = '';
    compKeyboardInput.className = '';
    compKeyboardFeedback.innerHTML = '';
    compHandwritingFeedback.innerHTML = '';
    compHandwritingStatus.textContent = tesseractScheduler
        ? 'Pronto per disegnare!'
        : 'Inizializzazione Tesseract... attendere.';
    generateNewCompWord();
}

function generateNewCompWord() {
    currentCompWord = getRandomWord(compSyllableSelect.value, compThemeSelect.value);
    if (!currentCompWord) return;
    speakWord(currentCompWord);
    compKeyboardInput.value = '';
    compKeyboardInput.className = '';
    compKeyboardFeedback.innerHTML = '';
    compHandwritingFeedback.innerHTML = '';
    initializeLetterBoxes(currentCompWord);
    if (tesseractScheduler) compHandwritingStatus.textContent = 'Disegna ogni lettera nella sua casella!';
}

// Restituisce la posizione del puntatore relativa al canvas, compensando la scala CSS
function getCanvasPos(canvas, event) {
    const rect   = canvas.getBoundingClientRect();
    const scaleX = canvas.width  / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
}

// Crea una casella canvas per ogni lettera della parola
function initializeLetterBoxes(word) {
    letterBoxesContainer.innerHTML = '';
    letterCanvases  = [];
    letterContexts  = [];
    activeLetterIndex = 0;
    compHandwritingFeedback.innerHTML = '';

    normalizeText(word).split('').forEach((letter, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'letter-box-wrapper';

        const numLabel = document.createElement('span');
        numLabel.className = 'letter-box-number';
        numLabel.textContent = index + 1;

        const canvas = document.createElement('canvas');
        canvas.width  = 80;
        canvas.height = 90;
        canvas.className = 'letter-canvas';
        canvas.dataset.index = index;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff8e1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvas.addEventListener('mousedown',  e => startLetterDrawing(e, index));
        canvas.addEventListener('mousemove',  e => drawLetter(e, index));
        canvas.addEventListener('mouseup',    stopLetterDrawing);
        canvas.addEventListener('mouseout',   stopLetterDrawing);
        canvas.addEventListener('touchstart', e => startLetterDrawing(e, index), { passive: false });
        canvas.addEventListener('touchmove',  e => drawLetter(e, index),         { passive: false });
        canvas.addEventListener('touchend',   stopLetterDrawing);

        const clearBtn = document.createElement('button');
        clearBtn.textContent = '✕';
        clearBtn.className   = 'letter-clear-btn';
        clearBtn.title = 'Cancella questa casella';
        clearBtn.addEventListener('click', e => { e.stopPropagation(); clearLetterBox(index); });

        wrapper.appendChild(numLabel);
        wrapper.appendChild(canvas);
        wrapper.appendChild(clearBtn);
        letterBoxesContainer.appendChild(wrapper);

        letterCanvases.push(canvas);
        letterContexts.push(ctx);
    });

    if (letterCanvases.length > 0) setActiveLetterBox(0);
}

function setActiveLetterBox(index) {
    activeLetterIndex = index;
    letterCanvases.forEach((c, i) => c.classList.toggle('active-letter-box', i === index));
}

function startLetterDrawing(e, index) {
    e.preventDefault();
    setActiveLetterBox(index);
    letterIsDrawing = true;
    const pos = getCanvasPos(letterCanvases[index], e);
    letterLastX = pos.x;
    letterLastY = pos.y;
}

function drawLetter(e, index) {
    e.preventDefault();
    if (!letterIsDrawing || index !== activeLetterIndex) return;
    const ctx = letterContexts[index];
    const pos = getCanvasPos(letterCanvases[index], e);
    ctx.beginPath();
    ctx.moveTo(letterLastX, letterLastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = '#333';
    ctx.lineWidth   = 4;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.stroke();
    letterLastX = pos.x;
    letterLastY = pos.y;
}

function stopLetterDrawing() { letterIsDrawing = false; }

function clearLetterBox(index) {
    const ctx = letterContexts[index];
    ctx.clearRect(0, 0, letterCanvases[index].width, letterCanvases[index].height);
    ctx.fillStyle = '#fff8e1';
    ctx.fillRect(0, 0, letterCanvases[index].width, letterCanvases[index].height);
    letterCanvases[index].classList.remove('correct-box', 'incorrect-box');
}

function clearAllLetterBoxes() {
    letterCanvases.forEach((_, i) => clearLetterBox(i));
    if (letterCanvases.length > 0) setActiveLetterBox(0);
    compHandwritingFeedback.innerHTML = '';
    if (tesseractScheduler) compHandwritingStatus.textContent = 'Caselle pulite! Ricomincia a disegnare.';
}

// --- Event listeners comprensione ---
compNewWordBtn.addEventListener('click', generateNewCompWord);

compRepeatWordBtn.addEventListener('click', () => {
    if (currentCompWord) speakWord(currentCompWord);
    else compHandwritingStatus.textContent = 'Nessuna parola da ripetere.';
});

compCheckKeyboardBtn.addEventListener('click', () => {
    if (!currentCompWord) {
        compKeyboardFeedback.innerHTML = '<span class="feedback-text incorrect-feedback">Genera prima una parola!</span>';
        return;
    }
    const userAnswer    = normalizeText(compKeyboardInput.value);
    const correctAnswer = normalizeText(currentCompWord);
    const isCorrect     = isAnswerAccepted(userAnswer, correctAnswer);
    displayFeedback(compKeyboardFeedback, compKeyboardInput, isCorrect,
        isCorrect ? 'BRAVISSIMO!!! 🎉' : 'NON TI PREOCCUPARE, RIPROVA 💪');
    updateStats('comp', isCorrect);
    speakFeedback(isCorrect);
});

compClearCanvasBtn.addEventListener('click', clearAllLetterBoxes);

compCheckHandwritingBtn.addEventListener('click', async () => {
    if (!currentCompWord)      { compHandwritingStatus.textContent = 'Prima genera una parola!'; return; }
    if (!tesseractScheduler)   { compHandwritingStatus.textContent = 'Tesseract non è pronto. Attendi o ricarica.'; return; }
    if (letterCanvases.length === 0) { compHandwritingStatus.textContent = 'Prima genera una parola!'; return; }

    compCheckHandwritingBtn.disabled = true;
    compClearCanvasBtn.disabled = true;

    const wordLetters    = normalizeText(currentCompWord).split('');
    let   allCorrect     = true;
    const recognizedChars = [];

    try {
        for (let i = 0; i < letterCanvases.length; i++) {
            compHandwritingStatus.textContent = `Riconoscimento lettera ${i + 1} di ${letterCanvases.length}... 🧠`;
            const { data: { text } } = await tesseractScheduler.addJob('recognize', letterCanvases[i]);
            const cleaned    = normalizeText(text).replace(/\s/g, '');
            const recognized = cleaned[0] || '';
            const expected   = wordLetters[i];
            const isOk       = recognized === expected;

            if (!isOk) allCorrect = false;
            recognizedChars.push(recognized || '?');
            letterCanvases[i].classList.remove('correct-box', 'incorrect-box');
            letterCanvases[i].classList.add(isOk ? 'correct-box' : 'incorrect-box');
        }

        displayFeedback(compHandwritingFeedback, null, allCorrect,
            allCorrect ? 'OTTIMO! HAI SCRITTO TUTTO BENE! 🎉' : 'QUASI! LE CASELLE ROSSE VANNO RICONTROLLATE 💪');
        compHandwritingStatus.textContent =
            `Ho letto: "${recognizedChars.join('')}" — Parola corretta: "${wordLetters.join('')}"`;
        updateStats('comp', allCorrect);
        speakFeedback(allCorrect);
    } catch (err) {
        console.error('Errore Tesseract:', err);
        compHandwritingStatus.textContent = 'Errore nel riconoscimento. Riprova.';
        displayFeedback(compHandwritingFeedback, null, false, 'ERRORE NEL RICONOSCIMENTO 😵');
    } finally {
        compCheckHandwritingBtn.disabled = false;
        compClearCanvasBtn.disabled = false;
    }
});

// ============================================================
// BLOCCO 8 — MODULO "LEGGI E PARLA"
// ============================================================

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isAsrRecording = false;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'it-IT';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        isAsrRecording = true;
        pronStatus.textContent = 'Sto ascoltando... Parla ora! 📢';
        pronRecordBtn.textContent = 'Ascoltando...';
        pronRecordBtn.style.backgroundColor = 'var(--error-color)';
    };

    recognition.onresult = event => {
        const transcript = event.results[0][0].transcript;
        recognizedPronunciationElem.textContent = transcript;
        const isCorrect = isAnswerAccepted(normalizeText(transcript), normalizeText(currentPronWord));
        displayFeedback(pronFeedback, textToPronounceElem, isCorrect,
            isCorrect ? 'PRONUNCIA PERFETTA! BRAVISSIMO! 🎉' : 'QUASI! RIPROVA A PRONUNCIARE MEGLIO 💪');
        updateStats('pron', isCorrect);
        speakFeedback(isCorrect);
        pronStatus.textContent = `Hai detto: "${transcript}".`;
    };

    recognition.onspeechend = () => {
        recognition.stop();
        pronStatus.textContent = 'Ho sentito! Sto pensando... 🤔';
    };

    recognition.onend = () => {
        isAsrRecording = false;
        pronRecordBtn.textContent = 'Premi e Parla 🎤';
        pronRecordBtn.style.backgroundColor = 'var(--primary-color)';
        if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
        if (recognizedPronunciationElem.textContent === '- - -') {
            pronStatus.textContent = 'Non ho capito bene. Riprova a parlare!';
        }
    };

    recognition.onerror = event => {
        console.error('Errore SpeechRecognition:', event.error);
        let msg = `Ops! Errore: ${event.error}. `;
        if      (event.error === 'no-speech')     msg += 'Non ho sentito nulla. Parla più forte!';
        else if (event.error === 'audio-capture') msg += 'Problemi col microfono.';
        else if (event.error === 'not-allowed')   msg += 'Devi darmi il permesso di usare il microfono! 🙁';
        else msg += 'Qualcosa è andato storto.';
        pronStatus.textContent = msg;
        recognizedPronunciationElem.textContent = '- ERRORE -';
        displayFeedback(pronFeedback, textToPronounceElem, false, 'ERRORE VOCALE 😵');
        isAsrRecording = false;
        pronRecordBtn.textContent = 'Premi e Parla 🎤';
        pronRecordBtn.style.backgroundColor = 'var(--primary-color)';
    };
} else {
    pronStatus.textContent = 'Il tuo browser non supporta il riconoscimento vocale.';
    if (pronRecordBtn) pronRecordBtn.disabled = true;
}

function initPronunciaModule() {
    currentPronWord = '';
    textToPronounceElem.textContent = 'Premi "Nuova Parola da Leggere"';
    textToPronounceElem.className = '';
    textToPronounceElem.style.backgroundColor = '#e3f2fd';
    recognizedPronunciationElem.textContent = '- - -';
    pronFeedback.innerHTML = '';
    pronStatus.textContent = SpeechRecognition
        ? 'Pronto per leggere e parlare!'
        : 'Riconoscimento vocale non supportato.';
    if (recordedAudioURL) { URL.revokeObjectURL(recordedAudioURL); recordedAudioURL = null; }
    audioChunks = [];
    pronPlayUserRecordingBtn.disabled = true;
    pronClearUserRecordingBtn.disabled = true;
    generateNewPronWord();
}

function generateNewPronWord() {
    currentPronWord = getRandomWord(pronSyllableSelect.value, pronThemeSelect.value);
    if (!currentPronWord) return;
    applyFontToPronWord();
    recognizedPronunciationElem.textContent = '- - -';
    pronFeedback.innerHTML = '';
    textToPronounceElem.style.backgroundColor = '#e3f2fd';
    pronStatus.textContent = 'Leggi la parola qui sopra e poi premi "Premi e Parla"!';
}

function applyFontToPronWord() {
    if (!currentPronWord) return;
    textToPronounceElem.textContent = currentPronWord;
    textToPronounceElem.className = '';
    textToPronounceElem.classList.add(pronFontSelect.value);
}

pronNewWordBtn.addEventListener('click', generateNewPronWord);
pronFontSelect.addEventListener('change', applyFontToPronWord);

pronRecordBtn.addEventListener('click', async () => {
    if (!SpeechRecognition) { pronStatus.textContent = 'Riconoscimento vocale non supportato.'; return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        pronStatus.textContent = 'Registrazione audio non supportata (richiede HTTPS).'; return;
    }
    if (!currentPronWord) { pronStatus.textContent = 'Prima genera una parola da leggere!'; return; }

    if (isAsrRecording) {
        recognition.stop();
        if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
        return;
    }

    recognizedPronunciationElem.textContent = '- - -';
    pronFeedback.innerHTML = '';
    textToPronounceElem.style.backgroundColor = '#e3f2fd';
    audioChunks = [];

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.onstop = () => {
            stream.getTracks().forEach(t => t.stop());
            if (audioChunks.length > 0) {
                if (recordedAudioURL) URL.revokeObjectURL(recordedAudioURL);
                const blob = new Blob(audioChunks, { type: 'audio/webm' });
                recordedAudioURL = URL.createObjectURL(blob);
                pronPlayUserRecordingBtn.disabled = false;
                pronClearUserRecordingBtn.disabled = false;
            }
        };
        mediaRecorder.start();
        recognition.start();
    } catch (e) {
        pronStatus.textContent = "Errore nell'avviare la registrazione. Controlla il microfono.";
        console.error('Errore avvio registrazione:', e);
        isAsrRecording = false;
        pronRecordBtn.textContent = 'Premi e Parla 🎤';
        pronRecordBtn.style.backgroundColor = 'var(--primary-color)';
    }
});

pronPlayUserRecordingBtn.addEventListener('click', () => {
    if (!recordedAudioURL) return;
    const audio = new Audio(recordedAudioURL);
    pronPlayUserRecordingBtn.disabled = true;
    pronStatus.textContent = 'Riproduzione in corso... 🎧';
    audio.play();
    audio.onended = () => { pronPlayUserRecordingBtn.disabled = false; pronStatus.textContent = ''; };
    audio.onerror = () => { pronPlayUserRecordingBtn.disabled = false; pronStatus.textContent = 'Errore nella riproduzione.'; };
});

pronClearUserRecordingBtn.addEventListener('click', () => {
    if (recordedAudioURL) { URL.revokeObjectURL(recordedAudioURL); recordedAudioURL = null; }
    audioChunks = [];
    pronPlayUserRecordingBtn.disabled = true;
    pronClearUserRecordingBtn.disabled = true;
    pronStatus.textContent = 'Registrazione cancellata.';
});

// ============================================================
// BLOCCO 9 — MODULO "RIPETI DOPO DI ME"
// ============================================================

let ripetiIsRecording = false;
let ripetiRecognition;

if (SpeechRecognition) {
    ripetiRecognition = new SpeechRecognition();
    ripetiRecognition.lang = 'it-IT';
    ripetiRecognition.continuous = false;
    ripetiRecognition.interimResults = false;
    ripetiRecognition.maxAlternatives = 1;

    ripetiRecognition.onstart = () => {
        ripetiIsRecording = true;
        ripetiStatus.textContent = 'Sto ascoltando... Ripeti! 📢';
        ripetiRecordBtn.textContent = 'Ascoltando...';
        ripetiRecordBtn.style.backgroundColor = 'var(--error-color)';
    };

    ripetiRecognition.onresult = event => {
        const transcript = event.results[0][0].transcript;
        ripetiRecognized.textContent = transcript;
        const isCorrect = isAnswerAccepted(normalizeText(transcript), normalizeText(currentRipetiWord));
        displayFeedback(ripetiFeedback, null, isCorrect,
            isCorrect ? 'BRAVO! HAI RIPETUTO BENE! 🎉' : 'QUASI! RIPROVA! 💪');
        updateStats('ripeti', isCorrect);
        speakFeedback(isCorrect);
        // Rivela la parola automaticamente dopo la risposta
        ripetiHiddenWord.classList.remove('blurred');
        ripetiRevealBtn.textContent = 'Nascondi Parola 🙈';
        ripetiStatus.textContent = `Hai detto: "${transcript}"`;
    };

    ripetiRecognition.onspeechend = () => { ripetiRecognition.stop(); };

    ripetiRecognition.onend = () => {
        ripetiIsRecording = false;
        ripetiRecordBtn.textContent = 'Ripeti! 🎤';
        ripetiRecordBtn.style.backgroundColor = 'var(--primary-color)';
        if (ripetiRecognized.textContent === '- - -') {
            ripetiStatus.textContent = 'Non ho sentito nulla. Riprova!';
        }
    };

    ripetiRecognition.onerror = event => {
        ripetiIsRecording = false;
        ripetiRecordBtn.textContent = 'Ripeti! 🎤';
        ripetiRecordBtn.style.backgroundColor = 'var(--primary-color)';
        let msg = `Errore: ${event.error}. `;
        if      (event.error === 'no-speech')   msg += 'Non ho sentito nulla. Parla più forte!';
        else if (event.error === 'not-allowed') msg += 'Devi darmi il permesso di usare il microfono!';
        ripetiStatus.textContent = msg;
    };
}

function initRipetiModule() {
    currentRipetiWord = '';
    ripetiHiddenWord.textContent = 'Premi "Nuova Parola" per iniziare!';
    ripetiHiddenWord.classList.remove('blurred');
    ripetiRecognized.textContent = '- - -';
    ripetiFeedback.innerHTML = '';
    ripetiStatus.textContent = SpeechRecognition
        ? 'Scegli un tema e premi "Nuova Parola"!'
        : 'Riconoscimento vocale non supportato.';
    ripetiListenBtn.disabled = true;
    ripetiRevealBtn.disabled = true;
    ripetiRecordBtn.disabled = !SpeechRecognition;
    generateNewRipetiWord();
}

function generateNewRipetiWord() {
    currentRipetiWord = getRandomWord(ripetiSyllableSelect.value, ripetiThemeSelect.value);
    if (!currentRipetiWord) return;
    ripetiHiddenWord.textContent = currentRipetiWord;
    ripetiHiddenWord.classList.add('blurred');
    ripetiRevealBtn.textContent = 'Rivela Parola 👁️';
    ripetiRecognized.textContent = '- - -';
    ripetiFeedback.innerHTML = '';
    ripetiStatus.textContent = 'Ascolta bene, poi premi "Ripeti!"';
    ripetiListenBtn.disabled = false;
    ripetiRevealBtn.disabled = false;
    ripetiRecordBtn.disabled = !SpeechRecognition;
    speakWord(currentRipetiWord);
}

ripetiNewWordBtn.addEventListener('click', generateNewRipetiWord);

ripetiListenBtn.addEventListener('click', () => {
    if (currentRipetiWord) speakWord(currentRipetiWord);
});

ripetiRevealBtn.addEventListener('click', () => {
    ripetiHiddenWord.classList.toggle('blurred');
    ripetiRevealBtn.textContent = ripetiHiddenWord.classList.contains('blurred')
        ? 'Rivela Parola 👁️'
        : 'Nascondi Parola 🙈';
});

ripetiRecordBtn.addEventListener('click', () => {
    if (!SpeechRecognition) { ripetiStatus.textContent = 'Riconoscimento vocale non supportato.'; return; }
    if (!currentRipetiWord) { ripetiStatus.textContent = 'Prima genera una parola!'; return; }
    if (ripetiIsRecording) {
        ripetiRecognition.stop();
    } else {
        ripetiRecognized.textContent = '- - -';
        ripetiFeedback.innerHTML = '';
        ripetiHiddenWord.classList.add('blurred');
        ripetiRevealBtn.textContent = 'Rivela Parola 👁️';
        ripetiRecognition.start();
    }
});

// ============================================================
// BLOCCO 10 — MODULO IMPOSTAZIONI
// ============================================================

speechRateRange.addEventListener('input', e => {
    speechRate = parseFloat(e.target.value);
    speechRateValue.textContent = speechRate.toFixed(1);
});

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') return;
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    const italianVoices = voices.filter(v => v.lang.startsWith('it'));

    if (italianVoices.length === 0) {
        const opt = document.createElement('option');
        opt.textContent = 'Nessuna voce italiana trovata';
        opt.disabled = true;
        voiceSelect.appendChild(opt);
        return;
    }

    italianVoices.forEach(voice => {
        const opt = document.createElement('option');
        opt.textContent = `${voice.name} (${voice.lang})`;
        opt.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(opt);
    });

    if (voiceSelect.options.length > 0) {
        selectedSpeechSynthesisVoice =
            speechSynthesis.getVoices().find(v => v.name === voiceSelect.options[0].dataset.name)
            || italianVoices[0];
        voiceSelect.selectedIndex = 0;
    }
}

if (typeof speechSynthesis !== 'undefined') {
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    } else {
        populateVoiceList();
    }
}

voiceSelect.addEventListener('change', () => {
    const name = voiceSelect.selectedOptions[0]?.getAttribute('data-name');
    selectedSpeechSynthesisVoice =
        speechSynthesis.getVoices().find(v => v.name === name)
        || selectedSpeechSynthesisVoice;
});
