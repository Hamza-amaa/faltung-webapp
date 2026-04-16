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

    VIEW_X_MIN: -4,
    VIEW_X_MAX: 4,
    VIEW_Y_MIN: -1,
    VIEW_Y_MAX: 1.5,

    inputSignalType: 'gauss',
    impulseResponseType: 'tp1',
    needsAutoZoom: true,

    TIME_STEP: 0.05,
    T_MIN: -12.0,
    T_MAX: 12.0,
    START_T: -5.0,
    INTEGRATION_STEP: 0.01,
    ANIMATION_DELAY: 70,
    DELTA_VISUAL_WINDOW: 0.20,

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
    rectEdgesH: null,
    productGuideCurve: null,

    deltaStemsX: [],
    deltaStemsH: [],
    deltaStemsShifted: [],
    deltaStemsMult: [],
    deltaStemsY: [],

    outputCurveX: [],
    outputCurveY: [],

    customInputTimer: null,

custom: {
    inputExpr: '',
    impulseExpr: '',
    inputFn: null,
    impulseFn: null,
    inputFnNoDelta: null,
    impulseFnNoDelta: null,
    inputDeltaTerms: [],
    impulseDeltaTerms: [],
    inputPureDelta: false,
    impulsePureDelta: false
},

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

function u(x) {
    return x >= 0 ? 1 : 0;
}

function rect(x) {
    return Math.abs(x) <= 0.5 ? 1 : 0;
}

function tri(x) {
    const ax = Math.abs(x);
    return ax <= 1 ? (1 - ax) : 0;
}

function deltaApprox(x, eps = 0.03) {
    return Math.abs(x) <= eps / 2 ? (1 / eps) : 0;
}

