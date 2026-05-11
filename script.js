// ======================================================
// THEME-PALETTES
// ======================================================
// Hier werden die Farben für Dark-Mode und Light-Mode zentral gespeichert.
// Dadurch müssen Farben nicht überall im Code einzeln geändert werden.
const THEME_PALETTES = {
    dark: {
        // Hintergrundfarbe der Diagramme
        BG: '#121212',
        // Hintergrundfarbe der Panels und JSXGraph-Boards
        PANEL: '#1E1E1E',
        // Standard-Textfarbe im Dark-Mode
        TEXT: '#E0E0E0',
        // Farbe für das Eingangssignal x(t)
        X_RED: '#FF6384', 
        // Farbe für die originale Impulsantwort h(t)
        H_CYAN: '#4BC0C0',
        // Farbe für die gespiegelte/verschobene Impulsantwort h(t-τ)
        H_ORANGE: '#FF9900',
        // Farbe für die Produktfläche x(τ)·h(t-τ)
        PRODUCT_FILL: '#FFCE56',
        // Farbe für das Ausgangssignal y(t)
        Y_BLUE: '#36A2EB'
    },
    light: {
        // Farben für den hellen Modus
        BG: '#f5f5f5',
        PANEL: '#ffffff',
        TEXT: '#111111',
        X_RED: '#c62828',
        H_CYAN: '#00897b',
        H_ORANGE: '#ef6c00',
        PRODUCT_FILL: '#f9a825',
        Y_BLUE: '#1565c0'
    }
};

// ======================================================
// ÜBUNGEN
// ======================================================
// Dieses Array enthält alle Übungsaufgaben der Webapplikation.
// Jede Aufgabe besitzt:
// - eine ID
// - einen Titel
// - eine Beschreibung
// - Startwerte für die Simulation
// - einen Lösungshinweis
// - eine Multiple-Choice-Frage
const EXERCISES = [
    {
        // Eindeutige Nummer der Aufgabe
        id: 1,
        // Titel, der im Übungsbereich angezeigt wird
        title: "Aufgabe 1: Rechteck + TP 1. Ordnung",
        // Beschreibung der Aufgabe für den Nutzer
        description:
            "Stelle x(t) als Rechtecksignal und h(t) als TP 1. Ordnung ein. " +
            "Beobachte, wie y(t) langsam ansteigt und ein Maximum erreicht, wenn sich Rechteck und Impulsantwort überlappen.",
        // Startwerte, die beim Laden der Aufgabe automatisch gesetzt werden    
        settings: {
            inputSignal: "rechteck",  // Eingangssignal x(t)
            impulseResponse: "tp1",   // Impulsantwort h(t)
            Ax: 1.0,                  // Amplitude des Eingangssignals
            dtx: 1.0,                 // Breite des Eingangssignals
            taux: 0.0,                // Verschiebung des Eingangssignals
            dth: 1.0,                 // Zeitkonstante/Breite der Impulsantwort
            tStart: -2.0              // Startzeit der Animation
        },
        // Musterlösung bzw. Erklärung zur Aufgabe
        solutionHint:
            "Rechteck x(t) mit A_x = 1, Δt_x = 1, τ_x = 0 und TP 1. Ordnung mit Δt_h = 1. " +
            "Wenn das Rechteck vollständig über h(t) liegt, hat y(t) sein größtes Plateau.",
        // Multiple-Choice-Frage zur Aufgabe
        mc: {
            question: "Was passiert mit y(t), wenn die Breite Δt_x des Rechtecks größer wird?",
            // Antwortmöglichkeiten
            options: [
                "y(t) wird schmaler und höher.",
                "y(t) wird breiter und das Maximum verteilt sich über ein größeres t-Intervall.",
                "y(t) bleibt unverändert.",
                "y(t) verschwindet komplett."
            ],
            // Index der richtigen Antwort, gezählt ab 0
            correctIndex: 1,
            // Erklärung, die nach der Antwort angezeigt wird
            explanation:
                "Je größer Δt_x, desto länger überlappen sich x(t) und h(t). Die Faltungsfläche verteilt sich über ein breiteres t-Intervall."
        }
    },
    {
        id: 2,
        title: "Aufgabe 2: Gauss-Eingang + TP 2. Ordnung",
        description:
            "Nutze ein Gauß-Signal x(t) und eine Impulsantwort 2. Ordnung. " +
            "Untersuche, wie die Breite von x(t) und Δt_h die Form und Glättung von y(t) beeinflussen.",
        settings: {
            inputSignal: "gauss",
            impulseResponse: "tp2",
            Ax: 1.0,
            dtx: 1.4,
            taux: 0.0,
            dth: 0.8,
            tStart: -2.0
        },
        solutionHint:
            "Mit Gauß x(t) und TP 2. Ordnung wird y(t) meist breiter und glatter als x(t). " +
            "Das Maximum liegt in etwa dort, wo sich die Zentren von x(t) und h(t) überlappen.",
        mc: {
            question: "Wie wirkt eine Impulsantwort 2. Ordnung typischerweise auf ein Gauß-Signal?",
            options: [
                "Sie macht das Signal impulsförmiger (schmaler).",
                "Sie glättet das Signal und kann Überschwingen (Ringing) erzeugen.",
                "Sie invertiert das Signal nur.",
                "Sie hat keinen Einfluss auf die Form."
            ],
            correctIndex: 1,
            explanation:
                "Ein TP 2. Ordnung wirkt glättend, kann aber bei bestimmten Parametern leichtes Überschwingen erzeugen."
        }
    },
    {
        id: 3,
        title: "Aufgabe 3: Exponentiell + Spalt-TP",
        description:
            "Wähle ein exponentielles Eingangssignal x(t) und eine Spalt-Impulsantwort (Rechteck). " +
            "Vergleiche y(t) für unterschiedliche Rechtecksbreiten Δt_h.",
        settings: {
            inputSignal: "exponential",
            impulseResponse: "spalt",
            Ax: 1.0,
            dtx: 1.0,
            taux: 0.0,
            dth: 0.7,
            tStart: -2.0
        },
        solutionHint:
            "Für Δt_h ≈ 0.7 ist y(t) näherungsweise ein zeitlicher Mittelwert des exponentiellen Signals über das Rechteckfenster.",
        mc: {
            question: "Was bewirkt die Spalt-Impulsantwort (Rechteck) bei der Faltung?",
            options: [
                "Sie multipliziert x(t) nur mit einer Konstanten.",
                "Sie spiegelt x(t) nur an der Zeitachse.",
                "Sie mittelt x(t) lokal über ein Zeitintervall Δt_h.",
                "Sie verschiebt x(t) einfach nach rechts."
            ],
            correctIndex: 2,
            explanation:
                "Die Faltung mit einem Rechteck entspricht einer gleitenden Mittelung (Moving Average) über das Intervall der Pulsbreite."
        }
    },
    {
        id: 4,
        title: "Aufgabe 4: Symmetrisches Dreieck + Gauss-TP",
        description:
            "Verwende ein symmetrisches Dreieck als x(t) und eine Gauß-Impulsantwort. " +
            "Untersuche, wie sich die Symmetrie auf y(t) auswirkt.",
        settings: {
            inputSignal: "dreieck",
            impulseResponse: "gauss_tp",
            Ax: 1.0,
            dtx: 1.0,
            taux: 0.0,
            dth: 1.0,
            tStart: -3.0
        },
        solutionHint:
            "Da sowohl Dreieck als auch Gauß symmetrisch um t=0 sind, ist auch y(t) symmetrisch. " +
            "Das Maximum liegt bei t ≈ 0.",
        mc: {
            question: "Wann ist y(t) bei dieser Konstellation symmetrisch um t = 0?",
            options: [
                "Wenn nur x(t) symmetrisch ist.",
                "Wenn nur h(t) symmetrisch ist.",
                "Wenn sowohl x(t) als auch h(t) symmetrisch um 0 sind.",
                "Symmetrie ist unabhängig von x(t) und h(t)."
            ],
            correctIndex: 2,
            explanation:
                "Die Faltung zweier Funktionen, die beide um 0 symmetrisch sind, ist ebenfalls um 0 symmetrisch."
        }
    },
    {
        id: 5,
        title: "Aufgabe 5: Verschobenes Rechteck + TP 1. Ordnung",
        description:
            "Verschiebe das Rechtecksignal x(t) nach rechts (τ_x > 0) und beobachte, wie sich der Beginn von y(t) verschiebt.",
        settings: {
            inputSignal: "rechteck",
            impulseResponse: "tp1",
            Ax: 1.0,
            dtx: 0.8,
            taux: 1.0,
            dth: 1.0,
            tStart: -1.0
        },
        solutionHint:
            "Eine Verschiebung von x(t) um τ_x verschiebt y(t) um denselben Wert. " +
            "Der Verlauf von y(t) beginnt später.",
        mc: {
            question: "Wie wirkt sich eine Verschiebung von x(t) um τ_x auf y(t) aus?",
            options: [
                "y(t) wird um −τ_x verschoben.",
                "y(t) wird um +τ_x verschoben.",
                "y(t) ändert sich nicht.",
                "y(t) wird nur skaliert, aber nicht verschoben."
            ],
            correctIndex: 1,
            explanation:
                "Für ein zeitinvariantes System gilt: Verschiebung des Eingangssignals führt zur gleichen Verschiebung des Ausgangssignals."
        }
    },
    {
        id: 6,
        title: "Aufgabe 6: Schmales Gauß-Signal + breiter Gauss-TP",
        description:
            "Stelle x(t) als schmales Gauß-Signal und h(t) als breiten Gauß-TP ein. " +
            "Vergleiche Breiten von x(t), h(t) und y(t).",
        settings: {
            inputSignal: "gauss",
            impulseResponse: "gauss_tp",
            Ax: 1.0,
            dtx: 0.6,
            taux: 0.0,
            dth: 1.8,
            tStart: -3.0
        },
        solutionHint:
            "Die Faltung zweier Gaußfunktionen führt zu einem Gauß mit größerer Varianz. " +
            "y(t) ist breiter als beide Einzelverläufe.",
        mc: {
            question: "Wie verhält sich die Breite von y(t) bei der Faltung zweier Gaußfunktionen?",
            options: [
                "y(t) wird immer schmaler als beide.",
                "y(t) hat die gleiche Breite wie x(t).",
                "y(t) wird breiter als jede der beiden Funktionen.",
                "Die Breite von y(t) ist zufällig."
            ],
            correctIndex: 2,
            explanation:
                "Varianzen addieren sich bei Gauß-Faltung → y(t) ist breiter."
        }
    },
    {
        id: 7,
        title: "Aufgabe 7: Dreieck + TP 1. Ordnung mit kleiner Zeitkonstante",
        description:
            "Wähle ein Dreiecksignal und eine schnelle TP-1-Ordnung (kleine Δt_h). " +
            "Beobachte, wie stark y(t) dem Eingangssignal folgt.",
        settings: {
            inputSignal: "dreieck",
            impulseResponse: "tp1",
            Ax: 1.0,
            dtx: 1.0,
            taux: 0.0,
            dth: 0.3,
            tStart: -2.0
        },
        solutionHint:
            "Bei kleiner Δt_h reagiert das System schnell. y(t) ähnelt stark x(t), ist aber etwas geglättet.",
        mc: {
            question: "Was bedeutet eine kleine Zeitkonstante Δt_h bei einem TP 1. Ordnung?",
            options: [
                "Langsame Reaktion, stark geglättetes y(t).",
                "Schnelle Reaktion, y(t) folgt x(t) relativ gut.",
                "Kein Ausgangssignal.",
                "Nur eine Verschiebung ohne Filterwirkung."
            ],
            correctIndex: 1,
            explanation:
                "Kleine Zeitkonstante → System reagiert schneller → weniger Glättung, y(t) folgt x(t) besser."
        }
    },
    {
        id: 8,
        title: "Aufgabe 8: Rechteck + sehr breiter TP 1. Ordnung",
        description:
            "Erhöhe Δt_h stark und beobachte, wie langsam y(t) ansteigt und abfällt im Vergleich zum Rechteck.",
        settings: {
            inputSignal: "rechteck",
            impulseResponse: "tp1",
            Ax: 1.0,
            dtx: 0.8,
            taux: 0.0,
            dth: 3.0,
            tStart: -3.0
        },
        solutionHint:
            "Sehr großes Δt_h bedeutet starkes Glätten. y(t) steigt und fällt deutlich langsamer als x(t).",
        mc: {
            question: "Wie sieht y(t) bei sehr großer Zeitkonstante Δt_h typischerweise aus?",
            options: [
                "Sehr schmale Impulse.",
                "Stark gedämpfte, langsame Übergänge.",
                "Rechteck mit derselben Form wie x(t).",
                "Nur negative Werte."
            ],
            correctIndex: 1,
            explanation:
                "Große Zeitkonstante → träges System → langsame Übergänge im Ausgangssignal."
        }
    },
    {
        id: 9,
        title: "Aufgabe 9: Exponentiell + TP 2. Ordnung",
        description:
            "Nutze ein exponentielles Eingangssignal und einen TP 2. Ordnung und beobachte das Verhalten von y(t) beim Einschwingen.",
        settings: {
            inputSignal: "exponential",
            impulseResponse: "tp2",
            Ax: 1.0,
            dtx: 1.0,
            taux: 0.0,
            dth: 1.0,
            tStart: -2.0
        },
        solutionHint:
            "y(t) zeigt typischerweise einen glatten Anstieg, ggf. mit leichtem Überschwingen, abhängig von den Parametern des TP 2. Ordnung.",
        mc: {
            question: "Welches Verhalten ist bei einem TP 2. Ordnung typischer als bei TP 1. Ordnung?",
            options: [
                "Streng monotones Einschwingen ohne Overshoot.",
                "Mögliches Überschwingen (Overshoot) beim Einschwingen.",
                "Gar kein Einschwingen.",
                "Nur eine reine Verzögerung ohne Änderung der Form."
            ],
            correctIndex: 1,
            explanation:
                "TP 2. Ordnung kann – je nach Parametern – ein gedämpftes Schwingen bzw. Overshoot zeigen."
        }
    },
    {
        id: 10,
        title: "Aufgabe 10: Vergleich zweier Gauß-Breiten",
        description:
            "Vergleiche zwei Situationen: einmal mit schmalem x(t) und breitem h(t), einmal umgekehrt. " +
            "Nutze die Regler, um zu überprüfen, wann y(t) am breitesten ist.",
        settings: {
            inputSignal: "gauss",
            impulseResponse: "gauss_tp",
            Ax: 1.0,
            dtx: 0.8,
            taux: 0.0,
            dth: 0.8,
            tStart: -2.5
        },
        solutionHint:
            "y(t) wird am breitesten, wenn sowohl x(t) als auch h(t) relativ breit sind. " +
            "Varianzen addieren sich in der Faltung.",
        mc: {
            question: "Wann ist die Varianz (Breite) der Faltung zweier Gaußfunktionen am größten?",
            options: [
                "Wenn beide sehr schmal sind.",
                "Wenn eine schmal und die andere breit ist.",
                "Wenn beide breit sind.",
                "Die Varianz ist immer gleich."
            ],
            correctIndex: 2,
            explanation:
                "Je größer die Varianzen der Einzel-Gaußfunktionen, desto größer die Varianz der Faltung."
        }
    }
];

// ======================================================
// GLOBALER PROGRAMMKONTEXT
// ======================================================
// Das Objekt ctx speichert fast alle globalen Zustände der Anwendung.
// Dadurch liegen Parameter, Farben, Boards, Kurven und Berechnungswerte
// an einer zentralen Stelle.
let currentExerciseIndex = 0;

