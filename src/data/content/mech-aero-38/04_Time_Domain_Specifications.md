# Time Domain Specifications (Transient Response)

When designing a control system (like an elevator or a robot arm), we usually command it to move from one position to another. We test the system by applying a mathematical "Step Input" (instantaneously changing the target from 0 to 1).

How the physical system reacts to this sudden command is called the **Transient Response**.

## 1. First-Order Systems

A first-order system has a transfer function with only an $s^1$ term in the denominator (e.g., a simple RC circuit, or a heating element).

$$ G(s) = \frac{K}{\tau s + 1} $$

*   **$K$ (DC Gain):** The final steady-state value the system will reach.
*   **$\tau$ (Time Constant):** Determines how fast the system responds.
    *   It is the time it takes the system to reach 63.2% of its final value.
    *   It takes approximately **$4\tau$** for a first-order system to reach 98% of its final value (which engineers generally consider "settled").
    *   First-order systems do *not* oscillate. They approach the target smoothly and exponentially.

## 2. Second-Order Systems

Most mechanical systems (containing mass and a spring) are second-order systems ($s^2$ in the denominator). They are the fundamental benchmark for control design.

The standard form of a second-order transfer function is:
$$ G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} $$

This introduces the two most important parameters in control theory:
1.  **$\omega_n$ (Natural Frequency):** The speed at which the system would oscillate if there were absolutely no damping (friction). A higher $\omega_n$ means a stiffer, faster system.
2.  **$\zeta$ (Damping Ratio):** A dimensionless number that determines how much the system resists oscillating.

## 3. The Effect of the Damping Ratio ($\zeta$)

The value of $\zeta$ completely dictates the "flavor" of the transient response.

*   **$\zeta = 0$ (Undamped):** The system oscillates forever like a sine wave. (e.g., a bell ringing in a vacuum).
*   **$0 < \zeta < 1$ (Underdamped):** The system responds very quickly, overshoots the target, and rings a few times before settling down. (e.g., a car with worn-out shock absorbers bouncing after hitting a bump).
*   **$\zeta = 1$ (Critically Damped):** The "Goldilocks" zone. The system reaches the target as fast as mathematically possible *without* ever overshooting it.
*   **$\zeta > 1$ (Overdamped):** The system has too much friction. It never overshoots, but it is sluggish and takes a long time to reach the target. (e.g., a door closer pushing through thick molasses).

## 4. Standard Performance Specifications

When an engineer is asked to design a controller, they are given specific requirements based on the step response of an underdamped system:

1.  **Rise Time ($t_r$):** The time it takes for the system to go from 10% to 90% of the final target. (How fast does it get off the starting line?)
2.  **Peak Time ($t_p$):** The time it takes to hit the absolute highest point of the overshoot.
3.  **Percent Overshoot (%OS):** How far past the target did the system fly before turning back?
    *   *Example:* You command a robot arm to move to 100cm. It quickly swings out to 115cm before settling back. That is a 15% Overshoot.
    *   Overshoot is directly and solely tied to the Damping Ratio ($\zeta$). Less damping = more overshoot.
4.  **Settling Time ($t_s$):** The time it takes for the oscillations to die down and stay within a narrow band (usually $\pm 2\%$) of the final target.
    *   $t_s \approx \frac{4}{\zeta \omega_n}$

**The Engineering Trade-off:**
You generally cannot optimize everything. If you want a very fast Rise Time, you usually have to accept a high Overshoot. If you want zero Overshoot, you have to accept a sluggish Rise Time.
