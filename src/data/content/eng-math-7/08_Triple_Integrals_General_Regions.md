# 8. Triple Integrals over General Solid Regions

Just as 2D regions were classified into Type I and Type II, 3D solid regions are classified into three types depending on which axis you project the shadow onto.

The most common approach is a **Type 1 Solid**.

### Type 1 Solids (z-boundaries are functions)
A solid region $E$ is of Type 1 if it lies between the graphs of two continuous surfaces $z = u_1(x,y)$ and $z = u_2(x,y)$, and its projection (shadow) onto the xy-plane is a 2D region $D$.

The iterated integral is set up as:
$$ \iiint_E f(x,y,z) dV = \iint_D \left[ \int_{u_1(x,y)}^{u_2(x,y)} f(x,y,z) dz \right] dA $$

**The Process:**
1.  **Inner Integral ($dz$):** Integrate from the bottom surface $u_1$ to the top surface $u_2$. Your result will be an equation in terms of $x$ and $y$.
2.  **Outer Integral ($dA$):** You are left with a standard double integral over the 2D shadow region $D$. You evaluate this exactly like we did in Sections 2 and 3 (setting up $dx\,dy$ or $dy\,dx$).

### Worked Example
**Problem:** Evaluate $\iiint_E z \, dV$, where $E$ is the solid tetrahedron bounded by the four planes $x=0$, $y=0$, $z=0$, and $x + y + z = 1$.

**Step 1: Determine the z-limits**
The solid sits on the "floor" plane $z=0$.
The "roof" is the slanted plane. Solving for $z$, we get $z = 1 - x - y$.
So, the inner integral limits are: $0 \le z \le 1 - x - y$.

**Step 2: Determine the 2D Shadow $D$**
If we shine a light straight down, what shadow does this tetrahedron cast on the xy-plane? 
The boundary occurs where the roof hits the floor ($z=0$):
$x + y + 0 = 1 \implies y = 1 - x$.
The shadow is a triangle in the xy-plane bounded by $x=0$, $y=0$, and $y = 1 - x$.
Setting this up as a Type I 2D region ($dy\,dx$):
*   $0 \le y \le 1 - x$
*   $0 \le x \le 1$

**Step 3: Set up the Triple Integral**
$$ I = \int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} z \, dz \, dy \, dx $$

**Step 4: Evaluate Inner Integral ($dz$)**
$$ \int_{0}^{1-x-y} z \, dz = \left[ \frac{1}{2}z^2 \right]_{0}^{1-x-y} = \frac{1}{2}(1 - x - y)^2 $$

**Step 5: Evaluate Middle Integral ($dy$)**
$$ \int_{0}^{1-x} \frac{1}{2}(1 - x - y)^2 dy $$
Use a u-sub: $u = 1 - x - y \implies du = -dy \implies dy = -du$.
$$ \left[ -\frac{1}{6}(1 - x - y)^3 \right]_{y=0}^{y=1-x} $$
Plug in $y = 1-x$: $-\frac{1}{6}(1 - x - (1-x))^3 = 0$.
Plug in $y = 0$: $-\frac{1}{6}(1 - x)^3$.
Subtract lower from upper: $0 - (-\frac{1}{6}(1 - x)^3) = \frac{1}{6}(1 - x)^3$.

**Step 6: Evaluate Outer Integral ($dx$)**
$$ \int_{0}^{1} \frac{1}{6}(1 - x)^3 dx $$
Another quick u-sub ($u = 1-x, du = -dx$):
$$ \left[ -\frac{1}{24}(1 - x)^4 \right]_{0}^{1} $$
Plug in $x=1$: 0.
Plug in $x=0$: $-1/24$.
Final Answer: $0 - (-1/24) = \mathbf{\frac{1}{24}}$.
