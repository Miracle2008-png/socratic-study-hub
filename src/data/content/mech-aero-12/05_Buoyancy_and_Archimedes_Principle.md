---
title: "Buoyancy and Archimedes' Principle"
---

# Buoyancy and Archimedes' Principle

When an object is fully or partially submerged in a fluid, the hydrostatic pressure acts on every surface of the object simultaneously. The net resultant of all these pressure forces is a single upward vertical force known as the **Buoyant Force ($F_B$)**.

## 1. Archimedes' Principle

Derived rigorously in ancient Greece by Archimedes (and verified by modern calculus), the principle states:

**The buoyant force acting on a submerged body is equal to the weight of the fluid displaced by that body.**

$$ F_B = \gamma_{fluid} \times V_{displaced} = \rho_{fluid} g V_{displaced} $$

Where $V_{displaced}$ is the volume of fluid that the object has physically pushed aside.

## 2. Physical Derivation

Consider a cube of side length $h$ fully submerged in water at depth $d$.
*   The water pressure pushes on all six faces of the cube.
*   Left-right, front-back: these cancel perfectly (same depth, same pressure on opposite faces).
*   **Bottom face:** Pressure pushes upward with force $F_{bottom} = P_{bottom} \times A = \gamma(d+h) A$.
*   **Top face:** Pressure pushes downward with force $F_{top} = P_{top} \times A = \gamma d A$.

Net upward force:
$$ F_B = F_{bottom} - F_{top} = \gamma(d+h) A - \gamma d A = \gamma h A = \gamma V_{cube} $$

This is exactly the weight of the water displaced by the cube — confirming Archimedes' Principle from first principles.

## 3. Conditions for Floating, Sinking, and Neutral Buoyancy

For any object placed in a fluid:
*   **Sinks:** If the object's weight ($W = \rho_{object} g V$) is greater than the buoyant force. This requires $\rho_{object} > \rho_{fluid}$.
*   **Floats (partially submerged):** If $\rho_{object} < \rho_{fluid}$. The object sinks just deep enough so that the weight of the displaced fluid exactly equals the object's total weight.
*   **Neutral Buoyancy:** If $\rho_{object} = \rho_{fluid}$. The object hovers motionless anywhere in the fluid. (Submarines control their depth by adjusting the amount of water in ballast tanks, changing their average density to match the surrounding seawater).

## 4. The Stability of Floating Bodies

A floating boat or ship must not only float, but it must also be **stable** against tipping. The ship is stable if the **Metacenter** (the point about which the ship tilts when heeled) is located above the ship's center of gravity. If the metacenter is below the center of gravity, any slight tipping will roll the ship further until it capsizes — a critical naval architecture design constraint.
