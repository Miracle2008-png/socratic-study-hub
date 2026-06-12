# 12. Concept Drills

Test your engineering intuition and mathematical rigor regarding Limits & Continuity. Select your answer to immediately reveal the step-by-step mathematical correction.

```drill
Question: (Easy) Evaluate the limit representing the initial state of a chemical concentration: $\lim_{x \to 5} \frac{x^2 - 25}{x - 5}$
Options:
A) $0$
B) $5$
C) $10$
D) Undefined
Answer: C
Explanation: Direct substitution yields $\frac{5^2 - 25}{5 - 5} = \frac{0}{0}$, which is an indeterminate form. 
We must algebraically manipulate the expression. Factor the numerator using the difference of squares:
$$ \frac{x^2 - 25}{x - 5} = \frac{(x-5)(x+5)}{x-5} $$
Cancel the common $(x-5)$ term. This geometrically represents "filling the hole" at $x=5$:
$$ \lim_{x \to 5} (x + 5) $$
Now, substitute $x=5$:
$$ 5 + 5 = 10 $$
The limit is 10.
```

```drill
Question: (Medium) Determine the horizontal asymptote of the transfer function for a low-pass filter: $H(s) = \frac{3s^4 - 2s^2 + 7}{8s^4 + 5s^3 - s}$
Options:
A) $y = 0$
B) $y = \frac{3}{8}$
C) $y = \frac{7}{-1}$
D) No horizontal asymptote
Answer: B
Explanation: To find the horizontal asymptote (steady-state gain as frequency goes to infinity), evaluate the limit as $s \to \infty$: $\lim_{s \to \infty} H(s)$.
Since we are dealing with a rational function (a polynomial divided by a polynomial), we compare the highest degree terms in the numerator and denominator.
Highest degree of the numerator: $s^4$ (coefficient is 3).
Highest degree of the denominator: $s^4$ (coefficient is 8).
Because the degrees are exactly identical ($4 = 4$), the polynomials grow at the exact same rate as $s \to \infty$. The limit is simply the ratio of their leading coefficients.
$$ y = \frac{3}{8} $$
```

```drill
Question: (Hard) Evaluate the limit using L'Hôpital's Rule for a complex stress gradient: $\lim_{x \to 0} \frac{e^{3x} - 1 - 3x}{x^2}$
Options:
A) $0$
B) $1.5$
C) $3$
D) $4.5$
Answer: D
Explanation: Step 1: Direct substitution.
$$ \frac{e^0 - 1 - 0}{0} = \frac{1 - 1}{0} = \frac{0}{0} $$
This is an indeterminate form, so L'Hôpital's Rule applies. Differentiate numerator and denominator. Remember the chain rule for $e^{3x}$!
Derivative of numerator: $\frac{d}{dx}(e^{3x} - 1 - 3x) = 3e^{3x} - 3$
Derivative of denominator: $\frac{d}{dx}(x^2) = 2x$
New limit: $\lim_{x \to 0} \frac{3e^{3x} - 3}{2x}$

Step 2: Substitute $x=0$ again.
$$ \frac{3e^0 - 3}{0} = \frac{3 - 3}{0} = \frac{0}{0} $$
Still indeterminate! We must apply L'Hôpital's Rule a second time.

Step 3: Differentiate again.
Derivative of numerator: $\frac{d}{dx}(3e^{3x} - 3) = 9e^{3x}$
Derivative of denominator: $\frac{d}{dx}(2x) = 2$
New limit: $\lim_{x \to 0} \frac{9e^{3x}}{2}$

Step 4: Substitute $x=0$.
$$ \frac{9e^0}{2} = \frac{9(1)}{2} = 4.5 $$
The limit is 4.5.
```

```drill
Question: (Challenge) A thermodynamic valve opens at $T=4$. The flow rate is $Q(T) = \frac{T^2 - 16}{T - 4}$. For the process to be continuous at $T=4$, what must the flow rate $Q(4)$ be explicitly defined as?
Options:
A) $0$
B) $4$
C) $8$
D) It cannot be continuous
Answer: C
Explanation: For a function to be continuous at $T=4$, the explicitly defined value of the function $Q(4)$ must perfectly match the limit of the function as $T$ approaches 4.
Let's find the limit:
$$ \lim_{T \to 4} \frac{T^2 - 16}{T - 4} $$
Direct substitution yields $\frac{0}{0}$ (indeterminate).
Factor the numerator:
$$ \lim_{T \to 4} \frac{(T - 4)(T + 4)}{T - 4} $$
Cancel the $(T - 4)$ terms:
$$ \lim_{T \to 4} (T + 4) = 4 + 4 = 8 $$
The limit as $T$ approaches 4 is 8. Therefore, to ensure continuity and prevent a mathematical "hole" (which would represent a physical failure in the valve model), the system must explicitly define $Q(4) = 8$.
```


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Read Problem",
        "icon": "BookOpen",
        "description": "Identify Engineering Context"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Formulate Method",
        "icon": "BrainCircuit",
        "description": "Select math tool (Limit, IVT, L'Hôpital)"
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Execute Steps",
        "icon": "PenTool",
        "description": "Algebra, Derivatives, Substitution"
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Verify Solution",
        "icon": "CheckCircle",
        "description": "Check physical meaning & units"
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
