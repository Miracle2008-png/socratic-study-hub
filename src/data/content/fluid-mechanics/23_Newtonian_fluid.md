# Newtonian fluid

A Newtonian fluid is a fluid in which the viscous stresses arising from its flow are at every point linearly correlated to the local strain rate—the rate of change of its deformation over time; a Newtonian fluid's rate of flow cannot be altered by shaking, pumping, or stirring the fluid. Stresses are proportional to magnitude of the fluid's velocity vector.
A fluid is Newtonian only if the tensors that describe the viscous stress and the strain rate are related by a constant viscosity tensor that does not depend on the stress state and velocity of the flow. If the fluid is also isotropic (i.e., its mechanical properties are the same along any direction), the viscosity tensor reduces to two real coefficients, describing the fluid's resistance to continuous shear deformation and continuous compression or expansion, respectively.
Newtonian fluids are the easiest mathematical models of fluids that account for viscosity. While no real fluid fits the definition perfectly, many common liquids and gases, such as water and air, can be assumed to be Newtonian for practical calculations under ordinary conditions. However, non-Newtonian fluids are relatively common and include oobleck (which becomes stiffer when vigorously sheared) and non-drip paint (which becomes thinner when sheared). Other examples include many polymer solutions (which exhibit the Weissenberg effect), molten polymers, many solid suspensions, blood, and most highly viscous fluids.
Newtonian fluids are named after Isaac Newton, who first used the differential equation to postulate the relation between the shear strain rate and shear stress for such fluids.

## Definition

An element of a flowing liquid or gas will endure forces from the surrounding fluid, including viscous stress forces that cause it to gradually deform over time. These forces can be mathematically first order approximated by a viscous stress tensor, usually denoted by 
  
    
      
        τ
      
    
    

$$ \tau $$

  
.
The deformation of a fluid element, relative to some previous state, can be first order approximated by a strain tensor that changes with time. The time derivative of that tensor is the strain rate tensor, that expresses how the element's deformation is changing with time; and is also the gradient of the velocity vector field 
  
    
      
        v
      
    
    

$$ v $$

  
 at that point, often denoted 
  
    
      
        ∇
        v
      
    
    

$$ \nabla v $$

  
.
The tensors 
  
    
      
        τ
      
    
    

$$ \tau $$

  
 and 
  
    
      
        ∇
        v
      
    
    

$$ \nabla v $$

  
 can be expressed by 3×3 matrices, relative to any chosen coordinate system. The fluid is said to be Newtonian if these matrices are related by the equation

  
    
      
        
          τ
        
        =
        
          μ
        
        (
        ∇
        v
        )
      
    
    

$$ {\boldsymbol {\tau }}={\boldsymbol {\mu }}(\nabla v) $$

  

where 
  
    
      
        μ
      
    
    

$$ \mu $$

  
 is a fixed 3×3×3×3 fourth order tensor that does not depend on the velocity or stress state of the fluid.

### Incompressible isotropic case

For an incompressible and isotropic Newtonian fluid in laminar flow only in the direction x (i.e. where viscosity is isotropic in the fluid), the shear stress is related to the strain rate by the simple constitutive equation

  
    
      
        τ
        =
        μ
         
        
          
            
              
                d
              
              u
            
            
               
              
                d
              
              y
               
            
          
        
      
    
    

$$ \tau =\mu \ {\frac {\mathrm {d} u}{\ \mathrm {d} y\ }} $$

  

where

  
    
      
        τ
      
    
    

$$ \tau $$

  
 is the shear stress ("skin drag") in the fluid,

  
    
      
        μ
      
    
    

$$ \mu $$

  
 is a scalar constant of proportionality, the dynamic viscosity of the fluid

  
    
      
        
          
            
              d
              u
            
            
              d
              y
            
          
        
      
    
    

$$ {\frac {du}{dy}} $$

  
 is the derivative in the direction y, normal to x, of the flow velocity component u that is oriented along the direction x.
