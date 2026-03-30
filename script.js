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
