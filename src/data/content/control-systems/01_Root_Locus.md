# Root Locus Analysis

## Definition

As gain $K$ varies from 0 to $\infty$, roots of $1 + KG(s)H(s) = 0$ trace paths in the $s$-plane. These paths form the **root locus**.

## Construction Rules

Given $G(s)H(s) = K\dfrac{N(s)}{D(s)}$ with $m$ zeros and $n$ poles:

1. **Number of branches**: $n$ (one per pole)
2. **Start** ($K=0$): at open-loop poles
3. **End** ($K\to\infty$): at open-loop zeros (or infinity along asymptotes)
4. **Real axis**: segment is on locus if odd number of poles + zeros lie to its right
5. **Asymptotes**: $n-m$ asymptotes with angles $\theta = \frac{(2k+1)180°}{n-m}$, $k=0,1,\ldots$
6. **Asymptote centroid**: $\sigma_a = \dfrac{\sum p_i - \sum z_j}{n-m}$
7. **Break-away/in points**: solve $dK/ds = 0$ (equivalently $d[N/D]/ds = 0$)
8. **Imaginary axis crossing**: apply Routh criterion or substitute $s = j\omega$

## Stability from Root Locus

System is stable for $K$ values where all roots have $\text{Re}(s) < 0$.

Critical gain $K_c$: value at which root locus crosses $j\omega$ axis.

## Design by Root Locus

Place closed-loop poles at desired locations (specified by $\zeta$, $\omega_n$) by choosing $K$ and adding compensators.

- **Lead compensator** ($z > p$, $|z| < |p|$): improves transient response (like PD action)
- **Lag compensator** ($p > z$ near origin): improves steady-state error (like PI action)