In case of a general 2‑D incompressibile flow in the plane x, y, the Newton constitutive equation become:

  
    
      
        
          τ
          
            x
            y
          
        
        =
        μ
        
          (
          
            
              
                
                  ∂
                  u
                
                
                  ∂
                  y
                
              
            
            +
            
              
                
                  ∂
                  v
                
                
                  ∂
                  x
                
              
            
          
          )
        
      
    
    

$$ \tau _{xy}=\mu \left({\frac {\partial u}{\partial y}}+{\frac {\partial v}{\partial x}}\right) $$

  

where:

  
    
      
        
          τ
          
            x
            y
          
        
      
    
    

$$ \tau _{xy} $$

  
 is the shear stress ("skin drag") in the fluid,

  
    
      
        
          
            
               
              ∂
              u
            
            
              ∂
              y
            
          
        
      
    
    

$$ {\frac {\ \partial u}{\partial y}} $$

  
 is the partial derivative in the direction y of the flow velocity component u that is oriented along the direction x.

  
    
      
        
          
            
              ∂
              v
            
            
               
              ∂
              x
            
          
        
      
    
    

$$ {\frac {\partial v}{\ \partial x}} $$

  
 is the partial derivative in the direction x of the flow velocity component v that is oriented along the direction y.
We can now generalize to the case of an incompressible flow with a general direction in the 3‑D space, the above constitutive equation becomes

  
    
      
        
          τ
          
            i
            j
          
        
        =
        μ
        
          (
          
            
              
                
                   
                  ∂
                  
                    v
                    
                      i
                    
                  
                
                
                  ∂
                  
                    x
                    
                      j
                    
                  
                
              
            
            +
            
              
                
                   
                  ∂
                  
                    v
                    
                      j
                    
                  
                
                
                  ∂
                  
                    x
                    
                      i
                    
                  
                
              
            
          
          )
        
      
    
    

$$ \tau _{ij}=\mu \left({\frac {\ \partial v_{i}}{\partial x_{j}}}+{\frac {\ \partial v_{j}}{\partial x_{i}}}\right) $$

  

where

  
    
      
        
          x
          
            j
          
        
      
    
    

$$ x_{j} $$

  
 is the 
  
    
      
        j
      
    
    

$$ j $$

  
th spatial coordinate

  
    
      
        
          v
          
            i
          
        
      
    
    

$$ v_{i} $$

  
 is the fluid's velocity in the direction of axis 
  
    
      
        i
      
    
    

$$ i $$

  

  
    
      
        
          τ
          
            i
            j
          
        
      
    
    

$$ \tau _{ij} $$

  
 is the 
  
    
      
        j
      
    
    

$$ j $$

  
-th component of the stress acting on the faces of the fluid element perpendicular to axis 
  
    
      
        i
      
    
    

$$ i $$

  
. It is the 
  
    
      
        i
        j
      
    
    

$$ ij $$

  
-th component of the shear stress tensor
or written in more compact tensor notation

  
    
      
        
          τ
        
        =
        μ
        
          (
          
             
            ∇
            
              u
            
            +
            ∇
            
              
                u
              
              
                ⊤
              
            
          
          )
        
      
    
    

$$ {\boldsymbol {\tau }}=\mu \left(\ \nabla \mathbf {u} +\nabla \mathbf {u} ^{\top }\right) $$

  

where 
  
    
      
        ∇
        
          u
        
      
    
    

$$ \nabla \mathbf {u} $$

  
 is the flow velocity gradient.
An alternative way of stating this constitutive equation is:

where

  
    
      
        
          ε
        
        =
        
          
            
              1
              2
            
          
        
        
          (
          
             
            
              ∇
              u
            
            +
            
              
                ∇
                u
              
              
                ⊤
              
            
          
          )
        
      
    
    

$$ {\boldsymbol {\varepsilon }}={\tfrac {1}{2}}\left(\ \mathbf {\nabla u} +\mathbf {\nabla u} ^{\top }\right) $$

  

is the rate-of-strain tensor. So this decomposition can be made explicit as:

This constitutive equation is also called the Newton law of viscosity.
The total stress tensor 
  
    
      
        
          σ
        
      
    
    

