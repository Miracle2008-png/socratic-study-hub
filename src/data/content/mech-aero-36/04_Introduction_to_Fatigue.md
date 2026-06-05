---
title: "Introduction to Fatigue"
---

# Introduction to Fatigue

If you want to break a paperclip, you don't grab both ends and pull as hard as you can (a tensile test). Instead, you bend it back and forth a dozen times until it snaps.

You have just demonstrated **Fatigue**—the weakening and eventual failure of a material caused by repeatedly applied, fluctuating loads.

## 1. The Insidious Nature of Fatigue

Fatigue is the single most common cause of mechanical failure in engineering, responsible for an estimated 80-90% of all structural failures.

**Why it is so dangerous:**
1.  **Low Stress:** Fatigue failures occur at stress levels *far below* the material's yield strength. A part that could safely hold 1,000 lbs indefinitely might break if you repeatedly apply and remove 300 lbs.
2.  **No Warning:** Unlike plastic yielding (where a part visibly bends before breaking), a fatigue failure gives virtually no macroscopic warning. The part looks perfectly fine until the moment it catastrophically snaps in half. The fracture surface often looks surprisingly brittle, even in highly ductile metals.

## 2. The Three Stages of Fatigue Failure

Fatigue is a progressive, localized structural damage process. It occurs in three distinct phases:

**Stage I: Crack Initiation**
-   Fatigue almost always starts at a stress concentrator on the surface of the part (a sharp corner, a microscopic scratch, a tool mark from machining, or a tiny corrosion pit).
-   Even though the overall stress is below yield, the localized stress at this microscopic defect causes a tiny amount of plastic slip (dislocation movement) on the atomic scale during the highest point of the load cycle.
-   As the load cycles back and forth, this microscopic slip creates tiny "extrusions" and "intrusions" on the surface, eventually forming a microscopic crack. This initiation phase can consume 80-90% of the part's total life.

**Stage II: Crack Propagation**
-   Once a distinct crack has formed, it acts as a severe stress concentrator.
-   With every subsequent stress cycle, the sharp crack tip is pulled open, plastically blunts, and then gets crushed closed, forcing the crack to advance a microscopic distance (sometimes only a few atoms wide per cycle).
-   The crack slowly and steadily marches through the cross-section of the part.
-   If you look at a fatigue fracture surface under an electron microscope, you can often see **striations**—a series of tiny parallel ripples, like rings on a tree. Each striation represents the microscopic growth of the crack during one single load cycle.

**Stage III: Final Catastrophic Failure**
-   As the crack slowly grows, the remaining solid cross-sectional area of the part decreases.
-   Because $Stress = Force / Area$, the stress on the remaining intact material steadily increases.
-   Eventually, the crack becomes so large that the remaining intact material can no longer support the peak load. The stress exceeds the material's ultimate tensile strength (or its Fracture Toughness, $K_{Ic}$), and the part snaps instantly in a fast fracture.

## 3. Visualizing a Fatigue Failure

A classic fatigue failure surface is often identifiable by the naked eye and tells a distinct story:
1.  **The Origin:** A smooth, shiny spot on the edge where the crack initiated (often rubbing smooth over time).
2.  **Beach Marks:** Macro-scale concentric rings radiating away from the origin (like ripples in a pond). These are caused by changes in the load cycle over time (e.g., an airplane taking off, flying, and landing) and indicate the slow crack growth phase.
3.  **The Final Rupture Zone:** A rough, crystalline, or jagged area where the final, sudden, fast fracture occurred once the critical crack size was reached.
