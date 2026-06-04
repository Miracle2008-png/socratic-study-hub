---
title: "Bearing Stress in Connections"
---

# Bearing Stress in Connections

When analyzing structural connections (like bolted or riveted joints), we must ensure the bolt itself does not shear. However, we must also ensure that the bolt does not crush or tear through the plates it is connecting.

The compressive stress developed at the contact surface between the bolt shank and the inner wall of the hole in the plate is known as **bearing stress**.

## 1. Defining Bearing Area

When a cylindrical bolt presses against the inner cylindrical wall of a hole, the true contact pressure distribution is highly complex. It is maximum at the center of the contact arc and tapers off to zero at the edges.

To simplify the engineering analysis, we do not calculate the true pressure distribution. Instead, we define a nominal **average bearing stress** based on the *projected rectangular area* of the hole.

Imagine looking straight down the axis of the applied load. The cylindrical hole looks like a flat rectangle.
The projected bearing area $A_b$ is defined as the product of the bolt diameter $d$ and the plate thickness $t$:
$$ A_b = d \cdot t $$

## 2. Average Bearing Stress

The average bearing stress $\sigma_b$ is calculated by dividing the force transmitted through the connection by the projected bearing area:
$$ \sigma_b = \frac{P}{A_b} = \frac{P}{d \cdot t} $$

Where:
- $P$ is the force transmitted between the bolt and the specific plate being analyzed.
- $d$ is the diameter of the bolt (or pin).
- $t$ is the thickness of the plate in contact with the bolt.

## 3. Design Considerations in Connections

A complete analysis of a simple bolted joint requires checking three distinct modes of failure to ensure the connection is safe:

1. **Shear Failure of the Bolt:** The bolt might be sliced in half. Checked using $\tau_{avg} = V / A_{bolt}$.
2. **Bearing Failure of the Plate:** The bolt might crush the hole in the plate, elongating it and ruining the connection. Checked using $\sigma_b = P / (dt)$.
3. **Tensile Tearing of the Plate:** The plate itself might tear across its width at the location of the hole, because the hole removes material and creates a "weakest link."
   The average tensile stress in the plate at the hole is calculated using the *net cross-sectional area*:
   $$ \sigma_{net} = \frac{P}{A_{net}} = \frac{P}{(w - d)t} $$
   where $w$ is the total width of the plate, and $d$ is the diameter of the hole.

The physical connection will fail in whichever mode requires the lowest applied force $P$. The engineer must design the joint such that none of these three stresses exceed the allowable limits of the materials.
