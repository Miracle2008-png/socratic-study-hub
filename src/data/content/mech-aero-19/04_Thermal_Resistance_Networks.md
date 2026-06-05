---
title: "Thermal Resistance Networks"
---

# Thermal Resistance Networks

A powerful analogy exists between 1D steady-state heat conduction and electrical circuits (Ohm's Law). This analogy simplifies complex heat transfer problems into easily solvable algebra.

## 1. The Analogy

In an electrical circuit: $I = \frac{\Delta V}{R_e}$ (Current = Voltage Drop / Electrical Resistance).
In heat transfer: $\dot{Q} = \frac{\Delta T}{R_{th}}$ (Heat Rate = Temperature Drop / Thermal Resistance).

- **Current ($I$) $\leftrightarrow$ Heat Transfer Rate ($\dot{Q}$)**
- **Driving Potential ($\Delta V$) $\leftrightarrow$ Driving Potential ($\Delta T$)**
- **Electrical Resistance ($R_e$) $\leftrightarrow$ Thermal Resistance ($R_{th}$)**

## 2. Types of Thermal Resistance

**Conduction Resistance (Plane Wall):**
Recall $\dot{Q} = kA\frac{\Delta T}{L}$. Rearranging to $\dot{Q} = \frac{\Delta T}{R_{cond}}$ gives:
$$R_{cond} = \frac{L}{k A}$$
*(Units: $K/W$ or $^\circ C/W$)*

**Convection Resistance:**
Newton's Law of Cooling: $\dot{Q} = h A \Delta T$. Rearranging gives:
$$R_{conv} = \frac{1}{h A}$$

**Radiation Resistance:**
Approximate radiation as a linear heat transfer coefficient $h_{rad}$:
$$R_{rad} = \frac{1}{h_{rad} A}$$

## 3. Composite Walls (Series Networks)

Consider a wall made of brick, insulation, and drywall, exposed to cold outside air and warm inside air. The heat $\dot{Q}$ must pass through all these layers sequentially.

In a series circuit, resistances add. The total heat transfer rate is the total temperature drop divided by the total resistance:

$$\dot{Q} = \frac{T_{\infty, in} - T_{\infty, out}}{R_{total}}$$

Where $R_{total} = R_{conv,in} + R_{drywall} + R_{insul} + R_{brick} + R_{conv,out}$
$$R_{total} = \frac{1}{h_{in}A} + \frac{L_1}{k_1A} + \frac{L_2}{k_2A} + \frac{L_3}{k_3A} + \frac{1}{h_{out}A}$$

**Finding Intermediate Temperatures:**
Because $\dot{Q}$ is constant through every element in series, you can find the temperature at any interface $x$ by applying the equation to a subsection of the network:
$$\dot{Q} = \frac{T_{\infty,in} - T_x}{R_{in\_to\_x}}$$

## 4. Parallel Networks

If a wall consists of different materials placed side-by-side (e.g., a wooden stud and fiberglass insulation bridging the gap between drywall and siding), heat flows through them in parallel.

For parallel thermal resistances:
$$\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2}$$

Note: This is an approximation. It assumes 1D heat flow and ignores transverse conduction between the stud and the insulation, which is usually acceptable if the materials are thin or have similar conductivities.
