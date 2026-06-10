# First-Order Dynamic Systems

Armed with Laplace transforms and transfer functions, we can now categorize all chemical engineering processes into standard dynamic archetypes. The simplest and most common archetype is the **First-Order System**.

## 1. The Standard First-Order Transfer Function

Any process whose dynamics are governed by a single, linear, first-order differential equation is a first-order system. The generic transfer function for *all* first-order systems is written in a standard form:

$$ G(s) = \frac{Y(s)}{X(s)} = \frac{K_p}{\tau_p s + 1} $$

This simple equation contains two incredibly important parameters that completely define the physical system:
1.  **Steady-State Gain ($K_p$):** Determines *how much* the output will eventually change. It is the ratio of the final change in output to the change in input. ($K_p = \Delta y / \Delta x$).
2.  **Time Constant ($\tau_p$):** Determines *how fast* the output responds. It is a measure of the system's "inertia" or sluggishness. A larger $\tau_p$ means the process responds very slowly.

*Example:* In the tank we modeled in the previous module, the transfer function was $G(s) = \frac{R}{ARs + 1}$. 
By matching this to the standard form, we instantly know that the tank's Gain is $K_p = R$, and its Time Constant is $\tau_p = AR$. (Notice that a larger cross-sectional Area $A$ results in a larger $\tau_p$, making the tank slower to fill—which makes intuitive physical sense!)

## 2. Response to a Step Input

What happens if we hit a first-order system with a sudden Step Input of magnitude $M$? 
In the Laplace domain, the input is $X(s) = M/s$.
We multiply the input by the transfer function to find the output:
$$ Y(s) = G(s) \cdot X(s) = \left( \frac{K_p}{\tau_p s + 1} \right) \cdot \left( \frac{M}{s} \right) $$

To see what this looks like in the real world, we must use Partial Fraction Expansion to take the Inverse Laplace Transform ($\mathcal{L}^{-1}$) back to the time domain ($t$):

$$ y(t) = K_p M \left( 1 - e^{-t / \tau_p} \right) $$

This is the classic exponential growth curve. 
*   At $t = 0$, $y(0) = 0$.
*   As $t \to \infty$, $e^{-\infty} \to 0$, so the final steady-state value is $y(\infty) = K_p M$.
*   At $t = \tau_p$ (one time constant), $y(\tau_p) = K_p M (1 - e^{-1}) \approx 0.632 \cdot (K_p M)$. 
    **Crucial Rule:** A first-order system always reaches exactly **63.2%** of its final response after one time constant ($\tau_p$) has elapsed.

## 3. Pure Capacitive (Integrating) Systems

There is a special, dangerous sub-class of first-order systems: the **Integrating Process**.

Consider a tank where the outlet flow ($q_{out}$) is driven by a constant-volume positive displacement pump, rather than gravity. This means $q_{out}$ is constant, regardless of the liquid level $h$.
The mass balance is: $A \frac{dh}{dt} = q_{in} - q_{out}$.
In deviation variables and Laplace domain: $A s H(s) = Q_{in}(s)$.
The transfer function becomes:
$$ G(s) = \frac{H(s)}{Q_{in}(s)} = \frac{1/A}{s} $$

Notice there is no $+1$ in the denominator; it is just a pure $s$. This is an integrator.
If you apply a step input to an integrating process (e.g., you permanently increase the inlet valve by 5%), the level does not curve off and reach a new steady state. It rises as a straight, infinite ramp ($y(t) = K \cdot t$). 

Integrating processes are inherently unstable. If left uncontrolled, the tank will inevitably overflow or run completely dry.

## 4. Dead Time (Time Delay)

In the real world, systems do not respond instantaneously. There is a physical limit to how fast fluid can travel down a pipe.

If you open a hot water valve, the temperature sensor 50 meters down the pipe will not register *any* change until the hot water physically travels that 50 meters. This delay is called **Dead Time** or **Transportation Lag** ($\theta$).

In the time domain, a dead time simply shifts the function: $y(t - \theta)$.
In the Laplace domain, dead time is mathematically beautiful. It simply multiplies the entire transfer function by an exponential term: $e^{-\theta s}$.

A First-Order Plus Dead Time (FOPDT) model is the most widely used empirical model in all of industrial process control:
$$ G(s) = \frac{K_p e^{-\theta s}}{\tau_p s + 1} $$

Dead time ($\theta$) is the absolute nemesis of a control engineer. If the controller makes an adjustment, it is completely "blind" to the results of that adjustment until the dead time has passed. Severe dead time causes control loops to oscillate violently and become unstable.
