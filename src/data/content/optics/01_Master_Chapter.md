# Optics

## 1. Geometric Optics

### Reflection and Refraction
Law of Reflection:
$$ \theta_i = \theta_r $$
Snell's Law of Refraction:
$$ n_1 \sin\theta_1 = n_2 \sin\theta_2 $$

**Worked Example 1:**
A light ray traveling in air ($n_1 = 1.00$) strikes a glass block ($n_2 = 1.50$) at an angle of incidence of $45^\circ$. What is the angle of refraction?

*Solution:*
1. Apply Snell's Law:
   $$ 1.00 \sin(45^\circ) = 1.50 \sin(\theta_2) $$
2. Solve for $\sin(\theta_2)$:
   $$ \sin(\theta_2) = \frac{\sin(45^\circ)}{1.50} = \frac{0.707}{1.50} \approx 0.471 $$
3. Calculate $\theta_2$:
   $$ \theta_2 = \arcsin(0.471) \approx 28.1^\circ $$

### Lenses and Mirrors
The thin lens and mirror equation:
$$ \frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i} $$
Magnification:
$$ m = \frac{h_i}{h_o} = -\frac{d_i}{d_o} $$

**Worked Example 2:**
An object is placed $20 \text{ cm}$ in front of a convex lens with a focal length of $10 \text{ cm}$. Find the image distance and magnification.

*Solution:*
1. Identify variables: $d_o = 20 \text{ cm}$, $f = 10 \text{ cm}$.
2. Apply the thin lens equation:
   $$ \frac{1}{10} = \frac{1}{20} + \frac{1}{d_i} $$
   $$ \frac{1}{d_i} = \frac{1}{10} - \frac{1}{20} = \frac{1}{20} $$
   $$ d_i = 20 \text{ cm} $$
3. Calculate magnification:
   $$ m = -\frac{d_i}{d_o} = -\frac{20}{20} = -1 $$
The image is real, inverted, and the same size as the object.

## 2. Physical Optics

### Young's Double-Slit Experiment
For constructive interference (bright fringes):
$$ d \sin\theta = m\lambda \quad \text{for } m = 0, \pm1, \pm2, \dots $$
For small angles, the position of the $m$-th bright fringe on a screen at distance $L$ is:
$$ y_m = \frac{m\lambda L}{d} $$

**Worked Example 3:**
Light of wavelength $600 \text{ nm}$ passes through two slits separated by $0.15 \text{ mm}$. A screen is placed $2.0 \text{ m}$ away. Calculate the distance between the central maximum and the first-order bright fringe.

*Solution:*
1. Convert units: $\lambda = 600 \times 10^{-9} \text{ m}$, $d = 0.15 \times 10^{-3} \text{ m}$, $L = 2.0 \text{ m}$, $m = 1$.
2. Apply the small-angle approximation formula:
   $$ y_1 = \frac{(1)(600 \times 10^{-9})(2.0)}{0.15 \times 10^{-3}} $$
   $$ y_1 = \frac{1.2 \times 10^{-6}}{1.5 \times 10^{-4}} = 8.0 \times 10^{-3} \text{ m} = 8.0 \text{ mm} $$