$$ {\boldsymbol {\sigma }} $$

  
 can always be decomposed as the sum of the isotropic stress tensor and the deviatoric stress tensor (
  
    
      
        
          
            σ
          
          ′
        
      
    
    

$$ {\boldsymbol {\sigma }}' $$

  
):

  
    
      
        
          σ
        
        =
        
          
            
              1
              3
            
          
        
        tr
        ⁡
        
          (
          
            σ
          
          )
        
         
        
          I
        
        +
        
          
            σ
          
          ′
        
      
    
    

$$ {\boldsymbol {\sigma }}={\tfrac {1}{3}}\operatorname {tr} \left({\boldsymbol {\sigma }}\right)\ \mathbf {I} +{\boldsymbol {\sigma }}' $$

  

where 
  
    
      
        
          I
        
      
    
    

$$ \mathbf {I} $$

  
 is the identity tensor.
In the incompressible case, the isotropic stress is simply proportional to the thermodynamic pressure 
  
    
      
        p
      
    
    

$$ p $$

  
:

  
    
      
        p
        =
        −
        
          
            
              1
              3
            
          
        
        tr
        ⁡
        
          (
          
            σ
          
          )
        
        =
        −
        
          
            
              1
              3
            
          
        
        
          ∑
          
            k
          
        
        
          σ
          
            k
            k
          
        
         
        ,
      
    
    

$$ p=-{\tfrac {1}{3}}\operatorname {tr} \left({\boldsymbol {\sigma }}\right)=-{\tfrac {1}{3}}\sum _{k}\sigma _{kk}\ , $$

  

and the deviatoric stress is coincident with the shear stress tensor 
  
    
      
        
          τ
        
      
    
    

$$ {\boldsymbol {\tau }} $$

  
:

  
    
      
        
          
            σ
          
          ′
        
        =
        
          τ
        
        =
        μ
        
          (
          
             
            ∇
            
              u
            
            +
            
              
                (
                
                  ∇
                  
                    u
                  
                
                )
              
              
                ⊤
              
            
          
          )
        
         
        .
      
    
    

$$ {\boldsymbol {\sigma }}'={\boldsymbol {\tau }}=\mu \left(\ \nabla \mathbf {u} +\left(\nabla \mathbf {u} \right)^{\top }\right)~. $$

  

The stress constitutive equation then becomes

  
    
      
        
          σ
          
            i
            j
          
        
        =
        −
        p
         
        
          δ
          
            i
            j
          
        
        +
        μ
        
          (
          
            
              
                
                   
                  ∂
                  
                    v
                    
                      i
                    
                  
                
                
                   
                  ∂
                  
                    x
                    
                      j
                    
                  
                
              
            
            +
            
              
                
                   
                  ∂
                  
                    v
                    
                      j
                    
                  
                
                
                   
                  ∂
                  
                    x
                    
                      i
                    
                  
                
              
            
          
          )
        
      
    
    

$$ \sigma _{ij}=-p\ \delta _{ij}+\mu \left({\frac {\ \partial v_{i}}{\ \partial x_{j}}}+{\frac {\ \partial v_{j}}{\ \partial x_{i}}}\right) $$

  

or written in more compact tensor notation

  
    
      
        
          σ
        
        =
        −
        p
         
        
          I
        
        +
        μ
        
          (
          
             
            ∇
            
              u
            
            +
            
              
                (
                
                  ∇
                  
                    u
                  
                
                )
              
              
                ⊤
              
            
          
          )
        
         
        .
      
    
    

$$ {\boldsymbol {\sigma }}=-p\ \mathbf {I} +\mu \left(\ \nabla \mathbf {u} +\left(\nabla \mathbf {u} \right)^{\top }\right)~. $$

  

### General compressible case

The Newton's constitutive law for a compressible flow results from the following assumptions on the Cauchy stress tensor:

the stress is Galilean invariant: it does not depend directly on the flow velocity, but only on spatial derivatives of the flow velocity. So the stress variable is the tensor gradient 
  
    
      
        ∇
        
          u
        
      
    
    {\textstyle \nabla \mathbf {u} }
  
