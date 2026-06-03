# Maxwell's Equations

## Complete Set

| Equation | Differential form | Integral form |
|---------|-------------------|---------------|
| Gauss (E) | $\nabla\cdot\mathbf{D} = \rho_v$ | $\oint\mathbf{D}\cdot d\mathbf{A} = Q_{enc}$ |
| Gauss (B) | $\nabla\cdot\mathbf{B} = 0$ | $\oint\mathbf{B}\cdot d\mathbf{A} = 0$ |
| Faraday | $\nabla\times\mathbf{E} = -\partial\mathbf{B}/\partial t$ | $\oint\mathbf{E}\cdot d\mathbf{l} = -d\Phi_B/dt$ |
| Ampere-Maxwell | $\nabla\times\mathbf{H} = \mathbf{J} + \partial\mathbf{D}/\partial t$ | $\oint\mathbf{H}\cdot d\mathbf{l} = I_{enc} + I_d$ |

**Constitutive relations** (linear, isotropic media):
$$\mathbf{D} = \varepsilon\mathbf{E} = \varepsilon_0\varepsilon_r\mathbf{E},\quad \mathbf{B} = \mu\mathbf{H} = \mu_0\mu_r\mathbf{H},\quad \mathbf{J} = \sigma\mathbf{E}$$

## Displacement Current

Maxwell's key addition: $\mathbf{J}_d = \partial\mathbf{D}/\partial t$. This term completes Ampere's law and allows wave propagation — a changing E field acts as a source of H.

## Faraday's Law

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt}\int_S\mathbf{B}\cdot d\mathbf{A}$$

Motional EMF: $\mathcal{E} = \oint(\mathbf{v}\times\mathbf{B})\cdot d\mathbf{l} = Bvl$ (straight conductor in uniform B).

Transformer EMF: changing B creates E even when conductor is stationary.

## Boundary Conditions

At interface between media 1 and 2:

$$D_{1n} - D_{2n} = \rho_s,\quad E_{1t} = E_{2t}$$
$$B_{1n} = B_{2n},\quad H_{1t} - H_{2t} = \mathbf{K}\times\hat{n}$$