# Phase Equilibria in LLE (Ternary Diagrams)

Because liquid-liquid extraction involves at least three chemical species—the Carrier ($A$), the Solvent ($B$), and the Solute ($C$)—we cannot plot the equilibrium data on a simple 2D Cartesian graph like we do for distillation. 

Instead, we use an equilateral triangle, known as a **Ternary Phase Diagram**.

## 1. Reading a Ternary Diagram

An equilateral triangle has three corners.
*   Each corner represents 100% purity of one of the three components ($A$, $B$, or $C$).
*   The side of the triangle opposite a corner represents 0% of that component.
*   Any point inside the triangle represents a ternary mixture. The mass fraction (or mole fraction) of a component is determined by drawing a line from the point straight to the side opposite that component's corner. The distance from the opposite side to the corner represents 0% to 100%.
*   The edges of the triangle represent binary mixtures (only two components present).

## 2. The Binodal Curve

Not all mixtures of three liquids will form two separate layers. If you add a small amount of oil to water, it forms two layers. But if you add ethanol to water, it forms one single phase.

On the ternary diagram, there is a distinct dome-shaped curve called the **Binodal Curve** (or Solubility Curve).
*   **Single-Phase Region:** Any coordinate outside the dome (usually towards the Solute $C$ corner) represents a completely miscible, single-phase solution. If your mixture lands here, extraction is impossible because no layers will form.
*   **Two-Phase Region:** Any coordinate *inside* the dome represents an unstable mixture that will physically split into two distinct liquid phases—an Extract phase and a Raffinate phase.

## 3. Tie Lines and the Plait Point

If you mix $A$, $B$, and $C$ such that the overall mixture coordinate lands inside the dome, the mixture will separate into two phases. But what are the exact compositions of those two new phases?

They are determined by **Tie Lines**.
*   A tie line is a straight line drawn inside the dome connecting the Extract phase composition (on the solvent-rich side of the binodal curve) to the Raffinate phase composition (on the carrier-rich side of the binodal curve).
*   The tie lines are determined experimentally in a lab. They are almost never perfectly horizontal because the solute $C$ usually prefers one solvent over the other.
*   **The Lever Rule:** If your overall mixture point $M$ lies on a tie line between Extract $E$ and Raffinate $R$, the mass ratio of the two phases is determined by the lengths of the line segments: $\frac{\text{Mass of Extract}}{\text{Mass of Raffinate}} = \frac{\text{Distance } MR}{\text{Distance } ME}$.

**The Plait Point:**
As the concentration of solute $C$ increases, the Extract and Raffinate phases become more and more chemically similar. The tie lines get shorter. Eventually, the tie line shrinks to a single dot at the peak of the binodal curve. This is the **Plait Point**. 
At the plait point, the Extract and Raffinate phases have identical compositions and densities; the two layers merge into one. Extraction cannot occur at or above the plait point.

## 4. The Distribution Coefficient ($K$)

The slope of the tie lines indicates how the solute distributes itself between the two phases. This is quantified by the Distribution Coefficient (or Partition Coefficient), $K$:

$$ K = \frac{y_C}{x_C} $$

Where:
*   $y_C$ = Mass fraction of solute in the Extract phase (Solvent $B$ rich).
*   $x_C$ = Mass fraction of solute in the Raffinate phase (Carrier $A$ rich).

If $K > 1$, the solute prefers the new solvent. This is highly desirable for an extraction process.
