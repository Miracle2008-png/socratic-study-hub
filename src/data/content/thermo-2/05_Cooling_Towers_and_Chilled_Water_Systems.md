# Cooling Towers and Chilled Water Systems

Large commercial buildings and industrial plants generate more heat than can be practically removed by simple refrigerant-based air conditioners with air-cooled condensers. At this scale, engineers use **chilled water systems** to distribute cooling energy throughout the building, and **cooling towers** to reject waste heat to the atmosphere.

## 1. Chilled Water Systems

Instead of routing refrigerant pipes to every air handling unit throughout a large building, a chilled water system uses water as the heat transfer intermediary.

**System Architecture:**
1.  **Chiller:** A large central refrigeration machine (electric, 100–5,000 tons of capacity). Refrigerant circulates inside the chiller. The evaporator side absorbs heat from building water, chilling it to ~6°C (chilled water supply, CHWS).
2.  **Chilled Water Pumps:** Pump the ~6°C water through insulated pipes to every air handling unit in the building.
3.  **Air Handling Units (AHU):** Each AHU passes room air over a chilled water coil. Heat transfers from the air to the water. The water warms from 6°C to ~12°C (chilled water return, CHWR) and flows back to the chiller.
4.  **Chiller (Condenser Side):** The refrigerant dumps its absorbed heat plus compressor work into a separate water loop — the condenser water. This condenser water is pumped to the cooling tower on the roof.

## 2. Cooling Towers

A cooling tower is an evaporative heat rejection device. It cools the hot condenser water by evaporating a small portion of the water into the atmosphere.

**How It Works:**
1.  Hot condenser water (typically 35°C) is pumped to the top of the tower and sprayed or distributed over "fill media" — plastic or wood slats that break the water into a thin film.
2.  Ambient air is blown (or drawn) upward through the fill, in direct contact with the falling water.
3.  A small fraction of the water evaporates. Since evaporation absorbs latent heat, the remaining water is cooled.
4.  Cooled water (typically 29°C) collects in the basin at the bottom and returns to the chiller condenser.
5.  The warm, moist air exits from the top — the familiar "steam" plume visible above tall buildings.

**Evaporative Cooling Efficiency:**
The cooling tower can reject heat to an ambient air temperature that is *lower* than the wet-bulb temperature of the air — not the dry-bulb temperature. On a 35°C dry-bulb day with 20°C wet-bulb temperature, the tower can cool water to 22–24°C, enabling the chiller to operate at high efficiency.

**Water Consumption:**
The evaporation rate is approximately 2% of the total water flow rate per 10°C of cooling. A large building cooling tower can evaporate 50–200 liters of water per minute, requiring a continuous makeup water supply and treatment.

**Drift and Legionella:**
Cooling tower drift (tiny water droplets carried off by air) is a public health concern because the warm, nutrient-rich water is an ideal breeding ground for *Legionella pneumophila* bacteria, the cause of Legionnaires' disease. Regular biocide treatment, drift eliminators, and flushing protocols are mandatory.

## 3. Chiller Performance (COP and IPLV)

**COP of a Chiller:**
$$ COP_{chiller} = \frac{\dot{Q}_{cooling}}{\dot{W}_{compressor}} $$

Modern electric water-cooled centrifugal chillers achieve COP = 5.5–7.0 at full load, far better than small air-cooled residential units (COP ≈ 2.8–3.5).

**IPLV (Integrated Part Load Value):**
Buildings rarely operate at full design load. Most of the time, the outdoor temperature is cooler than design day, and occupancy is partial. IPLV is a weighted average COP at 25%, 50%, 75%, and 100% load conditions, representing realistic annual performance. Variable-speed chiller compressors dramatically improve part-load efficiency, with some modern chillers achieving COP > 10 at light load with cool condenser water.
