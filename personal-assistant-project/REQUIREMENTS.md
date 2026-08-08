# Assistente Personale con Memoria Permanente — Documento dei Requisiti

> Progetto nuovo e indipendente. Non ha relazione con l'app "Logopedia" ospitata in
> questo repository: i requisiti sono stati raccolti qui su richiesta esplicita
> dell'utente come punto di partenza per un futuro progetto separato.

- **Autore/Owner**: Michelangelo Zanardo
- **Data prima stesura**: 2026-08-08
- **Stato**: Bozza — base di partenza per definire scope, architettura e vendor

---

## 1. Visione

Un assistente personale che accompagna l'utente nella vita quotidiana, capace di:

1. **Ricordare per sempre** tutto ciò che gli viene fornito, in qualunque formato
   (testo, audio, video, foto, documenti/file).
2. **Elaborare** quelle informazioni per estrarne struttura, significato e
   collegamenti (non solo archiviarle, ma capirle e renderle interrogabili).
3. **Supportare attivamente** le attività quotidiane dell'utente (organizzazione,
   promemoria, decisioni, ricerca informazioni pregresse).
4. Essere **proattivo**: non solo rispondere a comandi, ma anticipare bisogni e
   suggerire azioni.
5. Essere **accessibile prevalentemente da mobile/tablet**, con PC come canale
   secondario ma pienamente funzionale.
6. Usare **sempre i modelli AI più avanzati disponibili**, con la possibilità di
   aggiornare/sostituire i modelli man mano che il mercato evolve.
7. Garantire **sicurezza molto rigida** dei dati personali, senza sacrificare la
   flessibilità e la fluidità d'uso del servizio.

---

## 2. Utenti e ambito

- **Utente primario**: singolo utente (uso personale), non multi-tenant in questa
  prima fase. L'architettura deve però non precludere una futura estensione
  multi-utente/famiglia.
- **Dispositivi**: smartphone e tablet come canale principale; browser desktop e
  eventualmente app desktop come canale secondario.
- **Lingua**: italiano come lingua primaria di interazione, con supporto
  multilingua per contenuti importati (es. documenti in inglese).

---

## 3. Requisiti funzionali

### 3.1 Ingestione multimodale (memoria in ingresso)

L'assistente deve poter acquisire e memorizzare in modo permanente:

| Tipo | Esempi di sorgente | Note |
|---|---|---|
| Testo | messaggi in chat, note dettate/scritte, appunti incollati | ricerca full-text e semantica |
| Audio | note vocali, registrazioni di riunioni/conversazioni | trascrizione automatica (speech-to-text) + indicizzazione del testo trascritto |
| Video | clip, registrazioni, screen recording | trascrizione audio + estrazione di eventi/scene chiave (descrizione automatica) |
| Foto/immagini | foto di documenti, screenshot, foto generiche | OCR per testo nelle immagini, riconoscimento e descrizione del contenuto |
| File/documenti | PDF, Word, Excel, email, altri allegati | estrazione testo/struttura, indicizzazione |
| Dati strutturati (opzionale, fase 2) | calendario, contatti, integrazioni terze | collegamento e arricchimento della memoria |

Requisiti trasversali:

- Ogni elemento acquisito viene **conservato in originale** (file grezzo) e in
  **forma elaborata** (testo estratto, embedding, metadati, riassunto).
- Nessuna cancellazione automatica: la memoria è **permanente per default**;
  l'utente può cancellare manualmente singoli elementi (diritto all'oblio).
- Deduplicazione e versionamento quando lo stesso contenuto viene ricaricato o
  aggiornato.
- Import "bulk" iniziale (es. caricare uno storico di foto, note, documenti già
  esistenti) oltre all'acquisizione continua.

### 3.2 Elaborazione e comprensione

- Estrazione automatica di **entità, temi, date, persone, luoghi** dai contenuti.
- Creazione di **collegamenti tra elementi correlati** nel tempo (es. una foto,
  una nota vocale e un documento sullo stesso argomento vengono associati).
