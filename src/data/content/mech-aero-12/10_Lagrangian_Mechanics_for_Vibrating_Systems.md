---
title: "Lagrangian Mechanics for Vibrating Systems"
---

# Lagrangian Mechanics for Vibrating Systems

Newton's Second Law is powerful but geometrically cumbersome for multi-body systems with constraints (like a double pendulum or a vehicle suspension with linkages). **Lagrangian Mechanics** provides a systematic, coordinate-free approach to deriving equations of motion for any mechanical system, regardless of complexity.

## 1. Generalized Coordinates

For a system with $n$ degrees of freedom, we select $n$ **generalized coordinates** $q_1, q_2, \ldots, q_n$ that completely describe the configuration of the entire system. These can be any convenient quantities: lengths, angles, displacements.

The beauty: constraint forces (like the tension in a string keeping a pendulum at fixed length) automatically vanish from the equations — you never have to identify them.

## 2. Lagrange's Equations

The **Lagrangian** $L$ is defined as:
$$L = T - V$$

Where:
- $T$ = total kinetic energy of the system
- $V$ = total potential energy of the system

**Lagrange's Equations of Motion** (one equation per generalized coordinate $q_i$):
$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$$

Where $Q_i$ is the **generalized force** associated with coordinate $q_i$ (zero for conservative systems, equal to non-conservative forces like damping and applied loads otherwise).

## 3. Applying to a Spring-Mass System

Generalized coordinate: $q_1 = x$ (displacement).

Kinetic energy: $T = \frac{1}{2}m\dot{x}^2$

Potential energy: $V = \frac{1}{2}kx^2$

Lagrangian: $L = T - V = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$

Applying Lagrange's equation:
$$\frac{d}{dt}(m\dot{x}) - (-kx) = 0 \implies m\ddot{x} + kx = 0$$

Identical to Newton's result — but derived purely from energy expressions with no free body diagram required.

## 4. The Power of Lagrangian Methods

**Double Pendulum:** Applying Newton's Law requires resolving tension forces at two joints simultaneously — an algebraic nightmare. Applying Lagrange's equations: write $T$ and $V$ in terms of the two angles $\theta_1, \theta_2$, take partial derivatives, and the equations fall out automatically.

For vibration analysis, Lagrange's equations naturally produce the **mass matrix $[M]$** and **stiffness matrix $[K]$** for multi-DOF systems, which directly feed into the eigenvalue problem of modal analysis — the cornerstone of structural dynamics FEA software.
