# Semiconductor Physics

## Band Theory

In solids, discrete atomic energy levels broaden into **energy bands**. Two critical bands:
- **Valence band** — highest filled band at 0 K
- **Conduction band** — next band above valence band
- **Band gap** $E_g$ — forbidden energy gap between them

| Material | $E_g$ (eV) | Type |
|----------|-----------|------|
| Silicon (Si) | 1.12 | Semiconductor |
| Germanium (Ge) | 0.67 | Semiconductor |
| GaAs | 1.42 | Semiconductor |
| SiO₂ | ~9 | Insulator |
| Cu | 0 | Conductor |

## Intrinsic Semiconductors

Pure Si: every atom shares 4 covalent bonds. At room temperature, thermal energy breaks some bonds, generating **electron-hole pairs**.

Intrinsic carrier concentration:
$$n_i = \sqrt{N_c N_v}\, e^{-E_g / 2k_BT}$$

For Si at 300 K: $n_i \approx 1.5 \times 10^{10}\ \text{cm}^{-3}$

**Mass-action law** (always holds in thermal equilibrium):
$$np = n_i^2$$

## Doping

### N-Type (donor impurities — Group V: P, As, Sb)
Donors contribute extra electrons. Majority carriers: electrons.
$$n \approx N_D \gg p = \frac{n_i^2}{N_D}$$

### P-Type (acceptor impurities — Group III: B, Al, Ga)
Acceptors capture electrons, leaving holes. Majority carriers: holes.
$$p \approx N_A \gg n = \frac{n_i^2}{N_A}$$

## Carrier Transport

### Drift Current
Carriers move in response to electric field $\mathcal{E}$:
$$J_{drift} = (qn\mu_n + qp\mu_p)\mathcal{E} = \sigma \mathcal{E}$$

Conductivity: $\sigma = q(n\mu_n + p\mu_p)$

Resistivity: $\rho = 1/\sigma$

Typical mobilities in Si at 300 K:
- Electron mobility $\mu_n \approx 1350\ \text{cm}^2/\text{V·s}$
- Hole mobility $\mu_p \approx 480\ \text{cm}^2/\text{V·s}$

### Diffusion Current
Carriers diffuse from high to low concentration:
$$J_{n,diff} = qD_n \frac{dn}{dx}, \quad J_{p,diff} = -qD_p \frac{dp}{dx}$$

### Einstein Relation
Links mobility and diffusion coefficient:
$$\frac{D_n}{\mu_n} = \frac{D_p}{\mu_p} = \frac{k_BT}{q} = V_T$$

At 300 K: $V_T = kT/q \approx 26\ \text{mV}$

## Continuity Equations

For minority carriers (complete picture of carrier dynamics):
$$\frac{\partial n}{\partial t} = \frac{1}{q}\frac{\partial J_n}{\partial x} + G_n - R_n$$
$$\frac{\partial p}{\partial t} = -\frac{1}{q}\frac{\partial J_p}{\partial x} + G_p - R_p$$

Where $G$ = generation rate, $R$ = recombination rate (SRH, radiative, Auger).