// ===== GLOBAL CONTEXT =====
const ctx = {
    // Aktuelle Farbpalette, standardmäßig Dark-Mode
    COLORS: { ...THEME_PALETTES.dark },
    // Speichert, welches Theme gerade aktiv ist
    currentTheme: 'dark',

    // Standardanzeigebereich der Diagramme
    VIEW_X_MIN: -4,
    VIEW_X_MAX: 4,
    VIEW_Y_MIN: -1,
    VIEW_Y_MAX: 1.5,

    // Standardmäßig ausgewählte Signaltypen
    inputSignalType: 'gauss',
    impulseResponseType: 'tp1',

    // Gibt an, ob die Diagramme automatisch neu skaliert werden müssen
    needsAutoZoom: true,

    // Schrittweite für den zeitlichen Aufbau von y(t)
    TIME_STEP: 0.05,

    // Minimaler und maximaler Zeitbereich der Simulation
    T_MIN: -12.0,
    T_MAX: 12.0,

    // Startzeit der Animation
    START_T: -5.0,

    // Schrittweite für die numerische Integration des Faltungsintegrals
    INTEGRATION_STEP: 0.01,

    // Verzögerung zwischen zwei Animationsschritten in Millisekunden
    ANIMATION_DELAY: 70,

    // Sichtfenster für Delta-Impulse bei der Darstellung
    DELTA_VISUAL_WINDOW: 0.20,

    // Laufindex der Animation
    i: 0,
    // Speichert den setInterval-Timer der Animation
    animate: null,

    // Gibt an, ob die Animation bereits gestartet wurde
    started: false,

    // Arrays für das berechnete Ausgangssignal y(t)
    dataintX: [],
    dataintY: [],

    // Parameter des Eingangssignals und der Impulsantwor
    Ax: 1.0,
    dtx: 1.0,
    taux: 0.0,
    dth: 1.0,

     // Hier werden alle JSXGraph-Boards gespeichert
    boards: {},

     // Spezielle Objekte für Rechteckkanten und Produktkurven
    rectEdgesX: null,
    rectEdgesH: null,
    productGuideCurve: null,

    // Arrays für gezeichnete Delta-Impulse in den verschiedenen Diagrammen
    deltaStemsX: [],
    deltaStemsH: [],
    deltaStemsShifted: [],
    deltaStemsMult: [],
    deltaStemsY: [],

    // Zwischenspeicher für Ausgangskurve
    outputCurveX: [],
    outputCurveY: [],

     // Timer für verzögertes Neuzeichnen bei eigenen Funktionen
    customInputTimer: null,

// Informationen zu benutzerdefinierten Funktionen
custom: {
    inputExpr: '',           // Textausdruck für x(t)
    impulseExpr: '',         // Textausdruck für h(t)
    inputFn: null,           // ausführbare Funktion für x(t)
    impulseFn: null,         // ausführbare Funktion für h(t)
    inputFnNoDelta: null,    // x(t) ohne Delta-Anteile
    impulseFnNoDelta: null,  // h(t) ohne Delta-Anteile
    inputDeltaTerms: [],     // erkannte Delta-Impulse in x(t)
    impulseDeltaTerms: [],   // erkannte Delta-Impulse in h(t)
    inputPureDelta: false,   // true, wenn x(t) nur aus Delta-Impulsen besteht
    impulsePureDelta: false  // true, wenn h(t) nur aus Delta-Impulsen besteht
},

// Zwischenspeicher für automatische Diagrammskalierung
zoomCache: {
    valid: false,
    left: -4,
    right: 4,
    xYMin: -0.15,
    xYMax: 1.25,
    hYMin: -0.15,
    hYMax: 1.25,
    multYMin: -0.15,
    multYMax: 1.25
}
};

// ======================================================
// SIGNALDEFINITIONEN
// ======================================================
// In diesem Abschnitt werden die mathematischen Signalformen definiert.
// Diese Funktionen liefern für einen Zeitpunkt tau den jeweiligen Signalwert.


// Rechtecksignal x(t)
// Das Signal ist innerhalb eines bestimmten Intervalls gleich Ax,
// außerhalb dieses Intervalls gleich 0.
function rechteck(tau) {
    const tau_start = ctx.taux - ctx.dtx / 2;
    const tau_end = ctx.taux + ctx.dtx / 2;
    return (tau >= tau_start && tau <= tau_end) ? ctx.Ax : 0.0;
}

// Dreiecksignal x(t)
// Das Signal steigt linear an und fällt danach linear wieder ab.
function dreieck(tau) {
    const t_mid = ctx.taux;
    const t_start = t_mid - ctx.dtx;
    const t_end = t_mid + ctx.dtx;
    // Außerhalb des Dreiecks ist der Wert 0
    if (tau < t_start || tau > t_end) return 0.0;

    // Linke Dreieckshälfte: linearer Anstieg
    if (tau <= t_mid) {
        return ctx.Ax * (tau - t_start) / ctx.dtx;
    // Rechte Dreieckshälfte: linearer Abfall
    } else {
        return ctx.Ax * (t_end - tau) / ctx.dtx;
    }
}

// Gaußsignal x(t)
// Beschreibt eine glockenförmige Funktion.
function gauss(tau) {
    const sigma = ctx.dtx / 3.0;
    const mu = ctx.taux;
    return ctx.Ax * Math.exp(-((tau - mu) ** 2) / (2 * sigma ** 2));
}

// Exponentielles Eingangssignal
// Das Signal beginnt bei tau = taux und fällt danach exponentiell ab.
function exponential_impulse(tau) {
    if (tau < ctx.taux) return 0.0;
    return ctx.Ax * Math.exp(-(tau - ctx.taux) / ctx.dtx);
}

// Spaltfunktion / Rechteck-Impulsantwort
// Wird z. B. für gleitende Mittelung verwendet.
function spalt(tau) {
    return (tau >= 0 && tau <= ctx.dth) ? 1.0 / ctx.dth : 0.0;
}

// Tiefpass 1. Ordnung
// Typische Impulsantwort eines RC-Tiefpasses.
function tp1(tau) {
    return tau < 0 ? 0.0 : (1.0 / ctx.dth) * Math.exp(-tau / ctx.dth);
}

// Tiefpass 2. Ordnung
// Impulsantwort eines einfachen Systems zweiter Ordnung.
function tp2(tau) {
    if (tau < 0) return 0.0;
    const T = ctx.dth;
    return (tau / (T * T)) * Math.exp(-tau / T);
}

// Gaußförmige Impulsantwort
// Wird als glättendes symmetrisches System verwendet.
function gauss_tp(tau) {
    const sigma = ctx.dth / 3.0;
    const norm = 1.0 / (sigma * Math.sqrt(2 * Math.PI));
    return norm * Math.exp(-(tau ** 2) / (2 * sigma ** 2));
}

// Heaviside-Sprungfunktion
// Gibt 0 für negative Werte und 1 für positive Werte zurück.
function u(x) {
    return x >= 0 ? 1 : 0;
}

// Rechteck-Grundfunktion
// Ist 1 im Bereich -0.5 bis +0.5, sonst 0.
function rect(x) {
    return Math.abs(x) <= 0.5 ? 1 : 0;
}

// Dreieck-Grundfunktion
// Ist maximal bei 0 und fällt linear bis |x| = 1 ab.
function tri(x) {
    const ax = Math.abs(x);
    return ax <= 1 ? (1 - ax) : 0;
}

// Näherung des Dirac-Impulses
// Ein echter Dirac-Impuls kann numerisch nicht exakt dargestellt werden.
// Deshalb wird er hier durch einen sehr schmalen Rechteckimpuls angenähert.
function deltaApprox(x, eps = 0.03) {
    return Math.abs(x) <= eps / 2 ? (1 / eps) : 0;
}

// ======================================================
// EIGENE FUNKTIONEN: VORBEREITUNG UND AUSWERTUNG
// ======================================================
// Dieser Abschnitt ermöglicht die Eingabe eigener Funktionen wie:
// exp(-tau/dth)*u(tau), rect((tau-taux)/dtx), sin(tau), delta(tau)


// Wandelt benutzerfreundliche Schreibweisen in JavaScript-kompatible Schreibweisen um.
function normalizeCustomExpression(expr) {
    return expr
         // Ersetzt σ(...) durch u(...), also die Heaviside-Funktion
        .replace(/σ\s*\(/g, 'u(')

        // Ersetzt δ(...) durch delta(...), also die Delta-Näherung
        .replace(/δ\s*\(/g, 'delta(')

        // Ersetzt Potenzen mit ^ durch JavaScript-Potenzen mit **
        .replace(/\^/g, '**');
}

// Erstellt aus einem Texteingabe-Ausdruck eine ausführbare JavaScript-Funktion.
function buildCustomFunction(expr, errorElementId) {
    // Holt optional das Fehlerfeld aus dem HTML
    const errorEl = errorElementId ? document.getElementById(errorElementId) : null;

    // Falls nichts eingegeben wurde, wird eine Fehlermeldung angezeigt
    if (!expr || !expr.trim()) {
        if (errorEl) errorEl.textContent = 'Bitte eine Funktion eingeben.';
        return null;
    }

    // Ausdruck zuerst normalisieren
    const normalized = normalizeCustomExpression(expr);

    try {
        // Erstellt dynamisch eine Funktion aus dem eingegebenen Text.
        // Die erlaubten Variablen und Funktionen werden hier explizit übergeben.
        const fn = new Function(
            'tau', 'Ax', 'dtx', 'taux', 'dth', 'pi', 'e',
            'sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'abs',
            'u', 'rect', 'tri', 'delta',
            `return ${normalized};`
        );

        // Fehlertext löschen, wenn die Funktion gültig ist
        if (errorEl) errorEl.textContent = '';

        // Gibt eine sichere Wrapper-Funktion zurück
        return function (tau) {
            try {
                const value = fn(
                    tau, ctx.Ax, ctx.dtx, ctx.taux, ctx.dth, Math.PI, Math.E,
                    Math.sin, Math.cos, Math.tan, Math.exp, Math.log, Math.sqrt, Math.abs,
                    u, rect, tri, deltaApprox
                );

                // Nur endliche Zahlen werden akzeptiert
                return Number.isFinite(value) ? value : 0;
            } catch (e) {
                // Bei Fehlern in der Auswertung wird 0 zurückgegeben
                return 0;
            }
        };
    } catch (e) {
        // Falls der Ausdruck syntaktisch ungültig ist
        if (errorEl) errorEl.textContent = 'Ungültige Funktion.';
        return null;
    }
}

// Erkennt Delta-Terme in einer eigenen Funktion.
// Beispiel: 2*delta(tau-1) wird erkannt als Impuls bei tau = 1 mit Amplitude 2
function extractDeltaTerms(expr) {
    if (!expr) return [];

    // Ausdruck normalisieren und Leerzeichen entfernen
    const normalized = normalizeCustomExpression(expr).replace(/\s+/g, '');

    // Hier werden alle gefundenen Delta-Impulse gespeichert
    const terms = [];

    // Regulärer Ausdruck zum Finden von delta(tau), delta(tau-1), 2*delta(tau+1) usw.
    const regex = /([+-]?\s*\d*\.?\d*)\s*\*?\s*delta\(tau\s*([+-]\s*\d*\.?\d+)?\s*\)/g;

    let match;

    // Alle passenden Delta-Terme im Ausdruck durchlaufen
    while ((match = regex.exec(normalized)) !== null) {
        let ampStr = match[1];    // Amplitude vor delta(...)
        let shiftStr = match[2];  // Verschiebung innerhalb von delta(...)

        let amp;

        // Amplitude bestimmen
        if (ampStr === '' || ampStr === '+') amp = 1;
        else if (ampStr === '-') amp = -1;
        else amp = parseFloat(ampStr.replace(/\s+/g, ''));

        // Position des Delta-Impulses bestimmen
        // delta(tau-a) liegt bei tau = a
        // delta(tau+a) liegt bei tau = -a
        const pos = shiftStr ? -parseFloat(shiftStr.replace(/\s+/g, '')) : 0;

        // Nur gültige Werte speichern
        if (Number.isFinite(amp) && Number.isFinite(pos)) {
            terms.push({ pos, amp });
        }
    }

    return terms;
}

// Entfernt Delta-Terme aus einer eigenen Funktion.
// Das ist wichtig, weil Delta-Impulse getrennt als Stäbe gezeichnet werden.
function removeDeltaTerms(expr) {
    if (!expr || !expr.trim()) return '';

    const normalized = normalizeCustomExpression(expr);

    return normalized.replace(
        /(^|[+\-])\s*(\d*\.?\d*\s*\*?\s*)?delta\(tau\s*([+\-]\s*\d*\.?\d+)?\s*\)/g,
        (match, prefix) => {
            // Wenn der Delta-Term am Anfang steht, wird er durch 0 ersetzt
            if (!prefix || prefix === '') return '0';

            // Wenn davor + oder - steht, bleibt der Operator erhalten
            // Beispiel: sin(tau)+delta(tau) wird zu sin(tau)+0
            return `${prefix}0`;
        }
    );
}

// Wandelt einfache Tokens wie Ax, dtx, dth oder Zahlen in konkrete Werte um.
function resolveTokenValue(token, kind = 'input') {
    if (!token) return null;

    // Leerzeichen entfernen
    const t = token.replace(/\s+/g, '');

    // Bekannte Parameter aus ctx zurückgeben
    if (t === 'Ax') return ctx.Ax;
    if (t === 'dtx') return kind === 'input' ? ctx.dtx : ctx.dth;
    if (t === 'dth') return ctx.dth;
    if (t === 'taux') return ctx.taux;

    // Falls es eine Zahl ist, wird sie als Zahl zurückgegeben
    const num = parseFloat(t);
    return Number.isFinite(num) ? num : null;
}

// Prüft, ob eine eigene Funktion ein einfaches Rechteck ist.
// Dadurch kann ein Rechteck sauber mit senkrechten Kanten gezeichnet werden.
function parseSimpleRectExpression(expr, kind = 'input') {
    if (!expr) return null;

    // Ausdruck normalisieren und Leerzeichen entfernen
    const normalized = normalizeCustomExpression(expr).replace(/\s+/g, '');

    // Erkennt Formen wie:
    // rect(tau)
    // Ax*rect(tau)
    // 2*rect((tau-taux)/dtx)
    const outer = normalized.match(/^(?:(Ax|[+\-]?\d*\.?\d+)\*)?rect\((.+)\)$/);
    if (!outer) return null;

    // Amplitude bestimmen
    const amp = resolveTokenValue(outer[1] || '1', kind);

    // Inhalt der rect-Funktion
    const inside = outer[2];

    let center = 0;
    let width = 1;

    // Fall: rect(tau)
    if (inside === 'tau') {
        center = 0;
        width = 1;
    } else {
        // Fall: rect(tau-1), rect(tau+1), rect(tau-taux)
        const shifted = inside.match(/^tau([+\-])(.+)$/);

        if (shifted && !inside.includes('/')) {
            const sign = shifted[1];
            const value = resolveTokenValue(shifted[2], kind);
            if (!Number.isFinite(value)) return null;


            // Bei tau-a liegt das Zentrum bei a
            center = sign === '-' ? value : -value;
            width = 1;
        } else {
            // Fall: rect((tau-taux)/dtx)
            const scaled = inside.match(/^\(tau(?:(-|\+)([^)]+))?\)\/(.+)$/);
            if (!scaled) return null;

            const sign = scaled[1];
            const shiftToken = scaled[2];
            const widthToken = scaled[3];

            // Zentrum bestimmen
            if (shiftToken) {
                const shiftValue = resolveTokenValue(shiftToken, kind);
                if (!Number.isFinite(shiftValue)) return null;

                center = sign === '-' ? shiftValue : -shiftValue;
            } else {
                center = 0;
            }

            // Breite bestimmen
            width = resolveTokenValue(widthToken, kind);
        }
    }

    // Ungültige Werte abfangen
    if (
        !Number.isFinite(amp) ||
        !Number.isFinite(center) ||
        !Number.isFinite(width) ||
        Math.abs(width) < 1e-9
    ) {
        return null;
    }

    // Rechteckdaten zurückgeben
    return {
        amp,
        center,
        width: Math.abs(width)
    };
}

// Aktualisiert die gespeicherten eigenen Funktionen,
// sobald der Nutzer im Eingabefeld etwas geändert hat.
function refreshCustomFunctions() {
    const inputExpr = document.getElementById('custom-input-function')?.value || '';
    const impulseExpr = document.getElementById('custom-impulse-function')?.value || '';

// Eingangsfunktion x(t) neu einlesen, wenn sie sich geändert hat
if (inputExpr !== ctx.custom.inputExpr) {
    ctx.custom.inputExpr = inputExpr;
    ctx.custom.inputFn = buildCustomFunction(inputExpr, 'custom-input-error');
    ctx.custom.inputFnNoDelta = buildCustomFunction(removeDeltaTerms(inputExpr), null);
    ctx.custom.inputDeltaTerms = extractDeltaTerms(inputExpr);
    ctx.custom.inputPureDelta = isPureDeltaExpression(inputExpr);
}

// Impulsantwort h(t) neu einlesen, wenn sie sich geändert hat
if (impulseExpr !== ctx.custom.impulseExpr) {
    ctx.custom.impulseExpr = impulseExpr;
    ctx.custom.impulseFn = buildCustomFunction(impulseExpr, 'custom-impulse-error');
    ctx.custom.impulseFnNoDelta = buildCustomFunction(removeDeltaTerms(impulseExpr), null);
    ctx.custom.impulseDeltaTerms = extractDeltaTerms(impulseExpr);
    ctx.custom.impulsePureDelta = isPureDeltaExpression(impulseExpr);
}
}

// Prüft, ob bei x(t) oder h(t) Delta-Impulse vorhanden sind.
function hasCustomDelta(signalType) {
    if (signalType === 'input') {
        return ctx.custom.inputDeltaTerms && ctx.custom.inputDeltaTerms.length > 0;
    }
    if (signalType === 'impulse') {
        return ctx.custom.impulseDeltaTerms && ctx.custom.impulseDeltaTerms.length > 0;
    }
    return false;
}

// Bestimmt einen passenden y-Bereich für die Darstellung von Delta-Stäben.
function getDeltaStemYRange(terms) {
    // Standardbereich, falls keine Delta-Terme vorhanden sind
    if (!terms || !terms.length) {
        return { yMin: -0.5, yMax: 1.5 };
    }

    let yMin = 0;
    let yMax = 0;

    // Kleinste und größte Delta-Amplitude suchen
    for (const term of terms) {
        yMin = Math.min(yMin, term.amp);
        yMax = Math.max(yMax, term.amp);
    }

     // Falls alle Werte gleich sind, wird ein kleiner Bereich ergänzt
    if (Math.abs(yMax - yMin) < 1e-6) {
        yMax += 0.5;
        yMin -= 0.5;
    }

    // Zusätzlicher Abstand nach oben und unten
    const pad = Math.max(0.2, 0.2 * (yMax - yMin));
    return {
        yMin: yMin - pad,
        yMax: yMax + pad
    };
}

// ======================================================
// SIGNALAUSWERTUNG UND FALTUNGSBERECHNUNG
// ======================================================


// Prüft, ob eine eigene Funktion ausschließlich aus Delta-Impulsen besteht.
function isPureDeltaExpression(expr) {
    if (!expr || !expr.trim()) return false;

    // Entfernt alle Delta-Terme und prüft, ob danach nichts Wesentliches übrig bleibt
    const normalized = normalizeCustomExpression(expr)
        .replace(/\s+/g, '')
        .replace(/([+-]?\d*\.?\d*)\*?delta\(tau([+-]\d*\.?\d+)?\)/g, '')
        .replace(/[+-]/g, '');

    return normalized === '';
}

// Gibt den aktuellen Wert des Eingangssignals x(tau) zurück.
function get_xt(tau) {
    const sig = ctx.inputSignalType;

    // Rechtecksignal
    if (sig === 'rechteck') {
        return (tau >= ctx.taux - ctx.dtx / 2 && tau <= ctx.taux + ctx.dtx / 2) ? ctx.Ax : 0;
    }

    // Dreiecksignal
    if (sig === 'dreieck') {
        const dist = Math.abs(tau - ctx.taux);
        const half = ctx.dtx / 2;
        return dist <= half ? ctx.Ax * (1 - dist / half) : 0;
    }

    // Gaußsignal
    if (sig === 'gauss') {
        const sigma = Math.max(ctx.dtx / 2.355, 0.05);
        return ctx.Ax * Math.exp(-Math.pow(tau - ctx.taux, 2) / (2 * sigma * sigma));
    }

    // Exponentielles Eingangssignal
    if (sig === 'exponential') {
        return tau >= ctx.taux ? ctx.Ax * Math.exp(-(tau - ctx.taux) / Math.max(ctx.dtx, 0.05)) : 0;
    }

    // Benutzerdefinierte Funktion
    if (sig === 'custom') {
       return ctx.custom.inputFn ? ctx.custom.inputFn(tau) : 0;
    }

    return 0;
}

// Gibt den aktuellen Wert der Impulsantwort h(tau) zurück.
function get_ht(tau) {
    const sys = ctx.impulseResponseType;

    // Rechteckförmige Impulsantwort
    if (sys === 'spalt') {
        return (tau >= 0 && tau <= ctx.dth) ? (1.0 / Math.max(ctx.dth, 0.05)) : 0;
    }

    // Tiefpass 1. Ordnung
    if (sys === 'tp1') {
        return tau >= 0 ? (1.0 / Math.max(ctx.dth, 0.05)) * Math.exp(-tau / Math.max(ctx.dth, 0.05)) : 0;
    }

    // Tiefpass 2. Ordnung
    if (sys === 'tp2') {
        return tau >= 0 ? (tau / Math.max(ctx.dth * ctx.dth, 0.05)) * Math.exp(-tau / Math.max(ctx.dth, 0.05)) : 0;
    }

    // Gaußförmige Impulsantwort
    if (sys === 'gauss_tp') {
        const sigma = Math.max(ctx.dth / 2.355, 0.05);
        return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-(tau * tau) / (2 * sigma * sigma));
    }

    // Benutzerdefinierte Impulsantwort
    if (sys === 'custom') {
        return ctx.custom.impulseFn ? ctx.custom.impulseFn(tau) : 0;
   }

    return 0;
}

