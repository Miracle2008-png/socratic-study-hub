# 7. Solving the Wave Equation (1D)

Let's apply the exact same logic to a vibrating guitar string of length $L$.
**PDE:** $u_{tt} = c^2 u_{xx}$
**Boundary Conditions:** String bolted at both ends. $u(0,t) = 0$ and $u(L,t) = 0$.
**Initial Conditions:** We need TWO initial conditions because of the double time derivative. 
1. Initial shape (plucked): $u(x,0) = f(x)$
2. Initial velocity (struck): $u_t(x,0) = g(x)$

### Separation of Variables
Assume $u = XT$.
$X \cdot T'' = c^2 \cdot X'' \cdot T$.
Separate them: $\frac{T''}{c^2 T} = \frac{X''}{X} = -\lambda$.

The spatial equation ($X'' + \lambda X = 0$) and boundary conditions are **identically the same** as the Heat equation! 
We instantly know $\lambda = (\frac{n\pi}{L})^2$ and $X_n(x) = \sin(\frac{n\pi x}{L})$.

### The Time Equation (Oscillation, not Decay)
Now plug $\lambda$ into the new time equation:
$$ T'' + c^2\left(\frac{n\pi}{L}\right)^2 T = 0 $$

Unlike the heat equation (which was a 1st-order decay), this is a 2nd-order ODE representing Simple Harmonic Motion (an undamped spring). 
The solution is oscillatory:
$$ T_n(t) = A_n \cos\left(\frac{cn\pi t}{L}\right) + B_n \sin\left(\frac{cn\pi t}{L}\right) $$

### The General Solution
Multiply $X_n$ and $T_n$ and use superposition to sum them up:
$$ u(x,t) = \sum_{n=1}^{\infty} \left[ A_n \cos\left(\frac{cn\pi t}{L}\right) + B_n \sin\left(\frac{cn\pi t}{L}\right) \right] \sin\left(\frac{n\pi x}{L}\right) $$

This equation tells us that the vibration of a guitar string is literally just the sum of an infinite number of "Standing Waves" (the harmonics!).
*   The $n=1$ term is the fundamental frequency (the deep note you hear).
*   The $n=2$ term is the first overtone (an octave higher), vibrating exactly twice as fast.

### Enforcing Initial Conditions
To find $A_n$, plug in $t=0$:
$$ u(x,0) = \sum_{n=1}^{\infty} A_n \sin\left(\frac{n\pi x}{L}\right) = f(x) $$
This is a Fourier Sine series for the initial shape! $A_n$ are the standard Fourier coefficients for $f(x)$.

To find $B_n$, take the time derivative of the general solution, and then plug in $t=0$, setting it equal to $g(x)$. This forms another Fourier Sine series that allows you to calculate $B_n$.
