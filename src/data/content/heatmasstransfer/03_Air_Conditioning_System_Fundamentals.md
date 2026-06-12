# Air Conditioning System Fundamentals

An air conditioning system simultaneously controls the temperature, humidity, cleanliness, and distribution of air to maintain a comfortable or process-suitable indoor environment. The psychrometric chart is the primary tool for tracking what happens to the air at each step.

## 1. Basic Vapor-Compression HVAC System

The standard residential/commercial air conditioner consists of two main sides:

**The Refrigeration Cycle (inside the system):**
A refrigerant (e.g., R-410A) circulates through a compressor, condenser coil, expansion valve, and evaporator coil.

**Air-Side Process:**
*   **Return Air:** Warm, humid indoor air is drawn back through return air ducts.
*   **Mixing with Outdoor Air (Ventilation):** A fraction of outdoor fresh air is mixed with the return air to maintain indoor air quality (required by building codes — typically 15–30% outdoor air).
*   **Evaporator Coil (Cooling & Dehumidification):** The mixed air stream passes over a cold refrigerant-filled coil (typically at 5–12°C surface temperature, which is below the dew point of the mixed air). Moisture condenses on the cold coil surface and drips into a drain pan, effectively dehumidifying the air. The air simultaneously loses sensible heat.
*   **Reheating (if required):** In precision applications or very humid climates, the over-cooled air may be reheated slightly to achieve both the desired temperature and relative humidity simultaneously. (This is energy-inefficient and is avoided where possible.)
*   **Supply Air Distribution:** The conditioned air is forced through supply air ducts to diffusers in each room.

## 2. Sensible vs. Latent Loads

The cooling capacity of an HVAC system must handle two distinct types of heat:

**Sensible Load:**
Heat that raises the air temperature. Sources include:
*   Solar radiation through windows.
*   Heat conducted through walls and roof.
*   People (each person generates ~80–120W of sensible heat).
*   Lighting (incandescent bulbs are almost entirely sensible heat).
*   Equipment and computers.

**Latent Load:**
Heat associated with moisture addition — the energy required to evaporate water. Sources include:
*   People (each person also generates ~40–70W of latent heat through respiration and perspiration).
*   Cooking (restaurants have enormous latent loads).
*   Infiltration of hot humid outdoor air through building cracks.
*   Industrial processes.

The **Sensible Heat Ratio (SHR)** = Sensible Load / Total Load (sensible + latent).
*   A dry climate office might have SHR = 0.9 (mostly sensible).
*   A tropical restaurant might have SHR = 0.6 (heavy latent load).

The SHR determines what kind of coil and system configuration is needed.

## 3. HVAC Load Calculations

Before selecting equipment, engineers calculate the design **cooling load** and **heating load** for a building. This involves:

1.  **U-Value Calculations:** How much heat flows through each wall, roof, window, and floor section per degree of temperature difference ($\dot{Q} = UA\Delta T$).
2.  **Solar Heat Gain Coefficient (SHGC):** How much solar radiation passes through windows and becomes a heat load.
3.  **Internal Gains:** Tabulated heat output from people, lighting, and equipment.
4.  **Infiltration:** Air leaking into the building through cracks carries outdoor temperature and humidity inside.
5.  **Peak Design Conditions:** Load calculations are performed for the hottest summer day (for cooling) and coldest winter day (for heating) that occur statistically at that location.

## 4. System Selection

With the calculated loads:
*   **Tons of Refrigeration:** 1 ton = 12,000 BTU/hr = 3.517 kW. (Originally: the cooling power of melting 1 ton of ice per day).
*   Equipment (compressors, coils, air handling units) are selected from manufacturer catalogs to match the sensible and latent loads at the design conditions.
*   **Ductwork Design:** Air distribution must deliver adequate airflow (m³/s) to each zone while keeping velocity low enough to prevent noise and pressure drops manageable.
