# Advanced Rankine Cycle Modifications

The simple ideal Rankine cycle consists of a pump, boiler, turbine, and condenser. To achieve the high efficiencies demanded by modern power generation economics and environmental regulations, real steam power plants employ sophisticated cycle modifications designed to increase the average temperature at which heat is added and decrease the average temperature at which heat is rejected.

## 1. Reheating

In a reheat Rankine cycle, steam does not expand all the way to condenser pressure in a single turbine. Instead, it expands partially in a High-Pressure (HP) turbine, is routed back to the boiler to be reheated at constant pressure, and then expands to condenser pressure in a Low-Pressure (LP) turbine.

**Benefits:**
- **Increased Work Output:** The area enclosed by the cycle on a T-s diagram increases.
- **Higher Thermal Efficiency:** The average temperature of heat addition increases slightly.
- **Moisture Control:** This is the most critical practical benefit. Expanding high-pressure steam entirely in one turbine often results in excessive moisture (quality $x < 0.90$) at the turbine exhaust, leading to severe droplet erosion of the fast-moving LP turbine blades. Reheating shifts the expansion process to the right on the T-s diagram, ensuring the steam remains relatively dry upon exiting the LP turbine.

Modern large power plants may use double reheating to push efficiencies even higher.

## 2. Regeneration (Feedwater Heating)

Regeneration is the most impactful modification for improving Rankine cycle efficiency. It involves extracting (bleeding) a fraction of the steam from intermediate stages of the turbine and using it to preheat the liquid water (feedwater) leaving the pump before it enters the boiler.

**The Thermodynamic Rationale:**
In a simple cycle, cold feedwater enters the boiler at a temperature far below the combustion gas temperature. Heating this cold water constitutes highly irreversible heat transfer across a massive temperature difference, destroying significant exergy. By preheating the feedwater using partially expanded steam, the average temperature at which the boiler adds heat from the external source is raised considerably, bringing the cycle efficiency much closer to the Carnot ideal.

## 3. Types of Feedwater Heaters (FWH)

**Open Feedwater Heaters (Direct Contact):**
The extracted steam and the subcooled feedwater physically mix in a chamber. They exit as a single stream, typically saturated liquid at the heater pressure.
- *Pros:* Simple, inexpensive, excellent heat transfer (direct contact), also serves as a deaerator to remove dissolved oxygen (which causes corrosion).
- *Cons:* Requires a separate feedwater pump after every open heater because the streams must mix at the same pressure, and the mixed stream must then be pumped to the next higher pressure level.

**Closed Feedwater Heaters:**
The extracted steam and the feedwater flow through separate tubes within a shell-and-tube heat exchanger. The steam condenses on the outside of the tubes, heating the feedwater inside. The streams do not mix.
- *Pros:* Only one main boiler feed pump is required for the entire system, as the feedwater can remain at boiler pressure throughout.
- *Cons:* More expensive, less effective heat transfer (requires a $\Delta T$ between streams), requires handling the condensed extraction steam (usually cascaded down to lower-pressure heaters via a trap, or pumped forward).

Modern power plants use a combination: 5 to 8 closed heaters and usually one open heater functioning as the deaerator.
