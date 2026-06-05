---
title: "Gas Turbines and Compressors"
---

# Gas Turbines and Compressors

Hydraulic machines pump or extract power from incompressible liquids (water). Thermal turbomachines handle compressible gases (air, steam, combustion products). The thermodynamics of compression and expansion must be coupled with the kinematics of velocity triangles.

A gas turbine engine (like a jet engine) consists of three main components: a **Compressor**, a **Combustor**, and a **Turbine**.

## 1. Axial Compressors

To achieve high pressure ratios (e.g., 30:1 in a jet engine), modern gas turbines use axial compressors consisting of dozens of alternating rows of spinning rotors and stationary stators.

- **Rotor:** Adds kinetic energy (velocity) to the air.
- **Stator:** Acts as a diffuser. It slows the air down, converting the kinetic energy into a static pressure rise, and redirects the air to perfectly strike the next rotor.

**The Challenge of Adverse Pressure Gradient:**
Compressors must force air to higher pressures (up a hill). This creates a severe adverse pressure gradient. If the blades turn the air too sharply, the boundary layer will separate, causing an aerodynamic stall. 
- A stalled compressor blade loses its ability to pump. If a stall cascades to all blades, the compressor suffers a **surge**—a violent reversal of airflow where high-pressure air bursts backward out the front of the engine, accompanied by a loud bang and potential catastrophic destruction of the blades.
- Because of stall limits, a single stage (one rotor + one stator) of an axial compressor can only achieve a tiny pressure ratio of about 1.2:1. To reach 30:1, you need 20+ stages in series.

## 2. Centrifugal Compressors

Centrifugal compressors take air in axially and fling it radially outward. 
- Because centrifugal force aids the compression process, a single centrifugal stage can achieve a pressure ratio of 4:1 to 10:1 without surging.
- They are much shorter and highly robust, but have a larger frontal area (creating aerodynamic drag).
- Used in small turboprops, helicopters, turbochargers, and early jet engines.

## 3. The Axial Turbine

Once the compressed air is mixed with fuel and burned, the high-temperature ($1500^\circ$C), high-pressure gas expands through the turbine.

- The hot gas flows through stationary nozzle guide vanes (stators), which drop the pressure to accelerate the gas to Mach 1 and impart massive swirl.
- The gas then strikes the spinning rotor blades, transferring energy to the shaft.
- **Favorable Pressure Gradient:** Because the turbine is expanding gas to a lower pressure (down a hill), the boundary layers are incredibly stable. Turbine blades can turn the flow almost 100 degrees without stalling.
- Therefore, a single turbine stage can extract an immense amount of energy (expanding the gas by a ratio of 3:1 or 4:1). A 20-stage compressor can often be driven by a turbine with only 2 or 3 stages.

## 4. Work and Efficiency

For adiabatic, steady-flow compressors and turbines, the specific work $w$ is the change in stagnation enthalpy ($h_0$):
$$w = h_{0,exit} - h_{0,inlet} = c_p (T_{0,exit} - T_{0,inlet})$$

Real machines suffer from aerodynamic friction and shock losses, generating entropy.
- **Isentropic Compressor Efficiency ($\eta_c$):** The ideal isentropic work required to reach a specific pressure divided by the actual (larger) work required.
- **Isentropic Turbine Efficiency ($\eta_t$):** The actual work produced divided by the ideal (larger) isentropic work available from the pressure drop.

Modern axial turbines operate at blistering efficiencies exceeding 90%. However, dealing with temperatures far above the melting point of the metal blades requires complex internal air-cooling passages and exotic nickel superalloys.
