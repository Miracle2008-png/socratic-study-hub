# Introduction to Statics

**Statics** is the branch of engineering mechanics that is concerned with the analysis of loads (force and torque, or "moment") on physical systems in static equilibrium. That is, in a state where the relative positions of subsystems do not vary over time, or where components and structures are at a constant velocity. 

In the regime of statics, the system is either at rest or its center of mass moves at a constant velocity. By Newton's second law, this implies that the net force and net torque acting on every part of the system is zero.

## 1. Mechanics as a Foundation

Mechanics can be subdivided into three main branches:
1. **Rigid-body Mechanics**: Deals with bodies assumed to be perfectly rigid (undeformable). It is further divided into:
   - *Statics*: Bodies at rest or moving with constant velocity.
   - *Dynamics*: Bodies in accelerated motion.
2. **Deformable-body Mechanics**: Deals with the distribution of internal forces and deformations within solid bodies (Mechanics of Materials).
3. **Fluid Mechanics**: Deals with the behavior of compressible and incompressible fluids at rest or in motion.

Statics is the absolute prerequisite for both deformable-body mechanics and dynamics. The principles of statics are used to determine the forces acting *on* and *within* a structure, ensuring it does not fail under applied loads.

## 2. Basic Assumptions of Statics

The fundamental model of statics relies on the concept of a **rigid body**. 
A rigid body is defined as a definite amount of matter, the parts of which are fixed in position relative to each other. In reality, all bodies deform when subjected to forces; however, in statics, these deformations are assumed to be microscopic and totally negligible compared to the overall dimensions of the body. 

By assuming rigidity, the precise points of application of forces remain constant, simplifying the mathematical analysis of external forces without needing to account for internal material strain.

## 3. The Objective of Statics

The primary objective of statics in engineering is to determine the unknown forces acting on a structure in equilibrium. This involves:
- Identifying all external forces (applied loads, gravitational weight).
- Identifying all reaction forces (forces exerted by supports).
- Applying the equations of equilibrium to solve for the unknowns.

$$ \sum \mathbf{F} = 0 $$
$$ \sum \mathbf{M} = 0 $$

These two vector equations govern the entirety of statics. Mastering their application to 2D and 3D systems is the core focus of this topic.
