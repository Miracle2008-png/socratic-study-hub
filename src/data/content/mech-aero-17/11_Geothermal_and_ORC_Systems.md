# Geothermal and Organic Rankine Cycles (ORC)

While water is an excellent working fluid for high-temperature heat sources (coal, nuclear), it performs poorly when the heat source is at low or moderate temperatures (e.g., 80°C to 150°C). Such sources include geothermal reservoirs, solar ponds, and industrial waste heat.

Water has a very high specific volume at low boiling pressures. A steam turbine designed to extract power from 100°C steam would be massive, expensive, and inefficient. To harness low-grade heat, engineers turn to the **Organic Rankine Cycle (ORC)**.

## 1. The Organic Rankine Cycle

An ORC operates identically to a standard Rankine cycle (pump, evaporator/boiler, turbine, condenser). The distinction is the working fluid: instead of water, it uses an organic fluid, typically a hydrocarbon (like isobutane, pentane) or a refrigerant (like R-134a, R-245fa).

**Why use organic fluids?**
- **Lower Boiling Point:** They boil at much lower temperatures than water for a given pressure, allowing them to vaporize using low-grade heat sources.
- **Higher Vapor Density:** At these low temperatures, organic vapors are much denser than steam. This allows for compact, smaller, and less expensive turbines.
- **Dry Expansion:** Many organic fluids have a "dry" or "isentropic" saturated vapor curve. When they expand isentropically in a turbine from a saturated vapor state, they remain superheated (quality remains 1.0). Unlike steam, there is no moisture formation in the turbine, eliminating droplet erosion and the need for superheating.

## 2. Geothermal Power Plants

Geothermal energy extracts heat from the Earth's crust. The type of power cycle used depends heavily on the temperature and state of the geothermal resource.

### Dry Steam Plants
The rarest and simplest geothermal resource (e.g., The Geysers in California). The well produces highly pressurized, dry steam directly.
- **Cycle:** The steam is routed straight through a rock catcher and directly into a steam turbine.

### Flash Steam Plants
The most common type for high-temperature resources (>180°C). The well produces high-pressure, superheated liquid water.
- **Cycle:** As the water flows to the surface, pressure drops, causing it to "flash" (partially boil) into a two-phase mixture. A separator splits the steam and liquid. The steam drives a standard turbine. The remaining liquid is injected back into the ground (or flashed again at a lower pressure in a double-flash plant).

### Binary Cycle Plants (ORC)
Used for moderate-temperature resources (80°C to 180°C) where flashing would produce too little steam or operate at unviably low pressures.
- **Cycle:** The hot geothermal water is pumped to the surface under pressure (preventing boiling) and passed through a heat exchanger.
- It transfers its heat to a secondary, closed loop containing an **organic working fluid**.
- The organic fluid vaporizes, drives an ORC turbine, and condenses. The cooled geothermal water is re-injected.
- **Advantage:** Because the geothermal fluid never boils or touches the turbine, issues with scaling, corrosion, and emission of non-condensable corrosive gases ($H_2S$) are entirely contained within the robust primary heat exchanger.
