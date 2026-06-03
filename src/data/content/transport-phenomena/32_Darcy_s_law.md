# Darcy's law

Darcy's law is an equation that describes the flow of a fluid through a porous medium and through a Hele-Shaw cell. The law was formulated by Henry Darcy based on results of experiments on the flow of water through beds of sand, forming the basis of hydrogeology, a branch of earth sciences. It is analogous to Ohm's law in electrostatics, linearly relating the volume flow rate of the fluid to the hydraulic head difference (which is often just proportional to the pressure difference) via the hydraulic conductivity. In fact, Darcy's law is a special case of the Stokes equation for the momentum flux, in turn deriving from the momentum Navier–Stokes equation.

## Description

In the integral form, Darcy's law, in the absence of gravitational forces and in a homogeneously permeable medium, is given by a simple proportionality relationship between the volumetric flow rate 
, and the pressure drop 

{\displaystyle \Delta p}
through a porous medium. The proportionality constant is linked to the permeability
 of the medium, the dynamic viscosity of the fluid 
{\displaystyle \mu }
, the given distance 
 over which the pressure drop is computed, and the cross-sectional area 
, in the form:

{\displaystyle Q={\frac {kA}{\mu L}}\Delta p}

The ratio:

{\displaystyle R={\frac {\mu L}{kA}}}

can also be defined as the Darcy's law hydraulic resistance.

The Darcy's law can be generalised to a local form:

where 

{\displaystyle \nabla p}
 is the hydraulic gradient and 
{\displaystyle \mathbf {q} }
 is the volumetric flux which here is called also superficial velocity.

Note that the ratio:

{\displaystyle \sigma ={\frac {k}{\mu }}}

can be thought as the Darcy's law hydraulic conductivity.

In the (less general) integral form, the volumetric flux and the pressure gradient correspond to the ratios:

{\displaystyle q={\frac {Q}{A}}}

{\displaystyle \nabla p={\frac {\Delta p}{L}}}
.

In case of an anisotropic porous media, the permeability is a second order tensor, and in tensor notation one can write the more general law:

Notice that the quantity 
{\displaystyle \mathbf {q} }
, often referred to as the Darcy flux or Darcy velocity, is not the velocity at which the fluid is travelling through the pores. It is the volumetric flux, or flow rate per unit area (See Flux Flummoxed,  Ground Water. 44 (2): 125–128, 2006). The flow velocity (u) is related to the flux (q) by the porosity (φ) with the following equation:

{\displaystyle \mathbf {q} =\varphi \,\mathbf {u} .}

The Darcy's constitutive equation, for single phase (fluid) flow, is the defining equation for absolute permeability (single phase permeability).

With reference to the diagram to the right, the flow velocity is in SI units 

{\displaystyle \mathrm {(m/s)} }
, and since the porosity φ is a nondimensional number, the Darcy flux 
{\displaystyle \mathbf {q} }
, or discharge per unit area, is also defined in units 

{\displaystyle \mathrm {(m/s)} }
; the permeability 
 in units 
{\displaystyle \mathrm {(m^{2})} }
, the dynamic viscosity 
{\displaystyle \mu }
 in units 

{\displaystyle \mathrm {(Pa\cdot s)} }
 and the hydraulic gradient is in units 

{\displaystyle \mathrm {(Pa/m)} }
.

In the integral form, the total pressure drop 

{\displaystyle \Delta p=p_{b}-p_{a}}
 is in units 

{\displaystyle \mathrm {(Pa)} }
, and 
 is the length of the sample in units 

{\displaystyle \mathrm {(m)} }
, the Darcy's volumetric flow rate 
, or discharge, is also defined in units 

{\displaystyle \mathrm {(m^{3}/s)} }
and the cross-sectional area 
 in units 
{\displaystyle \mathrm {(m^{2})} }
. A number of these parameters are used in alternative definitions below. A negative sign is used in the definition of the flux following the standard physics convention that fluids flow from regions of high pressure to regions of low pressure. Note that the elevation head must be taken into account if the inlet and outlet are at different elevations. If the change in pressure is negative, then the flow will be in the positive x direction. There have been several proposals for a constitutive equation for absolute permeability, and the most famous one is probably the Kozeny equation (also called Kozeny–Carman equation).

