# Hamiltonian fluid mechanics

Hamiltonian fluid mechanics is the application of Hamiltonian methods to fluid mechanics. Note that this formalism only applies to non-dissipative fluids.

## Irrotational barotropic flow

Take the simple example of a barotropic, inviscid vorticity-free fluid.
Then, the conjugate fields are the mass density field ρ and the velocity potential φ. The Poisson bracket is given by

  
    
      
        {
        ρ
        (
        
          
            
              y
              →
            
          
        
        )
        ,
        φ
        (
        
          
            
              x
              →
            
          
        
        )
        }
        =
        
          δ
          
            d
          
        
        (
        
          
            
              x
              →
            
          
        
        −
        
          
            
              y
              →
            
          
        
        )
      
    
    

$$ \{\rho ({\vec {y}}),\varphi ({\vec {x}})\}=\delta ^{d}({\vec {x}}-{\vec {y}}) $$

  

and the Hamiltonian by:

  
    
      
        H
        =
        ∫
        
          
            d
          
          
            d
          
        
        x
        
          
            H
          
        
        =
        ∫
        
          
            d
          
          
            d
          
        
        x
        
          (
          
            
              
                1
                2
              
            
            ρ
            (
            ∇
            φ
            
              )
              
                2
              
            
            +
            e
            (
            ρ
            )
          
          )
        
        ,
      
    
    

$$ H=\int \mathrm {d} ^{d}x{\mathcal {H}}=\int \mathrm {d} ^{d}x\left({\frac {1}{2}}\rho (\nabla \varphi )^{2}+e(\rho )\right), $$

  

where e is the internal energy density, as a function of ρ. 
For this barotropic flow, the internal energy is related to the pressure p by:

  
    
      
        
          e
          ″
        
        =
        
          
            1
            ρ
          
        
        
          p
          ′
        
        ,
      
    
    

$$ e''={\frac {1}{\rho }}p', $$

  

where an apostrophe ('), denotes differentiation with respect to ρ.
This Hamiltonian structure gives rise to the following two equations of motion:

  
    
      
        
          
            
              
                
                  
                    
                      ∂
                      ρ
                    
                    
                      ∂
                      t
                    
                  
                
              
              
                
                =
                +
                
                  
                    
                      ∂
                      
                        
                          H
                        
                      
                    
                    
                      ∂
                      φ
                    
                  
                
                =
                −
                ∇
                ⋅
                (
                ρ
                
                  
                    
                      u
                      →
                    
                  
                
                )
                ,
              
            
            
              
                
                  
                    
                      ∂
                      φ
                    
                    
                      ∂
                      t
                    
                  
                
              
              
                
                =
                −
                
                  
                    
                      ∂
                      
                        
                          H
                        
                      
                    
                    
                      ∂
                      ρ
                    
                  
                
                =
                −
                
                  
                    1
                    2
                  
                
                
                  
                    
                      u
                      →
                    
                  
                
                ⋅
                
                  
                    
                      u
                      →
                    
                  
                
                −
                
                  e
                  ′
                
                ,
              
            
          
        
      
    
    

$$ {\begin{aligned}{\frac {\partial \rho }{\partial t}}&=+{\frac {\partial {\mathcal {H}}}{\partial \varphi }}=-\nabla \cdot (\rho {\vec {u}}),\\{\frac {\partial \varphi }{\partial t}}&=-{\frac {\partial {\mathcal {H}}}{\partial \rho }}=-{\frac {1}{2}}{\vec {u}}\cdot {\vec {u}}-e',\end{aligned}} $$

  

where 
  
    
      
        
          
            
              u
              →
            
          
        
         
        
          
            
              
                =
              
              
                
                  d
                  e
                  f
                
              
            
          
        
         
        ∇
        φ
      
    
    

$$ {\vec {u}}\ {\stackrel {\mathrm {def} }{=}}\ \nabla \varphi $$

  
 is the velocity and is vorticity-free. The second equation leads to the Euler equations:

  
    
      
        
          
            
              ∂
              
                
                  
                    u
                    →
                  
                
              
            
            
              ∂
              t
            
          
        
        +
        (
        
          
            
              u
              →
            
          
        
        ⋅
        ∇
        )
        
          
            
              u
              →
            
          
        
        =
        −
        
          e
          ″
        
        ∇
        ρ
        =
        −
        
          
            1
            ρ
          
        
        ∇
        
          p
        
      
    
    

$$ {\frac {\partial {\vec {u}}}{\partial t}}+({\vec {u}}\cdot \nabla ){\vec {u}}=-e''\nabla \rho =-{\frac {1}{\rho }}\nabla {p} $$

  

after exploiting the fact that the vorticity is zero:

  
    
      
        ∇
        ×
        
          
            
              u
              →
            
          
        
        =
        
          
            
              0
              →
            
          
        
        .
      
    
    

$$ \nabla \times {\vec {u}}={\vec {0}}. $$

  

As fluid dynamics is described by non-canonical dynamics, which possess an infinite amount of Casimir invariants, an alternative formulation of Hamiltonian formulation of fluid dynamics can be introduced through the use of Nambu mechanics
