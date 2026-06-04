# Quantum Physics

## 1. Wave-Particle Duality

Quantum mechanics is founded on the principle that particles exhibit both wave and particle characteristics. 
The de Broglie wavelength $\lambda$ of a particle is related to its momentum $p$:
$$ \lambda = \frac{h}{p} $$
where $h = 6.626 \times 10^{-34} \text{ J}\cdot\text{s}$ is Planck's constant.

The photon energy $E$ is related to its frequency $\nu$ by:
$$ E = h\nu = \frac{hc}{\lambda} $$

---

## 2. The Schrödinger Equation

The evolution of a quantum state is governed by the Schrödinger equation.

### 2.1 Time-Dependent Schrödinger Equation (TDSE)
$$ i\hbar \frac{\partial \Psi(x,t)}{\partial t} = \left[ -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x) \right] \Psi(x,t) $$
where $\hbar = \frac{h}{2\pi}$, $m$ is the particle mass, and $V(x)$ is the potential energy.

### 2.2 Time-Independent Schrödinger Equation (TISE)
By using separation of variables, $\Psi(x,t) = \psi(x)e^{-iEt/\hbar}$, we get:
$$ \left[ -\frac{\hbar^2}{2m} \frac{d^2}{dx^2} + V(x) \right] \psi(x) = E \psi(x) $$

---

## 3. Solved Examples

### Example 3.1: Particle in a 1D Box (Infinite Potential Well)
**Problem:** Find the normalized wavefunctions and energy levels for a particle of mass $m$ confined in a 1D infinite potential well of width $L$ (from $x=0$ to $x=L$).

**Solution:**
1. The potential $V(x) = 0$ for $0 < x < L$, and $V(x) = \infty$ elsewhere.
2. Inside the well, the TISE simplifies to:
   $$ -\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi \implies \frac{d^2\psi}{dx^2} + k^2\psi = 0 $$
   where $k = \frac{\sqrt{2mE}}{\hbar}$.
3. The general solution is $\psi(x) = A\sin(kx) + B\cos(kx)$.
4. Apply boundary conditions: $\psi(0) = 0 \implies B = 0$. $\psi(L) = 0 \implies A\sin(kL) = 0$.
5. For non-trivial solutions, $kL = n\pi$ for $n = 1, 2, 3, \ldots$.
6. This yields the energy quantization:
   $$ E_n = \frac{n^2\pi^2\hbar^2}{2mL^2} = \frac{n^2h^2}{8mL^2} $$
7. To find $A$, apply the normalization condition $\int_0^L |\psi(x)|^2 dx = 1$:
   $$ \int_0^L A^2 \sin^2\left(\frac{n\pi x}{L}\right) dx = A^2 \frac{L}{2} = 1 \implies A = \sqrt{\frac{2}{L}} $$
8. The final normalized wavefunction is:
   $$ \psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right) $$

### Example 3.2: Quantum Harmonic Oscillator Expectation Value
**Problem:** The ground state wavefunction of a 1D quantum harmonic oscillator is $\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} e^{-\frac{m\omega x^2}{2\hbar}}$. Calculate the expectation value of the position $\langle x \rangle$ and position squared $\langle x^2 \rangle$.

**Solution:**
1. Expectation value of position $\langle x \rangle$:
   $$ \langle x \rangle = \int_{-\infty}^{\infty} \psi_0^*(x) x \psi_0(x) dx = \int_{-\infty}^{\infty} x |\psi_0(x)|^2 dx $$
   Since $x$ is an odd function and $|\psi_0(x)|^2$ is an even function, the integrand is odd. The integral over symmetric limits is zero.
   $$ \langle x \rangle = 0 $$
2. Expectation value of position squared $\langle x^2 \rangle$:
   $$ \langle x^2 \rangle = \int_{-\infty}^{\infty} \psi_0^*(x) x^2 \psi_0(x) dx = \sqrt{\frac{m\omega}{\pi\hbar}} \int_{-\infty}^{\infty} x^2 e^{-\frac{m\omega x^2}{\hbar}} dx $$
3. Let $\alpha = \frac{m\omega}{\hbar}$. The integral is of the standard form $\int_{-\infty}^{\infty} x^2 e^{-\alpha x^2} dx = \frac{1}{2} \sqrt{\frac{\pi}{\alpha^3}}$.
   $$ \langle x^2 \rangle = \sqrt{\frac{\alpha}{\pi}} \left( \frac{1}{2} \sqrt{\frac{\pi}{\alpha^3}} \right) = \frac{1}{2\alpha} = \frac{\hbar}{2m\omega} $$

---

## 4. Quantum Tunneling

For a potential barrier of height $V_0$ and width $a$, an incident particle with energy $E < V_0$ has a non-zero probability of tunneling through. 

The transmission coefficient $T$ (probability of tunneling) is approximately:
$$ T \approx e^{-2\kappa a} $$
where $\kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$.

### Example 4.1: Tunneling Probability
**Problem:** An electron (mass $m_e \approx 9.1 \times 10^{-31} \text{ kg}$) with energy $1.0 \text{ eV}$ encounters a barrier of height $2.0 \text{ eV}$ and width $1.0 \text{ nm}$. Estimate the tunneling probability.

**Solution:**
1. Determine $V_0 - E$:
   $$ V_0 - E = 2.0 - 1.0 = 1.0 \text{ eV} = 1.6 \times 10^{-19} \text{ J} $$
2. Calculate the decay constant $\kappa$:
   $$ \kappa = \frac{\sqrt{2(9.1 \times 10^{-31})(1.6 \times 10^{-19})}}{1.05 \times 10^{-34}} $$
   $$ \kappa \approx \frac{\sqrt{29.12 \times 10^{-50}}}{1.05 \times 10^{-34}} \approx \frac{5.4 \times 10^{-25}}{1.05 \times 10^{-34}} \approx 5.14 \times 10^9 \text{ m}^{-1} $$
3. Calculate the transmission coefficient:
   $$ 2\kappa a = 2(5.14 \times 10^9)(1.0 \times 10^{-9}) \approx 10.28 $$
   $$ T \approx e^{-10.28} \approx 3.4 \times 10^{-5} $$
The tunneling probability is approximately $0.0034\%$.
