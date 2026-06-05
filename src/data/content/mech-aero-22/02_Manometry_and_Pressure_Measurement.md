# Manometry and Pressure Measurement

The principles of fluid statics—specifically that pressure increases linearly with depth in a liquid and is constant across horizontal planes—are the foundation for measuring pressure using manometers.

## 1. The Barometer (Atmospheric Pressure)

Evangelista Torricelli invented the barometer in 1643 to measure atmospheric pressure. 
A long glass tube is filled with mercury ($\rho_{Hg}$), inverted, and submerged in a mercury bath. The mercury in the tube drops until its weight is balanced by the atmospheric pressure pushing down on the bath. The empty space at the top of the tube is nearly a perfect vacuum ($P \approx 0$).

Applying the hydrostatic equation:
$$P_{atm} = \rho_{Hg} \cdot g \cdot h$$
At standard sea-level conditions, the column of mercury is exactly 760 mm high. Thus, $P_{atm} = 760 \text{ mmHg}$ (or 760 Torr). 

*(Why mercury? If water were used, the tube would need to be over 10 meters tall!)*

## 2. The Piezometer Tube

The simplest way to measure the pressure of a liquid in a pipe is to drill a hole in the top and attach a vertical, open-ended transparent tube (a piezometer). The liquid rises in the tube until the hydrostatic column balances the pressure in the pipe.
$$P_{gage} = \rho g h$$
**Limitations:** 
1. Only works for liquids (gas would escape).
2. Cannot measure negative (vacuum) pressures (air would be sucked into the pipe).
3. The tube must be impractically tall for high pressures.

## 3. The U-Tube Manometer

To overcome the piezometer's limitations, a U-shaped tube containing a high-density "manometer fluid" (like mercury or colored oil) is used.

**How to solve any manometer problem:**
Use the "Manometer Walk" method. Start at one end of the system where the pressure is known, and "walk" your way through the tubes to the unknown point.
1. Start at a point of known pressure $P_1$.
2. As you move **downward** through a fluid column of height $h$, the pressure increases. Add $\rho g h$.
3. As you move **upward** through a fluid column of height $h$, the pressure decreases. Subtract $\rho g h$.
4. You can "jump" across a continuous U-bend of the same fluid, because pressure is identical at the same horizontal elevation.
5. Equate the final result to the pressure at the destination $P_2$.

**Example:** A pipe (gas, negligible density) connected to a U-tube containing mercury ($\rho_m$). The other end is open to the atmosphere ($P_{atm}$). The mercury in the open arm is higher by a distance $h$.
Walk from the open end to the pipe:
$$P_{atm} + \rho_m g h = P_{pipe}$$
$$P_{gage, pipe} = \rho_m g h$$

## 4. Differential Manometers

Differential manometers measure the *difference* in pressure between two points (e.g., across a valve or a flow meter) rather than absolute pressure.

Consider Pipe A and Pipe B containing water ($\rho_w$), connected by a U-tube containing a heavier gage fluid ($\rho_g$).
Walk from A to B:
$$P_A + \rho_w g h_1 - \rho_g g h_2 - \rho_w g h_3 = P_B$$
Rearranging gives the pressure difference $\Delta P = P_A - P_B$.

*Note: In manometry involving both gases and liquids, the hydrostatic pressure change ($\rho g h$) of the gas columns is almost always ignored because gas density is roughly 1000 times smaller than liquid density.*
