---
title: "Conservation of Mass: The Continuity Equation"
---

# Conservation of Mass: The Continuity Equation

The laws governing fluid flow are simply the fundamental conservation laws of physics (mass, momentum, energy) applied to a continuous flowing medium. The first and most foundational of these is **Conservation of Mass**.

## 1. The Control Volume Approach

Rather than tracking individual particles (the Lagrangian approach), fluid mechanics uses the **Control Volume (CV)** — an imaginary, fixed region in space through which fluid freely flows in and out. We apply conservation laws to this fixed region.

*Think of a control volume as an imaginary box drawn around a pump, a pipe junction, or a turbine. Fluid enters and exits through the control surfaces that bound the box.*

The **Reynolds Transport Theorem** formally converts the Lagrangian conservation laws into the Eulerian control volume framework. For mass conservation, it states:

**The time rate of change of mass inside the control volume plus the net mass flow rate leaving the control volume equals zero.**

## 2. The Continuity Equation

For **steady flow** ($\partial/\partial t = 0$), the mass inside the control volume doesn't change. Therefore, mass in = mass out.

The mass flow rate ($\dot{m}$) through any cross-section is:
$$ \dot{m} = \rho V A $$

Where $V$ is the average velocity and $A$ is the cross-sectional area.

For a single inlet (1) and single outlet (2) with steady flow:
$$ \dot{m}_1 = \dot{m}_2 $$
$$ \rho_1 V_1 A_1 = \rho_2 V_2 A_2 $$

This is the **Continuity Equation** — conservation of mass in flow form.

## 3. The Incompressible Simplification

For liquids (and gases at low Mach numbers), $\rho_1 = \rho_2 =$ constant. The density cancels:

$$ \boxed{V_1 A_1 = V_2 A_2 = Q} $$

Where **$Q$** [m³/s] is the **Volumetric Flow Rate** — the volume of fluid passing a cross-section per second.

This is an enormously powerful engineering tool. It states:

**When an incompressible fluid flows from a wide pipe to a narrow pipe, its velocity must increase to preserve the flow rate.**

If a pipe narrows from 0.1 m² to 0.025 m² (four times smaller), the velocity must increase by a factor of exactly four. This acceleration from a constriction is the physical origin of how carburetors, atomizers, and venturi flow meters work.
