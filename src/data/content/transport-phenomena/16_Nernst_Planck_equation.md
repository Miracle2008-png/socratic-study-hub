# Nernst–Planck equation

The Nernst–Planck equation is a conservation of mass equation used to describe the motion of a charged chemical species in a fluid medium. It extends Fick's law of diffusion for the case where the diffusing particles are also moved with respect to the fluid by electrostatic forces. It is named after Walther Nernst and Max Planck.

## Equation
The Nernst–Planck equation is a continuity equation for the time-dependent concentration 

{\displaystyle c(t,{\bf {x}})}
 of a chemical species:

{\displaystyle {\partial c \over {\partial t}}+\nabla \cdot {\bf {J}}=0}

where 
{\displaystyle {\bf {J}}}
 is the flux. It is assumed that the total flux is composed of three elements: diffusion, advection, and electromigration. This implies that the concentration is affected by an ionic concentration gradient 

{\displaystyle \nabla c}
, flow velocity 
{\displaystyle {\bf {v}}}
, and an electric field 
{\displaystyle {\bf {E}}}
:

{\displaystyle {\bf {J}}=-\underbrace {D\nabla c} _{\text{Diffusion}}+\underbrace {c{\bf {v}}} _{\text{Advection}}+\underbrace {{Dze \over {k_{\text{B}}T}}c{\bf {E}}} _{\text{Electromigration}}}

where 
 is the diffusivity of the chemical species, 
 is the valence of ionic species, 
 is the elementary charge, 
{\displaystyle k_{\text{B}}}
 is the Boltzmann constant, and 
 is the absolute temperature. The electric field may be further decomposed as:

{\displaystyle {\bf {E}}=-\nabla \phi -{\partial {\bf {A}} \over {\partial t}}}

where 
{\displaystyle \phi }
 is the electric potential and 
{\displaystyle {\bf {A}}}
 is the magnetic vector potential. Therefore, the Nernst–Planck equation is given by:

### Simplifications
Assuming that the concentration is at equilibrium 

{\displaystyle (\partial c/\partial t=0)}
 and the flow velocity is zero, meaning that only the ion species moves, the Nernst–Planck equation takes the form:

{\displaystyle \nabla \cdot \left\{D\left[\nabla c+{ze \over {k_{\text{B}}T}}c\left(\nabla \phi +{\partial {\bf {A}} \over {\partial t}}\right)\right]\right\}=0}

Rather than a general electric field, if we assume that only the electrostatic component is significant, the equation is further simplified by removing the time derivative of the magnetic vector potential:

{\displaystyle \nabla \cdot \left[D\left(\nabla c+{ze \over {k_{\text{B}}T}}c\nabla \phi \right)\right]=0}

Finally, in units of mol/(m2·s) and the gas constant 
, one obtains the more familiar form:

{\displaystyle \nabla \cdot \left[D\left(\nabla c+{zF \over {RT}}c\nabla \phi \right)\right]=0}

where 
 is the Faraday constant equal to 
{\displaystyle N_{\text{A}}e}
; the product of Avogadro constant and the elementary charge.
