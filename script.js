// ===== THEME-PALETTES =====
const THEME_PALETTES = {
    dark: {
        BG: '#121212',
        PANEL: '#1E1E1E',
        TEXT: '#E0E0E0',
        X_RED: '#FF6384',
        H_CYAN: '#4BC0C0',
        H_ORANGE: '#FF9900',
        PRODUCT_FILL: '#FFCE56',
        Y_BLUE: '#36A2EB'
    },
    light: {
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

// ===== ÜBUNGEN (10 Stück) =====
const EXERCISES = [
    {
        id: 1,
        title: "Aufgabe 1: Rechteck + TP 1. Ordnung",
        description:
            "Stelle x(t) als Rechtecksignal und h(t) als TP 1. Ordnung ein. " +
            "Beobachte, wie y(t) langsam ansteigt und ein Maximum erreicht, wenn sich Rechteck und Impulsantwort überlappen.",
        settings: {
            inputSignal: "rechteck",
            impulseResponse: "tp1",
            Ax: 1.0,
            dtx: 1.0,
            taux: 0.0,
            dth: 1.0,
            tStart: -2.0
        },
        solutionHint:
            "Rechteck x(t) mit A_x = 1, Δt_x = 1, τ_x = 0 und TP 1. Ordnung mit Δt_h = 1. " +
            "Wenn das Rechteck vollständig über h(t) liegt, hat y(t) sein größtes Plateau.",
        mc: {
            question: "Was passiert mit y(t), wenn die Breite Δt_x des Rechtecks größer wird?",
            options: [
                "y(t) wird schmaler und höher.",
                "y(t) wird breiter und das Maximum verteilt sich über ein größeres t-Intervall.",
                "y(t) bleibt unverändert.",
                "y(t) verschwindet komplett."
            ],
            correctIndex: 1,
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

let currentExerciseIndex = 0;

// ===== GLOBAL CONTEXT =====
const ctx = {
    COLORS: { ...THEME_PALETTES.dark },
    currentTheme: 'dark',

    TIME_STEP: 0.2,
    T_MIN: -5.0,
    T_MAX: 5.0,
    INTEGRATION_STEP: 0.02,
    ANIMATION_DELAY: 10,

    i: 0,
    animate: null,
    started: false,
    dataintX: [],
    dataintY: [],

    Ax: 1.0,
    dtx: 1.0,
    taux: 0.0,
    dth: 1.0,

    boards: {},

    rectEdgesX: null,
    rectEdgesH: null
};

// ===== SIGNALDEFINITIONEN =====
function rechteck(tau) {
    const tau_start = ctx.taux - ctx.dtx / 2;
    const tau_end = ctx.taux + ctx.dtx / 2;
    return (tau >= tau_start && tau <= tau_end) ? ctx.Ax : 0.0;
}

function dreieck(tau) {
    const t_mid = ctx.taux;
    const t_start = t_mid - ctx.dtx;
    const t_end = t_mid + ctx.dtx;
    if (tau < t_start || tau > t_end) return 0.0;

    if (tau <= t_mid) {
        return ctx.Ax * (tau - t_start) / ctx.dtx;
    } else {
        return ctx.Ax * (t_end - tau) / ctx.dtx;
    }
}

function gauss(tau) {
    const sigma = ctx.dtx / 3.0;
    const mu = ctx.taux;
    return ctx.Ax * Math.exp(-((tau - mu) ** 2) / (2 * sigma ** 2));
}

function exponential_impulse(tau) {
    if (tau < ctx.taux) return 0.0;
    return ctx.Ax * Math.exp(-(tau - ctx.taux) / ctx.dtx);
}

function spalt(tau) {
    return (tau >= 0 && tau <= ctx.dth) ? 1.0 / ctx.dth : 0.0;
}

function tp1(tau) {
    return tau < 0 ? 0.0 : (1.0 / ctx.dth) * Math.exp(-tau / ctx.dth);
}

function tp2(tau) {
    if (tau < 0) return 0.0;
    const T = ctx.dth;
    return (tau / (T * T)) * Math.exp(-tau / T);
}

function gauss_tp(tau) {
    const sigma = ctx.dth / 3.0;
    const norm = 1.0 / (sigma * Math.sqrt(2 * Math.PI));
    return norm * Math.exp(-(tau ** 2) / (2 * sigma ** 2));
}

function get_xt(tau) {
    const selection = document.getElementById('input-signal').value;
    switch (selection) {
        case "rechteck":    return rechteck(tau);
        case "dreieck":     return dreieck(tau);
        case "gauss":       return gauss(tau);
        case "exponential": return exponential_impulse(tau);
        default: return 0.0;
    }
}

function get_ht(tau) {
    const selection = document.getElementById('impulse-response').value;
    switch (selection) {
        case "spalt":    return spalt(tau);
        case "tp1":      return tp1(tau);
        case "tp2":      return tp2(tau);
        case "gauss_tp": return gauss_tp(tau);
        default: return 0.0;
    }
}

// ===== KONVOLUTIONSINTEGRAL =====
function calculateConvolution(t) {
    let sum = 0.0;
    for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += ctx.INTEGRATION_STEP) {
        const x_val = get_xt(tau);
        const h_val = get_ht(t - tau);
        sum += x_val * h_val * ctx.INTEGRATION_STEP;
    }
    return sum;
}

// ===== THEME-FUNKTION =====
function applyTheme(themeName) {
    ctx.currentTheme = themeName;
    const palette = THEME_PALETTES[themeName] || THEME_PALETTES.dark;
    Object.assign(ctx.COLORS, palette);

    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(themeName === 'dark' ? 'theme-dark' : 'theme-light');

    if (Object.keys(ctx.boards).length > 0) {
        Object.values(ctx.boards).forEach(board => {
            if (board && board.containerObj) {
                board.containerObj.style.backgroundColor = ctx.COLORS.PANEL;
            }
        });
        restart(true);
        fixAxisColors();
    }

    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.textContent = themeName === 'dark' ? 'Theme: Dark' : 'Theme: Light';
    }
}

// ===== JSXGRAPH-BOARDS =====
function initBoards() {
    const tickOptions = {
        minorTicks: 1,
        strokeColor: ctx.COLORS.TEXT,
        drawLabels: true,
        label: { color: ctx.COLORS.TEXT, fontSize: 11 }
    };

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

    const plotOptions = {
        boundingbox: [-4, 1.2, 4, -0.2],
        showNavigation: false,
        showCopyright: false,
        axis: true,
        grid: {
            strokeWidth: 0.4,
            majorStep: [1, 0.2],
            strokeColor: 'rgba(200, 200, 200, 0.15)'
        },
        zoom: { enabled: false },
        pan: { enabled: false },
        defaultAxes: {
            x: { name: 'τ', ticks: tickOptions, ...axisOptions },
            y: { name: 'Amplitude', ticks: tickOptions, ...axisOptions }
        }
    };

    ctx.boards.x    = JXG.JSXGraph.initBoard("boxeingangsimpuls", plotOptions);
    ctx.boards.h    = JXG.JSXGraph.initBoard("boximpulsantwort", plotOptions);
    ctx.boards.mult = JXG.JSXGraph.initBoard("boxmultiplikation", plotOptions);
    ctx.boards.y    = JXG.JSXGraph.initBoard("boxintegration", {
        ...plotOptions,
        defaultAxes: {
            x: { name: 't', ticks: tickOptions, ...axisOptions },
            y: { name: 'y(t)', ticks: tickOptions, ...axisOptions }
        }
    });

    const controlOptions = {
        boundingbox: [0, 100, 100, 0],
        showNavigation: false,
        showCopyright: false,
        axis: false,
        grid: false,
        zoom: { enabled: false },
        pan: { enabled: false }
    };

    ctx.boards.controlX    = JXG.JSXGraph.initBoard("boxEinImp", controlOptions);
    ctx.boards.controlH    = JXG.JSXGraph.initBoard("boxImpAnt", controlOptions);
    ctx.boards.controlAnim = JXG.JSXGraph.initBoard("boxAnimation", {
        ...controlOptions,
        boundingbox: [0, 50, 200, 0]
    });

    Object.values(ctx.boards).forEach(board => {
        board.containerObj.style.backgroundColor = ctx.COLORS.PANEL;
    });
}

// ===== SLIDER & LABELS =====
function initControls() {
    const sliderStyle = {
        strokeColor: '#00bcd4',
        highlightStrokeColor: '#00acc1',
        fillColor: '#00bcd4',
        highlightFillColor: '#00acc1',
        size: 8,
        withLabel: false
    };

    ctx.boards.controlX.sldAx = ctx.boards.controlX.create("slider",
        [[5, 20], [95, 20], [0.1, ctx.Ax, 1.25]],
        { ...sliderStyle, snapWidth: 0.01 }
    );

    ctx.boards.controlX.slddtx = ctx.boards.controlX.create("slider",
        [[5, 50], [95, 50], [0.3, ctx.dtx, 4.0]],
        { ...sliderStyle, snapWidth: 0.02 }
    );

    ctx.boards.controlX.sldtaux = ctx.boards.controlX.create("slider",
        [[5, 80], [95, 80], [-2.0, ctx.taux, 2.0]],
        { ...sliderStyle, snapWidth: 0.02 }
    );

    ctx.boards.controlH.slddth = ctx.boards.controlH.create("slider",
        [[5, 30], [95, 30], [0.4, ctx.dth, 2.0]],
        { ...sliderStyle, snapWidth: 0.02 }
    );

    ctx.boards.controlAnim.sldTime = ctx.boards.controlAnim.create('slider',
        [[10, 25], [190, 25], [ctx.T_MIN, ctx.T_MIN, ctx.T_MAX]],
        { ...sliderStyle, snapWidth: 0.01 }
    );

    const red = '#e53935';

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

    const updateHandler = function () {
        ctx.Ax  = ctx.boards.controlX.sldAx.Value();
        ctx.dtx = ctx.boards.controlX.slddtx.Value();
        ctx.taux= ctx.boards.controlX.sldtaux.Value();
        ctx.dth = ctx.boards.controlH.slddth.Value();
        restart(true);
    };

    ctx.boards.controlX.sldAx.on('drag',     updateHandler);
    ctx.boards.controlX.slddtx.on('drag',    updateHandler);
    ctx.boards.controlX.sldtaux.on('drag',   updateHandler);
    ctx.boards.controlH.slddth.on('drag',    updateHandler);

    document.getElementById('input-signal').onchange     = updateHandler;
    document.getElementById('impulse-response').onchange = updateHandler;

    ctx.boards.controlAnim.sldTime.on('drag', function () {
        pauseAnimation();
        updateGraphs();
    });
}

// ===== ACHSFARBEN JE NACH THEME ANPASSEN =====
function fixAxisColors() {
    const textColor = ctx.currentTheme === 'dark' ? '#E0E0E0' : '#000000';

    Object.values(ctx.boards).forEach(board => {
        if (!board || !board.defaultAxes) return;

        const ax = board.defaultAxes;

        if (ax.x) {
            ax.x.setAttribute({
                strokeColor: textColor,
                label: { color: textColor }
            });
        }
        if (ax.y) {
            ax.y.setAttribute({
                strokeColor: textColor,
                label: { color: textColor }
            });
        }

        try { board.update(); } catch (e) {}
    });
}

// ===== ÜBUNGEN: TEXT & MC UI =====
function updateExerciseText(idx) {
    const ex = EXERCISES[idx];
    if (!ex) return;
    currentExerciseIndex = idx;

    const titleEl = document.getElementById('exercise-title');
    const descEl  = document.getElementById('exercise-description');
    const solEl   = document.getElementById('exercise-solution');

    if (titleEl) titleEl.textContent = ex.title;
    if (descEl)  descEl.textContent  = ex.description;
    if (solEl)   solEl.textContent   =
        "Klicke auf „Aufgabe laden“, um die Startwerte zu übernehmen. " +
        "Mit „Musterlösung anzeigen“ erhältst du einen Lösungsvorschlag.";

    renderMCForCurrentExercise();
}

function applyCurrentExerciseSettings() {
    const ex = EXERCISES[currentExerciseIndex];
    if (!ex) return;

    const s = ex.settings;

    document.getElementById('input-signal').value     = s.inputSignal;
    document.getElementById('impulse-response').value = s.impulseResponse;

    ctx.boards.controlX.sldAx.setValue(s.Ax);
    ctx.boards.controlX.slddtx.setValue(s.dtx);
    ctx.boards.controlX.sldtaux.setValue(s.taux);
    ctx.boards.controlH.slddth.setValue(s.dth);
    ctx.boards.controlAnim.sldTime.setValue(s.tStart ?? ctx.T_MIN);

    ctx.Ax  = s.Ax;
    ctx.dtx = s.dtx;
    ctx.taux= s.taux;
    ctx.dth = s.dth;

    restart(true);
}

function showExerciseSolution() {
    const ex = EXERCISES[currentExerciseIndex];
    if (!ex) return;
    const solEl = document.getElementById('exercise-solution');
    if (solEl) solEl.textContent = ex.solutionHint;
}

// MC-UI rendern
function renderMCForCurrentExercise() {
    const ex = EXERCISES[currentExerciseIndex];
    const qEl = document.getElementById('mc-question');
    const optEl = document.getElementById('mc-options');
    const fbEl = document.getElementById('mc-feedback');

    if (!ex || !ex.mc) {
        if (qEl) qEl.textContent = "Keine Multiple-Choice-Frage für diese Aufgabe definiert.";
        if (optEl) optEl.innerHTML = "";
        if (fbEl) fbEl.textContent = "";
        return;
    }

    const mc = ex.mc;

    if (qEl) qEl.textContent = mc.question || "";
    if (fbEl) {
        fbEl.textContent = "";
        fbEl.classList.remove('ok', 'err');
    }

    if (optEl) {
        optEl.innerHTML = "";
        mc.options.forEach((text, idx) => {
            const id = `mc-opt-${currentExerciseIndex}-${idx}`;
            const label = document.createElement('label');
            label.className = 'mc-option-label';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'mc-options-group';
            input.value = idx;
            input.id = id;

            const span = document.createElement('span');
            span.textContent = text;

            label.appendChild(input);
            label.appendChild(span);
            optEl.appendChild(label);
        });
    }
}

// MC-Antwort prüfen
function checkMCAnswer() {
    const ex = EXERCISES[currentExerciseIndex];
    if (!ex || !ex.mc) return;
    const mc = ex.mc;

    const fbEl = document.getElementById('mc-feedback');
    const radios = document.querySelectorAll('input[name="mc-options-group"]');

    let selectedIndex = null;
    radios.forEach(r => {
        if (r.checked) selectedIndex = parseInt(r.value, 10);
    });

    if (selectedIndex === null) {
        if (fbEl) {
            fbEl.textContent = "Bitte wähle eine Antwort aus.";
            fbEl.classList.remove('ok', 'err');
        }
        return;
    }

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

// ===== REALE LTI-SYSTEME LADEN =====
function loadRealSystem() {
    const sys = document.getElementById("realsystem-select").value;

    let desc = "";
    let formula = "";
    let app = "";
    let dth = ctx.dth;
    let impulse = "tp1";

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

    // UI aktualisieren
    document.getElementById("impulse-response").value = impulse;
    document.getElementById("system-description").textContent = desc;
    document.getElementById("system-formula").textContent = formula;
    document.getElementById("system-application").textContent = app;

    // Parameter setzen
    ctx.dth = dth;
    if (ctx.boards.controlH && ctx.boards.controlH.slddth) {
        ctx.boards.controlH.slddth.setValue(dth);
    }

    restart(true);
}

// ===== PLOTTEN =====
function updateGraphs() {
    const t = ctx.boards.controlAnim.sldTime.Value();

    // x(τ)
    if (ctx.plotX) ctx.boards.x.removeObject(ctx.plotX);
    ctx.plotX = ctx.boards.x.create('functiongraph', get_xt, {
        strokeColor: ctx.COLORS.X_RED,
        strokeWidth: 3,
        highlight: false
    });

    if (ctx.rectEdgesX && ctx.rectEdgesX.length) {
        ctx.rectEdgesX.forEach(seg => { try { ctx.boards.x.removeObject(seg); } catch (e) {} });
        ctx.rectEdgesX = null;
    }

    if (document.getElementById('input-signal').value === 'rechteck') {
        const tau_start = ctx.taux - ctx.dtx / 2;
        const tau_end   = ctx.taux + ctx.dtx / 2;

        const leftEdge = ctx.boards.x.create('segment',
            [[tau_start, 0], [tau_start, ctx.Ax]],
            { strokeColor: ctx.COLORS.X_RED, strokeWidth: 3, highlight: false }
        );
        const rightEdge = ctx.boards.x.create('segment',
            [[tau_end, 0], [tau_end, ctx.Ax]],
            { strokeColor: ctx.COLORS.X_RED, strokeWidth: 3, highlight: false }
        );
        ctx.rectEdgesX = [leftEdge, rightEdge];
    }

    // h(τ) und h(t-τ)
    if (ctx.plotH)    ctx.boards.h.removeObject(ctx.plotH);
    if (ctx.plotHref) ctx.boards.h.removeObject(ctx.plotHref);

    ctx.plotHref = ctx.boards.h.create('functiongraph',
        tau => get_ht(t - tau), {
            strokeColor: ctx.COLORS.H_ORANGE,
            strokeWidth: 2,
            highlight: false
        });

    ctx.plotH = ctx.boards.h.create('functiongraph', get_ht, {
        strokeColor: ctx.COLORS.H_CYAN,
        strokeWidth: 2,
        highlight: false
    });

    if (ctx.rectEdgesH && ctx.rectEdgesH.length) {
        ctx.rectEdgesH.forEach(seg => { try { ctx.boards.h.removeObject(seg); } catch (e) {} });
        ctx.rectEdgesH = null;
    }

    if (document.getElementById('impulse-response').value === 'spalt') {
        const hAmp = 1.0 / ctx.dth;

        const tau_start_h = 0;
        const tau_end_h   = ctx.dth;

        const leftEdge_h = ctx.boards.h.create('segment',
            [[tau_start_h, 0], [tau_start_h, hAmp]],
            { strokeColor: ctx.COLORS.H_CYAN, strokeWidth: 3, highlight: false }
        );
        const rightEdge_h = ctx.boards.h.create('segment',
            [[tau_end_h, 0], [tau_end_h, hAmp]],
            { strokeColor: ctx.COLORS.H_CYAN, strokeWidth: 3, highlight: false }
        );
        const topEdge_h = ctx.boards.h.create('segment',
            [[tau_start_h, hAmp], [tau_end_h, hAmp]],
            { strokeColor: ctx.COLORS.H_CYAN, strokeWidth: 3, highlight: false }
        );

        ctx.rectEdgesH = [leftEdge_h, rightEdge_h, topEdge_h];

        const tau_start_shift = t - ctx.dth;
        const tau_end_shift   = t;

        const leftEdge_shift = ctx.boards.h.create('segment',
            [[tau_start_shift, 0], [tau_start_shift, hAmp]],
            { strokeColor: ctx.COLORS.H_ORANGE, strokeWidth: 3, highlight: false }
        );
        const rightEdge_shift = ctx.boards.h.create('segment',
            [[tau_end_shift, 0], [tau_end_shift, hAmp]],
            { strokeColor: ctx.COLORS.H_ORANGE, strokeWidth: 3, highlight: false }
        );
        const topEdge_shift = ctx.boards.h.create('segment',
            [[tau_start_shift, hAmp], [tau_end_shift, hAmp]],
            { strokeColor: ctx.COLORS.H_ORANGE, strokeWidth: 3, highlight: false }
        );

        ctx.rectEdgesH.push(leftEdge_shift, rightEdge_shift, topEdge_shift);
    }

    const tauVals = [];
    const prodVals = [];
    const step = 0.05;

    for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += step) {
        tauVals.push(tau);
        prodVals.push(get_xt(tau) * get_ht(t - tau));
    }

    const fillX = [...tauVals, tauVals[tauVals.length - 1], tauVals[0]];
    const fillY = [...prodVals, 0, 0];

    if (ctx.productCurve) ctx.boards.mult.removeObject(ctx.productCurve);
    ctx.productCurve = ctx.boards.mult.create('curve', [fillX, fillY], {
        strokeColor: ctx.COLORS.PRODUCT_FILL,
        strokeWidth: 2,
        highlight: false,
        fillColor: ctx.COLORS.PRODUCT_FILL,
        fillOpacity: 0.4
    });

    if (!ctx.dataintX.length || ctx.dataintX[ctx.dataintX.length - 1] < t) {
        ctx.dataintX.push(t);
        ctx.dataintY.push(calculateConvolution(t));
    }

    if (ctx.plotY) ctx.boards.y.removeObject(ctx.plotY);
    ctx.plotY = ctx.boards.y.create('curve', [ctx.dataintX, ctx.dataintY], {
        strokeColor: ctx.COLORS.Y_BLUE,
        strokeWidth: 3,
        highlight: false
    });

    drawVerticalLine(ctx.boards.x, t);
    drawVerticalLine(ctx.boards.h, t);
    drawVerticalLine(ctx.boards.mult, t);
    drawVerticalLine(ctx.boards.y, t);

    Object.values(ctx.boards).forEach(b => b.update());

    updateResults();
    fixAxisColors();
}

function drawVerticalLine(board, t) {
    if (board.verticalLine) board.removeObject(board.verticalLine);

    const lineColor =
        ctx.currentTheme === 'dark'
            ? 'rgba(255,255,255,0.35)'
            : 'rgba(0,0,0,0.35)';

    board.verticalLine = board.create('line',
        [[t, -10], [t, 10]],
        {
            straightFirst: false,
            straightLast: false,
            strokeColor: lineColor,
            strokeWidth: 1,
            highlight: false
        }
    );
}

function updateResults() {
    const t   = ctx.boards.controlAnim.sldTime.Value();
    const y_t = calculateConvolution(t);
    const max_y = ctx.dataintY.length > 0 ? Math.max(...ctx.dataintY) : 0.0;

    let max_t = 'n/a';
    if (ctx.dataintY.length > 0) {
        const maxIndex = ctx.dataintY.indexOf(max_y);
        max_t = ctx.dataintX[maxIndex]?.toFixed(2) || 'n/a';
    }

    const resultsHTML = `
        <p>t = ${t.toFixed(2)}</p>
        <p>y(t) = ${y_t.toFixed(3)}</p>
        <p>y_max = ${max_y.toFixed(3)}</p>
        <p>t_max = ${max_t}</p>
    `;
    const box = document.getElementById('results-content');
    if (box) box.innerHTML = resultsHTML;
}

// ===== ZEIT & ANIMATION =====
function moveTime(delta) {
    const currentT = ctx.boards.controlAnim.sldTime.Value();
    let newT = currentT + delta;
    if (newT > ctx.T_MAX) newT = ctx.T_MAX;
    if (newT < ctx.T_MIN) newT = ctx.T_MIN;

    ctx.boards.controlAnim.sldTime.setValue(newT);
    updateGraphs();
}

window.stepTime = function (delta) {
    pauseAnimation();
    moveTime(delta);
};

function step() {
    ctx.i++;
    const t = ctx.T_MIN + ctx.i * ctx.TIME_STEP;

    if (t > ctx.T_MAX) {
        pauseAnimation();
        return;
    }

    ctx.boards.controlAnim.sldTime.setValue(t);
    updateGraphs();
}

function startAnimation() {
    if (ctx.animate) return;

    const currentT = ctx.boards.controlAnim.sldTime.Value();
    ctx.i = Math.round((currentT - ctx.T_MIN) / ctx.TIME_STEP);

    if (!ctx.started) {
        ctx.started = true;
        ctx.dataintX = [];
        ctx.dataintY = [];
    }

    ctx.animate = setInterval(step, ctx.ANIMATION_DELAY);
}

function pauseAnimation() {
    if (ctx.animate) {
        clearInterval(ctx.animate);
        ctx.animate = null;
    }
}

// ===== RESET & INIT =====
window.resetApp = function () {
    restart(true);
};

function restart(fullReset = true) {
    pauseAnimation();
    ctx.started = false;
    ctx.i = 0;

    if (fullReset) {
        ctx.dataintX = [];
        ctx.dataintY = [];
        ctx.boards.controlAnim.sldTime.setValue(ctx.T_MIN);
    }

    updateGraphs();
}

// ===== INIT BEIM LADEN =====
window.addEventListener("load", function () {
    initBoards();
    initControls();
    applyTheme('dark');
    updateExerciseText(0);
    updateGraphs();

    const btnTheme = document.getElementById('themeToggle');
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const next = ctx.currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }

    const btnPrev = document.getElementById('exercise-prev');
    const btnNext = document.getElementById('exercise-next');
    const btnLoad = document.getElementById('exercise-load');
    const btnSol  = document.getElementById('exercise-solution-btn');
    const btnMC   = document.getElementById('mc-check-btn');

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            const newIdx = (currentExerciseIndex - 1 + EXERCISES.length) % EXERCISES.length;
            updateExerciseText(newIdx);
        });
    }
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const newIdx = (currentExerciseIndex + 1) % EXERCISES.length;
            updateExerciseText(newIdx);
        });
    }
    if (btnLoad) {
        btnLoad.addEventListener('click', () => {
            applyCurrentExerciseSettings();
        });
    }
    if (btnSol) {
        btnSol.addEventListener('click', () => {
            showExerciseSolution();
        });
    }
    if (btnMC) {
        btnMC.addEventListener('click', () => {
            checkMCAnswer();
        });
    }

    const btnSystem = document.getElementById('load-system-btn');
    if (btnSystem) {
        btnSystem.addEventListener('click', () => {
            loadRealSystem();
        });
    }
});
