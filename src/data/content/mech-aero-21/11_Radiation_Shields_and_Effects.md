---
title: "Radiation Shields and the Reradiating Effect"
---

# Radiation Shields and the Reradiating Effect

Thermal radiation scales with $T^4$, making it the dominant mode of heat transfer in high-temperature applications (furnaces, cryogenic storage, space vacuum). To block this immense heat flux, insulation (conduction resistance) is often useless, bulky, or heavy. Instead, engineers use **radiation shields**.

## 1. How Radiation Shields Work

A radiation shield is simply a highly reflective, low-emissivity sheet of material (like aluminum foil) placed between two surfaces that are exchanging radiation.

From a thermal network perspective, adding a shield between Surface 1 and Surface 2 adds new resistances to the circuit:
- Heat must travel from $J_1$ across a space resistance to the shield.
- It passes through the shield's surface resistance on side A.
- It passes through the shield's surface resistance on side B.
- It travels across a new space resistance to $J_2$.

If the shield has low emissivity ($\varepsilon_3 \approx 0.05$), its surface resistance $(1-\varepsilon_3)/(\varepsilon_3 A_3)$ is massive. This huge resistance acts as a bottleneck, choking off the radiation heat transfer.

## 2. Mathematical Impact of a Shield

Consider two infinite parallel plates (1 and 2). Without a shield, the heat transfer is:
$$q''_{12} = \frac{\sigma(T_1^4 - T_2^4)}{\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_2} - 1}$$

If we insert a single thin radiation shield (Surface 3) with emissivity $\varepsilon_3$ on both sides, the new heat transfer is:
$$q''_{12, shielded} = \frac{\sigma(T_1^4 - T_2^4)}{\left(\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_3} - 1\right) + \left(\frac{1}{\varepsilon_3} + \frac{1}{\varepsilon_2} - 1\right)}$$

If all emissivities are equal ($\varepsilon_1 = \varepsilon_2 = \varepsilon_3 = \varepsilon$), the formula simplifies to:
$$q''_{shielded} = \frac{1}{2} q''_{unshielded}$$

Inserting $N$ such shields reduces the heat transfer to:
$$q''_{N\_shields} = \frac{1}{N+1} q''_{unshielded}$$
A thermos bottle uses a vacuum gap to stop conduction/convection, and highly silvered inner walls (acting as a radiation shield) to stop radiation, rendering heat transfer extremely slow.

## 3. Reradiating Surfaces

A **reradiating surface** is a surface in an enclosure that is perfectly insulated on its back side. Because no heat conducts away through the back, at steady state, its net radiation heat transfer must be zero ($\dot{Q} = 0$).
- All radiation it absorbs on the front, it must re-emit from the front to maintain thermal equilibrium.
- Consequently, $J_i = E_{bi}$, and the surface reaches a steady equilibrium temperature dictated entirely by the other surfaces in the room.

In the resistance network, a reradiating surface acts as a **floating node**. No current (heat) flows down through its surface resistor to ground. Instead, the radiosity node acts purely as a junction for space resistances, passively bouncing and redirecting heat between the active heating and cooling surfaces in the enclosure.

Furnace walls are often modeled as reradiating surfaces. They don't generate or extract heat, but they reflect and re-radiate heat from the burner to the load, greatly enhancing the total heat transfer rate compared to if the walls were cold absorbers.
