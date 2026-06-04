---
title: "Introduction to Torsion"
---

# Introduction to Torsion

While axial loading deals with forces pushing or pulling along the longitudinal axis of a member, **torsion** deals with moments (torques) applied about the longitudinal axis.

Torsion refers to the twisting of a structural member when it is loaded by couple moments that produce rotation about its longitudinal axis. Members specifically designed to transmit these torques are generally called **shafts**.

## 1. Applications in Engineering

Torsion is the dominant loading condition for rotating machinery. Drive shafts in automobiles, propeller shafts in marine vessels, turbine rotors in jet engines, and the spindle of a CNC lathe all transmit enormous amounts of mechanical power through torsional loading.

Understanding how to calculate the shear stresses developed within the shaft material, and how much the shaft physically twists under load, is paramount to mechanical and aerospace design.

## 2. Torque Vector Convention

A torque is a moment vector directed along the axis of the shaft. 

We represent torques using the right-hand rule. If you curl the fingers of your right hand in the direction of the twisting applied to the shaft, your thumb points in the direction of the torque vector.
- A double-headed arrow is often used to denote a torque vector on a 2D drawing to distinguish it from a force vector.
- A curved arrow in a cross-sectional view clearly indicates the physical sense of the twist.

## 3. Internal Torque

To analyze the stresses inside a shaft, we must first find the internal torque $T$ acting on the cross-section. We do this using the identical method of sections used for axial loading.

1. Pass an imaginary cutting plane through the shaft at the point of interest, perpendicular to its axis.
2. Discard one half of the shaft.
3. Draw a free-body diagram of the remaining half.
4. Apply the equilibrium equation $\sum M_x = 0$ (where $x$ is the longitudinal axis) to determine the magnitude and direction of the internal resisting torque $T$ required to balance the external applied torques.

## 4. The Sign Convention for Internal Torque

By convention, an internal torque is considered **positive** if its right-hand rule vector points *outward* from the cut face (similar to a tensile normal force). 
If the vector points *into* the cut face, the internal torque is negative.
