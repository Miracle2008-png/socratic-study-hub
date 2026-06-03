# Electromagnetic Fields — Electrostatics

## Coulomb's Law

Force between two point charges:
$$\mathbf{F}_{12} = \frac{q_1 q_2}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}_{12},\quad \varepsilon_0 = 8.854\times10^{-12}\,\text{F/m}$$

## Electric Field

$$\mathbf{E} = \frac{\mathbf{F}}{q} = \frac{Q}{4\pi\varepsilon_0 r^2}\hat{\mathbf{r}}\quad\text{(point charge)}$$

For a continuous charge distribution:
$$\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|^2}\hat{\mathbf{R}}\,dV'$$

## Gauss's Law (Integral Form)

$$\oint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{enc}}{\varepsilon_0}$$

Differential form: $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$

**Applications** (choose symmetric Gaussian surfaces):

| Geometry | Field |
|----------|-------|
| Point charge | $E = Q/(4\pi\varepsilon_0 r^2)$ |
| Infinite line charge $\rho_L$ | $E = \rho_L/(2\pi\varepsilon_0 r)$ |
| Infinite sheet $\rho_s$ | $E = \rho_s/(2\varepsilon_0)$ |
| Sphere (uniform $\rho$, inside) | $E = \rho r/(3\varepsilon_0)$ |

## Electric Potential

$$V = -\int_{ref}^P \mathbf{E}\cdot d\mathbf{l},\quad \mathbf{E} = -\nabla V$$

For point charge: $V = Q/(4\pi\varepsilon_0 r)$

**Poisson's equation**: $\nabla^2 V = -\rho/\varepsilon_0$

**Laplace's equation** (charge-free region): $\nabla^2 V = 0$

## Energy and Capacitance

Energy stored in electric field:
$$W_E = \frac{\varepsilon_0}{2}\int |\mathbf{E}|^2\,dV = \frac{1}{2}QV = \frac{Q^2}{2C} = \frac{1}{2}CV^2$$

Capacitance $C = Q/V$: parallel plates $C = \varepsilon A/d$.