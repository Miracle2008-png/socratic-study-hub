# Hydrostatic pressure

Hydrostatic pressure is the static pressure exerted at a point of interest by the weight of a fluid column above the point.


## Formulation
In a fluid at rest, all frictional and inertial stresses vanish and the state of stress of the system is called hydrostatic. When this condition of V = 0 is applied to the Navier–Stokes equations for viscous fluids or Euler equations (fluid dynamics) for ideal inviscid fluid, the gradient of pressure becomes a function of body forces only. 
The Navier-Stokes momentum equations are:

By setting the flow velocity :
  
    
      
        
          u
        
        =
        
          0
        
      
    
    {\displaystyle \mathbf {u} =\mathbf {0} }
  
, they become simply:

  
    
      
        
          0
        
        =
        −
        ∇
        p
        +
        ρ
        
          g
        
      
    
    {\displaystyle \mathbf {0} =-\nabla p+\rho \mathbf {g} }
  

or:

  
    
      
        ∇
        p
        =
        ρ
        
          g
        
      
    
    {\displaystyle \nabla p=\rho \mathbf {g} }
  

This is the general form of Stevin's law: the pressure gradient equals the body force force density field.
Let us now consider two particular cases of this law. In case of a conservative body force with scalar potential :
  
    
      
        ϕ
      
    
    {\displaystyle \phi }
  
:

  
    
      
        ρ
        
          g
        
        =
        −
        ∇
        ϕ
      
    
    {\displaystyle \rho \mathbf {g} =-\nabla \phi }
  

the Stevin equation becomes:

  
    
      
        ∇
        p
        =
        −
        ∇
        ϕ
      
    
    {\displaystyle \nabla p=-\nabla \phi }
  

That can be integrated to give:

  
    
      
        Δ
        p
        =
        −
        Δ
        ϕ
      
    
    {\displaystyle \Delta p=-\Delta \phi }
  

So in this case the pressure difference is the opposite of the difference of the scalar potential associated to the body force.
In the other particular case of a body force of constant direction along z:

  
    
      
        
          g
        
        =
        −
        g
        (
        x
        ,
        y
        ,
        z
        )
        
          
            
              k
              ^
            
          
        
      
    
    {\displaystyle \mathbf {g} =-g(x,y,z){\hat {k}}}
  

the generalised Stevin's law above becomes:

  
    
      
        
          
            
              ∂
              p
            
            
              ∂
              z
            
          
        
        =
        −
        ρ
        (
        x
        ,
        y
        ,
        z
        )
        g
        (
        x
        ,
        y
        ,
        z
        )
      
    
    {\displaystyle {\frac {\partial p}{\partial z}}=-\rho (x,y,z)g(x,y,z)}
  

