# Bearings: Journal and Hydrodynamic

While rolling-element bearings are ubiquitous, they have speed limits (centrifugal force tears the cages apart) and absolute life limits due to contact fatigue.

When you need a shaft to spin at 100,000 RPM (like an automotive turbocharger), or support a massive load indefinitely without ever suffering fatigue (like the propeller shaft of a nuclear submarine or the main crankshaft bearings of a car engine), you use **Journal Bearings**.

## 1. The Anatomy of a Journal Bearing

A journal bearing is deceptively simple. It is basically a precision-machined metal sleeve (the bearing) surrounding a precision-machined metal shaft (the journal).

*   There are no balls or rollers.
*   If you spin the shaft dry, it will grind against the sleeve, melt, and weld itself solid in seconds.
*   The secret to the journal bearing is **Hydrodynamic Lubrication**.

## 2. Hydrodynamic Lubrication

A hydrodynamic bearing floats the shaft entirely on a pressurized film of oil, preventing metal-to-metal contact completely. It generates this pressure itself, purely through the motion of the shaft.

**How it works:**
1.  **At Rest:** When the engine is off, the heavy shaft rests directly on the bottom of the bearing sleeve. (This is when wear occurs).
2.  **Startup (Boundary Lubrication):** As the shaft begins to spin, it tries to climb the wall of the bearing due to friction. It drags a thin layer of oil with it.
3.  **The Wedge (Mixed Lubrication):** The bearing hole is machined slightly larger than the shaft. Because the shaft is climbing the wall, it sits off-center. This creates a converging, wedge-shaped gap between the shaft and the bearing.
4.  **Full Hydrodynamic Flight:** The spinning shaft acts like a viscous pump, dragging a massive amount of oil into that tiny converging wedge. The oil cannot compress, so it generates an immense high-pressure "cushion" in the wedge. This high-pressure fluid physically lifts the heavy steel shaft off the metal wall.
5.  **Steady State:** The shaft is now "water-skiing" on a microscopic film of oil. There is zero metal-to-metal contact. Theoretical wear is zero, allowing for infinite life.

## 3. The Stribeck Curve

The relationship between friction, speed, and oil viscosity in a journal bearing is defined by the Stribeck Curve.

The X-axis is the Sommerfeld Number ($S$), combining Viscosity ($\mu$), Speed ($N$), and Load ($P$). The Y-axis is the coefficient of friction ($\mu_f$).

*   **Left Side (Boundary/Mixed Lubrication):** Low speed or high load. The fluid film is too thin, microscopic peaks (asperities) of the metals crash into each other. Friction is very high, and wear is rapid.
*   **The Trough (Minimum Friction):** The exact point where the fluid film becomes just thick enough to separate the metals entirely. Friction drops to its absolute lowest point.
*   **Right Side (Hydrodynamic):** As speed increases further, the oil film gets thicker. However, friction actually begins to *increase* again. Because you are shearing the viscous oil faster and faster, fluid friction (viscous drag) takes over, generating significant heat.

## 4. Design Considerations

Designing a journal bearing involves balancing complex fluid dynamics (using the Reynolds Equation).

*   **Clearance:** The gap between the shaft and bearing is critical. Too tight, and oil can't flow, causing it to overheat and seize. Too loose, and it won't generate the high-pressure wedge, causing the shaft to crash into the wall.
*   **Viscosity:** You must choose the right oil. Thick oil generates a thicker, safer film, but creates massive fluid drag and heat at high speeds. Thin oil reduces drag but risks metal-to-metal contact. (This is why your car requires a specific oil weight).
*   **Materials:** Because the shaft *must* rub against the bearing at startup and shutdown, the bearing sleeve must be made of a soft, sacrificial material (like Babbitt metal—a lead/tin alloy). If dirt enters the oil, it embeds safely into the soft Babbitt rather than scoring the expensive steel crankshaft.

## 5. Hydrostatic Bearings

A variant where you don't rely on the shaft spinning to create the pressure. Instead, an external, high-pressure hydraulic pump forces oil into the bearing gap, floating the shaft before it even starts moving.
-   Used in massive telescopes or extremely precise machine tools. They offer zero starting friction but require complex external pumps.
