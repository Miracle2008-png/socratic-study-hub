# 6. Free Mechanical Vibrations

We now have the mathematical machinery to analyze real-world oscillating systems. 

Consider a mass $m$ attached to a spring with spring constant $k$, sliding on a frictionless surface. Let $y(t)$ represent the displacement of the mass from its equilibrium position.

### Setting up the ODE
By Newton's Second Law: $F_{\text{net}} = m \cdot a = my''$.
What forces are acting on the mass?
Only the spring! By Hooke's Law, the spring exerts a restoring force proportional to the displacement: $F_s = -ky$.
$$ my'' = -ky $$
$$ my'' + ky = 0 $$

This is a second-order, linear, homogeneous ODE with constant coefficients. We call this **Free Undamped Vibration** (or Simple Harmonic Motion).

### Solving for the Motion
1.  Characteristic Equation: $mr^2 + k = 0$.
2.  Solve for $r$: $r^2 = -\frac{k}{m} \implies r = \pm i\sqrt{\frac{k}{m}}$.
3.  We have complex roots with $\alpha = 0$ and $\beta = \sqrt{k/m}$.

Because $\alpha = 0$, the $e^{\alpha t}$ term becomes $e^0 = 1$. There is no decay envelope. 
The general solution is:
$$ y(t) = C_1 \cos\left(\sqrt{\frac{k}{m}} t\right) + C_2 \sin\left(\sqrt{\frac{k}{m}} t\right) $$

### Natural Frequency
Physicists define the quantity $\sqrt{k/m}$ as the **Natural Angular Frequency**, denoted $\omega_0$.
$$ \omega_0 = \sqrt{\frac{k}{m}} $$
The solution becomes:
$$ y(t) = C_1 \cos(\omega_0 t) + C_2 \sin(\omega_0 t) $$

This equation tells us that without friction, the mass will oscillate back and forth forever. 
Notice that the frequency of oscillation depends *only* on the mass ($m$) and the stiffness of the spring ($k$). It does not depend on how far you initially pull the spring ($C_1, C_2$). 

### Amplitude-Phase Form
Dealing with a sum of a sine and a cosine is algebraically annoying. We can use trigonometric identities to combine them into a single cosine wave with a phase shift:
$$ y(t) = A \cos(\omega_0 t - \phi) $$
where the total amplitude $A = \sqrt{C_1^2 + C_2^2}$ and the phase shift $\phi = \arctan(C_2/C_1)$.

This single-wave form makes it incredibly easy to graph the oscillation and determine the maximum displacement ($A$) of the system.
