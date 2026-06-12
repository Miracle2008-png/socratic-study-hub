# Evaporative Cooling and Natural Ventilation

Not all cooling requires mechanical refrigeration. In dry climates, evaporative cooling can provide significant comfort cooling at a fraction of the energy cost of a conventional air conditioner. Combined with natural ventilation strategies, these passive techniques form the foundation of sustainable building design.

## 1. Direct Evaporative Cooling (Swamp Coolers)

A direct evaporative cooler (DEC) saturates incoming hot, dry air with water. As water evaporates, it absorbs latent heat from the air, cooling and humidifying it simultaneously. The thermodynamic process follows a constant wet-bulb temperature line on the psychrometric chart.

**Performance Limit:**
The cooled air can only reach the wet-bulb temperature of the inlet air — saturation efficiency approaches 100% theoretically but is typically 70–90% in practice:
$$ T_{out} = T_{db,in} - \varepsilon_{sat}(T_{db,in} - T_{wb,in}) $$

**Example:** Phoenix, Arizona in summer: $T_{db} = 43°C$, $T_{wb} = 22°C$.
*   With 80% saturation efficiency: $T_{out} = 43 - 0.80(43 - 22) = 43 - 16.8 = 26.2°C$
*   Cooling from 43°C to 26°C — excellent performance in a dry climate.

**Climate Dependency:**
*   **Dry climates (low humidity ratio):** Large difference between dry and wet bulb → substantial cooling potential. Works well.
*   **Humid climates (high humidity ratio):** Small difference between dry and wet bulb → minimal cooling. Outlet air is both warm AND humid. Does not work.

## 2. Indirect Evaporative Cooling

In indirect systems, the primary air stream is cooled by a secondary (working) air stream through a heat exchanger, without adding moisture to the primary stream.

The secondary stream is cooled by evaporation (like a direct system), then this cooled secondary air cools the primary supply air through a plate or tube heat exchanger. The primary air leaves cool but dry — at the dew point of the wet-bulb temperature, which is below the wet-bulb of the inlet air.

The Maisotsenko cycle (M-Cycle) uses a clever arrangement of indirect and direct stages to achieve outlet temperatures below the inlet wet-bulb temperature — theoretically approaching the dew-point temperature. Sub-wet-bulb cooling is a thermodynamic innovation that makes evaporative cooling viable in more humid climates.

## 3. Natural Ventilation Strategies

Natural ventilation uses wind pressure, buoyancy (stack effect), or both to move air through a building without mechanical fans.

**Wind-Driven Ventilation:**
Wind creates positive pressure on the windward face of a building and negative pressure on the leeward face. Opening windows on both sides creates cross-ventilation — a through-breeze that carries heat and CO₂ out of the building.
*   Effective for narrow buildings (depth < 5× floor-to-ceiling height).
*   Flow rate: $\dot{V} = C_d A_{window} \sqrt{2\Delta P / \rho}$

**Stack (Buoyancy) Effect:**
Warm air inside a building is less dense than cool outdoor air. It rises and exits through high-level openings (clerestory windows, roof ventilators). This draws cool air in at low level through floor vents or low windows.
*   Driving pressure: $\Delta P = \rho g H \Delta T / T$ (where $H$ is the height difference between inlet and outlet openings).
*   Works best in tall atria, stairwells, and double-skin facades.

**Night Purge / Night Cooling:**
In climates with large daily temperature swings (hot days, cool nights), buildings can be purged with cool night air to pre-cool the building's thermal mass (heavy concrete slabs, stone walls). The stored coolness then moderates the temperature rise during the next day, reducing or eliminating the need for air conditioning.

## 4. Energy Code Requirements and Sustainability

Modern energy codes (ASHRAE 90.1 in the USA, Part L in the UK) mandate minimum energy performance for HVAC systems. Key strategies required or incentivized include:
*   Heat recovery ventilation (HRV/ERV) in high-performance buildings.
*   Variable speed drives on all fans and pumps above 5 kW.
*   Economizer cycles — using cool outdoor air directly for cooling when conditions permit.
*   High-efficiency chiller and boiler minimum COP/AFUE requirements.

Passive cooling and natural ventilation strategies can reduce building cooling energy by 50–90% in appropriate climates, making them cornerstones of zero-energy building design.
