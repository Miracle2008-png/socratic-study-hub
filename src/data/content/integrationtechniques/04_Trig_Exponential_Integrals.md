# 4. Trigonometric, Exponential, and Logarithmic Integrals

The Reverse Power Rule handles polynomial functions, which are great for modeling simple geometric shapes and static loads. However, the real world of engineering is dynamic. It is filled with sinusoidal waves (alternating current, mechanical vibrations, sound waves), exponential growth and decay (capacitor discharging, radioactive decay, thermal cooling), and logarithmic relationships (signal attenuation in decibels, thermodynamic entropy). 

Mastering the integration of these non-algebraic functions is fundamental. It allows you to calculate the total energy dissipated by a resistor over time, find the root-mean-square (RMS) voltage of an AC signal, or determine the time required for a system to reach thermal equilibrium.

### The $1/x$ Exception (Natural Logarithm)
In our previous discussion of the Reverse Power Rule, we noted a critical exception: $n = -1$ leads to division by zero ($\frac{x^0}{0}$). 
To solve $\int x^{-1} \, dx = \int \frac{1}{x} \, dx$, we must look to logarithms. Recall that the derivative of the natural logarithm, $\ln(x)$, is precisely $\frac{1}{x}$. When integrating, we use absolute value bars to ensure the argument of the logarithm remains positive, preserving the domain of the function.

$$ \int \frac{1}{x} \, dx = \ln|x| + C $$

*Engineering Context:* This integral frequently appears in fluid dynamics (e.g., calculating velocity profiles in pipes) and thermodynamics (e.g., calculating the work done during isothermal expansion of an ideal gas, where Work $= \int \frac{nRT}{V} \, dV$).

### The Exponential Rules
The natural exponential function, $e^x$, is mathematically unique because it is its own derivative. Consequently, it is also its own antiderivative.

$$ \int e^x \, dx = e^x + C $$

For exponential functions with a general base $a$ (where $a > 0$ and $a \neq 1$), we must account for the scaling factor $\ln(a)$:

$$ \int a^x \, dx = \frac{a^x}{\ln(a)} + C $$

*Engineering Context:* Exponential integrals are vital in control systems and circuit analysis. For example, integrating the current $i(t) = I_0 e^{-t/\tau}$ across a capacitor yields the total charge accumulated over time.

### Basic Trigonometric Integrals
To integrate trigonometric functions, think of the derivative rules in reverse. Pay special attention to the negative signs, as they are a common source of error. Since $\frac{d}{dx}\cos(x) = -\sin(x)$, it follows that the integral of positive $\sin(x)$ must yield a negative $\cos(x)$.

1.  $$ \int \cos(x) \, dx = \sin(x) + C $$
2.  $$ \int \sin(x) \, dx = -\cos(x) + C $$
3.  $$ \int \sec^2(x) \, dx = \tan(x) + C $$
4.  $$ \int \sec(x)\tan(x) \, dx = \sec(x) + C $$
5.  $$ \int \csc(x)\cot(x) \, dx = -\csc(x) + C $$
6.  $$ \int \csc^2(x) \, dx = -\cot(x) + C $$

*Engineering Context:* Integrating trigonometric functions is essential when analyzing harmonic oscillators (spring-mass systems) and in Fourier analysis, which decomposes complex signals into sums of simple sines and cosines.

---

### Worked Examples

#### Example 1: Easy - Exponential Discharge
**Problem:** Calculate the indefinite integral of the current function $i(t) = 5e^t - 3\sin(t)$.

**Solution:**
We can use the linearity property of integrals to split this into two parts and integrate term by term.
1. Separate the integral:
   $$ \int (5e^t - 3\sin(t)) \, dt = 5\int e^t \, dt - 3\int \sin(t) \, dt $$
2. Apply the exponential and trigonometric rules:
   $$ = 5(e^t) - 3(-\cos(t)) + C $$
3. Simplify:
   $$ = 5e^t + 3\cos(t) + C $$

#### Example 2: Medium - Definite Integral of a Sine Wave (Total Displacement)
**Problem:** A particle's velocity is given by $v(t) = \sin(t)$ m/s. Find the total displacement of the particle from $t = 0$ to $t = \pi$ seconds.

**Solution:**
Displacement is the definite integral of velocity over time.
1. Set up the definite integral:
   $$ \text{Displacement} = \int_{0}^{\pi} \sin(t) \, dt $$
2. Find the general antiderivative:
   $$ \int \sin(t) \, dt = -\cos(t) $$
3. Apply the Fundamental Theorem of Calculus:
   $$ [-\cos(t)]_{0}^{\pi} = (-\cos(\pi)) - (-\cos(0)) $$
4. Substitute the known trigonometric values ($\cos(\pi) = -1$, $\cos(0) = 1$):
   $$ = (-(-1)) - (-1) = 1 + 1 = 2 \text{ meters} $$
The area under a single arch of a sine wave is exactly 2 units.

#### Example 3: Hard - General Base Exponential Work
**Problem:** Evaluate the definite integral $\int_{1}^{3} 2^x \, dx$. This could represent the total energy consumed by a system whose power draw doubles every second.

**Solution:**
1. Identify the rule for a general base exponential: $\int a^x \, dx = \frac{a^x}{\ln(a)}$. Here, $a = 2$.
2. Apply the rule to find the antiderivative:
   $$ \int 2^x \, dx = \frac{2^x}{\ln(2)} $$
3. Evaluate from bounds 1 to 3:
   $$ \left[ \frac{2^x}{\ln(2)} \right]_{1}^{3} = \frac{2^3}{\ln(2)} - \frac{2^1}{\ln(2)} $$
4. Simplify the expression:
   $$ = \frac{8}{\ln(2)} - \frac{2}{\ln(2)} = \frac{6}{\ln(2)} \approx 8.656 $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Trig, Exp & Log Integrals",
        "icon": "BrainCircuit",
        "description": "Handling non-algebraic continuous functions."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Logarithmic Functions",
        "icon": "Activity",
        "description": "Integrating 1/x to get ln|x|. Crucial for thermodynamics."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Exponential Growth/Decay",
        "icon": "TrendingUp",
        "description": "Integrating e^x and a^x. Used in RC circuits."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Trigonometric Oscillations",
        "icon": "Waves",
        "description": "Sines and cosines. Key to AC power and vibrations."
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
