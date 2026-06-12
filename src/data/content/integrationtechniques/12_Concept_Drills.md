# 12. Concept Drills: Mastery of Applications

Test your mastery of advanced integration techniques, improper integrals, and engineering applications. Select your answer to immediately reveal the rigorous mathematical explanation. Let's build that deep intuition.

```drill
Question: Evaluate the following Improper Integral representing the potential of a conservative force field over an infinite domain: $\int_{1}^{\infty} e^{-2x} dx$
Options:
A) Diverges to $\infty$
B) Converges to $e^{-2}$
C) Converges to $\frac{1}{2e^2}$
D) Converges to $0$
Answer: C
Explanation: The integral spans to infinity, so we must set it up as a limit: 
$\lim_{t \to \infty} \int_{1}^{t} e^{-2x} dx$.
Integrate using U-Substitution ($u = -2x, du = -2dx$): 
$\lim_{t \to \infty} \left[ -\frac{1}{2}e^{-2x} \right]_{1}^{t}$.
Evaluate the bounds: 
$\lim_{t \to \infty} \left( -\frac{1}{2}e^{-2t} - \left(-\frac{1}{2}e^{-2(1)}\right) \right)$.
Simplify and evaluate the limit: 
$\lim_{t \to \infty} \left( \frac{1}{2e^2} - \frac{1}{2e^{2t}} \right)$.
As $t \to \infty$, the term $\frac{1}{2e^{2t}} \to 0$. The result is $\frac{1}{2e^2}$. The integral converges perfectly.
```

```drill
Question: You are designing a custom wave-guide. You need to find the cross-sectional area enclosed between the curves $y = \sin(x)$ and $y = \cos(x)$ in the interval $[0, \frac{\pi}{4}]$. What is the area?
Options:
A) $\sqrt{2} - 1$
B) $1 - \sqrt{2}$
C) $1$
D) $\sqrt{2}$
Answer: A
Explanation: First, identify which curve is the upper boundary on the interval $[0, \frac{\pi}{4}]$. In this range, $\cos(x) \ge \sin(x)$.
Set up the integral for the area between curves:
$A = \int_{0}^{\pi/4} (\cos(x) - \sin(x)) dx$.
Find the antiderivatives:
$A = \left[ \sin(x) + \cos(x) \right]_{0}^{\pi/4}$.
Evaluate the upper and lower bounds:
$A = \left( \sin(\frac{\pi}{4}) + \cos(\frac{\pi}{4}) \right) - \left( \sin(0) + \cos(0) \right)$.
Substitute the trigonometric values:
$A = \left( \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} \right) - (0 + 1) = \sqrt{2} - 1$.
```

```drill
Question: A mechanical component is formed by revolving the region bounded by $y = x^2$, $y = 4$, and $x = 0$ around the y-axis. Which integral correctly computes its volume using the Disk Method?
Options:
A) $\pi \int_{0}^{4} y^2 dy$
B) $\pi \int_{0}^{4} y dy$
C) $2\pi \int_{0}^{2} x(4-x^2) dx$
D) $\pi \int_{0}^{2} (x^2)^2 dx$
Answer: B
Explanation: We are revolving around the y-axis and using the Disk Method, meaning we must integrate with respect to $y$ (slicing perpendicular to the y-axis).
The radius of a circular disk slice at height $y$ is the x-coordinate of the curve.
From $y = x^2$, we solve for $x$ to find the radius function: $x = \sqrt{y}$.
The volume of one disk is $\pi (R(y))^2 dy = \pi (\sqrt{y})^2 dy = \pi y dy$.
The bounds for $y$ are from the bottom vertex $y=0$ to the top line $y=4$.
Thus, the volume is $\pi \int_{0}^{4} y dy$. Option C is mathematically equivalent but uses the Cylindrical Shells method, not the Disk Method. Option B is correct.
```

```drill
Question: A Hookean spring with a natural length of $0.2\text{ m}$ requires $10\text{ N}$ of force to hold it stretched to a length of $0.3\text{ m}$. Calculate the total work required to stretch it from $0.3\text{ m}$ to $0.5\text{ m}$.
Options:
A) $1.6\text{ J}$
B) $0.8\text{ J}$
C) $10\text{ J}$
D) $4\text{ J}$
Answer: D
Explanation: Hooke's Law states $F(x) = kx$, where $x$ is the extension beyond natural length.
First, find the spring constant $k$. A length of $0.3\text{ m}$ corresponds to an extension of $x = 0.3 - 0.2 = 0.1\text{ m}$.
$10 = k(0.1) \implies k = 100 \text{ N/m}$. The force function is $F(x) = 100x$.
Work is the integral of Force over the extension distance. The integration bounds must be the *extensions*.
Lower bound: $x_1 = 0.3 - 0.2 = 0.1\text{ m}$.
Upper bound: $x_2 = 0.5 - 0.2 = 0.3\text{ m}$.
$W = \int_{0.1}^{0.3} 100x dx = 100 \left[ \frac{x^2}{2} \right]_{0.1}^{0.3} = 50(0.3^2 - 0.1^2)$.
$W = 50 (0.09 - 0.01) = 50(0.08) = 4\text{ Joules}$.
```

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Concept Mastery",
        "icon": "Target",
        "description": "Test your deep understanding."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Improper Integrals",
        "icon": "Infinity",
        "description": "Limits and infinity practice."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Area & Volume",
        "icon": "Cylinder",
        "description": "Washers, Disks, Shells."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Physics Applications",
        "icon": "Zap",
        "description": "Work, Force, and Energy."
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "1",
      "target": "4",
      "animated": true
    }
  ]
}
```
