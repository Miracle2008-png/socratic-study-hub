# 4. Trigonometric, Exponential, and Logarithmic Integrals

The Reverse Power Rule handles polynomials, but engineering heavily relies on sinusoidal waves, exponential growth, and logarithmic decay. You must memorize these fundamental antiderivatives.

### The 1/x Exception (Natural Log)
In the previous section, the Reverse Power Rule explicitly excluded $n = -1$, because $\frac{x^0}{0}$ is undefined. 
Recall that the derivative of $\ln(x)$ is $\frac{1}{x}$. Therefore, the integral of $\frac{1}{x}$ is the natural logarithm. We use absolute value bars to ensure the domain remains valid (since $\ln$ is only defined for positive numbers).
$$ \int \frac{1}{x} \, dx = \ln|x| + C $$

### The Exponential Rule
Because the derivative of $e^x$ is $e^x$, it remains entirely immune to integration as well.
$$ \int e^x \, dx = e^x + C $$

For a general base $a$:
$$ \int a^x \, dx = \frac{a^x}{\ln(a)} + C $$

### Basic Trigonometric Integrals
Read the trigonometric derivative rules backwards. Pay very close attention to the negative signs. Since the derivative of $\cos(x)$ is $-\sin(x)$, the integral of positive $\sin(x)$ must be negative $\cos(x)$.

1.  $$ \int \cos(x) \, dx = \sin(x) + C $$
2.  $$ \int \sin(x) \, dx = -\cos(x) + C $$
3.  $$ \int \sec^2(x) \, dx = \tan(x) + C $$
4.  $$ \int \sec(x)\tan(x) \, dx = \sec(x) + C $$
5.  $$ \int \csc(x)\cot(x) \, dx = -\csc(x) + C $$
6.  $$ \int \csc^2(x) \, dx = -\cot(x) + C $$

### Worked Example: Definite Trig Integral
**Problem:** Evaluate the area under one arch of the sine wave: $\int_{0}^{\pi} \sin(x) \, dx$.

**Solution:**
1. Find the general antiderivative:
   $$ \int \sin(x) \, dx = -\cos(x) $$
2. Apply the Fundamental Theorem of Calculus (evaluate from $0$ to $\pi$):
   $$ [-\cos(x)]_{0}^{\pi} = (-\cos(\pi)) - (-\cos(0)) $$
3. Substitute the trigonometric values ($\cos(\pi) = -1$, $\cos(0) = 1$):
   $$ = (-(-1)) - (-1) $$
   $$ = 1 + 1 = 2 $$
The exact area under a single arch of a sine wave is exactly 2.


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Trig Exponential Integrals",
        "icon": "BrainCircuit",
        "description": "Core Concept: Trig Exponential Integrals"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Fundamental Theorem",
        "icon": "ArrowRightCircle",
        "description": "Linking derivatives and integrals."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "U-Substitution",
        "icon": "ArrowRightCircle",
        "description": "Reverse chain rule."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Integration by Parts",
        "icon": "CheckCircle",
        "description": "Reverse product rule."
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
