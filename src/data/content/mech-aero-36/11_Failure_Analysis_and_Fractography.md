---
title: "Failure Analysis and Fractography"
---

# Failure Analysis and Fractography

When a catastrophic failure occurs—a bridge collapses, an engine explodes, or a crane boom snaps—engineers must determine exactly *why* it happened to prevent a recurrence. This forensic engineering process relies heavily on **Fractography**: the detailed study of the fracture surface.

Just as a bullet carries the unique rifling marks of the barrel that fired it, a broken metal part carries the microscopic "fingerprints" of the force that broke it.

## 1. The Forensic Process

A failure analysis investigation follows a rigorous procedure to avoid jumping to conclusions:
1.  **Preservation:** The broken pieces are treated as a crime scene. Fracture surfaces must not be touched, cleaned with harsh chemicals, or allowed to rust, as this destroys the microscopic evidence.
2.  **Macroscopic Examination:** The parts are examined by the naked eye and low-power microscopes to identify the origin of the fracture, the direction of crack propagation, and any gross defects (like large welding flaws).
3.  **Microscopic Examination (Fractography):** The fracture surface is placed in a Scanning Electron Microscope (SEM), capable of magnifying the surface up to 100,000x.
4.  **Metallurgical Analysis:** The part is sectioned, polished, and etched to examine the grain structure, verifying the material was heat-treated correctly and matched specifications.
5.  **Stress Analysis:** FEA is used to calculate the stresses the part was subjected to during its life.

## 2. Reading the Fracture Surface (Macroscopic)

To the trained eye, the large-scale features of a break reveal the primary loading condition.

*   **Ductile Overload (Yielding):** The metal stretches heavily before breaking. The fracture surface is highly distorted, often ending in a "cup-and-cone" shape (in tensile specimens). It appears rough, dull, and fibrous. This usually indicates the part was simply under-designed or subjected to a massive, unexpected static load.
*   **Brittle Fracture (Cleavage):** The part snaps with almost zero plastic deformation. The fracture surface is flat, bright, and crystalline (like broken glass). In large steel plates, characteristic "Chevron marks" (V-shaped ridges) form on the surface, all pointing back toward the exact microscopic origin of the crack.
*   **Fatigue:** As discussed previously, characterized by a smooth origin point, "beach marks" outlining the progressive crack growth, and a distinct boundary where the final sudden overload fracture occurred.

## 3. Reading the Fracture Surface (Microscopic)

The Scanning Electron Microscope reveals the definitive failure mechanism at the atomic scale.

**1. Microvoid Coalescence (Ductile Failure):**
Under the SEM, a ductile fracture surface looks like an egg carton or a sponge. These are "dimples."
-   Under extreme stress, microscopic voids open up around inclusions inside the metal.
-   As the metal stretches, these voids grow and eventually merge (coalesce), tearing the metal apart. The size and shape of the dimples tell investigators exactly which direction the metal was pulled.

**2. Cleavage (Brittle Fracture):**
Under the SEM, a brittle fracture looks like a rocky landscape with sharp cliffs and flat plateaus.
-   The crack propagates rapidly by slicing directly through the crystal lattice planes of individual grains (transgranular fracture).
-   The flat plateaus are the cleaved crystal planes. "River patterns" (step-like lines) indicate the direction the crack traveled through the grain.

**3. Intergranular Fracture:**
The crack does not go through the grains; it travels *between* them, following the grain boundaries like water flowing around stones in a wall.
-   Under the SEM, it looks like a pile of rock sugar or a crumbled brick wall.
-   This is almost always a sign that something is chemically wrong with the metal. The grain boundaries have been severely weakened by environmental attack (Stress Corrosion Cracking, Hydrogen Embrittlement) or improper heat treatment causing impurities to migrate to the boundaries.
