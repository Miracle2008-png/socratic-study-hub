# Reserves Estimation and Risk Analysis

Geologists have mapped the anticline with 3D seismic, drilled an exploratory well, and run the well logs. The resistivity spiked; it is officially an oil discovery. 

But a discovery is useless to investors unless you can quantify it. Before a company commits billions of dollars to build production platforms and pipelines, the geological team must answer the ultimate question: **Exactly how many barrels of oil are down there, and how certain are you?**

## 1. Volumetric Calculation (Original Oil In Place)

The most fundamental method for estimating the size of an oil field before production begins is the **Volumetric Method**. It is a simple geometric calculation of the pore space in the trap.

The volume of oil physically sitting in the rock is called the **Original Oil In Place (OOIP)**.

$$ \text{OOIP} = \frac{7758 \times A \times h \times \phi \times (1 - S_w)}{B_o} $$

*   **$A$ (Area):** The total acreage of the trap (mapped from 3D seismic).
*   **$h$ (Thickness):** The vertical thickness of the oil-bearing sandstone (measured from Gamma Ray logs).
*   **$\phi$ (Porosity):** The percentage of the rock that is empty pore space (measured from Density/Neutron logs).
*   **$S_w$ (Water Saturation):** The percentage of the pore space taken up by useless connate water (calculated from Resistivity logs). Therefore, $(1 - S_w)$ is the percentage of pores holding oil.
*   **$7758$:** A unit conversion factor to convert Acre-Feet into standard Barrels (bbls).
*   **$B_o$ (Formation Volume Factor):** Oil shrinks when you bring it to the surface. Deep underground, at 10,000 psi, oil absorbs massive amounts of dissolved natural gas, making it swell. When brought to the surface (14.7 psi), the gas bubbles out, and the oil shrinks. If $B_o = 1.2$, it means 1.2 barrels of underground oil will shrink down to exactly 1.0 barrel of sellable oil on the surface.

## 2. Recovery Factor and Reserves

OOIP is a massive number (often billions of barrels), but it is a misleading vanity metric. You can never pump 100% of the oil out of the rock. Capillary forces will trap a massive portion of the oil permanently in the microscopic pores.

The percentage of the OOIP that can physically and economically be brought to the surface is the **Recovery Factor (RF)**.
*   Primary Recovery (Natural pressure): $10\% - 20\%$
*   Secondary Recovery (Water flooding): $20\% - 40\%$
*   Tertiary Recovery ($\text{CO}_2$ or Steam injection): Up to $60\%$ (Rare).

The oil you can actually sell is called the **Reserves**.
$$ \text{Reserves} = \text{OOIP} \times \text{Recovery Factor} $$

## 3. The SEC Classification of Reserves (1P, 2P, 3P)

Because estimating underground volumes involves massive uncertainty, it is illegal for an oil company to simply guess their reserves and report it to Wall Street. 

The Securities and Exchange Commission (SEC) strictly regulates how reserves are classified and reported based on the mathematical probability of actually extracting them.

1.  **Proved Reserves (1P - P90):** The absolute lowest, safest estimate. There must be a 90% probability that the company will recover *at least* this much oil. The field must have been successfully drilled, tested, and proven to be economically profitable at today's oil prices. This is the only number banks care about.
2.  **Probable Reserves (P50):** The "best guess" or most likely estimate. There is a 50% probability that the actual recovered oil will equal or exceed this number. (Total 2P = Proved + Probable).
3.  **Possible Reserves (P10):** The highly optimistic, best-case scenario. There is only a 10% chance the field is actually this massive. (Total 3P = Proved + Probable + Possible).

## 4. Geological Risking and Expected Value

Before drilling the first exploratory "wildcat" well, the geology team must assign a mathematical probability to the geologic risk. What is the Chance of Success (CoS) that we will find *anything at all*?

The team assigns a probability (from 0.0 to 1.0) to each of the vital components of the Petroleum System.
*   Is there a mature Source Rock? ($P_{source} = 0.9$)
*   Is there a Reservoir Rock? ($P_{reservoir} = 0.8$)
*   Is the Trap valid? ($P_{trap} = 0.6$)
*   Is the Seal intact? ($P_{seal} = 0.7$)
*   Is the Timing correct? ($P_{timing} = 0.8$)

$$ \text{Chance of Geologic Success (CoS)} = 0.9 \times 0.8 \times 0.6 \times 0.7 \times 0.8 = 0.24 \text{ (or 24%)} $$

There is a 76% chance the well will be a completely dry hole.

The executives then calculate the **Expected Monetary Value (EMV)** to decide if they should drill:
$$ \text{EMV} = (\text{Reward of Success} \times \text{Probability of Success}) - (\text{Cost of Dry Hole} \times \text{Probability of Failure}) $$
If the EMV is positive, the \$100 million gamble is statistically worth taking.