, or more simply the rate-of-strain tensor: 
  
    
      
        
          ε
        
        
          (
          
            ∇
            
              u
            
          
          )
        
        ≡
        
          
            1
            2
          
        
        ∇
        
          u
        
        +
        
          
            1
            2
          
        
        
          
            (
            
              ∇
              
                u
              
            
            )
          
          
            T
          
        
      
    
    {\textstyle {\boldsymbol {\varepsilon }}\left(\nabla \mathbf {u} \right)\equiv {\frac {1}{2}}\nabla \mathbf {u} +{\frac {1}{2}}\left(\nabla \mathbf {u} \right)^{T}}
  

the deviatoric stress is linear in this variable: 
  
    
      
        
          σ
        
        (
        
          ε
        
        )
        =
        −
        p
        
          I
        
        +
        
          C
        
        :
        
          ε
        
      
    
    {\textstyle {\boldsymbol {\sigma }}({\boldsymbol {\varepsilon }})=-p\mathbf {I} +\mathbf {C} :{\boldsymbol {\varepsilon }}}
  
, where 
  
    
      
        p
      
    
    {\textstyle p}
  
 is independent on the strain rate tensor, 
  
    
      
        
          C
        
      
    
    {\textstyle \mathbf {C} }
  
 is the fourth-order tensor representing the constant of proportionality, called the viscosity or elasticity tensor, and : is the double-dot product.
the fluid is assumed to be isotropic, as with gases and simple liquids, and consequently 
  
    
      
        
          C
        
      
    
    {\textstyle \mathbf {C} }
  
 is an isotropic tensor; furthermore, since the deviatoric stress tensor is symmetric, by Helmholtz decomposition it can be expressed in terms of two scalar Lamé parameters, the second viscosity 
  
    
      
        λ
      
    
    {\textstyle \lambda }
  
 and the dynamic viscosity 
  
    
      
        μ
      
    
    {\textstyle \mu }
  
, as it is usual in linear elasticity:

where 
  
    
      
        
          I
        
      
    
    {\textstyle \mathbf {I} }
  
 is the identity tensor, and 
  
    
      
        tr
        ⁡
        (
        
          ε
        
        )
      
    
    {\textstyle \operatorname {tr} ({\boldsymbol {\varepsilon }})}
  
 is the trace of the rate-of-strain tensor. So this decomposition can be explicitly defined as:

  
    
      
        
          σ
        
        =
        −
        p
        
          I
        
        +
        λ
        (
        ∇
        ⋅
        
          u
        
        )
        
          I
        
        +
        μ
        
          (
          
            ∇
            
              u
            
            +
            (
            ∇
            
              u
            
            
              )
              
                
                  T
                
              
            
          
          )
        
        .
      
    
    

$$ {\boldsymbol {\sigma }}=-p\mathbf {I} +\lambda (\nabla \cdot \mathbf {u} )\mathbf {I} +\mu \left(\nabla \mathbf {u} +(\nabla \mathbf {u} )^{\mathrm {T} }\right). $$

  

Since the trace of the rate-of-strain tensor in three dimensions is the divergence (i.e. rate of expansion) of the flow:

  
    
      
        tr
        ⁡
        (
        
          ε
        
        )
        =
        ∇
        ⋅
        
          u
        
        .
      
    
    

$$ \operatorname {tr} ({\boldsymbol {\varepsilon }})=\nabla \cdot \mathbf {u} . $$

  

Given this relation, and since the trace of the identity tensor in three dimensions is three:

  
    
      
        tr
        ⁡
        (
        
          I
        
        )
        =
        3.
      
    
    

$$ \operatorname {tr} ({\boldsymbol {I}})=3. $$

  

the trace of the stress tensor in three dimensions becomes:

  
    
      
        tr
        ⁡
        (
        
          σ
        
        )
        =
        −
        3
        p
        +
        (
        3
        λ
        +
        2
        μ
        )
        ∇
        ⋅
        
          u
        
        .
      
    
    

$$ \operatorname {tr} ({\boldsymbol {\sigma }})=-3p+(3\lambda +2\mu )\nabla \cdot \mathbf {u} . $$

  

