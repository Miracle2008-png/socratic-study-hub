# Newtonian fluid

A Newtonian fluid is a fluid in which the viscous stresses arising from its flow are at every point linearly correlated to the local strain rate—the rate of change of its deformation over time; a Newtonian fluid's rate of flow cannot be altered by shaking, pumping, or stirring the fluid. Stresses are proportional to magnitude of the fluid's velocity vector.

## Definition
An element of a flowing liquid or gas will endure forces from the surrounding fluid, including viscous stress forces that cause it to gradually deform over time. These forces can be mathematically first order approximated by a viscous stress tensor, usually denoted by 
{\displaystyle \tau }
.

The deformation of a fluid element, relative to some previous state, can be first order approximated by a strain tensor that changes with time. The time derivative of that tensor is the strain rate tensor, that expresses how the element's deformation is changing with time; and is also the gradient of the velocity vector field 
 at that point, often denoted 

{\displaystyle \nabla v}
.

The tensors 
{\displaystyle \tau }
 and 

{\displaystyle \nabla v}
 can be expressed by 3×3 matrices, relative to any chosen coordinate system. The fluid is said to be Newtonian if these matrices are related by the equation

{\displaystyle {\boldsymbol {\tau }}={\boldsymbol {\mu }}(\nabla v)}

where 
{\displaystyle \mu }
 is a fixed 3×3×3×3 fourth order tensor that does not depend on the velocity or stress state of the fluid.

### Incompressible isotropic case
For an incompressible and isotropic Newtonian fluid in laminar flow only in the direction x (i.e. where viscosity is isotropic in the fluid), the shear stress is related to the strain rate by the simple constitutive equation

{\displaystyle \tau =\mu \ {\frac {\mathrm {d} u}{\ \mathrm {d} y\ }}}

where

{\displaystyle \tau }
 is the shear stress ("skin drag") in the fluid,

{\displaystyle \mu }
 is a scalar constant of proportionality, the dynamic viscosity of the fluid

{\displaystyle {\frac {du}{dy}}}
 is the derivative in the direction y, normal to x, of the flow velocity component u that is oriented along the direction x.

In case of a general 2‑D incompressibile flow in the plane x, y, the Newton constitutive equation become:

{\displaystyle \tau _{xy}=\mu \left({\frac {\partial u}{\partial y}}+{\frac {\partial v}{\partial x}}\right)}

where:

{\displaystyle \tau _{xy}}
 is the shear stress ("skin drag") in the fluid,

{\displaystyle {\frac {\ \partial u}{\partial y}}}
 is the partial derivative in the direction y of the flow velocity component u that is oriented along the direction x.

{\displaystyle {\frac {\partial v}{\ \partial x}}}
 is the partial derivative in the direction x of the flow velocity component v that is oriented along the direction y.

We can now generalize to the case of an incompressible flow with a general direction in the 3‑D space, the above constitutive equation becomes

{\displaystyle \tau _{ij}=\mu \left({\frac {\ \partial v_{i}}{\partial x_{j}}}+{\frac {\ \partial v_{j}}{\partial x_{i}}}\right)}

where

{\displaystyle x_{j}}
 is the 
th spatial coordinate

{\displaystyle v_{i}}
 is the fluid's velocity in the direction of axis 

{\displaystyle \tau _{ij}}
 is the 
-th component of the stress acting on the faces of the fluid element perpendicular to axis 
. It is the 

-th component of the shear stress tensor
or written in more compact tensor notation

{\displaystyle {\boldsymbol {\tau }}=\mu \left(\ \nabla \mathbf {u} +\nabla \mathbf {u} ^{\top }\right)}

where 
{\displaystyle \nabla \mathbf {u} }
 is the flow velocity gradient.

An alternative way of stating this constitutive equation is:

where

{\displaystyle {\boldsymbol {\varepsilon }}={\tfrac {1}{2}}\left(\ \mathbf {\nabla u} +\mathbf {\nabla u} ^{\top }\right)}

