# Stability Analysis and the Routh Array

The single most important question a control engineer must answer before turning on a new automated plant is: **Will this system be stable?**

If a control loop is unstable, any minor disturbance (a gust of wind, a slight drop in steam pressure) will cause the system to oscillate wildly. The valves will thrash open and closed, the temperature will swing violently, and the plant will eventually trip offline or explode.

## 1. The Mathematical Definition of Stability

A dynamic system is mathematically **stable** if its response to a bounded input (like a step change) eventually settles down to a steady, finite value.
It is **unstable** if the response grows exponentially toward infinity.

How do we predict this using transfer functions? It all comes down to the **Characteristic Equation** of the closed loop:
$$ 1 + G_{loop}(s) = 0 $$
*(where $G_{loop}$ is the product of all blocks in the loop: $G_c G_v G_p G_m$)*.

This characteristic equation is a polynomial in $s$ (e.g., $s^3 + 4s^2 + s + 2 = 0$).
To determine stability, we must find the roots of this polynomial (the values of $s$ that make the equation zero). These roots are called the **Poles** of the closed-loop transfer function.

### The Pole Criterion
*   If **ALL** the roots (poles) have a **negative real part**, the system is unconditionally **STABLE**. In the time domain, a negative real root translates to a decaying exponential ($e^{-3t}$), meaning oscillations will eventually die out.
*   If **ANY** root has a **positive real part**, the system is **UNSTABLE**. Even a single positive root translates to a growing exponential ($e^{+3t}$), meaning the process will violently run away to infinity.
*   If a root lies exactly on the imaginary axis (real part = 0), the system is marginally stable (it oscillates forever as a perfect sine wave without growing or decaying).

## 2. The Routh-Hurwitz Stability Criterion

Finding the roots of a 1st or 2nd order polynomial is easy (use the quadratic formula). But what if your chemical plant has a 5th order characteristic equation?
$$ a_5 s^5 + a_4 s^4 + a_3 s^3 + a_2 s^2 + a_1 s + a_0 = 0 $$
Before the invention of computers, finding these roots was nearly impossible. 

In 1875, Edward Routh invented a brilliant mathematical trick to determine *if* any positive roots exist, without actually having to calculate what they are.

### Step 1: Necessary Condition
For the system to be stable, **all coefficients** ($a_5, a_4, \dots, a_0$) must be positive and non-zero. If any coefficient is negative or missing (zero), stop immediately. The system is inherently unstable.

### Step 2: The Routh Array
If all coefficients are positive, you construct a matrix called the Routh Array.
You fill the first two rows with the coefficients of your polynomial, alternating:

| Row | Col 1 | Col 2 | Col 3 |
| :--- | :--- | :--- | :--- |
| **1 ($s^n$)** | $a_n$ | $a_{n-2}$ | $a_{n-4}$ |
| **2 ($s^{n-1}$)** | $a_{n-1}$ | $a_{n-3}$ | $a_{n-5}$ |
| **3 ($s^{n-2}$)** | $b_1$ | $b_2$ | $b_3$ |
| **4 ($s^{n-3}$)** | $c_1$ | $c_2$ | $c_3$ |
| $\dots$ | | | |

You calculate the subsequent rows ($b$, $c$, etc.) using a simple cross-multiplication formula based on the two rows immediately above it:
$$ b_1 = \frac{(a_{n-1})(a_{n-2}) - (a_n)(a_{n-3})}{a_{n-1}} $$
*(Notice it looks like a negative determinant of the 2x2 matrix above it).*

### Step 3: The Verdict
Once you calculate the entire array down to the $s^0$ row, you look strictly at the **first column**.
**Routh's Theorem:** The number of sign changes in the first column equals the exact number of unstable (positive real) roots.

Therefore, for the system to be perfectly stable, **every single number in the first column must be positive**.

## 3. Controller Tuning with Routh

The Routh Array is not just a pass/fail test. It is a powerful design tool.
When you write the characteristic equation with a Proportional Controller ($K_c$), the coefficient $a_0$ will usually contain $K_c$ (e.g., $a_0 = 1 + 5K_c$).

When you build the Routh Array, the entries in the first column will be algebraic expressions containing $K_c$. 
By forcing every entry in the first column to be $> 0$, you can solve the inequalities to find the exact maximum stable value for your controller gain! 
If $K_c$ goes above this limit, your plant will explode. This limit is the **Ultimate Gain ($K_{cu}$)** used in Ziegler-Nichols tuning.

## 4. Stability Evaluation Flow

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "char", "data": { "label": "Characteristic Eq.", "icon": "FunctionSquare", "description": "1 + G_loop = 0" }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "routh", "data": { "label": "Routh Array", "icon": "Grid", "description": "Matrix shortcut to check polynomial roots without solving." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "neg", "data": { "label": "All Positive Col 1", "icon": "CheckCircle", "description": "Stable! Roots are negative, oscillations decay." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "pos", "data": { "label": "Sign Change in Col 1", "icon": "AlertTriangle", "description": "Unstable! Runaway exponential explosion." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } }
  ],
  "edges": [
    { "source": "char", "target": "routh", "animated": true },
    { "source": "routh", "target": "neg", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } },
    { "source": "routh", "target": "pos", "animated": true, "style": { "stroke": "#ef4444", "strokeWidth": 2 } }
  ]
}
```
