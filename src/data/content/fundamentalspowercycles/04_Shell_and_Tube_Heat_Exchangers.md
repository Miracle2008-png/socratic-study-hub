# Shell-and-Tube Heat Exchangers

The shell-and-tube heat exchanger is the workhorse of the chemical process, petroleum refining, and power generation industries. Despite being one of the oldest heat exchanger designs, it remains the most widely used because of its enormous versatility, robustness, and capacity to handle extreme pressures and temperatures.

## 1. Anatomy of a Shell-and-Tube Exchanger

The basic design consists of:

*   **Tubes:** A bundle of long, parallel metal tubes. One fluid flows *inside* the tubes (the "tube-side" fluid).
*   **Shell:** A large cylindrical vessel surrounding the tube bundle. The other fluid flows *outside* the tubes but *inside* the shell (the "shell-side" fluid).
*   **Tube Sheets:** Two thick plates at each end of the shell that hold the tube bundle in place. Each tube is welded or rolled into a hole in the tube sheet.
*   **Head (Bonnet/Channel):** End caps that close off the tube sheet, forming an inlet and outlet manifold for the tube-side fluid.
*   **Baffles:** Plate-like obstacles installed perpendicular to the tube bundle inside the shell. They force the shell-side fluid to flow in a zig-zag pattern across the tubes, dramatically improving the shell-side convective heat transfer coefficient. Without baffles, the shell-side fluid would channel down the middle without contacting most of the tube surface.
*   **Nozzles:** Inlet and outlet piping connections welded to the shell and heads.

## 2. TEMA Designation System

The Tubular Exchanger Manufacturers Association (TEMA) has standardized shell-and-tube designs using a three-letter designation. Each letter describes the **Front Head**, **Shell**, and **Rear Head** types.

The most common designs:

**AEL (or BEM, AES, etc.):**
*   **A (Channel with Removable Cover):** The most common front head. A bolted cover allows easy access to the tube sheet for inspection and cleaning without disturbing the tube-side piping connections.
*   **E Shell (One-Pass Shell):** The simplest and most common shell type. Shell-side fluid enters one end and exits the other in a single pass.
*   **L / M / S / T (Rear Head Types):** Define how the tube bundle is supported and whether it can be removed:
    *   **Fixed Tube Sheet (L or M):** The tube bundle cannot be removed. Cheapest but limits cleaning access and cannot accommodate large thermal expansion differences between shell and tubes.
    *   **U-Tube Bundle (U):** The tubes are bent into a U-shape. The bundle can be removed entirely for cleaning the shell side. The tube-side is self-compensating for thermal expansion.
    *   **Floating Head (S, T):** One tube sheet is not welded to the shell — it "floats." Allows full removal of the bundle and handles large differential thermal expansion freely. Most expensive, but essential for large temperature differences.

## 3. Multi-Pass Arrangements

To increase the tube-side velocity (and therefore the tube-side convection coefficient) without making the exchanger impossibly long, engineers use **multiple tube passes**.

*   In a **2-tube-pass** exchanger, the tube-side fluid enters at one end, flows through *half* the tubes to the other end, turns around via a partition in the head, flows back through the *other half* of the tubes, and exits at the same end it entered.
*   This doubles the fluid velocity (same flow rate through half the tubes), dramatically improving the tube-side heat transfer coefficient.
*   Common designs are 1, 2, 4, 6, or 8 tube passes.

## 4. Which Fluid Goes Where?

Allocating fluids between shell-side and tube-side is a critical design decision:

**Put the fluid on the tube-side if it is:**
*   At very high pressure (tubes can withstand higher pressures cheaply, since the shell must then only handle the lower pressure).
*   Corrosive (only the tubes and tube sheets need to be exotic alloy; the shell remains cheap carbon steel).
*   Severely fouling (easier to clean inside tubes with brushes or high-pressure jets).

**Put the fluid on the shell-side if it is:**
*   A viscous liquid (the shell-side baffled cross-flow generates better mixing and heat transfer for viscous fluids than laminar tube-side flow would).
*   Condensing vapor (condensation works efficiently on the outside of tubes).
