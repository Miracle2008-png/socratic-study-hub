# Introduction to Psychrometrics

**Psychrometrics** is the science that studies the thermodynamic properties of moist air — a mixture of dry air and water vapor. It is the fundamental science behind heating, ventilation, and air conditioning (HVAC), weather forecasting, industrial drying, and agricultural climate control.

Understanding psychrometrics is essential for designing comfortable, energy-efficient buildings and industrial processes involving moisture.

## 1. Why Moist Air Matters

Pure dry air is a well-understood ideal gas. But the air we breathe always contains water vapor in varying amounts. This water vapor has profound effects:

*   **Human Comfort:** The human body cools itself by sweating. Evaporation of sweat requires the surrounding air to be able to absorb more moisture. If the air is already saturated (100% humidity), sweat cannot evaporate — you feel unbearably hot even at moderate temperatures. This is why "it's not the heat, it's the humidity" is true.
*   **Building Envelope:** Moisture migrates through walls. If warm moist indoor air contacts a cold surface inside a wall cavity, it condenses — creating mold, rot, and structural decay.
*   **Industrial Processes:** Paper, textile, pharmaceutical, and food manufacturing processes are all highly sensitive to air humidity. Too dry or too moist, and the product quality degrades or the process fails.

## 2. Fundamental Properties of Moist Air

**Dry-Bulb Temperature ($T_{db}$):**
The ordinary temperature measured by a standard thermometer in the shade. What we typically call "room temperature."

**Humidity Ratio (Specific Humidity, $\omega$):**
The mass of water vapor per unit mass of *dry air* in the mixture.
$$ \omega = \frac{m_{vapor}}{m_{dry air}} \quad \text{(kg water / kg dry air)} $$
This is the most fundamental measure of the absolute moisture content of air. (Also called the "mixing ratio" in meteorology).

**Relative Humidity ($\phi$):**
The most commonly cited humidity measure. The ratio of the actual water vapor pressure to the saturation pressure at the same temperature:
$$ \phi = \frac{P_v}{P_{sat}(T)} $$
*   100% RH means the air is saturated — it holds the maximum possible water vapor at that temperature.
*   50% RH means the air holds half the maximum possible moisture.
*   The ideal comfort zone for humans is approximately 40–60% RH.

**Dew Point Temperature ($T_{dp}$):**
The temperature at which moist air must be cooled (at constant pressure and humidity ratio) until it reaches saturation and water vapor begins to condense.
*   On a humid summer day, cold outdoor surfaces (like pipes, glasses of cold water, or car hoods at dawn) cool the adjacent air below its dew point, causing dew or condensation.

**Wet-Bulb Temperature ($T_{wb}$):**
Measured by a thermometer whose bulb is wrapped in a wet wick. Evaporation of water cools the wick — the drier the air, the more evaporation and the greater the cooling. Wet-bulb temperature is tied to both the actual air temperature and humidity simultaneously. It is the key measurement for human heat stress assessment.

**Enthalpy of Moist Air ($h$):**
The total energy content per kilogram of dry air, including both sensible heat of the air and latent heat of the water vapor:
$$ h = c_{p,air} T + \omega (h_{fg,0} + c_{p,steam} T) \approx 1.005 T + \omega (2501 + 1.86 T) \quad \text{kJ/kg dry air} $$
