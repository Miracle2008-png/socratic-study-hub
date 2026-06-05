# View Factor Relations

To avoid evaluating complex double integrals, three algebraic relations are used to solve for unknown view factors in an enclosure.

## 1. The Reciprocity Relation

This is the most powerful tool in radiation analysis. It relates the view factor from $i$ to $j$ to the reverse view factor from $j$ to $i$.

$$\boxed{A_i F_{i \to j} = A_j F_{j \to i}}$$

**Example:** A small sphere (1) of area $A_1 = 1 \, m^2$ is perfectly enclosed by a massive outer sphere (2) of area $A_2 = 100 \, m^2$.
- Because 1 is convex, it cannot see itself ($F_{11} = 0$).
- All radiation leaving 1 must hit 2, so $F_{12} = 1.0$.
- What is $F_{21}$ (the fraction of radiation leaving the giant outer sphere that hits the tiny inner sphere)?
- Using reciprocity: $A_2 F_{21} = A_1 F_{12} \implies 100 \cdot F_{21} = 1 \cdot 1.0 \implies F_{21} = 0.01$.

## 2. The Summation Rule

For an enclosure consisting of $N$ surfaces, all radiation leaving surface $i$ must strike *something* within the enclosure (including possibly itself). The sum of the fractions must equal 100%.

$$\sum_{j=1}^N F_{i \to j} = 1$$
For a 3-surface enclosure: $F_{11} + F_{12} + F_{13} = 1$

Note: If the surfaces do not form a complete enclosure (e.g., two parallel plates in an open room), we artificially add a "Surface 3" representing the surrounding room to close the enclosure, allowing the summation rule to be used.

## 3. The Superposition Rule

If a surface $j$ is subdivided into smaller parts (e.g., $j$ is made of part $A$ and part $B$), the view factor from surface $i$ to the combined surface $j$ is simply the sum of the view factors to the parts.

$$F_{i \to (A+B)} = F_{i \to A} + F_{i \to B}$$

*Caution:* This rule is only linear from the perspective of the *emitting* surface. The reverse is NOT true:
$F_{(A+B) \to i} \neq F_{A \to i} + F_{B \to i}$
To find $F_{(A+B) \to i}$, you must use the reciprocity relation combined with superposition:
$A_{A+B} F_{(A+B) \to i} = A_A F_{A \to i} + A_B F_{B \to i}$

## 4. Solving View Factor Problems

Typical view factor problems are algebraic puzzles.
For an $N$-surface enclosure, there are $N^2$ view factors.
- You know $N$ factors immediately if you know which surfaces are flat/convex ($F_{ii} = 0$).
- The Summation Rule provides $N$ equations.
- The Reciprocity Rule provides $N(N-1)/2$ equations.

This leaves only a small number of view factors that must be looked up in a chart or calculated analytically. For a 2-surface or 3-surface enclosure, you can often solve the entire matrix without looking up a single chart just by knowing the geometry.
