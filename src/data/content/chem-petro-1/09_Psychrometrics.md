# Psychrometrics

Psychrometrics is the study of gas-vapor mixtures. While the principles apply to any mixture of a non-condensable gas and a condensable vapor, the term almost universally refers to the **Air-Water system**. Understanding psychrometrics is critical for designing HVAC systems, cooling towers, and industrial drying equipment.

## 1. Key Definitions

To navigate psychrometric charts and calculations, you must master these terms:

- **Dry-Bulb Temperature ($T_{db}$)**: The true thermodynamic temperature of the air, measured by a standard thermometer shielded from moisture and radiation.
- **Wet-Bulb Temperature ($T_{wb}$)**: The temperature read by a thermometer whose bulb is wrapped in a water-soaked wick exposed to moving air. As water evaporates from the wick, it cools the thermometer. The rate of evaporation depends on how dry the surrounding air is. Thus, $T_{wb}$ is an indirect measurement of humidity.
- **Dew Point Temperature ($T_{dp}$)**: The temperature to which air must be cooled (at constant pressure and humidity) for water vapor to begin condensing into liquid dew. At the dew point, the air is 100% saturated.

## 2. Measures of Humidity

Humidity is a measure of how much water vapor is in the air.

- **Absolute Humidity (or Humidity Ratio, $Y$ or $\omega$)**: The actual mass of water vapor per unit mass of *dry* air. (Units: kg water / kg dry air).
  $$ Y = \frac{M_{water}}{M_{air}} \frac{p_{water}}{P_{total} - p_{water}} $$
  
- **Relative Humidity ($RH$ or $\phi$)**: The ratio of the partial pressure of water vapor in the air ($p_w$) to the equilibrium vapor pressure of pure water ($p^*_w$) at the same temperature. It indicates how "full" the air is.
  $$ RH = \frac{p_{water}}{p^*_w(T_{db})} \times 100\% $$

## 3. The Psychrometric Chart

Rather than solving complex equations for every calculation, engineers use a graphical tool called the **Psychrometric Chart**. 

The chart plots various properties against each other at a constant total pressure (usually 1 atm). If you know any **two** independent properties of an air-water mixture (e.g., $T_{db}$ and $RH$, or $T_{wb}$ and $T_{db}$), you can pinpoint the exact state on the chart and immediately read off all other properties:
- Specific volume of the air
- Specific enthalpy of the air mixture
- Absolute humidity
- Dew point

## 4. Psychrometric Processes

Material and energy balances on air-water systems can be visualized as lines on the psychrometric chart:

1. **Sensible Heating/Cooling**: The air is heated or cooled without adding or removing moisture. This moves horizontally left or right on the chart. Absolute humidity stays constant, but Relative Humidity changes drastically.
2. **Humidification**: Injecting steam or water vapor into the air. Moves vertically upward.
3. **Dehumidification via Cooling**: Cooling air below its dew point causes water to condense out. The process moves left until it hits the 100% RH saturation curve, then travels down along the curve as water drops out of the air.
4. **Evaporative Cooling**: Hot, dry air passes over liquid water. The heat from the air evaporates the water, causing the air to cool down while simultaneously becoming more humid. This moves up and to the left along constant Wet-Bulb temperature lines.
