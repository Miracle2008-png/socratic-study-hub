# Circulating Fluidized Beds and Industrial Applications

The circulating fluidized bed (CFB) represents the pinnacle of gas-solid contacting technology. By operating at velocities far above the terminal velocity of particles, and recycling the entrained solids with a high-efficiency cyclone and a standpipe/valve system, the CFB achieves continuous, high-throughput gas-solid contact with unprecedented control.

## 1. CFB Configuration and Flow Regimes

A circulating fluidized bed consists of:
1. **Riser** (fast-fluidized bed): Tall vertical tube where gas flows upward at $v_s = 3$–$15 \, \text{m/s}$, carrying particles upward in a dilute suspension
2. **Primary cyclone(s)**: Separates particles from gas at the top of the riser
3. **Standpipe (downer)**: Collected solids flow downward under gravity (or pressure), controlled by a **slide valve** or **L-valve**
4. **Loop seal**: A small bubbling fluidized bed that allows solids to flow from the standpipe back into the riser bottom, preventing gas backflow

The solid circulation rate $G_s$ (kg/m²·s) is the key operating variable — it controls catalyst-to-oil ratio in FCC, sorbent utilisation in CFB combustors, and heat transfer.

## 2. Axial Void Fraction Profile in the Riser

The CFB riser is not uniform — it has a characteristic **S-shaped axial void fraction profile**:

- **Bottom zone** (dense phase): High solid concentration, $\varepsilon \approx 0.7$–$0.85$, vigorous back-mixing
- **Upper zone** (dilute phase): Low solid concentration, $\varepsilon \approx 0.95$–$0.99$, plug flow of gas and entrained solids

The transition between zones is gradual. The solid concentration profile is approximately:

$$\varepsilon(z) = \varepsilon^* + (\varepsilon_a - \varepsilon^*)\exp(-az)$$

Where $\varepsilon^*$ is the dilute-phase asymptotic void fraction and $\varepsilon_a$ is the dense bottom void fraction.

## 3. The Standpipe: Moving Bed vs. Fluidized Bed Mode

The standpipe must transport solids downward while maintaining a pressure seal (preventing gas from flowing backward into the riser). Two modes exist:

**Moving packed bed mode** (low aeration):
$$\frac{dP}{dz} = (1-\varepsilon_s)\rho_s g - \frac{\Delta P_{\text{friction}}}{L}$$

**Fluidized bed mode** (aeration added to standpipe to maintain fluidization):
$$\frac{dP}{dz} = (1-\varepsilon)\rho_s g = \rho_{\text{bed}} g$$

The standpipe must develop sufficient pressure to drive solids around the loop against all resistances (riser pressure drop, cyclone pressure drop, distributor pressure drop).

## 4. Industrial CFB Applications

### FCC (Fluid Catalytic Cracking)
The world's most important petroleum refining process, processing ~$15$ million barrels of oil per day globally:
- **Riser reactor**: Vacuum gas oil contacts hot zeolite catalyst at 520–550°C, cracks to gasoline, diesel, LPG
- **Regenerator**: Spent catalyst (coated with coke) is burned in a bubbling/turbulent fluidized bed at 680–730°C
- **Catalyst inventory**: 100–300 tonnes; circulation rate: 500–1500 t/h
- Contact time in riser: only 2–5 seconds

The engineering challenge: extract maximum conversion in 3 seconds while managing an enormous thermal balance (endothermic cracking balanced against exothermic coke burning).

### CFB Combustion
CFB boilers burn coal, biomass, or waste at 800–900°C with limestone injection for SO₂ capture:
$$\text{CaO} + \text{SO}_2 + \tfrac{1}{2}\text{O}_2 \to \text{CaSO}_4$$

At 850°C, the reaction is thermodynamically favourable. Ca:S molar ratios of 2–3 give >90% SO₂ capture without scrubbers — significantly simplifying flue gas treatment.

### Polyolefin Production (UNIPOL Process)
Ethylene or propylene is polymerised in a gas-phase fluidized bed at 70–110°C with Ziegler-Natta or metallocene catalysts. The polymer product is a powder that self-fluidizes:
- Bed height: 10–15 m; diameter: 4–6 m
- Production rate: up to 400,000 t/year per reactor

## 5. Scale-up Challenges in Fluidization

Fluidization is notoriously difficult to scale up from laboratory to industrial scale:

| Parameter | Lab (0.1 m) | Industrial (5–10 m) |
|-----------|-------------|---------------------|
| Bubble size | Small, uniform | Large, slugging possible |
| Solid mixing | Near-perfect | Significant backmixing |
| Gas bypassing | Minimal | Significant |
| Wall effects | Dominant | Negligible |

Key dimensionless groups for scale-up (Glicksman's scaling laws):

$$\frac{\rho_s}{\rho_g}, \quad \frac{v_s}{\sqrt{gd_p}}, \quad Re_p = \frac{\rho_g v_s d_p}{\mu}, \quad \frac{G_s}{\rho_g v_s}, \quad \frac{L}{D_T}, \quad \phi_s$$

All these must be preserved simultaneously to achieve hydrodynamic similarity between model and industrial unit.

## 6. Worked Example: FCC Riser Mass Balance

**Problem:** An FCC unit processes $F_{\text{feed}} = 50{,}000 \, \text{bbl/day}$ of vacuum gas oil (VGO, $\rho = 850 \, \text{kg/m}^3$). The catalyst-to-oil ratio is $C/O = 6 \, \text{kg cat/kg oil}$ (mass basis). If coke yield is 5.5 wt% of feed, calculate: (a) the catalyst circulation rate, (b) the coke production rate.

**Convert feed rate:**
$$\dot{m}_{\text{oil}} = 50{,}000 \times \frac{0.158987 \, \text{m}^3}{\text{bbl}} \times 850 \, \text{kg/m}^3 \times \frac{1}{86400 \, \text{s/day}} = 78.3 \, \text{kg/s}$$

**(a) Catalyst circulation rate:**
$$\dot{m}_{\text{cat}} = (C/O) \times \dot{m}_{\text{oil}} = 6 \times 78.3 = 470 \, \text{kg/s} = 1692 \, \text{t/h}$$

**(b) Coke production rate:**
$$\dot{m}_{\text{coke}} = 0.055 \times 78.3 = 4.31 \, \text{kg/s} = 15.5 \, \text{t/h}$$

This coke is deposited on the catalyst and burns off in the regenerator — releasing approximately $4.31 \times 32.8 \times 10^3 = 141 \, \text{MW}$ of thermal energy, which heats the catalyst to the desired regenerator temperature.
