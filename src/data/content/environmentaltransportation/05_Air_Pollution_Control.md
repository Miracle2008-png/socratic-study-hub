# Air Pollution Control

## Introduction
Air pollution is a pervasive global health and environmental crisis, heavily linked to industrialization, urbanization, and fossil fuel combustion. Environmental engineering addresses air quality through two primary avenues: the meteorological modeling of how pollutants disperse in the atmosphere, and the design of industrial control technologies to strip pollutants from exhaust streams before they are emitted.

Pollutants are generally categorized into criteria pollutants—such as particulate matter ($\text{PM}_{10}$ and $\text{PM}_{2.5}$), sulfur dioxide ($\text{SO}_2$), nitrogen oxides ($\text{NO}_x$), carbon monoxide ($\text{CO}$), and ozone ($\text{O}_3$)—and hazardous air pollutants (HAPs). Understanding the physical and chemical properties of these exhaust gases is critical for selecting the appropriate control technology.

## Particulate Control Technologies
Removing solid or liquid particles from a gas stream relies on applying a force (gravitational, centrifugal, electrostatic) that acts differently on the particles than on the gas molecules.
- **Cyclones:** Utilize centrifugal force. Gas enters tangentially, creating a vortex. Heavier particles are thrown to the walls and fall to the bottom. They are rugged and cheap but generally inefficient for fine particles ($\text{PM}_{2.5}$).
- **Baghouses (Fabric Filters):** Operate like a giant vacuum cleaner. The dirty gas passes through porous fabric bags, depositing a dust cake that acts as a highly efficient filter, even for sub-micron particles.
- **Electrostatic Precipitators (ESPs):** Apply a high voltage across discharge electrodes, ionizing the gas and imparting a negative charge to the particles. The particles then migrate to positively charged collection plates. They are heavily used in coal-fired power plants.

## Gas Control Technologies
Removing gaseous pollutants (like $\text{SO}_2$, $\text{NO}_x$, and VOCs) requires mass transfer operations or chemical conversions.
- **Absorption (Scrubbers):** Transferring a pollutant from the gas phase to a liquid solvent. For example, Flue Gas Desulfurization (FGD) uses a limestone slurry to absorb and neutralize $\text{SO}_2$.
- **Adsorption:** Trapping gaseous pollutants onto the surface of a highly porous solid, such as activated carbon.
- **Thermal and Catalytic Oxidation:** Combusting VOCs and CO at high temperatures to convert them into harmless carbon dioxide and water.

## Engineering Applications
Engineers use the Gaussian Plume Model to predict the downwind ground-level concentration of a pollutant released from a smokestack, ensuring compliance with National Ambient Air Quality Standards (NAAQS). Simultaneously, they must accurately size ESPs, baghouses, or scrubbers to achieve the required removal efficiency based on strict emission limits.

---

## Detailed Mathematical Examples

### 1. Electrostatic Precipitator (ESP) Collection Efficiency
The efficiency of an ESP is modeled by the Deutsch-Anderson equation, which exponentially relates efficiency to the total collection area, the gas flow rate, and the migration velocity of the charged particles.

**Problem:** A coal-fired power plant exhausts $50 \text{ m}^3\text{/s}$ of flue gas. An ESP is proposed to capture fly ash particles that have an effective drift (migration) velocity ($w$) of $0.12 \text{ m/s}$. To meet environmental regulations, the ESP must achieve a collection efficiency ($\eta$) of $99.5\%$. Calculate the required total collection plate area ($A$).

**Solution:**
The Deutsch-Anderson equation is:
$$
\eta = 1 - e^{-\frac{w A}{Q}}
$$

Rearranging the formula to solve for the Area ($A$):
$$
e^{-\frac{w A}{Q}} = 1 - \eta
$$
$$
-\frac{w A}{Q} = \ln (1 - \eta)
$$
$$
A = - \frac{Q}{w} \ln (1 - \eta)
$$

Substitute the known values (note that $\eta = 0.995$):
$$
A = - \frac{50}{0.12} \ln (1 - 0.995)
$$
$$
A = - 416.67 \times \ln (0.005)
$$
$$
A = - 416.67 \times (-5.298) = 2,207.5 \text{ m}^2
$$

The required collection plate area is approximately $2,208 \text{ m}^2$.

