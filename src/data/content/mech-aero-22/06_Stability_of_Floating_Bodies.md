# Stability of Floating Bodies

A submarine may be neutrally buoyant, and a ship may successfully displace its own weight to float, but will they stay upright? The study of how submerged and floating bodies respond to small rotational disturbances (like a gust of wind or a wave) is the study of stability.

There are two critical points in any floating body:
1. **Center of Gravity (G):** The point where the total weight of the object ($W$) acts downward. Its location depends solely on the mass distribution of the ship.
2. **Center of Buoyancy (B):** The point where the buoyant force ($F_B$) acts upward. It is the geometric centroid of the *submerged volume* of the hull.

## 1. Submerged Bodies (Submarines, Balloons)

For a fully submerged body, the displaced volume does not change shape when the body rolls or pitches. Therefore, the Center of Buoyancy (B) is fixed relative to the hull.

**Stability Criterion:**
- **Stable:** The Center of Gravity (G) is *below* the Center of Buoyancy (B). 
  - If a submarine rolls slightly, the upward force at B and downward force at G create a **restoring couple (moment)** that pushes the submarine back upright. Submarines are designed with heavy keels to keep G low.
- **Unstable:** The Center of Gravity (G) is *above* the Center of Buoyancy (B).
  - Any slight disturbance creates an **overturning moment**, causing the body to capsize and flip completely upside down.

## 2. Floating Bodies (Ships, Boats)

The physics change drastically for a body floating on the surface. When a ship rolls, the shape of its submerged volume changes. The side rolling into the water gains buoyancy, and the side lifting out of the water loses buoyancy.

Because the submerged geometry changes, **the Center of Buoyancy (B) moves!** It shifts laterally toward the side that is deeper in the water.

This movement is the saving grace of ships. A ship can have its Center of Gravity (G) *above* its original Center of Buoyancy (B) and still be perfectly stable, provided the new Center of Buoyancy shifts far enough sideways to create a restoring moment.

## 3. The Metacenter (M)

To analyze this shifting buoyancy, naval architects define the **Metacenter (M)**.

Imagine a vertical line passing through G and the original B when the ship is perfectly upright. Now, roll the ship by a small angle $\theta$. The new Center of Buoyancy is $B'$. Draw a vertical line upward from $B'$ (the new line of action of the buoyant force).
- The point where this new vertical line intersects the original vertical axis is the Metacenter (M).

**Stability Criterion for Floating Bodies:**
The stability is determined exclusively by the relative position of the Center of Gravity (G) and the Metacenter (M).
- **Stable:** The Metacenter (M) is *above* the Center of Gravity (G). The buoyant force line of action passes outside G, creating a restoring moment.
- **Unstable:** The Metacenter (M) is *below* the Center of Gravity (G). The buoyant force creates an overturning moment, and the ship will capsize.
- **Neutrally Stable:** M coincides exactly with G. The ship will stay at whatever angle it is rolled to without returning or capsizing further.

Therefore, for a ship to be stable, we must ensure $M$ is physically located above $G$. The distance between them is the most crucial metric in naval architecture.
