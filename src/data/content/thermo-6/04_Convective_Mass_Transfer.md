# Convective Mass Transfer

Just as heat transfer is dramatically enhanced by fluid motion (convection), mass transfer is also enhanced when a fluid flows over a surface. **Convective mass transfer** governs evaporation from a lake, the dissolving of a sugar cube in stirred coffee, and the removal of pollutants by a catalytic converter.

## 1. The Convection Rate Equation

Analogous to Newton's Law of Cooling for heat transfer, the rate of convective mass transfer is given by:

$$ N_A'' = h_m (C_{A,s} - C_{A,\infty}) $$

Where:
*   $N_A''$ is the molar flux of species A away from the surface ($kmol/m^2 \cdot s$).
*   $h_m$ is the **convective mass transfer coefficient** ($m/s$). Note the units are velocity.
*   $C_{A,s}$ is the concentration of A precisely at the surface.
*   $C_{A,\infty}$ is the concentration of A in the free stream of the fluid.

The entire complexity of fluid mechanics, boundary layers, and turbulence is bundled into the single parameter $h_m$.

## 2. The Concentration Boundary Layer

When a fluid flows over a surface where species A is being emitted or absorbed, a **concentration boundary layer** develops, completely analogous to the velocity and thermal boundary layers.

*   At the surface ($y=0$), the fluid velocity is zero (no-slip condition). Therefore, mass transfer right at the surface occurs *purely by diffusion*.
    $$ N_{A,s}'' = -D_{AB} \left( \frac{\partial C_A}{\partial y} \right)_{y=0} $$
*   Equating this to the convection rate equation gives:
    $$ h_m = \frac{-D_{AB} (\partial C_A / \partial y)_{y=0}}{C_{A,s} - C_{A,\infty}} $$

This shows that $h_m$ depends on the concentration gradient right at the wall. A thinner boundary layer means a steeper gradient, which means a higher $h_m$.

## 3. Dimensionless Numbers in Mass Transfer

To predict $h_m$, we rely on empirical correlations expressed in dimensionless numbers. The mass transfer numbers map perfectly to the heat transfer numbers.

**The Schmidt Number ($Sc$):**
Analogous to the Prandtl number ($Pr = \nu/\alpha$). It is the ratio of momentum diffusivity (kinematic viscosity) to mass diffusivity.
$$ Sc = \frac{\nu}{D_{AB}} = \frac{\mu}{\rho D_{AB}} $$
*   If $Sc \approx 1$ (most gases), the velocity and concentration boundary layers are roughly the same thickness.
*   If $Sc \gg 1$ (liquids, $Sc \sim 1000$), mass diffuses much slower than momentum. The concentration boundary layer is extremely thin compared to the velocity boundary layer.

**The Sherwood Number ($Sh$):**
Analogous to the Nusselt number ($Nu = hL/k$). It represents the dimensionless mass transfer coefficient, or the ratio of convective mass transfer to pure diffusion.
$$ Sh = \frac{h_m L_c}{D_{AB}} $$
Where $L_c$ is the characteristic length (e.g., length of a plate, diameter of a pipe).

## 4. Empirical Correlations

Because the governing equations for mass transfer are identical in form to those for heat transfer, we can often take a known heat transfer correlation ($Nu = f(Re, Pr)$) and simply swap $Nu$ for $Sh$, and $Pr$ for $Sc$, to get the mass transfer correlation. This is called the **Heat and Mass Transfer Analogy**.

**Example: Flow over a Flat Plate (Laminar)**
*   Heat transfer: $Nu_L = 0.664 Re_L^{1/2} Pr^{1/3}$
*   Mass transfer analogy: $Sh_L = 0.664 Re_L^{1/2} Sc^{1/3}$

Therefore, the mass transfer coefficient is:
$$ h_m = \frac{D_{AB}}{L} \left( 0.664 Re_L^{1/2} Sc^{1/3} \right) $$

This analogy holds beautifully for many situations (low mass flux, constant properties, no chemical reaction). It allows engineers to predict mass transfer rates using decades of established heat transfer data.

## 5. Film Theory and the Two-Film Model

In many industrial processes (like gas absorption or distillation), mass transfer occurs across a phase boundary (e.g., from a gas bubble into a liquid).

**The Two-Film Theory** models this by assuming that all resistance to mass transfer is concentrated in two thin, stagnant fluid films on either side of the interface.
1.  Species A diffuses through the gas film ($h_{m,G}$).
2.  It crosses the interface (assumed to be in local thermodynamic equilibrium, governed by Henry's Law or Raoult's Law).
3.  It diffuses through the liquid film ($h_{m,L}$).

The overall mass transfer resistance is the sum of the gas-side and liquid-side resistances. If a gas is highly soluble in the liquid (like ammonia in water), the gas-side resistance dominates. If the gas is poorly soluble (like oxygen in water), the liquid-side resistance dominates.