// Gibt x(tau) nur für die grafische Darstellung zurück.
// Delta-Impulse werden hier entfernt, weil sie separat als Stäbe gezeichnet werden.
function get_xt_plot(tau) {
    if (ctx.inputSignalType === 'custom') {
        return ctx.custom.inputFnNoDelta ? ctx.custom.inputFnNoDelta(tau) : 0;
    }
    return get_xt(tau);
}

// Gibt h(tau) nur für die grafische Darstellung zurück.
// Delta-Impulse werden hier entfernt, weil sie separat als Stäbe gezeichnet werden.
function get_ht_plot(tau) {
    if (ctx.impulseResponseType === 'custom') {
        return ctx.custom.impulseFnNoDelta ? ctx.custom.impulseFnNoDelta(tau) : 0;
    }
    return get_ht(tau);
}

// Berechnet die Faltung für einen bestimmten Zeitpunkt t.
function calculateConvolutionFast(t) {
    const inputType = ctx.inputSignalType;
    const impulseType = ctx.impulseResponseType;

    // Fall 1:
    // Wenn x(t) nur aus Delta-Impulsen besteht,
    // wird die Faltung analytisch als Summe verschobener h(t)-Anteile berechnet.
    if (inputType === 'custom' && ctx.custom.inputPureDelta) {
        let sum = 0;
        for (const term of ctx.custom.inputDeltaTerms) {
            sum += term.amp * get_ht_plot(t - term.pos);
        }
        return sum;
    }

    // Fall 2:
    // Wenn h(t) nur aus Delta-Impulsen besteht,
    // wird die Faltung analytisch als Summe verschobener x(t)-Anteile berechnet.
    if (impulseType === 'custom' && ctx.custom.impulsePureDelta) {
        let sum = 0;
        for (const term of ctx.custom.impulseDeltaTerms) {
            sum += term.amp * get_xt(t - term.pos);
        }
        return sum;
    }

    // Fall 3:
    // Normale numerische Berechnung des Faltungsintegrals.
    // Das Integral wird durch eine Summe angenähert:
    // y(t) ≈ Σ x(tau) · h(t - tau) · Δtau
    let sum = 0.0;
    for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += ctx.INTEGRATION_STEP) {
        const x_val = get_xt(tau);
        const h_val = get_ht(t - tau);
        sum += x_val * h_val * ctx.INTEGRATION_STEP;
    }

    return sum;
}

// ======================================================
// KONVOLUTIONSINTEGRAL
// ======================================================

// Wrapper-Funktion für die Faltungsberechnung.
// Aktuell ruft sie calculateConvolutionFast(t) auf.
function calculateConvolution(t) {
    return calculateConvolutionFast(t);
}

// ======================================================
// THEME-FUNKTION
// ======================================================

// Wechselt zwischen Dark- und Light-Theme.
function applyTheme(themeName) {
    // Aktuelles Theme speichern
    ctx.currentTheme = themeName;

    // Farbpalette zum gewählten Theme laden
    const palette = THEME_PALETTES[themeName] || THEME_PALETTES.dark;
    Object.assign(ctx.COLORS, palette);

    // CSS-Klasse am Body wechseln
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(themeName === 'dark' ? 'theme-dark' : 'theme-light');

    // Falls die JSXGraph-Boards schon existieren, Farben aktualisieren
    if (Object.keys(ctx.boards).length > 0) {
        Object.values(ctx.boards).forEach(board => {
            if (board && board.containerObj) {
                board.containerObj.style.backgroundColor = ctx.COLORS.PANEL;
            }
        });

        // Darstellung neu zeichnen
        restart(true);

        // Achsenfarben anpassen
        fixAxisColors();
    }

    // Text des Theme-Buttons ändern
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.textContent = themeName === 'dark' ? 'Theme: Dark' : 'Theme: Light';
    }
}

// ======================================================
// JSXGRAPH-BOARDS ERZEUGEN
// ======================================================

// Erstellt alle JSXGraph-Zeichenflächen:
// vier Diagramme und drei Steuerflächen für Slider.
function initBoards() {
    // Grundeinstellungen für Achsenmarkierungen
    const tickOptions = {
    minorTicks: 0,
    strokeColor: ctx.COLORS.TEXT,
    drawLabels: true,
    majorHeight: 8,
    label: { color: ctx.COLORS.TEXT, fontSize: 11 }
};

    // Grundeinstellungen für Achsen
    const axisOptions = {
        withLabel: true,
        strokeColor: ctx.COLORS.TEXT,
        strokeWidth: 1.5,
        label: {
            position: 'rt',
            offset: [-15, 10],
            color: ctx.COLORS.TEXT,
            fontSize: 13
        }
    };

    // Standardoptionen für die vier Diagramme
    const plotOptions = {
    boundingbox: [-4, 1.25, 4, -0.15],
    showNavigation: false,
    showCopyright: false,
    axis: true,
    grid: {
        strokeWidth: 0.4,
        majorStep: [1, 0.25],
        strokeColor: 'rgba(200, 200, 200, 0.15)'
    },
    zoom: { enabled: false },
    pan: { enabled: false },
    defaultAxes: {
        x: { name: 'τ', ticks: { ...tickOptions, insertTicks: false, ticksDistance: 1 }, ...axisOptions },
        y: { name: '', ticks: { ...tickOptions, insertTicks: false, ticksDistance: 0.25 }, ...axisOptions }
    }
};
    // Diagramm 1: Eingangssignal x(τ)
    ctx.boards.x    = JXG.JSXGraph.initBoard("boxeingangsimpuls", plotOptions);

    // Diagramm 2: Impulsantwort h(τ) und verschobene Impulsantwort h(t-τ)
    ctx.boards.h    = JXG.JSXGraph.initBoard("boximpulsantwort", plotOptions);

    // Diagramm 3: Produkt x(τ) · h(t-τ)
    ctx.boards.mult = JXG.JSXGraph.initBoard("boxmultiplikation", plotOptions);

    // Diagramm 4: Ausgangssignal y(t)
    ctx.boards.y = JXG.JSXGraph.initBoard("boxintegration", {
    ...plotOptions,
    boundingbox: [-4, 1.25, 4, -0.15],
    defaultAxes: {
        x: { name: 't', ticks: { ...tickOptions, insertTicks: false, ticksDistance: 1 }, ...axisOptions },
        y: { name: '', ticks: { ...tickOptions, insertTicks: false, ticksDistance: 0.25 }, ...axisOptions }
    }
});

    // Optionen für Slider-Steuerflächen
    const controlOptions = {
        boundingbox: [0, 100, 100, 0],
        showNavigation: false,
        showCopyright: false,
        axis: false,
        grid: false,
        zoom: { enabled: false },
        pan: { enabled: false }
    };

    // Slider-Board für Parameter von x(t)
    ctx.boards.controlX    = JXG.JSXGraph.initBoard("boxEinImp", controlOptions);

    // Slider-Board für Parameter von h(t)
    ctx.boards.controlH    = JXG.JSXGraph.initBoard("boxImpAnt", controlOptions);

    // Slider-Board für Zeitsteuerung t
    ctx.boards.controlAnim = JXG.JSXGraph.initBoard("boxAnimation", {
        ...controlOptions,
        boundingbox: [0, 50, 200, 0]
    });

    // Hintergrundfarbe aller Boards setzen
    Object.values(ctx.boards).forEach(board => {
        board.containerObj.style.backgroundColor = ctx.COLORS.PANEL;
    });
}

// ======================================================
// SICHTBARKEIT DER EIGENEN FUNKTIONEN
// ======================================================

// Blendet Eingabefelder für eigene Funktionen ein oder aus.
function updateCustomFunctionVisibility() {
    const inputSel = document.getElementById('input-signal');
    const impulseSel = document.getElementById('impulse-response');

    const inputBox = document.getElementById('custom-input-box');
    const impulseBox = document.getElementById('custom-impulse-box');

    // Eigene Funktion für x(t) nur anzeigen, wenn "Eigene Funktion" gewählt wurde
    if (inputSel && inputBox) {
        inputBox.classList.toggle('hidden', inputSel.value !== 'custom');
    }

    // Eigene Funktion für h(t) nur anzeigen, wenn "Eigene Funktion" gewählt wurde
    if (impulseSel && impulseBox) {
        impulseBox.classList.toggle('hidden', impulseSel.value !== 'custom');
    }
}

// Liest aus den Dropdown-Menüs die aktuell gewählten Signaltypen aus.
function refreshSelectedTypes() {
    const inputSel = document.getElementById('input-signal');
    const impulseSel = document.getElementById('impulse-response');

    ctx.inputSignalType = inputSel ? inputSel.value : 'gauss';
    ctx.impulseResponseType = impulseSel ? impulseSel.value : 'tp1';
}

// Prüft, ob eigene Funktionen sehr lang oder sehr komplex sind.
// Dann wird die Produktfläche vereinfacht dargestellt.
function isHeavyCustomScene() {
    const inputHeavy =
        ctx.inputSignalType === 'custom' &&
        (
            ctx.custom.inputExpr.length > 90 ||
            ctx.custom.inputDeltaTerms.length > 4
        );

    const impulseHeavy =
        ctx.impulseResponseType === 'custom' &&
        (
            ctx.custom.impulseExpr.length > 90 ||
            ctx.custom.impulseDeltaTerms.length > 4
        );

    return inputHeavy || impulseHeavy;
}

// Verzögert das Neuzeichnen bei eigener Funktion,
// damit nicht bei jedem Tastendruck sofort alles berechnet wird.
function scheduleCustomRedraw() {
    if (ctx.customInputTimer) {
        clearTimeout(ctx.customInputTimer);
    }

ctx.customInputTimer = setTimeout(() => {
    pauseAnimation();
    invalidateZoomCache();
    restart(false);
    ctx.customInputTimer = null;
}, 700);
}

// Markiert den Zoom-Bereich als ungültig.
// Beim nächsten Zeichnen wird er neu berechnet.
function invalidateZoomCache() {
    ctx.zoomCache.valid = false;
    ctx.needsAutoZoom = true;
}

// ======================================================
// SLIDER UND EINGABEFELDER
// ======================================================