function normalizeCustomExpression(expr) {
    return expr
        .replace(/σ\s*\(/g, 'u(')
        .replace(/δ\s*\(/g, 'delta(')
        .replace(/\^/g, '**');
}

function buildCustomFunction(expr, errorElementId) {
    const errorEl = errorElementId ? document.getElementById(errorElementId) : null;
    if (!expr || !expr.trim()) {
        if (errorEl) errorEl.textContent = 'Bitte eine Funktion eingeben.';
        return null;
    }

    const normalized = normalizeCustomExpression(expr);

    try {
        const fn = new Function(
            'tau', 'Ax', 'dtx', 'taux', 'dth', 'pi', 'e',
            'sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'abs',
            'u', 'rect', 'tri', 'delta',
            `return ${normalized};`
        );

        if (errorEl) errorEl.textContent = '';

        return function (tau) {
            try {
                const value = fn(
                    tau, ctx.Ax, ctx.dtx, ctx.taux, ctx.dth, Math.PI, Math.E,
                    Math.sin, Math.cos, Math.tan, Math.exp, Math.log, Math.sqrt, Math.abs,
                    u, rect, tri, deltaApprox
                );
                return Number.isFinite(value) ? value : 0;
            } catch (e) {
                return 0;
            }
        };
    } catch (e) {
        if (errorEl) errorEl.textContent = 'Ungültige Funktion.';
        return null;
    }
}

function extractDeltaTerms(expr) {
    if (!expr) return [];

    const normalized = normalizeCustomExpression(expr).replace(/\s+/g, '');
    const terms = [];
    const regex = /([+-]?\s*\d*\.?\d*)\s*\*?\s*delta\(tau\s*([+-]\s*\d*\.?\d+)?\s*\)/g;

    let match;
    while ((match = regex.exec(normalized)) !== null) {
        let ampStr = match[1];
        let shiftStr = match[2];

        let amp;
        if (ampStr === '' || ampStr === '+') amp = 1;
        else if (ampStr === '-') amp = -1;
        else amp = parseFloat(ampStr.replace(/\s+/g, ''));

        const pos = shiftStr ? -parseFloat(shiftStr.replace(/\s+/g, '')) : 0;

        if (Number.isFinite(amp) && Number.isFinite(pos)) {
            terms.push({ pos, amp });
        }
    }

    return terms;
}

function removeDeltaTerms(expr) {
    if (!expr || !expr.trim()) return '';

    const normalized = normalizeCustomExpression(expr);

    return normalized.replace(
        /(^|[+\-])\s*(\d*\.?\d*\s*\*?\s*)?delta\(tau\s*([+\-]\s*\d*\.?\d+)?\s*\)/g,
        (match, prefix) => {
            // Am Anfang des Ausdrucks
            if (!prefix || prefix === '') return '0';

            // Operator erhalten, damit der Rest syntaktisch gültig bleibt
            return `${prefix}0`;
        }
    );
}

function resolveTokenValue(token, kind = 'input') {
    if (!token) return null;
    const t = token.replace(/\s+/g, '');

    if (t === 'Ax') return ctx.Ax;
    if (t === 'dtx') return kind === 'input' ? ctx.dtx : ctx.dth;
    if (t === 'dth') return ctx.dth;
    if (t === 'taux') return ctx.taux;

    const num = parseFloat(t);
    return Number.isFinite(num) ? num : null;
}

function parseSimpleRectExpression(expr, kind = 'input') {
    if (!expr) return null;

    const normalized = normalizeCustomExpression(expr).replace(/\s+/g, '');

    const m = normalized.match(
        /^(?:(Ax|[+\-]?\d*\.?\d+)\*)?rect\(\(tau([+\-]\d*\.?\d+)?\)\/(dtx|dth|[+\-]?\d*\.?\d+)\)$/
    );

    if (!m) return null;

    const amp = resolveTokenValue(m[1] || '1', kind);
    const shift = m[2] ? -parseFloat(m[2]) : 0;
    const width = resolveTokenValue(m[3], kind);

    if (!Number.isFinite(amp) || !Number.isFinite(width) || Math.abs(width) < 1e-9) {
        return null;
    }

    return {
        amp,
        center: shift,
        width
    };
}

function refreshCustomFunctions() {
    const inputExpr = document.getElementById('custom-input-function')?.value || '';
    const impulseExpr = document.getElementById('custom-impulse-function')?.value || '';

if (inputExpr !== ctx.custom.inputExpr) {
    ctx.custom.inputExpr = inputExpr;
    ctx.custom.inputFn = buildCustomFunction(inputExpr, 'custom-input-error');
    ctx.custom.inputFnNoDelta = buildCustomFunction(removeDeltaTerms(inputExpr), null);
    ctx.custom.inputDeltaTerms = extractDeltaTerms(inputExpr);
    ctx.custom.inputPureDelta = isPureDeltaExpression(inputExpr);
}

if (impulseExpr !== ctx.custom.impulseExpr) {
    ctx.custom.impulseExpr = impulseExpr;
    ctx.custom.impulseFn = buildCustomFunction(impulseExpr, 'custom-impulse-error');
    ctx.custom.impulseFnNoDelta = buildCustomFunction(removeDeltaTerms(impulseExpr), null);
    ctx.custom.impulseDeltaTerms = extractDeltaTerms(impulseExpr);
    ctx.custom.impulsePureDelta = isPureDeltaExpression(impulseExpr);
}
}

function hasCustomDelta(signalType) {
    if (signalType === 'input') {
        return ctx.custom.inputDeltaTerms && ctx.custom.inputDeltaTerms.length > 0;
    }
    if (signalType === 'impulse') {
        return ctx.custom.impulseDeltaTerms && ctx.custom.impulseDeltaTerms.length > 0;
    }
    return false;
}

function getDeltaStemYRange(terms) {
    if (!terms || !terms.length) {
        return { yMin: -0.5, yMax: 1.5 };
    }

    let yMin = 0;
    let yMax = 0;
    for (const term of terms) {
        yMin = Math.min(yMin, term.amp);
        yMax = Math.max(yMax, term.amp);
    }

    if (Math.abs(yMax - yMin) < 1e-6) {
        yMax += 0.5;
        yMin -= 0.5;
    }

    const pad = Math.max(0.2, 0.2 * (yMax - yMin));
    return {
        yMin: yMin - pad,
        yMax: yMax + pad
    };
}

function isPureDeltaExpression(expr) {
    if (!expr || !expr.trim()) return false;

    const normalized = normalizeCustomExpression(expr)
        .replace(/\s+/g, '')
        .replace(/([+-]?\d*\.?\d*)\*?delta\(tau([+-]\d*\.?\d+)?\)/g, '')
        .replace(/[+-]/g, '');

    return normalized === '';
}

function get_xt(tau) {
    const sig = ctx.inputSignalType;

    if (sig === 'rechteck') {
        return (tau >= ctx.taux - ctx.dtx / 2 && tau <= ctx.taux + ctx.dtx / 2) ? ctx.Ax : 0;
    }
    if (sig === 'dreieck') {
        const dist = Math.abs(tau - ctx.taux);
        const half = ctx.dtx / 2;
        return dist <= half ? ctx.Ax * (1 - dist / half) : 0;
    }
    if (sig === 'gauss') {
        const sigma = Math.max(ctx.dtx / 2.355, 0.05);
        return ctx.Ax * Math.exp(-Math.pow(tau - ctx.taux, 2) / (2 * sigma * sigma));
    }
    if (sig === 'exponential') {
        return tau >= ctx.taux ? ctx.Ax * Math.exp(-(tau - ctx.taux) / Math.max(ctx.dtx, 0.05)) : 0;
    }
    if (sig === 'custom') {
       return ctx.custom.inputFn ? ctx.custom.inputFn(tau) : 0;
    }

    return 0;
}

function get_ht(tau) {
    const sys = ctx.impulseResponseType;

    if (sys === 'spalt') {
        return (tau >= 0 && tau <= ctx.dth) ? (1.0 / Math.max(ctx.dth, 0.05)) : 0;
    }
    if (sys === 'tp1') {
        return tau >= 0 ? (1.0 / Math.max(ctx.dth, 0.05)) * Math.exp(-tau / Math.max(ctx.dth, 0.05)) : 0;
    }
    if (sys === 'tp2') {
        return tau >= 0 ? (tau / Math.max(ctx.dth * ctx.dth, 0.05)) * Math.exp(-tau / Math.max(ctx.dth, 0.05)) : 0;
    }
    if (sys === 'gauss_tp') {
        const sigma = Math.max(ctx.dth / 2.355, 0.05);
        return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-(tau * tau) / (2 * sigma * sigma));
    }
    if (sys === 'custom') {
        return ctx.custom.impulseFn ? ctx.custom.impulseFn(tau) : 0;
   }

    return 0;
}

function get_xt_plot(tau) {
    if (ctx.inputSignalType === 'custom') {
        return ctx.custom.inputFnNoDelta ? ctx.custom.inputFnNoDelta(tau) : 0;
    }
    return get_xt(tau);
}

function get_ht_plot(tau) {
    if (ctx.impulseResponseType === 'custom') {
        return ctx.custom.impulseFnNoDelta ? ctx.custom.impulseFnNoDelta(tau) : 0;
    }
    return get_ht(tau);
}

function calculateConvolutionFast(t) {
    const inputType = ctx.inputSignalType;
    const impulseType = ctx.impulseResponseType;

    // Fall 1: x(t) besteht nur aus Delta-Stäben
    if (inputType === 'custom' && ctx.custom.inputPureDelta) {
        let sum = 0;
        for (const term of ctx.custom.inputDeltaTerms) {
            sum += term.amp * get_ht_plot(t - term.pos);
        }
        return sum;
    }

    // Fall 2: h(t) besteht nur aus Delta-Stäben
    if (impulseType === 'custom' && ctx.custom.impulsePureDelta) {
        let sum = 0;
        for (const term of ctx.custom.impulseDeltaTerms) {
            sum += term.amp * get_xt(t - term.pos);
        }
        return sum;
    }

    // Fall 3: normale numerische Rechnung
    let sum = 0.0;
    for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += ctx.INTEGRATION_STEP) {
        const x_val = get_xt(tau);
        const h_val = get_ht(t - tau);
        sum += x_val * h_val * ctx.INTEGRATION_STEP;
    }

    return sum;
}