- **Riassunti automatici** periodici (giornalieri/settimanali) e su richiesta.
- **Ricerca ibrida**: full-text + semantica (linguaggio naturale, "cosa mi aveva
  detto il dottore a marzo sulla terapia?").
- Possibilità di **fare domande sulla propria memoria** e ottenere risposte
  con citazione della fonte originale (tracciabilità: da dove viene
  l'informazione).

### 3.3 Supporto alle attività quotidiane

- Gestione di **promemoria, scadenze, to-do**, generati anche automaticamente a
  partire da contenuti acquisiti (es. una nota vocale che menziona un
  appuntamento genera una proposta di evento).
- Integrazione con **calendario, email, eventualmente altri strumenti** già in
  uso dall'utente (da definire in fase di scoping tecnico).
- Supporto decisionale: l'assistente propone opzioni/sintesi basandosi sulla
  memoria storica, non solo su conoscenza generica.

### 3.4 Proattività

- L'assistente deve poter **iniziare interazioni** (notifiche, suggerimenti,
  check-in) senza attendere sempre un input dell'utente, con regole/limiti
  configurabili da parte dell'utente (frequenza, orari, canali).
- Deve poter individuare autonomamente **pattern e anomalie** (es. "non hai più
  parlato del progetto X da 3 settimane", "questo impegno confligge con
  un altro già salvato").
- Il livello di proattività deve essere **regolabile dall'utente** (da "solo su
  richiesta" a "molto proattivo").

### 3.5 Canali di interazione

- **Priorità 1 — Mobile/tablet**: app nativa o PWA, interazione anche vocale
  (input/output audio), notifiche push, cattura rapida (foto, voce, testo) con
  minima frizione.
- **Priorità 2 — PC**: interfaccia web completa, utile per import massivi,
  ricerca approfondita, gestione impostazioni.
- Esperienza **coerente e sincronizzata** in tempo reale tra i dispositivi.

### 3.6 Motore AI

- L'assistente deve poter usare **i modelli linguistici e multimodali più
  avanzati disponibili sul mercato**, aggiornabili nel tempo.
- Architettura **agnostica rispetto al provider AI** (astrazione che permetta di
  sostituire/aggiungere modelli — es. Anthropic Claude, e altri — senza dover
  riscrivere il sistema), per non restare legati a un singolo fornitore e poter
  adottare rapidamente nuovi modelli man mano che escono.
- Uso di modelli specializzati dove serve (speech-to-text, OCR, visione) oltre
  al modello linguistico principale.

---

## 4. Requisiti di sicurezza e privacy

Data la natura del progetto (memoria permanente di dati potenzialmente molto
personali/sensibili), la sicurezza è un requisito di primo livello, non
un'aggiunta successiva.

### 4.1 Protezione dei dati

- **Crittografia in transito** (TLS) per ogni comunicazione.
- **Crittografia a riposo** per tutti i dati memorizzati (file originali, testo
  estratto, embedding, backup).
- Valutare **crittografia end-to-end / lato client** per i contenuti più
  sensibili, con chiavi controllate dall'utente, tenendo conto del compromesso
  con le funzionalità AI (l'elaborazione server-side richiede accesso in chiaro
  nel momento del processing, da minimizzare e isolare).
- **Minimizzazione dell'esposizione**: i dati inviati ai provider AI esterni
  devono essere limitati al necessario per l'elaborazione richiesta.

### 4.2 Accesso e autenticazione

- Autenticazione forte (MFA) per l'accesso da qualunque dispositivo.
- Sessioni sicure, possibilità di revocare l'accesso da dispositivi specifici.
- Biometria (Face ID/impronta) come metodo di sblocco rapido su mobile, con
  fallback sicuro.

### 4.3 Controllo e trasparenza per l'utente

- **Audit log** consultabile: chi/cosa ha avuto accesso ai dati e quando (incluse
  chiamate ai modelli AI esterni).
- **Esportazione completa dei dati** in qualsiasi momento (portabilità).
- **Cancellazione selettiva e permanente** di singoli elementi su richiesta,
  compresa la rimozione da eventuali indici/embedding derivati.
- Impostazioni granulari su **cosa può essere reso "proattivo"** e cosa resta
  strettamente passivo/privato.

### 4.4 Conformità

- Conformità **GDPR** (utente/dati in ambito UE): base giuridica del
  trattamento, informativa privacy, diritto di accesso/rettifica/cancellazione,
  data retention esplicita (anche se di default "permanente", deve essere una
  scelta esplicita e reversibile dell'utente).
- Gestione dei **dati particolari** (es. dati sanitari, se presenti nei
  contenuti) con tutele rafforzate.

### 4.5 Sicurezza infrastrutturale

- Backup regolari, criptati, con test periodici di ripristino.
- Isolamento degli ambienti (dev/staging/prod) e segregazione dei segreti
  (API key, credenziali) in un secret manager, mai nel codice.
- Piano di risposta agli incidenti (cosa succede in caso di breach: notifica,
  contenimento, remediation).

### 4.6 Bilanciare sicurezza e flessibilità

- I controlli di sicurezza devono essere **percepiti come leggeri nell'uso
  quotidiano** (es. sblocco biometrico rapido) pur essendo rigorosi "dietro le
  quinte" (crittografia, audit, isolamento).
- Le funzioni più sensibili (export completo, cancellazione account, modifica
  impostazioni di sicurezza) richiedono un **livello di conferma più alto**
  (step-up authentication), mentre l'uso quotidiano resta fluido.

---

## 5. Requisiti non funzionali

- **Scalabilità dei contenuti**: il sistema deve reggere una crescita continua e
  illimitata nel tempo della quantità di dati memorizzati (anni di utilizzo),
  senza degrado percepibile delle prestazioni di ricerca.
- **Affidabilità**: i dati caricati non devono mai andare persi (durabilità dei
  dati come priorità assoluta, superiore anche alla disponibilità momentanea del
  servizio).
- **Prestazioni**: risposta rapida per interazioni conversazionali; l'elaborazione
  pesante (trascrizioni lunghe, video) può avvenire in modo asincrono con notifica
  di completamento.
- **Costi**: architettura consapevole dei costi (storage crescente nel tempo +
  costo delle chiamate ai modelli AI), con possibilità di ottimizzare in base al
  tipo di contenuto (es. modelli più economici per compiti semplici).
- **Estendibilità**: possibilità di aggiungere nuovi tipi di sorgente dati e
  nuove integrazioni senza rifare l'architettura.

---

## 6. Architettura di massima (proposta iniziale, da validare)

1. **App client** (mobile-first, PWA/nativa + web) — cattura contenuti,
   interazione conversazionale, notifiche proattive.
2. **Livello di ingestione** — riceve i contenuti grezzi, li mette in coda per
   l'elaborazione (storage originale immediato, per garantire che nulla vada
   perso anche se l'elaborazione fallisce o è in ritardo).
3. **Pipeline di elaborazione** — servizi specializzati per tipo di contenuto
   (speech-to-text, OCR, computer vision, estrazione testo da documenti),
   eseguiti in modo asincrono.
4. **Memoria strutturata** — combinazione di:
   - storage per i file originali,
   - database per metadati/relazioni,
   - indice vettoriale per la ricerca semantica.
5. **Motore AI/orchestrazione** — livello di astrazione che instrada le richieste
   verso il modello più adatto/aggiornato disponibile (linguaggio, visione,
   audio), mantenendo il sistema aggiornabile senza refactoring.
6. **Motore di proattività** — regole/agente che analizza periodicamente la
   memoria e lo stato dell'utente per generare suggerimenti/notifiche.
7. **Livello di sicurezza trasversale** — autenticazione, crittografia, audit
   log, applicati a tutti i livelli sopra descritti.

---

## 7. Fuori scope (per ora)

- Multi-utente/famiglia (previsto solo come possibile estensione futura).
- Integrazioni con strumenti terzi specifici (da definire caso per caso in una
  fase successiva di scoping).
- Automazioni che agiscono nel mondo reale in autonomia completa (es. inviare
  email/pagamenti senza conferma): in questa prima fase l'assistente propone,
  l'utente conferma le azioni rilevanti.

---

## 8. Domande aperte da chiarire nelle prossime iterazioni

1. Preferenza per **app nativa** (iOS/Android) vs **PWA** come canale mobile
   principale.
2. Scelta del/i **provider AI** primari e strategia di fallback/multi-provider.
3. Dove e come ospitare i dati (cloud provider, eventuale vincolo di
   residenza dei dati in UE).
4. Livello desiderato di **crittografia end-to-end** vs funzionalità AI
   server-side (è un compromesso tecnico da decidere consapevolmente).
5. Definizione concreta delle **regole di proattività** di default (quante
   notifiche, che tipo, in quali orari).
6. Budget di riferimento (impatta la scelta dei modelli e dell'infrastruttura).

---

*Questo documento è il punto di partenza. Non contiene ancora scelte tecnologiche
definitive: quelle vanno prese nella fase di progettazione successiva, sulla base
delle risposte alle domande aperte del punto 8.*