// Erstellt alle Slider und verbindet sie mit den Eingabefeldern.
function initControls() {
    const sliderStyle = {
        strokeColor: '#00bcd4',
        highlightStrokeColor: '#00acc1',
        fillColor: '#00bcd4',
        highlightFillColor: '#00acc1',
        size: 8,
        withLabel: false
        
    };

    // Slider für Amplitude A_x
    ctx.boards.controlX.sldAx = ctx.boards.controlX.create("slider",
        [[5, 20], [95, 20], [0.1, ctx.Ax, 3.0]],
        { ...sliderStyle, snapWidth: 0.05 }
    );

    // Slider für Breite Δt_x
    ctx.boards.controlX.slddtx = ctx.boards.controlX.create("slider",
        [[5, 50], [95, 50], [0.0, ctx.dtx, 4.0]],
        { ...sliderStyle, snapWidth: 1.0 }
    );

    // Slider für Verschiebung τ_x
    ctx.boards.controlX.sldtaux = ctx.boards.controlX.create("slider",
        [[5, 80], [95, 80], [ctx.T_MIN, ctx.taux, ctx.T_MAX]],
        { ...sliderStyle, snapWidth: 0.1 }
    );

    // Slider für Parameter Δt_h
    ctx.boards.controlH.slddth = ctx.boards.controlH.create("slider",
        [[5, 30], [95, 30], [0.1, ctx.dth, 4.0]],
        { ...sliderStyle, snapWidth: 0.1 }
   );

    // Slider für den aktuellen Zeitpunkt t
    ctx.boards.controlAnim.sldTime = ctx.boards.controlAnim.create('slider',
        [[10, 25], [190, 25], [ctx.T_MIN, ctx.T_MIN, ctx.T_MAX]],
        { ...sliderStyle, snapWidth: 0.001 }
    );

    const red = '#e53935';

    // Textanzeige für A_x
    ctx.boards.controlX.create('text',
        [50, 10, () => `A_x = ${ctx.boards.controlX.sldAx.Value().toFixed(2)}`],
        {
            anchorX: 'middle',
            anchorY: 'middle',
            strokeColor: red,
            fontSize: 16,
            cssStyle: 'font-family: monospace; font-weight: 700;'
        }
    );

    // Textanzeige für Δt_x
    ctx.boards.controlX.create('text',
        [50, 40, () => `Δt_x = ${ctx.boards.controlX.slddtx.Value().toFixed(2)}`],
        {
            anchorX: 'middle',
            anchorY: 'middle',
            strokeColor: red,
            fontSize: 16,
            cssStyle: 'font-family: monospace; font-weight: 700;'
        }
    );

    // Textanzeige für τ_x
    ctx.boards.controlX.create('text',
        [50, 70, () => `τ_x = ${ctx.boards.controlX.sldtaux.Value().toFixed(2)}`],
        {
            anchorX: 'middle',
            anchorY: 'middle',
            strokeColor: red,
            fontSize: 16,
            cssStyle: 'font-family: monospace; font-weight: 700;'
        }
    );

    // Textanzeige für Δt_h
    ctx.boards.controlH.create('text',
        [50, 20, () => `Δt_h = ${ctx.boards.controlH.slddth.Value().toFixed(2)}`],
        {
            anchorX: 'middle',
            anchorY: 'middle',
            strokeColor: red,
            fontSize: 16,
            cssStyle: 'font-family: monospace; font-weight: 700;'
        }
    );

    // Textanzeige für t
    ctx.boards.controlAnim.create('text',
        [100, 10, () => `t = ${ctx.boards.controlAnim.sldTime.Value().toFixed(2)}`],
        {
            anchorX: 'middle',
            anchorY: 'middle',
            strokeColor: red,
            fontSize: 16,
            cssStyle: 'font-family: monospace; font-weight: 700;'
        }
    );

    // Gemeinsame Funktion, wenn ein Slider verändert wird
    const updateHandler = function () {
        ctx.Ax  = ctx.boards.controlX.sldAx.Value();
        ctx.dtx = ctx.boards.controlX.slddtx.Value();
        ctx.taux= ctx.boards.controlX.sldtaux.Value();
        ctx.dth = ctx.boards.controlH.slddth.Value();
        const axInput = document.getElementById('Ax-input');
        const dtxInput = document.getElementById('dtx-input');
        const tauxInput = document.getElementById('taux-input');
        const dthInput = document.getElementById('dth-input');

        if (axInput) axInput.value = ctx.Ax.toFixed(2);
        if (dtxInput) dtxInput.value = ctx.dtx.toFixed(2);
        if (tauxInput) tauxInput.value = ctx.taux.toFixed(2);
        if (dthInput) dthInput.value = ctx.dth.toFixed(2);

        invalidateZoomCache();
        restart(false);
    };

    // Slider mit updateHandler verbinden
    ctx.boards.controlX.sldAx.on('drag',     updateHandler);
    ctx.boards.controlX.slddtx.on('drag',    updateHandler);
    ctx.boards.controlX.sldtaux.on('drag',   updateHandler);
    ctx.boards.controlH.slddth.on('drag',    updateHandler);

// Eingabefelder aus HTML holen   
const axInput = document.getElementById('Ax-input');
const dtxInput = document.getElementById('dtx-input');
const tauxInput = document.getElementById('taux-input');
const dthInput = document.getElementById('dth-input');
const timeInput = document.getElementById('time-input');

// Werte der Slider in die Eingabefelder schreiben
function syncInputsFromSliders() {
    if (axInput) axInput.value = ctx.boards.controlX.sldAx.Value().toFixed(2);
    if (dtxInput) dtxInput.value = ctx.boards.controlX.slddtx.Value().toFixed(2);
    if (tauxInput) tauxInput.value = ctx.boards.controlX.sldtaux.Value().toFixed(2);
    if (dthInput) dthInput.value = ctx.boards.controlH.slddth.Value().toFixed(2);
    if (timeInput) timeInput.value = ctx.boards.controlAnim.sldTime.Value().toFixed(2);
}

syncInputsFromSliders();

 // Eingabefeld A_x steuert den Slider
if (axInput) {
    axInput.addEventListener('input', function () {
        const v = parseFloat(this.value);
        if (!isNaN(v)) {
            ctx.boards.controlX.sldAx.setValue(v);
            updateHandler();
            syncInputsFromSliders();
        }
    });
}

// Eingabefeld Δt_x steuert den Slider
if (dtxInput) {
    dtxInput.addEventListener('input', function () {
        const v = parseFloat(this.value);
        if (!isNaN(v)) {
            ctx.boards.controlX.slddtx.setValue(v);
            updateHandler();
            syncInputsFromSliders();
        }
    });
}

// Eingabefeld τ_x steuert den Slider
if (tauxInput) {
    tauxInput.addEventListener('input', function () {
        const v = parseFloat(this.value);
        if (!isNaN(v)) {
            ctx.boards.controlX.sldtaux.setValue(v);
            updateHandler();
            syncInputsFromSliders();
        }
    });
}

// Eingabefeld Δt_h steuert den Slider
if (dthInput) {
    dthInput.addEventListener('input', function () {
        const v = parseFloat(this.value);
        if (!isNaN(v)) {
            ctx.boards.controlH.slddth.setValue(v);
            updateHandler();
            syncInputsFromSliders();
        }
    });
}

// Eingabefeld t steuert den Zeit-Slider
if (timeInput) {
    timeInput.addEventListener('input', function () {
        const v = parseFloat(this.value);
        if (!isNaN(v)) {
            ctx.boards.controlAnim.sldTime.setValue(v);
            pauseAnimation();
            updateGraphs();
            syncInputsFromSliders();
        }
    });
}

// Änderung des Eingangssignals
document.getElementById('input-signal').onchange = function () {
   refreshSelectedTypes();
   updateCustomFunctionVisibility();
   invalidateZoomCache();
   updateHandler();
};

// Änderung der Impulsantwort
document.getElementById('impulse-response').onchange = function () {
   refreshSelectedTypes();
   updateCustomFunctionVisibility();
   invalidateZoomCache();
   updateHandler();
};

   // Sichtbarkeit der Custom-Felder direkt initial setzen  
   updateCustomFunctionVisibility();

   // Zeit-Slider wird per Maus bewegt
    ctx.boards.controlAnim.sldTime.on('drag', function () {
        pauseAnimation();
        updateGraphs();
        const timeInput = document.getElementById('time-input');
        if (timeInput) timeInput.value = ctx.boards.controlAnim.sldTime.Value().toFixed(2);
    });

    // Eingabefeld für eigene x-Funktion
    const customInput = document.getElementById('custom-input-function');

    // Eingabefeld für eigene h-Funktion
    const customImpulse = document.getElementById('custom-impulse-function');

    // Änderungen an eigener x-Funktion verzögert neu zeichnen
    if (customInput) {
        customInput.addEventListener('input', function () {
                    scheduleCustomRedraw();
        });
    }

    // Änderungen an eigener h-Funktion verzögert neu zeichnen
    if (customImpulse) {
        customImpulse.addEventListener('input', function () {
                    scheduleCustomRedraw();
        });
    }
}

// ======================================================
// ACHSFARBEN JE NACH THEME ANPASSEN
// ======================================================

// Passt die Achsenfarben der JSXGraph-Boards an das aktuelle Theme an.
function fixAxisColors() {
    const textColor = ctx.currentTheme === 'dark' ? '#E0E0E0' : '#000000';

    Object.values(ctx.boards).forEach(board => {
        if (!board || !board.defaultAxes) return;

        const ax = board.defaultAxes;

        // x-Achse einfärben
        if (ax.x) {
            ax.x.setAttribute({
                strokeColor: textColor,
                label: { color: textColor }
            });
        }

        // y-Achse einfärben
        if (ax.y) {
            ax.y.setAttribute({
                strokeColor: textColor,
                label: { color: textColor }
            });
        }
    });
}

// ======================================================
// ÜBUNGEN: TEXT UND MULTIPLE-CHOICE-UI
// ======================================================

// Aktualisiert Titel, Beschreibung und Lösungstext einer Übung.
function updateExerciseText(idx) {
    const ex = EXERCISES[idx];
    if (!ex) return;

    // Aktuelle Aufgabe merken
    currentExerciseIndex = idx;

    // HTML-Elemente holen
    const titleEl = document.getElementById('exercise-title');
    const descEl  = document.getElementById('exercise-description');
    const solEl   = document.getElementById('exercise-solution');

    // Aufgabentitel setzen
    if (titleEl) titleEl.textContent = ex.title;

    // Aufgabenbeschreibung setzen
    if (descEl)  descEl.textContent  = ex.description;

    // Standard-Hinweis in der Lösung anzeigen
    if (solEl)   solEl.textContent   =
        "Klicke auf „Aufgabe laden“, um die Startwerte zu übernehmen. " +
        "Mit „Musterlösung anzeigen“ erhältst du einen Lösungsvorschlag.";

    // Multiple-Choice-Frage passend zur Aufgabe anzeigen    
    renderMCForCurrentExercise();
}

// Lädt die Startwerte der aktuell ausgewählten Übung in die Simulation.
function applyCurrentExerciseSettings() {
    const ex = EXERCISES[currentExerciseIndex];
    if (!ex) return;

    const s = ex.settings;

    // Dropdowns auf die Werte der Aufgabe setzen
    document.getElementById('input-signal').value     = s.inputSignal;
    document.getElementById('impulse-response').value = s.impulseResponse;

    // Sliderwerte setzen
    ctx.boards.controlX.sldAx.setValue(s.Ax);
    ctx.boards.controlX.slddtx.setValue(s.dtx);
    ctx.boards.controlX.sldtaux.setValue(s.taux);
    ctx.boards.controlH.slddth.setValue(s.dth);
    ctx.boards.controlAnim.sldTime.setValue(s.tStart ?? ctx.T_MIN);

    // Werte auch im Kontext speichern
    ctx.Ax  = s.Ax;
    ctx.dtx = s.dtx;
    ctx.taux= s.taux;
    ctx.dth = s.dth;

    // Signaltypen aktualisieren
    refreshSelectedTypes();

    // Zoom beim nächsten Zeichnen neu berechnen
    ctx.needsAutoZoom = true;

    // Simulation neu starten
    restart(true);
}

// Zeigt die Musterlösung bzw. den Lösungshinweis der aktuellen Aufgabe.
function showExerciseSolution() {
    const ex = EXERCISES[currentExerciseIndex];
    if (!ex) return;
    const solEl = document.getElementById('exercise-solution');
    if (solEl) solEl.textContent = ex.solutionHint;
}

// // Erstellt die Multiple-Choice-Frage für die aktuelle Aufgabe.
function renderMCForCurrentExercise() {
    const ex = EXERCISES[currentExerciseIndex];
    const qEl = document.getElementById('mc-question');
    const optEl = document.getElementById('mc-options');
    const fbEl = document.getElementById('mc-feedback');

    // Falls keine MC-Frage vorhanden ist
    if (!ex || !ex.mc) {
        if (qEl) qEl.textContent = "Keine Multiple-Choice-Frage für diese Aufgabe definiert.";
        if (optEl) optEl.innerHTML = "";
        if (fbEl) fbEl.textContent = "";
        return;
    }

    const mc = ex.mc;

    // Frage anzeigen
    if (qEl) qEl.textContent = mc.question || "";

    // Feedback zurücksetzen
    if (fbEl) {
        fbEl.textContent = "";
        fbEl.classList.remove('ok', 'err');
    }

    // Antwortoptionen neu erzeugen
    if (optEl) {
        optEl.innerHTML = "";
        mc.options.forEach((text, idx) => {

            // Eindeutige ID für jede Antwortoption
            const id = `mc-opt-${currentExerciseIndex}-${idx}`;

            // Label als klickbare Zeile
            const label = document.createElement('label');
            label.className = 'mc-option-label';

            // Radio-Button
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'mc-options-group';
            input.value = idx;
            input.id = id;

            // Antworttext
            const span = document.createElement('span');
            span.textContent = text;

            // Elemente zusammensetzen
            label.appendChild(input);
            label.appendChild(span);
            optEl.appendChild(label);
        });
    }
}

// Prüft, ob die ausgewählte Multiple-Choice-Antwort richtig ist.
function checkMCAnswer() {
    const ex = EXERCISES[currentExerciseIndex];
    if (!ex || !ex.mc) return;
    const mc = ex.mc;

    const fbEl = document.getElementById('mc-feedback');
    const radios = document.querySelectorAll('input[name="mc-options-group"]');

    let selectedIndex = null;

    // Prüfen, welche Antwort gewählt wurde
    radios.forEach(r => {
        if (r.checked) selectedIndex = parseInt(r.value, 10);
    });

    // Keine Antwort ausgewählt
    if (selectedIndex === null) {
        if (fbEl) {
            fbEl.textContent = "Bitte wähle eine Antwort aus.";
            fbEl.classList.remove('ok', 'err');
        }
        return;
    }

    // Feedback ausgeben
    if (fbEl) {
        if (selectedIndex === mc.correctIndex) {
            fbEl.textContent = "Richtig! " + (mc.explanation || "");
            fbEl.classList.remove('err');
            fbEl.classList.add('ok');
        } else {
            fbEl.textContent = "Nicht ganz. " + (mc.explanation || "");
            fbEl.classList.remove('ok');
            fbEl.classList.add('err');
        }
    }
}

// ======================================================
// REALE LTI-SYSTEME LADEN
// ======================================================

