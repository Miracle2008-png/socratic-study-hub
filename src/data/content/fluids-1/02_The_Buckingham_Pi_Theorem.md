# The Buckingham Pi Theorem

The Buckingham Pi Theorem (named after Edgar Buckingham, who formalized it in 1914) is the formal mathematical method for determining exactly how many dimensionless groups a physical problem will have, and how to construct them.

## 1. The Theorem Statement

> If a physical process involves $n$ dimensional variables, and these variables can be expressed in terms of $m$ fundamental dimensions, then the process can be fully described by a relationship between $k = n - m$ independent dimensionless groups (called $\Pi$ groups).

**Formula:** $k = n - m$

*   $n$: Total number of variables (e.g., velocity, density, pressure drop, viscosity).
*   $m$: Number of primary dimensions required to express those variables (usually Mass $M$, Length $L$, Time $T$, so $m=3$).
*   $k$: The number of resulting $\Pi$ groups.

## 2. The Step-by-Step Method

Let's apply the theorem to a classic problem: finding the pressure drop ($\Delta P$) of a fluid flowing through a smooth pipe.

**Step 1: List all the relevant variables.**
We must rely on our physical intuition to list what matters. For pipe flow, pressure drop depends on:
*   Pipe diameter ($D$)
*   Pipe length ($L$)
*   Fluid average velocity ($V$)
*   Fluid density ($\rho$)
*   Fluid dynamic viscosity ($\mu$)

Total variables $n = 6$ ($\Delta P, D, L, V, \rho, \mu$).
So, $f(\Delta P, D, L, V, \rho, \mu) = 0$.

**Step 2: Express each variable in primary dimensions.**
*   $[\Delta P] = M L^{-1} T^{-2}$
*   $[D] = L$
*   $[L] = L$
*   $[V] = L T^{-1}$
*   $[\rho] = M L^{-3}$
*   $[\mu] = M L^{-1} T^{-1}$

**Step 3: Determine the number of Pi groups ($k$).**
We used 3 primary dimensions ($M, L, T$). So $m = 3$.
$k = n - m = 6 - 3 = 3$. We will have exactly 3 Pi groups.

**Step 4: Select $m$ "repeating variables."**
We must choose 3 variables from our list of 6. These variables will appear in every Pi group to "cancel out" the dimensions of the other variables.
*Rules for selection:*
1.  They must contain all $m$ dimensions among them.
2.  They must not form a dimensionless group by themselves.
3.  Do not choose the dependent variable (the one you want to solve for, $\Delta P$).

*Good choices are usually a geometry ($D$), a kinematic property ($V$), and a fluid property ($\rho$).* Let's choose $D, V, \rho$.

**Step 5: Construct the Pi groups.**
Combine the remaining non-repeating variables ($\Delta P, L, \mu$) one by one with the repeating variables, raising the repeating variables to unknown exponents ($a, b, c$) such that the resulting group is dimensionless ($M^0 L^0 T^0$).

**$\Pi_1$ (using $\Delta P$):**
$\Pi_1 = \Delta P \cdot D^a \cdot V^b \cdot \rho^c$
Dimensions: $(M L^{-1} T^{-2}) (L)^a (L T^{-1})^b (M L^{-3})^c = M^0 L^0 T^0$

Set up equations for each dimension:
*   M: $1 + c = 0 \Rightarrow c = -1$
*   T: $-2 - b = 0 \Rightarrow b = -2$
*   L: $-1 + a + b - 3c = 0 \Rightarrow -1 + a - 2 - 3(-1) = 0 \Rightarrow a = 0$

Therefore: $\Pi_1 = \frac{\Delta P}{\rho V^2}$ (This is the Euler number, or pressure coefficient).

**$\Pi_2$ (using $L$):**
$\Pi_2 = L \cdot D^a \cdot V^b \cdot \rho^c$
By inspection, $L$ and $D$ both have dimension $L$. So $\Pi_2 = \frac{L}{D}$ (geometric ratio).

**$\Pi_3$ (using $\mu$):**
$\Pi_3 = \mu \cdot D^a \cdot V^b \cdot \rho^c$
Dimensions: $(M L^{-1} T^{-1}) (L)^a (L T^{-1})^b (M L^{-3})^c = M^0 L^0 T^0$
Solving yields $a = -1$, $b = -1$, $c = -1$.
$\Pi_3 = \frac{\mu}{\rho V D}$. (Usually inverted to be the Reynolds number, $Re = \frac{\rho V D}{\mu}$).

**Step 6: Write the final relationship.**
The problem simplifies to a relationship between the three Pi groups:
$$ \Pi_1 = \Phi(\Pi_2, \Pi_3) \Rightarrow \frac{\Delta P}{\rho V^2} = \Phi\left(\frac{L}{D}, \frac{\rho V D}{\mu}\right) $$
Through this purely mathematical exercise, without solving a single physics equation, we have deduced that pressure drop in a pipe depends solely on the aspect ratio and the Reynolds number.
