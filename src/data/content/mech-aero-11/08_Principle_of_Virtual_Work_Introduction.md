---
title: "Principle of Virtual Work: Introduction"
---

# Principle of Virtual Work: Introduction

As we discovered, the direct Conservation of Energy equation ($U_e = U_i$) is practically useless for complex structures because it can only find the deflection directly under a single applied load.

To find the deflection at *any* point on a structure (even a point with no load on it), we use a brilliant mathematical trick called the **Principle of Virtual Work**. It is the most versatile and powerful energy method in solid mechanics.

## 1. The Core Concept

The genius of Virtual Work lies in analyzing the structure twice: once with a fake "virtual" load, and once with the "real" loads.

Imagine we want to find the vertical deflection ($\Delta_A$) at point A on a truss, but the real loads are located at points B and C.

**Step 1: The Virtual System**
We remove all the real loads from the truss. We then place a single, imaginary, "virtual" force (usually defined as exactly **1.0**) precisely at point A, pointing in the direction we want to find the deflection.
This virtual force value of 1.0 creates tiny virtual internal forces ($n$) in every member of the truss. We use statics to solve for these internal forces $n$.

**Step 2: The Real System**
We leave the virtual force 1.0 resting on point A. We then apply the Real Loads to points B and C.
These real loads cause the entire truss to deform. Point A sags downward by the real distance $\Delta_A$.

## 3. The Virtual Work Equation

Let's look at the work done during Step 2.
Because the virtual force of 1.0 was *already sitting there* before the real loads were applied, it acts as a constant force while point A moves distance $\Delta_A$.
Therefore, the External Virtual Work is: $1.0 \times \Delta_A$. *(There is no $1/2$ multiplier because the virtual force was already fully applied).*

Inside the structure, the real loads cause real deformations ($dL$) in all the individual members. As these members stretch, the tiny virtual internal forces ($n$) ride along for the stretch.
Therefore, the Internal Virtual Strain Energy is the sum of ($n \times dL$) for every member.

Equating external work to internal energy yields the **Virtual Work Equation**:

$$ 1 \cdot \Delta = \sum n \cdot dL $$

Where:
*   **$1$** is the external virtual unit load applied exactly where you want to find the deflection.
*   **$\Delta$** is the real external deflection you are trying to calculate.
*   **$n$** is the internal virtual force in a specific member caused by the unit load.
*   **$dL$** is the real internal deformation of that specific member caused by the real loads.

By breaking the problem into two distinct static analyses (one with a 1.0 load, one with the real loads), we mathematically isolate the exact deflection we want, regardless of how many real loads are hitting the structure.