// Lädt ein reales LTI-System in die Simulation.
function loadRealSystem() {
    // Gewähltes System aus Dropdown lesen
    const sys = document.getElementById("realsystem-select").value;

    // Texte und Parameter vorbereiten
    let desc = "";
    let formula = "";
    let app = "";
    let dth = ctx.dth;
    let impulse = "tp1";

    // Je nach System passende Beschreibung und Impulsantwort wählen
    switch (sys) {
        case "rc_lowpass":
            desc = "Ein RC-Tiefpass 1. Ordnung filtert hohe Frequenzen und lässt langsame Signalanteile passieren.";
            formula = "h(t) = (1/RC) · e^(–t/RC) · u(t)";
            app = "Glättung, Entstörung, analoge Tiefpassfilter.";
            impulse = "tp1";
            dth = 0.8;
            break;

        case "rc_highpass":
            desc = "Ein RC-Hochpass dämpft sehr langsame oder konstante Signale und lässt schnelle Änderungen durch.";
            formula = "h(t) = δ(t) – (1/RC) · e^(–t/RC) · u(t)";
            app = "Kopplungskondensator, Differenzierer, Rauschunterdrückung von DC-Anteilen.";
            impulse = "tp1";
            dth = 0.3;
            break;

        case "rl_lowpass":
            desc = "Ein RL-Tiefpass dämpft hohe Frequenzen über die Induktivität.";
            formula = "h(t) = (R/L) · e^(–R t/L) · u(t)";
            app = "Motoransteuerung, Stromglättung, Filterung von Schaltimpulsen.";
            impulse = "tp1";
            dth = 1.5;
            break;

        case "rl_highpass":
            desc = "Ein RL-Hochpass sperrt niederfrequente Komponenten und betont schnelle Änderungen.";
            formula = "h(t) = δ(t) – (R/L) · e^(–R t/L) · u(t)";
            app = "Hochfrequenztechnik, Entkopplung, Transientenanalyse.";
            impulse = "tp1";
            dth = 0.2;
            break;

        case "mass_spring":
            desc = "Masse-Feder-Dämpfer-System: Klassisches Beispiel eines Systems 2. Ordnung mit gedämpfter Schwingung.";
            formula = "h(t) = (1/ω_d) e^(–ζ ω_n t) sin(ω_d t) · u(t)";
            app = "Fahrwerksdynamik, Schwingungsdämpfer, mechanische Filter.";
            impulse = "tp2";
            dth = 1.2;
            break;

        case "moving_average":
            desc = "Gleitender Mittelwert (Moving Average): Mittelt das Signal über ein Zeitfenster und glättet schnelle Störungen.";
            formula = "h(t) = 1/T für 0 ≤ t ≤ T, sonst 0";
            app = "Datenglättung, Sensorfilter, einfache digitale Tiefpässe.";
            impulse = "spalt";
            dth = 1.0;
            break;
    }

    // Dropdown für Impulsantwort aktualisieren
    document.getElementById("impulse-response").value = impulse;

    // Systembeschreibung in der Theoriebox anzeigen
    document.getElementById("system-description").textContent = desc;
    document.getElementById("system-formula").textContent = formula;
    document.getElementById("system-application").textContent = app;

    // Parameter Δt_h setzen
    ctx.dth = dth;

    // Slider für Δt_h aktualisieren
    if (ctx.boards.controlH && ctx.boards.controlH.slddth) {
        ctx.boards.controlH.slddth.setValue(dth);
    }

    // Signaltyp neu einlesen
    refreshSelectedTypes();

    // Zoom neu berechnen lassen
    ctx.needsAutoZoom = true;

    // Simulation neu starten
    restart(true);
}

// Zeichnet Delta-Impulse als senkrechte Stäbe in ein Diagramm.
function drawDeltaStems(board, terms, color, shiftedT = null) {
    // Wenn keine Delta-Terme vorhanden sind, nichts zeichnen
    if (!terms || !terms.length) return [];

    const stems = [];
    for (const term of terms) {
        // Position des Delta-Impulses
        let x = term.pos;

        // Falls shiftedT gesetzt ist, wird h(t-τ) dargestellt
        if (shiftedT !== null) {
            x = shiftedT - term.pos;
        }

        // Höhe des Delta-Stabes
        const y = term.amp;

        // Senkrechte Linie des Delta-Impulses
        const stem = board.create('segment', [[x, 0], [x, y]], {
            strokeColor: color,
            strokeWidth: board === ctx.boards.mult ? 5 : 3,
            highlight: false
        });

        // Punkt an der Spitze des Delta-Stabes
        const head = board.create('point', [x, y], {
            fixed: true,
            size: board === ctx.boards.mult ? 4 : 2,
            strokeColor: color,
            fillColor: color,
            highlight: false,
            name: ''
        });

        // Linie und Punkt speichern, damit sie später gelöscht werden können
        stems.push(stem, head);
    }
    return stems;
}

// Bestimmt ungefähr den y-Bereich eines Signals durch Abtasten.
function sampleSignalRange(fn, xMin, xMax, step = 0.2) {
    let yMin = Infinity;
    let yMax = -Infinity;
    let hasFinite = false;

    // Signal im Bereich abtasten
    for (let x = xMin; x <= xMax; x += step) {
        const y = fn(x);

        // Nur gültige Zahlen berücksichtigen
        if (Number.isFinite(y)) {
            hasFinite = true;
            if (y < yMin) yMin = y;
            if (y > yMax) yMax = y;
        }
    }

    // Falls keine gültigen Werte gefunden wurden
    if (!hasFinite) {
        return { yMin: -0.5, yMax: 1.0 };
    }

    // Wenn Minimum und Maximum fast gleich sind, Bereich künstlich vergrößern
    if (Math.abs(yMax - yMin) < 1e-6) {
        yMax += 0.5;
        yMin -= 0.5;
    }

    // Abstand nach oben und unten hinzufügen
    const pad = Math.max(0.15, 0.15 * (yMax - yMin));
    return {
        yMin: yMin - pad,
        yMax: yMax + pad
    };
}

// Verbindet mehrere y-Bereiche zu einem gemeinsamen Bereich.
function mergeYRanges(...ranges) {
    // Nur gültige Bereiche verwenden
    const valid = ranges.filter(r => r && Number.isFinite(r.yMin) && Number.isFinite(r.yMax));
    if (!valid.length) return { yMin: -0.15, yMax: 1.25 };

    let yMin = valid[0].yMin;
    let yMax = valid[0].yMax;

    // Kleinstes Minimum und größtes Maximum bestimmen
    for (const r of valid.slice(1)) {
        yMin = Math.min(yMin, r.yMin);
        yMax = Math.max(yMax, r.yMax);
    }

    return { yMin, yMax };
}

// Bestimmt den sichtbaren x-Bereich für eigene Signale.
function getSignalXWindow() {
    let xMin = -4;
    let xMax = 4;

    const inputType = ctx.inputSignalType;
    const impulseType = ctx.impulseResponseType;

    // Bei normalen Standardfunktionen bleibt der feste Bereich erhalten
    if (inputType !== 'custom' && impulseType !== 'custom') {
        return { xMin: -4, xMax: 4 };
    }

    // Eigene Eingangsfunktion x(t) untersuchen
    if (inputType === 'custom') {
        let found = false;
        let first = null;
        let last = null;

        // Bereich abtasten und relevante Stellen finden
        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.1) {
            const y = get_xt_plot(tau);
            if (Math.abs(y) > 1e-4) {
                if (!found) first = tau;
                last = tau;
                found = true;
            }
        }

        // Sichtbaren Bereich erweitern
        if (found) {
            xMin = Math.min(xMin, first - 1.0);
            xMax = Math.max(xMax, last + 1.0);
        }

        // Delta-Positionen berücksichtigen
        if (ctx.custom.inputDeltaTerms.length) {
            const xs = ctx.custom.inputDeltaTerms.map(d => d.pos);
            xMin = Math.min(xMin, Math.min(...xs) - 1.5);
            xMax = Math.max(xMax, Math.max(...xs) + 1.5);
        }
    }

    // Eigene Impulsantwort h(t) untersuchen
    if (impulseType === 'custom') {
        let found = false;
        let first = null;
        let last = null;

        // Bereich abtasten und relevante Stellen finden
        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.05) {
            const y = get_ht_plot(tau);
            if (Math.abs(y) > 1e-4) {
                if (!found) first = tau;
                last = tau;
                found = true;
            }
        }

        // Sichtbaren Bereich erweitern
        if (found) {
            xMin = Math.min(xMin, first - 1.0);
            xMax = Math.max(xMax, last + 1.0);
        }

        // Delta-Positionen berücksichtigen
        if (ctx.custom.impulseDeltaTerms.length) {
            const hs = ctx.custom.impulseDeltaTerms.map(d => d.pos);
            xMin = Math.min(xMin, Math.min(...hs) - 1.5);
            xMax = Math.max(xMax, Math.max(...hs) + 1.5);
        }
    }

    // Bereich auf globale Grenzen begrenzen
    xMin = Math.max(ctx.T_MIN, xMin);
    xMax = Math.min(ctx.T_MAX, xMax);

    // Mindestbreite des sichtbaren Bereichs sicherstellen
    if (xMax - xMin < 6) {
        const mid = 0.5 * (xMin + xMax);
        xMin = Math.max(ctx.T_MIN, mid - 3);
        xMax = Math.min(ctx.T_MAX, mid + 3);
    }

    return { xMin, xMax };
}

// Berechnet den Zoom-Bereich für eigene Funktionen neu.
function rebuildCustomZoomCache(t) {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    // Wenn keine eigene Funktion aktiv ist, Standardzoom verwenden
    if (!hasCustomInput && !hasCustomImpulse) {
        ctx.zoomCache = {
            valid: true,
            left: -4,
            right: 4,
            xYMin: -0.15,
            xYMax: 1.25,
            hYMin: -0.15,
            hYMax: 1.25,
            multYMin: -0.15,
            multYMax: 1.25
        };
        return;
    }

    // x-Bereich bestimmen
    const { xMin, xMax } = getSignalXWindow();

    // Rand links und rechts hinzufügen
    const viewPad = 0.8;
    const left = Math.max(ctx.T_MIN, xMin - viewPad);
    const right = Math.min(ctx.T_MAX, xMax + viewPad);

    // y-Bereich des Eingangssignals bestimmen
    let xRange;
    if (hasCustomInput && ctx.custom.inputPureDelta) {
    xRange = getDeltaStemYRange(ctx.custom.inputDeltaTerms);
    } else {
    xRange = sampleSignalRange(get_xt_plot, xMin, xMax, 0.1);
    if (hasCustomInput && ctx.custom.inputDeltaTerms.length) {
        xRange = mergeYRanges(xRange, getDeltaStemYRange(ctx.custom.inputDeltaTerms));
    }
    }

    // y-Bereich der normalen Impulsantwort h(τ)
    let hBaseRange;
    if (hasCustomImpulse && ctx.custom.impulsePureDelta) {
        hBaseRange = getDeltaStemYRange(ctx.custom.impulseDeltaTerms);
    } else {
        hBaseRange = sampleSignalRange(get_ht_plot, xMin, xMax, 0.1);
    if (hasCustomImpulse && ctx.custom.impulseDeltaTerms.length) {
        hBaseRange = mergeYRanges(hBaseRange, getDeltaStemYRange(ctx.custom.impulseDeltaTerms));
    }
   }

    // y-Bereich der gespiegelten oder verschobenen Impulsantwort bestimmen
    let hRefRange;
    if (hasCustomImpulse && ctx.custom.impulsePureDelta) {
        hRefRange = getDeltaStemYRange(ctx.custom.impulseDeltaTerms);
    } else if (ctx.started) {
        hRefRange = sampleSignalRange(tau => get_ht_plot(t - tau), xMin, xMax, 0.12);
    if (hasCustomImpulse && ctx.custom.impulseDeltaTerms.length) {
        hRefRange = mergeYRanges(hRefRange, getDeltaStemYRange(ctx.custom.impulseDeltaTerms));
    }
    } else {
        hRefRange = sampleSignalRange(tau => get_ht_plot(-tau), xMin, xMax, 0.12);
    if (hasCustomImpulse && ctx.custom.impulseDeltaTerms.length) {
        hRefRange = mergeYRanges(hRefRange, getDeltaStemYRange(ctx.custom.impulseDeltaTerms));
    }
    }

    // Gemeinsamer y-Bereich für h(τ) und h(t-τ)
    const hYMin = Math.min(hBaseRange.yMin, hRefRange.yMin);
    const hYMax = Math.max(hBaseRange.yMax, hRefRange.yMax);

    // y-Bereich der Multiplikation vorbereiten
    let multRange = { yMin: -0.15, yMax: 1.25 };

    // Prüfen, ob das Produkt nur Delta-Fälle enthält
    const onlyDeltaProduct =
        (ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta) ||
        (ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta);

    // Produktbereich nur abtasten, wenn es sinnvoll ist    
    if (ctx.started && !onlyDeltaProduct && !isHeavyCustomScene()) {
        multRange = sampleSignalRange(
            tau => get_xt_plot(tau) * get_ht_plot(t - tau),
            xMin,
            xMax,
            0.05
       );
    }

    // Ergebnisse im Cache speichern
    ctx.zoomCache = {
        valid: true,
        left,
        right,
        xYMin: xRange.yMin,
        xYMax: xRange.yMax,
        hYMin,
        hYMax,
        multYMin: multRange.yMin,
        multYMax: multRange.yMax
    };
}

// Wendet den passenden Zoom auf alle Diagramme an.
function applyAutoZoom(t) {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    // Standardzoom für normale Signale
    if (!hasCustomInput && !hasCustomImpulse) {
        ctx.boards.x.setBoundingBox([-4, 1.25, 4, -0.15], false);
        ctx.boards.h.setBoundingBox([-4, 1.25, 4, -0.15], false);
        ctx.boards.mult.setBoundingBox([-4, 1.25, 4, -0.15], false);
        ctx.boards.y.setBoundingBox([-4, 1.25, 4, -0.15], false);
        return;
    }

    // Zoom für eigene Funktionen nur neu berechnen, wenn der Cache ungültig ist
    if (!ctx.zoomCache.valid) {
        rebuildCustomZoomCache(t);
    }

    const z = ctx.zoomCache;

    // Anfangswerte für y(t)-Diagramm
    let yMin = -0.15;
    let yMax = 1.25;

    // Wenn bereits y(t)-Werte vorhanden sind, y-Achse daran anpassen
    if (ctx.dataintY.length > 0) {
        const yDataMin = Math.min(...ctx.dataintY);
        const yDataMax = Math.max(...ctx.dataintY);
        const yPad = Math.max(0.15, 0.15 * Math.max(0.5, yDataMax - yDataMin));
        yMin = yDataMin - yPad;
        yMax = yDataMax + yPad;
    }

    // Zoom für Eingangssignal
    ctx.boards.x.setBoundingBox([z.left, z.xYMax, z.right, z.xYMin], false);

    // Zoom für Impulsantwort
    ctx.boards.h.setBoundingBox([z.left, z.hYMax, z.right, z.hYMin], false);


    // Zoom für Produktdiagramm vorbereiten
    let multYMin = z.multYMin;
    let multYMax = z.multYMax;

    // Prüfen, ob Delta-Fälle vorliegen
    const pureDeltaInput =
          ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
    ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    // Bei Delta-Fällen eigenen y-Bereich für Produkt bestimmen
    if (ctx.started && (pureDeltaInput || pureDeltaImpulse)) {
        const r = getMultiplicationDeltaYRange(t);
        multYMin = r.yMin;
        multYMax = r.yMax;
    }

    // Zoom für Produktdiagramm
    ctx.boards.mult.setBoundingBox([z.left, multYMax, z.right, multYMin], false);

    // Zoom für Ausgangssignal
    ctx.boards.y.setBoundingBox([z.left, yMax, z.right, yMin], false);

    // Achsenabstände anpassen
    updateBoardTickDensity(ctx.boards.x, z.right - z.left, z.xYMax - z.xYMin);
    updateBoardTickDensity(ctx.boards.h, z.right - z.left, z.hYMax - z.hYMin);
}

// Passt den Zoom des y(t)-Diagramms dynamisch an.
function updateYBoardZoom() {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    // Standard-x-Bereich
    let left = -4;
    let right = 4;

    // Bei eigenen Funktionen den gespeicherten Zoom-Bereich verwenden
    if (hasCustomInput || hasCustomImpulse) {
        if (!ctx.zoomCache.valid) {
            rebuildCustomZoomCache(ctx.boards.controlAnim.sldTime.Value());
        }
        left = ctx.zoomCache.left;
        right = ctx.zoomCache.right;
    }

    // Standard-y-Bereich
    let yMin = -0.15;
    let yMax = 1.25;

    // Aktuellen Zeitpunkt lesen
    const tCurrent = ctx.boards.controlAnim.sldTime.Value();

    // Aktuelle Ausgangsdaten bestimmen
    const out = getCurrentOutputSamplesForResults(tCurrent);

    // y-Achse an die Ausgangsdaten anpassen
    if (out.ys.length > 0) {
        const minVal = Math.min(...out.ys);
        const maxVal = Math.max(...out.ys);
        const span = Math.max(0.5, maxVal - minVal);
        const pad = Math.max(0.15, 0.12 * span);
        yMin = Math.min(yMin, minVal - pad);
        yMax = Math.max(yMax, maxVal + pad);
    }

    // Delta-Stäbe im Ausgangssignal berücksichtigen
    if (ctx.deltaStemsY.length) {
        const pureDeltaInput =
            ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
        const pureDeltaImpulse =
            ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

        if (pureDeltaInput || pureDeltaImpulse) {
            const outTerms = computeMixedOutputDeltaTerms();
            if (outTerms.length) {
                const r = getDeltaStemYRange(outTerms);
                yMin = Math.min(yMin, r.yMin);
                yMax = Math.max(yMax, r.yMax);
            }
        }
    }

    // Zoom setzen
    ctx.boards.y.setBoundingBox([left, yMax, right, yMin], false);

    // Tick-Abstände der y-Achse anpassen
    updateYAxisTickDensity(ctx.boards.y, yMax - yMin);
}