### 2. Gaussian Plume Model (Centerline Concentration)
The Gaussian Plume Model estimates the concentration of a pollutant downwind from a continuous point source, factoring in wind speed and atmospheric stability (which dictates the dispersion coefficients $\sigma_y$ and $\sigma_z$).

**Problem:** A smokestack with an effective release height ($H$) of $100 \text{ m}$ emits $\text{SO}_2$ at a rate ($E$) of $150 \text{ g/s}$. The wind speed at the stack height ($u$) is $5 \text{ m/s}$. At a specific distance downwind under slightly unstable conditions, the dispersion coefficients are $\sigma_y = 100 \text{ m}$ and $\sigma_z = 50 \text{ m}$. Calculate the ground-level centerline concentration of $\text{SO}_2$ (where $y = 0$ and $z = 0$) in $\mu\text{g/m}^3$.

**Solution:**
The simplified Gaussian Plume equation for ground-level centerline concentration is:
$$
C(x, 0, 0) = \frac{E}{\pi u \sigma_y \sigma_z} \exp \left( -\frac{1}{2} \left( \frac{H}{\sigma_z} \right)^2 \right)
$$

Substitute the values:
$$
C = \frac{150}{\pi \times 5 \times 100 \times 50} \exp \left( -\frac{1}{2} \left( \frac{100}{50} \right)^2 \right)
$$
$$
C = \frac{150}{78,540} \exp \left( -\frac{1}{2} (2)^2 \right)
$$
$$
C = 0.00191 \times \exp (-2)
$$
$$
C = 0.00191 \times 0.1353 = 2.58 \times 10^{-4} \text{ g/m}^3
$$

Convert to $\mu\text{g/m}^3$ (multiply by $10^6$):
$$
C = 258 \text{ }\mu\text{g/m}^3
$$

The ground-level concentration is $258 \text{ }\mu\text{g/m}^3$.

### 3. Air to Cloth Ratio in a Baghouse
The sizing of a fabric filter (baghouse) is determined by the air-to-cloth ratio ($V_f$), which is effectively the filtration velocity through the fabric.

**Problem:** An industrial facility needs to treat $30,000 \text{ m}^3\text{/hr}$ of dust-laden air. The chosen fabric has a recommended air-to-cloth ratio of $1.5 \text{ m/min}$. The filter bags are cylindrical, with a diameter of $0.15 \text{ m}$ and a length of $3 \text{ m}$. How many bags are required?

**Solution:**
First, convert the volumetric flow rate ($Q$) to $\text{m}^3\text{/min}$:
$$
Q = \frac{30,000}{60} = 500 \text{ m}^3\text{/min}
$$

Calculate the total cloth area required ($A_{total}$):
$$
A_{total} = \frac{Q}{V_f} = \frac{500}{1.5} = 333.33 \text{ m}^2
$$

Calculate the surface area of a single bag ($A_{bag}$), assuming the top and bottom are not used for filtration:
$$
A_{bag} = \pi \times D \times L = \pi \times 0.15 \times 3 = 1.4137 \text{ m}^2
$$

Calculate the number of bags ($N$):
$$
N = \frac{A_{total}}{A_{bag}} = \frac{333.33}{1.4137} = 235.78
$$

Since you cannot have a fraction of a bag, you round up to $236$ bags.

---

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "src", "label": "Industrial Emission Source"},
    {"id": "part", "label": "Particulate Control"},
    {"id": "cyc", "label": "Cyclone (Coarse Dust)"},
    {"id": "esp", "label": "ESP / Baghouse (Fine Dust)"},
    {"id": "gas", "label": "Gas Control"},
    {"id": "scrub", "label": "Wet Scrubber (SO2)"},
    {"id": "rto", "label": "Thermal Oxidizer (VOCs)"},
    {"id": "stk", "label": "Exhaust Stack"}
  ],
  "edges": [
    {"from": "src", "to": "part", "label": "Raw Exhaust"},
    {"from": "part", "to": "cyc", "label": "Pre-cleaning"},
    {"from": "cyc", "to": "esp", "label": "Fine Polish"},
    {"from": "esp", "to": "gas", "label": "PM Removed"},
    {"from": "gas", "to": "scrub", "label": "Acid Gas Treatment"},
    {"from": "gas", "to": "rto", "label": "Solvent Vapors"},
    {"from": "scrub", "to": "stk", "label": "Clean Gas"},
    {"from": "rto", "to": "stk", "label": "Clean Gas"}
  ]
}
```
