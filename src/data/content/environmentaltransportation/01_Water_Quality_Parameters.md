# Water Quality Parameters

## Introduction
Water quality parameters form the foundational metrics upon which environmental engineering relies to safeguard public health and preserve ecological integrity. These parameters are broadly classified into three categories: physical, chemical, and biological. Understanding the intricate balance of these properties is paramount for evaluating whether a given water body is suitable for consumption, recreation, or industrial use, and for designing effective treatment interventions when the water falls short of regulatory standards. 

The evaluation of water quality is not merely a static measurement but a dynamic assessment of a water body's health. Pollutants interact in complex ways, and engineers must decipher these interactions to formulate strategies that mitigate contamination. This document explores the critical water quality parameters, their real-world engineering applications, and the fundamental mathematical frameworks used to model their behaviors in aquatic environments.

## Physical Parameters
Physical parameters are typically the first indicators of water quality degradation. They include turbidity, color, temperature, taste, and odor.
- **Turbidity:** A measure of the light-scattering properties of water caused by suspended particulates. High turbidity can shield pathogens from disinfectants, making its reduction critical in water treatment.
- **Temperature:** Influences the rate of chemical and biological reactions. Elevated temperatures reduce the solubility of oxygen in water, which can have detrimental effects on aquatic life.
- **Solids:** Includes total suspended solids (TSS) and total dissolved solids (TDS). TSS affects light penetration and sedimentation rates, while TDS relates to the mineral content and salinity.

## Chemical Parameters
Chemical parameters provide a deeper understanding of the dissolved constituents within a water body.
- **pH and Alkalinity:** pH indicates the hydrogen ion concentration, dictating the acidity or basicity of the water. Alkalinity is the water's capacity to buffer against pH changes, primarily provided by bicarbonate, carbonate, and hydroxyl ions.
- **Biochemical Oxygen Demand (BOD) and Chemical Oxygen Demand (COD):** These are surrogate measures for organic pollution. BOD measures the amount of oxygen consumed by microorganisms while stabilizing organic matter under aerobic conditions, whereas COD measures the total amount of oxygen required to chemically oxidize all organic and inorganic compounds.
- **Dissolved Oxygen (DO):** The concentration of free, non-compound oxygen in water. It is a critical parameter for the survival of aerobic aquatic life. 
- **Nutrients:** Nitrogen and phosphorus are essential for biological growth but in excess, they trigger eutrophication—a rapid overgrowth of algae that depletes DO.

## Biological Parameters
Biological assessments focus on the living organisms within the water, primarily focusing on identifying pathogens that pose severe health risks to humans. Coliform bacteria, particularly *Escherichia coli* (E. coli), are used as indicator organisms. Their presence suggests that the water has been contaminated with fecal matter and may contain other dangerous waterborne pathogens.

## Engineering Applications
In environmental engineering, these parameters dictate the design and operational strategies of treatment facilities. For example, high turbidity raw water necessitates robust coagulation and flocculation processes. High BOD levels in wastewater demand extensive biological treatment, such as activated sludge aeration basins, to prevent severe DO depletion in the receiving river. Engineers continuously monitor these parameters to ensure compliance with strict environmental regulations like the Safe Drinking Water Act (SDWA) and the Clean Water Act (CWA).

---

## Detailed Mathematical Examples

### 1. Biochemical Oxygen Demand (BOD) Calculation
The exertion of BOD over time is typically modeled as a first-order kinetic reaction. The BOD at any time $t$ is a function of the ultimate carbonaceous BOD ($L_0$) and the deoxygenation rate constant ($k$).

**Problem:** A wastewater sample has an ultimate BOD ($L_0$) of $300 \text{ mg/L}$ and a deoxygenation rate constant ($k$) of $0.23 \text{ day}^{-1}$ (base $e$). Calculate the BOD exerted after 5 days ($BOD_5$).

**Solution:**
The equation for BOD exerted at time $t$ is:
$$
BOD_t = L_0 (1 - e^{-kt})
$$

Substitute the given values:
$$
BOD_5 = 300 \left(1 - e^{-0.23 \times 5}\right)
$$
$$
BOD_5 = 300 \left(1 - e^{-1.15}\right)
$$
$$
BOD_5 = 300 (1 - 0.3166) = 300 \times 0.6834 = 205.02 \text{ mg/L}
$$

The 5-day BOD is approximately $205 \text{ mg/L}$.

### 2. Alkalinity Calculation
Alkalinity is the sum of the titratable bases in the water. It is usually expressed in terms of calcium carbonate ($\text{CaCO}_3$) equivalence.

