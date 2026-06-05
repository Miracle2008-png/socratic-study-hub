# Transient Diffusion

Steady-state diffusion assumes the concentration profile is constant over time. However, many mass transfer processes are inherently transient—time-dependent. Examples include drying a wet material, carbonizing steel, drug delivery from a patch, or the leaching of contaminants from soil.

## 1. Fick's Second Law

To find how concentration changes with time, we apply conservation of mass to a differential control volume, just as we did for heat transfer to derive the heat equation.

For a stationary medium (no bulk flow velocity) with constant diffusivity $D_{AB}$, the species conservation equation reduces to **Fick's Second Law**:

$$ \frac{\partial C_A}{\partial t} = D_{AB} \nabla^2 C_A $$

In one dimension (z):
$$ \frac{\partial C_A}{\partial t} = D_{AB} \frac{\partial^2 C_A}{\partial z^2} $$

This is mathematically identical to the 1D transient heat conduction equation ($\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial z^2}$). The solutions are exactly the same, substituting $C_A$ for $T$, and $D_{AB}$ for $\alpha$.

## 2. Semi-Infinite Medium Solution

A common engineering scenario involves a solid whose thickness is very large compared to the depth of diffusion. This is treated as a **semi-infinite medium**.

**Scenario: Carbonizing (Case Hardening) of Steel**
A block of steel initially has a uniform carbon concentration $C_{A,i}$. At time $t=0$, the surface ($z=0$) is suddenly exposed to a carbon-rich environment, raising the surface concentration to $C_{A,s}$. How does carbon penetrate the steel over time?

**Boundary Conditions:**
1.  $C_A(z, 0) = C_{A,i}$ (Initial uniform state)
2.  $C_A(0, t) = C_{A,s}$ (Constant surface concentration)
3.  $C_A(\infty, t) = C_{A,i}$ (Far away, it remains un-affected)

**Solution:**
The solution involves the complementary error function (erfc):
$$ \frac{C_A(z,t) - C_{A,s}}{C_{A,i} - C_{A,s}} = \text{erf}\left(\frac{z}{2\sqrt{D_{AB}t}}\right) $$

The term $2\sqrt{D_{AB}t}$ represents a characteristic **penetration depth**. It shows that the depth to which the diffusant has penetrated grows with the **square root of time**. If you want carbon to penetrate twice as deep into a steel gear, you must bake it for *four times* as long.

## 3. Finite Media (Slabs, Cylinders, Spheres)

If the object is relatively thin, the diffusing species will reach the centerline, and the semi-infinite assumption fails. This requires solving Fick's second law for finite geometries.

As in heat transfer, the solutions are infinite series, but for times that are not extremely short (Fourier number $> 0.2$), only the first term of the series is significant.

**The Mass Transfer Fourier Number ($Fo_m$):**
A dimensionless time parameter:
$$ Fo_m = \frac{D_{AB} t}{L_c^2} $$
Where $L_c$ is the characteristic length (half-thickness of a slab, radius of a cylinder/sphere). It represents the ratio of the actual time $t$ to the characteristic diffusion time $L_c^2/D_{AB}$.

**The Mass Transfer Biot Number ($Bi_m$):**
A dimensionless ratio of internal diffusion resistance to external convective resistance:
$$ Bi_m = \frac{h_m L_c}{D_{AB}} $$

If $Bi_m \ll 0.1$, the internal diffusion is so fast that the concentration is essentially uniform throughout the solid. We can use the **Lumped Capacitance Method**, resulting in a simple exponential decay of concentration over time.
If $Bi_m$ is large, concentration gradients exist inside the solid, and Heisler charts (or the 1-term series solutions) must be used.

## 4. Drying of Solids

Drying a wet porous solid (like wood, paper, or food) is a classic transient mass transfer problem, but it involves two distinct periods:

1.  **Constant-Rate Period:** The surface of the solid is completely wet. Water evaporates as if it were a free puddle. The drying rate is governed entirely by external convection ($h_m$) in the air. The solid remains at the wet-bulb temperature.
2.  **Falling-Rate Period:** The surface dries out. The evaporation front moves inside the porous solid. Now, moisture must diffuse through the solid pores as a vapor to reach the surface. Internal diffusion resistance ($D_{AB}$) becomes the limiting factor, and the drying rate drops significantly as time goes on. Fick's second law is used to model this internal diffusion.
