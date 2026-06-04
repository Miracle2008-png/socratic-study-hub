# 8. Triple Integrals over General Regions

Integrating over a perfect 3D rectangular box is easy. But what if we need to find the mass of a solid cone, or a sphere, or a strange organic blob (Solid Region $E$)?

We must set up the limits of integration so that they perfectly mold to the shape of the solid. The most common approach is the **Type I Solid**, which is typically integrated in the order $dz \, dy \, dx$.

### The 3-Step Setup for $dz \, dy \, dx$

**Step 1: The Inner Integral (The Roof and Floor)**
We start on the inside with $dz$. This integral shoots a vertical laser beam straight up through the 3D solid.
*   Where does the laser enter the solid? That is the bottom surface (the floor), defined by a 2D function $z = u_1(x,y)$.
*   Where does the laser exit the solid? That is the top surface (the roof), defined by a 2D function $z = u_2(x,y)$.

$$
\text{Inner bounds: } \int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z) \, dz
$$
Once you perform this inner integration, all the $z$'s will be replaced by $x$'s and $y$'s. The 3D solid is now completely flattened down into a 2D shadow!

**Step 2: The Middle Integral (The 2D Shadow)**
Now look at the flat 2D shadow (Region $D$) that the solid casts on the $xy$-plane ground. We must set up bounds for this 2D shadow exactly as we did for Double Integrals!
If we shoot a laser horizontally through the shadow (doing $dy$ next):
*   Where does it enter the shadow? A curve $y = g_1(x)$.
*   Where does it exit the shadow? A curve $y = g_2(x)$.

$$
\text{Middle bounds: } \int_{g_1(x)}^{g_2(x)} [\dots] \, dy
$$

**Step 3: The Outer Integral (The Absolute Extremes)**
The outer integral must ALWAYS be strict, constant numbers. We look at our 2D shadow and ask: What is the absolute furthest left and furthest right that this shadow reaches on the x-axis?
*   Left bound: $x = a$
*   Right bound: $x = b$

$$
\text{Outer bounds: } \int_a^b [\dots] \, dx
$$

### The Full Formula
Putting it all together, the triple integral for a Type I solid region is:

$$
\iiint_E f(x,y,z) \, dV = \int_{a}^{b} \int_{g_1(x)}^{g_2(x)} \int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z) \, dz \, dy \, dx
$$

If the solid is sideways, you might need a Type II or Type III solid, which requires shooting the laser beams in the $dx$ or $dy$ direction first! You must practice visualizing 3D geometry to master this step.
