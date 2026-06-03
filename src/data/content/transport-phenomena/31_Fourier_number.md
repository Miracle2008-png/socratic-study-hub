# Fourier number

In the study of heat conduction, the Fourier number is the ratio of time, 

## Definition

The general definition of the Fourier number, Fo, is:

time scale for diffusion

$$ \mathrm {Fo} ={\frac {\text{time}}{\text{time scale for diffusion}}}={\frac {t}{t_{d}}} $$

For heat diffusion with a characteristic length scale 

$$ L $$

 in a medium of thermal diffusivity 

$$ \alpha $$

, the diffusion time scale is 

$$ t_{d}=L^{2}/\alpha $$

, so that

$$ \mathrm {Fo} _{L}={\frac {\alpha t}{L^{2}}} $$

where:

$$ \alpha $$

 is the thermal diffusivity (m2/s)

$$ t $$

 is the time (s)

$$ L $$

 is the characteristic length through which conduction occurs (m)

### Interpretation of the Fourier number

Consider transient heat conduction in  a slab of thickness 

$$ L $$

 that is initially at a uniform temperature, 

$$ T_{0} $$

. One side of the slab is heated to higher temperature, 

$$ T_{h}>T_{0} $$

, at time 

$$ t=0 $$

.  The other side is adiabatic. The time needed for the other side of the object to show significant temperature change is the diffusion time, 

$$ t_{d} $$

.  

When 

$$ \mathrm {Fo} \ll 1 $$

, not enough time has passed for the other side to change temperature. In this case, significant temperature change only occurs close to the heated side, and most of the slab remains at temperature 

$$ T_{0} $$

.

When 

$$ \mathrm {Fo} \cong 1 $$

, significant temperature change occurs all the way through the thickness 

$$ L $$

. None of the slab remains at temperature 

$$ T_{0} $$

.

When 

$$ \mathrm {Fo} \gg 1 $$

, enough time has passed for the slab to approach steady state. The entire slab approaches temperature 

$$ T_{h} $$

.

## Derivation and usage

The Fourier number can be derived by nondimensionalizing the time-dependent diffusion equation.  As an example, consider a rod of length 

$$ L $$

 that is being heated from an initial temperature 

$$ T_{0} $$

 by imposing a heat source of temperature 

$$ T_{L}>T_{0} $$

 at time 

$$ t=0 $$

 and position 

$$ x=L $$

 (with 

$$ x $$

 along the axis of the rod). The heat equation in one spatial dimension, 

$$ x $$

, can be applied

$$ {\frac {\partial T}{\partial t}}=\alpha {\frac {\partial ^{2}T}{\partial x^{2}}} $$

where 

$$ T $$

 is the temperature for 

$$ 0<x<L $$

 and 

$$ t>0 $$

. The differential equation can be scaled into a dimensionless form. A dimensionless temperature may be defined as 

$$ \Theta =(T-T_{L})/(T_{0}-T_{L}) $$

, and the equation may be divided through by 

$$ \alpha /L^{2} $$

:

$$ {\frac {\partial \Theta }{\partial (\alpha t/L^{2})}}={\frac {\partial ^{2}\Theta }{\partial (x/L)^{2}}} $$

The resulting dimensionless time variable is the Fourier number, 

$$ \mathrm {Fo} _{L}=\alpha t/L^{2} $$

. The characteristic time scale for diffusion, 

$$ t_{d}=L^{2}/\alpha $$

, comes directly from this scaling of the heat equation. 

The Fourier number is frequently used as the nondimensional time in studying transient heat conduction in solids. A second parameter, the Biot number arises in nondimensionalization when convective boundary conditions are applied to the heat equation. Together, the Fourier number and the Biot number determine the temperature response of a solid subjected to convective heating or cooling.

## Application to mass transfer

An analogous Fourier number can be derived by nondimensionalization of Fick's second law of diffusion. The result is a Fourier number for mass transport, 

$$ \mathrm {Fo} _{m} $$

 defined as:

$$ \mathrm {Fo} _{m}={\frac {Dt}{L^{2}}} $$

where:

$$ \mathrm {Fo} _{m} $$

 is the Fourier number for mass transport

$$ D $$

 is the mass diffusivity (m2/s)

$$ t $$

 is the time (s)

$$ L $$

 is the length scale of interest (m)

The mass-transfer Fourier number can be applied to the study of certain time-dependent mass diffusion problems.
