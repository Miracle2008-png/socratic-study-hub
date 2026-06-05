# PID Control

The **Proportional-Integral-Derivative (PID)** controller is the undisputed king of industrial control. Despite the existence of highly advanced modern control theories, an estimated 95% of all industrial control loops (temperature, pressure, motor speed, robotics) use some form of PID control.

It is brilliant because it is intuitive, does not strictly require a complex mathematical model of the plant to implement, and works excellently for a massive variety of systems.

## 1. The PID Equation

The controller looks at the Error signal $e(t)$ (the difference between the setpoint and reality) and calculates a control action $u(t)$ using three separate mathematical terms added together:

$$ u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt} $$

We adjust the behavior of the system by tuning three "knobs": $K_p$, $K_i$, and $K_d$.

## 2. P: Proportional Control (The "Present")

*   **Math:** $K_p \cdot e(t)$
*   **Concept:** "Push harder if you are further away."
*   **Behavior:** The control action is directly proportional to the current error. If you are 10 degrees below your target, the heater turns on at 100%. As you get closer (error drops to 5 degrees), the heater drops to 50%.
*   **The Problem:** P-control alone almost always results in a **Steady-State Error**.
    *   Imagine cruise control on a hill. If the car hits the exact target speed of 60mph, the error is zero. If the error is zero, the P-controller sets the gas pedal to zero. The car immediately slows down. It will eventually find an equilibrium (say, 58mph) where the error is just large enough (2mph) to generate enough gas pedal to fight gravity, but it will *never* reach the target of 60mph.

## 3. I: Integral Control (The "Past")

*   **Math:** $K_i \int e(t) dt$
*   **Concept:** "Learn from past mistakes."
*   **Behavior:** The Integrator keeps a running, accumulating tally of all past errors.
    *   Going back to the cruise control example: if the car is stuck at 58mph, the P-controller is happy. But the I-controller sees a persistent 2mph error. Every second that passes, the Integrator adds that 2mph to its running total. As the total grows, it slowly pushes the gas pedal harder and harder until the car *finally* reaches exactly 60mph.
    *   **The magic of Integral control is that it guarantees zero steady-state error.** It will not stop accumulating and pushing until the error is perfectly zero.
*   **The Problem:** Integrators add "inertia" to the controller. They are slow to react and often cause the system to overshoot the target and oscillate, making the system less stable.

## 4. D: Derivative Control (The "Future")

*   **Math:** $K_d \frac{de(t)}{dt}$
*   **Concept:** "Predict the future and put on the brakes."
*   **Behavior:** The Derivative term looks at the *rate of change* (the slope) of the error.
    *   If you are approaching the target very rapidly, the error is decreasing quickly (a negative slope). The D-controller sees this fast approach, realizes you are going to overshoot, and actually applies a *negative* control action (putting on the brakes) *before* you even hit the target.
    *   It acts like electronic shock absorbers, dampening out the oscillations caused by the I-controller and allowing the system to settle smoothly.
*   **The Problem:** Derivatives are highly sensitive to noise. If a sensor reading spikes randomly for one millisecond, the mathematical derivative (slope) of that spike is near infinity. The D-controller will overreact violently to sensor noise, vibrating the actuator. Therefore, pure D-control is rarely used, and often it is heavily filtered or omitted entirely (PI control).

## 5. Tuning a PID Controller

Tuning is the process of finding the perfect values for $K_p, K_i, K_d$.
1.  **Increase $K_p$:** System gets faster, but overshoots more.
2.  **Increase $K_d$:** Reduces overshoot, acts as a damper, makes the system smoother.
3.  **Increase $K_i$:** Eliminates steady-state error, but causes oscillation and sluggishness.
