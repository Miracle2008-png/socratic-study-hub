---
title: "Local Buckling of Thin Elements"
---

# Local Buckling of Thin Elements

Euler buckling is a **global** failure mode. The entire length of the column bows out in a massive sine wave.
However, wide-flange I-beams and hollow square tubes are composed of very thin, flat plates (the flanges and the webs) welded together. 

If these individual plates are too thin, they can buckle and wrinkle individually, causing a catastrophic localized collapse long before the overall column has a chance to undergo global Euler buckling. This is known as **Local Buckling**.

## 1. The Plate Buckling Phenomenon

Imagine a thin, flat steel plate being compressed from both ends. 
Unlike a 1D column, a 2D plate is supported along its edges. 
*   The web of an I-beam is supported on *two* edges (where it connects to the top and bottom flanges).
*   The flange of an I-beam is supported on only *one* edge (where it connects to the web). The outer edge is completely free in space.

Because of these edge supports, a plate buckles into a series of localized ripples or "waves," exactly like a piece of paper crumpling when you push on it.

## 2. Width-to-Thickness Ratios ($b/t$)

The susceptibility of a plate to local buckling is governed entirely by its **width-to-thickness ratio ($b/t$)**.
*   A "fat" flange (small $b$, large $t$) has a very low $b/t$ ratio. It is incredibly stable and will yield plastically before it ever wrinkles.
*   A "thin" flange (wide $b$, tiny $t$) has a massive $b/t$ ratio. It is highly unstable and will ripple like aluminum foil under moderate compressive stress.

## 3. Classification of Cross-Sections

To prevent engineers from designing columns that fail prematurely due to localized wrinkling, steel design codes (like AISC) strictly classify all cross-sections into three categories based on the $b/t$ ratios of their flanges and webs:

1.  **Compact Sections:** Both the flanges and the web are very thick (low $b/t$). The section is so stable that it can be bent entirely into the fully plastic range ($M_p$) without any part of it wrinkling. These are the absolute best sections for heavy structural design.
2.  **Non-Compact Sections:** The elements are thinner. The section can reach the yield stress ($\sigma_Y$) at the outer fibers, but if pushed further, it will locally buckle before the entire cross-section can become fully plastic.
3.  **Slender Sections:** The elements are extremely thin (high $b/t$). The flanges or web will locally wrinkle and buckle long before the stress even reaches the yield point $\sigma_Y$.

## 4. Design Implications

If an engineer accidentally selects a "Slender Section" for a heavy column, the standard Euler buckling equations and interaction formulas are completely invalid. The column will collapse prematurely from a localized flange wrinkle.

Codes provide strict limits ($\lambda_p, \lambda_r$) for the maximum allowable $b/t$ ratios for flanges and webs. If a section exceeds these limits, the engineer must either select a thicker, compact section, or engage in highly advanced, tedious calculations that artificially "reduce" the effective area of the column to account for the wrinkled, useless parts of the flanges.
