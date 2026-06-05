# Continuous Contact Separations (Absorption)

In industrial chemical processing, transferring a species from a gas stream into a liquid solvent is called **absorption** (e.g., removing $H_2S$ from natural gas). The reverse process—transferring a dissolved gas from a liquid into a gas stream—is **stripping**. These processes are usually carried out in continuous contact equipment, specifically **packed columns**.

## 1. The Packed Column

A packed column is a tall vertical cylinder filled with "packing" — engineered materials (like Pall rings, Raschig rings, or structured corrugated sheets) designed to maximize surface area.

*   Liquid solvent enters at the top and trickles down over the packing.
*   Gas enters at the bottom and flows upward, counter-current to the liquid.
*   The packing provides an enormous surface area for the gas and liquid to contact each other. Mass transfer occurs continuously along the entire height of the column.

## 2. Operating Lines and Equilibrium Lines

Designing an absorber requires tracking two distinct relationships:

**1. The Operating Line (Mass Balance):**
What goes in must equal what goes out. A mass balance over any section of the column relates the concentration of the gas ($y$) passing the concentration of the liquid ($x$) at the same height.
Because flow rates ($L$ for liquid, $G$ for gas) are relatively constant for dilute mixtures, the operating line is a straight line on an $x-y$ diagram with a slope of $L/G$.
$$ y = \left(\frac{L}{G}\right)x + \text{constant} $$

**2. The Equilibrium Line (Thermodynamics):**
This is given by Henry's Law ($y^* = \frac{H}{P} x = m x$). It defines the theoretical maximum separation that could occur at any point if the gas and liquid had infinite time to contact.

The driving force for mass transfer at any height in the column is the vertical distance between the Operating Line ($y_{actual}$) and the Equilibrium Line ($y^*$).
*   If the operating line touches the equilibrium line, the driving force is zero. Mass transfer stops. The column would need to be infinitely tall to achieve this.

## 3. The Number of Transfer Units (NTU)

To determine how tall the packed column needs to be, chemical engineers use the concept of Transfer Units.

The **Number of Transfer Units (NTU)** is a dimensionless measure of the *difficulty* of the separation. It depends only on the inlet and outlet concentrations and the driving force.
For absorption of a dilute gas:
$$ NTU = \int_{y_{out}}^{y_{in}} \frac{dy}{y - y^*} $$
*   A separation requiring the gas concentration to drop from 10% to 1% is harder (higher NTU) than dropping it from 10% to 5%.
*   If the driving force ($y - y^*$) is very small throughout the column, the integral becomes very large. The separation requires a high NTU.

## 4. The Height of a Transfer Unit (HTU)

The **Height of a Transfer Unit (HTU)** is a measure of the *efficiency* of the packing material and the fluid dynamics of the column. It has units of length (e.g., meters).

$$ HTU = \frac{G}{K_y a A} $$
Where:
*   $G$ is the gas molar flow rate.
*   $K_y$ is the overall mass transfer coefficient (incorporating both gas and liquid film resistances).
*   $a$ is the specific interfacial area of the packing ($m^2/m^3$).
*   $A$ is the cross-sectional area of the column.

A highly efficient packing material with high surface area and turbulent flow will yield a high $K_y a$, resulting in a *small* HTU (e.g., 0.5 meters). A poor packing might have an HTU of 2.0 meters.

## 5. Column Height

The total required height of the packing ($Z$) is elegantly simple:
$$ Z = NTU \times HTU $$

**Design Trade-offs:**
*   To minimize column height (and capital cost), we want a small HTU (requires expensive, high-efficiency structured packing) and a small NTU (requires using a massive excess of liquid solvent to keep the driving force large).
*   However, pumping large amounts of liquid solvent is expensive (high operating cost) and makes the subsequent solvent regeneration step cost-prohibitive.
*   Engineers must find the optimal liquid-to-gas ratio ($L/G$) that balances column height against solvent regeneration costs. Typically, actual $L/G$ is set to 1.2 to 1.5 times the theoretical minimum $L/G$.
