---
title: "Absolute Maximum Shear Stress"
---

# Absolute Maximum Shear Stress

Up to this point, we have restricted our analysis to "Plane Stress," meaning we only rotated our microscopic element around the z-axis (like spinning a block on a tabletop). We found the maximum shear stress *within* that specific 2D x-y plane.

However, the real world is three-dimensional. To guarantee the safety of a design, we must find the **Absolute Maximum Shear Stress** ($\tau_{abs, max}$) by considering rotations out of the x-y plane into 3D space.

## 1. The 3D Principal Stresses

Even in a 2D plane stress state, we actually have three Principal Stresses.
*   $\sigma_1$: The major in-plane principal stress.
*   $\sigma_2$: The minor in-plane principal stress.
*   $\sigma_3$: The out-of-plane principal stress. For a free surface experiencing Plane Stress, there is no force pushing into the surface, so **$\sigma_3 = 0$**.

To find the absolute maximum shear stress, we must order these three principal stresses from algebraically highest to algebraically lowest.
Let's rename them so that: **$\sigma_{max} > \sigma_{mid} > \sigma_{min}$**

## 2. The Three Mohr's Circles

In 3D stress analysis, you can draw three separate Mohr's Circles, each connecting two of the three principal stresses:
1.  A circle between $\sigma_{max}$ and $\sigma_{mid}$
2.  A circle between $\sigma_{mid}$ and $\sigma_{min}$
3.  A large outer circle connecting $\sigma_{max}$ and $\sigma_{min}$

The Absolute Maximum Shear Stress is simply the radius of the largest possible circle.
$$ \tau_{abs, max} = \frac{\sigma_{max} - \sigma_{min}}{2} $$

## 3. The 2D vs. 3D Trap

A very common and dangerous mistake occurs when engineers only calculate the "in-plane" $\tau_{max}$ and assume it is the worst case. 

Remember, for Plane Stress, the third principal stress is zero ($\sigma_z = 0$).

**Scenario A: Same Sign Principal Stresses**
Imagine the in-plane principal stresses are $\sigma_1 = 100$ MPa and $\sigma_2 = 50$ MPa.
*   The in-plane $\tau_{max} = (100 - 50)/2 = 25$ MPa.
*   But the 3D principal stresses are 100, 50, and 0.
*   The ordered stresses are: $\sigma_{max} = 100$, $\sigma_{min} = 0$.
*   The true 3D absolute maximum shear stress is $\tau_{abs, max} = (100 - 0)/2 = \mathbf{50 \text{ MPa}}$.
*   The actual shear stress that will cause the metal to yield is *double* what the 2D analysis predicted. The out-of-plane rotation is the critical failure mode.

**Scenario B: Opposite Sign Principal Stresses**
Imagine $\sigma_1 = 100$ MPa and $\sigma_2 = -50$ MPa (tension and compression).
*   The in-plane $\tau_{max} = (100 - (-50))/2 = 75$ MPa.
*   The 3D principal stresses are 100, 0, and -50.
*   The ordered stresses are: $\sigma_{max} = 100$, $\sigma_{min} = -50$.
*   The 3D absolute maximum shear stress is $\tau_{abs, max} = (100 - (-50))/2 = \mathbf{75 \text{ MPa}}$.
*   In this specific case, the in-plane maximum *is* the absolute maximum. The worst-case shear occurs entirely within the x-y plane.
