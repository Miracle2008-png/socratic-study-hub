export interface TopicContent {
  id: string;
  title: string;
  subject: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  estimatedReadTime: number; // minutes
  sections: Section[];
  keyFormulas?: KeyFormula[];
  practiceProblems?: Problem[];
  furtherReading?: string[];
}

export interface Section {
  heading: string;
  level: 1 | 2 | 3;
  content: string; // markdown
}

export interface KeyFormula {
  name: string;
  latex: string;
  description: string;
}

export interface Problem {
  question: string;
  hint: string;
  answer: string;
}

// ─────────────────────────────────────────────
//  MATHEMATICS
// ─────────────────────────────────────────────

export const TOPICS: Record<string, TopicContent> = {

  // ── Differential Calculus ──────────────────
  calculus: {
    id: 'calculus',
    title: 'Differential Calculus',
    subject: 'mathematics',
    difficulty: 'Intermediate',
    estimatedReadTime: 45,
    sections: [
      {
        heading: "Differential Calculus: From Limits to the Derivative",
        level: 1,
        content: `
Differential calculus is one of the two great branches of calculus—alongside integral calculus—and forms the mathematical backbone of physics, engineering, economics, and virtually every quantitative science. Its central concept is the **derivative**: a precise, rigorous way to measure how a quantity changes *instantaneously* at any given moment.

The ideas developed here by Newton and Leibniz in the seventeenth century represented one of humanity's greatest intellectual achievements, unifying previously disconnected concepts in geometry, physics, and algebra under a single elegant framework.
`
      },
      {
        heading: "1. The Concept of a Limit",
        level: 2,
        content: `
Before we can define the derivative, we need the machinery of limits. A **limit** describes the value a function *approaches* — not necessarily reaches — as the input approaches some value.

$$\\lim_{x \\to c} f(x) = L$$

This notation is read: *"the limit of f(x) as x approaches c equals L."* The function need not be defined at $x=c$ itself; what matters is the behavior of $f(x)$ for values of $x$ near $c$.

### 1.1 The Epsilon-Delta Definition

The rigorous definition, due to Weierstrass, strips away all intuition and replaces it with a logically airtight statement:

$$\\lim_{x \\to c} f(x) = L \\iff \\forall\\, \\varepsilon > 0,\\; \\exists\\, \\delta > 0 \\text{ s.t. } 0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon$$

**Unpacking this:** For any margin of error $\\varepsilon$ we choose around $L$ (no matter how tiny), we can always find a corresponding margin $\\delta$ around $c$ such that whenever $x$ is within $\\delta$ of $c$ (but not equal to $c$), $f(x)$ is within $\\varepsilon$ of $L$.

**Example:** Prove $\\lim_{x \\to 2} (3x - 1) = 5$.

Given $\\varepsilon > 0$, we need $|(3x-1) - 5| < \\varepsilon$, i.e., $|3x - 6| = 3|x - 2| < \\varepsilon$. So choosing $\\delta = \\varepsilon/3$ works. ∎

### 1.2 One-Sided Limits

Sometimes a function approaches different values from the left and right:

- **Left-hand limit:** $\\lim_{x \\to c^-} f(x) = L^-$
- **Right-hand limit:** $\\lim_{x \\to c^+} f(x) = L^+$

The two-sided limit $\\lim_{x \\to c} f(x)$ exists if and only if $L^- = L^+$.

**Classic example:** $f(x) = \\frac{|x|}{x}$. As $x \\to 0^+$, $f(x) = 1$. As $x \\to 0^-$, $f(x) = -1$. The limit at $x=0$ does **not** exist.

### 1.3 Key Limit Laws

For functions with existing limits at $c$:

| Property | Statement |
|---|---|
| Sum | $\\lim(f+g) = \\lim f + \\lim g$ |
| Product | $\\lim(f \\cdot g) = (\\lim f)(\\lim g)$ |
| Quotient | $\\lim(f/g) = \\lim f / \\lim g$, provided $\\lim g \\neq 0$ |
| Composition | $\\lim_{x\\to c} f(g(x)) = f(\\lim_{x\\to c} g(x))$ if $f$ is continuous at $\\lim g$ |

### 1.4 L'Hôpital's Rule

For indeterminate forms $0/0$ or $\\infty/\\infty$:

$$\\lim_{x\\to c} \\frac{f(x)}{g(x)} = \\lim_{x\\to c} \\frac{f'(x)}{g'(x)}$$

**Example:** $\\lim_{x\\to 0} \\frac{\\sin x}{x} = \\lim_{x\\to 0} \\frac{\\cos x}{1} = 1$
`
      },
      {
        heading: "2. Continuity",
        level: 2,
        content: `
A function $f$ is **continuous at** $x = c$ if three conditions hold simultaneously:

1. $f(c)$ is defined
2. $\\lim_{x\\to c} f(x)$ exists  
3. $\\lim_{x\\to c} f(x) = f(c)$

Geometrically, continuity means you can draw the graph of $f$ through the point $(c, f(c))$ without lifting your pencil — no holes, jumps, or vertical asymptotes.

### Types of Discontinuity

| Type | Description | Example |
|---|---|---|
| Removable | Limit exists but ≠ f(c) | $f(x) = \\sin(x)/x$ at $x=0$ |
| Jump | One-sided limits differ | $f(x) = \\text{sign}(x)$ at $x=0$ |
| Infinite | $f(x) \\to \\pm\\infty$ | $f(x) = 1/x$ at $x=0$ |
| Oscillatory | Function oscillates without settling | $f(x) = \\sin(1/x)$ at $x=0$ |

### The Intermediate Value Theorem (IVT)

If $f$ is continuous on the closed interval $[a,b]$ and $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c \\in (a,b)$ such that $f(c) = k$.

**Application:** Proving roots exist. If $f(0) = -1$ and $f(1) = 3$, then by IVT, since $f$ is continuous and $0 \\in (-1, 3)$, there exists $c \\in (0,1)$ with $f(c) = 0$. The function has a root.
`
      },
      {
        heading: "3. The Derivative: Definition and Geometric Meaning",
        level: 2,
        content: `
The **derivative** of $f$ at $x$ is defined as the limit of the difference quotient:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$

If this limit exists, we say $f$ is **differentiable** at $x$.

### 3.1 Geometric Interpretation

The difference quotient $\\frac{f(x+h)-f(x)}{h}$ is the slope of the **secant line** through $(x, f(x))$ and $(x+h, f(x+h))$.

As $h \\to 0$, the secant line rotates, and in the limit it becomes the **tangent line** at $(x, f(x))$. The derivative $f'(x)$ is therefore **the slope of the tangent line** at $x$.

The equation of the tangent line at $(a, f(a))$ is:
$$y - f(a) = f'(a)(x - a)$$

### 3.2 Physical Interpretation: Instantaneous Rate of Change

If $s(t)$ is position as a function of time, then:
- $\\frac{s(t+h)-s(t)}{h}$ = **average velocity** over $[t, t+h]$
- $s'(t) = v(t)$ = **instantaneous velocity** at time $t$
- $v'(t) = s''(t) = a(t)$ = **acceleration**

This is Newton's great insight: the derivative gives us the instantaneous rate of change, not just an average.

### 3.3 Differentiability vs. Continuity

> **Theorem:** If $f$ is differentiable at $x=c$, then $f$ is continuous at $x=c$.

The converse is **false**. $f(x) = |x|$ is continuous at $x=0$ but has a corner there — the left and right derivatives disagree:

$$\\lim_{h\\to 0^-}\\frac{|h|}{h} = -1 \\neq 1 = \\lim_{h\\to 0^+}\\frac{|h|}{h}$$

Functions can fail to be differentiable at corners, cusps, vertical tangents, or discontinuities.
`
      },
      {
        heading: "4. Differentiation Rules",
        level: 2,
        content: `
Computing limits from scratch every time would be tedious. Instead, we use a system of rules proved from the definition.

### 4.1 The Standard Rules

| Rule | Formula |
|---|---|
| Constant | $\\frac{d}{dx}[c] = 0$ |
| Power | $\\frac{d}{dx}[x^n] = nx^{n-1}$ (for any $n$) |
| Sum/Difference | $\\frac{d}{dx}[f \\pm g] = f' \\pm g'$ |
| Constant Multiple | $\\frac{d}{dx}[cf] = cf'$ |
| Product Rule | $\\frac{d}{dx}[fg] = f'g + fg'$ |
| Quotient Rule | $\\frac{d}{dx}\\left[\\frac{f}{g}\\right] = \\frac{f'g - fg'}{g^2}$ |
| Chain Rule | $\\frac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$ |

### 4.2 Derivatives of Elementary Functions

| $f(x)$ | $f'(x)$ |
|---|---|
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\\ln x$ | $1/x$ |
| $\\arcsin x$ | $1/\\sqrt{1-x^2}$ |
| $\\arctan x$ | $1/(1+x^2)$ |

### 4.3 The Chain Rule in Depth

The chain rule is the most powerful and frequently used rule. For a composite function $h(x) = f(g(x))$:

$$h'(x) = f'(g(x)) \\cdot g'(x)$$

**Multi-layer example:** $y = \\sin(e^{x^2})$

Let $u = x^2$, $v = e^u$, $y = \\sin(v)$:
$$\\frac{dy}{dx} = \\cos(v) \\cdot e^u \\cdot 2x = \\cos(e^{x^2}) \\cdot e^{x^2} \\cdot 2x$$

### 4.4 Implicit Differentiation

When $y$ is defined implicitly by an equation in $x$ and $y$, differentiate both sides with respect to $x$, treating $y$ as a function of $x$ (using the chain rule), then solve for $dy/dx$.

**Example:** Find $dy/dx$ for the unit circle $x^2 + y^2 = 1$.

Differentiate: $2x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}$

**Example:** Folium of Descartes: $x^3 + y^3 = 3xy$.

$$3x^2 + 3y^2\\frac{dy}{dx} = 3y + 3x\\frac{dy}{dx}$$
$$\\frac{dy}{dx}(3y^2 - 3x) = 3y - 3x^2 \\implies \\frac{dy}{dx} = \\frac{y - x^2}{y^2 - x}$$
`
      },
      {
        heading: "5. Higher-Order Derivatives",
        level: 2,
        content: `
We can differentiate a derivative to get the **second derivative** $f''(x)$, and so on:

$$f''(x) = \\frac{d^2f}{dx^2} = \\frac{d}{dx}[f'(x)]$$

**Physical meaning:**
- $f'(x)$ = velocity (rate of change of position)
- $f''(x)$ = acceleration (rate of change of velocity)
- $f'''(x)$ = jerk (rate of change of acceleration)

**Concavity:** The second derivative tells us about the shape of the graph:
- $f''(x) > 0$: graph is **concave up** (cup shape ∪) — $f'$ is increasing
- $f''(x) < 0$: graph is **concave down** (cap shape ∩) — $f'$ is decreasing

An **inflection point** is where the concavity changes (where $f''(x) = 0$ and changes sign).
`
      },
      {
        heading: "6. Applications of the Derivative",
        level: 2,
        content: `
### 6.1 Finding Extrema: Critical Points

A **critical point** is where $f'(x) = 0$ or $f'(x)$ does not exist. Local extrema can only occur at critical points.

**First Derivative Test:** At a critical point $c$:
- If $f'$ changes from $+$ to $-$: local maximum
- If $f'$ changes from $-$ to $+$: local minimum
- If $f'$ does not change sign: neither (saddle point)

**Second Derivative Test:** If $f'(c) = 0$:
- $f''(c) > 0$: local minimum (concave up)
- $f''(c) < 0$: local maximum (concave down)
- $f''(c) = 0$: inconclusive, use first derivative test

### 6.2 Mean Value Theorem (MVT)

> If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \\in (a,b)$ such that:
$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

**Geometric meaning:** The instantaneous rate of change somewhere equals the average rate of change over the interval. A car that averages 60 mph must be traveling at exactly 60 mph at some instant.

**Rolle's Theorem** is the special case where $f(a) = f(b)$: there must be a critical point in $(a,b)$.

### 6.3 Optimization Problems

**Procedure:**
1. Define the objective function and constraint
2. Express the objective in one variable using the constraint
3. Find critical points; evaluate at endpoints if on a closed interval
4. Verify it's a maximum or minimum using the second derivative test

**Classic example:** A farmer has 400m of fence and wants to enclose the largest rectangular area possible. If the sides are $x$ and $y$, then $2x + 2y = 400$, so $y = 200 - x$. Area $A = x(200-x) = 200x - x^2$. Setting $A' = 200 - 2x = 0$ gives $x = 100$. The optimal rectangle is a $100 \\times 100$ square.

### 6.4 Linear Approximation and Differentials

Near $x = a$, a differentiable function can be approximated by its tangent line:

$$f(x) \\approx f(a) + f'(a)(x-a)$$

This is the **linear approximation** or **tangent line approximation**. It is the foundation for Newton's method and numerical analysis.

**Example:** Approximate $\\sqrt{4.01}$. Let $f(x) = \\sqrt{x}$, $a = 4$. Then $f'(x) = 1/(2\\sqrt{x})$, $f'(4) = 1/4$.

$$\\sqrt{4.01} \\approx \\sqrt{4} + \\frac{1}{4}(0.01) = 2 + 0.0025 = 2.0025$$

(Exact value: $2.002498...$)

### 6.5 Newton's Method

An iterative algorithm for finding roots of $f(x) = 0$:

$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

Starting from an initial guess $x_0$, each step replaces the curve with its tangent line and finds where that tangent line crosses the $x$-axis. The method converges quadratically (the number of correct decimal places roughly doubles each iteration) when it converges.

### 6.6 Related Rates

When two quantities are related and both change with time, we can differentiate the relationship with respect to $t$ to relate their rates of change.

**Example:** A spherical balloon is inflated at $100\\,\\text{cm}^3/\\text{s}$. How fast is the radius increasing when $r = 5\\,\\text{cm}$?

$V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$

$100 = 4\\pi(25)\\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\frac{100}{100\\pi} = \\frac{1}{\\pi} \\approx 0.318\\,\\text{cm/s}$
`
      },
      {
        heading: "7. Taylor Polynomials and Series",
        level: 2,
        content: `
The idea of linear approximation generalizes. If we use not just $f$ and $f'$ but also $f''$, $f'''$, etc., we get a better and better polynomial approximation.

The **$n$-th degree Taylor polynomial** of $f$ at $a$ is:

$$P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$$

$$= f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n$$

Taking $n \\to \\infty$ gives the **Taylor series**. For $a = 0$, it's called the **Maclaurin series**.

### Key Maclaurin Series

$$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$$

$$\\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots$$

$$\\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots$$

$$\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots, \\quad |x| < 1$$

### Taylor's Remainder Theorem

The error in using $P_n$ to approximate $f(x)$ is:

$$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

for some $c$ between $a$ and $x$. This gives us rigorous error bounds on polynomial approximations.
`
      },
      {
        heading: "8. Parametric and Polar Differentiation",
        level: 2,
        content: `
### Parametric Curves

When a curve is given by $x = f(t)$, $y = g(t)$, the derivative is:

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)}$$

and the second derivative is:

$$\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left[\\frac{dy}{dx}\\right] \\cdot \\frac{1}{dx/dt}$$

**Example:** A cycloid $x = t - \\sin t$, $y = 1 - \\cos t$.

$\\frac{dy}{dx} = \\frac{\\sin t}{1 - \\cos t} = \\cot(t/2)$

At $t = \\pi/2$: slope $= \\cot(\\pi/4) = 1$.

### Polar Coordinates

For $r = r(\\theta)$, using $x = r\\cos\\theta$, $y = r\\sin\\theta$:

$$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$$

**Example:** For the cardioid $r = 1 + \\cos\\theta$, find the slope at $\\theta = \\pi/2$.

$r = 1 + \\cos(\\pi/2) = 1$, $r' = -\\sin(\\pi/2) = -1$.

$\\frac{dy}{dx} = \\frac{(-1)(1) + (1)(0)}{(-1)(0) - (1)(1)} = \\frac{-1}{-1} = 1$
`
      }
    ],
    keyFormulas: [
      { name: 'Derivative Definition', latex: "f'(x) = \\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}", description: "Limit definition of the derivative" },
      { name: 'Power Rule', latex: "\\frac{d}{dx}[x^n] = nx^{n-1}", description: "For any real n" },
      { name: 'Chain Rule', latex: "\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)", description: "Derivative of composite function" },
      { name: "L'Hôpital's Rule", latex: "\\lim_{x\\to c}\\frac{f}{g} = \\lim_{x\\to c}\\frac{f'}{g'}", description: "For 0/0 or ∞/∞ forms" },
      { name: 'Taylor Series', latex: "f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n", description: "Infinite polynomial expansion about a" },
      { name: 'Mean Value Theorem', latex: "f'(c) = \\frac{f(b)-f(a)}{b-a}", description: "For some c in (a,b)" },
    ],
    practiceProblems: [
      {
        question: "Differentiate $f(x) = \\sin(x^2 e^x)$.",
        hint: "Apply the chain rule. The outer function is sin, the inner is $x^2 e^x$. For the inner, use the product rule.",
        answer: "$f'(x) = \\cos(x^2 e^x) \\cdot (2xe^x + x^2 e^x) = \\cos(x^2 e^x) \\cdot xe^x(2 + x)$"
      },
      {
        question: "A particle moves along the curve $x^2 + y^2 = 25$. When $x=3$ and $y=4$, $dx/dt = 6$. Find $dy/dt$.",
        hint: "Differentiate implicitly with respect to $t$.",
        answer: "$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt} = -\\frac{3}{4}(6) = -\\frac{9}{2}$"
      },
      {
        question: "Find all critical points and classify them for $f(x) = x^3 - 3x + 2$.",
        hint: "Set $f'(x) = 0$ and use the second derivative test.",
        answer: "$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$. $f''(x) = 6x$. $f''(1) = 6 > 0$: local min at $(1, 0)$. $f''(-1) = -6 < 0$: local max at $(-1, 4)$."
      },
      {
        question: "Use Newton's method starting at $x_0 = 1$ to find the root of $f(x) = x^3 - 2$.",
        hint: "$x_{n+1} = x_n - f(x_n)/f'(x_n)$. Compute one iteration.",
        answer: "$f'(x) = 3x^2$. $x_1 = 1 - (1-2)/3 = 1 + 1/3 = 4/3 \\approx 1.333$. (True root: $\\sqrt[3]{2} \\approx 1.2599$)"
      }
    ],
    furtherReading: [
      'Spivak, M. - Calculus (rigorous treatment)',
      'Stewart, J. - Calculus: Early Transcendentals (comprehensive)',
      'Apostol, T. - Calculus, Vol. 1 (advanced)',
    ]
  },

  // ── Integral Calculus ──────────────────────
  integral_calc: {
    id: 'integral_calc',
    title: 'Integral Calculus',
    subject: 'mathematics',
    difficulty: 'Intermediate',
    estimatedReadTime: 50,
    sections: [
      {
        heading: "Integral Calculus: Area, Accumulation, and the Fundamental Theorem",
        level: 1,
        content: `
Integral calculus answers a deceptively simple question: *how do we find the area under a curve?* But this question, when pursued rigorously, opens into one of the deepest unifications in all of mathematics — the **Fundamental Theorem of Calculus**, which reveals that integration and differentiation are inverse operations.

Beyond area, integration provides the mathematics of **accumulation**: total distance traveled, total mass, total charge, total probability. It is the language of physics, probability theory, and engineering.
`
      },
      {
        heading: "1. The Definite Integral: Riemann Sums",
        level: 2,
        content: `
### 1.1 Partitions and Riemann Sums

To find the exact area under $f(x)$ from $a$ to $b$, we approximate with rectangles.

A **partition** $P = \\{a = x_0 < x_1 < \\cdots < x_n = b\\}$ divides $[a,b]$ into $n$ subintervals. Choose a sample point $x_i^* \\in [x_{i-1}, x_i]$ in each subinterval. The **Riemann sum** is:

$$S_n = \\sum_{i=1}^n f(x_i^*) \\Delta x_i, \\quad \\Delta x_i = x_i - x_{i-1}$$

Common choices for $x_i^*$:
- **Left Riemann sum:** $x_i^* = x_{i-1}$
- **Right Riemann sum:** $x_i^* = x_i$
- **Midpoint rule:** $x_i^* = (x_{i-1}+x_i)/2$

### 1.2 The Definite Integral

$$\\int_a^b f(x)\\,dx = \\lim_{\\|P\\|\\to 0} \\sum_{i=1}^n f(x_i^*) \\Delta x_i$$

where $\\|P\\| = \\max \\Delta x_i$ is the mesh of the partition. When this limit exists (regardless of how we choose the sample points), $f$ is called **Riemann integrable** on $[a,b]$.

**Geometric meaning:** $\\int_a^b f(x)\\,dx$ = net signed area between the curve and the $x$-axis. Regions above the axis are positive, regions below are negative.

### 1.3 Properties of the Definite Integral

| Property | Formula |
|---|---|
| Reversal | $\\int_b^a f = -\\int_a^b f$ |
| Zero interval | $\\int_a^a f = 0$ |
| Linearity | $\\int_a^b [cf + g] = c\\int_a^b f + \\int_a^b g$ |
| Additivity | $\\int_a^b f = \\int_a^c f + \\int_c^b f$ |
| Comparison | $f \\leq g \\implies \\int_a^b f \\leq \\int_a^b g$ |
`
      },
      {
        heading: "2. The Fundamental Theorem of Calculus",
        level: 2,
        content: `
The FTC consists of two parts that together form the cornerstone of all of calculus.

### Part 1 (Antiderivative → Integral)

If $f$ is continuous on $[a,b]$ and $F(x) = \\int_a^x f(t)\\,dt$, then:

$$F'(x) = f(x)$$

The derivative of the area function is the original function. This means differentiation and integration are inverse processes.

**Leibniz Rule (generalization):**

$$\\frac{d}{dx}\\int_{g(x)}^{h(x)} f(t)\\,dt = f(h(x))h'(x) - f(g(x))g'(x)$$

### Part 2 (Evaluation Theorem)

If $F$ is any antiderivative of $f$ on $[a,b]$ (i.e., $F' = f$), then:

$$\\int_a^b f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_a^b$$

This is the tool we actually use to compute integrals — find an antiderivative and evaluate at the endpoints.

**Example:** $\\int_0^{\\pi} \\sin x\\,dx = [-\\cos x]_0^\\pi = (-\\cos\\pi) - (-\\cos 0) = 1 + 1 = 2$
`
      },
      {
        heading: "3. Techniques of Integration",
        level: 2,
        content: `
Unlike differentiation, integration has no single algorithm. A variety of techniques are needed.

### 3.1 Basic Antiderivative Rules

| $f(x)$ | $\\int f(x)\\,dx$ |
|---|---|
| $x^n$ | $\\frac{x^{n+1}}{n+1} + C$ ($n \\neq -1$) |
| $1/x$ | $\\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\sec^2 x$ | $\\tan x + C$ |
| $1/\\sqrt{1-x^2}$ | $\\arcsin x + C$ |
| $1/(1+x^2)$ | $\\arctan x + C$ |

### 3.2 Substitution (u-substitution)

The reverse chain rule. If $u = g(x)$, then $du = g'(x)\\,dx$:

$$\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$$

**Example:** $\\int x e^{x^2}\\,dx$. Let $u = x^2$, $du = 2x\\,dx$.

$$= \\frac{1}{2}\\int e^u\\,du = \\frac{1}{2}e^{x^2} + C$$

**For definite integrals, change the limits:** If $u = g(x)$, when $x=a$, $u = g(a)$; when $x=b$, $u = g(b)$.

### 3.3 Integration by Parts

The reverse product rule:

$$\\int u\\,dv = uv - \\int v\\,du$$

**LIATE rule for choosing $u$:** Logarithms, Inverse trig, Algebraic (polynomials), Trig, Exponentials — earlier in the list = choose as $u$.

**Example:** $\\int x e^x\\,dx$. Let $u = x$ ($du = dx$), $dv = e^x dx$ ($v = e^x$).

$$= xe^x - \\int e^x\\,dx = xe^x - e^x + C = e^x(x-1) + C$$

**Reduction formula example:** $\\int x^n e^x\\,dx = x^n e^x - n\\int x^{n-1}e^x\\,dx$

### 3.4 Trigonometric Integrals

**Powers of sine and cosine:**

For $\\int \\sin^m x \\cos^n x\\,dx$:
- If $m$ or $n$ is odd: save one factor, use the identity $\\sin^2+\\cos^2=1$, and substitute
- If both are even: use half-angle identities $\\sin^2 x = (1-\\cos 2x)/2$, $\\cos^2 x = (1+\\cos 2x)/2$

**Example:** $\\int \\sin^3 x\\,dx = \\int \\sin^2 x \\sin x\\,dx = \\int(1-\\cos^2 x)\\sin x\\,dx$

Let $u = \\cos x$: $= -\\int(1-u^2)\\,du = -u + u^3/3 + C = -\\cos x + \\frac{\\cos^3 x}{3} + C$

### 3.5 Trigonometric Substitution

For integrals involving $\\sqrt{a^2-x^2}$, $\\sqrt{a^2+x^2}$, $\\sqrt{x^2-a^2}$:

| Expression | Substitution | Identity used |
|---|---|---|
| $\\sqrt{a^2-x^2}$ | $x = a\\sin\\theta$ | $1-\\sin^2\\theta = \\cos^2\\theta$ |
| $\\sqrt{a^2+x^2}$ | $x = a\\tan\\theta$ | $1+\\tan^2\\theta = \\sec^2\\theta$ |
| $\\sqrt{x^2-a^2}$ | $x = a\\sec\\theta$ | $\\sec^2\\theta - 1 = \\tan^2\\theta$ |

**Example:** $\\int \\frac{dx}{\\sqrt{9-x^2}}$. Let $x = 3\\sin\\theta$, $dx = 3\\cos\\theta\\,d\\theta$.

$$= \\int \\frac{3\\cos\\theta\\,d\\theta}{3\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\frac{x}{3} + C$$

### 3.6 Partial Fractions

For rational functions $P(x)/Q(x)$ where $\\deg P < \\deg Q$.

Factor the denominator and decompose:

$$\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$$

Multiply through: $1 = A(x+2) + B(x-1)$.

Setting $x=1$: $1 = 3A \\implies A = 1/3$.
Setting $x=-2$: $1 = -3B \\implies B = -1/3$.

$$\\int \\frac{dx}{(x-1)(x+2)} = \\frac{1}{3}\\ln|x-1| - \\frac{1}{3}\\ln|x+2| + C = \\frac{1}{3}\\ln\\left|\\frac{x-1}{x+2}\\right| + C$$
`
      },
      {
        heading: "4. Improper Integrals",
        level: 2,
        content: `
Integrals with infinite limits or unbounded integrands are called **improper integrals** and are defined via limits.

### Type I: Infinite Limits

$$\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty} \\int_a^t f(x)\\,dx$$

**Example:** $\\int_1^\\infty \\frac{1}{x^2}\\,dx = \\lim_{t\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^t = \\lim_{t\\to\\infty}\\left(-\\frac{1}{t}+1\\right) = 1$ ✓ **Converges**

**The $p$-integral:** $\\int_1^\\infty \\frac{1}{x^p}\\,dx$ converges iff $p > 1$.

### Type II: Discontinuous Integrands

If $f$ has a vertical asymptote at $b$:

$$\\int_a^b f(x)\\,dx = \\lim_{t\\to b^-} \\int_a^t f(x)\\,dx$$

**Example:** $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx = \\lim_{t\\to 0^+}\\left[2\\sqrt{x}\\right]_t^1 = 2 - 0 = 2$ ✓ **Converges**

### Comparison Tests

If $0 \\leq f(x) \\leq g(x)$ for $x \\geq a$:
- If $\\int_a^\\infty g$ converges → $\\int_a^\\infty f$ converges
- If $\\int_a^\\infty f$ diverges → $\\int_a^\\infty g$ diverges
`
      },
      {
        heading: "5. Applications of Integration",
        level: 2,
        content: `
### 5.1 Area Between Curves

$$A = \\int_a^b [f(x) - g(x)]\\,dx$$

where $f(x) \\geq g(x)$ on $[a,b]$. For curves that cross, split the integral at intersection points.

### 5.2 Volumes of Revolution

**Disk Method** (rotating about $x$-axis):

$$V = \\pi\\int_a^b [f(x)]^2\\,dx$$

**Washer Method** (hole in the middle):

$$V = \\pi\\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)\\,dx$$

**Shell Method** (rotating about $y$-axis):

$$V = 2\\pi\\int_a^b x f(x)\\,dx$$

### 5.3 Arc Length

$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$$

For parametric curves: $L = \\int_{t_1}^{t_2}\\sqrt{(x')^2 + (y')^2}\\,dt$

### 5.4 Surface Area of Revolution

$$S = 2\\pi\\int_a^b f(x)\\sqrt{1 + [f'(x)]^2}\\,dx$$

### 5.5 Work, Mass, and Center of Mass

**Work:** $W = \\int_a^b F(x)\\,dx$

**Mass of a rod:** $m = \\int_a^b \\rho(x)\\,dx$ where $\\rho(x)$ is linear density

**Center of mass:** $\\bar{x} = \\frac{1}{m}\\int_a^b x\\rho(x)\\,dx$

### 5.6 Average Value of a Function

$$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$

By the **Mean Value Theorem for Integrals**, there exists $c \\in [a,b]$ where $f(c) = f_{\\text{avg}}$.
`
      },
      {
        heading: "6. Numerical Integration",
        level: 2,
        content: `
When antiderivatives are impossible to find analytically, numerical methods estimate the integral.

### Trapezoidal Rule

Approximates the curve with trapezoids:

$$\\int_a^b f(x)\\,dx \\approx \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$$

Error: $|E_T| \\leq \\frac{M(b-a)^3}{12n^2}$ where $M = \\max|f''|$.

### Simpson's Rule

Approximates with parabolic arcs (requires even $n$):

$$\\int_a^b f(x)\\,dx \\approx \\frac{\\Delta x}{3}[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + 4f(x_{n-1}) + f(x_n)]$$

Error: $|E_S| \\leq \\frac{M(b-a)^5}{180n^4}$ where $M = \\max|f^{(4)}|$.

Simpson's rule is exact for polynomials of degree ≤ 3 and much more accurate than the Trapezoidal rule for smooth functions.\
`
      }
    ],
    keyFormulas: [
      { name: 'Fundamental Theorem', latex: '\\int_a^b f(x)\\,dx = F(b) - F(a)', description: "Core evaluation theorem" },
      { name: 'Integration by Parts', latex: '\\int u\\,dv = uv - \\int v\\,du', description: "Reverse product rule" },
      { name: 'Arc Length', latex: "L = \\int_a^b \\sqrt{1+[f'(x)]^2}\\,dx", description: "Length of a curve" },
      { name: 'Volume (Disk)', latex: 'V = \\pi\\int_a^b [f(x)]^2\\,dx', description: "Volume of solid of revolution" },
    ],
    practiceProblems: [
      {
        question: "Evaluate $\\int_0^1 x e^{x^2}\\,dx$.",
        hint: "Use u-substitution with $u = x^2$.",
        answer: 'Let $u=x^2$, $du=2x\\,dx$. $\\frac{1}{2}\\int_0^1 e^u\\,du = \\frac{1}{2}[e^u]_0^1 = \\frac{e-1}{2}$'
      },
      {
        question: "Find the area enclosed by $y = x^2$ and $y = 2x$.",
        hint: "Find intersection points first, then integrate the difference.",
        answer: '$x^2 = 2x \\implies x = 0$ or $x=2$. $A = \\int_0^2(2x-x^2)\\,dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3$'
      },
      {
        question: "Determine whether $\\int_1^\\infty \\frac{\\ln x}{x^2}\\,dx$ converges.",
        hint: "Use integration by parts with $u = \\ln x$, $dv = x^{-2}\\,dx$.",
        answer: '$IBP: [-\\ln x/x]_1^\\infty + \\int_1^\\infty x^{-2}\\,dx = (0-0) + [-1/x]_1^\\infty = 0 + 1 = 1$. Converges to 1.'
      }
    ]
  },

  // ── Linear Algebra ──────────────────────────
  algebra: {
    id: 'algebra',
    title: 'Linear Algebra',
    subject: 'mathematics',
    difficulty: 'Intermediate',
    estimatedReadTime: 55,
    sections: [
      {
        heading: "Linear Algebra: Vectors, Matrices, and Linear Transformations",
        level: 1,
        content: `
Linear algebra is the study of **vector spaces** and **linear maps** between them. It is the mathematical language of data science, machine learning, quantum mechanics, computer graphics, and structural engineering.

The key insight is that many complex systems can be understood through linearity — the principle that the whole behaves as the sum of its parts. When this holds, the full power of matrix theory, eigenvalue decompositions, and geometric intuition becomes available.
`
      },
      {
        heading: "1. Vectors and Vector Spaces",
        level: 2,
        content: `
### 1.1 Vectors in $\\mathbb{R}^n$

A vector $\\mathbf{v} \\in \\mathbb{R}^n$ is an ordered $n$-tuple of real numbers:

$$\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{pmatrix}$$

**Vector operations:**
- **Addition:** $(\\mathbf{u} + \\mathbf{v})_i = u_i + v_i$
- **Scalar multiplication:** $(c\\mathbf{v})_i = cv_i$
- **Dot product:** $\\mathbf{u} \\cdot \\mathbf{v} = \\sum_i u_i v_i = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta$
- **Cross product** (in $\\mathbb{R}^3$): $\\mathbf{u} \\times \\mathbf{v}$ is perpendicular to both, with $|\\mathbf{u}\\times\\mathbf{v}| = |\\mathbf{u}||\\mathbf{v}|\\sin\\theta$

### 1.2 Vector Spaces (Abstract)

A **vector space** over $\\mathbb{R}$ is a set $V$ with operations of addition and scalar multiplication satisfying 8 axioms: commutativity, associativity, identity element ($\\mathbf{0}$), inverses ($-\\mathbf{v}$), distributivity, etc.

**Examples:** $\\mathbb{R}^n$, space of $m\\times n$ matrices, space of polynomials of degree $\\leq n$, space of continuous functions on $[a,b]$.

### 1.3 Subspaces, Span, Linear Independence

A **subspace** of $V$ is a non-empty subset closed under addition and scalar multiplication.

The **span** of vectors $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ is the set of all linear combinations:

$$\\text{span}\\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k : c_i \\in \\mathbb{R}\\}$$

Vectors $\\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_k\\}$ are **linearly independent** if the only solution to $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is $c_1 = \\cdots = c_k = 0$.

A **basis** of $V$ is a linearly independent spanning set. The **dimension** of $V$ is the number of vectors in any basis — a well-defined invariant of the space.
`
      },
      {
        heading: "2. Matrices and Systems of Linear Equations",
        level: 2,
        content: `
### 2.1 Matrix Basics

An $m \\times n$ matrix $A$ has $m$ rows and $n$ columns:

$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$

**Matrix multiplication:** $(AB)_{ij} = \\sum_k A_{ik}B_{kj}$ (row of $A$ dotted with column of $B$).

Important: Matrix multiplication is **not commutative** in general ($AB \\neq BA$).

### 2.2 Row Reduction and Gaussian Elimination

To solve $A\\mathbf{x} = \\mathbf{b}$, augment to $[A|\\mathbf{b}]$ and apply row operations:
1. Swap rows: $R_i \\leftrightarrow R_j$
2. Scale: $R_i \\to cR_i$
3. Replace: $R_i \\to R_i + cR_j$

The goal is **row echelon form** (REF), then **reduced row echelon form** (RREF).

**Pivot positions** determine the structure of solutions:
- If there's a pivot in every row of $A$: system is consistent for any $\\mathbf{b}$
- If there's a pivot in every column: unique solution
- Free variables (columns without pivots) → infinite solutions

### 2.3 Rank and the Fundamental Theorem

The **rank** of $A$ = number of pivot positions = dimension of the column space = dimension of the row space.

**Rank-Nullity Theorem:**
$$\\text{rank}(A) + \\text{nullity}(A) = n \\quad (\\text{number of columns})$$

where $\\text{nullity}(A)$ = dimension of the null space $\\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}$.

### 2.4 The Four Fundamental Subspaces

For $m\\times n$ matrix $A$:

| Subspace | Definition | Dimension |
|---|---|---|
| Column space $C(A)$ | Span of columns of $A$ | $r = \\text{rank}(A)$ |
| Null space $N(A)$ | $\\{\\mathbf{x}: A\\mathbf{x}=\\mathbf{0}\\}$ | $n - r$ |
| Row space $C(A^T)$ | Span of rows of $A$ | $r$ |
| Left null space $N(A^T)$ | $\\{\\mathbf{y}: A^T\\mathbf{y}=\\mathbf{0}\\}$ | $m - r$ |
`
      },
      {
        heading: "3. Determinants",
        level: 2,
        content: `
The **determinant** $\\det(A)$ is a scalar encoding key geometric and algebraic information about the matrix.

### 3.1 Computation

**2×2:** $\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$

**3×3 (cofactor expansion along first row):**

$$\\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$$

where $C_{ij} = (-1)^{i+j}M_{ij}$ is the cofactor and $M_{ij}$ is the $(i,j)$ minor (determinant of the submatrix obtained by deleting row $i$ and column $j$).

### 3.2 Properties

| Property | Statement |
|---|---|
| Singular | $\\det(A) = 0 \\iff A$ is not invertible |
| Transpose | $\\det(A^T) = \\det(A)$ |
| Product | $\\det(AB) = \\det(A)\\det(B)$ |
| Row swap | Changes sign of determinant |
| Row scale | Scales determinant by that factor |
| Triangular | Product of diagonal entries |

### 3.3 Geometric Meaning

$|\\det(A)|$ = the factor by which $A$ scales $n$-dimensional volume. $\\det(A) < 0$ means $A$ reverses orientation.

In 2D: $|\\det([\\mathbf{u}\\,\\mathbf{v}])|$ = area of the parallelogram spanned by $\\mathbf{u}$ and $\\mathbf{v}$.
`
      },
      {
        heading: "4. Eigenvalues and Eigenvectors",
        level: 2,
        content: `
The eigenvalue equation is arguably the most important equation in applied mathematics.

### 4.1 Definition

A vector $\\mathbf{v} \\neq \\mathbf{0}$ is an **eigenvector** of $A$ with **eigenvalue** $\\lambda$ if:

$$A\\mathbf{v} = \\lambda\\mathbf{v}$$

Geometrically: $A$ only stretches (or flips) $\\mathbf{v}$ — it doesn't rotate it.

### 4.2 Computing Eigenvalues

Rearranging: $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. For non-trivial $\\mathbf{v}$, the matrix $A - \\lambda I$ must be singular:

$$\\det(A - \\lambda I) = 0$$

This is the **characteristic equation**, a degree-$n$ polynomial in $\\lambda$. Its roots are the eigenvalues.

**Example:** $A = \\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}$.

$\\det(A-\\lambda I) = (3-\\lambda)^2 - 1 = \\lambda^2 - 6\\lambda + 8 = (\\lambda-2)(\\lambda-4) = 0$.

Eigenvalues: $\\lambda_1 = 2$, $\\lambda_2 = 4$.

For $\\lambda = 2$: $(A-2I)\\mathbf{v} = \\mathbf{0} \\implies \\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\mathbf{v} = \\mathbf{0} \\implies \\mathbf{v}_1 = \\begin{pmatrix}1\\\\-1\\end{pmatrix}$

For $\\lambda = 4$: $\\mathbf{v}_2 = \\begin{pmatrix}1\\\\1\\end{pmatrix}$

### 4.3 Diagonalization

If $A$ has $n$ linearly independent eigenvectors $\\mathbf{v}_1,\\ldots,\\mathbf{v}_n$, then:

$$A = PDP^{-1}, \\quad P = [\\mathbf{v}_1 \\cdots \\mathbf{v}_n], \\quad D = \\text{diag}(\\lambda_1,\\ldots,\\lambda_n)$$

**Power of a matrix:** $A^k = PD^kP^{-1}$, and $D^k = \\text{diag}(\\lambda_1^k,\\ldots,\\lambda_n^k)$ — computing powers becomes trivial.

**Applications:** Markov chains (long-run behavior), solving systems of ODEs, computing matrix exponentials.

### 4.4 Spectral Theorem

If $A$ is **symmetric** ($A = A^T$):
- All eigenvalues are **real**
- Eigenvectors for distinct eigenvalues are **orthogonal**
- $A$ is **orthogonally diagonalizable**: $A = Q\\Lambda Q^T$ where $Q$ has orthonormal columns

### 4.5 Trace and Determinant from Eigenvalues

$$\\text{tr}(A) = \\sum_{i} \\lambda_i, \\qquad \\det(A) = \\prod_i \\lambda_i$$
`
      },
      {
        heading: "5. Orthogonality and Least Squares",
        level: 2,
        content: `
### 5.1 Inner Products and Orthogonality

Two vectors are **orthogonal** if $\\mathbf{u} \\cdot \\mathbf{v} = 0$.

The **Gram-Schmidt process** converts any basis $\\{\\mathbf{v}_1,\\ldots,\\mathbf{v}_k\\}$ to an orthonormal basis $\\{\\mathbf{e}_1,\\ldots,\\mathbf{e}_k\\}$:

$$\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j < k} \\frac{\\mathbf{v}_k \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}\\mathbf{u}_j, \\qquad \\mathbf{e}_k = \\frac{\\mathbf{u}_k}{|\\mathbf{u}_k|}$$

This leads to the **QR decomposition**: $A = QR$ where $Q$ has orthonormal columns and $R$ is upper triangular.

### 5.2 Projections

The **orthogonal projection** of $\\mathbf{b}$ onto subspace $W$ is the closest point in $W$ to $\\mathbf{b}$.

For a single vector direction $\\mathbf{a}$: $\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\mathbf{a}\\cdot\\mathbf{a}}\\mathbf{a}$

For the column space of $A$: $\\hat{\\mathbf{b}} = A(A^TA)^{-1}A^T\\mathbf{b}$

### 5.3 Least Squares

When $A\\mathbf{x} = \\mathbf{b}$ has no solution (overdetermined system), the **least-squares solution** minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$.

It satisfies the **normal equations:**

$$A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$$

**Applications:** Linear regression, curve fitting, computer vision, GPS positioning.
`
      },
      {
        heading: "6. Singular Value Decomposition (SVD)",
        level: 2,
        content: `
The **Singular Value Decomposition** is the most important matrix factorization in data science and applied mathematics.

### 6.1 The Theorem

Every $m \\times n$ matrix $A$ can be written as:

$$A = U\\Sigma V^T$$

where:
- $U$ is $m \\times m$ orthogonal (left singular vectors)
- $\\Sigma$ is $m \\times n$ diagonal with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ (singular values)
- $V$ is $n \\times n$ orthogonal (right singular vectors)

The singular values are $\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$.

### 6.2 Low-Rank Approximation

The **best rank-$k$ approximation** to $A$ in terms of Frobenius norm is:

$$A_k = \\sum_{i=1}^k \\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$$

This is the Eckart-Young theorem — a profound result that underlies PCA, image compression, and latent semantic analysis.

### 6.3 Applications

- **Principal Component Analysis (PCA):** The right singular vectors $V$ are the principal components
- **Image compression:** Keep only the top $k$ singular values
- **Pseudo-inverse:** $A^+ = V\\Sigma^+U^T$ (generalized inverse, even for non-square/singular matrices)
- **Condition number:** $\\kappa(A) = \\sigma_1/\\sigma_n$ — measures numerical stability
`
      }
    ],
    keyFormulas: [
      { name: 'Eigenvalue Equation', latex: 'A\\mathbf{v} = \\lambda\\mathbf{v}', description: "Eigenvector with eigenvalue λ" },
      { name: 'Characteristic Polynomial', latex: '\\det(A - \\lambda I) = 0', description: "Find eigenvalues" },
      { name: 'Diagonalization', latex: 'A = PDP^{-1}', description: "A in terms of its eigenvectors" },
      { name: 'SVD', latex: 'A = U\\Sigma V^T', description: "Singular Value Decomposition" },
      { name: 'Normal Equations', latex: 'A^TA\\hat{x} = A^Tb', description: "Least squares solution" },
      { name: 'Rank-Nullity', latex: '\\text{rank}(A) + \\text{nullity}(A) = n', description: "Fundamental theorem" },
    ],
    practiceProblems: [
      {
        question: "Find the eigenvalues and eigenvectors of $A = \\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$.",
        hint: "Solve $\\det(A-\\lambda I)=0$ first.",
        answer: '$\\det = (4-\\lambda)(3-\\lambda)-2 = \\lambda^2-7\\lambda+10 = 0 \\implies \\lambda=2,5$. For $\\lambda=2$: $\\mathbf{v}=\\begin{pmatrix}1\\\\-2\\end{pmatrix}$. For $\\lambda=5$: $\\mathbf{v}=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.'
      },
      {
        question: "Is $\\left\\{\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix}, \\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}\\right\\}$ linearly independent?",
        hint: "Form a matrix and compute its determinant.",
        answer: '$\\det = 1(1\\cdot(-1)-2\\cdot1) - 0 + 1(0\\cdot1-1\\cdot1) = -3 + 0 - 1 = -4 \\neq 0$. Linearly independent. ✓'
      }
    ]
  },

  // ── Classical Mechanics ────────────────────
  classical: {
    id: 'classical',
    title: 'Classical Mechanics',
    subject: 'physics',
    difficulty: 'Foundational',
    estimatedReadTime: 55,
    sections: [
      {
        heading: "Classical Mechanics: From Newton to Lagrange and Hamilton",
        level: 1,
        content: `
Classical mechanics describes the motion of macroscopic objects — from projectiles to planets — under the action of forces. It operates in the regime where speeds are much less than light and sizes are much larger than atoms.

Newton's formulation, developed in the *Principia Mathematica* (1687), describes forces and their effects. The reformulations by Lagrange (1788) and Hamilton (1833) abstract this further, expressing mechanics in terms of energy, coordinates, and variational principles — frameworks that proved essential for quantum mechanics and general relativity.
`
      },
      {
        heading: "1. Kinematics: Motion Without Forces",
        level: 2,
        content: `
Kinematics describes *how* objects move without asking *why*.

### 1.1 Position, Velocity, Acceleration

In one dimension, with position $x(t)$:

$$v(t) = \\dot{x} = \\frac{dx}{dt}, \\qquad a(t) = \\dot{v} = \\ddot{x} = \\frac{d^2x}{dt^2}$$

In 3D: $\\mathbf{r}(t)$, $\\mathbf{v} = \\dot{\\mathbf{r}}$, $\\mathbf{a} = \\ddot{\\mathbf{r}}$.

### 1.2 SUVAT Equations (Constant Acceleration)

For constant acceleration $a$ from initial velocity $u$:

| Equation | Variables |
|---|---|
| $v = u + at$ | $v, u, a, t$ |
| $s = ut + \\frac{1}{2}at^2$ | $s, u, a, t$ |
| $v^2 = u^2 + 2as$ | $v, u, a, s$ |
| $s = \\frac{1}{2}(u+v)t$ | $s, u, v, t$ |

**Free fall:** $a = g = 9.81\\,\\text{m/s}^2$ downward. A ball dropped from height $h$ hits the ground with speed $v = \\sqrt{2gh}$ after time $t = \\sqrt{2h/g}$.

### 1.3 Projectile Motion

With no air resistance, horizontal and vertical motions are **independent**:

- Horizontal: $x = v_0\\cos\\theta \\cdot t$
- Vertical: $y = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2$

**Range:** $R = \\frac{v_0^2 \\sin 2\\theta}{g}$, maximized at $\\theta = 45°$.

**Time of flight:** $T = \\frac{2v_0\\sin\\theta}{g}$

**Maximum height:** $H = \\frac{v_0^2 \\sin^2\\theta}{2g}$

### 1.4 Circular Motion

For a particle moving in a circle of radius $r$ at speed $v$:
- **Angular velocity:** $\\omega = v/r$ (rad/s)
- **Period:** $T = 2\\pi r/v = 2\\pi/\\omega$
- **Centripetal acceleration:** $a_c = v^2/r = \\omega^2 r$ (directed toward center)
- **Tangential acceleration:** $a_t = r\\dot{\\omega}$ (along the path)
`
      },
      {
        heading: "2. Newton's Laws of Motion",
        level: 2,
        content: `
### First Law (Law of Inertia)

A body remains at rest or in uniform motion unless acted upon by a net external force. This defines **inertial reference frames** — frames where the first law holds.

### Second Law

$$\\mathbf{F}_{\\text{net}} = m\\mathbf{a} = \\frac{d\\mathbf{p}}{dt}, \\qquad \\mathbf{p} = m\\mathbf{v}$$

The net force equals the rate of change of momentum. For constant mass: $\\mathbf{F} = m\\mathbf{a}$.

This is a **vector** equation — it gives three component equations in 3D.

### Third Law (Action-Reaction)

If body A exerts a force $\\mathbf{F}_{AB}$ on body B, then B exerts $\\mathbf{F}_{BA} = -\\mathbf{F}_{AB}$ on A. These forces are:
- Equal in magnitude, opposite in direction
- Act on **different** bodies (so they don't cancel each other)

### 2.1 Common Forces

| Force | Formula |
|---|---|
| Gravity (near Earth) | $\\mathbf{W} = mg\\hat{j}$ (downward) |
| Gravity (general) | $\\mathbf{F}_g = -\\frac{GMm}{r^2}\\hat{r}$ |
| Normal | Perpendicular to contact surface |
| Friction (kinetic) | $f_k = \\mu_k N$ |
| Friction (static) | $f_s \\leq \\mu_s N$ |
| Spring (Hooke's) | $F = -kx$ |
| Drag (viscous) | $\\mathbf{F}_d = -b\\mathbf{v}$ |
| Drag (high-speed) | $F_d = \\frac{1}{2}C_D \\rho A v^2$ |

### 2.2 Solving Newton's Law Problems

**Procedure:**
1. Draw a free-body diagram (FBD) for each object
2. Choose a coordinate system
3. Write $\\sum F_x = ma_x$, $\\sum F_y = ma_y$ for each body
4. Solve the system of equations

**Atwood Machine:** Two masses $m_1 > m_2$ over a pulley.

$a = \\frac{(m_1-m_2)g}{m_1+m_2}$, $T = \\frac{2m_1 m_2 g}{m_1+m_2}$
`
      },
      {
        heading: "3. Work, Energy, and Conservation Laws",
        level: 2,
        content: `
### 3.1 Work

The work done by force $\\mathbf{F}$ over displacement $d\\mathbf{r}$:

$$W = \\int_{\\mathbf{r}_1}^{\\mathbf{r}_2} \\mathbf{F} \\cdot d\\mathbf{r}$$

For constant force: $W = F d \\cos\\theta$ where $\\theta$ is the angle between $\\mathbf{F}$ and $d$.

**Work-Energy Theorem:** $W_{\\text{net}} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$

### 3.2 Conservative Forces and Potential Energy

A force is **conservative** if its work is path-independent (equivalently, if it can be written as $\\mathbf{F} = -\\nabla U$).

**Potential energy** stores work done against a conservative force:

| Force | Potential Energy |
|---|---|
| Gravity (near Earth) | $U = mgy$ |
| Gravity (general) | $U = -GMm/r$ |
| Spring | $U = \\frac{1}{2}kx^2$ |

### 3.3 Conservation of Energy

For systems with only conservative forces:

$$E = KE + PE = \\frac{1}{2}mv^2 + U = \\text{constant}$$

This is **mechanical energy conservation**. When non-conservative forces (friction, drag) act, energy is dissipated as heat:

$$\\Delta E_{\\text{mech}} = W_{\\text{non-conservative}}$$

### 3.4 Power

$$P = \\frac{dW}{dt} = \\mathbf{F} \\cdot \\mathbf{v}$$

Units: Watts (W) = J/s. Horsepower: 1 hp $\\approx$ 746 W.

### 3.5 Conservation of Momentum

For a system of particles with no net external force:

$$\\mathbf{p}_{\\text{total}} = \\sum_i m_i\\mathbf{v}_i = \\text{constant}$$

**Collisions:**
- **Elastic:** both momentum and kinetic energy conserved
- **Inelastic:** only momentum conserved
- **Perfectly inelastic:** objects stick together; maximum KE lost

For a 1D elastic collision between $m_1$ (velocity $v_1$) and $m_2$ (at rest):

$$v_1' = \\frac{m_1-m_2}{m_1+m_2}v_1, \\qquad v_2' = \\frac{2m_1}{m_1+m_2}v_1$$

**Center of Mass:**

$$\\mathbf{R}_{\\text{cm}} = \\frac{\\sum_i m_i \\mathbf{r}_i}{\\sum_i m_i}, \\qquad M\\mathbf{a}_{\\text{cm}} = \\mathbf{F}_{\\text{ext,total}}$$
`
      },
      {
        heading: "4. Rotational Mechanics",
        level: 2,
        content: `
Rotation is the angular analogue of translation. Every translational concept has a rotational counterpart.

| Translational | Rotational |
|---|---|
| Displacement $x$ | Angle $\\theta$ |
| Velocity $v = \\dot{x}$ | Angular velocity $\\omega = \\dot{\\theta}$ |
| Acceleration $a$ | Angular acceleration $\\alpha = \\dot{\\omega}$ |
| Mass $m$ | Moment of inertia $I$ |
| Force $F = ma$ | Torque $\\tau = I\\alpha$ |
| Momentum $p = mv$ | Angular momentum $L = I\\omega$ |
| KE $= \\frac{1}{2}mv^2$ | KE $= \\frac{1}{2}I\\omega^2$ |

### 4.1 Torque

$$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, \\qquad |\\tau| = rF\\sin\\phi$$

where $\\phi$ is the angle between $\\mathbf{r}$ and $\\mathbf{F}$.

### 4.2 Moment of Inertia

$$I = \\sum_i m_i r_i^2 = \\int r^2\\,dm$$

| Object (axis) | $I$ |
|---|---|
| Point mass at $r$ | $mr^2$ |
| Solid sphere (cm) | $\\frac{2}{5}mr^2$ |
| Hollow sphere (cm) | $\\frac{2}{3}mr^2$ |
| Solid cylinder (axis) | $\\frac{1}{2}mr^2$ |
| Thin rod (center) | $\\frac{1}{12}mL^2$ |
| Thin rod (end) | $\\frac{1}{3}mL^2$ |

**Parallel Axis Theorem:** $I = I_{\\text{cm}} + md^2$

### 4.3 Angular Momentum

$$\\mathbf{L} = I\\boldsymbol{\\omega} = \\mathbf{r} \\times \\mathbf{p}, \\qquad \\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau}_{\\text{ext}}$$

If $\\boldsymbol{\\tau}_{\\text{ext}} = \\mathbf{0}$, then $\\mathbf{L}$ is **conserved**. This explains the ice skater effect: pulling arms in reduces $I$, so $\\omega$ increases to keep $L = I\\omega$ constant.

### 4.4 Rolling Without Slipping

For a wheel of radius $R$ rolling without slipping: $v_{\\text{cm}} = R\\omega$.

Total kinetic energy: $KE = \\frac{1}{2}mv_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2$
`
      },
      {
        heading: "5. Oscillations: Simple Harmonic Motion",
        level: 2,
        content: `
**Simple Harmonic Motion (SHM)** occurs whenever the restoring force is proportional to displacement:

$$F = -kx \\implies m\\ddot{x} = -kx$$

This is a second-order linear ODE with solution:

$$x(t) = A\\cos(\\omega_0 t + \\phi), \\qquad \\omega_0 = \\sqrt{\\frac{k}{m}}$$

- $A$ = amplitude
- $\\omega_0$ = natural angular frequency
- $\\phi$ = phase constant (determined by initial conditions)
- $T = 2\\pi/\\omega_0 = 2\\pi\\sqrt{m/k}$ = period (independent of amplitude!)

**Energy in SHM:** $E = \\frac{1}{2}kA^2 = \\text{constant}$, alternating between $KE$ and $PE$.

### Damped Oscillations

With velocity-dependent damping $F_{\\text{damp}} = -b\\dot{x}$:

$$m\\ddot{x} + b\\dot{x} + kx = 0$$

Solutions depend on the damping ratio $\\gamma = b/2m$ vs $\\omega_0$:

| Regime | Condition | Behavior |
|---|---|---|
| Underdamped | $\\gamma < \\omega_0$ | Oscillates with exponentially decaying amplitude |
| Critically damped | $\\gamma = \\omega_0$ | Returns to equilibrium fastest, no oscillation |
| Overdamped | $\\gamma > \\omega_0$ | Exponentially decays without oscillating |

**Underdamped solution:** $x(t) = Ae^{-\\gamma t}\\cos(\\omega_d t + \\phi)$ where $\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}$.

### Driven Oscillations and Resonance

With a periodic driving force $F_0\\cos(\\omega t)$:

**Steady-state amplitude:** $A = \\frac{F_0/m}{\\sqrt{(\\omega_0^2-\\omega^2)^2 + 4\\gamma^2\\omega^2}}$

At **resonance** ($\\omega = \\omega_0$): $A = \\frac{F_0}{2m\\gamma\\omega_0}$ — amplitude is maximum (and infinite for zero damping). This is why bridges can collapse from marching soldiers or why wine glasses shatter under the right frequency.
`
      },
      {
        heading: "6. Gravitation and Orbital Mechanics",
        level: 2,
        content: `
### Newton's Law of Universal Gravitation

$$\\mathbf{F} = -\\frac{GMm}{r^2}\\hat{r}$$

where $G = 6.674 \\times 10^{-11}\\,\\text{N m}^2/\\text{kg}^2$.

### Kepler's Laws

**First Law:** Planets orbit in **ellipses** with the Sun at one focus.

**Second Law:** The radius vector sweeps equal areas in equal times (equivalent to conservation of angular momentum, $\\mathbf{L} = m\\mathbf{r}\\times\\mathbf{v} = \\text{const}$).

**Third Law:** $T^2 \\propto a^3$, where $a$ is the semi-major axis:

$$T^2 = \\frac{4\\pi^2}{GM} a^3$$

### Orbital Energy

For a circular orbit of radius $r$:

$$v_c = \\sqrt{\\frac{GM}{r}}, \\qquad T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

Total mechanical energy: $E = KE + PE = -\\frac{GMm}{2r}$ (negative = bound orbit).

**Escape velocity** (from radius $r$): $v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2}\\, v_c$

For Earth: $v_e \\approx 11.2\\,\\text{km/s}$.
`
      },
      {
        heading: "7. Lagrangian and Hamiltonian Mechanics",
        level: 2,
        content: `
These reformulations are not just more general — they provide the conceptual foundations for quantum mechanics and field theory.

### 7.1 Lagrangian Mechanics

Define the **Lagrangian** $L = T - V$ (kinetic minus potential energy).

The **Euler-Lagrange equations** are the equations of motion:

$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} = 0$$

for each generalized coordinate $q_i$. These automatically handle constraints and work in any coordinate system.

**Example:** Pendulum of length $l$. Using $q = \\theta$:

$T = \\frac{1}{2}ml^2\\dot{\\theta}^2$, $V = -mgl\\cos\\theta$

$L = \\frac{1}{2}ml^2\\dot{\\theta}^2 + mgl\\cos\\theta$

EL equation: $ml^2\\ddot{\\theta} = -mgl\\sin\\theta \\implies \\ddot{\\theta} = -\\frac{g}{l}\\sin\\theta$

For small $\\theta$: $\\ddot{\\theta} \\approx -\\frac{g}{l}\\theta$ — SHM with $\\omega = \\sqrt{g/l}$.

### 7.2 Noether's Theorem

Every continuous symmetry of $L$ corresponds to a conserved quantity:
- Time-translation symmetry → **energy** conservation
- Space-translation symmetry → **momentum** conservation
- Rotational symmetry → **angular momentum** conservation

This is one of the most profound theorems in physics.

### 7.3 Hamiltonian Mechanics

The **Hamiltonian** $H(q_i, p_i, t) = \\sum_i p_i\\dot{q}_i - L$ (usually equals total energy).

**Hamilton's equations:**

$$\\dot{q}_i = \\frac{\\partial H}{\\partial p_i}, \\qquad \\dot{p}_i = -\\frac{\\partial H}{\\partial q_i}$$

The state of the system is a point in **phase space** $(q_i, p_i)$, and evolution traces out a curve. The Hamiltonian formulation leads directly to quantum mechanics via the replacement $\\{q,p\\} \\to [\\hat{q},\\hat{p}] = i\\hbar$.
`
      }
    ],
    keyFormulas: [
      { name: "Newton's 2nd Law", latex: '\\mathbf{F} = m\\mathbf{a} = \\dot{\\mathbf{p}}', description: "Foundation of dynamics" },
      { name: 'Work-Energy Theorem', latex: 'W_{net} = \\Delta KE', description: "Net work changes kinetic energy" },
      { name: 'Conservation of Energy', latex: 'E = \\frac{1}{2}mv^2 + U = \\text{const}', description: "For conservative systems" },
      { name: 'Torque and Rotation', latex: '\\boldsymbol{\\tau} = I\\boldsymbol{\\alpha} = \\mathbf{r}\\times\\mathbf{F}', description: "Rotational analogue of F=ma" },
      { name: 'SHM', latex: 'x(t) = A\\cos(\\omega_0 t + \\phi),\\; \\omega_0 = \\sqrt{k/m}', description: "Simple harmonic motion" },
      { name: 'Euler-Lagrange', latex: '\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}} - \\frac{\\partial L}{\\partial q} = 0', description: "Lagrangian equations of motion" },
      { name: "Kepler's 3rd Law", latex: 'T^2 = \\frac{4\\pi^2}{GM}a^3', description: "Orbital period and semi-major axis" },
    ],
    practiceProblems: [
      {
        question: "A 2 kg block slides down a frictionless incline of angle 30°. Find its acceleration and the normal force.",
        hint: "Set up axes parallel and perpendicular to the incline.",
        answer: '$a = g\\sin 30° = 4.9\\,\\text{m/s}^2$ down the slope. $N = mg\\cos 30° = 2(9.81)(\\sqrt{3}/2) \\approx 17.0\\,\\text{N}$'
      },
      {
        question: "A 1 kg mass on a spring ($k = 100\\,\\text{N/m}$) is displaced 0.1 m from equilibrium and released. Find the period and maximum speed.",
        hint: "Use $T = 2\\pi\\sqrt{m/k}$ and energy conservation for max speed.",
        answer: '$T = 2\\pi\\sqrt{1/100} = 2\\pi/10 \\approx 0.628\\,\\text{s}$. Energy: $\\frac{1}{2}kA^2 = \\frac{1}{2}mv_{max}^2 \\implies v_{max} = A\\sqrt{k/m} = 0.1\\times 10 = 1\\,\\text{m/s}$'
      },
      {
        question: "Earth has mass $M_E = 5.97\\times10^{24}\\,\\text{kg}$ and radius $R = 6.37\\times10^6\\,\\text{m}$. Find the orbital period of the ISS at altitude $h = 400\\,\\text{km}$.",
        hint: "Use Kepler's 3rd law with $a = R + h$.",
        answer: '$T = 2\\pi\\sqrt{a^3/GM_E}$ where $a = 6.77\\times10^6\\,\\text{m}$. $T = 2\\pi\\sqrt{(6.77\\times10^6)^3/(6.674\\times10^{-11}\\times5.97\\times10^{24})} \\approx 5560\\,\\text{s} \\approx 92.7\\,\\text{min}$'
      }
    ]
  },

  // ── Quantum Mechanics ──────────────────────
  quantum: {
    id: 'quantum',
    title: 'Quantum Mechanics',
    subject: 'physics',
    difficulty: 'Advanced',
    estimatedReadTime: 65,
    sections: [
      {
        heading: "Quantum Mechanics: The Physics of the Very Small",
        level: 1,
        content: `
Quantum mechanics is the most successful physical theory ever devised. It governs the behavior of atoms, molecules, photons, and subatomic particles with extraordinary precision — predictions matching experiments to parts per billion. Yet it challenges our deepest classical intuitions: particles have wave-like properties, measurement disturbs what is measured, and nature is fundamentally probabilistic.

Developed between 1900 and 1930 by Planck, Einstein, Bohr, Heisenberg, Schrödinger, Born, Dirac, and others, quantum mechanics underlies all of modern chemistry, solid-state physics, photonics, and quantum computing.
`
      },
      {
        heading: "1. The Failures of Classical Physics",
        level: 2,
        content: `
### 1.1 Blackbody Radiation

A **blackbody** absorbs all incident radiation. Classical theory (Rayleigh-Jeans) predicted infinite energy emission at high frequencies — the **ultraviolet catastrophe**.

Planck (1900) resolved this by assuming energy is quantized in discrete packets:

$$E = nhf = n\\hbar\\omega, \\quad n = 0, 1, 2, \\ldots$$

The Planck distribution:

$$u(f,T) = \\frac{8\\pi h f^3}{c^3} \\cdot \\frac{1}{e^{hf/k_BT} - 1}$$

**Stefan-Boltzmann Law:** $P = \\sigma T^4$ (total power per unit area, $\\sigma = 5.67\\times10^{-8}\\,\\text{W/m}^2\\text{K}^4$)

**Wien's Displacement Law:** $\\lambda_{\\text{max}} T = 2.898\\times10^{-3}\\,\\text{m}\\cdot\\text{K}$

### 1.2 The Photoelectric Effect

Einstein (1905) — Nobel Prize — explained that light comes in **photons**, each with energy:

$$E = hf$$

Photons eject electrons only if $hf \\geq \\phi$ (work function $\\phi$). The maximum kinetic energy of ejected electrons:

$$KE_{\\text{max}} = hf - \\phi$$

This was decisive evidence for the particle nature of light.

### 1.3 The Compton Effect

X-ray photons scattered off electrons shift in wavelength:

$$\\Delta\\lambda = \\frac{h}{m_e c}(1-\\cos\\theta) = \\lambda_C(1-\\cos\\theta)$$

where $\\lambda_C = h/m_e c = 2.426\\times10^{-12}\\,\\text{m}$ is the Compton wavelength. This proved photons carry momentum $p = h/\\lambda = E/c$.

### 1.4 de Broglie's Matter Waves

If light (wave) behaves as particles, de Broglie (1924) proposed that particles (matter) behave as waves:

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

Confirmed by Davisson-Germer (1927): electrons diffract off a crystal lattice exactly as predicted. Electrons, protons, atoms, even large molecules show wave interference.
`
      },
      {
        heading: "2. The Wave Function and the Schrödinger Equation",
        level: 2,
        content: `
### 2.1 The Wave Function

The complete quantum state of a particle is described by its **wave function** $\\Psi(x,t)$, a complex-valued function.

**Born's Rule:** The probability of finding a particle at position $x$ at time $t$ is:

$$P(x,t) = |\\Psi(x,t)|^2$$

This is the **probability density**. Normalization requires:

$$\\int_{-\\infty}^{\\infty} |\\Psi(x,t)|^2\\,dx = 1$$

### 2.2 The Time-Dependent Schrödinger Equation

$$i\\hbar \\frac{\\partial\\Psi}{\\partial t} = \\hat{H}\\Psi = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\Psi}{\\partial x^2} + V(x,t)\\Psi$$

This is the fundamental dynamical equation of quantum mechanics. It is **linear**, **first-order in time**, and **deterministic** — given $\\Psi$ at $t=0$, we can (in principle) find $\\Psi$ for all future times.

### 2.3 Stationary States

For time-independent potentials $V(x)$, separate variables: $\\Psi(x,t) = \\psi(x)e^{-iEt/\\hbar}$.

The **time-independent Schrödinger equation (TISE)**:

$$\\hat{H}\\psi = E\\psi \\implies -\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\psi = E\\psi$$

This is an eigenvalue problem: $\\psi_n$ are **energy eigenstates** with eigenvalues $E_n$.

**Key property:** A stationary state has $|\\Psi|^2 = |\\psi|^2$ — time-independent probability density.

### 2.4 The Superposition Principle

If $\\psi_1$ and $\\psi_2$ are solutions, so is any linear combination:

$$\\Psi = c_1\\psi_1 + c_2\\psi_2, \\qquad |c_1|^2 + |c_2|^2 = 1$$

**Measurement collapses the superposition.** Before measurement, the particle doesn't *have* a definite energy — it's in a superposition of energy eigenstates. Measurement finds $E_n$ with probability $|c_n|^2$.
`
      },
      {
        heading: "3. Fundamental Quantum Systems",
        level: 2,
        content: `
### 3.1 Particle in a Box (Infinite Square Well)

$$V(x) = \\begin{cases}0 & 0 < x < L \\\\ \\infty & \\text{otherwise}\\end{cases}$$

Boundary conditions $\\psi(0) = \\psi(L) = 0$ force quantization:

$$\\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\left(\\frac{n\\pi x}{L}\\right), \\qquad E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2} = n^2 E_1$$

Key features:
- Energy is **quantized**: only discrete values $n = 1, 2, 3, \\ldots$
- **Zero-point energy**: $E_1 > 0$ even for the ground state (a consequence of the uncertainty principle)
- $n$ nodes in the $n$-th excited state
- Probability density is not uniform

### 3.2 The Quantum Harmonic Oscillator

$$V(x) = \\frac{1}{2}m\\omega^2 x^2$$

Energy levels: $E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega$

- Equally spaced energy levels
- Zero-point energy: $E_0 = \\frac{1}{2}\\hbar\\omega \\neq 0$
- Ground state wave function: $\\psi_0 = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}e^{-m\\omega x^2/2\\hbar}$ (Gaussian)

The QHO is the universal model for vibrations — molecular bonds, phonons in crystals, quantized electromagnetic fields (photons), Higgs boson perturbations.

**Ladder operators** simplify calculations enormously:

$$\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\left(\\hat{x} + \\frac{i\\hat{p}}{m\\omega}\\right), \\qquad \\hat{a}^\\dagger = \\hat{a}^*$$

$$\\hat{H} = \\hbar\\omega\\left(\\hat{a}^\\dagger\\hat{a} + \\frac{1}{2}\\right), \\qquad \\hat{a}|n\\rangle = \\sqrt{n}|n-1\\rangle, \\qquad \\hat{a}^\\dagger|n\\rangle = \\sqrt{n+1}|n+1\\rangle$$

### 3.3 The Hydrogen Atom

For the $1/r$ Coulomb potential in 3D, solving the Schrödinger equation in spherical coordinates:

$$\\psi_{nlm}(r,\\theta,\\phi) = R_{nl}(r)Y_l^m(\\theta,\\phi)$$

**Energy levels:**

$$E_n = -\\frac{m_e e^4}{2(4\\pi\\epsilon_0)^2\\hbar^2} \\cdot \\frac{1}{n^2} = -\\frac{13.6\\,\\text{eV}}{n^2}$$

**Quantum numbers:**
| Number | Name | Range | Controls |
|---|---|---|---|
| $n$ | Principal | $1, 2, 3, \\ldots$ | Energy, size |
| $l$ | Orbital angular momentum | $0, 1, \\ldots, n-1$ | Shape |
| $m_l$ | Magnetic | $-l, \\ldots, +l$ | Orientation |
| $m_s$ | Spin | $\\pm\\frac{1}{2}$ | Spin direction |

**Selection rules** for radiative transitions: $\\Delta l = \\pm 1$, $\\Delta m_l = 0, \\pm 1$.
`
      },
      {
        heading: "4. The Uncertainty Principle",
        level: 2,
        content: `
### 4.1 Heisenberg's Uncertainty Principle

$$\\sigma_x \\sigma_p \\geq \\frac{\\hbar}{2}$$

where $\\sigma_x, \\sigma_p$ are the standard deviations of position and momentum measurements. This is **not** a statement about measurement disturbance — it is a fundamental property of quantum states. A state with definite position ($\\sigma_x \\to 0$) must have completely indefinite momentum ($\\sigma_p \\to \\infty$).

**More general form** (Robertson uncertainty relation) for any two observables $\\hat{A}$, $\\hat{B}$:

$$\\sigma_A \\sigma_B \\geq \\frac{1}{2}|\\langle[\\hat{A},\\hat{B}]\\rangle|$$

**Energy-time uncertainty:**

$$\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}$$

This explains the natural linewidth of spectral lines and allows "virtual" particle creation (vacuum fluctuations) for short times.

### 4.2 Consequences

- **Zero-point energy:** An electron cannot be at rest with definite position; zero-point kinetic energy keeps it "jittery."
- **Nuclear size:** Confining a proton to a nucleus of radius $R \\sim 1\\,\\text{fm}$ implies momentum $p \\sim \\hbar/R$, giving it ~20 MeV of kinetic energy — comparable to binding energies.
- **Tunneling:** A particle can penetrate a classically forbidden region because $\\psi \\neq 0$ there — crucial for nuclear fusion in stars and tunnel diodes.
`
      },
      {
        heading: "5. Quantum Operators and Measurement",
        level: 2,
        content: `
### 5.1 Observables as Operators

Every measurable physical quantity corresponds to a **Hermitian operator** $\\hat{A} = \\hat{A}^\\dagger$.

- Position: $\\hat{x}\\psi = x\\psi$
- Momentum: $\\hat{p} = -i\\hbar\\frac{\\partial}{\\partial x}$
- Kinetic energy: $\\hat{T} = \\hat{p}^2/2m = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2}$
- Angular momentum: $\\hat{L}_z = -i\\hbar\\frac{\\partial}{\\partial\\phi}$

### 5.2 Expectation Values

The average value of observable $\\hat{A}$ in state $\\Psi$:

$$\\langle A \\rangle = \\langle\\Psi|\\hat{A}|\\Psi\\rangle = \\int_{-\\infty}^\\infty \\Psi^* \\hat{A}\\Psi\\,dx$$

### 5.3 Commutators

$$[\\hat{A},\\hat{B}] = \\hat{A}\\hat{B} - \\hat{B}\\hat{A}$$

Fundamental commutation relation:

$$[\\hat{x}, \\hat{p}] = i\\hbar$$

If $[\\hat{A},\\hat{B}] = 0$, the observables are **compatible** — they can be simultaneously measured with arbitrary precision, and they share a common set of eigenstates.

If $[\\hat{A},\\hat{B}] \\neq 0$, they are **incompatible** and obey an uncertainty relation.

### 5.4 Ehrenfest's Theorem

$$m\\frac{d\\langle x\\rangle}{dt} = \\langle p\\rangle, \\qquad \\frac{d\\langle p\\rangle}{dt} = -\\left\\langle\\frac{dV}{dx}\\right\\rangle$$

The **expectation values** follow classical equations of motion. Classical mechanics emerges from quantum mechanics in the limit where $\\Delta x \\ll$ relevant length scales.
`
      },
      {
        heading: "6. Spin and Multi-Particle Systems",
        level: 2,
        content: `
### 6.1 Spin

Spin is an intrinsic angular momentum with no classical analogue. For an electron, $s = 1/2$:

$$S^2|s,m_s\\rangle = \\hbar^2 s(s+1)|s,m_s\\rangle = \\frac{3}{4}\\hbar^2|s,m_s\\rangle$$

$$S_z|s,m_s\\rangle = \\hbar m_s |s,m_s\\rangle = \\pm\\frac{\\hbar}{2}|\\uparrow\\rangle\\text{ or }|\\downarrow\\rangle$$

**Stern-Gerlach experiment:** A beam of silver atoms through an inhomogeneous magnetic field splits into exactly 2 beams, demonstrating spin quantization.

**Pauli matrices** represent spin-$1/2$ operators:

$$\\hat{S}_x = \\frac{\\hbar}{2}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}, \\quad \\hat{S}_y = \\frac{\\hbar}{2}\\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix}, \\quad \\hat{S}_z = \\frac{\\hbar}{2}\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$$

### 6.2 Identical Particles and the Pauli Exclusion Principle

For a system of identical particles, the wave function must be:
- **Symmetric** under exchange for **bosons** (integer spin): photons, gluons, $W^\\pm$, $Z^0$, Higgs
- **Antisymmetric** under exchange for **fermions** (half-integer spin): electrons, protons, neutrons, quarks

**Pauli Exclusion Principle** (for fermions): No two identical fermions can occupy the same quantum state.

This explains the **periodic table**, the stability of white dwarf stars, and metallic conduction.

**Fermi energy** — the highest occupied energy level at $T=0$:

$$E_F = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$$

where $n$ is electron number density.

### 6.3 Entanglement

For a two-particle system, the state may not be separable:

$$|\\Psi\\rangle = \\frac{1}{\\sqrt{2}}(|\\uparrow\\rangle_1|\\downarrow\\rangle_2 - |\\downarrow\\rangle_1|\\uparrow\\rangle_2)$$

This **Bell state** is entangled — measuring particle 1 instantly determines the state of particle 2, regardless of distance. Bell's theorem (1964) and experiments by Aspect et al. (1982) confirm quantum mechanics violates local hidden variable theories.
`
      }
    ],
    keyFormulas: [
      { name: 'Time-Dependent Schrödinger', latex: 'i\\hbar\\frac{\\partial\\Psi}{\\partial t} = \\hat{H}\\Psi', description: "Fundamental QM equation" },
      { name: 'Born Rule', latex: 'P(x,t) = |\\Psi(x,t)|^2', description: "Probability density" },
      { name: 'Uncertainty Principle', latex: '\\sigma_x\\sigma_p \\geq \\hbar/2', description: "Heisenberg's fundamental limit" },
      { name: 'Energy Eigenvalues (Box)', latex: 'E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}', description: "Infinite square well" },
      { name: 'Hydrogen Atom Energy', latex: 'E_n = -\\frac{13.6\\,\\text{eV}}{n^2}', description: "Hydrogen energy levels" },
      { name: 'Commutation Relation', latex: '[\\hat{x},\\hat{p}] = i\\hbar', description: "Canonical commutation" },
      { name: 'QHO Energy Levels', latex: 'E_n = (n+\\frac{1}{2})\\hbar\\omega', description: "Quantum harmonic oscillator" },
    ],
    practiceProblems: [
      {
        question: "An electron is confined to a 1D box of length $L = 1\\,\\text{nm}$. Calculate the energy of the $n=1$ and $n=2$ states in eV.",
        hint: "Use $E_n = n^2\\pi^2\\hbar^2/(2m_eL^2)$ with $m_e = 9.11\\times10^{-31}\\,\\text{kg}$.",
        answer: '$E_1 = \\pi^2(1.055\\times10^{-34})^2/(2\\times9.11\\times10^{-31}\\times10^{-18}) = 6.02\\times10^{-20}\\,\\text{J} \\approx 0.376\\,\\text{eV}$. $E_2 = 4E_1 \\approx 1.50\\,\\text{eV}$.'
      },
      {
        question: "Use the uncertainty principle to estimate the ground-state energy of a particle of mass $m$ in a box of size $L$.",
        hint: "Take $\\Delta x \\sim L$, then $\\Delta p \\geq \\hbar/(2L)$, and $KE \\sim (\\Delta p)^2/2m$.",
        answer: '$\\Delta p \\sim \\hbar/L$, so $E \\sim (\\hbar/L)^2/2m = \\hbar^2/2mL^2$. This matches $E_1 = \\pi^2\\hbar^2/2mL^2$ up to a factor of $\\pi^2 \\approx 10$.'
      },
      {
        question: "What is the wavelength of the photon emitted when a hydrogen atom transitions from $n=3$ to $n=2$?",
        hint: "Find $\\Delta E = E_3 - E_2$ and use $E = hc/\\lambda$.",
        answer: '$E_3 = -13.6/9 = -1.51\\,\\text{eV}$, $E_2 = -13.6/4 = -3.4\\,\\text{eV}$. $\\Delta E = 1.89\\,\\text{eV}$. $\\lambda = hc/\\Delta E = (4.136\\times10^{-15}\\,\\text{eV·s})(3\\times10^8\\,\\text{m/s})/1.89\\,\\text{eV} \\approx 656\\,\\text{nm}$ (red, H-alpha line).'
      }
    ]
  },

  // ── Electromagnetism ─────────────────────
  electro: {
    id: 'electro',
    title: 'Electromagnetism',
    subject: 'physics',
    difficulty: 'Intermediate',
    estimatedReadTime: 60,
    sections: [
      {
        heading: "Electromagnetism: Maxwell's Unified Theory",
        level: 1,
        content: `
Electromagnetism describes one of the four fundamental forces of nature. From static charges to radio waves to light, all electromagnetic phenomena are governed by a single set of equations — **Maxwell's equations** — which James Clerk Maxwell assembled in 1865.

These equations predicted the existence of electromagnetic waves traveling at the speed of light, leading Maxwell to the stunning conclusion that *light is an electromagnetic wave*. Einstein's special relativity grew directly from the desire to reconcile electromagnetism with Newtonian mechanics.
`
      },
      {
        heading: "1. Electrostatics",
        level: 2,
        content: `
### 1.1 Coulomb's Law

The force between two point charges $q_1$ and $q_2$ separated by distance $r$:

$$\\mathbf{F}_{12} = k_e \\frac{q_1 q_2}{r^2}\\hat{r}_{12}, \\qquad k_e = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99\\times10^9\\,\\text{N m}^2/\\text{C}^2$$

$\\varepsilon_0 = 8.854\\times10^{-12}\\,\\text{F/m}$ is the **permittivity of free space**.

Like charges repel ($F > 0$), unlike charges attract ($F < 0$).

### 1.2 The Electric Field

The electric field $\\mathbf{E}$ at a point is the force per unit positive test charge:

$$\\mathbf{E} = \\frac{\\mathbf{F}}{q_0} = k_e\\frac{q}{r^2}\\hat{r}$$

**Superposition:** For multiple charges, fields add vectorially: $\\mathbf{E} = \\sum_i \\mathbf{E}_i$.

For a continuous charge distribution: $\\mathbf{E} = k_e \\int \\frac{dq}{r^2}\\hat{r}$

### 1.3 Gauss's Law

The electric flux through any closed surface equals the enclosed charge divided by $\\varepsilon_0$:

$$\\oint_S \\mathbf{E}\\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}$$

**Using Gauss's Law for high symmetry:**

- **Spherically symmetric charge $Q$ at radius $r>R$:** $\\mathbf{E} = \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\hat{r}$ (same as point charge)
- **Infinite line charge $\\lambda$ at distance $r$:** $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$
- **Infinite plane with surface charge $\\sigma$:** $E = \\frac{\\sigma}{2\\varepsilon_0}$ (perpendicular to surface)

### 1.4 Electric Potential

The electric potential $V$ at a point is the work done per unit charge moving from infinity:

$$V = k_e \\frac{q}{r}, \\qquad \\mathbf{E} = -\\nabla V$$

**Equipotential surfaces** are perpendicular to $\\mathbf{E}$ field lines. No work is done moving a charge along an equipotential.

**Potential difference:**

$$V_B - V_A = -\\int_A^B \\mathbf{E}\\cdot d\\mathbf{l}$$

### 1.5 Capacitance

$$C = \\frac{Q}{V}, \\qquad C_{\\text{parallel plate}} = \\frac{\\varepsilon_0 A}{d}$$

Energy stored in a capacitor: $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$

**With dielectric:** $C = \\kappa C_0$ where $\\kappa$ is the dielectric constant. The dielectric reduces the field inside ($\\mathbf{E} = \\mathbf{E}_0/\\kappa$) by polarizing its molecules.
`
      },
      {
        heading: "2. Electric Current and Circuits",
        level: 2,
        content: `
### 2.1 Current and Resistance

**Current:** $I = dQ/dt$ (charge flow per unit time); unit: Ampere (A = C/s).

**Current density:** $\\mathbf{J} = \\sigma\\mathbf{E}$ where $\\sigma$ is electrical conductivity.

**Ohm's Law:** $V = IR$, where $R = \\rho L/A$ ($\\rho$ = resistivity, $L$ = length, $A$ = cross-section).

**Power dissipated:** $P = IV = I^2R = V^2/R$.

### 2.2 Kirchhoff's Laws

**KCL (Current Law):** $\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$ at any node. (Conservation of charge)

**KVL (Voltage Law):** $\\sum V_k = 0$ around any closed loop. (Conservation of energy)

### 2.3 Series and Parallel Combinations

| Configuration | Resistors | Capacitors |
|---|---|---|
| Series | $R_{eq} = R_1 + R_2 + \\cdots$ | $1/C_{eq} = 1/C_1 + 1/C_2 + \\cdots$ |
| Parallel | $1/R_{eq} = 1/R_1 + 1/R_2 + \\cdots$ | $C_{eq} = C_1 + C_2 + \\cdots$ |

### 2.4 RC Circuits

**Charging:** $q(t) = C\\mathcal{E}(1 - e^{-t/RC})$, $V_C(t) = \\mathcal{E}(1-e^{-t/\\tau})$

**Discharging:** $q(t) = Q_0 e^{-t/RC}$, $V_C(t) = V_0 e^{-t/\\tau}$

Time constant $\\tau = RC$ — after time $\\tau$, the capacitor has charged to $(1-e^{-1}) \\approx 63\\%$ of its final value.
`
      },
      {
        heading: "3. Magnetostatics",
        level: 2,
        content: `
### 3.1 The Magnetic Force

The **Lorentz force** on a charge $q$ moving at velocity $\\mathbf{v}$ in field $\\mathbf{B}$:

$$\\mathbf{F} = q\\mathbf{v}\\times\\mathbf{B}$$

The magnetic force is always **perpendicular to $\\mathbf{v}$** — it does no work and changes direction but not speed.

**Cyclotron motion:** A charged particle in a uniform $\\mathbf{B}$ field moves in a circle:

$$r = \\frac{mv}{qB}, \\qquad T = \\frac{2\\pi m}{qB}$$

### 3.2 Magnetic Force on a Current

$$d\\mathbf{F} = I\\,d\\mathbf{l}\\times\\mathbf{B}, \\qquad \\mathbf{F} = I\\mathbf{L}\\times\\mathbf{B}$$

**Torque on a current loop:** $\\boldsymbol{\\tau} = \\mathbf{m}\\times\\mathbf{B}$ where $\\mathbf{m} = NIA\\hat{n}$ is the magnetic dipole moment.

### 3.3 Sources of Magnetic Fields

**Biot-Savart Law:**

$$d\\mathbf{B} = \\frac{\\mu_0 I}{4\\pi}\\frac{d\\mathbf{l}\\times\\hat{r}}{r^2}, \\qquad \\mu_0 = 4\\pi\\times10^{-7}\\,\\text{T m/A}$$

**Key results:**

- Long straight wire: $B = \\frac{\\mu_0 I}{2\\pi r}$
- Center of circular loop: $B = \\frac{\\mu_0 I}{2R}$
- Solenoid (inside): $B = \\mu_0 nI$ where $n$ = turns per unit length
- Toroid: $B = \\frac{\\mu_0 NI}{2\\pi r}$

**Ampère's Law:**

$$\\oint_C \\mathbf{B}\\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}}$$

Plus Maxwell's displacement current correction (see below).
`
      },
      {
        heading: "4. Electromagnetic Induction",
        level: 2,
        content: `
### 4.1 Faraday's Law

A changing magnetic flux induces an EMF:

$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}, \\qquad \\Phi_B = \\int_S \\mathbf{B}\\cdot d\\mathbf{A}$$

**Lenz's Law:** The minus sign means the induced current opposes the change in flux (creates a field to counteract the change).

### 4.2 Motional EMF

A conductor of length $L$ moving with velocity $\\mathbf{v}$ through $\\mathbf{B}$:

$$\\mathcal{E} = \\int (\\mathbf{v}\\times\\mathbf{B})\\cdot d\\mathbf{l} = BLv \\sin\\theta$$

### 4.3 Inductance

$$\\mathcal{E} = -L\\frac{dI}{dt}, \\qquad L_{\\text{solenoid}} = \\mu_0 n^2 V$$

Energy stored: $U = \\frac{1}{2}LI^2$

**Mutual inductance:** $\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$

**Transformers:** $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$ (ideal transformer)

### 4.4 LRC Circuits

**LC circuit** (no resistance): Oscillates at $\\omega_0 = 1/\\sqrt{LC}$.

**LRC circuit:** $L\\ddot{q} + R\\dot{q} + q/C = \\mathcal{E}_0\\cos(\\omega t)$

**Resonance** at $\\omega = \\omega_0 = 1/\\sqrt{LC}$: maximum current, minimum impedance.

**Impedance:** $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ where $X_L = \\omega L$, $X_C = 1/(\\omega C)$.
`
      },
      {
        heading: "5. Maxwell's Equations and Electromagnetic Waves",
        level: 2,
        content: `
### 5.1 Maxwell's Equations (Differential Form)

$$\\nabla\\cdot\\mathbf{E} = \\frac{\\rho}{\\varepsilon_0} \\qquad (\\text{Gauss's law for } \\mathbf{E})$$

$$\\nabla\\cdot\\mathbf{B} = 0 \\qquad (\\text{No magnetic monopoles})$$

$$\\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t} \\qquad (\\text{Faraday's law})$$

$$\\nabla\\times\\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t} \\qquad (\\text{Ampère-Maxwell law})$$

The term $\\mu_0\\varepsilon_0\\frac{\\partial\\mathbf{E}}{\\partial t}$ is Maxwell's **displacement current** — without it, Ampère's law would violate conservation of charge.

### 5.2 Electromagnetic Waves

In vacuum ($\\rho = 0$, $\\mathbf{J} = 0$), Maxwell's equations yield the wave equation:

$$\\nabla^2\\mathbf{E} = \\mu_0\\varepsilon_0\\frac{\\partial^2\\mathbf{E}}{\\partial t^2}$$

This predicts wave speed: $c = 1/\\sqrt{\\mu_0\\varepsilon_0} = 2.998\\times10^8\\,\\text{m/s}$

This is the speed of light — the first fundamental prediction of electromagnetism.

**Plane wave solution:**

$$\\mathbf{E} = E_0\\cos(kx - \\omega t)\\hat{y}, \\qquad \\mathbf{B} = \\frac{E_0}{c}\\cos(kx - \\omega t)\\hat{z}$$

Properties:
- **Transverse:** $\\mathbf{E}$ and $\\mathbf{B}$ perpendicular to propagation direction
- $\\mathbf{E} \\perp \\mathbf{B}$ and $\\mathbf{E}\\times\\mathbf{B}$ points in the direction of propagation
- $|\\mathbf{B}| = |\\mathbf{E}|/c$
- $\\omega = ck$ (dispersion relation in vacuum)

### 5.3 Energy and the Poynting Vector

Energy density of EM field: $u = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2$

**Poynting vector** (energy flux = power per unit area):

$$\\mathbf{S} = \\frac{1}{\\mu_0}\\mathbf{E}\\times\\mathbf{B}$$

**Radiation pressure:** $P_{\\text{rad}} = S/c$ (for absorption) — this is how light sails work.

### 5.4 The Electromagnetic Spectrum

| Type | Wavelength | Energy |
|---|---|---|
| Radio | > 1 mm | < 1.2 meV |
| Microwave | 1 mm – 1 cm | — |
| Infrared | 700 nm – 1 mm | — |
| Visible | 400–700 nm | 1.8–3.1 eV |
| Ultraviolet | 10–400 nm | — |
| X-ray | 0.01–10 nm | — |
| Gamma ray | < 0.01 nm | > 124 keV |
`
      }
    ],
    keyFormulas: [
      { name: "Coulomb's Law", latex: 'F = k_e\\frac{q_1 q_2}{r^2}', description: "Force between point charges" },
      { name: "Gauss's Law", latex: '\\oint\\mathbf{E}\\cdot d\\mathbf{A} = Q_{enc}/\\varepsilon_0', description: "Electric flux and charge" },
      { name: "Faraday's Law", latex: '\\mathcal{E} = -d\\Phi_B/dt', description: "Induced EMF from changing flux" },
      { name: 'Lorentz Force', latex: '\\mathbf{F} = q(\\mathbf{E}+\\mathbf{v}\\times\\mathbf{B})', description: "Force on charge in EM field" },
      { name: 'Transformer Equation', latex: 'V_s/V_p = N_s/N_p = I_p/I_s', description: "Ideal transformer ratios" },
      { name: 'Speed of Light', latex: 'c = 1/\\sqrt{\\mu_0\\varepsilon_0}', description: "Maxwell's prediction" },
    ],
    practiceProblems: [
      {
        question: "A parallel-plate capacitor has plate area $A = 0.01\\,\\text{m}^2$ and separation $d = 1\\,\\text{mm}$. Find the capacitance and the energy stored when charged to $V = 100\\,\\text{V}$.",
        hint: "Use $C = \\varepsilon_0 A/d$ and $U = \\frac{1}{2}CV^2$.",
        answer: '$C = (8.85\\times10^{-12})(0.01)/10^{-3} = 88.5\\,\\text{pF}$. $U = \\frac{1}{2}(88.5\\times10^{-12})(100)^2 = 442.5\\,\\text{nJ}$.'
      },
      {
        question: "A solenoid has 1000 turns, length 0.5 m, and radius 2 cm. Find the magnetic field inside when carrying 2 A, and the inductance.",
        hint: "Inside solenoid: $B = \\mu_0 nI$. $L = \\mu_0 n^2 V$.",
        answer: '$n = 1000/0.5 = 2000\\,\\text{m}^{-1}$. $B = 4\\pi\\times10^{-7}\\times2000\\times2 = 5.03\\,\\text{mT}$. $L = \\mu_0 n^2 A\\ell = (4\\pi\\times10^{-7})(4\\times10^6)(\\pi\\times0.0004)(0.5) = 3.16\\,\\text{mH}$.'
      }
    ]
  },

  // ── Thermodynamics ────────────────────────
  thermo: {
    id: 'thermo',
    title: 'Thermodynamics',
    subject: 'physics',
    difficulty: 'Intermediate',
    estimatedReadTime: 50,
    sections: [
      {
        heading: "Thermodynamics: Energy, Entropy, and the Laws of Nature",
        level: 1,
        content: `
Thermodynamics governs the flow of energy and sets fundamental limits on what any engine, refrigerator, or physical process can achieve. Its laws are among the most universal in science — they apply whether we're studying a steam engine, the expansion of the universe, or a biological cell.

The subject develops from empirical observations about heat and work to deep theoretical frameworks involving entropy, free energy, and statistical mechanics.
`
      },
      {
        heading: "1. Basic Concepts",
        level: 2,
        content: `
### 1.1 System, Surroundings, and State

A **thermodynamic system** is the region of interest. The **state** of a system is described by macroscopic variables: temperature $T$, pressure $P$, volume $V$, internal energy $U$, etc.

**State functions** depend only on the current state, not on history: $T$, $P$, $V$, $U$, $H$, $S$, $G$.

**Path functions** depend on the process: work $W$, heat $Q$.

### 1.2 Temperature and the Zeroth Law

**Zeroth Law:** If A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in thermal equilibrium. This defines temperature as an equivalence relation.

**Temperature scales:**
- $T(K) = T(°C) + 273.15$
- $T(°F) = \\frac{9}{5}T(°C) + 32$

Absolute zero (0 K) is the theoretical minimum — all molecular motion ceases.

### 1.3 The Ideal Gas

$$PV = nRT = Nk_BT$$

- $n$ = moles, $R = 8.314\\,\\text{J/(mol·K)}$ = gas constant
- $N$ = molecules, $k_B = 1.381\\times10^{-23}\\,\\text{J/K}$ = Boltzmann constant

**Kinetic theory derivation:** From molecular collisions on walls:

$$P = \\frac{Nm\\langle v^2\\rangle}{3V}$$

The **equipartition theorem:** Each quadratic degree of freedom contributes $\\frac{1}{2}k_BT$ to the average energy.

For a monatomic ideal gas (3 translational DOF): $U = \\frac{3}{2}Nk_BT = \\frac{3}{2}nRT$

For diatomic ideal gas (at moderate T, 5 DOF: 3 trans + 2 rot): $U = \\frac{5}{2}nRT$

**RMS speed:** $v_{\\text{rms}} = \\sqrt{\\langle v^2\\rangle} = \\sqrt{\\frac{3RT}{M}}$

**Maxwell-Boltzmann speed distribution:**

$$f(v) = 4\\pi\\left(\\frac{m}{2\\pi k_BT}\\right)^{3/2} v^2 e^{-mv^2/2k_BT}$$
`
      },
      {
        heading: "2. The First Law",
        level: 2,
        content: `
### The First Law of Thermodynamics

$$\\Delta U = Q - W$$

(or $dU = \\delta Q - \\delta W$ in differential form)

- $Q > 0$: heat flows **into** the system
- $W > 0$: work done **by** the system

For a gas: $W = \\int P\\,dV$

**Internal energy $U$** is a state function; $Q$ and $W$ individually are path-dependent.

### 2.1 Specific and Molar Heat Capacities

$$Q = nC_V \\Delta T \\quad (\\text{constant volume})$$
$$Q = nC_P \\Delta T \\quad (\\text{constant pressure})$$

For ideal gas: $C_P - C_V = R$, $\\gamma = C_P/C_V$

| Gas type | $C_V$ | $C_P$ | $\\gamma$ |
|---|---|---|---|
| Monatomic | $\\frac{3}{2}R$ | $\\frac{5}{2}R$ | $5/3 \\approx 1.67$ |
| Diatomic | $\\frac{5}{2}R$ | $\\frac{7}{2}R$ | $7/5 = 1.40$ |

### 2.2 Thermodynamic Processes

| Process | Constraint | $W$ | $Q$ | $\\Delta U$ |
|---|---|---|---|---|
| Isothermal | $T = \\text{const}$ | $nRT\\ln(V_f/V_i)$ | $= W$ | $0$ |
| Isobaric | $P = \\text{const}$ | $P\\Delta V$ | $nC_P\\Delta T$ | $nC_V\\Delta T$ |
| Isochoric | $V = \\text{const}$ | $0$ | $nC_V\\Delta T$ | $= Q$ |
| Adiabatic | $Q = 0$ | $-\\Delta U$ | $0$ | $nC_V\\Delta T$ |

**Adiabatic process:** $PV^\\gamma = \\text{const}$, $TV^{\\gamma-1} = \\text{const}$
`
      },
      {
        heading: "3. The Second Law and Entropy",
        level: 2,
        content: `
### The Second Law

**Kelvin-Planck statement:** No process whose sole result is the absorption of heat from a reservoir and the complete conversion to work is possible. (No 100%-efficient heat engine.)

**Clausius statement:** Heat cannot spontaneously flow from a cold body to a hot body.

These are equivalent statements.

### 3.1 The Carnot Cycle

The most efficient possible heat engine operating between temperatures $T_H$ and $T_C$:

1. Isothermal expansion at $T_H$ (absorbs $Q_H$)
2. Adiabatic expansion ($T_H \\to T_C$)
3. Isothermal compression at $T_C$ (releases $Q_C$)
4. Adiabatic compression ($T_C \\to T_H$)

$$\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H} = 1 - \\frac{Q_C}{Q_H}$$

This is the **maximum possible efficiency** — any real engine must be less efficient.

### 3.2 Entropy

Entropy $S$ is a state function measuring the "spread" or "disorder" of energy:

**Clausius definition:**

$$dS = \\frac{\\delta Q_{\\text{rev}}}{T}, \\qquad \\Delta S = \\int_i^f \\frac{\\delta Q_{\\text{rev}}}{T}$$

**Second Law restated:** For any process:

$$\\Delta S_{\\text{universe}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} \\geq 0$$

Equality holds for reversible processes; strict inequality for irreversible processes.

### 3.3 Boltzmann's Entropy

The microscopic meaning of entropy:

$$S = k_B \\ln\\Omega$$

where $\\Omega$ is the number of **microstates** (microscopic configurations) consistent with the macroscopic state. This connects thermodynamics to statistical mechanics — entropy is maximized when the system explores the maximum number of configurations.

### 3.4 Entropy Changes

| Process | $\\Delta S$ |
|---|---|
| Isothermal expansion of ideal gas | $nR\\ln(V_f/V_i)$ |
| Heating at constant P | $nC_P\\ln(T_f/T_i)$ |
| Phase transition | $Q_{\\text{lat}}/T$ |
| Mixing of ideal gases | $-nR\\sum_i x_i \\ln x_i$ (always positive) |
`
      },
      {
        heading: "4. Thermodynamic Potentials",
        level: 2,
        content: `
For different constraints, different state functions are minimized at equilibrium.

| Constraint | Potential | Definition | Equilibrium condition |
|---|---|---|---|
| $S, V$ fixed | Internal energy $U$ | — | $dU = 0$ (minimum) |
| $T, V$ fixed | Helmholtz $F = A$ | $F = U - TS$ | $dF = 0$ (minimum) |
| $T, P$ fixed | Gibbs $G$ | $G = H - TS = U + PV - TS$ | $dG = 0$ (minimum) |
| $S, P$ fixed | Enthalpy $H$ | $H = U + PV$ | $dH = 0$ (minimum) |

**Gibbs Free Energy and Spontaneity:**

$$\\Delta G = \\Delta H - T\\Delta S$$

- $\\Delta G < 0$: spontaneous at constant $T,P$
- $\\Delta G = 0$: equilibrium
- $\\Delta G > 0$: non-spontaneous (reverse is spontaneous)

**Maxwell Relations** (from equality of mixed partial derivatives):

$$\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V, \\quad \\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P$$

$$\\left(\\frac{\\partial S}{\\partial V}\\right)_T = \\left(\\frac{\\partial P}{\\partial T}\\right)_V, \\quad \\left(\\frac{\\partial S}{\\partial P}\\right)_T = -\\left(\\frac{\\partial V}{\\partial T}\\right)_P$$
`
      },
      {
        heading: "5. Heat Engines, Refrigerators, and Heat Pumps",
        level: 2,
        content: `
### Heat Engines

**Efficiency:** $\\eta = W/Q_H = 1 - Q_C/Q_H \\leq 1 - T_C/T_H$

**Otto Cycle** (gasoline engine): two adiabatics + two isochorics.

$\\eta_{\\text{Otto}} = 1 - r^{1-\\gamma}$ where $r = V_{\\text{max}}/V_{\\text{min}}$ is the compression ratio.

**Diesel Cycle:** Adiabatic compression to higher ratio than Otto, then isobaric combustion.

**Rankine Cycle:** Used in steam turbines — water evaporated, expanded, condensed, pumped.

### Refrigerators and Heat Pumps

A refrigerator moves heat from cold to hot, requiring work input:

**Coefficient of Performance (COP):**

$$\\text{COP}_{\\text{refrigerator}} = \\frac{Q_C}{W} = \\frac{Q_C}{Q_H - Q_C} \\leq \\frac{T_C}{T_H - T_C}$$

$$\\text{COP}_{\\text{heat pump}} = \\frac{Q_H}{W} = \\frac{Q_H}{Q_H - Q_C} \\leq \\frac{T_H}{T_H - T_C}$$

Note: $\\text{COP}_{\\text{HP}} = \\text{COP}_{\\text{ref}} + 1$
`
      },
      {
        heading: "6. Phase Transitions",
        level: 2,
        content: `
**Phase transitions** occur when matter changes between solid, liquid, and gas phases.

### Latent Heat

During a phase transition, heat is absorbed or released without temperature change:

$$Q = mL$$

| Transition | Name | $L$ for water |
|---|---|---|
| Solid → Liquid | Melting (fusion) | $334\\,\\text{kJ/kg}$ |
| Liquid → Gas | Vaporization | $2257\\,\\text{kJ/kg}$ |
| Solid → Gas | Sublimation | — |

### The Phase Diagram

The **P-T phase diagram** shows which phase is stable at each $P,T$:
- **Triple point:** All three phases coexist (for water: $T = 273.16\\,\\text{K}$, $P = 611\\,\\text{Pa}$)
- **Critical point:** Above this, liquid and gas phases are indistinguishable (supercritical fluid)

**Clausius-Clapeyron equation** (slope of phase boundaries):

$$\\frac{dP}{dT} = \\frac{L}{T\\Delta v}$$

where $\\Delta v$ is the specific volume change during the transition.
`
      }
    ],
    keyFormulas: [
      { name: 'First Law', latex: '\\Delta U = Q - W', description: "Energy conservation" },
      { name: 'Carnot Efficiency', latex: '\\eta_{max} = 1 - T_C/T_H', description: "Maximum engine efficiency" },
      { name: 'Entropy (Clausius)', latex: 'dS = \\delta Q_{rev}/T', description: "Entropy definition" },
      { name: 'Boltzmann Entropy', latex: 'S = k_B\\ln\\Omega', description: "Statistical mechanics meaning" },
      { name: 'Gibbs Free Energy', latex: 'G = H - TS,\\; \\Delta G = \\Delta H - T\\Delta S', description: "Spontaneity criterion" },
      { name: 'Ideal Gas Law', latex: 'PV = nRT', description: "Equation of state" },
    ],
    practiceProblems: [
      {
        question: "A Carnot engine operates between 600 K and 300 K. If it absorbs 1000 J of heat from the hot reservoir, find the work done and the heat rejected.",
        hint: "Use $\\eta = 1 - T_C/T_H$ and energy conservation.",
        answer: '$\\eta = 1 - 300/600 = 0.5$. $W = \\eta Q_H = 500\\,\\text{J}$. $Q_C = Q_H - W = 500\\,\\text{J}$.'
      },
      {
        question: "Calculate the entropy change when 2 moles of an ideal monatomic gas expand isothermally and reversibly from 5 L to 10 L at 300 K.",
        hint: "For reversible isothermal expansion, $Q = W = nRT\\ln(V_f/V_i)$.",
        answer: '$\\Delta S = Q/T = nR\\ln(V_f/V_i) = 2 \\times 8.314 \\times \\ln 2 = 11.53\\,\\text{J/K}$.'
      },
      {
        question: "Is the reaction $\\Delta H = -200\\,\\text{kJ/mol}$, $\\Delta S = -100\\,\\text{J/mol·K}$ spontaneous at (a) 300 K and (b) 3000 K?",
        hint: "Compute $\\Delta G = \\Delta H - T\\Delta S$ at each temperature.",
        answer: '(a) $\\Delta G = -200000 - 300(-100) = -170\\,\\text{kJ/mol} < 0$. Spontaneous. (b) $\\Delta G = -200000 - 3000(-100) = +100\\,\\text{kJ/mol} > 0$. Not spontaneous.'
      }
    ]
  },

  // ── Organic Chemistry ──────────────────────
  organic: {
    id: 'organic',
    title: 'Organic Chemistry',
    subject: 'chemistry',
    difficulty: 'Intermediate',
    estimatedReadTime: 60,
    sections: [
      {
        heading: "Organic Chemistry: The Chemistry of Carbon",
        level: 1,
        content: `
Organic chemistry is the study of carbon-containing compounds — over 10 million of them are known, more than all other elements combined. Carbon's unique ability to form four stable covalent bonds, bond to itself in chains, rings, and networks of any length, and interact with hydrogen, oxygen, nitrogen, sulfur, halogens, and metals makes it the basis of all known life.

Understanding organic chemistry requires mastering both structure (how atoms are bonded) and reactivity (how and why bonds form and break).
`
      },
      {
        heading: "1. Structure and Bonding",
        level: 2,
        content: `
### 1.1 Hybridization of Carbon

| Hybridization | Geometry | Bond angle | Example |
|---|---|---|---|
| $sp^3$ | Tetrahedral | 109.5° | Methane $\\text{CH}_4$ |
| $sp^2$ | Trigonal planar | 120° | Ethylene $\\text{C}_2\\text{H}_4$ |
| $sp$ | Linear | 180° | Acetylene $\\text{C}_2\\text{H}_2$ |

**$sp^3$:** Four equivalent hybrid orbitals, all $\\sigma$ bonds, no $\\pi$ bonds.

**$sp^2$:** Three hybrid orbitals for $\\sigma$ bonds; one unhybridized $p$ orbital overlaps sideways to form a $\\pi$ bond. The $\\pi$ electrons are more available for reaction.

**$sp$:** Two hybrid orbitals; two $p$ orbitals form two $\\pi$ bonds (triple bond = one $\\sigma$ + two $\\pi$).

### 1.2 Formal Charge

$$\\text{Formal charge} = (\\text{valence electrons}) - (\\text{lone pair electrons}) - \\frac{1}{2}(\\text{bonding electrons})$$

### 1.3 Resonance

Resonance structures are different representations of the same molecule where electrons are delocalized. The real molecule is a **resonance hybrid** — a weighted average.

**Benzene** is the classic example: six $\\pi$ electrons delocalized over all six carbons, giving exceptional stability (aromatic stabilization of ~150 kJ/mol).

### 1.4 Nomenclature (IUPAC)

1. Find the longest carbon chain (parent chain)
2. Number to give lowest locants to substituents
3. Name substituents as prefixes (methyl-, ethyl-, chloro-, etc.)
4. Order: alphabetically (ignoring multiplying prefixes)

**Functional group priority order (for suffix naming):** Carboxylic acids > esters > amides > aldehydes > ketones > alcohols > amines > alkenes/alkynes
`
      },
      {
        heading: "2. Stereochemistry",
        level: 2,
        content: `
Stereochemistry describes how atoms are arranged in 3D space.

### 2.1 Constitutional Isomers vs. Stereoisomers

**Constitutional isomers:** Same molecular formula, different connectivity. (Butane vs. isobutane)

**Stereoisomers:** Same connectivity, different spatial arrangement.

### 2.2 Chirality and Enantiomers

A **chiral center** (stereocenter) is a carbon bonded to four *different* groups. The two mirror-image arrangements are **enantiomers** — non-superimposable mirror images, like left and right hands.

**Assigning R/S configuration (CIP rules):**
1. Assign priorities 1–4 to the four groups (higher atomic number = higher priority; for ties, go down the chain)
2. Orient the molecule with the lowest priority (4) pointing away from you
3. If 1→2→3 is clockwise: **R** (rectus); counterclockwise: **S** (sinister)

**Optical activity:** Enantiomers rotate plane-polarized light equally but in opposite directions. $(+)$ or $d$ = dextrorotatory (clockwise); $(-)$ or $l$ = levorotatory.

**Racemic mixture:** Equal amounts of both enantiomers; no net optical rotation.

### 2.3 Diastereomers

Stereoisomers that are **not** mirror images. Compounds with $n$ stereocenters have up to $2^n$ stereoisomers, existing as pairs of enantiomers and sets of diastereomers.

**Meso compounds:** Contain stereocenters but are achiral overall due to an internal mirror plane.

### 2.4 E/Z Isomerism (Alkenes)

Rotation around double bonds is restricted. Substituents on each carbon get CIP priorities:
- **Z** (zusammen = together): high-priority groups on same side
- **E** (entgegen = opposite): high-priority groups on opposite sides
`
      },
      {
        heading: "3. Nucleophilic Substitution: SN1 and SN2",
        level: 2,
        content: `
### 3.1 SN2 (Bimolecular Nucleophilic Substitution)

**Mechanism:** Concerted, single-step — the nucleophile attacks the electrophilic carbon from the backside as the leaving group departs.

**Transition state:** Pentacoordinate carbon, 180° angle between nucleophile and leaving group.

$$\\text{Rate} = k[\\text{Nu}][\\text{RX}]$$

**Features:**
- **Second-order kinetics**: depends on both nucleophile and substrate
- **Inversion of configuration** at the stereocenter (Walden inversion)
- Favored by: primary > secondary > (never tertiary) substrates; strong nucleophiles; polar aprotic solvents (DMF, DMSO, acetone — they don't solvate the nucleophile); good leaving groups ($I^-$, $Br^-$, $\\text{OTs}^-$)

**Nucleophilicity order (protic solvents):** $I^- > Br^- > Cl^- > F^-$ (polarizability dominates)

**Nucleophilicity (aprotic solvents):** $F^- > Cl^- > Br^- > I^-$ (follows electronegativity)

### 3.2 SN1 (Unimolecular Nucleophilic Substitution)

**Mechanism:** Two-step — (1) slow ionization to form a **carbocation** (rate-determining step), then (2) fast attack by nucleophile.

$$\\text{Rate} = k[\\text{RX}]$$

**Carbocation stability:** Tertiary > Secondary > Primary > Methyl

Because the intermediate carbocation is planar ($sp^2$), the nucleophile can attack from either face, giving a **racemic mixture** (plus some retention if the leaving group partially shields one face).

**Favored by:** Tertiary substrates; weak nucleophiles; polar protic solvents (water, ethanol — they stabilize carbocations by solvation).

**Carbocation rearrangements:** Methyl and hydride shifts to form a more stable carbocation. Watch for rearrangement products in SN1 problems.
`
      },
      {
        heading: "4. Elimination Reactions: E1 and E2",
        level: 2,
        content: `
Elimination reactions remove two substituents to form a $\\pi$ bond (typically an alkene).

### 4.1 E2 (Bimolecular Elimination)

**Mechanism:** Concerted — base abstracts the $\\beta$-H simultaneously as the C–X bond breaks, forming the double bond in one step.

$$\\text{Rate} = k[\\text{Base}][\\text{RX}]$$

**Stereochemistry requirement: anti-periplanar.** The $\\beta$-H and leaving group must be anti (180°) — crucial in cyclic systems (only *trans* diaxial elimination).

**Saytzeff's Rule:** Major product is the **more substituted** (more stable) alkene.

**Hofmann's Rule:** With bulky bases ($t$-BuO$K^+$), less substituted alkene is favored (steric reasons).

### 4.2 E1 (Unimolecular Elimination)

**Mechanism:** Two-step (same first step as SN1) — carbocation forms, then base removes a $\\beta$-H.

$$\\text{Rate} = k[\\text{RX}]$$

Often competes with SN1 under similar conditions. Temperature and base concentration favor E1 over SN1.

### 4.3 Summary: SN1, SN2, E1, or E2?

| Condition | Favors |
|---|---|
| Primary substrate + strong Nu + polar aprotic | SN2 |
| Secondary substrate + strong base + high T | E2 |
| Tertiary substrate + strong base | E2 |
| Tertiary substrate + weak Nu/base + protic | SN1/E1 |
`
      },
      {
        heading: "5. Addition to Alkenes and Alkynes",
        level: 2,
        content: `
Alkenes (C=C) and alkynes (C≡C) react via **electrophilic addition** — the $\\pi$ electrons act as a nucleophile toward electrophiles.

### 5.1 Markovnikov's Rule

In addition of $\\text{HX}$ (HCl, HBr, HI) to an unsymmetrical alkene:

> The proton (H) adds to the carbon bearing **more hydrogens**; the halide adds to the carbon bearing **fewer hydrogens**.

**Mechanism:** Proton adds first to give the *more stable* carbocation; then $X^-$ attacks.

**Anti-Markovnikov** (radical addition with $\\text{HBr}$ and peroxides): Br• adds to the less substituted carbon (radical stability follows same order as carbocation, but the selectivity is reversed in the mechanism).

### 5.2 Key Addition Reactions

| Reaction | Reagent | Product | Stereo |
|---|---|---|---|
| Hydrohalogenation | $\\text{HX}$ | Alkyl halide | Markovnikov |
| Halogenation | $\\text{X}_2$/CCl$_4$ | Vicinal dihalide | Anti addition |
| Hydration | $\\text{H}_2\\text{O}/\\text{H}^+$ | Alcohol | Markovnikov |
| Hydroboration | 1. $\\text{BH}_3$; 2. $\\text{H}_2\\text{O}_2/\\text{OH}^-$ | Alcohol | Anti-Markovnikov, syn |
| Epoxidation | $m$-CPBA | Epoxide | Syn |
| OsO$_4$ dihydroxylation | $\\text{OsO}_4$, $\\text{NMO}$ | Diol | Syn |
| Ozonolysis | 1. $\\text{O}_3$; 2. $\\text{Me}_2\\text{S}$ | Ketones/aldehydes | — |

### 5.3 Carbene Reactions

Carbenes ($:CR_2$) are highly reactive intermediates with 6 valence electrons. They add to alkenes to give cyclopropanes in a **syn** stereospecific manner.
`
      },
      {
        heading: "6. Aromatic Chemistry",
        level: 2,
        content: `
### 6.1 Aromaticity — Hückel's Rule

A planar, cyclic, conjugated system with **$4n + 2$ $\\pi$ electrons** (n = 0, 1, 2, ...) is aromatic and is unusually stable.

| $n$ | $\\pi$ electrons | Example |
|---|---|---|
| 0 | 2 | Cyclopropenyl cation $C_3H_3^+$ |
| 1 | 6 | Benzene, pyridine, pyrrole |
| 2 | 10 | Naphthalene, azulene |
| 3 | 14 | Anthracene |

**Anti-aromatic:** $4n$ $\\pi$ electrons — highly destabilized (cyclobutadiene, $n=1$, 4 electrons).

### 6.2 Electrophilic Aromatic Substitution (EAS)

Aromatic rings react with electrophiles not by addition (which would destroy aromaticity) but by **substitution**:

$$\\text{ArH} + \\text{E}^+ \\to \\text{ArE} + \\text{H}^+$$

**Mechanism:**
1. Electrophile attacks the ring, disrupting aromaticity → **arenium ion** (Wheland intermediate)
2. Deprotonation restores aromaticity (fast step)

**Common EAS reactions:**

| Reaction | Reagent | Electrophile |
|---|---|---|
| Halogenation | $\\text{Br}_2/\\text{FeBr}_3$ | $\\text{Br}^+$ |
| Nitration | $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$ | $\\text{NO}_2^+$ |
| Sulfonation | $\\text{SO}_3/\\text{H}_2\\text{SO}_4$ | $\\text{SO}_3$ |
| Friedel-Crafts alkylation | $\\text{RCl}/\\text{AlCl}_3$ | $\\text{R}^+$ |
| Friedel-Crafts acylation | $\\text{RCOCl}/\\text{AlCl}_3$ | $\\text{RCO}^+$ |

### 6.3 Directing Effects

Substituents on benzene direct the incoming electrophile to ortho/para or meta positions:

**Activating, ortho/para directors:** $-\\text{OH}$, $-\\text{OR}$, $-\\text{NH}_2$, $-\\text{NHR}$, $-\\text{R}$ (donate electrons by resonance or induction)

**Deactivating, meta directors:** $-\\text{NO}_2$, $-\\text{CN}$, $-\\text{COOH}$, $-\\text{CHO}$, $-\\text{SO}_3\\text{H}$ (withdraw electrons by resonance — destabilize o/p arenium ions)

**Deactivating, ortho/para directors:** Halogens (withdraw by induction, donate by resonance — weakly)

**Two substituents:** The more powerful director wins; if they reinforce, the yield is usually good.
`
      },
      {
        heading: "7. Carbonyl Chemistry",
        level: 2,
        content: `
The **carbonyl group** (C=O) is the most important functional group in organic chemistry. Its reactivity stems from the polarization: $\\delta^+$ on carbon (electrophilic), $\\delta^-$ on oxygen.

### 7.1 Aldehydes and Ketones: Nucleophilic Addition

Nucleophiles attack the electrophilic carbonyl carbon:

| Reaction | Reagent | Product |
|---|---|---|
| Hydration | $\\text{H}_2\\text{O}$ | Geminal diol |
| Acetal formation | $2\\,\\text{ROH}/\\text{H}^+$ | Acetal (protecting group) |
| Reduction | $\\text{NaBH}_4$ | Primary/secondary alcohol |
| Reduction (all C=O) | $\\text{LiAlH}_4$ | Primary alcohol |
| Grignard | $\\text{RMgX}$ then $\\text{H}_3\\text{O}^+$ | Alcohol |
| Wittig | $\\text{Ph}_3\\text{P=CHR}$ | Alkene |
| Imine (Schiff base) | $\\text{RNH}_2$ | Imine (C=NR) |
| Cyanohydrin | $\\text{HCN}$ | α-Hydroxy nitrile |

### 7.2 $\\alpha$-Carbon Chemistry

The $\\alpha$-H (adjacent to C=O) is acidic due to resonance stabilization of the enolate:

$$\\text{pK}_a \\approx 20 \\text{ (ketone)}, \\quad 17 \\text{ (ester)}, \\quad 10 \\text{ (malonate)}$$

**Aldol condensation:** $\\alpha$-enolate attacks the carbonyl of another molecule:

$$\\text{2 RCHO} \\xrightarrow{\\text{OH}^-} \\beta\\text{-hydroxy aldehyde} \\xrightarrow{\\Delta} \\alpha,\\beta\\text{-unsaturated aldehyde} + \\text{H}_2\\text{O}$$

**Michael addition:** 1,4-addition of a nucleophile to an $\\alpha,\\beta$-unsaturated carbonyl.

**Robinson annulation:** Michael addition + intramolecular aldol condensation → cyclohexenone ring.

### 7.3 Carboxylic Acids and Derivatives

Reactivity order (toward nucleophilic acyl substitution): Acid chloride > Anhydride > Ester > Amide > Carboxylic acid (carboxylate is least reactive).

**Saponification (ester hydrolysis):** $\\text{RCOOR'} + \\text{OH}^- \\to \\text{RCOO}^- + \\text{R'OH}$ (irreversible, gives carboxylate)

**Fisher esterification:** $\\text{RCOOH} + \\text{R'OH} \\rightleftharpoons \\text{RCOOR'} + \\text{H}_2\\text{O}$ (acid-catalyzed, equilibrium)

**Hofmann rearrangement:** Primary amide + $\\text{Br}_2/\\text{OH}^-$ → primary amine (one fewer carbon).
`
      }
    ],
    keyFormulas: [
      { name: 'Rate of SN2', latex: '\\text{Rate} = k[\\text{Nu}^-][\\text{RX}]', description: "Second-order kinetics" },
      { name: 'Rate of SN1/E1', latex: '\\text{Rate} = k[\\text{RX}]', description: "First-order kinetics" },
      { name: "Hückel's Rule", latex: '\\pi\\text{-electrons} = 4n + 2,\\; n = 0,1,2,...', description: "Aromaticity criterion" },
      { name: 'Degree of Unsaturation', latex: '\\text{DBE} = \\frac{2C+2+N-H-X}{2}', description: "Degrees of unsaturation from molecular formula" },
    ],
    practiceProblems: [
      {
        question: "Predict the major product of the reaction of 2-bromo-2-methylbutane with $\\text{NaOH}$ in ethanol at high temperature.",
        hint: "Tertiary substrate, strong base, protic solvent, high T → favors E2. Use Saytzeff's rule.",
        answer: '2-methylbut-2-ene (more substituted alkene) as the major product via E2. Minor products: 2-methylbut-1-ene (E2, Hofmann product) and 2-methyl-2-butanol (SN1 product).'
      },
      {
        question: "What is the product of treating (R)-2-bromobutane with $\\text{NaCN}$ in DMSO?",
        hint: "Strong nucleophile, polar aprotic solvent, secondary substrate → SN2. What happens to stereochemistry?",
        answer: 'SN2 reaction with inversion → (S)-2-methylbutanenitrile. The CN$^-$ attacks from the backside, inverting the configuration at C2.'
      },
      {
        question: "How many degrees of unsaturation does cyclohexene ($\\text{C}_6\\text{H}_{10}$) have?",
        hint: "Apply the formula $\\text{DBE} = (2C+2-H)/2$.",
        answer: '$\\text{DBE} = (2\\times6+2-10)/2 = 4/2 = 2$. One ring + one double bond = 2. ✓'
      }
    ]
  },

  // ── Molecular Genetics ────────────────────
  genetics: {
    id: 'genetics',
    title: 'Molecular Genetics',
    subject: 'biology',
    difficulty: 'Intermediate',
    estimatedReadTime: 55,
    sections: [
      {
        heading: "Molecular Genetics: The Central Dogma and Beyond",
        level: 1,
        content: `
Molecular genetics is the study of the structure and function of genes at a molecular level. It encompasses how genetic information is stored, copied, expressed, and regulated — the mechanistic basis of heredity and evolution.

The **Central Dogma of Molecular Biology** (Crick, 1958) describes the general flow of genetic information:

$$\\text{DNA} \\xrightarrow{\\text{replication}} \\text{DNA} \\xrightarrow{\\text{transcription}} \\text{RNA} \\xrightarrow{\\text{translation}} \\text{Protein}$$
`
      },
      {
        heading: "1. DNA Structure and the Double Helix",
        level: 2,
        content: `
### 1.1 Nucleotide Structure

DNA is a polymer of **deoxyribonucleotides**. Each consists of:
1. **Deoxyribose** sugar (5-carbon)
2. **Phosphate group** (negatively charged)
3. **Nitrogenous base** (one of four)

**Purines** (double-ring): Adenine (A), Guanine (G)

**Pyrimidines** (single-ring): Cytosine (C), Thymine (T) [in DNA], Uracil (U) [in RNA]

### 1.2 The Double Helix

Watson and Crick (1953, using Franklin's X-ray data): DNA is a **right-handed double helix** with:

- Two antiparallel strands (one runs 5'→3', the other 3'→5')
- Phosphodiester backbone on outside; bases inside
- **Base pairing via hydrogen bonds:** A=T (2 H-bonds), G≡C (3 H-bonds)
- **Chargaff's rules:** $[A]=[T]$, $[G]=[C]$
- Pitch = 3.4 nm; 10 base pairs per turn; diameter = 2 nm

**Minor and major grooves** allow proteins to access and "read" DNA without unwinding it.

**DNA forms:**
- **B-DNA:** Most common, right-handed (classical)
- **A-DNA:** Shorter, wider, right-handed; formed in dehydrated conditions
- **Z-DNA:** Left-handed; found in GC-rich regions under high-salt conditions; biological role unclear

### 1.3 Chromatin Structure

In eukaryotes, DNA is packaged into chromatin:

**Nucleosome:** 146 bp DNA wrapped ~1.65 times around an octamer of histone proteins (H2A, H2B, H3, H4 × 2). The "beads on a string" structure.

**Chromatin compaction:**
1. Nucleosome (11-nm fiber) 
2. 30-nm fiber (solenoid of nucleosomes, H1 linker histone)
3. Loops and domains (scaffold proteins)
4. Metaphase chromosome (highly condensed)

**Heterochromatin** (condensed, transcriptionally silent) vs. **Euchromatin** (open, actively transcribed).
`
      },
      {
        heading: "2. DNA Replication",
        level: 2,
        content: `
### 2.1 Key Principles

**Semiconservative replication** (Meselson-Stahl, 1958): Each new DNA molecule consists of one original (parental) strand and one newly synthesized strand.

**Template principle:** Each strand serves as a template for a new complementary strand.

**5'→3' directionality:** DNA polymerase can only synthesize in the 5'→3' direction.

### 2.2 Mechanism (Prokaryotic)

1. **Initiation:** Initiator proteins (DnaA) bind the **origin of replication** (oriC) and recruit the replication machinery. DnaB helicase unwinds DNA, creating a **replication bubble** with two **replication forks**.

2. **Unwinding:** 
   - **Helicase** (DnaB): unwinds the double helix, breaking H-bonds (consumes ATP)
   - **SSBs** (single-strand binding proteins): stabilize single-stranded DNA
   - **Topoisomerase II (Gyrase)**: relieves supercoiling ahead of the fork by introducing negative supercoils

3. **Priming:** RNA primase synthesizes a short RNA primer (~10 nt) complementary to the template (DNA pol III cannot start de novo — it can only extend existing strands).

4. **Elongation:** 
   - **DNA Polymerase III** (the main replicative enzyme): extends the primer, adding nucleotides complementary to the template, 5'→3'.
   - **Leading strand:** Synthesized continuously toward the replication fork.
   - **Lagging strand:** Synthesized discontinuously away from the fork as **Okazaki fragments** (1–2 kb in prokaryotes, 100–200 bp in eukaryotes), each requiring its own RNA primer.

5. **Removal and replacement:**
   - **DNA Pol I** (5'→3' exonuclease activity): removes RNA primers and fills the gaps with DNA.
   - **DNA Ligase**: seals the nicks between Okazaki fragments using NAD$^+$ (prokaryotes) or ATP (eukaryotes).

### 2.3 DNA Polymerase Proofreading

DNA pol III has a **3'→5' exonuclease** activity that excises mismatched bases (just incorporated) and corrects them. This proofreads each base during replication. Combined with subsequent mismatch repair (MMR), the error rate is ~$10^{-10}$ per base pair.

### 2.4 Eukaryotic Replication Differences

- **Multiple origins of replication** (thousands in human genome — otherwise replication would take years)
- **Three main polymerases:** Pol $\\alpha$ (primer synthesis), Pol $\\delta$ (lagging), Pol $\\varepsilon$ (leading)
- **PCNA** clamp protein (equivalent to prokaryotic $\\beta$-clamp): increases processivity
- **Telomeres and telomerase:** Linear chromosomes lose end sequences with each replication. Telomerase (a reverse transcriptase with its own RNA template) extends telomeres in germline and stem cells.
`
      },
      {
        heading: "3. Transcription: DNA to RNA",
        level: 2,
        content: `
### 3.1 Overview

Transcription copies one strand of DNA into RNA. The DNA strand used as template is the **template strand** (antisense); the other is the **coding strand** (sense) — it has the same sequence as the RNA (except T→U).

The RNA product runs 5'→3', complementary and antiparallel to the template.

### 3.2 Prokaryotic Transcription

**RNA Polymerase (RNAP):** Core enzyme ($\\alpha_2\\beta\\beta'\\omega$) + $\\sigma$ (sigma) factor = holoenzyme.

**$\\sigma$ factor** directs RNAP to specific **promoters** — sequences upstream of the gene (at ~−10 and ~−35 from the +1 transcription start site in E. coli).

**Stages:**
1. **Initiation:** Holoenzyme binds promoter → closed complex → open complex (melts ~14 bp of DNA, creating transcription bubble). First ~10 nt synthesized (often unsuccessfully — abortive initiation). Eventually σ releases and elongation begins.
2. **Elongation:** RNAP moves downstream, synthesizing RNA complementarily to the template strand. Transcription bubble (~17 bp) moves with RNAP.
3. **Termination:** 
   - *Intrinsic:* G-C rich palindrome in RNA forms a **stem-loop** (hairpin), causing RNAP to pause; poly-U tail destabilizes the hybrid → RNA released.
   - *Rho-dependent:* Rho protein tracks along RNA, catches up to paused RNAP, and uses ATP to unwind the RNA-DNA hybrid.

### 3.3 Eukaryotic Transcription

**Three RNA polymerases:**
| Polymerase | Product |
|---|---|
| RNA Pol I | rRNA (28S, 18S, 5.8S) |
| RNA Pol II | mRNA (and most lncRNAs, snRNAs) |
| RNA Pol III | tRNA, 5S rRNA, small RNAs |

**Promoters:** TATA box (~−25 from TSS, bound by TATA-binding protein TBP), Inr element, BRE, DPE. General transcription factors (TFIID, TFIIB, TFIIF, etc.) assemble at the core promoter, forming the **pre-initiation complex (PIC)**.

**mRNA Processing (co-transcriptional):**
1. **5' Capping:** 7-methylguanosine cap added — protects from exonucleases, needed for ribosome binding
2. **Splicing:** Introns removed by the **spliceosome** (snRNPs U1, U2, U4, U5, U6). Consensus splice sites: 5' GU...AG 3'. The lariat intermediate. **Alternative splicing** generates multiple proteins from one gene.
3. **3' Polyadenylation:** Cleavage at poly(A) signal (AAUAAA) and addition of ~200 A residues by poly(A) polymerase — protects from 3' exonucleases, aids nuclear export and translation.
`
      },
      {
        heading: "4. Translation: mRNA to Protein",
        level: 2,
        content: `
### 4.1 The Genetic Code

**Codons:** Three-nucleotide sequences in mRNA; $4^3 = 64$ possible codons.
- 61 codons code for 20 amino acids (the genetic code is **degenerate/redundant** — most AAs have multiple codons)
- 3 codons are **stop codons** (UAA, UAG, UGA) — no tRNA reads them; release factors terminate translation

**The code is (nearly) universal:** All known life uses the same genetic code (with minor exceptions in mitochondria, ciliates, etc.), providing strong evidence for common ancestry.

**Wobble hypothesis** (Crick): The 3rd base of the codon can pair less stringently (wobble position), allowing one tRNA to recognize multiple synonymous codons.

### 4.2 Components

**mRNA:** Template; contains 5' UTR, coding sequence (CDS) starting with AUG, 3' UTR, poly(A) tail.

**tRNA:** Adaptor molecules. Cloverleaf secondary structure (L-shaped in 3D). Anticodon loop (reads the codon); 3' CCA-OH end (covalently attached to amino acid by **aminoacyl-tRNA synthetase**).

**Ribosomes:** Large ribonucleoprotein complexes.

| Component | Prokaryote | Eukaryote |
|---|---|---|
| Small subunit | 30S (16S rRNA + 21 proteins) | 40S (18S rRNA) |
| Large subunit | 50S (23S + 5S rRNA + 31 proteins) | 60S (28S + 5.8S + 5S rRNA) |
| Intact ribosome | 70S | 80S |

**Ribosome sites:**
- **A site** (aminoacyl): receives incoming aminoacyl-tRNA
- **P site** (peptidyl): holds growing peptide chain
- **E site** (exit): used tRNA exits here

### 4.3 Mechanism

**Initiation (Prokaryotic):**
1. Small subunit binds mRNA at **Shine-Dalgarno sequence** (purine-rich, ~5–10 nt upstream of AUG, base-pairs with 16S rRNA)
2. fMet-tRNA$^{fMet}$ enters P site, anticodon UAC pairs with AUG start codon
3. Large subunit joins (requires initiation factors IF1, IF2, IF3 + GTP)

**Elongation:**
1. **Codon recognition:** Aminoacyl-tRNA-EF-Tu-GTP complex enters A site. GTP hydrolyzed upon correct codon-anticodon pairing.
2. **Peptide bond formation:** **Peptidyl transferase** (23S rRNA is the ribozyme!) catalyzes transfer of the growing peptide from P-site tRNA to the A-site amino acid.
3. **Translocation:** EF-G-GTP drives ribosome movement one codon 3'; deacylated tRNA moves E→exits; peptidyl-tRNA moves A→P; new A site is empty.

**Termination:** Stop codon in A site is recognized by **release factors** (RF1, RF2 in prokaryotes); RF3-GTP stimulates release. Peptidyl transferase hydrolyzes the peptide from the tRNA, releasing the protein.

### 4.4 Antibiotic Targets

| Antibiotic | Target | Effect |
|---|---|---|
| Streptomycin | 30S | Misreading |
| Tetracycline | 30S A site | Blocks aminoacyl-tRNA entry |
| Chloramphenicol | 50S peptidyl transferase | Blocks peptide bond formation |
| Erythromycin | 50S | Blocks translocation |
`
      },
      {
        heading: "5. Gene Regulation",
        level: 2,
        content: `
### 5.1 Prokaryotic Regulation: The Operon Model

The **lac operon** (Jacob & Monod, 1961 — Nobel Prize) — the textbook example:

**Negative regulation (repressor):** In the absence of lactose, the **lac repressor** binds the **operator** sequence, blocking transcription of lacZ, lacY, lacA (structural genes). Allolactose (derived from lactose) is the **inducer** — it binds the repressor, causing a conformational change that reduces DNA affinity → repressor falls off → transcription proceeds.

**Positive regulation (CAP):** Low glucose levels → high cAMP → cAMP binds **CAP** (catabolite activator protein) → CAP-cAMP complex binds the CAP site → activates transcription. This is **catabolite repression** — E. coli strongly prefers glucose to lactose.

### 5.2 Eukaryotic Regulation

**Chromatin remodeling:** Nucleosomes can block transcription factors. SWI/SNF complexes remodel chromatin using ATP.

**Histone modifications:**
- Acetylation (lysines): loosens chromatin → active transcription (writers: HATs; erasers: HDACs)
- Methylation: can activate or repress depending on which residue
- Phosphorylation (H3S10): associated with mitosis

**Transcription factors:** Sequence-specific DNA-binding proteins.
- **DNA-binding domains:** Zinc finger, homeodomain, helix-turn-helix, leucine zipper, bHLH
- **Activation domains:** Recruit co-activators and Mediator complex → enhance RNA Pol II activity

**Enhancers and silencers:** Cis-regulatory elements that can act from large distances (even 1 Mb away) by DNA looping to contact promoters.

**Post-transcriptional regulation:**
- **miRNA:** ~22 nt, encoded in genome, processed by Drosha and Dicer. RISC complex uses miRNA to target complementary mRNAs for degradation or translational repression.
- **siRNA:** Double-stranded RNA → gene silencing (RNAi); basis of the CRISPR revolution.
`
      },
      {
        heading: "6. Mutation and DNA Repair",
        level: 2,
        content: `
### 6.1 Types of Mutations

| Type | Description |
|---|---|
| **Transition** | Purine↔Purine or Pyrimidine↔Pyrimidine (A-G, C-T) |
| **Transversion** | Purine↔Pyrimidine |
| **Insertion/Deletion (indel)** | Frameshift if not in multiples of 3 |
| **Nonsense** | Creates premature stop codon |
| **Missense** | Changes one amino acid |
| **Silent/Synonymous** | Same amino acid (degeneracy) |

### 6.2 DNA Repair Pathways

| Pathway | Damage repaired | Mechanism |
|---|---|---|
| Direct repair | Pyrimidine dimers, O6-methylG | Photolyase (uses light), MGMT |
| Base excision repair (BER) | Oxidized/deaminated bases | Glycosylase removes base; AP endonuclease, Pol β, Ligase |
| Nucleotide excision repair (NER) | Bulky adducts, UV dimers | 12–30 nt excised, filled, ligated. Defective NER = Xeroderma pigmentosum |
| Mismatch repair (MMR) | Replication errors | MutS recognizes mismatch; MutL, MutH; re-synthesis |
| Homologous recombination (HR) | DSBs | Uses sister chromatid as template (error-free) |
| NHEJ | DSBs | Directly rejoins ends (error-prone, fast) |

### 6.3 CRISPR-Cas9

The bacterial adaptive immune system repurposed as a genome editing tool:

1. **sgRNA** (single guide RNA): ~20 nt complementary to the target DNA + scaffold
2. **Cas9 nuclease**: guided by sgRNA to target site; requires **PAM sequence** (5'-NGG-3' for SpCas9)
3. Cas9 unwinds DNA, creates a **double-strand break** (DSB)
4. Cell repairs via NHEJ (indel, knockout) or HDR with a donor template (precise edit)

Applications: disease modeling, gene therapy, agriculture, diagnostics.
`
      },
      {
        heading: "7. Mendelian and Population Genetics",
        level: 2,
        content: `
### 7.1 Mendelian Inheritance

**Law of Segregation:** Alleles separate during gamete formation. Each gamete carries one allele for each trait.

**Law of Independent Assortment:** Genes on different chromosomes assort independently during meiosis. (Genes on the same chromosome are **linked** and tend to be inherited together, except when separated by **crossing over** during meiosis I.)

**Extensions:**
- **Incomplete dominance:** Heterozygote phenotype is intermediate (e.g., pink from red × white)
- **Codominance:** Both alleles fully expressed (e.g., AB blood type)
- **Epistasis:** One gene masks another (e.g., coat color in mice)
- **Pleiotropy:** One gene affects multiple traits

### 7.2 Hardy-Weinberg Equilibrium

For a population with allele frequencies $p$ (A) and $q$ (a), $p + q = 1$:

$$p^2 + 2pq + q^2 = 1$$

where $p^2$ = freq(AA), $2pq$ = freq(Aa), $q^2$ = freq(aa).

**H-W holds when:** large population, random mating, no mutation, no migration, no natural selection. In reality, these are never perfectly met — deviations reveal evolutionary forces.

**Calculation tip:** If the frequency of a recessive disease is $q^2$, then carrier frequency is $2pq \\approx 2q$ (for rare alleles where $p \\approx 1$).

### 7.3 Linkage and Recombination

**Recombination frequency (RF):** Percentage of recombinant gametes; measures genetic distance.

1 centimorgan (cM) = 1% recombination frequency.

Genes on the same chromosome are **linked** (RF < 50%). Genes 50 cM apart behave as if unlinked (independent assortment) due to obligate crossovers.
`
      }
    ],
    keyFormulas: [
      { name: 'Hardy-Weinberg', latex: 'p^2 + 2pq + q^2 = 1,\\; p + q = 1', description: "Allele frequency equilibrium" },
      { name: 'Michaelis-Menten', latex: 'v = V_{max}[S]/(K_m + [S])', description: "Enzyme kinetics" },
      { name: 'Degrees of freedom (genetics)', latex: '\\chi^2 = \\sum \\frac{(O-E)^2}{E}', description: "Chi-squared test for goodness of fit" },
    ],
    practiceProblems: [
      {
        question: "In a population, 9% of individuals have phenylketonuria (PKU, autosomal recessive). What fraction of the population are carriers?",
        hint: "Use Hardy-Weinberg: q² = 0.09. Find q, then p, then 2pq.",
        answer: '$q^2 = 0.09 \\implies q = 0.3$. $p = 1-0.3 = 0.7$. Carrier frequency $= 2pq = 2(0.7)(0.3) = 0.42 = 42\\%$.'
      },
      {
        question: "A dihybrid cross $AaBb \\times AaBb$ is performed. What fraction of offspring are expected to be $A\\_bb$ (one dominant A allele, homozygous recessive b)?",
        hint: "Analyze each gene separately, then multiply probabilities.",
        answer: '$P(A\\_) = 3/4$, $P(bb) = 1/4$. Combined: $(3/4)(1/4) = 3/16$.'
      }
    ]
  },

};