So by alternatively decomposing the stress tensor into isotropic and deviatoric parts, as usual in fluid dynamics:

  
    
      
        
          σ
        
        =
        −
        
          [
          
            p
            −
            
              (
              
                λ
                +
                
                  
                    
                      2
                      3
                    
                  
                
                μ
              
              )
            
            
              (
              
                ∇
                ⋅
                
                  u
                
              
              )
            
          
          ]
        
        
          I
        
        +
        μ
        
          (
          
            ∇
            
              u
            
            +
            
              
                (
                
                  ∇
                  
                    u
                  
                
                )
              
              
                
                  T
                
              
            
            −
            
              
                
                  2
                  3
                
              
            
            
              (
              
                ∇
                ⋅
                
                  u
                
              
              )
            
            
              I
            
          
          )
        
      
    
    

$$ {\boldsymbol {\sigma }}=-\left[p-\left(\lambda +{\tfrac {2}{3}}\mu \right)\left(\nabla \cdot \mathbf {u} \right)\right]\mathbf {I} +\mu \left(\nabla \mathbf {u} +\left(\nabla \mathbf {u} \right)^{\mathrm {T} }-{\tfrac {2}{3}}\left(\nabla \cdot \mathbf {u} \right)\mathbf {I} \right) $$

  

Introducing the bulk viscosity 
  
    
      
        ζ
      
    
    {\textstyle \zeta }
  
,

  
    
      
        ζ
        ≡
        λ
        +
        
          
            
              2
              3
            
          
        
        μ
        ,
      
    
    

$$ \zeta \equiv \lambda +{\tfrac {2}{3}}\mu , $$

  

we arrive to the linear constitutive equation in the form usually employed in thermal hydraulics:

which can also be arranged in the other usual form:

  
    
      
        
          σ
        
        =
        −
        p
        
          I
        
        +
        μ
        
          (
          
            ∇
            
              u
            
            +
            (
            ∇
            
              u
            
            
              )
              
                
                  T
                
              
            
          
          )
        
        +
        
          (
          
            ζ
            −
            
              
                2
                3
              
            
            μ
          
          )
        
        (
        ∇
        ⋅
        
          u
        
        )
        
          I
        
        .
      
    
    

$$ {\boldsymbol {\sigma }}=-p\mathbf {I} +\mu \left(\nabla \mathbf {u} +(\nabla \mathbf {u} )^{\mathrm {T} }\right)+\left(\zeta -{\frac {2}{3}}\mu \right)(\nabla \cdot \mathbf {u} )\mathbf {I} . $$

  

Note that in the compressible case the pressure is no more proportional to the isotropic stress term, since there is the additional bulk viscosity term:

  
    
      
        p
        =
        −
        
          
            1
            3
          
        
        tr
        ⁡
        (
        
          σ
        
        )
        +
        ζ
        (
        ∇
        ⋅
        
          u
        
        )
      
    
    

$$ p=-{\frac {1}{3}}\operatorname {tr} ({\boldsymbol {\sigma }})+\zeta (\nabla \cdot \mathbf {u} ) $$

  

and the deviatoric stress tensor 
  
    
      
        
          
            σ
          
          ′
        
      
    
    

$$ {\boldsymbol {\sigma }}' $$

  
 is still coincident with the shear stress tensor 
  
    
      
        
          τ
        
      
    
    

$$ {\boldsymbol {\tau }} $$

  
 (i.e. the deviatoric stress in a Newtonian fluid has no normal stress components), and it has a compressibility term in addition to the incompressible case, which is proportional to the shear viscosity:

  
    
      
        
          
            σ
          
          ′
        
        =
        
          τ
        
        =
        μ
        
          [
          
            ∇
            
              u
            
            +
            (
            ∇
            
              u
            
            
              )
              
                
                  T
                
              
            
            −
            
              
                
                  2
                  3
                
              
            
            (
            ∇
            ⋅
            
              u
            
            )
            
              I
            
          
          ]
        
      
    
    

$$ {\boldsymbol {\sigma }}'={\boldsymbol {\tau }}=\mu \left[\nabla \mathbf {u} +(\nabla \mathbf {u} )^{\mathrm {T} }-{\tfrac {2}{3}}(\nabla \cdot \mathbf {u} )\mathbf {I} \right] $$

  

