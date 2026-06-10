# Laplace Transforms and Transfer Functions

Dynamic systems (temperatures changing, fluid levels rising) are mathematically described by linear ordinary differential equations (ODEs) with respect to time ($t$).

Solving systems of coupled differential equations in the "time domain" is mathematically grueling. Fortunately, we have a mathematical shortcut that translates complex calculus into simple algebra: **The Laplace Transform**.

## 1. The Laplace Transform

The Laplace Transform takes a function of time, $f(t)$, and transforms it into a function of a complex variable, $s$. We denote the transformed function as $F(s)$.

$$ F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} f(t) e^{-st} dt $$

Why do we do this? Because in the Laplace domain ($s$-domain), **derivatives become simple multiplication, and integrals become simple division.**
*   Differentiation in time: $\mathcal{L}\left\{ \frac{df}{dt} \right\} = sF(s) - f(0)$
*   Integration in time: $\mathcal{L}\left\{ \int f(t) dt \right\} = \frac{F(s)}{s}$

If we assume our system starts at a steady-state (so the initial conditions $f(0)$ are zero), then taking the derivative is as simple as multiplying by $s$. This turns brutal differential equations into basic high-school algebraic polynomials.

## 2. Deviation Variables

Before taking Laplace transforms of our chemical engineering models, we strictly use **Deviation Variables**.

A deviation variable (denoted with a prime, like $y'$) is defined as the difference between the actual current value $y(t)$ and its initial steady-state value $\bar{y}$.
$$ y'(t) = y(t) - \bar{y} $$

Why? Because at the initial steady-state, $y'(0) = \bar{y} - \bar{y} = 0$. 
By strictly using deviation variables, **all initial conditions become zero**. This wipes out the messy $- f(0)$ terms in the Laplace transform of derivatives, vastly simplifying the math. From now on, when you see a variable like $T(s)$ or $h(s)$ in process control, it is implicitly assumed to be a deviation variable.

## 3. The Transfer Function

The **Transfer Function**, $G(s)$, is the most important mathematical concept in classical control theory. 
It is defined as the ratio of the Laplace transform of the output deviation variable ($Y(s)$) to the Laplace transform of the input deviation variable ($X(s)$).

$$ G(s) = \frac{Y(s)}{X(s)} $$
or
$$ Y(s) = G(s) \cdot X(s) $$

The Transfer Function $G(s)$ completely captures the dynamic personality of a process. If you know a tank's Transfer Function, and you know how the input valve is manipulated ($X(s)$), you can multiply them together to instantly find exactly how the liquid level will behave ($Y(s)$).

### Deriving a Transfer Function: A Simple Tank
Imagine a tank with cross-sectional area $A$. Liquid flows in at rate $q_{in}$ and out at rate $q_{out}$. We want a transfer function relating the liquid level $h$ (output) to the inlet flow $q_{in}$ (input).

1.  **Mass Balance:** $A \frac{dh}{dt} = q_{in} - q_{out}$
2.  **Assume a linear outlet valve:** $q_{out} = \frac{h}{R}$ (where $R$ is valve resistance).
    Substitute: $A \frac{dh}{dt} = q_{in} - \frac{h}{R}$
3.  **Convert to Deviation Variables:** $A \frac{dh'}{dt} = q_{in}' - \frac{h'}{R}$
4.  **Take the Laplace Transform:** 
    $A \left[ s \cdot H(s) \right] = Q_{in}(s) - \frac{H(s)}{R}$
5.  **Rearrange algebraically to find $H(s)/Q_{in}(s)$:**
    Multiply by $R$: $ARs \cdot H(s) = R Q_{in}(s) - H(s)$
    Factor out $H(s)$: $H(s) [ARs + 1] = R Q_{in}(s)$
    
    $$ G(s) = \frac{H(s)}{Q_{in}(s)} = \frac{R}{ARs + 1} $$

This is the Transfer Function of the tank.

## 4. Standard Input Functions

To test how our process $G(s)$ behaves, we hit it with standard, theoretical mathematical inputs ($X(s)$) and see what happens to the output.

1.  **The Step Input:** The most common test. The input is suddenly jerked from its steady state to a new constant value (e.g., a valve is instantly opened an extra 10%).
    *   Time domain: $x(t) = M$ (for $t>0$)
    *   Laplace domain: $X(s) = \frac{M}{s}$
2.  **The Impulse Input (Dirac Delta):** A massive, instantaneous spike that immediately drops back to zero (e.g., someone dumps a bucket of toxic chemical into a reactor instantly).
    *   Laplace domain: $X(s) = M$
3.  **The Ramp Input:** The input increases linearly with time (e.g., slowly opening a valve at a constant speed).
    *   Laplace domain: $X(s) = \frac{M}{s^2}$
4.  **Sinusoidal Input:** The input oscillates like a sine wave. (Crucial for frequency response analysis).
    *   Laplace domain: $X(s) = \frac{A\omega}{s^2 + \omega^2}$
