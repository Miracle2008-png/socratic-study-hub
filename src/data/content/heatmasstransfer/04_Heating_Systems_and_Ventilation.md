# Heating Systems and Ventilation

While air conditioning is synonymous with cooling in many climates, HVAC engineers must design systems that handle both summer cooling and winter heating — often with the same ductwork infrastructure.

## 1. Winter Heating Processes on the Psychrometric Chart

In winter, outdoor air is cold and dry. When it infiltrates (or is deliberately brought in as ventilation) into a warm building, two problems occur simultaneously:
1.  The air must be **heated** (sensible heating) to reach comfort temperature.
2.  The act of heating dry outdoor air *lowers* its relative humidity further. Indoor RH in winter commonly drops to 10–20% without humidification, causing:
    *   Dry skin, static electricity, throat irritation.
    *   Wood furniture, flooring, and musical instruments cracking as they lose moisture.
    *   Increased susceptibility to respiratory viral infections (viruses survive longer at low humidity).

**Solution:** A **humidifier** adds water vapor to the supply air. Common types include:
*   **Steam humidifiers:** Electrically boil water and inject steam directly into the air duct.
*   **Evaporative (Media) Humidifiers:** Water trickles over a porous media pad; airflow evaporates moisture into the air.
*   **Ultrasonic humidifiers:** High-frequency vibrations create a fine mist.

## 2. Heat Pumps

A heat pump is a refrigeration cycle operating in reverse — instead of pumping heat out of a building (air conditioning), it pumps heat *into* a building from a cold outdoor environment.

**The Counter-Intuitive Principle:**
Even when outdoor air is at -5°C, it still contains significant thermal energy. A heat pump extracts this low-grade outdoor heat and "upgrades" it by compressing the refrigerant, delivering heat at a higher temperature inside.

**Coefficient of Performance (COP) for Heating:**
$$ COP_{HP} = \frac{Q_{heating}}{W_{compressor}} $$

A modern heat pump can deliver 3–4 kW of heat for every 1 kW of electricity consumed (COP = 3–4). Compare this to a 100% efficient electric resistance heater, which delivers exactly 1 kW of heat per kW of electricity (COP = 1). Heat pumps are inherently more efficient than direct electric resistance heating.

**Limitation:** As outdoor temperature drops below -10°C to -15°C, the COP falls and the heat pump struggles to extract sufficient heat. Modern cold-climate heat pumps use variable-speed compressors and optimized refrigerants (like R-32 or R-454B) to maintain adequate performance down to -25°C.

## 3. Ventilation Requirements

Fresh air ventilation is non-negotiable for occupant health. Without it, CO₂, volatile organic compounds (VOCs) from furniture and carpets, and other pollutants accumulate.

**ASHRAE Standard 62.1** sets minimum ventilation rates for buildings:
*   Offices: ~8.5 L/s per person + 0.9 L/s per m² of floor area.
*   Schools, hospitals, and dense occupancy spaces have higher requirements.

**The Ventilation-Energy Trade-off:**
Bringing in outdoor air requires conditioning it (heating in winter, cooling in summer) — which is pure energy waste from a thermal perspective. **Energy Recovery Ventilators (ERV)** and **Heat Recovery Ventilators (HRV)** use a rotary heat exchanger (discussed in the previous module) to capture 70–80% of the thermal energy from the exhaust air and transfer it to the incoming fresh air.

## 4. Variable Air Volume (VAV) Systems

Traditional HVAC systems supply a **constant volume** of air, varying the supply temperature to control the heating/cooling output. This wastes fan energy.

Modern commercial buildings use **Variable Air Volume (VAV)** systems:
*   A central air handling unit (AHU) conditions air to a fixed supply temperature (~13°C for cooling).
*   VAV "boxes" in each zone have motorized dampers that open or close to deliver more or less conditioned air as needed.
*   As zones require less cooling, dampers close, reducing system airflow. Variable-speed fan drives (VFD) reduce the fan speed proportionally.
*   **Energy saving:** Fan power is proportional to the cube of speed ($P \propto N^3$). Reducing fan speed to 80% cuts fan power to $(0.8)^3 = 51\%$ — half the energy for a 20% speed reduction. VAV systems save 30–60% in fan energy compared to constant volume systems.
