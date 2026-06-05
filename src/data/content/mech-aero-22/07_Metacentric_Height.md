---
title: "Metacentric Height"
---

# Metacentric Height ($GM$)

The vertical distance between the Center of Gravity ($G$) and the Metacenter ($M$) is called the **Metacentric Height ($GM$)**. 

As established in the previous section, the fundamental rule of stability for a floating vessel is:
- **$GM > 0$ (M is above G):** Stable
- **$GM < 0$ (M is below G):** Unstable (Capsizes)

## 1. Calculating Metacentric Height

Naval architects calculate $GM$ by breaking it down into geometric components relative to the bottom of the hull (the keel, $K$).

$$GM = KB + BM - KG$$

- **$KB$ (Keel to Buoyancy):** The vertical distance from the keel to the original center of buoyancy. Calculated from the geometry of the submerged hull.
- **$KG$ (Keel to Gravity):** The vertical distance from the keel to the center of gravity. Calculated based on the weight distribution (engine, cargo, passengers).
- **$BM$ (Buoyancy to Metacenter):** The vertical distance from the center of buoyancy to the metacenter. This defines how much the buoyancy shifts when the ship rolls.

## 2. The $BM$ Calculation

The distance $BM$ depends entirely on the geometry of the hull at the waterline (the plane where the hull cuts through the water surface).

$$BM = \frac{I_{waterline}}{V_{submerged}}$$

- $I_{waterline}$: The area moment of inertia of the waterline cross-section about the axis of rotation (the roll axis).
- $V_{submerged}$: The total submerged volume of the hull.

**Design Implications:**
To make a ship highly stable (large $GM$), you want a large $BM$. This requires a very large $I_{waterline}$. 
- Moment of inertia scales with the cube of the width ($I = \frac{1}{12} L W^3$ for a rectangle).
- Therefore, **wide ships are inherently much more stable than narrow ships.** A barge or a catamaran has a massive $I_{waterline}$, generating huge restoring moments. A narrow canoe has a tiny $I_{waterline}$ and rolls very easily.

## 3. The Trade-off: Stability vs. Comfort

It seems obvious that designers should make $GM$ as large as possible to ensure the ship never capsizes. However, too much stability is actually a bad thing.

When a ship rolls, the restoring moment $M_{restore} \approx W \cdot GM \cdot \sin\theta$. 
- A **large $GM$** (e.g., a heavily loaded barge with weight concentrated low) creates a massive, violent restoring moment. The ship snaps back upright extremely fast. This causes a very short roll period, resulting in a harsh, jerky ride that causes severe seasickness and can damage cargo. Such ships are "stiff."
- A **small, positive $GM$** (e.g., a luxury cruise ship) creates a gentle restoring moment. The ship rolls slowly and smoothly, taking a longer time to return to upright. This provides a comfortable ride. Such ships are "tender."

Passenger ships are designed with relatively small $GM$ (often less than 1 meter) for comfort, while ensuring it never drops below zero even if passengers move or fuel is consumed.

## 4. The Free Surface Effect

If a ship carries liquids with a free surface (e.g., partially filled oil tankers, water in the bilge), stability is severely compromised. 
When the ship rolls, the liquid sloshes to the low side. This shifts the center of gravity ($G$) laterally, perfectly aligning with the overturning force and reducing the effective $GM$. This **Free Surface Effect** has caused many ships to capsize. To prevent it, liquid tanks are divided into narrow compartments using longitudinal bulkheads, drastically reducing the sloshing $I_{waterline}$.
