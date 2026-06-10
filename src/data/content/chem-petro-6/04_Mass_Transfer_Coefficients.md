# Mass Transfer Coefficients

Fick's laws are powerful tools for understanding fundamental diffusion, but they are incredibly difficult to apply directly to industrial equipment. In a massive distillation column filled with turbulent bubbling liquid, the actual concentration gradient ($dC_A/dz$) and the exact thickness of the stagnant diffusion film are constantly changing and impossible to measure.

To solve real-world engineering problems, we bundle all the complex hydrodynamics, turbulence, and unknown film thicknesses into a single empirical parameter: the **Mass Transfer Coefficient ($k_c$)**.

## 1. Definition of the Mass Transfer Coefficient

Just as convective heat transfer uses Newton's Law of Cooling ($q = h \Delta T$), convective mass transfer uses a fundamentally identical rate equation:

$$ N_A = k_c \Delta C_A $$

Where:
*   $N_A$ is the molar flux of species A ($\text{mol}/\text{m}^2\text{s}$).
*   $k_c$ is the convective mass transfer coefficient based on concentration driving force ($\text{m}/\text{s}$).
*   $\Delta C_A$ is the concentration difference between the phase boundary and the bulk fluid ($C_{A,interface} - C_{A,bulk}$).

The mass transfer coefficient $k_c$ essentially represents the "velocity" at which species A is transported across the boundary layer. 

## 2. Different Driving Forces and Coefficients

Concentration ($C_A$) is not the only way to express the driving force for mass transfer. Depending on the phase (gas or liquid) and the application, engineers use different units for the driving force, which requires different forms of the mass transfer coefficient.

### Gas Phase Coefficients
In gases, partial pressure ($p_A$) or mole fraction ($y_A$) are the standard driving forces.
*   **$k_G$ (Partial Pressure basis):** 
    $$ N_A = k_G (p_{A,i} - p_{A,bulk}) $$
    Units of $k_G$: $\text{mol} / (\text{m}^2\cdot\text{s}\cdot\text{Pa})$
*   **$k_y$ (Mole Fraction basis):**
    $$ N_A = k_y (y_{A,i} - y_{A,bulk}) $$
    Units of $k_y$: $\text{mol} / (\text{m}^2\cdot\text{s})$

### Liquid Phase Coefficients
In liquids, molar concentration ($C_A$) or mole fraction ($x_A$) are used.
*   **$k_L$ (Concentration basis):** (Identical to $k_c$)
    $$ N_A = k_L (C_{A,i} - C_{A,bulk}) $$
    Units of $k_L$: $\text{m}/\text{s}$
*   **$k_x$ (Mole Fraction basis):**
    $$ N_A = k_x (x_{A,i} - x_{A,bulk}) $$
    Units of $k_x$: $\text{mol} / (\text{m}^2\cdot\text{s})$

**Conversion between coefficients:** Using the ideal gas law ($p_A = C_A RT$), it is easy to prove that $k_c = k_G RT$.

## 3. Dimensional Analysis: The Sherwood Number

Mass transfer coefficients are determined experimentally. To generalize these experimental results so they can be applied to equipment of any size, engineers use dimensionless groups.

The most important dimensionless group in convective mass transfer is the **Sherwood Number ($Sh$)**:
$$ Sh = \frac{k_c L}{D_{AB}} $$
Where $L$ is a characteristic length (like pipe diameter) and $D_{AB}$ is the molecular diffusivity.

The Sherwood number represents the ratio of **convective mass transfer to diffusive mass transfer**.
*   $Sh \approx 1$: Mass transfer is purely by diffusion.
*   $Sh \gg 1$: Mass transfer is heavily enhanced by convection and turbulence.

### Predicting Mass Transfer Coefficients
Just as the Nusselt number ($Nu$) in heat transfer is a function of the Reynolds number ($Re$) and Prandtl number ($Pr$), the Sherwood number is a function of the Reynolds number and the **Schmidt number ($Sc$)**.

$$ Sc = \frac{\nu}{D_{AB}} = \frac{\mu}{\rho D_{AB}} $$
The Schmidt number is the ratio of momentum diffusivity (kinematic viscosity, $\nu$) to mass diffusivity. It dictates whether the hydrodynamic boundary layer is thicker or thinner than the concentration boundary layer.

A classic empirical correlation for turbulent flow in a pipe is the Dittus-Boelter analogue:
$$ Sh = 0.023 \, Re^{0.8} \, Sc^{0.33} $$

If you know the fluid velocity and properties, you calculate $Re$ and $Sc$, use the correlation to find $Sh$, and then unpack $Sh$ to find the mass transfer coefficient $k_c$ for your specific equipment.