Note that the incompressible case correspond to the assumption that the pressure constrains the flow so that the volume of fluid elements is constant: isochoric flow resulting in a solenoidal velocity field with 
  
    
      
        ∇
        ⋅
        
          u
        
        =
        0
      
    
    {\textstyle \nabla \cdot \mathbf {u} =0}
  
.
So one returns to the expressions for pressure and deviatoric stress seen in the preceding paragraph. 
Both bulk viscosity 
  
    
      
        ζ
      
    
    {\textstyle \zeta }
  
 and dynamic viscosity 
  
    
      
        μ
      
    
    {\textstyle \mu }
  
 need not be constant – in general, they depend on two thermodynamics variables if the fluid contains a single chemical species, say for example, pressure and temperature. Any equation that makes explicit one of these transport coefficient in the conservation variables is called an equation of state.
Apart from its dependence of pressure and temperature, the second viscosity coefficient also depends on the process, that is to say, the second viscosity coefficient is not just a material property. Example: in the case of a sound wave with a definitive frequency that alternatively compresses and expands a fluid element, the second viscosity coefficient depends on the frequency of the wave. This dependence is called the dispersion. In some cases, the second viscosity 
  
    
      
        ζ
      
    
    {\textstyle \zeta }
  
 can be assumed to be constant in which case, the effect of the volume viscosity 
  
    
      
        ζ
      
    
    {\textstyle \zeta }
  
 is that the mechanical pressure is not equivalent to the thermodynamic pressure: as demonstrated below.

  
    
      
        ∇
        ⋅
        (
        ∇
        ⋅
        
          u
        
        )
        
          I
        
        =
        ∇
        (
        ∇
        ⋅
        
          u
        
        )
        ,
      
    
    

$$ \nabla \cdot (\nabla \cdot \mathbf {u} )\mathbf {I} =\nabla (\nabla \cdot \mathbf {u} ), $$

  

  
    
      
        
          
            
              p
              ¯
            
          
        
        ≡
        p
        −
        ζ
        
        ∇
        ⋅
        
          u
        
        ,
      
    
    

$$ {\bar {p}}\equiv p-\zeta \,\nabla \cdot \mathbf {u} , $$

  

However, this difference is usually neglected most of the time (that is whenever we are not dealing with processes such as sound absorption and attenuation of shock waves, where second viscosity coefficient becomes important) by explicitly assuming 
  
    
      
        ζ
        =
        0
      
    
    {\textstyle \zeta =0}
  
. The assumption of setting 
  
    
      
        ζ
        =
        0
      
    
    {\textstyle \zeta =0}
  
 is called as the Stokes hypothesis. The validity of Stokes hypothesis can be demonstrated for monoatomic gas both experimentally and from the kinetic theory; for other gases and liquids, Stokes hypothesis is generally incorrect.
Finally, note that Stokes hypothesis is less restrictive that the one of incompressible flow. In fact, in the incompressible flow both the bulk viscosity term, and the shear viscosity term in the divergence of the flow velocity term disappears, while in the Stokes hypothesis the first term also disappears but the second one still remains.

### For anisotropic fluids

More generally, in a non-isotropic Newtonian fluid, the coefficient 
  
    
      
        μ
      
    
    

$$ \mu $$

  
 that relates internal friction stresses to the spatial derivatives of the velocity field is replaced by a nine-element viscous stress tensor 
  
    
      
        
          μ
          
            i
            j
          
        
      
    
    

$$ \mu _{ij} $$

  
.
There is general formula for friction force in a liquid: The vector differential of friction force is equal the viscosity tensor increased on vector product differential of the area vector of adjoining a liquid layers and rotor of velocity:

  
    
      
        d
        
          F
        
        =
        
          μ
          
            i
            j
          
        
        
        d
        
          S
        
        ×
        ∇
        ×
        
        
          u
        
      
    
    

$$ d\mathbf {F} =\mu _{ij}\,d\mathbf {S} \times \nabla \times \,\mathbf {u} $$

  

where 
  
    
      
        
          μ
          
            i
            j
          
        
      
    
    

