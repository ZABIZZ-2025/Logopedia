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
