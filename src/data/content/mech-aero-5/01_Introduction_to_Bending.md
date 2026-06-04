---
title: "Introduction to Bending"
---

# Introduction to Bending

In previous topics, we analyzed members subjected to axial forces (causing uniform normal stress) and torques (causing shear stress). We now turn our attention to the most common structural element in all of engineering: the **beam**.

A beam is a structural member designed to support loads applied perpendicular to its longitudinal axis. These transverse loads cause the beam to bend, curving its originally straight axis.

## 1. The Nature of Bending

When a transverse load is applied to a beam, it creates a highly complex internal state of stress. 
Unlike pure axial loading (which causes only tension or compression) or pure torsion (which causes only shear), bending creates a **combined loading** condition.

If we pass an imaginary cutting plane through a loaded beam, equilibrium dictates that the internal forces must consist of:
1.  **A Shear Force ($V$):** Acting parallel to the cross-section, attempting to slice the beam vertically.
2.  **A Bending Moment ($M$):** A couple moment acting on the cross-section, attempting to rotate or bend the beam.

Because the internal bending moment $M$ varies continuously along the length of the beam, the stresses within the beam also vary continuously. Therefore, before we can calculate any stresses, we must first determine exactly how $V$ and $M$ change from one end of the beam to the other.

## 2. Types of Beams

Beams are generally classified by how they are supported, as the supports dictate the external boundary conditions for equilibrium.

*   **Simply Supported Beam:** Pinned at one end and roller-supported at the other. It is statically determinate.
*   **Cantilever Beam:** Rigidly fixed at one end and completely free at the other. It is statically determinate.
*   **Overhanging Beam:** Supported by a pin and a roller, but extending continuously past one or both supports. It is statically determinate.
*   **Continuous Beam:** Supported by three or more supports. It is statically indeterminate (cannot be solved using statics alone).

## 3. The Objective of Bending Analysis

The ultimate goal in the study of bending is to relate the internal bending moment $M$ to the normal stresses ($\sigma$) developed inside the material.

When a beam bends downwards (like a smile), the top fibers of the beam are crushed together (compression), while the bottom fibers are stretched apart (tension). Somewhere in the middle, there must be a layer of material that is neither stretched nor compressed. 

Our objective is to mathematically define this stress distribution so we can design beams that will not fracture or permanently yield under massive transverse loads.
