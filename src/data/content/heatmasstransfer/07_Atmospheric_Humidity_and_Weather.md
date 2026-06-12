# Atmospheric Humidity and Weather

Psychrometrics is not confined to buildings and industrial dryers — it is the fundamental science behind weather, cloud formation, precipitation, and climate. The atmosphere is simply a very large, open psychrometric system.

## 1. The Atmospheric Lapse Rate

As air rises in the atmosphere, it encounters lower pressure and expands. This expansion is approximately adiabatic (no significant heat exchange with surrounding air over short timescales).

**Dry Adiabatic Lapse Rate (DALR):**
For unsaturated (dry) rising air, the temperature drops at approximately 9.8°C per 1,000 m of altitude gain.
$$ \Gamma_d = \frac{g}{c_{p,air}} \approx 9.8 \text{ °C/km} $$

**Saturated Adiabatic Lapse Rate (SALR):**
When air rises and cools to its dew point, condensation begins. Condensation releases latent heat, which partially compensates for the adiabatic cooling. The saturated lapse rate is therefore smaller — approximately 4–7°C/km (variable, depends on temperature and moisture content).

## 2. Cloud Formation

A parcel of moist air near the surface is warmer than the surrounding atmosphere (e.g., heated by sunlight over a dark field). It rises. As it rises, it cools at the DALR (9.8°C/km).

At some altitude, the parcel has cooled to its dew point temperature — the **Lifting Condensation Level (LCL)**. At this altitude, relative humidity reaches 100% and condensation begins. Condensed water droplets (0.01–0.1 mm) form around condensation nuclei (sea salt, dust, combustion particles). The cloud base is visually at the LCL.

Above the LCL, the parcel cools at the SALR. If the parcel remains warmer than the surrounding atmosphere, it is **unstable** — it continues to rise, forming towering cumulus clouds. If thunderstorm conditions exist (very large instability), the parcel can rise to 10–15 km altitude, forming cumulonimbus clouds.

## 3. Precipitation Mechanisms

Water droplets in a cloud are extremely small (0.01 mm) — far too small to fall against air resistance. They must grow to ~1 mm to fall as drizzle, ~2–5 mm to fall as rain.

**Collision-Coalescence (Warm Clouds, Tropics):**
Larger droplets fall faster than smaller ones, colliding and merging (coalescing) with smaller droplets in their path. Requires liquid water throughout the cloud (temperature above freezing).

**Bergeron-Findeisen Process (Cold Clouds, Extratropics):**
In mixed-phase clouds containing both ice crystals and supercooled liquid droplets, an important thermodynamic effect occurs:
*   Saturation vapor pressure over ice is lower than over supercooled liquid water at the same temperature.
*   Water vapor is supersaturated relative to ice but undersaturated relative to liquid.
*   Result: Vapor deposits on ice crystals (growing them) while liquid droplets evaporate.
*   Ice crystals grow rapidly until they are heavy enough to fall, melting into rain if the lower atmosphere is warm.

## 4. Humidity and Human Thermal Comfort

**The Wet Bulb Globe Temperature (WBGT):**
The primary international standard for assessing heat stress risk in occupational and athletic settings. It combines dry-bulb temperature, wet-bulb temperature, and globe temperature (measuring radiant heat from the sun) to estimate the effective thermal strain on the human body.
$$ WBGT_{outdoor} = 0.7 T_{wb} + 0.2 T_{globe} + 0.1 T_{db} $$

**The 35°C Wet-Bulb Limit:**
Research (Sherwood & Huber, 2010) established that a sustained wet-bulb temperature of 35°C (~95°F dew point) represents the theoretical survival limit for a healthy human with unlimited water — at this point, the body cannot cool itself by sweating even in shade with air movement.

As global temperatures rise, wet-bulb temperatures exceeding 35°C are beginning to be observed in parts of the Persian Gulf, South Asia, and other regions, raising serious concerns about human habitability under climate change.