is the rate-of-strain tensor. So this decomposition can be made explicit as:

This constitutive equation is also called the Newton law of viscosity.

The total stress tensor 
{\displaystyle {\boldsymbol {\sigma }}}
 can always be decomposed as the sum of the isotropic stress tensor and the deviatoric stress tensor (
{\displaystyle {\boldsymbol {\sigma }}'}
):

{\displaystyle {\boldsymbol {\sigma }}={\tfrac {1}{3}}\operatorname {tr} \left({\boldsymbol {\sigma }}\right)\ \mathbf {I} +{\boldsymbol {\sigma }}'}

where 
{\displaystyle \mathbf {I} }
 is the identity tensor.

In the incompressible case, the isotropic stress is simply proportional to the thermodynamic pressure 
:

{\displaystyle p=-{\tfrac {1}{3}}\operatorname {tr} \left({\boldsymbol {\sigma }}\right)=-{\tfrac {1}{3}}\sum _{k}\sigma _{kk}\ ,}

and the deviatoric stress is coincident with the shear stress tensor 
{\displaystyle {\boldsymbol {\tau }}}
:

{\displaystyle {\boldsymbol {\sigma }}'={\boldsymbol {\tau }}=\mu \left(\ \nabla \mathbf {u} +\left(\nabla \mathbf {u} \right)^{\top }\right)~.}

The stress constitutive equation then becomes

{\displaystyle \sigma _{ij}=-p\ \delta _{ij}+\mu \left({\frac {\ \partial v_{i}}{\ \partial x_{j}}}+{\frac {\ \partial v_{j}}{\ \partial x_{i}}}\right)}

or written in more compact tensor notation

{\displaystyle {\boldsymbol {\sigma }}=-p\ \mathbf {I} +\mu \left(\ \nabla \mathbf {u} +\left(\nabla \mathbf {u} \right)^{\top }\right)~.}

### General compressible case
The Newton's constitutive law for a compressible flow results from the following assumptions on the Cauchy stress tensor:

the stress is Galilean invariant: it does not depend directly on the flow velocity, but only on spatial derivatives of the flow velocity. So the stress variable is the tensor gradient 
{\textstyle \nabla \mathbf {u} }
, or more simply the rate-of-strain tensor: 

{\textstyle {\boldsymbol {\varepsilon }}\left(\nabla \mathbf {u} \right)\equiv {\frac {1}{2}}\nabla \mathbf {u} +{\frac {1}{2}}\left(\nabla \mathbf {u} \right)^{T}}

the deviatoric stress is linear in this variable: 

{\textstyle {\boldsymbol {\sigma }}({\boldsymbol {\varepsilon }})=-p\mathbf {I} +\mathbf {C} :{\boldsymbol {\varepsilon }}}
, where 
 is independent on the strain rate tensor, 
{\textstyle \mathbf {C} }
 is the fourth-order tensor representing the constant of proportionality, called the viscosity or elasticity tensor, and : is the double-dot product.

the fluid is assumed to be isotropic, as with gases and simple liquids, and consequently 
{\textstyle \mathbf {C} }
 is an isotropic tensor; furthermore, since the deviatoric stress tensor is symmetric, by Helmholtz decomposition it can be expressed in terms of two scalar Lamé parameters, the second viscosity 
{\textstyle \lambda }
 and the dynamic viscosity 
, as it is usual in linear elasticity:

where 
{\textstyle \mathbf {I} }
 is the identity tensor, and 

{\textstyle \operatorname {tr} ({\boldsymbol {\varepsilon }})}
 is the trace of the rate-of-strain tensor. So this decomposition can be explicitly defined as:

{\displaystyle {\boldsymbol {\sigma }}=-p\mathbf {I} +\lambda (\nabla \cdot \mathbf {u} )\mathbf {I} +\mu \left(\nabla \mathbf {u} +(\nabla \mathbf {u} )^{\mathrm {T} }\right).}

Since the trace of the rate-of-strain tensor in three dimensions is the divergence (i.e. rate of expansion) of the flow:

{\displaystyle \operatorname {tr} ({\boldsymbol {\varepsilon }})=\nabla \cdot \mathbf {u} .}

Given this relation, and since the trace of the identity tensor in three dimensions is three:

        3.
{\displaystyle \operatorname {tr} ({\boldsymbol {I}})=3.}

the trace of the stress tensor in three dimensions becomes:

{\displaystyle \operatorname {tr} ({\boldsymbol {\sigma }})=-3p+(3\lambda +2\mu )\nabla \cdot \mathbf {u} .}

So by alternatively decomposing the stress tensor into isotropic and deviatoric parts, as usual in fluid dynamics:

{\displaystyle {\boldsymbol {\sigma }}=-\left[p-\left(\lambda +{\tfrac {2}{3}}\mu \right)\left(\nabla \cdot \mathbf {u} \right)\right]\mathbf {I} +\mu \left(\nabla \mathbf {u} +\left(\nabla \mathbf {u} \right)^{\mathrm {T} }-{\tfrac {2}{3}}\left(\nabla \cdot \mathbf {u} \right)\mathbf {I} \right)}

Introducing the bulk viscosity 
,

{\displaystyle \zeta \equiv \lambda +{\tfrac {2}{3}}\mu ,}

we arrive to the linear constitutive equation in the form usually employed in thermal hydraulics:

which can also be arranged in the other usual form:

{\displaystyle {\boldsymbol {\sigma }}=-p\mathbf {I} +\mu \left(\nabla \mathbf {u} +(\nabla \mathbf {u} )^{\mathrm {T} }\right)+\left(\zeta -{\frac {2}{3}}\mu \right)(\nabla \cdot \mathbf {u} )\mathbf {I} .}

Note that in the compressible case the pressure is no more proportional to the isotropic stress term, since there is the additional bulk viscosity term:

{\displaystyle p=-{\frac {1}{3}}\operatorname {tr} ({\boldsymbol {\sigma }})+\zeta (\nabla \cdot \mathbf {u} )}

and the deviatoric stress tensor 
{\displaystyle {\boldsymbol {\sigma }}'}
 is still coincident with the shear stress tensor 
{\displaystyle {\boldsymbol {\tau }}}
 (i.e. the deviatoric stress in a Newtonian fluid has no normal stress components), and it has a compressibility term in addition to the incompressible case, which is proportional to the shear viscosity:

{\displaystyle {\boldsymbol {\sigma }}'={\boldsymbol {\tau }}=\mu \left[\nabla \mathbf {u} +(\nabla \mathbf {u} )^{\mathrm {T} }-{\tfrac {2}{3}}(\nabla \cdot \mathbf {u} )\mathbf {I} \right]}

Note that the incompressible case correspond to the assumption that the pressure constrains the flow so that the volume of fluid elements is constant: isochoric flow resulting in a solenoidal velocity field with 

{\textstyle \nabla \cdot \mathbf {u} =0}
.

So one returns to the expressions for pressure and deviatoric stress seen in the preceding paragraph. 

Both bulk viscosity 
 and dynamic viscosity 
 need not be constant – in general, they depend on two thermodynamics variables if the fluid contains a single chemical species, say for example, pressure and temperature. Any equation that makes explicit one of these transport coefficient in the conservation variables is called an equation of state.

Apart from its dependence of pressure and temperature, the second viscosity coefficient also depends on the process, that is to say, the second viscosity coefficient is not just a material property. Example: in the case of a sound wave with a definitive frequency that alternatively compresses and expands a fluid element, the second viscosity coefficient depends on the frequency of the wave. This dependence is called the dispersion. In some cases, the second viscosity 
 can be assumed to be constant in which case, the effect of the volume viscosity 
 is that the mechanical pressure is not equivalent to the thermodynamic pressure: as demonstrated below.

{\displaystyle \nabla \cdot (\nabla \cdot \mathbf {u} )\mathbf {I} =\nabla (\nabla \cdot \mathbf {u} ),}

{\displaystyle {\bar {p}}\equiv p-\zeta \,\nabla \cdot \mathbf {u} ,}

However, this difference is usually neglected most of the time (that is whenever we are not dealing with processes such as sound absorption and attenuation of shock waves, where second viscosity coefficient becomes important) by explicitly assuming 

{\textstyle \zeta =0}
. The assumption of setting 

{\textstyle \zeta =0}
 is called as the Stokes hypothesis. The validity of Stokes hypothesis can be demonstrated for monoatomic gas both experimentally and from the kinetic theory; for other gases and liquids, Stokes hypothesis is generally incorrect.

Finally, note that Stokes hypothesis is less restrictive that the one of incompressible flow. In fact, in the incompressible flow both the bulk viscosity term, and the shear viscosity term in the divergence of the flow velocity term disappears, while in the Stokes hypothesis the first term also disappears but the second one still remains.

### For anisotropic fluids
More generally, in a non-isotropic Newtonian fluid, the coefficient 
{\displaystyle \mu }
 that relates internal friction stresses to the spatial derivatives of the velocity field is replaced by a nine-element viscous stress tensor 

{\displaystyle \mu _{ij}}
.

There is general formula for friction force in a liquid: The vector differential of friction force is equal the viscosity tensor increased on vector product differential of the area vector of adjoining a liquid layers and rotor of velocity:

{\displaystyle d\mathbf {F} =\mu _{ij}\,d\mathbf {S} \times \nabla \times \,\mathbf {u} }

where 

{\displaystyle \mu _{ij}}
 is the viscosity tensor. The diagonal components of viscosity tensor is molecular viscosity of a liquid, and not diagonal components – turbulence eddy viscosity.

## Newton's law of viscosity

The following equation illustrates the relation between shear rate and shear stress for a fluid with laminar flow only in the direction x:

{\displaystyle \tau _{xy}=\mu {\frac {\mathrm {d} v_{x}}{\mathrm {d} y}},}

where:

{\displaystyle \tau _{xy}}
 is the shear stress in the components x and y, i.e. the force component on the direction x per unit surface that is normal to the direction y (so it is parallel to the direction x)

{\displaystyle \mu }
 is the dynamic viscosity, and

{\textstyle {\frac {\mathrm {d} v_{x}}{\mathrm {d} y}}}
 is the flow velocity gradient along the direction y, that is normal to the flow velocity 
{\displaystyle v_{x}}
.

If viscosity 
{\displaystyle \mu }
 does not vary with rate of deformation the fluid is Newtonian.

### Power law model

The power law model is used to display the behavior of Newtonian and non-Newtonian fluids and measures shear stress as a function of strain rate.

The relationship between shear stress, strain rate and the velocity gradient for the power law model are:

{\displaystyle \tau _{xy}=-m\left|{\dot {\gamma }}\right|^{n-1}{\frac {dv_{x}}{dy}},}

where

{\displaystyle \left|{\dot {\gamma }}\right|^{n-1}}
 is the absolute value of the strain rate to the (n−1) power;

{\textstyle {\frac {dv_{x}}{dy}}}
 is the velocity gradient;

n is the power law index.

If

n < 1 then the fluid is a pseudoplastic.

n = 1 then the fluid is a Newtonian fluid.

n > 1 then the fluid is a dilatant.

### Fluid model
The relationship between the shear stress and shear rate in a casson fluid model is defined as follows:

{\displaystyle {\sqrt {\tau }}={\sqrt {\tau _{0}}}+S{\sqrt {dV \over dy}}}

where τ0 is the yield stress and

{\displaystyle S={\sqrt {\frac {\mu }{(1-H)^{\alpha }}}},}

where α depends on protein composition and H is the Hematocrit number.

## Examples
Water, air, alcohol, glycerol, and thin motor oil are all examples of Newtonian fluids over the range of shear stresses and shear rates encountered in everyday life. Single-phase fluids made up of small molecules are generally (although not exclusively) Newtonian.
