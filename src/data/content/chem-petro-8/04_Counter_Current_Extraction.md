# Counter-Current Extraction

To maximize solute recovery while minimizing solvent usage, industrial extraction is performed in continuous **Counter-Current** columns or a cascade of mixer-settlers.

The heavy liquid (usually the aqueous feed) flows downwards, while the light liquid (usually the organic solvent) flows upwards.
*   **Stage 1** is at the feed end. The dirty feed ($F$) enters here and contacts the *dirtiest* solvent ($E_2$) rising from below. The final product Extract ($E_1$) leaves here.
*   **Stage N** is at the solvent end. The pure, fresh solvent ($S$) enters here and contacts the *cleanest* raffinate ($R_{N-1}$) falling from above. The final waste Raffinate ($R_N$) leaves here.

This arrangement provides the maximum thermodynamic driving force throughout the entire column.

## 1. The Graphical Method (Hunter-Nash)

Designing a counter-current system requires finding the number of theoretical stages needed to achieve a target Raffinate purity ($R_N$). We use the Hunter-Nash graphical method on a ternary diagram.

**Step 1: The Overall Balance and the Operating Point ($P$)**
The overall mass balance over the whole column is:
$$ F + S = E_1 + R_N = M $$
Rearranging gives the difference equation:
$$ F - E_1 = R_N - S = P $$
$P$ is an imaginary mathematical point called the **Operating Pole** (or Delta Point). Because it represents a difference, it almost always physically plots *outside* the triangle.

To find $P$:
1.  Plot $F$ and $S$. Calculate mixture $M$ and plot it.
2.  Plot the target $R_N$. 
3.  Draw a line through $R_N$ and $M$ and extend it until it intersects the binodal curve. This point is $E_1$.
4.  Draw a straight line through $F$ and $E_1$ and extend it outside the triangle.
5.  Draw a straight line through $R_N$ and $S$ and extend it outside the triangle.
6.  The intersection of these two lines is the Operating Pole **$P$**.

**Step 2: Stepping Off Stages**
Just like McCabe-Thiele, we step between Equilibrium (Tie Lines) and Mass Balances (Operating Lines connecting to $P$).
1.  Start at $E_1$.
2.  **Equilibrium Step:** Follow the Tie Line from $E_1$ across the dome to find the liquid in equilibrium with it: $R_1$. (This represents Stage 1).
3.  **Mass Balance Step:** Draw a straight line from $P$ through $R_1$ until it hits the Extract side of the binodal curve. This point is $E_2$.
4.  **Equilibrium Step:** Follow the Tie Line from $E_2$ to find $R_2$. (Stage 2).
5.  **Mass Balance Step:** Draw a straight line from $P$ through $R_2$ to find $E_3$.
6.  Repeat this process until your Raffinate point crosses your target $R_N$. The number of Tie Lines you used is the number of theoretical stages required.

## 2. Minimum Solvent Ratio

Just like distillation has a minimum reflux ratio, extraction has a **minimum solvent-to-feed ratio** $(S/F)_{min}$.

If you try to save money by reducing the fresh solvent flow rate ($S$), the mixture point $M$ moves closer to $F$. The Operating Pole $P$ shifts. 
Eventually, one of the operating lines (connecting a Raffinate point to $P$) will perfectly coincide with a Tie Line. 
When an operating line and a tie line are parallel and sit on top of each other, it creates a **Pinch Point**. It will take an infinite number of stages to pass this point.

To find the minimum solvent rate graphically, you extend all the tie lines out to intersect the $R_N-S$ line. The intersection point closest to the triangle represents the limiting Operating Pole $P_{min}$. From $P_{min}$, you can back-calculate $(S/F)_{min}$. 
Real columns are typically operated at $1.5$ to $2.0$ times the minimum solvent rate.
