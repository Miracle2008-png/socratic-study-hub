---
title: "The Vibration of Beams and Shafts"
---

# The Vibration of Beams and Shafts

While the spring-mass model captures the essential physics, real engineering structures are continuous — they have distributed mass and stiffness rather than lumped parameters. This section covers the vibration of the two most important continuous mechanical elements: beams and rotating shafts.

## 1. Natural Frequencies of Beams (Transverse Vibration)

A simply supported beam with uniformly distributed mass vibrates transversely (up-and-down). The governing partial differential equation (the Euler-Bernoulli beam equation with inertia) yields multiple natural frequencies — one for each mode shape.

The $n$-th natural frequency of a simply supported beam of length $L$, flexural rigidity $EI$, and mass per unit length $\bar{m}$ is:
$$\omega_n = \left(\frac{n\pi}{L}\right)^2 \sqrt{\frac{EI}{\bar{m}}}$$

*   $n = 1$: Fundamental mode — the entire beam bows into one half-sine wave.
*   $n = 2$: Second mode — the beam bows into a full sine wave with a node (zero-motion point) at the center.
*   $n = 3$: Third mode — one and a half sine waves, two nodes.

For a **cantilever beam**, the boundary conditions are different (fixed-free), producing non-harmonic mode shapes described by hyperbolic functions. The fundamental natural frequency of a cantilever is:
$$\omega_1 \approx \frac{3.516}{L^2}\sqrt{\frac{EI}{\bar{m}}}$$

## 2. Torsional Vibration of Shafts

A rotating shaft with attached disks (like a crankshaft or camshaft) can vibrate torsionally — the disks twisting back and forth against the shaft's torsional stiffness.

For a single disk of polar mass moment of inertia $J_d$ on a shaft of torsional stiffness $k_T = GJ/L$:
$$\omega_n = \sqrt{\frac{k_T}{J_d}} = \sqrt{\frac{GJ}{LJ_d}}$$

This is mathematically identical to the linear spring-mass equation with $k \to k_T$ and $m \to J_d$.

## 3. Critical Speed of Rotating Shafts (Whirling)

A rotating shaft with a disk mounted at mid-span will experience **whirling** — a lateral vibration where the shaft bows outward due to the disk's rotational imbalance.

The rotational speed at which whirling becomes resonant is the **Critical Speed ($N_c$)**. At this RPM, the forcing frequency (rotation speed) matches the shaft's lateral natural frequency.

$$N_c = \frac{60\omega_n}{2\pi} \quad \text{[RPM]} \quad \text{where } \omega_n = \sqrt{\frac{48EI}{ML^3}} \text{ (for center-mounted disk)}$$

**Critical Rule:** A rotating machine must never be operated at or near its critical speed. Machines are designed to run either well below or well above $N_c$. The transition through $N_c$ during startup must be done rapidly to limit the duration of resonance exposure.