**Problem:** A water sample contains $40 \text{ mg/L}$ of $\text{Ca}^{2+}$ and $15 \text{ mg/L}$ of $\text{Mg}^{2+}$. Assuming alkalinity is primarily driven by bicarbonate and is equal to the total hardness, calculate the total hardness (and thus alkalinity) in $\text{mg/L as CaCO}_3$. (Equivalent weights: $\text{Ca}^{2+} = 20$, $\text{Mg}^{2+} = 12.15$, $\text{CaCO}_3 = 50$).

**Solution:**
The total hardness (TH) in $\text{mg/L as CaCO}_3$ is calculated using the formula:
$$
TH = \left( \frac{\text{Ca}^{2+} \text{ (mg/L)}}{\text{Eq. Wt. of Ca}^{2+}} + \frac{\text{Mg}^{2+} \text{ (mg/L)}}{\text{Eq. Wt. of Mg}^{2+}} \right) \times \text{Eq. Wt. of CaCO}_3
$$

Substitute the values:
$$
TH = \left( \frac{40}{20} + \frac{15}{12.15} \right) \times 50
$$
$$
TH = \left( 2.0 + 1.234 \right) \times 50
$$
$$
TH = 3.234 \times 50 = 161.7 \text{ mg/L as CaCO}_3
$$

The total hardness and equivalent alkalinity is $161.7 \text{ mg/L as CaCO}_3$.

### 3. Dissolved Oxygen Sag Curve (Streeter-Phelps Equation)
When wastewater is discharged into a river, it exerts a biochemical oxygen demand that depletes the dissolved oxygen. Simultaneously, the river reaerates through the surface. The critical DO deficit occurs when the rate of deoxygenation equals the rate of reaeration.

**Problem:** A stream has a reaeration constant ($k_r$) of $0.4 \text{ day}^{-1}$ and a deoxygenation constant ($k_d$) of $0.15 \text{ day}^{-1}$. The initial dissolved oxygen deficit ($D_0$) is $2 \text{ mg/L}$, and the ultimate BOD ($L_0$) just downstream of the discharge is $25 \text{ mg/L}$. Find the critical time ($t_c$) when the minimum dissolved oxygen occurs.

**Solution:**
The critical time $t_c$ is found using the Streeter-Phelps critical time equation:
$$
t_c = \frac{1}{k_r - k_d} \ln \left[ \frac{k_r}{k_d} \left( 1 - \frac{D_0 (k_r - k_d)}{k_d L_0} \right) \right]
$$

Substitute the given values:
$$
t_c = \frac{1}{0.4 - 0.15} \ln \left[ \frac{0.4}{0.15} \left( 1 - \frac{2 (0.4 - 0.15)}{0.15 \times 25} \right) \right]
$$
$$
t_c = \frac{1}{0.25} \ln \left[ 2.667 \left( 1 - \frac{2 \times 0.25}{3.75} \right) \right]
$$
$$
t_c = 4 \ln \left[ 2.667 \left( 1 - \frac{0.5}{3.75} \right) \right]
$$
$$
t_c = 4 \ln \left[ 2.667 \left( 1 - 0.1333 \right) \right] = 4 \ln \left[ 2.667 \times 0.8667 \right]
$$
$$
t_c = 4 \ln \left[ 2.311 \right] = 4 \times 0.837 = 3.35 \text{ days}
$$

The critical DO deficit will occur approximately $3.35 \text{ days}$ downstream.

---

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "raw", "label": "Raw Water Source"},
    {"id": "phys", "label": "Physical Parameters (Turbidity, Temp)"},
    {"id": "chem", "label": "Chemical Parameters (pH, BOD, DO)"},
    {"id": "bio", "label": "Biological Parameters (E. coli)"},
    {"id": "eval", "label": "Quality Evaluation"},
    {"id": "treat", "label": "Treatment Required"},
    {"id": "safe", "label": "Safe to Use"}
  ],
  "edges": [
    {"from": "raw", "to": "phys", "label": "Test"},
    {"from": "raw", "to": "chem", "label": "Test"},
    {"from": "raw", "to": "bio", "label": "Test"},
    {"from": "phys", "to": "eval", "label": "Assess"},
    {"from": "chem", "to": "eval", "label": "Assess"},
    {"from": "bio", "to": "eval", "label": "Assess"},
    {"from": "eval", "to": "treat", "label": "Fail Standards"},
    {"from": "eval", "to": "safe", "label": "Pass Standards"}
  ]
}
```
