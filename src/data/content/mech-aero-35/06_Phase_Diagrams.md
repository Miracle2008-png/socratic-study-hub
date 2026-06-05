# Phase Diagrams

Most engineering materials are not pure elements; they are alloys (mixtures of two or more elements). To understand how an alloy will behave, we must know its "phase." A **phase** is a physically distinct, chemically homogeneous, and mechanically separable part of a material. (For example, ice and liquid water are two different phases of H2O).

A **Phase Diagram** is a graphical "map" that shows what phases exist at an equilibrium state for any given combination of Temperature and Composition (alloy concentration).

## 1. The Isomorphous Phase Diagram

The simplest binary (two-element) phase diagram is the isomorphous system, where the two elements are completely soluble in each other in both the liquid and solid states across all compositions (e.g., Copper and Nickel).

**Features of a Cu-Ni Diagram:**
-   **X-axis:** Composition (0% Ni / 100% Cu on the left, to 100% Ni / 0% Cu on the right).
-   **Y-axis:** Temperature.
-   **Liquidus Line:** The upper curve. Above this line, the alloy is entirely liquid.
-   **Solidus Line:** The lower curve. Below this line, the alloy is entirely solid (a single-phase solid solution, denoted as $\alpha$).
-   **The Two-Phase Region:** The lens-shaped area between the Liquidus and Solidus. Here, liquid and solid $\alpha$ coexist.

**Using the Diagram (The Lever Rule):**
If you pick a specific alloy composition (e.g., 40% Ni) and hold it at a specific temperature within the two-phase region:
1.  **What phases are present?** Look at the region. It's Liquid + $\alpha$.
2.  **What is the composition of each phase?** Draw a horizontal line (a tie line) through your point. Where it hits the liquidus line tells you the composition of the liquid. Where it hits the solidus line tells you the composition of the solid $\alpha$ chunks.
3.  **How much of each phase is there?** Use the Lever Rule, which acts like a physical seesaw on the tie line, allowing you to calculate the mass fraction of liquid vs. solid.

## 2. The Eutectic Phase Diagram

Many elements have limited solid solubility in each other (e.g., Lead and Tin). They form a eutectic phase diagram.

**Features of a Pb-Sn Diagram:**
-   **Terminal Solid Solutions:** On the far left, there is a small region of solid $\alpha$ (mostly Lead with a little Tin dissolved in it). On the far right is solid $\beta$ (mostly Tin with a little Lead).
-   **The Eutectic Point:** The most critical feature. It is a specific "V-shaped" minimum point on the liquidus line. It represents a specific composition (the Eutectic composition, e.g., 61.9% Sn) and a specific temperature (the Eutectic temperature, 183°C).
-   **The Eutectic Reaction:** If an alloy of exactly the eutectic composition is cooled, it remains entirely liquid right down to 183°C. At that exact temperature, it instantly transforms from a liquid into *two* distinct solid phases simultaneously ($Liquid \to \alpha + \beta$).
-   **Microstructure:** This simultaneous freezing forces the $\alpha$ and $\beta$ phases to form in alternating, microscopic layers (lamellae). This layered "eutectic microstructure" is often very strong. This specific Pb-Sn alloy is common electrical solder because it melts at a low, distinct temperature rather than turning into a slushy mix over a range of temperatures.

## 3. The Iron-Carbon Phase Diagram (The Foundation of Steel)

The most important phase diagram in all of engineering is a complex eutectic-like diagram for Iron and Carbon.

Steel is an alloy of iron and a small amount of carbon (usually less than 2%).

**Key Solid Phases of Iron:**
1.  **Ferrite ($\alpha$-iron):** BCC crystal structure. Exists at room temperature. It is soft, ductile, and magnetic. Crucially, it has almost zero solubility for carbon (max 0.022%).
2.  **Austenite ($\gamma$-iron):** FCC crystal structure. Exists at high temperatures (above 727°C). Because it's FCC, it can dissolve up to 2.14% carbon. It is non-magnetic.
3.  **Cementite ($Fe_3C$):** An iron-carbide compound. It is a ceramic-like phase—extremely hard and extremely brittle.

**The Eutectoid Reaction:**
This diagram features a "Eutectoid" point (at 0.76% Carbon and 727°C). Similar to a eutectic reaction, but instead of a liquid freezing into two solids, a *single solid phase* transforms into *two different solid phases* as it cools.

$$Austenite (\gamma) \xrightarrow{cooling} Ferrite (\alpha) + Cementite (Fe_3C)$$

When Austenite (containing 0.76% C) is cooled slowly below 727°C, it must expel the carbon because the newly forming Ferrite cannot hold it. The carbon forms alternating microscopic layers of hard Cementite and soft Ferrite. This layered microstructure is called **Pearlite**.

By altering the carbon content (from 0.1% to 1.5%) and manipulating this phase transformation through heat treatment, metallurgists can create steels ranging from soft, flexible wire to hard, brittle tool steel.