$$ \mu _{ij} $$

  
 is the viscosity tensor. The diagonal components of viscosity tensor is molecular viscosity of a liquid, and not diagonal components – turbulence eddy viscosity.

## Newton's law of viscosity

The following equation illustrates the relation between shear rate and shear stress for a fluid with laminar flow only in the direction x:

  
    
      
        
          τ
          
            x
            y
          
        
        =
        μ
        
          
            
              
                d
              
              
                v
                
                  x
                
              
            
            
              
                d
              
              y
            
          
        
        ,
      
    
    

$$ \tau _{xy}=\mu {\frac {\mathrm {d} v_{x}}{\mathrm {d} y}}, $$

  

where:

  
    
      
        
          τ
          
            x
            y
          
        
      
    
    

$$ \tau _{xy} $$

  
 is the shear stress in the components x and y, i.e. the force component on the direction x per unit surface that is normal to the direction y (so it is parallel to the direction x)

  
    
      
        μ
      
    
    

$$ \mu $$

  
 is the dynamic viscosity, and

  
    
      
        
          
            
              
                d
              
              
                v
                
                  x
                
              
            
            
              
                d
              
              y
            
          
        
      
    
    {\textstyle {\frac {\mathrm {d} v_{x}}{\mathrm {d} y}}}
  
 is the flow velocity gradient along the direction y, that is normal to the flow velocity 
  
    
      
        
          v
          
            x
          
        
      
    
    

$$ v_{x} $$

  
.
If viscosity 
  
    
      
        μ
      
    
    

$$ \mu $$

  
 does not vary with rate of deformation the fluid is Newtonian.

### Power law model

The power law model is used to display the behavior of Newtonian and non-Newtonian fluids and measures shear stress as a function of strain rate.
The relationship between shear stress, strain rate and the velocity gradient for the power law model are:

  
    
      
        
          τ
          
            x
            y
          
        
        =
        −
        m
        
          
            |
            
              
                
                  γ
                  ˙
                
              
            
            |
          
          
            n
            −
            1
          
        
        
          
            
              d
              
                v
                
                  x
                
              
            
            
              d
              y
            
          
        
        ,
      
    
    

$$ \tau _{xy}=-m\left|{\dot {\gamma }}\right|^{n-1}{\frac {dv_{x}}{dy}}, $$

  

where

  
    
      
        
          
            |
            
              
                
                  γ
                  ˙
                
              
            
            |
          
          
            n
            −
            1
          
        
      
    
    

$$ \left|{\dot {\gamma }}\right|^{n-1} $$

  
 is the absolute value of the strain rate to the (n−1) power;

  
    
      
        
          
            
              d
              
                v
                
                  x
                
              
            
            
              d
              y
            
          
        
      
    
    {\textstyle {\frac {dv_{x}}{dy}}}
  
 is the velocity gradient;
n is the power law index.
If

n < 1 then the fluid is a pseudoplastic.
n = 1 then the fluid is a Newtonian fluid.
n > 1 then the fluid is a dilatant.

### Fluid model

The relationship between the shear stress and shear rate in a casson fluid model is defined as follows:

  
    
      
        
          
            τ
          
        
        =
        
          
            
              τ
              
                0
              
            
          
        
        +
        S
        
          
            
              
                d
                V
              
              
                d
                y
              
            
          
        
      
    
    

$$ {\sqrt {\tau }}={\sqrt {\tau _{0}}}+S{\sqrt {dV \over dy}} $$

  

where τ0 is the yield stress and

  
    
      
        S
        =
        
          
            
              μ
              
                (
                1
                −
                H
                
                  )
                  
                    α
                  
                
              
            
          
        
        ,
      
    
    

$$ S={\sqrt {\frac {\mu }{(1-H)^{\alpha }}}}, $$

  

where α depends on protein composition and H is the Hematocrit number.

## Examples

Water, air, alcohol, glycerol, and thin motor oil are all examples of Newtonian fluids over the range of shear stresses and shear rates encountered in everyday life. Single-phase fluids made up of small molecules are generally (although not exclusively) Newtonian.