// Passt den Zoom des Produktdiagramms an.
function updateMultBoardZoom(t) {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    // Standard-x-Bereich
    let left = -4;
    let right = 4;

    // Bei eigenen Funktionen Zoomcache verwenden
    if (hasCustomInput || hasCustomImpulse) {
        if (!ctx.zoomCache.valid) {
            rebuildCustomZoomCache(t);
        }
        left = ctx.zoomCache.left;
        right = ctx.zoomCache.right;
    }

    // Prüfen, ob reine Delta-Fälle aktiv sind
    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    // Bei Delta-Fällen Produkt-y-Bereich speziell berechnen
    if (ctx.started && (pureDeltaInput || pureDeltaImpulse)) {
        const r = getMultiplicationDeltaYRange(t);
        ctx.boards.mult.setBoundingBox([left, r.yMax, right, r.yMin], false);
        updateBoardTickDensity(ctx.boards.mult, right - left, r.yMax - r.yMin);
        return;
    }

    // Bei eigenen Funktionen gespeicherten Produktbereich verwenden
    if (hasCustomInput || hasCustomImpulse) {
        ctx.boards.mult.setBoundingBox(
            [left, ctx.zoomCache.multYMax, right, ctx.zoomCache.multYMin],
            false
        );
    } else {
        // Standardbereich für normale Signale
        ctx.boards.mult.setBoundingBox([-4, 1.25, 4, -0.15], false);
    }

    // Tick-Abstände aktualisieren
    const bb = ctx.boards.mult.getBoundingBox();
    updateBoardTickDensity(ctx.boards.mult, bb[2] - bb[0], bb[1] - bb[3]);
}

// Zeichnet Delta-Stäbe im Multiplikationsdiagramm.
function drawMultiplicationDeltaStems(t) {
    const stems = [];

    // Prüfen, ob x(t) ein reines Delta-Signal ist
    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;

    // Prüfen, ob h(t) ein reines Delta-Signal ist    
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    // Fall 1: x(t) enthält Delta-Impulse, h(t) ist nicht rein Delta
    if (ctx.custom.inputDeltaTerms.length && !pureDeltaImpulse) {
        for (const term of ctx.custom.inputDeltaTerms) {
            // Produktwert am Delta-Ort berechnen
            const y = term.amp * get_ht_plot(t - term.pos);

            // Nur sichtbare Werte zeichnen
            if (Math.abs(y) > 1e-6) {
                stems.push(...drawDeltaStems(
                    ctx.boards.mult,
                    [{ pos: term.pos, amp: y }],
                    ctx.COLORS.PRODUCT_FILL
                ));
            }
        }
    }

    // Fall 2: h(t) enthält Delta-Impulse, x(t) ist nicht rein Delta
    if (ctx.custom.impulseDeltaTerms.length && !pureDeltaInput) {
        for (const term of ctx.custom.impulseDeltaTerms) {
            // Position im τ-Diagramm durch h(t-τ)
            const tauPos = t - term.pos;

            // Produktwert berechnen
            const y = term.amp * get_xt_plot(tauPos);

            // Nur sichtbare Werte zeichnen
            if (Math.abs(y) > 1e-6) {
                stems.push(...drawDeltaStems(
                    ctx.boards.mult,
                    [{ pos: tauPos, amp: y }],
                    ctx.COLORS.PRODUCT_FILL
                ));
            }
        }
    }

    // Fall 3: x(t) und h(t) sind beide reine Delta-Signale
    if (pureDeltaInput && pureDeltaImpulse) {
        for (const xTerm of ctx.custom.inputDeltaTerms) {
            for (const hTerm of ctx.custom.impulseDeltaTerms) {
                
                const tauPos = xTerm.pos;
                // Delta-Ausgang liegt bei Summe der Positionen
                const activeAtThisT = Math.abs(t - (xTerm.pos + hTerm.pos)) <= ctx.DELTA_VISUAL_WINDOW;

                // Nur zeichnen, wenn der aktuelle Zeitpunkt nahe am Delta-Ausgang liegt
                if (activeAtThisT) {
                    const y = xTerm.amp * hTerm.amp;
                    stems.push(...drawDeltaStems(
                        ctx.boards.mult,
                        [{ pos: tauPos, amp: y }],
                        ctx.COLORS.PRODUCT_FILL
                    ));
                }
            }
        }
    }

    return stems;
}

// Bestimmt den passenden y-Achsenbereich für Delta-Produkte im Multiplikationsdiagramm.
function getMultiplicationDeltaYRange(t) {
    let yMin = Infinity;
    let yMax = -Infinity;
    let found = false;

    // Prüfen, ob Eingangssignal ein reines Delta-Signal ist
    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;

    // Prüfen, ob Impulsantwort ein reines Delta-Signal ist
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    // Hilfsfunktion: gültige y-Werte in den Bereich aufnehmen
    function includeValue(y) {
        if (Number.isFinite(y) && Math.abs(y) > 1e-9) {
            yMin = Math.min(yMin, y);
            yMax = Math.max(yMax, y);
            found = true;
        }
    }

    // Fall 1: x(t) enthält Delta-Impulse, h(t) hat kontinuierlichen Anteil
    if (ctx.custom.inputDeltaTerms.length && !pureDeltaImpulse) {
        for (const term of ctx.custom.inputDeltaTerms) {
            const y = term.amp * get_ht_plot(t - term.pos);
            includeValue(y);
        }

        // Zusätzlich die verschobene h(t-τ)-Kurve berücksichtigen
        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.1) {
            includeValue(get_ht_plot(t - tau));
        }
    }

    // Fall 2: h(t) enthält Delta-Impulse, x(t) hat kontinuierlichen Anteil
    if (ctx.custom.impulseDeltaTerms.length && !pureDeltaInput) {
        for (const term of ctx.custom.impulseDeltaTerms) {
            const tauPos = t - term.pos;
            const y = term.amp * get_xt_plot(tauPos);
            includeValue(y);
        }

        // Zusätzlich die x(τ)-Kurve berücksichtigen
        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.1) {
            includeValue(get_xt_plot(tau));
        }
    }

    // Fall 3: x(t) und h(t) sind reine Delta-Signale
    if (pureDeltaInput && pureDeltaImpulse) {
        for (const xTerm of ctx.custom.inputDeltaTerms) {
            for (const hTerm of ctx.custom.impulseDeltaTerms) {
                const activeAtThisT =
                    Math.abs(t - (xTerm.pos + hTerm.pos)) <= ctx.DELTA_VISUAL_WINDOW;

                if (activeAtThisT) {
                    includeValue(xTerm.amp * hTerm.amp);
                }
            }
        }
    }

    // Falls kein Wert gefunden wurde, Standardbereich nutzen
    if (!found) return { yMin: -0.15, yMax: 1.25 };

    // Falls yMin und yMax fast gleich sind, künstlich etwas Abstand erzeugen
    if (Math.abs(yMax - yMin) < 1e-6) {
        yMax += 0.5;
        yMin -= 0.5;
    }

    // Randabstand hinzufügen, damit nichts am Diagrammrand klebt
    const pad = Math.max(0.15, 0.2 * (yMax - yMin));

    return {
        yMin: yMin - pad,
        yMax: yMax + pad
    };
}

// Berechnet die Delta-Ausgangsimpulse bei Delta-Faltung.
function computeOutputDeltaTerms() {
    const out = [];

    // Delta-Terme aus x(t)
    const xTerms = ctx.custom.inputDeltaTerms || [];

    // Delta-Terme aus h(t)
    const hTerms = ctx.custom.impulseDeltaTerms || [];

    // Bei Delta-Faltung addieren sich die Positionen, Amplituden multiplizieren sich
    for (const xt of xTerms) {
        for (const ht of hTerms) {
            out.push({
                pos: xt.pos + ht.pos,
                amp: xt.amp * ht.amp
            });
        }
    }

    return out;
}

// Berechnet y(t), wenn x(t) ein reines Delta-Signal ist.
function computeShiftedCurveFromPureDeltaInput(tMaxCurrent) {
    const xs = [];
    const ys = [];

    // Ausgangssignal bis zum aktuellen Zeitpunkt aufbauen
    for (let t = ctx.T_MIN; t <= tMaxCurrent; t += ctx.TIME_STEP) {
        let sum = 0;

        // Jeder Delta-Impuls im Eingang erzeugt eine verschobene Impulsantwort
        for (const term of ctx.custom.inputDeltaTerms) {
            sum += term.amp * get_ht_plot(t - term.pos);
        }

        xs.push(t);
        ys.push(sum);
    }

    return { xs, ys };
}

// Berechnet y(t), wenn h(t) ein reines Delta-Signal ist.
function computeShiftedCurveFromPureDeltaImpulse(tMaxCurrent) {
    const xs = [];
    const ys = [];

    // Ausgangssignal bis zum aktuellen Zeitpunkt aufbauen
    for (let t = ctx.T_MIN; t <= tMaxCurrent; t += ctx.TIME_STEP) {
        let sum = 0;

        // Delta-Impulse in h(t) verschieben und skalieren x(t)
        for (const term of ctx.custom.impulseDeltaTerms) {
            sum += term.amp * get_xt_plot(t - term.pos);
        }

        xs.push(t);
        ys.push(sum);
    }

    return { xs, ys };
}

// Berechnet Delta-Anteile im Ausgang bei gemischten Delta-Fällen.
function computeMixedOutputDeltaTerms() {
    const out = [];

    // Delta-Terme aus x(t)
    const xTerms = ctx.custom.inputDeltaTerms || [];

    // Delta-Terme aus h(t)
    const hTerms = ctx.custom.impulseDeltaTerms || [];

    // Positionen addieren und Amplituden multiplizieren
    for (const xt of xTerms) {
        for (const ht of hTerms) {
            out.push({
                pos: xt.pos + ht.pos,
                amp: xt.amp * ht.amp
            });
        }
    }

    return out;
}

