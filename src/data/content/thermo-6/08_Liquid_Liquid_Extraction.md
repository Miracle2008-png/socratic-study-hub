# Liquid-Liquid Extraction

When distillation is impractical—perhaps the components have nearly identical boiling points, or they form an azeotrope, or they are heat-sensitive and would degrade at their boiling temperatures—chemical engineers turn to **liquid-liquid extraction**.

## 1. The Core Concept

Extraction separates the components of a liquid mixture (the **feed**) by adding a second liquid (the **solvent**) that is immiscible (or partially immiscible) with the feed, but which selectively dissolves one of the components (the **solute**).

*   **Feed:** Solute (A) dissolved in a Carrier liquid (C).
*   **Solvent (S):** Added to extract the solute.
*   **Extract:** The solvent-rich phase leaving the process, now containing the extracted solute (S + A).
*   **Raffinate:** The carrier-rich phase leaving the process, now depleted of the solute (C).

*Example:* Penicillin is produced in an aqueous fermentation broth. Heating it for distillation would destroy the drug. Instead, an organic solvent like butyl acetate is added. The penicillin preferentially dissolves into the organic solvent, leaving the water behind.

## 2. Liquid-Liquid Equilibrium (Ternary Diagrams)

Because extraction involves three main components (Solute, Carrier, Solvent), we cannot use a simple x-y diagram. We use a **ternary phase diagram** (an equilateral triangle).

*   The three corners represent 100% pure A, C, and S.
*   Any point inside the triangle represents a specific mixture of the three.
*   **The Miscibility Boundary (Binodal Curve):** A curve inside the triangle separates the single-phase region (where all three components completely dissolve into one liquid) from the two-phase region.
*   Mixtures falling inside the two-phase region will spontaneously split into two separate liquid layers: an Extract phase and a Raffinate phase.

**Tie Lines:**
If a mixture splits into two phases, the compositions of those two phases lie on the binodal curve and are connected by a **tie line**. The tie lines are determined experimentally. They are rarely perfectly horizontal, indicating that the solute has a preference for one solvent over the other.

## 3. The Distribution Coefficient ($K_D$)

The effectiveness of the solvent is quantified by the distribution coefficient (or partition coefficient):
$$ K_D = \frac{x_{A,extract}}{x_{A,raffinate}} $$
Where $x_A$ is the mass or mole fraction of the solute in the respective phase at equilibrium.
*   We want a solvent with $K_D \gg 1$, meaning the solute strongly prefers the extracting solvent over the original carrier.

## 4. Multi-Stage Extraction

Like distillation, extraction is rarely done in a single step. It is performed in a cascade of stages (often using mixer-settler units).

**Cross-Current Extraction:**
Fresh solvent is added to every stage. The raffinate from Stage 1 goes to Stage 2, where it is mixed with more *fresh* solvent.
*   *Advantage:* Very high recovery of solute is possible.
*   *Disadvantage:* Uses an enormous amount of solvent. The resulting extract is very dilute, making subsequent recovery of the solute expensive.

**Counter-Current Extraction:**
The industry standard. The feed enters at Stage 1, the fresh solvent enters at Stage $N$ (the last stage). The extract and raffinate flow in opposite directions.
*   The most depleted raffinate (at stage $N$) contacts the purest, freshest solvent, ensuring maximum final extraction driving force.
*   The richest extract (at stage 1) contacts the fresh, solute-rich feed, ensuring maximum initial mass transfer.
*   Highly efficient use of solvent.

## 5. Solvent Recovery

Extraction does not yield pure product; it yields a solvent containing the product. The final, crucial step in any extraction process is separating the solute from the solvent so the product can be collected and the solvent recycled.

This is usually done by:
*   **Distillation:** If the solvent and solute have vastly different boiling points (which is a key criterion for choosing a good solvent!).
*   **Evaporation:** Boiling off a highly volatile solvent.
*   **Stripping:** Using steam or inert gas to remove a volatile solute from a non-volatile solvent.
