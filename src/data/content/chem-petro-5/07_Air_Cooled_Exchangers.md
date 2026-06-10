# Air-Cooled Heat Exchangers (Fin-Fans)

In locations where cooling water is scarce, expensive, or environmentally restricted (e.g., deserts, arid regions, or strict thermal discharge regulatory zones), process plants reject heat directly to the atmosphere using **Air-Cooled Heat Exchangers** (ACHE), commonly known as fin-fans.

## 1. The Fundamental Problem of Air Cooling

The core challenge of air cooling lies in the thermal properties of air:
- Low density ($\rho \approx 1.2 \, \text{kg/m}^3$)
- Low specific heat capacity ($c_p \approx 1.0 \, \text{kJ/kg·K}$)
- Extremely low thermal conductivity ($k \approx 0.026 \, \text{W/m·K}$)

Because of these poor properties, the convective heat transfer coefficient for air flowing across bare tubes is abysmal: $h_o \approx 30$ to $60 \, \text{W/m}^2\text{K}$. 

If we have a process fluid inside the tube (e.g., condensing steam with $h_i = 10{,}000 \, \text{W/m}^2\text{K}$), the air-side resistance will completely bottleneck the overall coefficient $U$.

## 2. Extended Surfaces (Fins)

To compensate for the low air-side $h_o$, engineers dramatically increase the air-side surface area $A_o$ using **extended surfaces or fins**.

The heat transfer rate from a finned tube is:
$$Q = h_o A_o \eta_o (T_w - T_{\infty})$$

Where $\eta_o$ is the **overall surface efficiency**. Fins are not 100% efficient; the tip of the fin is cooler than the base because heat must conduct along the thin fin metal. High-conductivity metals (aluminium) are essential for fins.

Typical finned tubes use extruded or wrapped aluminium fins on carbon steel or stainless steel core tubes. The ratio of outside to inside area ($A_o/A_i$) is typically 15 to 25. By increasing $A_o$ by a factor of 20, we effectively cancel out the low $h_o$, bringing the air-side thermal resistance in line with the tube-side resistance.

## 3. ACHE Construction

An industrial ACHE consists of three main components:
1. **The Tube Bundle:** A horizontal bank of finned tubes, typically 3 to 8 rows deep. Process fluid flows inside the tubes.
2. **The Fan System:** Massive axial-flow fans (up to $10 \, \text{m}$ in diameter) that force air across the bundle.
3. **The Plenum:** A metal enclosure that directs the air from the fan to the bundle.

**Draft Arrangements:**
- **Forced Draft:** The fan is positioned *below* the bundle and pushes cold ambient air upward through the tubes. 
  - *Pros:* Fan operates in cold air (longer life, denser air means better fan efficiency), easy maintenance.
  - *Cons:* Poor air distribution across the bundle, prone to hot air recirculation.
- **Induced Draft:** The fan is positioned *above* the bundle and pulls hot air upward through the tubes.
  - *Pros:* Better air distribution, less prone to hot air recirculation (air exits at high velocity).
  - *Cons:* Fan motor operates in the hot exhaust air stream.

## 4. Design Considerations and Weather Effects

ACHEs are at the mercy of the weather. The inlet cooling temperature is the **ambient dry-bulb temperature**.

- **Summer Design:** The exchanger must be sized for the highest expected summer temperature. If the ambient air is 45°C, you cannot cool the process fluid below ~55°C.
- **Winter Operation:** In freezing winter conditions, the ACHE can overcool the process fluid, leading to freezing, wax deposition (pour point issues in oil), or thermal shock. 
- **Control:** To manage capacity during cold weather, ACHEs use variable frequency drives (VFDs) to slow the fans, or automatic louvers to restrict airflow.

## 5. Water Cooling vs. Air Cooling Economics

The decision between a shell-and-tube exchanger (using cooling water) and an ACHE involves a complex economic trade-off:

| | Air-Cooled Heat Exchanger | Water-Cooled Shell & Tube |
|---|---|---|
| **Capital Cost (CAPEX)** | High (massive structure, fins, fans) | Low (compact shell) |
| **Operating Cost (OPEX)** | Low (only fan electricity) | High (pumping water, cooling tower fans, water treatment chemicals) |
| **Maintenance** | Low (fin cleaning) | High (tube fouling, cooling tower maintenance) |
| **Environmental Impact** | Minimal | High (water consumption, thermal pollution) |
| **Lowest Possible Process Temp** | Ambient Dry-Bulb + ~10°C | Ambient Wet-Bulb + ~5°C (much cooler in summer) |

In modern grassroots refineries and chemical plants, air cooling is used to remove heat down to about 60°C. Water cooling (trim coolers) is only used for the final drop from 60°C down to 40°C, drastically reducing the total cooling water demand of the plant.