// ===== PLOTTEN =====
// Hauptfunktion zum Aktualisieren aller Diagramme.
// Diese Funktion wird bei Slideränderungen, Animation, Reset und eigenen Funktionen aufgerufen.
function updateGraphs() {

    // Aktuellen Zeitpunkt t aus dem Zeit-Slider lesen
    const t = ctx.boards.controlAnim.sldTime.Value();

    // Aktuell ausgewählte Signaltypen aus den Dropdown-Menüs übernehmen
    refreshSelectedTypes();

    // Eigene Funktionen neu einlesen und vorbereiten
    refreshCustomFunctions();

    // Updates kurz anhalten, damit JSXGraph nicht bei jeder Einzeländerung sofort neu zeichnet
    ctx.boards.x.suspendUpdate();
    ctx.boards.h.suspendUpdate();
    ctx.boards.mult.suspendUpdate();
    ctx.boards.y.suspendUpdate();

    // Alte Delta-Stäbe aus dem Eingangssignal-Diagramm entfernen
    if (ctx.deltaStemsX.length) {
        ctx.deltaStemsX.forEach(o => { try { ctx.boards.x.removeObject(o); } catch (e) {} });
        ctx.deltaStemsX = [];
    }

    // Alte Delta-Stäbe aus dem Impulsantwort-Diagramm entfernen
    if (ctx.deltaStemsH.length) {
        ctx.deltaStemsH.forEach(o => { try { ctx.boards.h.removeObject(o); } catch (e) {} });
        ctx.deltaStemsH = [];
    }

    // Alte verschobene Delta-Stäbe aus dem h(t-τ)-Diagramm entfernen
    if (ctx.deltaStemsShifted.length) {
        ctx.deltaStemsShifted.forEach(o => { try { ctx.boards.h.removeObject(o); } catch (e) {} });
        ctx.deltaStemsShifted = [];
    }

    // Alte Delta-Stäbe aus dem Multiplikationsdiagramm entfernen
    if (ctx.deltaStemsMult.length) {
    ctx.deltaStemsMult.forEach(o => { try { ctx.boards.mult.removeObject(o); } catch (e) {} });
    ctx.deltaStemsMult = [];
    }

    // Alte Delta-Stäbe aus dem Ausgangssignal-Diagramm entfernen
    if (ctx.deltaStemsY.length) {
    ctx.deltaStemsY.forEach(o => { try { ctx.boards.y.removeObject(o); } catch (e) {} });
    ctx.deltaStemsY = [];
   }

   // ===== Eingangssignal x(τ) zeichnen =====

   // Alte x(τ)-Kurve entfernen
   if (ctx.plotX) ctx.boards.x.removeObject(ctx.plotX);

   // Alte Rechteck-Kanten entfernen, falls vorhanden
   if (ctx.rectEdgesX && ctx.rectEdgesX.length) {
       ctx.rectEdgesX.forEach(seg => { try { ctx.boards.x.removeObject(seg); } catch (e) {} });
       ctx.rectEdgesX = null;
    }

   // Aktuellen Eingangssignaltyp speichern
   const inputType = ctx.inputSignalType;

   // Spezialfall: Rechtecksignal wird als exakte Kurve mit senkrechten Kanten gezeichnet
   if (inputType === 'rechteck') {
       const x1 = ctx.taux - ctx.dtx / 2;
       const x2 = ctx.taux + ctx.dtx / 2;

       ctx.plotX = ctx.boards.x.create('curve', [[
           ctx.T_MIN, x1, x1, x2, x2, ctx.T_MAX
       ], [
           0, 0, ctx.Ax, ctx.Ax, 0, 0
       ]], {
           strokeColor: ctx.COLORS.X_RED,
           strokeWidth: 3,
           highlight: false
      });

// Alle anderen Eingangssignale      
} else {
    ctx.plotX = null;

    // Prüfen, ob eine eigene Funktion eigentlich ein einfaches Rechteck ist
    const parsedCustomRectX =
        inputType === 'custom' ? parseSimpleRectExpression(ctx.custom.inputExpr, 'input') : null;

    // Falls eigene Funktion als Rechteck erkannt wurde: exakt als Rechteck zeichnen    
    if (parsedCustomRectX) {
        const x1 = parsedCustomRectX.center - parsedCustomRectX.width / 2;
        const x2 = parsedCustomRectX.center + parsedCustomRectX.width / 2;

        ctx.plotX = ctx.boards.x.create('curve', [[
            ctx.T_MIN, x1, x1, x2, x2, ctx.T_MAX
        ], [
            0, 0, parsedCustomRectX.amp, parsedCustomRectX.amp, 0, 0
        ]], {
            strokeColor: ctx.COLORS.X_RED,
            strokeWidth: 3,
            highlight: false
        });

    // Normale Funktion zeichnen, außer wenn es ein reines Delta-Signal ist    
    } else if (!(inputType === 'custom' && ctx.custom.inputPureDelta)) {
        ctx.plotX = ctx.boards.x.create('functiongraph', get_xt_plot, {
            strokeColor: ctx.COLORS.X_RED,
            strokeWidth: 3,
            highlight: false
        });
    }

    // Falls die eigene Funktion Delta-Impulse enthält, werden diese als Stäbe gezeichnet
    if (inputType === 'custom' && ctx.custom.inputDeltaTerms.length) {
        ctx.deltaStemsX = drawDeltaStems(
            ctx.boards.x,
            ctx.custom.inputDeltaTerms,
            ctx.COLORS.X_RED
        );
    }
}

     // ===== Impulsantwort h(τ) und verschobene Impulsantwort h(t-τ) zeichnen =====

    // Alte h(τ)-Kurve entfernen
    if (ctx.plotH)    ctx.boards.h.removeObject(ctx.plotH);

    // Alte h(t-τ)-Kurve entfernen
    if (ctx.plotHref) ctx.boards.h.removeObject(ctx.plotHref);

    // Aktuellen Impulsantwort-Typ speichern
    const impulseType = ctx.impulseResponseType;

    // Vor dem Start wird die ursprüngliche Impulsantwort h(τ) angezeigt
    const showOriginalImpulse = !ctx.started;

    // Vor dem Start wird zusätzlich die gespiegelte Impulsantwort h(-τ) angezeigt
    const showStaticReflectedAtStart = !ctx.started;

    // Nach dem Start wird die bewegte Funktion h(t-τ) angezeigt
    const showMovingReflected = ctx.started;

    // Alte Rechteck-Kanten der Impulsantwort entfernen
    if (ctx.rectEdgesH && ctx.rectEdgesH.length) {
        ctx.rectEdgesH.forEach(seg => { try { ctx.boards.h.removeObject(seg); } catch (e) {} });
        ctx.rectEdgesH = null;
 }

    // Spezialfall: Spalt-TP ist eine Rechteck-Impulsantwort 
    if (impulseType === 'spalt') {

    // Höhe der Rechteck-Impulsantwort: 1 / Δt_h    
    const hAmp = 1.0 / ctx.dth;

    ctx.plotH = null;

    // Ursprüngliche Impulsantwort h(τ) zeichnen
    if (showOriginalImpulse) {
        ctx.plotH = ctx.boards.h.create('curve', [[
            ctx.T_MIN, 0, 0, ctx.dth, ctx.dth, ctx.T_MAX
        ], [
            0, 0, hAmp, hAmp, 0, 0
        ]], {
            strokeColor: ctx.COLORS.H_CYAN,
            strokeWidth: 3,
            highlight: false
        });
    }

    ctx.plotHref = null;

    // Vor dem Start: gespiegelte Rechteckfunktion h(-τ) anzeigen
    if (showStaticReflectedAtStart) {
        const a = -ctx.dth;
        const b = 0;

        ctx.plotHref = ctx.boards.h.create('curve', [[
            ctx.T_MIN, a, a, b, b, ctx.T_MAX
        ], [
            0, 0, hAmp, hAmp, 0, 0
        ]], {
            strokeColor: ctx.COLORS.H_ORANGE,
            strokeWidth: 3,
            highlight: false
        });
    }

    // Nach dem Start: verschobene Funktion h(t-τ) anzeigen
    if (showMovingReflected) {
        const a = t - ctx.dth;
        const b = t;

        ctx.plotHref = ctx.boards.h.create('curve', [[
            ctx.T_MIN, a, a, b, b, ctx.T_MAX
        ], [
            0, 0, hAmp, hAmp, 0, 0
        ]], {
            strokeColor: ctx.COLORS.H_ORANGE,
            strokeWidth: 3,
            highlight: false
        });
    }

   // Allgemeiner Fall für TP1, TP2, Gauß-TP und eigene Funktionen
   } else {
    ctx.plotH = null;

// Prüfen, ob eigene Impulsantwort ein einfaches Rechteck ist    
const parsedCustomRectH =
    impulseType === 'custom' ? parseSimpleRectExpression(ctx.custom.impulseExpr, 'impulse') : null;

// Ursprüngliche Impulsantwort h(τ) zeichnen    
if (showOriginalImpulse && !(impulseType === 'custom' && ctx.custom.impulsePureDelta)) {

    // Eigene Rechteck-Impulsantwort exakt als Rechteck zeichnen
    if (parsedCustomRectH) {
        const x1 = parsedCustomRectH.center - parsedCustomRectH.width / 2;
        const x2 = parsedCustomRectH.center + parsedCustomRectH.width / 2;

        ctx.plotH = ctx.boards.h.create('curve', [[
            ctx.T_MIN, x1, x1, x2, x2, ctx.T_MAX
        ], [
            0, 0, parsedCustomRectH.amp, parsedCustomRectH.amp, 0, 0
        ]], {
            strokeColor: ctx.COLORS.H_CYAN,
            strokeWidth: 3,
            highlight: false
        });

      // Normale Impulsantwort als Funktionsgraph zeichnen  
    } else {
        ctx.plotH = ctx.boards.h.create('functiongraph', get_ht_plot, {
            strokeColor: ctx.COLORS.H_CYAN,
            strokeWidth: 2,
            highlight: false
        });
    }
}

// Delta-Impulse der ursprünglichen Impulsantwort zeichnen
if (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length && showOriginalImpulse) {
    ctx.deltaStemsH = drawDeltaStems(
        ctx.boards.h,
        ctx.custom.impulseDeltaTerms,
        ctx.COLORS.H_CYAN
    );
}

ctx.plotHref = null;

// Vor dem Start: h(-τ) anzeigen
if (showStaticReflectedAtStart) {

    // Nur zeichnen, wenn es kein reines Delta-Signal ist
    if (!(impulseType === 'custom' && ctx.custom.impulsePureDelta)) {

        // Rechteck-Impulsantwort gespiegelt zeichnen
        if (parsedCustomRectH) {
            const a = -parsedCustomRectH.center - parsedCustomRectH.width / 2;
            const b = -parsedCustomRectH.center + parsedCustomRectH.width / 2;

            ctx.plotHref = ctx.boards.h.create('curve', [[
                ctx.T_MIN, a, a, b, b, ctx.T_MAX
            ], [
                0, 0, parsedCustomRectH.amp, parsedCustomRectH.amp, 0, 0
            ]], {
                strokeColor: ctx.COLORS.H_ORANGE,
                strokeWidth: 3,
                highlight: false
            });

            // Allgemeine gespiegelte Funktion h(-τ) zeichnen
         } else {
            ctx.plotHref = ctx.boards.h.create('functiongraph',
                tau => get_ht_plot(-tau), {
                    strokeColor: ctx.COLORS.H_ORANGE,
                    strokeWidth: 2,
                    highlight: false
                }
            );
        }
    }
    
    // Delta-Impulse gespiegelt bei t = 0 zeichnen
    if (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length) {
        ctx.deltaStemsShifted = drawDeltaStems(
            ctx.boards.h,
            ctx.custom.impulseDeltaTerms,
            ctx.COLORS.H_ORANGE,
            0
        );
    }
}

// Nach dem Start: bewegtes h(t-τ) anzeigen
if (showMovingReflected) {

    // Nur zeichnen, wenn es kein reines Delta-Signal ist
    if (!(impulseType === 'custom' && ctx.custom.impulsePureDelta)) {

        // Rechteck-Impulsantwort verschoben zeichnen
        if (parsedCustomRectH) {
            const a = t - parsedCustomRectH.center - parsedCustomRectH.width / 2;
            const b = t - parsedCustomRectH.center + parsedCustomRectH.width / 2;

            ctx.plotHref = ctx.boards.h.create('curve', [[
                ctx.T_MIN, a, a, b, b, ctx.T_MAX
            ], [
                0, 0, parsedCustomRectH.amp, parsedCustomRectH.amp, 0, 0
            ]], {
                strokeColor: ctx.COLORS.H_ORANGE,
                strokeWidth: 3,
                highlight: false
            });

          // Allgemeine verschobene Funktion h(t-τ) zeichnen  
        } else {
            ctx.plotHref = ctx.boards.h.create('functiongraph',
                tau => get_ht_plot(t - tau), {
                    strokeColor: ctx.COLORS.H_ORANGE,
                    strokeWidth: 2,
                    highlight: false
                }
            );
        }
    }
    // Delta-Impulse der Impulsantwort verschoben zeichnen
    if (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length) {
        ctx.deltaStemsShifted = drawDeltaStems(
            ctx.boards.h,
            ctx.custom.impulseDeltaTerms,
            ctx.COLORS.H_ORANGE,
            t
        );
    }
}
   }

    
    // Prüft, ob x(t) oder h(t) ein reines Delta-Signal ist.
    // Dann wird das Produkt nicht als normale Fläche gezeichnet.
    const onlyDeltaProduct =
    (inputType === 'custom' && ctx.custom.inputPureDelta) ||
    (impulseType === 'custom' && ctx.custom.impulsePureDelta);

// Prüft, ob die eigene Funktion sehr komplex ist.
// Bei komplexen Funktionen wird die Produktfläche übersprungen,
// damit die Anwendung schneller bleibt.    
const skipHeavyProductFill = isHeavyCustomScene();

// Alte Produktfläche entfernen
if (ctx.productCurve) {
    ctx.boards.mult.removeObject(ctx.productCurve);
    ctx.productCurve = null;
}

// Alte Hilfskurve im Multiplikationsdiagramm entfernen
if (ctx.productGuideCurve) {
    ctx.boards.mult.removeObject(ctx.productGuideCurve);
    ctx.productGuideCurve = null;
}

// Prüft, ob das Eingangssignal ein reines Delta-Signal ist
const pureDeltaInputForGuide =
    inputType === 'custom' && ctx.custom.inputPureDelta;

// Prüft, ob die Impulsantwort ein reines Delta-Signal ist    
const pureDeltaImpulseForGuide =
    impulseType === 'custom' && ctx.custom.impulsePureDelta;


// Fall: x(t) ist Delta, h(t) ist normal/gemischt.
// Dann wird h(t-τ) als gestrichelte Hilfskurve angezeigt.
if (ctx.started && pureDeltaInputForGuide && !pureDeltaImpulseForGuide) {
    ctx.productGuideCurve = ctx.boards.mult.create('functiongraph',
        tau => get_ht_plot(t - tau), {
            strokeColor: ctx.COLORS.PRODUCT_FILL,
            strokeWidth: 2,
            dash: 2,
            highlight: false
        }
    );
}

// Fall: h(t) ist Delta, x(t) ist normal/gemischt.
// Dann wird x(τ) als gestrichelte Hilfskurve angezeigt.
if (ctx.started && pureDeltaImpulseForGuide && !pureDeltaInputForGuide) {
    ctx.productGuideCurve = ctx.boards.mult.create('functiongraph',
        tau => get_xt_plot(tau), {
            strokeColor: ctx.COLORS.PRODUCT_FILL,
            strokeWidth: 2,
            dash: 2,
            highlight: false
        }
    );
}

// Normale Produktfläche zeichnen:
    // x(τ) wird mit h(t-τ) multipliziert.
    // Die gelbe Fläche entspricht dem aktuellen Faltungsintegral.
if (ctx.started && !onlyDeltaProduct && !skipHeavyProductFill) {
    const tauVals = [];
    const prodVals = [];

    // Bei eigenen Funktionen wird feiner abgetastet
    const step = (inputType === 'custom' || impulseType === 'custom') ? 0.05 : 0.1;

    // Produktwerte berechnen
    for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += step) {
        tauVals.push(tau);
        prodVals.push(get_xt_plot(tau) * get_ht_plot(t - tau));
    }

    // Zusätzliche Punkte auf y = 0 erzeugen,
    // damit die Fläche geschlossen gezeichnet werden kann
    const fillX = [...tauVals, tauVals[tauVals.length - 1], tauVals[0]];
    const fillY = [...prodVals, 0, 0];

    // Produktkurve mit gefüllter Fläche zeichnen
    ctx.productCurve = ctx.boards.mult.create('curve', [fillX, fillY], {
        strokeColor: ctx.COLORS.PRODUCT_FILL,
        strokeWidth: 2,
        highlight: false,
        fillColor: ctx.COLORS.PRODUCT_FILL,
        fillOpacity: 0.35
    });
}

    // Delta-Anteile im Multiplikationsdiagramm zeichnen
    if (
        ctx.started &&
        (
            (inputType === 'custom' && ctx.custom.inputDeltaTerms.length) ||
            (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length)
        )
    ) {
        ctx.deltaStemsMult = drawMultiplicationDeltaStems(t);
   }

// Prüft, ob x(t) eine reine Delta-Funktion ist   
const pureDeltaInput =
      ctx.inputSignalType === 'custom' &&
      ctx.custom.inputPureDelta;

// Prüft, ob h(t) eine reine Delta-Funktion ist      
const pureDeltaImpulse =
      ctx.impulseResponseType === 'custom' &&
      ctx.custom.impulsePureDelta;

// Prüft, ob beide Signale reine Delta-Funktionen sind      
const pureDeltaOutput =
      pureDeltaInput &&
      pureDeltaImpulse;

// Normaler Fall:
    // y(t) wird numerisch durch das Faltungsintegral berechnet.
    // Bei reinen Delta-Fällen wird nicht numerisch integriert,
    // weil diese Fälle analytisch einfacher behandelt werden.
if (!pureDeltaInput && !pureDeltaImpulse) {
    if (ctx.started) {

        // Neuen Punkt nur hinzufügen, wenn die Animation weitergelaufen ist
        if (!ctx.dataintX.length || ctx.dataintX[ctx.dataintX.length - 1] < t) {
            ctx.dataintX.push(t);
            ctx.dataintY.push(calculateConvolution(t));
        }
    } else {
        // Vor dem Start wird y(t) geleert
        ctx.dataintX = [];
        ctx.dataintY = [];
    }
} else {
    // Delta-Fälle verwenden eigene Darstellungen
    ctx.dataintX = [];
    ctx.dataintY = [];
}

// Alte Ausgangskurve entfernen
if (ctx.plotY) ctx.boards.y.removeObject(ctx.plotY);

// Fall 1:
// Delta gefaltet mit Delta ergibt wieder Delta-Stäbe im Ausgang
if (pureDeltaOutput) {
    ctx.plotY = null;

    if (ctx.started) {
        // Nur Delta-Stäbe anzeigen, die bis zum aktuellen Zeitpunkt erreicht wurden
        const outTerms = computeOutputDeltaTerms().filter(term => term.pos <= t);
        ctx.deltaStemsY = drawDeltaStems(
            ctx.boards.y,
            outTerms,
            ctx.COLORS.Y_BLUE
        );
    }
}

// Fall 2:
// x(t) ist reines Delta-Signal.
// Dann ergibt sich y(t) aus verschobenen Kopien von h(t).
else if (pureDeltaInput) {
    ctx.plotY = null;

    if (ctx.started) {
        // Ausgangskurve aus verschobener Impulsantwort berechnen
        const curve = computeShiftedCurveFromPureDeltaInput(t);

        // Ausgangskurve zeichnen
        if (curve.xs.length > 0) {
            ctx.plotY = ctx.boards.y.create('curve', [curve.xs, curve.ys], {
                strokeColor: ctx.COLORS.Y_BLUE,
                strokeWidth: 3,
                highlight: false
            });
        }

        // Falls h(t) zusätzlich Delta-Anteile enthält,
        // werden diese als Stäbe im Ausgang dargestellt
        if (ctx.custom.impulseDeltaTerms.length) {
            const outTerms = computeMixedOutputDeltaTerms().filter(term => term.pos <= t);
            ctx.deltaStemsY = drawDeltaStems(
                ctx.boards.y,
                outTerms,
                ctx.COLORS.Y_BLUE
            );
        }
    }
}

// Fall 3:
// h(t) ist reines Delta-Signal.
// Dann ergibt sich y(t) aus verschobenen Kopien von x(t).
else if (pureDeltaImpulse) {
    ctx.plotY = null;

    if (ctx.started) {
        // Ausgangskurve aus verschobenem Eingangssignal berechnen
        const curve = computeShiftedCurveFromPureDeltaImpulse(t);

        // Ausgangskurve zeichnen
        if (curve.xs.length > 0) {
            ctx.plotY = ctx.boards.y.create('curve', [curve.xs, curve.ys], {
                strokeColor: ctx.COLORS.Y_BLUE,
                strokeWidth: 3,
                highlight: false
            });
        }

        // Falls x(t) zusätzlich Delta-Anteile enthält,
        // werden diese als Stäbe im Ausgang dargestellt
        if (ctx.custom.inputDeltaTerms.length) {
            const outTerms = computeMixedOutputDeltaTerms().filter(term => term.pos <= t);
            ctx.deltaStemsY = drawDeltaStems(
                ctx.boards.y,
                outTerms,
                ctx.COLORS.Y_BLUE
            );
        }
    }
}

