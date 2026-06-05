# Flow Measurement Devices

Monitoring the mass or volume flow rate inside a closed pipe is crucial for everything from billing natural gas consumption to managing chemical reactors. Because we cannot see the fluid, we rely on mechanical and fluid dynamic principles to measure the flow.

## 1. Obstruction Flow Meters (Venturi, Orifice, Nozzle)

The most common and robust industrial flow meters rely directly on the **Bernoulli Equation**.

By intentionally inserting a restriction (a smaller diameter hole) into the pipe, the fluid is forced to accelerate. According to Bernoulli, this acceleration causes a corresponding drop in static pressure. By measuring the pressure difference ($\Delta P$) before the restriction and at the throat of the restriction using a manometer or pressure transducer, we can calculate the velocity and therefore the flow rate.

Applying Bernoulli and Continuity ($A_1 V_1 = A_2 V_2$) between the main pipe (1) and the restriction throat (2):
$$Q = A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho(1 - (A_2/A_1)^2)}}$$

Because real fluids have friction, a **Discharge Coefficient ($C_d$)** must be added to correct the ideal theoretical equation to match reality. $Q_{actual} = C_d \cdot Q_{ideal}$.

**Types of Obstruction Meters:**
1. **Orifice Plate:** A simple flat metal plate with a sharp-edged hole drilled in it. Very cheap and easy to install between pipe flanges. However, the sudden contraction causes massive flow separation and a massive permanent head loss. ($C_d \approx 0.61$).
2. **Flow Nozzle:** A smooth, rounded bell-mouth converging nozzle. Less flow separation than an orifice, but still significant permanent head loss. ($C_d \approx 0.96$).
3. **Venturi Meter:** A carefully machined tube with a smooth converging section, a throat, and a long, gentle, smooth diverging diffuser to carefully slow the fluid back down. It is very expensive and long, but it recovers almost all the pressure, causing virtually zero permanent head loss in the pipeline. ($C_d \approx 0.98$).

## 2. Variable-Area Meters (Rotameter)

A vertical, transparent, tapered glass tube (wider at the top) containing a small, dense "float". 
Fluid flows upward through the tube, pushing the float up. 
As the float rises into the wider section of the tube, the annular gap around it increases, which decreases the local fluid velocity and the upward drag force. 
The float settles at a specific equilibrium height where the upward drag force exactly balances the downward weight of the float. The flow rate is read directly from tick marks on the glass tube.

## 3. Velocity-Based Meters

1. **Turbine Flow Meter:** A small, freely spinning propeller sits inside the pipe. The fluid pushes the blades, making it spin. A magnetic sensor outside the pipe counts the blade passes. The RPM of the turbine is strictly proportional to the fluid velocity. Highly accurate, widely used for fuel flow in aircraft and custody transfer of petroleum.
2. **Ultrasonic Flow Meter:** Non-invasive. Two transducers clamp onto the *outside* of the pipe. They ping high-frequency sound waves diagonally through the fluid to each other. The sound wave traveling downstream with the flow travels slightly faster than the sound wave traveling upstream against the flow. The microsecond time difference measures the flow velocity.

## 4. Mass Flow Meters (Coriolis)

Obstruction and turbine meters measure *volume* flow ($Q$, $m^3/s$). If the fluid temperature changes, its density changes, meaning the actual mass flow ($\dot{m}$) being delivered is wrong.

A **Coriolis meter** measures true mass flow rate directly. The fluid is routed through a U-shaped metal tube. An electromagnet forcibly vibrates the tube at its resonant frequency. 
As mass flows through the vibrating tube, the Coriolis acceleration of the fluid travelling through the rotating frame physically twists the tube. Sensors measure this microscopic twisting deflection, which is directly, linearly proportional to the true mass flow rate ($\dot{m}$, $kg/s$), completely independent of density or temperature changes.
