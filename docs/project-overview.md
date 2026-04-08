# 🌍 Documentazione Progetto: INPS - Guardiani della Terra 🚀

## 1. Panoramica del Progetto
**INPS - Guardiani della Terra** è un'applicazione web e un'iniziativa ludico-formativa sviluppata per la **Giornata per la Terra 2026 (Earth Day)**. Il target di riferimento sono i bambini dai 6 agli 11 anni. L'obiettivo principale è educare e sensibilizzare i giovani sui 17 obiettivi (SDG) dell'**Agenda 2030** dell'ONU, inquadrando l'INPS come una sorta di "Base Spaziale" per il benessere sociale e ambientale.

L'applicazione è configurata come un quiz interattivo (Single Page Application) che include sfondi animati generati dinamicamente, tracce audio, effetti sonori e un sistema di karaoke sincronizzato con la musica.

---

## 2. Architettura e Struttura del Codice

Il progetto utilizza **HTML5, CSS3 e Vanilla JavaScript**. Moduli specifici incapsulano le varie responsabilità e si scambiano dati esponendosi sull'oggetto globale `window` tramite un namespace prefissato (`window.GDT...`).

### Alberatura e Responsabilità dei File
* **`index.html`**: Il punto d'ingresso dell'applicazione. Contiene la struttura base dell'interfaccia (come la schermata iniziale `#start-screen`, il `#game-container`, e i layer di sfondo) e importa tutti i fogli di stile e script necessari.
* **File CSS (`/css/`)**: Il progetto adotta una suddivisione logica per i fogli di stile:
  * `reset.css`, `tokens.css`, `layout.css`, `components.css`, `scenes.css`.
* **File JavaScript (`/js/`)**:
  * **`content.js`**: Funge da database e configurazione del progetto (`window.GDTConfig` e `window.GDTContent`). Contiene i riferimenti ai file audio, le domande del quiz e l'array con il testo sincronizzato per il karaoke.
  * **`game-state.js`**: Gestisce lo stato globale della partita (es. punteggio, salute) esponendo l'oggetto `window.GDTGameState`.
  * **`ui.js`**: Si occupa esclusivamente della manipolazione del DOM per i bottoni, la barra della salute (`#health-bar`), i testi, le schermate e implementa anche la mappatura dei colori esadecimali ufficiali dell'Agenda 2030 ONU per colorare i vari obiettivi.
  * **`audio.js`**: Gestisce il caricamento (preload) e la riproduzione di effetti sonori (SFX) e delle tracce musicali in background, oltre ad aggiornare lo stato del bottone musicale.
  * **`scenes.js`**: Un modulo responsabile per la generazione procedurale di panorami animati. Genera e inietta lunghe stringhe di codice HTML/CSS direttamente in un livello di sfondo (il `bgLayer`) per creare paesaggi come "roma", "giappone", "savana", "australia" o "vento".
  * **`quiz-engine.js`**: Il motore di gioco che implementa la logica per iniziare la partita, avviare l'audio corretto ed elaborare le risposte.
  * **`app.js`**: Il controller principale che agisce da "colla". Estrae funzioni da tutti gli altri moduli `GDT` e collega gli eventi nativi (come i `click` dell'utente sui pulsanti 'start-btn', 'next-btn') alle rispettive azioni logiche.

---

## 3. Come Funziona il Progetto (Flusso Esecutivo)

1. **Inizializzazione**: Al caricamento di `index.html`, gli script definiscono immediatamente i propri domini di responsabilità sotto l'oggetto globale `window` attraverso l'uso di IIFE (Immediately Invoked Function Expressions). Successivamente, `app.js` aggancia i listener ai pulsanti dell'interfaccia.
2. **Schermata Iniziale**: Viene mostrato il `#start-screen` con il logo INPS e i crediti del team. Cliccando su "INIZIA LA MISSIONE" si attiva la funzione `startGame()` proveniente da `quiz-engine.js`.
3. **Flusso del Gioco**:
   * All'avvio, `startGame()` resetta lo stato tramite `resetGameState()` (da `game-state.js`), riproduce l'effetto sonoro di inizio (`playSound('start')`) e passa alla logica delle domande.
   * Il quiz va a recuperare le domande definite in `content.js`.
   * A seconda del contesto della domanda, `scenes.js` inietta il codice HTML per generare lo sfondo tematico (es. mulini a vento in stile "Texas" oppure il mare) all'interno del `bgLayer`.
   * Le opzioni sono popolate dalla `ui.js`, assegnando anche una palette cromatica dedicata (derivata dagli array dei colori degli SDG ONU).
4. **Sistema Audio e Karaoke**: In background, `audio.js` riproduce un brano predefinito (come "Sotto Lo Stesso Cielo"). L'audio monitora eventi nativi come `timeupdate` ed elabora il timestamp corrente per mostrare all'utente la riga del testo del karaoke esatta.


