---
title: "Design of Columns for Eccentric Loading"
---

# Design of Columns for Eccentric Loading

Designing a column strictly for concentric (perfectly centered) loading is rare. Most columns in real structures experience some form of bending moment alongside the axial compression.
*   A building column experiences axial load from the floor above, but also experiences a bending moment from wind hitting the side of the building.
*   A beam might rest on a bracket welded to the *side* of a column, applying the axial load at a physical eccentricity $e$.

This combined loading is analyzed using **Interaction Formulas**.

## 1. The Danger of Superposition in Buckling

As discussed in Topic 7, we normally analyze combined loading using superposition: $\sigma = P/A + Mc/I$.
We check if this total stress exceeds the allowable material stress ($\sigma_{allow}$).

However, for a slender column, this is incredibly dangerous. The P-Delta effect (where the axial load pushes on the bowed shape, magnifying the moment) invalidates simple superposition. The bending moment $M$ grows exponentially as the column approaches its buckling limit.

## 2. The Interaction Equation

To safely design a column subjected to both axial compression and bending, engineering codes use a straight-line **Interaction Equation**. 

This equation checks what percentage of the column's axial capacity is being used up, and adds it to the percentage of the column's bending capacity being used up. The total cannot exceed 100% (1.0).

$$ \frac{\sigma_a}{\sigma_{allow\_axial}} + \frac{\sigma_b}{\sigma_{allow\_bending}} \le 1.0 $$

Where:
*   **$\sigma_a$** is the applied axial stress ($P/A$).
*   **$\sigma_{allow\_axial}$** is the allowable stress if the column were *only* loaded axially (calculated using the AISC column formulas from the previous section, dependent on $KL/r$).
*   **$\sigma_b$** is the applied maximum bending stress ($Mc/I$).
*   **$\sigma_{allow\_bending}$** is the allowable stress if the beam were *only* subjected to bending (often just the yield stress divided by a safety factor, but can be lower if lateral-torsional buckling is a risk).

## 3. Accounting for the P-Delta Effect (Magnification Factor)

The simple interaction equation above works well for short, stout columns. However, for slender columns, the applied bending stress $\sigma_b$ must be artificially increased to account for the dangerous P-Delta moment magnification.

Codes require engineers to calculate a **Moment Magnification Factor ($\delta_m$)**. This factor is always greater than 1.0, and it approaches infinity as the axial load $P$ approaches Euler's critical buckling load.

The modified, advanced interaction equation becomes:

$$ \frac{\sigma_a}{\sigma_{allow\_axial}} + \frac{\delta_m \cdot \sigma_b}{\sigma_{allow\_bending}} \le 1.0 $$

If this equation results in a number $\le 1.0$, the column will safely survive the combination of being squashed and bent simultaneously. If it is $> 1.0$, the column will buckle and collapse, and a stiffer cross-section must be selected.
