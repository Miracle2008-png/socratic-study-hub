# HVAC Controls and Building Automation

A well-designed HVAC system is useless without intelligent control. Controls ensure the system maintains comfort conditions efficiently across the wide range of occupancy patterns, weather conditions, and internal loads that occur in real buildings.

## 1. Basic Control Fundamentals in HVAC

**Controlled Variable:** What you want to keep constant — typically room dry-bulb temperature, but can include humidity, CO₂ concentration, or space static pressure.

**Manipulated Variable:** What the controller adjusts — chilled water valve position, fan speed, heating coil power, etc.

**Sensor → Controller → Actuator Loop:**
A temperature sensor in the room sends a signal to the controller. The controller compares the reading to the setpoint, computes a control action (often PID — described in the Control Theory module), and commands the actuator (a control valve, damper, or variable speed drive) to adjust.

## 2. Common HVAC Control Sequences

**Single-Zone Air Handling Unit:**
*   Cooling mode: If room temperature > setpoint, open chilled water valve to increase cooling.
*   Heating mode: If room temperature < setpoint, modulate heating valve or heat pump.
*   Economizer: Compare outdoor air enthalpy to return air enthalpy. If outdoor air is cooler and drier, open outdoor air damper to 100% and use free cooling.

**VAV Box Control:**
Each Variable Air Volume (VAV) box has a built-in controller:
*   If zone is too warm: Open damper to increase cool air supply.
*   If zone is too cool: Close damper; if a reheat coil is present, open hot water valve to reheat the (over-cooled) supply air.
*   The system pressure setpoint resets based on the most-open VAV box position to ensure at least one zone always gets what it needs.

**Chiller Plant Sequencing:**
In a large plant with multiple chillers, a plant controller sequences chiller start/stop based on load:
*   Start an additional chiller when the running chillers reach ~90% capacity.
*   Stop a chiller when load drops below ~30% of the running chillers' combined capacity.
*   Optimize chiller staging for maximum COP (sometimes running two chillers at 60% each is more efficient than one chiller at 100%).

## 3. Building Management Systems (BMS / BAS)

A Building Management System (BMS) — also called Building Automation System (BAS) — is the central nervous system of a modern commercial building. It monitors and controls all HVAC, lighting, electrical, fire safety, and security systems from a central software platform.

**Key Functions:**
*   **Real-time monitoring:** Temperature, pressure, flow rate, energy consumption at thousands of points.
*   **Alarm management:** Alerts operators to equipment failures, sensor faults, or out-of-range conditions.
*   **Scheduling:** Time-of-day setpoint adjustments (lower setpoints overnight when building is unoccupied).
*   **Trend logging:** Historical data storage for energy analysis and fault diagnostics.
*   **Remote access:** Engineers can monitor and adjust the building from anywhere.

**Communication Protocols:**
HVAC devices from different manufacturers are connected using open protocols:
*   **BACnet (Building Automation and Control Networks):** The dominant open standard, developed by ASHRAE. Most modern commercial HVAC equipment supports BACnet.
*   **Modbus:** Older, simpler protocol common in industrial and some HVAC applications.
*   **LonWorks:** Used in some older building systems.

## 4. Fault Detection and Diagnostics (FDD)

Modern BMS systems increasingly incorporate automated fault detection:
*   **Air-side economizer faults:** Damper stuck, sensor out of calibration.
*   **Coil fouling:** Higher-than-expected approach temperature difference.
*   **Pump degradation:** Reduced flow at same head.
*   **Chiller performance degradation:** Lower COP than expected at given conditions.

**AFDD (Automated Fault Detection and Diagnostics)** uses rule-based algorithms or machine learning models to analyze historical trend data and flag anomalies. A fouled chiller or leaking valve that is invisible to human operators might be consuming 15–20% extra energy for months. AFDD can identify these issues within days of onset, with payback periods often under one year.
