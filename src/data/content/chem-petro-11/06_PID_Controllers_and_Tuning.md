# PID Controllers and Tuning

In our block diagrams, the Controller was represented by a mathematical block $G_c(s)$. But what actual math is the computer executing inside that block?

Over 90% of all control loops in the global chemical, petroleum, and manufacturing industries use a single, 100-year-old algorithm: **The PID Controller**.
PID stands for **Proportional, Integral, and Derivative**. It looks at the Error $e(t)$ and calculates the output signal $p(t)$ based on three different perspectives: the present, the past, and the future.

## 1. Proportional Control (P - The Present)

The simplest form of control is Proportional. The controller output is directly proportional to the *current* Error.
$$ p(t) = \bar{p} + K_c \cdot e(t) $$
*   $K_c$ is the **Controller Gain**. It dictates how aggressively the controller reacts. 
*   If the temperature is 2° too low, the valve opens 10%. If it's 4° too low, it opens 20%.

**The Problem: Offset**
A purely proportional controller suffers from a fatal flaw: **Steady-State Offset**. 
If a massive storm hits and continuously cools your reactor (a sustained disturbance), a P-controller will open the steam valve to fight it. However, as the temperature gets closer to the setpoint, the Error shrinks. As the Error shrinks, the valve closes. 
The controller will eventually balance out, keeping the steam valve partially open to fight the storm, but leaving the temperature permanently stuck *below* the setpoint. It mathematically cannot eliminate the final bit of error.

## 2. Integral Control (I - The Past)

To eliminate offset, we must look at the history of the error. 
Integral action continuously sums up (integrates) the error over time.
$$ p(t) = \bar{p} + \frac{K_c}{\tau_I} \int_{0}^{t} e(t) dt $$
*   $\tau_I$ is the **Integral Time** (or Reset Time). A smaller $\tau_I$ means stronger integral action.

Even if the current error is a microscopic $0.1^\circ$, the integral term will continuously accumulate that $0.1^\circ$ second after second. The integral sum grows larger and larger, slowly cranking the steam valve open further and further until the error is perfectly, completely crushed to exactly zero.
**Benefit:** Integral action guarantees zero steady-state offset.
**Drawback:** Because it looks at the past, it introduces a sluggish lag to the system and severely destabilizes the loop, causing it to oscillate and overshoot the target.

## 3. Derivative Control (D - The Future)

To counteract the bouncy, destabilizing effects of Integral control, we add Derivative action.
Derivative action looks at the *Rate of Change* (the slope) of the error.
$$ p(t) = \bar{p} + K_c \tau_D \frac{de(t)}{dt} $$
*   $\tau_D$ is the **Derivative Time**. A larger $\tau_D$ means stronger derivative action.

If the temperature is rapidly rocketing toward the setpoint, the derivative term "sees the future" and realizes it is going to overshoot. The slope is steep, so the derivative term generates a massive negative output, slamming the brakes on the valve *before* it actually hits the target.
**Benefit:** Dampens oscillations, reduces overshoot, and drastically speeds up the settling time.
**Drawback:** It is hyper-sensitive to measurement noise. If your sensor signal is slightly fuzzy and jitters up and down by 0.1°, the derivative (slope) of that jitter is nearly infinite. The controller will violently thrash the valve open and closed, destroying the physical valve. Therefore, D-control is rarely used in noisy flow or level loops, but is excellent for slow, smooth temperature loops.

## 4. The Full PID Equation

Combining all three modes gives the standard ideal PID controller in the time domain:
$$ p(t) = \bar{p} + K_c \left[ e(t) + \frac{1}{\tau_I} \int_{0}^{t} e(t) dt + \tau_D \frac{de(t)}{dt} \right] $$

And taking the Laplace Transform gives the Controller Transfer Function $G_c(s)$:
$$ G_c(s) = K_c \left( 1 + \frac{1}{\tau_I s} + \tau_D s \right) $$

## 5. Controller Tuning

**Tuning** a loop means finding the exact numerical values for $K_c$, $\tau_I$, and $\tau_D$ that make your specific tank or reactor run smoothly.
*   If $K_c$ is too low, the plant is sluggish and ignores disturbances.
*   If $K_c$ is too high, the plant becomes hyper-aggressive, oscillates violently, and goes unstable.

**Tuning Methods:**
1.  **Trial and Error:** Slowly increase $K_c$ until it bounces, then back off. Add some Integral, wait, see what happens. This is an art form mastered by veteran operators.
2.  **Ziegler-Nichols Method:** A classic 1940s empirical method. You turn off I and D, and crank up $K_c$ until the physical plant goes into sustained, permanent sine-wave oscillations. You record the Ultimate Gain ($K_{cu}$) and the Ultimate Period ($P_u$), and plug them into simple geometric formulas to find safe $K_c$, $\tau_I$, and $\tau_D$ values.
3.  **Internal Model Control (IMC) / Direct Synthesis:** Modern mathematical methods. You specify exactly what kind of first-order trajectory you *want* the closed-loop system to follow, and the math reverse-engineers the exact PID parameters required to force the plant to behave that way.
