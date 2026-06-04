# 8. Solving Laplace's Equation (Dirichlet Problems)

Let's formally define the process we've been hinting at: using Conformal Maps to solve real-world physics problems.

The absolute foundation of steady-state physics (heat, fluid, electrostatics) is **Laplace's Equation**:
$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

A problem that asks you to find the steady-state temperature $u(x,y)$ inside a region, given fixed temperatures on the boundary edges, is called a **Dirichlet Problem**.

### The Conformal Mapping Shortcut
Solving Laplace's equation directly inside a complicated geometric shape (like a crescent moon or a jagged gear) is mathematically agonizing. 

But we have a superpower. **Laplace's equation is invariant under conformal mapping!**
If a temperature profile $U(u,v)$ perfectly solves Laplace's equation in the easy $w$-plane, then substituting the mapping function $w = f(z)$ into it creates a new profile $u(x,y)$ that perfectly solves Laplace's equation in the complicated $z$-plane!

### The 4-Step Master Algorithm
1.  **The Nightmare Problem:** You are given a complicated domain $D$ in the $z$-plane with fixed boundary temperatures (e.g., the top curve is $100^\circ$, the bottom curve is $0^\circ$).
2.  **The Mapping:** Invent a Conformal Map $w = f(z)$ that transforms the complicated region $D$ into an incredibly simple region $D'$ (like a straight rectangle or the upper half-plane).
3.  **The Easy Solution:** Because the new region is just a straight line or a rectangle, solving Laplace's equation is trivial. (For example, the temperature between two parallel plates is just a straight line equation: $U(v) = Av + B$). Solve for $A$ and $B$ using the boundary temperatures.
4.  **The Reverse Warp:** You now have the perfect solution $U$ in the $w$-plane. Simply substitute your mapping function $f(z)$ back into $U$ to warp the solution back into the $z$-plane! You have solved the nightmare problem.

### The Half-Plane Solution
If you map your complicated shape into the upper half-plane, and the real x-axis is split into sections of different temperatures, the solution to Laplace's equation is always a combination of simple inverse tangent functions!

For a single step-change on the x-axis (e.g., $T=T_1$ for $x>0$, and $T=T_0$ for $x<0$), the steady-state temperature spreading into the upper half-plane is simply:
$$
T(x,y) = T_1 + \frac{T_0 - T_1}{\pi} \arctan\left(\frac{y}{x}\right)
$$
By using conformal mappings, we can warp this simple arctangent formula to solve heat problems inside incredibly complex geometries.