// Fall 4:
// Normaler Ausgangsverlauf y(t) als blaue Kurve
else if (ctx.started && ctx.dataintX.length > 0) {
    ctx.plotY = ctx.boards.y.create('curve', [ctx.dataintX, ctx.dataintY], {
        strokeColor: ctx.COLORS.Y_BLUE,
        strokeWidth: 3,
        highlight: false
    });

// Vor dem Start gibt es noch keine Ausgangskurve    
} else {
    ctx.plotY = null;
}

    // Automatische Achsenskalierung nur dann neu durchführen,
    // wenn sich Signaltyp, Parameter oder eigene Funktionen geändert haben
    if (ctx.needsAutoZoom) {
    applyAutoZoom(t);
    ctx.needsAutoZoom = false;
    }

    // y-Diagramm passend zum aktuellen Ausgangssignal skalieren
    updateYBoardZoom();

    // Multiplikationsdiagramm passend zur aktuellen Produktfunktion skalieren
    updateMultBoardZoom(t);

    // Vertikale Zeitlinie im Eingangssignal-Diagramm zeichnen
    drawVerticalLine(ctx.boards.x, t);

    // Vertikale Zeitlinie im Impulsantwort-Diagramm zeichnen
    drawVerticalLine(ctx.boards.h, t);

    // Produkt- und Ausgangsdiagramm erhalten die Zeitlinie erst,
    // wenn die Animation gestartet wurde
    if (ctx.started) {
    drawVerticalLine(ctx.boards.mult, t);
    drawVerticalLine(ctx.boards.y, t);
    }

    // Aktualisierung der Diagramme wieder aktivieren
    ctx.boards.x.unsuspendUpdate();
    ctx.boards.h.unsuspendUpdate();
    ctx.boards.mult.unsuspendUpdate();
    ctx.boards.y.unsuspendUpdate();

    // Numerische Ergebnisbox rechts aktualisieren
    updateResults();
}

// Zeichnet eine vertikale Linie bei der aktuellen Zeit t in ein Diagramm.
// Diese Linie zeigt, an welcher Stelle die Faltung gerade ausgewertet wird.
function drawVerticalLine(board, t) {

    // Farbe der Linie abhängig vom Theme (hell/dunkel)
    const lineColor =
        ctx.currentTheme === 'dark'
            ? 'rgba(255,255,255,0.35)'
            : 'rgba(0,0,0,0.35)';

    // Wenn noch keine Linie existiert, wird sie neu erstellt        
    if (!board.verticalLine) {
        board.verticalLine = board.create('line',
            [[t, -0.15], [t, 1.25]],
            {
                straightFirst: false,
                straightLast: false,
                strokeColor: lineColor,
                strokeWidth: 1,
                highlight: false,
                fixed: true
            }
        );
    // Wenn die Linie bereits existiert → nur Position aktualisieren    
    } else {
        board.verticalLine.point1.setPosition(JXG.COORDS_BY_USER, [t, -0.15]);
        board.verticalLine.point2.setPosition(JXG.COORDS_BY_USER, [t, 1.25]);

        // Farbe ggf. aktualisieren (bei Theme-Wechsel)
        board.verticalLine.setAttribute({ strokeColor: lineColor });
    }
}

// Passt die Tick-Abstände der y-Achse dynamisch an,
// damit die Beschriftung immer gut lesbar bleibt.
function updateYAxisTickDensity(board, span) {
    try {
        const yAxis = board?.defaultAxes?.y;
        const ticks = yAxis?.defaultTicks;
        if (!ticks) return;

        let dist = 0.25;

        // Bei großem Wertebereich größere Tick-Abstände
        if (span > 12) dist = 2;
        else if (span > 6) dist = 1;
        else if (span > 3) dist = 0.5;

        ticks.setAttribute({
            ticksDistance: dist,
            minorTicks: 0,
            drawLabels: true
        });
    } catch (e) {
        // Falls JSXGraph-Version Unterschiede hat → einfach ignorieren
    }
}

// Passt die Tick-Abstände für x- und y-Achse gleichzeitig an.
function updateBoardTickDensity(board, xSpan, ySpan) {
    try {
        const xTicks = board?.defaultAxes?.x?.defaultTicks;
        const yTicks = board?.defaultAxes?.y?.defaultTicks;

        // x-Achse
        if (xTicks) {
            let xDist = 1;
            if (xSpan > 20) xDist = 4;
            else if (xSpan > 12) xDist = 2;
            xTicks.setAttribute({ ticksDistance: xDist, minorTicks: 0, drawLabels: true });
        }

        // y-Achse
        if (yTicks) {
            let yDist = 0.25;
            if (ySpan > 12) yDist = 2;
            else if (ySpan > 6) yDist = 1;
            else if (ySpan > 3) yDist = 0.5;
            yTicks.setAttribute({ ticksDistance: yDist, minorTicks: 0, drawLabels: true });
        }
    } catch (e) {
        // Fehler ignorieren (Fallback)
    }
}

// Berechnet die effektive Breite Δt_y des Ausgangssignals.
// Das ist die Zeitspanne, in der y(t) signifikant von 0 verschieden ist.
function calculateDeltaTY() {

    // Wenn noch keine Daten vorhanden sind
    if (!ctx.dataintX.length || !ctx.dataintY.length) return 0;

    // Maximum des Signals bestimmen
    const max_y = Math.max(...ctx.dataintY.map(v => Math.abs(v)));

    // Schwelle (1% vom Maximum)
    const eps = Math.max(0.001, 0.01 * max_y);

    let left = null;
    let right = null;

    // Linke Grenze finden
    for (let i = 0; i < ctx.dataintY.length; i++) {
        if (Math.abs(ctx.dataintY[i]) > eps) {
            left = ctx.dataintX[i];
            break;
        }
    }

    // Rechte Grenze finden
    for (let i = ctx.dataintY.length - 1; i >= 0; i--) {
        if (Math.abs(ctx.dataintY[i]) > eps) {
            right = ctx.dataintX[i];
            break;
        }
    }

    // Falls keine gültigen Grenzen gefunden wurden
    if (left === null || right === null) return 0;
    return Math.max(0, right - left);
}

// Liefert die aktuell sichtbaren Ausgangswerte y(t)
// (für Ergebnisanzeige rechts).
function getCurrentOutputSamplesForResults(tCurrent) {
    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    // Fall 1: Delta ⊛ Delta
    if (pureDeltaInput && pureDeltaImpulse) {
        const outTerms = computeOutputDeltaTerms();
        return {
            xs: outTerms.map(o => o.pos),
            ys: outTerms.map(o => o.amp),
            yAtT: 0
        };
    }

    // Fall 2: x(t) ist Delta
    if (pureDeltaInput) {
        const curve = computeShiftedCurveFromPureDeltaInput(tCurrent);
        const idx = curve.xs.length ? curve.xs.length - 1 : -1;
        return {
            xs: curve.xs,
            ys: curve.ys,
            yAtT: idx >= 0 ? curve.ys[idx] : 0
        };
    }

    // Fall 3: h(t) ist Delta
    if (pureDeltaImpulse) {
        const curve = computeShiftedCurveFromPureDeltaImpulse(tCurrent);
        const idx = curve.xs.length ? curve.xs.length - 1 : -1;
        return {
            xs: curve.xs,
            ys: curve.ys,
            yAtT: idx >= 0 ? curve.ys[idx] : 0
        };
    }

    // Normaler Fall: numerische Faltung
    return {
        xs: ctx.dataintX,
        ys: ctx.dataintY,
        yAtT: null
    };
}
// Aktualisiert die Ergebnisanzeige im rechten Panel
// → zeigt aktuelle Werte wie y(t), Maximum, Breite etc.
function updateResults() {

    // aktuelle Zeit aus Slider holen
    const t = ctx.boards.controlAnim.sldTime.Value();

    // aktuelle Ausgangsdaten holen (abhängig vom Signaltyp)
    const out = getCurrentOutputSamplesForResults(t);

    let y_t = 0;

    // Fall 1: direkter Wert vorhanden (z.B. bei Delta-Fällen)
    if (out.yAtT !== null) {
        y_t = out.yAtT;

     // Fall 2: aus gespeicherten Daten bestimmen   
    } else if (out.xs.length > 0) {

        // passenden Index für aktuelle Zeit suchen
        const idx = out.xs.findIndex(v => Math.abs(v - t) < 1e-9);
        if (idx >= 0) {
            y_t = out.ys[idx];
        } else {
            // fallback: letzter Wert
            y_t = out.ys[out.ys.length - 1] || 0;
        }
    }

    // Maximum des Signals bestimmen
    const max_y = out.ys.length > 0 ? Math.max(...out.ys) : 0.0;

    // Breite Δt_y bestimmen (ähnlich wie vorher)
    let delta_ty = 0;
    if (out.xs.length > 0 && out.ys.length > 0) {
        const maxAbs = Math.max(...out.ys.map(v => Math.abs(v)));

        // Schwelle definieren
        const eps = Math.max(0.001, 0.01 * maxAbs);

        let left = null;
        let right = null;

        // linke Grenze
        for (let i = 0; i < out.ys.length; i++) {
            if (Math.abs(out.ys[i]) > eps) {
                left = out.xs[i];
                break;
            }
        }

        // rechte Grenze
        for (let i = out.ys.length - 1; i >= 0; i--) {
            if (Math.abs(out.ys[i]) > eps) {
                right = out.xs[i];
                break;
            }
        }

        if (left !== null && right !== null) {
            delta_ty = Math.max(0, right - left);
        }
    }

    // Zeitpunkt des Maximums bestimmen
    let max_t = 'n/a';
    if (out.ys.length > 0) {
        const maxIndex = out.ys.indexOf(max_y);
        max_t = out.xs[maxIndex] !== undefined ? out.xs[maxIndex].toFixed(2) : 'n/a';
    }

    // HTML-Ausgabe zusammenbauen
    const resultsHTML = `
        <p>t = ${t.toFixed(2)}</p>
        <p>y(t) = ${y_t.toFixed(3)}</p>
        <p>y_max = ${max_y.toFixed(3)}</p>
        <p>t_max = ${max_t}</p>
        <p>Δt_y = ${delta_ty.toFixed(2)}</p>
   `;

    // in UI einfügen
    const box = document.getElementById('results-content');
    if (box) box.innerHTML = resultsHTML;
}

// ===== ZEIT & ANIMATION =====

// Verschiebt die Zeit manuell um delta (z.B. bei Step-Buttons)
function moveTime(delta) {
    const currentT = ctx.boards.controlAnim.sldTime.Value();
    let newT = currentT + delta;

    // Begrenzung auf erlaubten Bereich
    if (newT > ctx.T_MAX) newT = ctx.T_MAX;
    if (newT < ctx.T_MIN) newT = ctx.T_MIN;

    ctx.boards.controlAnim.sldTime.setValue(newT);

    // Grafiken neu zeichnen
    updateGraphs();
}

// Globale Funktion für Step-Buttons im HTML
window.stepTime = function (delta) {
    pauseAnimation();
    moveTime(delta);
};

// Ein einzelner Animationsschritt (wird in setInterval aufgerufen)
function step() {

    ctx.i++;  // Schrittzähler erhöhen
    const t = ctx.T_MIN + ctx.i * ctx.TIME_STEP;

    // Wenn Ende erreicht → stoppen
    if (t > ctx.T_MAX) {
        pauseAnimation();
        return;
    }

    // Slider setzen
    ctx.boards.controlAnim.sldTime.setValue(t);

    // neu zeichnen
    updateGraphs();
}

// Startet die Animation
function startAnimation() {

    // Falls schon läuft → nichts tun
    if (ctx.animate) return;

    // Beim ersten Start: Daten zurücksetzen
    if (!ctx.started) {
        ctx.started = true;
        ctx.dataintX = [];
        ctx.dataintY = [];
    }

    // aktuelle Zeit als Startpunkt verwenden
    const currentT = ctx.boards.controlAnim.sldTime.Value();
    ctx.i = Math.round((currentT - ctx.T_MIN) / ctx.TIME_STEP);

    updateGraphs();

    // Timer starten
    ctx.animate = setInterval(step, ctx.ANIMATION_DELAY);
}

// Stoppt die Animation
function pauseAnimation() {
    if (ctx.animate) {
        clearInterval(ctx.animate);
        ctx.animate = null;
    }
}

// ===== RESET & INIT =====

// Diese Funktion wird vom Reset-Button im HTML aufgerufen.
// Sie startet die Anwendung wieder neu.
window.resetApp = function () {
    restart(true);
};

// Bestimmt den Startwert der Zeitachse.
// Bei normalen Signalen wird START_T verwendet.
// Bei eigenen Funktionen wird der Start automatisch passend zum sichtbaren Bereich gewählt.
function getAdaptiveStartT() {

    // Wenn keine eigenen Funktionen verwendet werden:
    if (ctx.inputSignalType !== 'custom' && ctx.impulseResponseType !== 'custom') {
        return ctx.START_T;
    }

    // Falls der Zoom-Bereich noch nicht berechnet wurde:
    if (!ctx.zoomCache.valid) {
        rebuildCustomZoomCache(ctx.START_T);
    }

    // linker sichtbarer Bereich
    const left = ctx.zoomCache.left;

    // Start etwas vor dem linken Bereich setzen
    return Math.max(ctx.T_MIN, left - 1.0);
}

// Setzt die Simulation zurück.
// fullReset = true: Zeit wird auch zurückgesetzt.
// fullReset = false: Werte werden aktualisiert, Zeit bleibt erhalten.
function restart(fullReset = true) {

    // laufende Animation stoppen
    pauseAnimation();

    // Startstatus zurücksetzen
    ctx.started = false;

    // Animationszähler zurücksetzen
    ctx.i = 0;

    // Auto-Zoom beim nächsten Zeichnen neu aktivieren
    ctx.needsAutoZoom = true;

    // gespeicherte y(t)-Werte löschen
    ctx.dataintX = [];
    ctx.dataintY = [];

    // vorhandene Ausgangskurve entfernen
    if (ctx.plotY) {
        try { ctx.boards.y.removeObject(ctx.plotY); } catch (e) {}
        ctx.plotY = null;
    }

    // vorhandene Delta-Stäbe im Ausgangsdiagramm entfernen
    if (ctx.deltaStemsY.length) {
        ctx.deltaStemsY.forEach(o => { try { ctx.boards.y.removeObject(o); } catch (e) {} });
        ctx.deltaStemsY = [];
    }

    // Bei vollständigem Reset: Zeit-Slider auf Startwert setzen
    if (fullReset) {
        ctx.boards.controlAnim.sldTime.setValue(getAdaptiveStartT());
    }

    // Grafiken neu zeichnen
    updateGraphs();
}

// ===== INIT BEIM LADEN =====

// Dieser Block wird ausgeführt, sobald die Webseite vollständig geladen ist.
window.addEventListener("load", function () {

    // JSXGraph-Boards erzeugen
    initBoards();

    // Slider, Eingabefelder und Events vorbereiten
    initControls();

    // aktuell ausgewählte Signaltypen einlesen
    refreshSelectedTypes();

    // Standardtheme setzen
    applyTheme('dark');

    // erste Übungsaufgabe anzeigen
    updateExerciseText(0);

    // Achsenfarben passend zum Theme setzen
    fixAxisColors();

    // erste Darstellung zeichnen
    updateGraphs();

    // Theme-Button holen
    const btnTheme = document.getElementById('themeToggle');

    // Klick auf Theme-Button: Dark/Light wechseln
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const next = ctx.currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }

    // Buttons im Übungsbereich holen
    const btnPrev = document.getElementById('exercise-prev');
    const btnNext = document.getElementById('exercise-next');
    const btnLoad = document.getElementById('exercise-load');
    const btnSol  = document.getElementById('exercise-solution-btn');
    const btnMC   = document.getElementById('mc-check-btn');

    // vorherige Aufgabe anzeigen
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            const newIdx = (currentExerciseIndex - 1 + EXERCISES.length) % EXERCISES.length;
            updateExerciseText(newIdx);
        });
    }

    // nächste Aufgabe anzeigen
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const newIdx = (currentExerciseIndex + 1) % EXERCISES.length;
            updateExerciseText(newIdx);
        });
    }

    // aktuelle Aufgabe in Simulation laden
    if (btnLoad) {
        btnLoad.addEventListener('click', () => {
            applyCurrentExerciseSettings();
        });
    }

     // Musterlösung anzeigen
    if (btnSol) {
        btnSol.addEventListener('click', () => {
            showExerciseSolution();
        });
    }

    // Multiple-Choice-Antwort prüfen
    if (btnMC) {
        btnMC.addEventListener('click', () => {
            checkMCAnswer();
        });
    }

    // Button für reale LTI-Systeme holen
    const btnSystem = document.getElementById('load-system-btn');

    // gewähltes reales System in Simulation laden
    if (btnSystem) {
        btnSystem.addEventListener('click', () => {
            loadRealSystem();
        });
    }
});