That can be integrated to give another (less-) generalised Stevin's law:

  
    
      
        p
        (
        x
        ,
        y
        ,
        z
        )
        −
        
          p
          
            0
          
        
        (
        x
        ,
        y
        )
        =
        −
        
          ∫
          
            0
          
          
            z
          
        
        ρ
        (
        x
        ,
        y
        ,
        
          z
          ′
        
        )
        g
        (
        x
        ,
        y
        ,
        
          z
          ′
        
        )
        d
        
          z
          ′
        
      
    
    {\displaystyle p(x,y,z)-p_{0}(x,y)=-\int _{0}^{z}\rho (x,y,z')g(x,y,z')dz'}
  

where:

  
    
      
        p
      
    
    {\displaystyle p}
  
 is the hydrostatic pressure (Pa),

  
    
      
        ρ
      
    
    {\displaystyle \rho }
  
 is the fluid density (kg/m3),

  
    
      
        g
      
    
    {\displaystyle g}
  
 is gravitational acceleration (m/s2),

  
    
      
        z
      
    
    {\displaystyle z}
  
 is the height (parallel to the direction of gravity) of the test area (m),

  
    
      
        0
      
    
    {\displaystyle 0}
  
 is the height of the zero reference point of the pressure (m)

  
    
      
        
          p
          
            0
          
        
      
    
    {\displaystyle p_{0}}
  
 is the hydrostatic pressure field (Pa) along x and y at the zero reference point


### Simplification for liquids
For water and other liquids, this integral can be simplified significantly for many practical applications, based on the following two assumptions. Since many liquids can be considered incompressible, a reasonable good estimation can be made from assuming a constant density throughout the liquid. The same assumption cannot be made within a gaseous environment. Also, since the height 
  
    
      
        Δ
        z
      
    
    {\displaystyle \Delta z}
  
 of the fluid column between z and z0 is often reasonably small compared to the radius of the Earth, one can neglect the variation of g. Under these circumstances, one can transport out of the integral the density and the gravity acceleration and the law is simplified into the formula

  
    
      
        Δ
        p
        (
        z
        )
        =
        ρ
        g
        Δ
        z
        ,
      
    
    {\displaystyle \Delta p(z)=\rho g\Delta z,}
  

where 
  
    
      
        Δ
        z
      
    
    {\displaystyle \Delta z}
  
 is the height z − z0 of the liquid column between the test volume and the zero reference point of the pressure. This formula is often called Stevin's law. 
One could arrive to the above formula also by considering the first particular case of the equation for a conservative body force field: in fact the body force field of uniform intensity and direction:

  
    
      
        ρ
        
          g
        
        (
        x
        ,
        y
        ,
        z
        )
        =
        −
        ρ
        g
        
          
            
              k
              ^
            
          
        
      
    
    {\displaystyle \rho \mathbf {g} (x,y,z)=-\rho g{\hat {k}}}
  

is conservative, so one can write the body force density as:

  
    
      
        ρ
        
          g
        
        =
        ∇
        (
        −
        ρ
        g
        z
        )
      
    
    {\displaystyle \rho \mathbf {g} =\nabla (-\rho gz)}
  

Then the body force density has a simple scalar potential:

  
    
      
        ϕ
        (
        z
        )
        =
        −
        ρ
        g
        z
      
    
    {\displaystyle \phi (z)=-\rho gz}
  

And the pressure difference follows another time the Stevin's law:

  
    
      
        Δ
        p
        =
        −
        Δ
        ϕ
        =
        ρ
        g
        Δ
        z
      
    
    {\displaystyle \Delta p=-\Delta \phi =\rho g\Delta z}
  

The reference point should lie at or below the surface of the liquid. Otherwise, one has to split the integral into two (or more) terms with the constant ρliquid and ρ(z′)above. For example, the absolute pressure compared to vacuum is

  
    
      
        p
        =
        ρ
        g
        Δ
        z
        +
        
          p
          
            
              0
            
          
        
        ,
      
    
    {\displaystyle p=\rho g\Delta z+p_{\mathrm {0} },}
  

where 
  
    
      
        Δ
        z
      
    
    {\displaystyle \Delta z}
  
 is the total height of the liquid column above the test area to the surface, and p0 is the atmospheric pressure, i.e., the pressure calculated from the remaining integral over the air column from the liquid surface to infinity. This can easily be visualized using a pressure prism.


## Applications
Hydrostatic pressure has been used in the preservation of foods in a process called pascalization.


### Medicine
In medicine, hydrostatic pressure in blood vessels is the pressure of the blood against the wall. It is the opposing force to oncotic pressure. In capillaries, hydrostatic pressure (also known as capillary blood pressure) is higher than the opposing “colloid osmotic pressure” in blood—a “constant” pressure primarily produced by circulating albumin—at the arteriolar end of the capillary. This pressure forces plasma and nutrients out of the capillaries and into surrounding tissues. Fluid and the cellular wastes in the tissues enter the capillaries at the venule end, where the hydrostatic pressure is less than the osmotic pressure in the vessel.


### Atmospheric pressure
Statistical mechanics shows that, for a pure ideal gas of constant temperature T in the earth gravitational field, its pressure, p will vary with height, h, as

  
    
      
        p
        (
        h
        )
        =
        p
        (
        0
        )
        
          e
          
            −
            
              
                
                  M
                  g
                  h
                
                
                  k
                  T
                
              
            
          
        
      
    
    {\displaystyle p(h)=p(0)e^{-{\frac {Mgh}{kT}}}}
  

where

g is the acceleration due to gravity
T is the  absolute temperature
k is Boltzmann constant
M is the molecular mass of the gas
p is the pressure
h is the height
This is known as the barometric formula, and may be derived from assuming the pressure is hydrostatic.
If there are multiple types of molecules in the gas, the partial pressure of each type will be given by this equation. Under most conditions, the distribution of each species of gas is independent of the other species.


## Buoyancy

Any body of arbitrary shape which is immersed, partly or fully, in a fluid will experience the action of a net force in the opposite direction of the local pressure gradient. If this pressure gradient arises from gravity, the net force is in the vertical direction opposite that of the gravitational force.  This vertical force is termed buoyancy or buoyant force and is equal in magnitude, but opposite in direction, to the weight of the displaced fluid.  Mathematically,

  
    
      
        F
        =
        ρ
        g
        V
      
    
    {\displaystyle F=\rho gV}
  

where ρ is the density of the fluid, g is the acceleration due to gravity, and V is the volume of fluid directly above the curved surface.  In the case of a ship, for instance, its weight is balanced by pressure forces from the surrounding water, allowing it to float.  If more cargo is loaded onto the ship, it would sink more into the water – displacing more water and thus receive a higher buoyant force to balance the increased weight.
Discovery of the principle of buoyancy is attributed to Archimedes.


### Hydrostatic force on submerged surfaces
The horizontal and vertical components of the hydrostatic force acting on a submerged surface are given by the following formula:

  
    
      
        
          
            
              
                
                  F
                  
                    
                      h
                    
                  
                
              
              
                
                =
                
                  p
                  
                    
                      c
                    
                  
                
                A
              
            
            
              
                
                  F
                  
                    
                      v
                    
                  
                
              
              
                
                =
                ρ
                g
                V
              
            
          
        
      
    
    {\displaystyle {\begin{aligned}F_{\mathrm {h} }&=p_{\mathrm {c} }A\\F_{\mathrm {v} }&=\rho gV\end{aligned}}}
  

where

pc is the pressure at the centroid of the vertical projection of the submerged surface
A is the area of the same vertical projection of the surface
ρ is the density of the fluid
g is the acceleration due to gravity
V is the volume of fluid directly above the curved surface

