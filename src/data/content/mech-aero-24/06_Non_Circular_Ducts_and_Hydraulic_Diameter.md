# Non-Circular Ducts and Hydraulic Diameter

The Darcy-Weisbach equation and the Moody chart were entirely derived and calibrated using perfectly circular pipes. However, in HVAC systems (heating, ventilation, and air conditioning), rectangular and square sheet-metal ducts are standard because they fit better in ceilings and walls.

How do we apply the Moody chart to a rectangular duct? We use the concept of **Hydraulic Diameter ($D_h$)**.

## 1. Defining Hydraulic Diameter

The friction generated in a duct depends on the amount of fluid in contact with the solid wall. 
- The volume of fluid being pushed is proportional to the **Cross-sectional Area ($A_c$)**.
- The amount of wall friction dragging on the fluid is proportional to the **Wetted Perimeter ($P$)** (the length of the perimeter that is actually physically touching the fluid).

We define the **Hydraulic Diameter ($D_h$)** to capture this ratio:
$$D_h = \frac{4 A_c}{P}$$

*(Why the 4? Let's test it on a standard circular pipe full of water. $A_c = \pi D^2/4$ and $P = \pi D$. Thus $D_h = 4(\pi D^2/4) / (\pi D) = D$. The factor of 4 ensures that for a perfect circle, the hydraulic diameter exactly equals the physical geometric diameter).*

## 2. Using Hydraulic Diameter

To analyze flow in any non-circular duct (rectangular, triangular, annular), you simply:
1. Calculate $D_h$ for your specific geometry.
2. Substitute $D_h$ for $D$ everywhere in the Reynolds number: $Re = \frac{\rho V D_h}{\mu}$
3. Substitute $D_h$ for $D$ in the relative roughness: $\varepsilon / D_h$
4. Use these to look up the friction factor $f$ on the standard circular Moody Chart.
5. Substitute $D_h$ for $D$ in the Darcy-Weisbach equation: $h_L = f \frac{L}{D_h} \frac{V^2}{2g}$

**Important Caveat:** This method works exceptionally well for fully turbulent flow because chaotic mixing blurs the effect of corners. It is highly inaccurate for laminar flow, where the stagnant fluid in the sharp corners heavily skews the velocity profile.

## 3. Rectangular Ducts

For a rectangular duct of width $a$ and height $b$, completely full of air:
- Area: $A_c = a \cdot b$
- Wetted Perimeter: $P = 2a + 2b$
$$D_h = \frac{4ab}{2(a+b)} = \frac{2ab}{a+b}$$

For a perfectly square duct ($a=b$):
$$D_h = \frac{2a^2}{2a} = a$$
*(The hydraulic diameter of a square duct is exactly equal to its side length).*

## 4. Annular Flow (Pipe within a Pipe)

Heat exchangers often consist of a small inner pipe inside a larger outer pipe, with fluid flowing in the annular gap between them.
Let $D_o$ be the inner diameter of the outer pipe, and $D_i$ be the outer diameter of the inner pipe.
- Area: $A_c = \frac{\pi}{4}(D_o^2 - D_i^2)$
- Wetted Perimeter: The fluid touches both the inside of the outer pipe AND the outside of the inner pipe. $P = \pi D_o + \pi D_i$

$$D_h = \frac{4 \left( \frac{\pi}{4}(D_o^2 - D_i^2) \right)}{\pi(D_o + D_i)} = \frac{D_o^2 - D_i^2}{D_o + D_i}$$
Using the difference of squares:
$$\boxed{D_h = D_o - D_i}$$

The hydraulic diameter of an annulus is simply the difference between the two physical diameters.