By considering the relation for static fluid pressure (Stevin's law):

{\displaystyle p=\rho gh}

one can decline the integral form also into the equation:

{\displaystyle Q={\frac {kAg}{\nu L}}\,{\Delta h}}

where ν is the kinematic viscosity.

The corresponding hydraulic conductivity is therefore:

{\displaystyle K={\frac {k\rho g}{\mu }}={\frac {kg}{\nu }}.}

Darcy's law is a simple mathematical statement which neatly summarizes several familiar properties that groundwater flowing in aquifers exhibits, including:

if there is no pressure gradient over a distance, no flow occurs (these are hydrostatic conditions), if there is a pressure gradient, flow will occur from high pressure towards low pressure (opposite the direction of increasing gradient — hence the negative sign in Darcy's law), the greater the pressure gradient (through the same formation material), the greater the discharge rate, and

the discharge rate of fluid will often be different — through different formation materials (or even through the same material, in a different direction) — even if the same pressure gradient exists in both cases.

A graphical illustration of the use of the steady-state groundwater flow equation (based on Darcy's law and the conservation of mass) is in the construction of flow nets, to quantify the amount of groundwater flowing under a dam.

Darcy's law is only valid for slow, viscous flow; however, most groundwater flow cases fall in this category. Typically any flow with a Reynolds number less than one is clearly laminar, and it would be valid to apply Darcy's law.  Experimental tests have shown that flow regimes with Reynolds numbers up to 10 may still be Darcian, as in the case of groundwater flow.  The Reynolds number (a dimensionless parameter) for porous media flow is typically expressed as

{\displaystyle \mathrm {Re} ={\frac {qd}{\nu }}\,,}

where ν is the kinematic viscosity of water, q is the specific discharge (not the pore velocity — with units of length per time),  d is a representative grain diameter for the porous media (the standard choice is math|d30, which is the 30% passing size from a grain size analysis using sieves — with units of length).

## Derivation
For stationary, creeping, incompressible flow, i.e. ⁠D(ρui)/Dt⁠ ≈ 0, the Navier–Stokes equation simplifies to the Stokes equation, which by neglecting the bulk term is:

{\displaystyle \mu \nabla ^{2}u_{i}-\partial _{i}p=0\,,}

where μ is the viscosity, ui is the velocity in the i direction, and p is the pressure. Assuming the viscous resisting force is linear with the velocity we may write:

{\displaystyle -\left(k^{-1}\right)_{ij}\mu \varphi u_{j}-\partial _{i}p=0\,,}

where φ is the porosity, and kij is the second order permeability tensor. This gives the velocity in the n direction,

{\displaystyle k_{ni}\left(k^{-1}\right)_{ij}u_{j}=\delta _{nj}u_{j}=u_{n}=-{\frac {k_{ni}}{\varphi \mu }}\partial _{i}p\,,}

which gives Darcy's law for the volumetric flux density in the n direction,

{\displaystyle q_{n}=-{\frac {k_{ni}}{\mu }}\,\partial _{i}p\,.}

In isotropic porous media the off-diagonal elements in the permeability tensor are zero, kij = 0 for i ≠ j and the diagonal elements are identical, kii = k, and the common form is obtained as below, which enables the determination of the liquid flow velocity by solving a set of equations in a given region.

{\displaystyle \mathbf {q} =-{\frac {k}{\mu }}\,{\boldsymbol {\nabla }}p\,.}

The above equation is a governing equation for single-phase fluid flow in a porous medium.

## Additional forms

### Differential expression
Darcy's law can be expressed very generally as:

{\displaystyle \mathbf {q} =-K\nabla h}

where q is the volume flux vector of the fluid at a particular point in the medium, h is the total hydraulic head, and K is the hydraulic conductivity tensor, at that point. The hydraulic conductivity can often be approximated as a scalar. (Note the analogy to Ohm's law in electrostatics. The flux vector is analogous to the current density, head is analogous to voltage, and hydraulic conductivity is analogous to electrical conductivity.)

### Quadratic law
For flows in porous media with Reynolds numbers greater than about 1 to 10, inertial effects can also become significant. Usually, an inertial term is added to the Darcy's equation, known as Forchheimer term. This term is able to account for the non-linear behavior of the pressure difference vs flow data.

{\displaystyle \nabla p=-{\frac {\mu }{k}}q-{\frac {\rho }{k_{1}}}q^{2}\,,}

where the additional term k1 is known as inertial permeability, in units of length 

{\displaystyle \mathrm {(m)} }
.

When the Reynolds number is greater than 1, the onset of inertial flow regime is observed after a transition from Darcy's regime. The Darcy's law is no longer valid and the non-linear, inertial, correction is added. The origin of this behavior is a result of the change in the shape of the flow streamlines at the pore scale. This change is induced by the recirculation zones that play an important role in the variation of the flow structure.

The flow in the middle of a sandstone reservoir is so slow that Forchheimer's equation is usually not needed, but the gas flow into a gas production well may be high enough to justify using it. In this case, the inflow performance calculations for the well, not the grid cell of the 3D model, are based on the Forchheimer equation. The effect of this is that an additional rate-dependent skin appears in the inflow performance formula.

Some carbonate reservoirs have many fractures, and Darcy's equation for multiphase flow is generalized in order to govern both flow in fractures and flow in the matrix (i.e. the traditional porous rock). The irregular surface of the fracture walls and high flow rate in the fractures may justify the use of Forchheimer's equation.

### Correction for gases in fine media (Knudsen diffusion or Klinkenberg effect)
For gas flow in small characteristic dimensions (e.g., very fine sand, nanoporous structures etc.), the particle-wall interactions become more frequent, giving rise to additional wall friction (Knudsen friction). For a flow in this region, where both viscous and Knudsen friction are present, a new formulation needs to be used. Martin Knudsen presented a semi-empirical model for flow in transition regime based on his experiments on small capillaries. For a porous medium, the Knudsen equation can be given as

{\displaystyle N=-\left({\frac {k}{\mu }}{\frac {p_{a}+p_{b}}{2}}+D_{\mathrm {K} }^{\mathrm {eff} }\right){\frac {1}{RT}}{\frac {p_{\mathrm {b} }-p_{\mathrm {a} }}{L}}\,,}

where N is the molar flux, R is the gas constant, T is the temperature, DeffK is the effective Knudsen diffusivity of the porous media. The model can also be derived from the first-principle-based binary friction model (BFM). The differential equation of transition flow in porous media based on BFM is given as

{\displaystyle {\frac {\partial p}{\partial x}}=-RT\left({\frac {kp}{\mu }}+D_{\mathrm {K} }\right)^{-1}N\,.}

This equation is valid for capillaries as well as porous media. The terminology of the Knudsen effect and Knudsen diffusivity is more common in mechanical and chemical engineering. In geological and petrochemical engineering, this effect is known as the Klinkenberg effect. Using the definition of molar flux, the above equation can be rewritten as

{\displaystyle {\frac {\partial p}{\partial x}}=-RT\left({\frac {kp}{\mu }}+D_{\mathrm {K} }\right)^{-1}{\dfrac {p}{R_{\mathrm {g} }T}}q\,.}

This equation can be rearranged into the following equation

{\displaystyle q=-{\frac {k}{\mu }}\left(1+{\frac {D_{\mathrm {K} }\mu }{k}}{\frac {1}{p}}\right){\frac {\partial p}{\partial x}}\,.}

Comparing this equation with conventional Darcy's law, a new formulation can be given as

{\displaystyle q=-{\frac {k^{\mathrm {eff} }}{\mu }}{\frac {\partial p}{\partial x}}\,,}

where

{\displaystyle k^{\mathrm {eff} }=k\left(1+{\frac {D_{\mathrm {K} }\mu }{k}}{\frac {1}{p}}\right)\,.}

This is equivalent to the effective permeability formulation proposed by Klinkenberg:

{\displaystyle k^{\mathrm {eff} }=k\left(1+{\frac {b}{p}}\right)\,.}

where b is known as the Klinkenberg parameter, which depends on the gas and the porous medium structure. This is quite evident if we compare the above formulations. The Klinkenberg parameter b is dependent on permeability, Knudsen diffusivity and viscosity (i.e., both gas and porous medium properties).

### Darcy's law for short time scales
For very short time scales, a time derivative of flux may be added to Darcy's law, which results in valid solutions at very small times (in heat transfer, this is called the modified form of Fourier's law),

{\displaystyle \tau {\frac {\partial q}{\partial t}}+q=-k\nabla h\,,}

where τ is a very small time constant which causes this equation to reduce to the normal form of Darcy's law at "normal" times (> nanoseconds). The main reason for doing this is that the regular groundwater flow equation (diffusion equation) leads to singularities at constant head boundaries at very small times. This form is more mathematically rigorous but leads to a hyperbolic groundwater flow equation, which is more difficult to solve and is only useful at very small times, typically out of the realm of practical use.

### Brinkman form of Darcy's law
Another extension to the traditional form of Darcy's law is the Brinkman term, which is used to account for transitional flow between boundaries (introduced by Henri Brinkman in 1949),

{\displaystyle -\beta \nabla ^{2}q+q=-{\frac {k}{\mu }}\nabla p\,,}

where β is an effective viscosity term.  This correction term accounts for flow through medium where the grains of the media are porous themselves, but is difficult to use, and is typically neglected.

### Multiphase flow

In 1936, based on experimental results by his colleagues Ralph Dewey Wyckoff and Holbrook Gorham Boset, Morris Muskat and Milan W. Meres generalized Darcy's law to cover a multiphase flow of water, oil and gas in the porous medium of a petroleum reservoir. The Darcy's law for multiphase flow by Muskat and others provide the analytical foundation for reservoir engineering that exists to this day.

## Validity
Darcy's law is valid for laminar flow through sediments. In fine-grained sediments, the dimensions of interstices are small; thus, the flow is laminar. Coarse-grained sediments also behave similarly, but in very coarse-grained sediments, the flow may be turbulent. Hence Darcy's law is not always valid in such sediments.

For flow through commercial circular pipes, the flow is laminar when the Reynolds number is less than 2000 and turbulent when it is more than 4000, but in some sediments, it has been found that flow is laminar when the value of the Reynolds number is less than 1.
