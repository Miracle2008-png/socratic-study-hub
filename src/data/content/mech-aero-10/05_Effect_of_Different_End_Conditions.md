# Effect of Different End Conditions

Euler's derivation assumed a very specific geometric boundary condition: a column perfectly pinned at both the top and the bottom. 
A pin joint allows the end of the column to rotate freely as it bows outward.

What happens if we change the way the ends are supported? If we embed the ends of a steel column deep into massive concrete footings, the ends cannot rotate. Does this make the column harder to buckle?

## 1. The Fixed-Fixed Column

Consider a column of length $L$ where both ends are rigidly clamped (fixed). 
Because the ends cannot rotate, the slope ($\theta = dv/dx$) must be exactly zero at both ends.

When the column attempts to buckle, the fixed supports apply heavy reaction moments that force the ends of the column to remain perfectly vertical. The column must buckle into a complex "S" shape, curving out in the middle but bending back sharply to enter the supports vertically.

We write the differential equation, integrate, and apply the new boundary conditions ($v=0, \theta=0$ at both ends).
The resulting solution for the critical load is:
$$ P_{cr} = \frac{4 \pi^2 EI}{L^2} $$

**Conclusion:** A fixed-fixed column is exactly **4 times stronger** than a pinned-pinned column of the exact same length and material. Restricting rotation at the ends massively stiffens the structure against buckling.

## 2. The Fixed-Free Column (Flagpole)

Consider a cantilever column, fixed at the base but completely free and unsupported at the top (like a flagpole or a water tower leg). 
When loaded, the top simply sways laterally as the entire column bows over.

Solving the differential equation with these boundary conditions yields:
$$ P_{cr} = \frac{\pi^2 EI}{4 L^2} $$

**Conclusion:** A flagpole column is **4 times weaker** than a pinned column. It is extremely vulnerable to buckling.

## 3. The Fixed-Pinned Column

Consider a column fixed at the base but pinned at the top. The top cannot move laterally, but it can rotate.
The differential equation yields a complex transcendental equation that must be solved numerically. The result is:
$$ P_{cr} \approx \frac{2.046 \pi^2 EI}{L^2} $$

**Conclusion:** This column is roughly **twice as strong** as a pinned-pinned column.

## 4. The Takeaway

The physical supports at the ends of a column drastically alter its ability to buckle. Engineers must carefully design not just the column itself, but the connections and brackets that hold it in place. A loose, "pinned" bracket design might cause a column to collapse, while a rigid, welded "fixed" bracket would allow it to survive safely.
