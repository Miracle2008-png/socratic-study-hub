# First law of thermodynamics (fluid mechanics)

In physics, the first law of thermodynamics is an expression of the conservation of total energy of a system. The increase of the energy of a system is equal to the sum of work done on the system and the heat added to that system:

## Note

$$ {\mathbf {\sigma } }=-p{\mathbf {I} }+{\mathbf {T} } $$

Where

$$ p $$

 is the pressure

$$ \mathbf {I} $$

 is the identity matrix

$$ \mathbf {T} $$

 is the deviatoric stress tensor

That is, pulling is positive stress and pushing is negative stress.

## Compressible fluid

For a compressible fluid the left hand side of equation becomes:

$$ {\frac {DE_{t}}{Dt}}={\frac {\partial E}{\partial t}}+\nabla \cdot (E\mathbf {v} ) $$

because in general

        0.

$$ \nabla \cdot \mathbf {v} \neq 0. $$

## Integral form

$$ \int _{V}{\frac {\partial E}{\partial t}}\,dV=-\oint _{\partial V}E{\mathbf {v} }\cdot d{\mathbf {A} }+\oint _{\partial V}({\mathbf {\sigma } \cdot v})\cdot d{\mathbf {A} }-\oint _{\partial V}{\mathbf {q} }\cdot d{\mathbf {A} } $$

That is, the change in the internal energy of the substance within a volume is the negative of the amount carried out of the volume by the flow of material across the boundary plus the work done compressing the material on the boundary minus the flow of heat out through the boundary. More generally, it is possible to incorporate source terms.

## Alternative representation

$$ \rho {\frac {Dh}{Dt}}={\frac {Dp}{Dt}}+\nabla \cdot (k\,\nabla T)+\Phi $$

where 

$$ h $$

 is specific enthalpy, 

$$ \Phi ={\mathbf {\tau } }:\nabla {\mathbf {v} } $$

 is dissipation function and 

$$ T $$

 is temperature. And where

$$ E_{t}=\rho (e+{\frac {1}{2}}v^{2}-\mathbf {g\cdot r} ) $$

i.e. internal energy per unit volume equals mass density times the sum of: proper energy per unit mass, kinetic energy per unit mass, and gravitational potential energy per unit mass.

$$ -\nabla \cdot {\mathbf {q} }=+\nabla \cdot (k\,\nabla T) $$

i.e. change in heat per unit volume (negative divergence of heat flow) equals the divergence of heat conductivity times the gradient of the temperature.

$$ \nabla \cdot ({\mathbf {\sigma } \cdot v})={\mathbf {v} \cdot \nabla \cdot \sigma }+\sigma :\nabla \mathbf {v} $$

i.e. divergence of work done against stress equals flow of material times divergence of stress plus stress times divergence of material flow.

$$ \sigma :\nabla {\mathbf {v} }=\Phi -p\,\nabla \cdot {\mathbf {v} } $$

i.e. stress times divergence of material flow equals deviatoric stress tensor times divergence of material flow minus pressure times material flow.

$$ h=e+{\frac {p}{\rho }} $$

i.e. enthalpy per unit mass equals proper energy per unit mass plus pressure times volume per unit mass (reciprocal of mass density).

$$ \nabla \cdot \sigma ={\frac {DJ}{Dt}}-\mathbf {f} $$

$$ -p\,\nabla \cdot {\mathbf {v} }={\frac {Dp}{Dt}}-\rho {\frac {D}{Dt}}\left({\frac {p}{\rho }}\right) $$

## Alternative form data

$$ \nabla \cdot {\mathbf {\sigma } }={\frac {D{\mathbf {J} }}{Dt}}-\mathbf {f} $$

 left hand side of Navier–Stokes equations minus body force (per unit volume) acting on fluid.

$$ -p\nabla \cdot {\mathbf {v} }={\frac {Dp}{Dt}}-\rho {\frac {D}{Dt}}\left({\frac {p}{\rho }}\right) $$

 this relation is derived using this relationship 

$$ \rho \nabla \cdot {\mathbf {v} }=-{\frac {D\rho }{Dt}} $$

 which is alternative form of continuity equation 

$$ {\frac {\partial \rho }{\partial t}}+\nabla \cdot {\mathbf {J} }=0 $$
