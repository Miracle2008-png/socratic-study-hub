---
title: "Fluid Properties: Density, Viscosity, and Compressibility"
---

# Fluid Properties: Density, Viscosity, and Compressibility

Before we can solve any fluid mechanics problem, we must understand the fundamental physical properties that characterize a fluid's behavior. These properties are as important to fluid mechanics as the Modulus of Elasticity ($E$) and Yield Strength ($\sigma_Y$) are to solid mechanics.

## 1. Density ($\rho$) and Specific Weight ($\gamma$)

**Density ($\rho$)** is the mass per unit volume of a fluid:
$$ \rho = \frac{m}{V} \quad \text{[kg/m}^3\text{]} $$

*   Water at 4°C: $\rho_{water} = 1000 \text{ kg/m}^3$
*   Air at sea level: $\rho_{air} = 1.225 \text{ kg/m}^3$

**Specific Weight ($\gamma$)** is the weight per unit volume:
$$ \gamma = \rho g \quad \text{[N/m}^3\text{]} $$

**Specific Gravity (SG)** is a dimensionless ratio comparing a fluid's density to that of water:
$$ SG = \frac{\rho_{fluid}}{\rho_{water}} $$
*Mercury has $SG = 13.6$, meaning it is 13.6 times denser than water.*

## 2. Viscosity ($\mu$): The "Thickness" of a Fluid

**Viscosity** is the most important distinguishing property of different fluids. It quantifies a fluid's resistance to flow—its internal friction.

Imagine a fluid trapped between two parallel plates. The bottom plate is fixed, the top plate is pulled sideways at velocity $U$. The fluid forms a velocity gradient ($du/dy$) between the plates. The shear stress ($\tau$) required to maintain this motion is:

$$ \tau = \mu \frac{du}{dy} $$

This is **Newton's Law of Viscosity**. The proportionality constant $\mu$ is the **Dynamic Viscosity** [Pa·s or N·s/m²].

*   **Newtonian Fluids** obey this linear law ($\mu$ is constant): water, air, most oils.
*   **Non-Newtonian Fluids** have a $\mu$ that changes with shear rate: blood, paint, ketchup, concrete.

**Kinematic Viscosity ($\nu$)** is the ratio of dynamic viscosity to density:
$$ \nu = \frac{\mu}{\rho} \quad \text{[m}^2\text{/s]} $$

## 3. Compressibility

For liquids, density is practically constant with pressure changes. We call these **incompressible fluids** and it simplifies equations enormously.

For gases, density is strongly pressure-dependent. Compressibility is quantified by the **Bulk Modulus ($E_v$)**:
$$ E_v = -V \frac{dP}{dV} = \rho \frac{dP}{d\rho} $$

A high $E_v$ means the fluid strongly resists compression. The **Mach Number (Ma)** is the ratio of flow speed to the local speed of sound. When $Ma > 0.3$, compressibility effects become significant and cannot be ignored.