// ===== KONVOLUTIONSINTEGRAL =====
function calculateConvolution(t) {
    return calculateConvolutionFast(t);
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
    minorTicks: 0,
    strokeColor: ctx.COLORS.TEXT,
    drawLabels: true,
    majorHeight: 8,
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
    
    ctx.boards.x    = JXG.JSXGraph.initBoard("boxeingangsimpuls", plotOptions);
    ctx.boards.h    = JXG.JSXGraph.initBoard("boximpulsantwort", plotOptions);
    ctx.boards.mult = JXG.JSXGraph.initBoard("boxmultiplikation", plotOptions);
    ctx.boards.y = JXG.JSXGraph.initBoard("boxintegration", {
    ...plotOptions,
    boundingbox: [-4, 1.25, 4, -0.15],
    defaultAxes: {
        x: { name: 't', ticks: { ...tickOptions, insertTicks: false, ticksDistance: 1 }, ...axisOptions },
        y: { name: '', ticks: { ...tickOptions, insertTicks: false, ticksDistance: 0.25 }, ...axisOptions }
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

function updateCustomFunctionVisibility() {
    const inputSel = document.getElementById('input-signal');
    const impulseSel = document.getElementById('impulse-response');

    const inputBox = document.getElementById('custom-input-box');
    const impulseBox = document.getElementById('custom-impulse-box');

    if (inputSel && inputBox) {
        inputBox.classList.toggle('hidden', inputSel.value !== 'custom');
    }

    if (impulseSel && impulseBox) {
        impulseBox.classList.toggle('hidden', impulseSel.value !== 'custom');
    }
}

function refreshSelectedTypes() {
    const inputSel = document.getElementById('input-signal');
    const impulseSel = document.getElementById('impulse-response');

    ctx.inputSignalType = inputSel ? inputSel.value : 'gauss';
    ctx.impulseResponseType = impulseSel ? impulseSel.value : 'tp1';
}

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

function invalidateZoomCache() {
    ctx.zoomCache.valid = false;
    ctx.needsAutoZoom = true;
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
        [[5, 20], [95, 20], [0.1, ctx.Ax, 3.0]],
        { ...sliderStyle, snapWidth: 0.05 }
    );

    ctx.boards.controlX.slddtx = ctx.boards.controlX.create("slider",
        [[5, 50], [95, 50], [0.0, ctx.dtx, 4.0]],
        { ...sliderStyle, snapWidth: 1.0 }
    );

    ctx.boards.controlX.sldtaux = ctx.boards.controlX.create("slider",
        [[5, 80], [95, 80], [ctx.T_MIN, ctx.taux, ctx.T_MAX]],
        { ...sliderStyle, snapWidth: 0.1 }
    );

    ctx.boards.controlH.slddth = ctx.boards.controlH.create("slider",
        [[5, 30], [95, 30], [0.1, ctx.dth, 4.0]],
        { ...sliderStyle, snapWidth: 0.1 }
   );

    ctx.boards.controlAnim.sldTime = ctx.boards.controlAnim.create('slider',
        [[10, 25], [190, 25], [ctx.T_MIN, ctx.T_MIN, ctx.T_MAX]],
        { ...sliderStyle, snapWidth: 0.001 }
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

    ctx.boards.controlX.sldAx.on('drag',     updateHandler);
    ctx.boards.controlX.slddtx.on('drag',    updateHandler);
    ctx.boards.controlX.sldtaux.on('drag',   updateHandler);
    ctx.boards.controlH.slddth.on('drag',    updateHandler);

const axInput = document.getElementById('Ax-input');
const dtxInput = document.getElementById('dtx-input');
const tauxInput = document.getElementById('taux-input');
const dthInput = document.getElementById('dth-input');
const timeInput = document.getElementById('time-input');

function syncInputsFromSliders() {
    if (axInput) axInput.value = ctx.boards.controlX.sldAx.Value().toFixed(2);
    if (dtxInput) dtxInput.value = ctx.boards.controlX.slddtx.Value().toFixed(2);
    if (tauxInput) tauxInput.value = ctx.boards.controlX.sldtaux.Value().toFixed(2);
    if (dthInput) dthInput.value = ctx.boards.controlH.slddth.Value().toFixed(2);
    if (timeInput) timeInput.value = ctx.boards.controlAnim.sldTime.Value().toFixed(2);
}

syncInputsFromSliders();

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

document.getElementById('input-signal').onchange = function () {
   refreshSelectedTypes();
   updateCustomFunctionVisibility();
   invalidateZoomCache();
   updateHandler();
};

document.getElementById('impulse-response').onchange = function () {
   refreshSelectedTypes();
   updateCustomFunctionVisibility();
   invalidateZoomCache();
   updateHandler();
};

   updateCustomFunctionVisibility();

    ctx.boards.controlAnim.sldTime.on('drag', function () {
        pauseAnimation();
        updateGraphs();
        const timeInput = document.getElementById('time-input');
        if (timeInput) timeInput.value = ctx.boards.controlAnim.sldTime.Value().toFixed(2);
    });

    const customInput = document.getElementById('custom-input-function');
    const customImpulse = document.getElementById('custom-impulse-function');

    if (customInput) {
        customInput.addEventListener('input', function () {
                    scheduleCustomRedraw();
        });
    }

    if (customImpulse) {
        customImpulse.addEventListener('input', function () {
                    scheduleCustomRedraw();
        });
    }
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

    refreshSelectedTypes();
    ctx.needsAutoZoom = true;
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

    refreshSelectedTypes();
    ctx.needsAutoZoom = true;
    restart(true);
}

function drawDeltaStems(board, terms, color, shiftedT = null) {
    if (!terms || !terms.length) return [];

    const stems = [];
    for (const term of terms) {
        let x = term.pos;
        if (shiftedT !== null) {
            x = shiftedT - term.pos;
        }

        const y = term.amp;
        const stem = board.create('segment', [[x, 0], [x, y]], {
            strokeColor: color,
            strokeWidth: board === ctx.boards.mult ? 5 : 3,
            highlight: false
        });

        const head = board.create('point', [x, y], {
            fixed: true,
            size: board === ctx.boards.mult ? 4 : 2,
            strokeColor: color,
            fillColor: color,
            highlight: false,
            name: ''
        });

        stems.push(stem, head);
    }
    return stems;
}

function sampleSignalRange(fn, xMin, xMax, step = 0.2) {
    let yMin = Infinity;
    let yMax = -Infinity;
    let hasFinite = false;

    for (let x = xMin; x <= xMax; x += step) {
        const y = fn(x);
        if (Number.isFinite(y)) {
            hasFinite = true;
            if (y < yMin) yMin = y;
            if (y > yMax) yMax = y;
        }
    }

    if (!hasFinite) {
        return { yMin: -0.5, yMax: 1.0 };
    }

    if (Math.abs(yMax - yMin) < 1e-6) {
        yMax += 0.5;
        yMin -= 0.5;
    }

    const pad = Math.max(0.15, 0.15 * (yMax - yMin));
    return {
        yMin: yMin - pad,
        yMax: yMax + pad
    };
}

function mergeYRanges(...ranges) {
    const valid = ranges.filter(r => r && Number.isFinite(r.yMin) && Number.isFinite(r.yMax));
    if (!valid.length) return { yMin: -0.15, yMax: 1.25 };

    let yMin = valid[0].yMin;
    let yMax = valid[0].yMax;

    for (const r of valid.slice(1)) {
        yMin = Math.min(yMin, r.yMin);
        yMax = Math.max(yMax, r.yMax);
    }

    return { yMin, yMax };
}

function getSignalXWindow() {
    let xMin = -4;
    let xMax = 4;

    const inputType = ctx.inputSignalType;
    const impulseType = ctx.impulseResponseType;

    // Normale Signale: Bereich wie bisher behalten
    if (inputType !== 'custom' && impulseType !== 'custom') {
        return { xMin: -4, xMax: 4 };
    }

    // Eigene Funktion x(t): Bereich durch Abtastung bestimmen
    if (inputType === 'custom') {
        let found = false;
        let first = null;
        let last = null;

        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.1) {
            const y = get_xt_plot(tau);
            if (Math.abs(y) > 1e-4) {
                if (!found) first = tau;
                last = tau;
                found = true;
            }
        }

        if (found) {
            xMin = Math.min(xMin, first - 1.0);
            xMax = Math.max(xMax, last + 1.0);
        }

        if (ctx.custom.inputDeltaTerms.length) {
            const xs = ctx.custom.inputDeltaTerms.map(d => d.pos);
            xMin = Math.min(xMin, Math.min(...xs) - 1.5);
            xMax = Math.max(xMax, Math.max(...xs) + 1.5);
        }
    }

    // Eigene Funktion h(t): Bereich durch Abtastung bestimmen
    if (impulseType === 'custom') {
        let found = false;
        let first = null;
        let last = null;

        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.05) {
            const y = get_ht_plot(tau);
            if (Math.abs(y) > 1e-4) {
                if (!found) first = tau;
                last = tau;
                found = true;
            }
        }

        if (found) {
            xMin = Math.min(xMin, first - 1.0);
            xMax = Math.max(xMax, last + 1.0);
        }

        if (ctx.custom.impulseDeltaTerms.length) {
            const hs = ctx.custom.impulseDeltaTerms.map(d => d.pos);
            xMin = Math.min(xMin, Math.min(...hs) - 1.5);
            xMax = Math.max(xMax, Math.max(...hs) + 1.5);
        }
    }

    xMin = Math.max(ctx.T_MIN, xMin);
    xMax = Math.min(ctx.T_MAX, xMax);

    if (xMax - xMin < 6) {
        const mid = 0.5 * (xMin + xMax);
        xMin = Math.max(ctx.T_MIN, mid - 3);
        xMax = Math.min(ctx.T_MAX, mid + 3);
    }

    return { xMin, xMax };
}

function rebuildCustomZoomCache(t) {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

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

    const { xMin, xMax } = getSignalXWindow();
    const viewPad = 0.8;
    const left = Math.max(ctx.T_MIN, xMin - viewPad);
    const right = Math.min(ctx.T_MAX, xMax + viewPad);

    // Eingangssignal
    let xRange;
    if (hasCustomInput && ctx.custom.inputPureDelta) {
    xRange = getDeltaStemYRange(ctx.custom.inputDeltaTerms);
    } else {
    xRange = sampleSignalRange(get_xt_plot, xMin, xMax, 0.1);
    if (hasCustomInput && ctx.custom.inputDeltaTerms.length) {
        xRange = mergeYRanges(xRange, getDeltaStemYRange(ctx.custom.inputDeltaTerms));
    }
    }

    // Impulsantwort: statisches h(tau)
    let hBaseRange;
    if (hasCustomImpulse && ctx.custom.impulsePureDelta) {
        hBaseRange = getDeltaStemYRange(ctx.custom.impulseDeltaTerms);
    } else {
        hBaseRange = sampleSignalRange(get_ht_plot, xMin, xMax, 0.1);
    if (hasCustomImpulse && ctx.custom.impulseDeltaTerms.length) {
        hBaseRange = mergeYRanges(hBaseRange, getDeltaStemYRange(ctx.custom.impulseDeltaTerms));
    }
   }

    // Vor Start: h(-tau), nach Start: h(t-tau)
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

    const hYMin = Math.min(hBaseRange.yMin, hRefRange.yMin);
    const hYMax = Math.max(hBaseRange.yMax, hRefRange.yMax);

    // Multiplikation nur grob und nur wenn sinnvoll
    let multRange = { yMin: -0.15, yMax: 1.25 };
    const onlyDeltaProduct =
        (ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta) ||
        (ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta);

    if (ctx.started && !onlyDeltaProduct && !isHeavyCustomScene()) {
        multRange = sampleSignalRange(
            tau => get_xt_plot(tau) * get_ht_plot(t - tau),
            xMin,
            xMax,
            0.05
       );
    }

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

function applyAutoZoom(t) {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    // Normale Signale: exakt wie bisher
    if (!hasCustomInput && !hasCustomImpulse) {
        ctx.boards.x.setBoundingBox([-4, 1.25, 4, -0.15], false);
        ctx.boards.h.setBoundingBox([-4, 1.25, 4, -0.15], false);
        ctx.boards.mult.setBoundingBox([-4, 1.25, 4, -0.15], false);
        ctx.boards.y.setBoundingBox([-4, 1.25, 4, -0.15], false);
        return;
    }

    // Custom-Zoom nur neu berechnen, wenn nötig
    if (!ctx.zoomCache.valid) {
        rebuildCustomZoomCache(t);
    }

    const z = ctx.zoomCache;

    // y(t) bleibt dynamisch, weil sich das Signal während der Animation aufbaut
    let yMin = -0.15;
    let yMax = 1.25;

    if (ctx.dataintY.length > 0) {
        const yDataMin = Math.min(...ctx.dataintY);
        const yDataMax = Math.max(...ctx.dataintY);
        const yPad = Math.max(0.15, 0.15 * Math.max(0.5, yDataMax - yDataMin));
        yMin = yDataMin - yPad;
        yMax = yDataMax + yPad;
    }

    ctx.boards.x.setBoundingBox([z.left, z.xYMax, z.right, z.xYMin], false);
    ctx.boards.h.setBoundingBox([z.left, z.hYMax, z.right, z.hYMin], false);

    let multYMin = z.multYMin;
    let multYMax = z.multYMax;

    const pureDeltaInput =
          ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
    ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    if (ctx.started && (pureDeltaInput || pureDeltaImpulse)) {
        const r = getMultiplicationDeltaYRange(t);
        multYMin = r.yMin;
        multYMax = r.yMax;
    }

    ctx.boards.mult.setBoundingBox([z.left, multYMax, z.right, multYMin], false);

    ctx.boards.y.setBoundingBox([z.left, yMax, z.right, yMin], false);
    updateBoardTickDensity(ctx.boards.x, z.right - z.left, z.xYMax - z.xYMin);
    updateBoardTickDensity(ctx.boards.h, z.right - z.left, z.hYMax - z.hYMin);
}

function updateYBoardZoom() {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    let left = -4;
    let right = 4;

    if (hasCustomInput || hasCustomImpulse) {
        if (!ctx.zoomCache.valid) {
            rebuildCustomZoomCache(ctx.boards.controlAnim.sldTime.Value());
        }
        left = ctx.zoomCache.left;
        right = ctx.zoomCache.right;
    }

    let yMin = -0.15;
    let yMax = 1.25;

    const tCurrent = ctx.boards.controlAnim.sldTime.Value();
    const out = getCurrentOutputSamplesForResults(tCurrent);

    if (out.ys.length > 0) {
        const minVal = Math.min(...out.ys);
        const maxVal = Math.max(...out.ys);
        const span = Math.max(0.5, maxVal - minVal);
        const pad = Math.max(0.15, 0.12 * span);
        yMin = Math.min(yMin, minVal - pad);
        yMax = Math.max(yMax, maxVal + pad);
    }

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

    ctx.boards.y.setBoundingBox([left, yMax, right, yMin], false);
    updateYAxisTickDensity(ctx.boards.y, yMax - yMin);
}

function updateMultBoardZoom(t) {
    const hasCustomInput = ctx.inputSignalType === 'custom';
    const hasCustomImpulse = ctx.impulseResponseType === 'custom';

    let left = -4;
    let right = 4;

    if (hasCustomInput || hasCustomImpulse) {
        if (!ctx.zoomCache.valid) {
            rebuildCustomZoomCache(t);
        }
        left = ctx.zoomCache.left;
        right = ctx.zoomCache.right;
    }

    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    if (ctx.started && (pureDeltaInput || pureDeltaImpulse)) {
        const r = getMultiplicationDeltaYRange(t);
        ctx.boards.mult.setBoundingBox([left, r.yMax, right, r.yMin], false);
        updateBoardTickDensity(ctx.boards.mult, right - left, r.yMax - r.yMin);
        return;
    }

    if (hasCustomInput || hasCustomImpulse) {
        ctx.boards.mult.setBoundingBox(
            [left, ctx.zoomCache.multYMax, right, ctx.zoomCache.multYMin],
            false
        );
    } else {
        ctx.boards.mult.setBoundingBox([-4, 1.25, 4, -0.15], false);
    }

    const bb = ctx.boards.mult.getBoundingBox();
    updateBoardTickDensity(ctx.boards.mult, bb[2] - bb[0], bb[1] - bb[3]);
}

function drawMultiplicationDeltaStems(t) {
    const stems = [];

    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    // Fall 1: x ist Delta, h hat kontinuierlichen Anteil
    if (ctx.custom.inputDeltaTerms.length && !pureDeltaImpulse) {
        for (const term of ctx.custom.inputDeltaTerms) {
            const y = term.amp * get_ht_plot(t - term.pos);
            if (Math.abs(y) > 1e-6) {
                stems.push(...drawDeltaStems(
                    ctx.boards.mult,
                    [{ pos: term.pos, amp: y }],
                    ctx.COLORS.PRODUCT_FILL
                ));
            }
        }
    }

    // Fall 2: h ist Delta, x hat kontinuierlichen Anteil
    if (ctx.custom.impulseDeltaTerms.length && !pureDeltaInput) {
        for (const term of ctx.custom.impulseDeltaTerms) {
            const tauPos = t - term.pos;
            const y = term.amp * get_xt_plot(tauPos);
            if (Math.abs(y) > 1e-6) {
                stems.push(...drawDeltaStems(
                    ctx.boards.mult,
                    [{ pos: tauPos, amp: y }],
                    ctx.COLORS.PRODUCT_FILL
                ));
            }
        }
    }

    // Fall 3: Delta ⊛ Delta
    if (pureDeltaInput && pureDeltaImpulse) {
        for (const xTerm of ctx.custom.inputDeltaTerms) {
            for (const hTerm of ctx.custom.impulseDeltaTerms) {
                const tauPos = xTerm.pos;
                const activeAtThisT = Math.abs(t - (xTerm.pos + hTerm.pos)) <= ctx.DELTA_VISUAL_WINDOW;

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

function getMultiplicationDeltaYRange(t) {
    let yMin = Infinity;
    let yMax = -Infinity;
    let found = false;

    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    function includeValue(y) {
        if (Number.isFinite(y) && Math.abs(y) > 1e-9) {
            yMin = Math.min(yMin, y);
            yMax = Math.max(yMax, y);
            found = true;
        }
    }

    // Fall 1: x ist Delta, h hat kontinuierlichen Anteil
    if (ctx.custom.inputDeltaTerms.length && !pureDeltaImpulse) {
        for (const term of ctx.custom.inputDeltaTerms) {
            const y = term.amp * get_ht_plot(t - term.pos);
            includeValue(y);
        }

        // Guide-Kurve mit berücksichtigen
        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.1) {
            includeValue(get_ht_plot(t - tau));
        }
    }

    // Fall 2: h ist Delta, x hat kontinuierlichen Anteil
    if (ctx.custom.impulseDeltaTerms.length && !pureDeltaInput) {
        for (const term of ctx.custom.impulseDeltaTerms) {
            const tauPos = t - term.pos;
            const y = term.amp * get_xt_plot(tauPos);
            includeValue(y);
        }

        // Guide-Kurve mit berücksichtigen
        for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += 0.1) {
            includeValue(get_xt_plot(tau));
        }
    }

    // Fall 3: Delta ⊛ Delta
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

    if (!found) return { yMin: -0.15, yMax: 1.25 };

    if (Math.abs(yMax - yMin) < 1e-6) {
        yMax += 0.5;
        yMin -= 0.5;
    }

    const pad = Math.max(0.15, 0.2 * (yMax - yMin));
    return {
        yMin: yMin - pad,
        yMax: yMax + pad
    };
}

function computeOutputDeltaTerms() {
    const out = [];

    const xTerms = ctx.custom.inputDeltaTerms || [];
    const hTerms = ctx.custom.impulseDeltaTerms || [];

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

function computeShiftedCurveFromPureDeltaInput(tMaxCurrent) {
    const xs = [];
    const ys = [];

    for (let t = ctx.T_MIN; t <= tMaxCurrent; t += ctx.TIME_STEP) {
        let sum = 0;

        for (const term of ctx.custom.inputDeltaTerms) {
            sum += term.amp * get_ht_plot(t - term.pos);
        }

        xs.push(t);
        ys.push(sum);
    }

    return { xs, ys };
}

function computeShiftedCurveFromPureDeltaImpulse(tMaxCurrent) {
    const xs = [];
    const ys = [];

    for (let t = ctx.T_MIN; t <= tMaxCurrent; t += ctx.TIME_STEP) {
        let sum = 0;

        for (const term of ctx.custom.impulseDeltaTerms) {
            sum += term.amp * get_xt_plot(t - term.pos);
        }

        xs.push(t);
        ys.push(sum);
    }

    return { xs, ys };
}

function computeMixedOutputDeltaTerms() {
    const out = [];

    const xTerms = ctx.custom.inputDeltaTerms || [];
    const hTerms = ctx.custom.impulseDeltaTerms || [];

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
function updateGraphs() {
    const t = ctx.boards.controlAnim.sldTime.Value();
    refreshSelectedTypes();
    refreshCustomFunctions();

    ctx.boards.x.suspendUpdate();
    ctx.boards.h.suspendUpdate();
    ctx.boards.mult.suspendUpdate();
    ctx.boards.y.suspendUpdate();

    if (ctx.deltaStemsX.length) {
        ctx.deltaStemsX.forEach(o => { try { ctx.boards.x.removeObject(o); } catch (e) {} });
        ctx.deltaStemsX = [];
    }
    if (ctx.deltaStemsH.length) {
        ctx.deltaStemsH.forEach(o => { try { ctx.boards.h.removeObject(o); } catch (e) {} });
        ctx.deltaStemsH = [];
    }
    if (ctx.deltaStemsShifted.length) {
        ctx.deltaStemsShifted.forEach(o => { try { ctx.boards.h.removeObject(o); } catch (e) {} });
        ctx.deltaStemsShifted = [];
    }
    if (ctx.deltaStemsMult.length) {
    ctx.deltaStemsMult.forEach(o => { try { ctx.boards.mult.removeObject(o); } catch (e) {} });
    ctx.deltaStemsMult = [];
    }
    if (ctx.deltaStemsY.length) {
    ctx.deltaStemsY.forEach(o => { try { ctx.boards.y.removeObject(o); } catch (e) {} });
    ctx.deltaStemsY = [];
   }

    // x(τ)
   if (ctx.plotX) ctx.boards.x.removeObject(ctx.plotX);
   if (ctx.rectEdgesX && ctx.rectEdgesX.length) {
       ctx.rectEdgesX.forEach(seg => { try { ctx.boards.x.removeObject(seg); } catch (e) {} });
       ctx.rectEdgesX = null;
    }

   const inputType = ctx.inputSignalType;

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
} else {
    ctx.plotX = null;

    const parsedCustomRectX =
        inputType === 'custom' ? parseSimpleRectExpression(ctx.custom.inputExpr, 'input') : null;

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
    } else if (!(inputType === 'custom' && ctx.custom.inputPureDelta)) {
        ctx.plotX = ctx.boards.x.create('functiongraph', get_xt_plot, {
            strokeColor: ctx.COLORS.X_RED,
            strokeWidth: 3,
            highlight: false
        });
    }

    if (inputType === 'custom' && ctx.custom.inputDeltaTerms.length) {
        ctx.deltaStemsX = drawDeltaStems(
            ctx.boards.x,
            ctx.custom.inputDeltaTerms,
            ctx.COLORS.X_RED
        );
    }
}

    // h(τ) und h(t-τ)
    if (ctx.plotH)    ctx.boards.h.removeObject(ctx.plotH);
    if (ctx.plotHref) ctx.boards.h.removeObject(ctx.plotHref);

    const impulseType = ctx.impulseResponseType;
    const showOriginalImpulse = !ctx.started;
    const showStaticReflectedAtStart = !ctx.started;
    const showMovingReflected = ctx.started;

    if (ctx.rectEdgesH && ctx.rectEdgesH.length) {
        ctx.rectEdgesH.forEach(seg => { try { ctx.boards.h.removeObject(seg); } catch (e) {} });
        ctx.rectEdgesH = null;
 }

    if (impulseType === 'spalt') {
    const hAmp = 1.0 / ctx.dth;

    ctx.plotH = null;

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

    // Vor Start: statisch h(-τ) anzeigen
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

    // Nach Start: bewegtes h(t-τ) anzeigen
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

   } else {
    ctx.plotH = null;

const parsedCustomRectH =
    impulseType === 'custom' ? parseSimpleRectExpression(ctx.custom.impulseExpr, 'impulse') : null;

if (showOriginalImpulse && !(impulseType === 'custom' && ctx.custom.impulsePureDelta)) {
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
    } else {
        ctx.plotH = ctx.boards.h.create('functiongraph', get_ht_plot, {
            strokeColor: ctx.COLORS.H_CYAN,
            strokeWidth: 2,
            highlight: false
        });
    }
}

if (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length && showOriginalImpulse) {
    ctx.deltaStemsH = drawDeltaStems(
        ctx.boards.h,
        ctx.custom.impulseDeltaTerms,
        ctx.COLORS.H_CYAN
    );
}

ctx.plotHref = null;

// Vor Start: statisch h(-τ)
if (showStaticReflectedAtStart) {
    if (!(impulseType === 'custom' && ctx.custom.impulsePureDelta)) {
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

    if (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length) {
        ctx.deltaStemsShifted = drawDeltaStems(
            ctx.boards.h,
            ctx.custom.impulseDeltaTerms,
            ctx.COLORS.H_ORANGE,
            0
        );
    }
}

// Nach Start: bewegtes h(t-τ)
if (showMovingReflected) {
    if (!(impulseType === 'custom' && ctx.custom.impulsePureDelta)) {
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

    

    const onlyDeltaProduct =
    (inputType === 'custom' && ctx.custom.inputPureDelta) ||
    (impulseType === 'custom' && ctx.custom.impulsePureDelta);

const skipHeavyProductFill = isHeavyCustomScene();

if (ctx.productCurve) {
    ctx.boards.mult.removeObject(ctx.productCurve);
    ctx.productCurve = null;
}
if (ctx.productGuideCurve) {
    ctx.boards.mult.removeObject(ctx.productGuideCurve);
    ctx.productGuideCurve = null;
}

const pureDeltaInputForGuide =
    inputType === 'custom' && ctx.custom.inputPureDelta;

const pureDeltaImpulseForGuide =
    impulseType === 'custom' && ctx.custom.impulsePureDelta;

// Sichtbare Guide-Simulation für Delta × gemischt
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

// Multiplikation erst anzeigen, wenn Animation wirklich gestartet wurde
if (ctx.started && !onlyDeltaProduct && !skipHeavyProductFill) {
    const tauVals = [];
    const prodVals = [];

    const step = (inputType === 'custom' || impulseType === 'custom') ? 0.05 : 0.1;

    for (let tau = ctx.T_MIN; tau <= ctx.T_MAX; tau += step) {
        tauVals.push(tau);
        prodVals.push(get_xt_plot(tau) * get_ht_plot(t - tau));
    }

    const fillX = [...tauVals, tauVals[tauVals.length - 1], tauVals[0]];
    const fillY = [...prodVals, 0, 0];

    ctx.productCurve = ctx.boards.mult.create('curve', [fillX, fillY], {
        strokeColor: ctx.COLORS.PRODUCT_FILL,
        strokeWidth: 2,
        highlight: false,
        fillColor: ctx.COLORS.PRODUCT_FILL,
        fillOpacity: 0.35
    });
}

    if (
        ctx.started &&
        (
            (inputType === 'custom' && ctx.custom.inputDeltaTerms.length) ||
            (impulseType === 'custom' && ctx.custom.impulseDeltaTerms.length)
        )
    ) {
        ctx.deltaStemsMult = drawMultiplicationDeltaStems(t);
   }

    const pureDeltaInput =
    ctx.inputSignalType === 'custom' &&
    ctx.custom.inputPureDelta;

const pureDeltaImpulse =
    ctx.impulseResponseType === 'custom' &&
    ctx.custom.impulsePureDelta;

const pureDeltaOutput =
    pureDeltaInput &&
    pureDeltaImpulse;

// Daten für normales y(t) nur dann numerisch aufbauen,
// wenn wir NICHT in einem analytisch lösbaren Delta-Fall sind
if (!pureDeltaInput && !pureDeltaImpulse) {
    if (ctx.started) {
        if (!ctx.dataintX.length || ctx.dataintX[ctx.dataintX.length - 1] < t) {
            ctx.dataintX.push(t);
            ctx.dataintY.push(calculateConvolution(t));
        }
    } else {
        ctx.dataintX = [];
        ctx.dataintY = [];
    }
} else {
    ctx.dataintX = [];
    ctx.dataintY = [];
}

if (ctx.plotY) ctx.boards.y.removeObject(ctx.plotY);

// Fall 1: Delta ⊛ Delta => nur Stäbe
if (pureDeltaOutput) {
    ctx.plotY = null;

    if (ctx.started) {
        const outTerms = computeOutputDeltaTerms().filter(term => term.pos <= t);
        ctx.deltaStemsY = drawDeltaStems(
            ctx.boards.y,
            outTerms,
            ctx.COLORS.Y_BLUE
        );
    }
}

// Fall 2: x ist rein Delta, h ist gemischt/normal
else if (pureDeltaInput) {
    ctx.plotY = null;

    if (ctx.started) {
        const curve = computeShiftedCurveFromPureDeltaInput(t);

        if (curve.xs.length > 0) {
            ctx.plotY = ctx.boards.y.create('curve', [curve.xs, curve.ys], {
                strokeColor: ctx.COLORS.Y_BLUE,
                strokeWidth: 3,
                highlight: false
            });
        }

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

// Fall 3: h ist rein Delta, x ist gemischt/normal
else if (pureDeltaImpulse) {
    ctx.plotY = null;

    if (ctx.started) {
        const curve = computeShiftedCurveFromPureDeltaImpulse(t);

        if (curve.xs.length > 0) {
            ctx.plotY = ctx.boards.y.create('curve', [curve.xs, curve.ys], {
                strokeColor: ctx.COLORS.Y_BLUE,
                strokeWidth: 3,
                highlight: false
            });
        }

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

// Fall 4: normaler Fall
else if (ctx.started && ctx.dataintX.length > 0) {
    ctx.plotY = ctx.boards.y.create('curve', [ctx.dataintX, ctx.dataintY], {
        strokeColor: ctx.COLORS.Y_BLUE,
        strokeWidth: 3,
        highlight: false
    });
} else {
    ctx.plotY = null;
}

    if (ctx.needsAutoZoom) {
    applyAutoZoom(t);
    ctx.needsAutoZoom = false;
    }

    updateYBoardZoom();
    updateMultBoardZoom(t);

    drawVerticalLine(ctx.boards.x, t);
    drawVerticalLine(ctx.boards.h, t);

    if (ctx.started) {
    drawVerticalLine(ctx.boards.mult, t);
    drawVerticalLine(ctx.boards.y, t);
    }

    ctx.boards.x.unsuspendUpdate();
    ctx.boards.h.unsuspendUpdate();
    ctx.boards.mult.unsuspendUpdate();
    ctx.boards.y.unsuspendUpdate();

    updateResults();
}

function drawVerticalLine(board, t) {
    const lineColor =
        ctx.currentTheme === 'dark'
            ? 'rgba(255,255,255,0.35)'
            : 'rgba(0,0,0,0.35)';

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
    } else {
        board.verticalLine.point1.setPosition(JXG.COORDS_BY_USER, [t, -0.15]);
        board.verticalLine.point2.setPosition(JXG.COORDS_BY_USER, [t, 1.25]);
        board.verticalLine.setAttribute({ strokeColor: lineColor });
    }
}

function updateYAxisTickDensity(board, span) {
    try {
        const yAxis = board?.defaultAxes?.y;
        const ticks = yAxis?.defaultTicks;
        if (!ticks) return;

        let dist = 0.25;
        if (span > 12) dist = 2;
        else if (span > 6) dist = 1;
        else if (span > 3) dist = 0.5;

        ticks.setAttribute({
            ticksDistance: dist,
            minorTicks: 0,
            drawLabels: true
        });
    } catch (e) {
        // still safe if JSXGraph version differs
    }
}

function updateBoardTickDensity(board, xSpan, ySpan) {
    try {
        const xTicks = board?.defaultAxes?.x?.defaultTicks;
        const yTicks = board?.defaultAxes?.y?.defaultTicks;

        if (xTicks) {
            let xDist = 1;
            if (xSpan > 20) xDist = 4;
            else if (xSpan > 12) xDist = 2;
            xTicks.setAttribute({ ticksDistance: xDist, minorTicks: 0, drawLabels: true });
        }

        if (yTicks) {
            let yDist = 0.25;
            if (ySpan > 12) yDist = 2;
            else if (ySpan > 6) yDist = 1;
            else if (ySpan > 3) yDist = 0.5;
            yTicks.setAttribute({ ticksDistance: yDist, minorTicks: 0, drawLabels: true });
        }
    } catch (e) {
        // safe fallback
    }
}

function calculateDeltaTY() {
    if (!ctx.dataintX.length || !ctx.dataintY.length) return 0;

    const max_y = Math.max(...ctx.dataintY.map(v => Math.abs(v)));
    const eps = Math.max(0.001, 0.01 * max_y);

    let left = null;
    let right = null;

    for (let i = 0; i < ctx.dataintY.length; i++) {
        if (Math.abs(ctx.dataintY[i]) > eps) {
            left = ctx.dataintX[i];
            break;
        }
    }

    for (let i = ctx.dataintY.length - 1; i >= 0; i--) {
        if (Math.abs(ctx.dataintY[i]) > eps) {
            right = ctx.dataintX[i];
            break;
        }
    }

    if (left === null || right === null) return 0;
    return Math.max(0, right - left);
}

function getCurrentOutputSamplesForResults(tCurrent) {
    const pureDeltaInput =
        ctx.inputSignalType === 'custom' && ctx.custom.inputPureDelta;
    const pureDeltaImpulse =
        ctx.impulseResponseType === 'custom' && ctx.custom.impulsePureDelta;

    if (pureDeltaInput && pureDeltaImpulse) {
        const outTerms = computeOutputDeltaTerms();
        return {
            xs: outTerms.map(o => o.pos),
            ys: outTerms.map(o => o.amp),
            yAtT: 0
        };
    }

    if (pureDeltaInput) {
        const curve = computeShiftedCurveFromPureDeltaInput(tCurrent);
        const idx = curve.xs.length ? curve.xs.length - 1 : -1;
        return {
            xs: curve.xs,
            ys: curve.ys,
            yAtT: idx >= 0 ? curve.ys[idx] : 0
        };
    }

    if (pureDeltaImpulse) {
        const curve = computeShiftedCurveFromPureDeltaImpulse(tCurrent);
        const idx = curve.xs.length ? curve.xs.length - 1 : -1;
        return {
            xs: curve.xs,
            ys: curve.ys,
            yAtT: idx >= 0 ? curve.ys[idx] : 0
        };
    }

    return {
        xs: ctx.dataintX,
        ys: ctx.dataintY,
        yAtT: null
    };
}

function updateResults() {
    const t = ctx.boards.controlAnim.sldTime.Value();
    const out = getCurrentOutputSamplesForResults(t);

    let y_t = 0;

    if (out.yAtT !== null) {
        y_t = out.yAtT;
    } else if (out.xs.length > 0) {
        const idx = out.xs.findIndex(v => Math.abs(v - t) < 1e-9);
        if (idx >= 0) {
            y_t = out.ys[idx];
        } else {
            y_t = out.ys[out.ys.length - 1] || 0;
        }
    }

    const max_y = out.ys.length > 0 ? Math.max(...out.ys) : 0.0;

    let delta_ty = 0;
    if (out.xs.length > 0 && out.ys.length > 0) {
        const maxAbs = Math.max(...out.ys.map(v => Math.abs(v)));
        const eps = Math.max(0.001, 0.01 * maxAbs);

        let left = null;
        let right = null;

        for (let i = 0; i < out.ys.length; i++) {
            if (Math.abs(out.ys[i]) > eps) {
                left = out.xs[i];
                break;
            }
        }

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

    let max_t = 'n/a';
    if (out.ys.length > 0) {
        const maxIndex = out.ys.indexOf(max_y);
        max_t = out.xs[maxIndex] !== undefined ? out.xs[maxIndex].toFixed(2) : 'n/a';
    }

    const resultsHTML = `
        <p>t = ${t.toFixed(2)}</p>
        <p>y(t) = ${y_t.toFixed(3)}</p>
        <p>y_max = ${max_y.toFixed(3)}</p>
        <p>t_max = ${max_t}</p>
        <p>Δt_y = ${delta_ty.toFixed(2)}</p>
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

    if (!ctx.started) {
        ctx.started = true;
        ctx.dataintX = [];
        ctx.dataintY = [];
    }

    const currentT = ctx.boards.controlAnim.sldTime.Value();
    ctx.i = Math.round((currentT - ctx.T_MIN) / ctx.TIME_STEP);

    updateGraphs();
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

function getAdaptiveStartT() {
    if (ctx.inputSignalType !== 'custom' && ctx.impulseResponseType !== 'custom') {
        return ctx.START_T;
    }

    if (!ctx.zoomCache.valid) {
        rebuildCustomZoomCache(ctx.START_T);
    }

    const left = ctx.zoomCache.left;
    return Math.max(ctx.T_MIN, left - 1.0);
}

function restart(fullReset = true) {
    pauseAnimation();
    ctx.started = false;
    ctx.i = 0;
    ctx.needsAutoZoom = true;

    ctx.dataintX = [];
    ctx.dataintY = [];

    if (ctx.plotY) {
        try { ctx.boards.y.removeObject(ctx.plotY); } catch (e) {}
        ctx.plotY = null;
    }

    if (ctx.deltaStemsY.length) {
        ctx.deltaStemsY.forEach(o => { try { ctx.boards.y.removeObject(o); } catch (e) {} });
        ctx.deltaStemsY = [];
    }

    if (fullReset) {
        ctx.boards.controlAnim.sldTime.setValue(getAdaptiveStartT());
    }

    updateGraphs();
}

// ===== INIT BEIM LADEN =====
window.addEventListener("load", function () {
    initBoards();
    initControls();
    refreshSelectedTypes();
    applyTheme('dark');
    updateExerciseText(0);
    fixAxisColors();
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
