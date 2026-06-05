# View Factors (Shape Factors)

When radiation leaves Surface 1, not all of it hits Surface 2. Some might hit Surface 3, some might escape to space, and if Surface 1 is concave, some might even hit Surface 1 itself. 

To quantify this geometric reality, we define the **View Factor $F_{1 \to 2}$** (also called Shape Factor or Configuration Factor).

## 1. Definition

The view factor $F_{i \to j}$ is the fraction of the radiation leaving surface $i$ that strikes surface $j$ directly.
- $0 \le F_{i \to j} \le 1$.
- If $F_{1 \to 2} = 1$, *all* radiation leaving 1 hits 2.
- If $F_{1 \to 2} = 0$, *none* of the radiation leaving 1 hits 2 (they cannot "see" each other).

The total radiation heat transfer rate originating from surface $i$ and directly striking surface $j$ is:
$$\dot{Q}_{i \to j} = F_{i \to j} A_i J_i$$
Where $J_i$ is the radiosity (total radiation leaving surface $i$).

## 2. Mathematical Definition

Assuming diffuse emission and reflection (uniform intensity in all directions), the view factor is a purely geometric parameter, determined entirely by the size, orientation, and distance between the two surfaces.

It is evaluated via a complex double-area integral:
$$F_{i \to j} = \frac{1}{A_i} \int_{A_i} \int_{A_j} \frac{\cos\theta_i \cos\theta_j}{\pi R^2} dA_j dA_i$$
- $\theta_i$, $\theta_j$: Angles between the surface normals and the line connecting the differential areas.
- $R$: The distance between the differential areas.

Solving this integral analytically is incredibly difficult for all but the simplest geometries. Engineers rely on published catalogs of view factor formulas and charts for standard geometries (e.g., parallel plates, perpendicular plates, concentric cylinders).

## 3. The Self-View Factor ($F_{i \to i}$)

Can a surface see itself?
- **Flat Surface:** $F_{i \to i} = 0$. Radiation leaving a flat surface travels away; it cannot curve back to hit the surface.
- **Convex Surface:** $F_{i \to i} = 0$. Radiation leaving the outside of a sphere or cylinder radiates away.
- **Concave Surface:** $F_{i \to i} > 0$. The inside of a bowl or a hemispherical cavity "sees" itself. Some radiation leaving the inner surface directly strikes another part of the same inner surface.

## 4. Fundamental Rules of View Factors

Because evaluating the double integral is tedious, engineers use three fundamental algebraic rules to determine unknown view factors from known ones, effectively turning complex geometries into logic puzzles. These are covered in the next section.
