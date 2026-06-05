# The Psychrometric Chart

The psychrometric chart is the engineer's primary tool for visualizing and analyzing moist air processes. All the psychrometric properties — dry-bulb temperature, wet-bulb temperature, dew point, humidity ratio, relative humidity, and enthalpy — are encoded into a single two-dimensional graph. By locating any two known properties, all others can be read off instantly.

## 1. Anatomy of the Psychrometric Chart

**The X-Axis:** Dry-Bulb Temperature ($T_{db}$), running from left (cold) to right (warm).

**The Y-Axis (right side):** Humidity Ratio ($\omega$), running from bottom (dry) to top (moist).

**Saturation Curve (Left Boundary):**
The curved left edge of the chart. Any point on this curve represents 100% relative humidity (saturated air). You cannot go further left without condensation occurring. The dew point of any air state corresponds to the point on the saturation curve directly to the left of it (at the same humidity ratio).

**Relative Humidity Lines:**
Curved lines running from lower-left to upper-right, parallel to the saturation curve. The 50% RH line sits roughly in the middle of the chart. Moving upward and to the left increases RH.

**Wet-Bulb Temperature Lines:**
Diagonal straight lines running downward from upper-left to lower-right. The wet-bulb temperature is read where one of these lines intersects the saturation curve.

**Enthalpy Lines:**
Approximately parallel to the wet-bulb temperature lines. The enthalpy value is typically labeled on an external scale.

**Volume Lines:**
Nearly vertical lines giving the specific volume of the moist air (m³/kg dry air).

## 2. Locating a State Point

Given any two independent properties, you can locate the air state uniquely on the chart.

**Example:** $T_{db} = 30°C$ and $\phi = 50\%$ RH.
1.  Find 30°C on the X-axis.
2.  Follow the vertical line upward until it intersects the 50% RH curve.
3.  That intersection is your state point.
4.  From that point, you can now read off: $\omega \approx 13.3$ g/kg, $T_{wb} \approx 21.5°C$, $T_{dp} \approx 18.4°C$, $h \approx 64.4$ kJ/kg.

## 3. Basic Psychrometric Processes

**Sensible Heating (Moving Right, Horizontal):**
Adding heat without adding moisture (e.g., an electric resistance heater). The humidity ratio stays constant; dry-bulb temperature increases; relative humidity decreases (the air can now "hold" more moisture so the fraction it holds drops).

**Sensible Cooling (Moving Left, Horizontal):**
Removing heat without removing moisture (e.g., a chilled surface above the dew point). Opposite of sensible heating.

**Cooling and Dehumidification (Moving Left and Down):**
When air contacts a surface cooler than its dew point, moisture condenses out. This is the primary function of a refrigeration-based air conditioning system — cool air below dew point to remove moisture, then reheat to comfort temperature. The state point moves diagonally toward the lower-left, following a roughly straight line toward the saturation curve.

**Humidification (Moving Up, Vertical):**
Adding steam or water mist at constant dry-bulb temperature. The humidity ratio increases; enthalpy increases.

**Adiabatic Saturation (Moving Left, Along Wet-Bulb Lines):**
Water evaporates into the air without external heat input (e.g., an evaporative cooler / swamp cooler). The process follows a wet-bulb temperature line — the air cools and humidifies simultaneously. Final state is the saturation curve at the wet-bulb temperature. Works effectively only in dry climates (low initial humidity ratio).

**Mixing of Two Air Streams:**
When two streams of moist air mix, the resulting state lies on a straight line connecting the two individual state points on the psychrometric chart, at a position determined by the mass-weighted average of their enthalpies and humidity ratios.
