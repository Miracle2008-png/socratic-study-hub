# Hamiltonian (control theory)

The Hamiltonian is a function used to solve a problem of optimal control for a dynamical system. It can be understood as an instantaneous increment of the Lagrangian expression of the problem that is to be optimized over a certain time period. Inspired by—but distinct from—the Hamiltonian of classical mechanics, the Hamiltonian of optimal control theory was developed by Lev Pontryagin as part of his maximum principle. Pontryagin proved that a necessary condition for solving the optimal control problem is that the control should be chosen so as to optimize the Hamiltonian.

## Problem statement and definition of the Hamiltonian

Consider a dynamical system of 
  
    
      
        n
      
    
    

$$ n $$

  
 first-order differential equations

  
    
      
        
          
            
              
                x
              
              ˙
            
          
        
        (
        t
        )
        =
        
          f
        
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
      
    
    

$$ {\dot {\mathbf {x} }}(t)=\mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t) $$

  

where 
  
    
      
        
          x
        
        (
        t
        )
        =
        
          
            [
            
              
                x
                
                  1
                
              
              (
              t
              )
              ,
              
                x
                
                  2
                
              
              (
              t
              )
              ,
              …
              ,
              
                x
                
                  n
                
              
              (
              t
              )
            
            ]
          
          
            
              T
            
          
        
      
    
    

$$ \mathbf {x} (t)=\left[x_{1}(t),x_{2}(t),\ldots ,x_{n}(t)\right]^{\mathsf {T}} $$

  
 denotes a vector of state variables, and 
  
    
      
        
          u
        
        (
        t
        )
        =
        
          
            [
            
              
                u
                
                  1
                
              
              (
              t
              )
              ,
              
                u
                
                  2
                
              
              (
              t
              )
              ,
              …
              ,
              
                u
                
                  r
                
              
              (
              t
              )
            
            ]
          
          
            
              T
            
          
        
      
    
    

$$ \mathbf {u} (t)=\left[u_{1}(t),u_{2}(t),\ldots ,u_{r}(t)\right]^{\mathsf {T}} $$

  
 a vector of control variables. Once initial conditions 
  
    
      
        
          x
        
        (
        
          t
          
            0
          
        
        )
        =
        
          
            x
          
          
            0
          
        
      
    
    

$$ \mathbf {x} (t_{0})=\mathbf {x} _{0} $$

  
 and controls 
  
    
      
        
          u
        
        (
        t
        )
      
    
    

$$ \mathbf {u} (t) $$

  
 are specified, a solution to the differential equations, called a trajectory 
  
    
      
        
          x
        
        (
        t
        ;
        
          
            x
          
          
            0
          
        
        ,
        
          t
          
            0
          
        
        )
      
    
    

$$ \mathbf {x} (t;\mathbf {x} _{0},t_{0}) $$

  
, can be found. The problem of optimal control is to choose 
  
    
      
        
          u
        
        (
        t
        )
      
    
    

$$ \mathbf {u} (t) $$

  
 (from some set  
  
    
      
        
          
            U
          
        
        ⊆
        
          
            R
          
          
            r
          
        
      
    
    

$$ {\mathcal {U}}\subseteq \mathbb {R} ^{r} $$

  
) so that 
  
    
      
        
          x
        
        (
        t
        )
      
    
    

$$ \mathbf {x} (t) $$

  
 maximizes or minimizes a certain objective function between an initial time 
  
    
      
        t
        =
        
          t
          
            0
          
        
      
    
    

$$ t=t_{0} $$

  
 and a terminal time 
  
    
      
        t
        =
        
          t
          
            1
          
        
      
    
    

$$ t=t_{1} $$

  
 (where 
  
    
      
        
          t
          
            1
          
        
      
    
    

$$ t_{1} $$

  
 may be infinity). Specifically, the goal is to optimize over a performance index 
  
    
      
        I
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
      
    
    

$$ I(\mathbf {x} (t),\mathbf {u} (t),t) $$

  
 defined at each point in time,

  
    
      
        
          max
          
            
              u
            
            (
            t
            )
          
        
        J
      
    
    

$$ \max _{\mathbf {u} (t)}J $$

  
, with 
  
    
      
        J
        =
        
          ∫
          
            
              t
              
                0
              
            
          
          
            
              t
              
                1
              
            
          
        
        I
        [
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        ]
        
        
          d
        
        t
      
    
    

$$ J=\int _{t_{0}}^{t_{1}}I[\mathbf {x} (t),\mathbf {u} (t),t]\,\mathrm {d} t $$

  

subject to the above equations of motion of the state variables. The solution method involves defining an ancillary function known as the control Hamiltonian

which combines the objective function and the state equations much like a Lagrangian in a static optimization problem, only that the  multipliers 
  
    
      
        
          λ
        
        (
        t
        )
      
    
    

$$ \mathbf {\lambda } (t) $$

  
—referred to as costate variables—are functions of time rather than constants.
The goal is to find an optimal control policy function 
  
    
      
        
          
            u
          
          
            ∗
          
        
        (
        t
        )
      
    
    

$$ \mathbf {u} ^{\ast }(t) $$

  
 and, with it, an optimal trajectory of the state variable 
  
    
      
        
          
            x
          
          
            ∗
          
        
        (
        t
        )
      
    
    

$$ \mathbf {x} ^{\ast }(t) $$

  
, which by Pontryagin's maximum principle are the arguments that maximize the Hamiltonian,

  
    
      
        H
        (
        
          
            x
          
          
            ∗
          
        
        (
        t
        )
        ,
        
          
            u
          
          
            ∗
          
        
        (
        t
        )
        ,
        
          λ
        
        (
        t
        )
        ,
        t
        )
        ≥
        H
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        
          λ
        
        (
        t
        )
        ,
        t
        )
      
    
    

$$ H(\mathbf {x} ^{\ast }(t),\mathbf {u} ^{\ast }(t),\mathbf {\lambda } (t),t)\geq H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t) $$

  
 for all 
  
    
      
        
          u
        
        (
        t
        )
        ∈
        
          
            U
          
        
      
    
    

$$ \mathbf {u} (t)\in {\mathcal {U}} $$

  

The first-order necessary conditions for a maximum are given by

  
    
      
        
          
            
              ∂
              H
              (
              
                x
              
              (
              t
              )
              ,
              
                u
              
              (
              t
              )
              ,
              
                λ
              
              (
              t
              )
              ,
              t
              )
            
            
              ∂
              
                u
              
            
          
        
        =
        0
        
      
    
    

$$ {\frac {\partial H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t)}{\partial \mathbf {u} }}=0\quad $$

  
 which is the maximum principle,

  
    
      
        
          
            
              ∂
              H
              (
              
                x
              
              (
              t
              )
              ,
              
                u
              
              (
              t
              )
              ,
              
                λ
              
              (
              t
              )
              ,
              t
              )
            
            
              ∂
              
                λ
              
            
          
        
        =
        
          
            
              
                x
              
              ˙
            
          
        
        (
        t
        )
        
      
    
    

$$ {\frac {\partial H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t)}{\partial \mathbf {\lambda } }}={\dot {\mathbf {x} }}(t)\quad $$

  
 which generates the state transition function 
  
    
      
        
        
          f
        
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
        =
        
          
            
              
                x
              
              ˙
            
          
        
        (
        t
        )
      
    
    

$$ \,\mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t)={\dot {\mathbf {x} }}(t) $$

  
,

  
    
      
        
          
            
              ∂
              H
              (
              
                x
              
              (
              t
              )
              ,
              
                u
              
              (
              t
              )
              ,
              
                λ
              
              (
              t
              )
              ,
              t
              )
            
            
              ∂
              
                x
              
            
          
        
        =
        −
        
          
            
              
                λ
              
              ˙
            
          
        
        (
        t
        )
        
      
    
    

$$ {\frac {\partial H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t)}{\partial \mathbf {x} }}=-{\dot {\mathbf {\lambda } }}(t)\quad $$

  
 which generates the costate equations 
  
    
      
        
        
          
            
              
                λ
              
              ˙
            
          
        
        (
        t
        )
        =
        −
        
          [
          
            
              I
              
                
                  x
                
              
            
            (
            
              x
            
            (
            t
            )
            ,
            
              u
            
            (
            t
            )
            ,
            t
            )
            +
            
              
                λ
              
              
                
                  T
                
              
            
            (
            t
            )
            
              
                f
              
              
                
                  x
                
              
            
            (
            
              x
            
            (
            t
            )
            ,
            
              u
            
            (
            t
            )
            ,
            t
            )
          
          ]
        
      
    
    

$$ \,{\dot {\mathbf {\lambda } }}(t)=-\left[I_{\mathbf {x} }(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} _{\mathbf {x} }(\mathbf {x} (t),\mathbf {u} (t),t)\right] $$

  

Together, the state and costate equations describe the Hamiltonian dynamical system (again analogous to but distinct from the Hamiltonian system in physics), the solution of which involves a two-point boundary value problem, given that there are 
  
    
      
        2
        n
      
    
    

$$ 2n $$

  
 boundary conditions involving two different points in time, the initial time (the 
  
    
      
        n
      
    
    

$$ n $$

  
 differential equations for the state variables), and the terminal time (the 
  
    
      
        n
      
    
    

$$ n $$

  
 differential equations for the costate variables; unless a final function is specified, the boundary conditions are 
  
    
      
        
          λ
        
        (
        
          t
          
            1
          
        
        )
        =
        0
      
    
    

$$ \mathbf {\lambda } (t_{1})=0 $$

  
, or 
  
    
      
        
          lim
          
            
              t
              
                1
              
            
            →
            ∞
          
        
        
          λ
        
        (
        
          t
          
            1
          
        
        )
        =
        0
      
    
    

$$ \lim _{t_{1}\to \infty }\mathbf {\lambda } (t_{1})=0 $$

  
 for infinite time horizons).
A sufficient condition for a maximum is the concavity of the Hamiltonian evaluated at the solution, i.e.

  
    
      
        
          H
          
            
              u
              u
            
          
        
        (
        
          
            x
          
          
            ∗
          
        
        (
        t
        )
        ,
        
          
            u
          
          
            ∗
          
        
        (
        t
        )
        ,
        
          λ
        
        (
        t
        )
        ,
        t
        )
        ≤
        0
      
    
    

$$ H_{\mathbf {uu} }(\mathbf {x} ^{\ast }(t),\mathbf {u} ^{\ast }(t),\mathbf {\lambda } (t),t)\leq 0 $$

  

where 
  
    
      
        
          
            u
          
          
            ∗
          
        
        (
        t
        )
      
    
    

$$ \mathbf {u} ^{\ast }(t) $$

  
 is the optimal control, and 
  
    
      
        
          
            x
          
          
            ∗
          
        
        (
        t
        )
      
    
    

$$ \mathbf {x} ^{\ast }(t) $$

  
 is resulting optimal trajectory for the state variable. Alternatively, by a result due to Olvi L. Mangasarian, the necessary conditions are sufficient if the functions 
  
    
      
        I
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
      
    
    

$$ I(\mathbf {x} (t),\mathbf {u} (t),t) $$

  
 and 
  
    
      
        
          f
        
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
      
    
    

$$ \mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t) $$

  
 are both concave in 
  
    
      
        
          x
        
        (
        t
        )
      
    
    

$$ \mathbf {x} (t) $$

  
 and 
  
    
      
        
          u
        
        (
        t
        )
      
    
    

$$ \mathbf {u} (t) $$

  
.

### Derivation from the Lagrangian

A constrained optimization problem as the one stated above usually suggests a Lagrangian expression, specifically 

  
    
      
        L
        =
        
          ∫
          
            
              t
              
                0
              
            
          
          
            
              t
              
                1
              
            
          
        
        I
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
        +
        
          
            λ
          
          
            
              T
            
          
        
        (
        t
        )
        
          [
          
            
              f
            
            (
            
              x
            
            (
            t
            )
            ,
            
              u
            
            (
            t
            )
            ,
            t
            )
            −
            
              
                
                  
                    x
                  
                  ˙
                
              
            
            (
            t
            )
          
          ]
        
        
        
          d
        
        t
      
    
    

$$ L=\int _{t_{0}}^{t_{1}}I(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\left[\mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t)-{\dot {\mathbf {x} }}(t)\right]\,\mathrm {d} t $$

  

where 
  
    
      
        
          λ
        
        (
        t
        )
      
    
    

$$ \mathbf {\lambda } (t) $$

  
 compares to the Lagrange multiplier in a static optimization problem but is now, as noted above, a function of time. In order to eliminate 
  
    
      
        
          
            
              
                x
              
              ˙
            
          
        
        (
        t
        )
      
    
    

$$ {\dot {\mathbf {x} }}(t) $$

  
, the last term on the right-hand side can be rewritten using integration by parts, such that

  
    
      
        −
        
          ∫
          
            
              t
              
                0
              
            
          
          
            
              t
              
                1
              
            
          
        
        
          
            λ
          
          
            
              T
            
          
        
        (
        t
        )
        
          
            
              
                x
              
              ˙
            
          
        
        (
        t
        )
        
        
          d
        
        t
        =
        −
        
          
            λ
          
          
            
              T
            
          
        
        (
        
          t
          
            1
          
        
        )
        
          x
        
        (
        
          t
          
            1
          
        
        )
        +
        
          
            λ
          
          
            
              T
            
          
        
        (
        
          t
          
            0
          
        
        )
        
          x
        
        (
        
          t
          
            0
          
        
        )
        +
        
          ∫
          
            
              t
              
                0
              
            
          
          
            
              t
              
                1
              
            
          
        
        
          
            
              
                
                  λ
                
                ˙
              
            
          
          
            
              T
            
          
        
        (
        t
        )
        
          x
        
        (
        t
        )
        
        
          d
        
        t
      
    
    

$$ -\int _{t_{0}}^{t_{1}}\mathbf {\lambda } ^{\mathsf {T}}(t){\dot {\mathbf {x} }}(t)\,\mathrm {d} t=-\mathbf {\lambda } ^{\mathsf {T}}(t_{1})\mathbf {x} (t_{1})+\mathbf {\lambda } ^{\mathsf {T}}(t_{0})\mathbf {x} (t_{0})+\int _{t_{0}}^{t_{1}}{\dot {\mathbf {\lambda } }}^{\mathsf {T}}(t)\mathbf {x} (t)\,\mathrm {d} t $$

  

which can be substituted back into the Lagrangian expression to give

  
    
      
        L
        =
        
          ∫
          
            
              t
              
                0
              
            
          
          
            
              t
              
                1
              
            
          
        
        
          [
          
            I
            (
            
              x
            
            (
            t
            )
            ,
            
              u
            
            (
            t
            )
            ,
            t
            )
            +
            
              
                λ
              
              
                
                  T
                
              
            
            (
            t
            )
            
              f
            
            (
            
              x
            
            (
            t
            )
            ,
            
              u
            
            (
            t
            )
            ,
            t
            )
            +
            
              
                
                  
                    
                      λ
                    
                    ˙
                  
                
              
              
                
                  T
                
              
            
            (
            t
            )
            
              x
            
            (
            t
            )
          
          ]
        
        
        
          d
        
        t
        −
        
          
            λ
          
          
            
              T
            
          
        
        (
        
          t
          
            1
          
        
        )
        
          x
        
        (
        
          t
          
            1
          
        
        )
        +
        
          
            λ
          
          
            
              T
            
          
        
        (
        
          t
          
            0
          
        
        )
        
          x
        
        (
        
          t
          
            0
          
        
        )
      
    
    

$$ L=\int _{t_{0}}^{t_{1}}\left[I(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t)+{\dot {\mathbf {\lambda } }}^{\mathsf {T}}(t)\mathbf {x} (t)\right]\,\mathrm {d} t-\mathbf {\lambda } ^{\mathsf {T}}(t_{1})\mathbf {x} (t_{1})+\mathbf {\lambda } ^{\mathsf {T}}(t_{0})\mathbf {x} (t_{0}) $$

  

To derive the first-order conditions for an optimum, assume that the solution has been found and the Lagrangian is maximized. Then any perturbation to 
  
    
      
        
          x
        
        (
        t
        )
      
    
    

$$ \mathbf {x} (t) $$

  
 or 
  
    
      
        
          u
        
        (
        t
        )
      
    
    

$$ \mathbf {u} (t) $$

  
 must cause the value of the Lagrangian to decline. Specifically, the total derivative of 
  
    
      
        L
      
    
    

$$ L $$

  
 obeys

  
    
      
        
          d
        
        L
        =
        
          ∫
          
            
              t
              
                0
              
            
          
          
            
              t
              
                1
              
            
          
        
        
          [
          
            
              (
              
                
                  I
                  
                    
                      u
                    
                  
                
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                t
                )
                +
                
                  
                    λ
                  
                  
                    
                      T
                    
                  
                
                (
                t
                )
                
                  
                    f
                  
                  
                    
                      u
                    
                  
                
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                t
                )
              
              )
            
            
              d
            
            
              u
            
            (
            t
            )
            +
            
              (
              
                
                  I
                  
                    
                      x
                    
                  
                
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                t
                )
                +
                
                  
                    λ
                  
                  
                    
                      T
                    
                  
                
                (
                t
                )
                
                  
                    f
                  
                  
                    
                      x
                    
                  
                
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                t
                )
                +
                
                  
                    
                      
                        λ
                      
                      ˙
                    
                  
                
                (
                t
                )
              
              )
            
            
              d
            
            
              x
            
            (
            t
            )
          
          ]
        
        
          d
        
        t
        −
        
          
            λ
          
          
            
              T
            
          
        
        (
        
          t
          
            1
          
        
        )
        
          d
        
        
          x
        
        (
        
          t
          
            1
          
        
        )
        +
        
          
            λ
          
          
            
              T
            
          
        
        (
        
          t
          
            0
          
        
        )
        
          d
        
        
          x
        
        (
        
          t
          
            0
          
        
        )
        ≤
        0
      
    
    

$$ \mathrm {d} L=\int _{t_{0}}^{t_{1}}\left[\left(I_{\mathbf {u} }(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} _{\mathbf {u} }(\mathbf {x} (t),\mathbf {u} (t),t)\right)\mathrm {d} \mathbf {u} (t)+\left(I_{\mathbf {x} }(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} _{\mathbf {x} }(\mathbf {x} (t),\mathbf {u} (t),t)+{\dot {\mathbf {\lambda } }}(t)\right)\mathrm {d} \mathbf {x} (t)\right]\mathrm {d} t-\mathbf {\lambda } ^{\mathsf {T}}(t_{1})\mathrm {d} \mathbf {x} (t_{1})+\mathbf {\lambda } ^{\mathsf {T}}(t_{0})\mathrm {d} \mathbf {x} (t_{0})\leq 0 $$

  

For this expression to equal zero necessitates the following optimality conditions:

  
    
      
        
          
            
              
                
                  
                    
                      
                        
                          I
                          
                            
                              u
                            
                          
                        
                        (
                        
                          x
                        
                        (
                        t
                        )
                        ,
                        
                          u
                        
                        (
                        t
                        )
                        ,
                        t
                        )
                        +
                        
                          
                            λ
                          
                          
                            
                              T
                            
                          
                        
                        (
                        t
                        )
                        
                          
                            f
                          
                          
                            
                              u
                            
                          
                        
                        (
                        
                          x
                        
                        (
                        t
                        )
                        ,
                        
                          u
                        
                        (
                        t
                        )
                        ,
                        t
                        )
                      
                      ⏟
                    
                  
                  
                    =
                    
                      
                        
                          ∂
                          H
                          (
                          
                            x
                          
                          (
                          t
                          )
                          ,
                          
                            u
                          
                          (
                          t
                          )
                          ,
                          
                            λ
                          
                          (
                          t
                          )
                          ,
                          t
                          )
                        
                        
                          ∂
                          
                            u
                          
                        
                      
                    
                  
                
              
              
                
                =
                0
              
            
            
              
                
                  
                    
                      
                        
                          I
                          
                            
                              x
                            
                          
                        
                        (
                        
                          x
                        
                        (
                        t
                        )
                        ,
                        
                          u
                        
                        (
                        t
                        )
                        ,
                        t
                        )
                        +
                        
                          
                            λ
                          
                          
                            
                              T
                            
                          
                        
                        (
                        t
                        )
                        
                          
                            f
                          
                          
                            
                              x
                            
                          
                        
                        (
                        
                          x
                        
                        (
                        t
                        )
                        ,
                        
                          u
                        
                        (
                        t
                        )
                        ,
                        t
                        )
                      
                      ⏟
                    
                  
                  
                    =
                    
                      
                        
                          ∂
                          H
                          (
                          
                            x
                          
                          (
                          t
                          )
                          ,
                          
                            u
                          
                          (
                          t
                          )
                          ,
                          
                            λ
                          
                          (
                          t
                          )
                          ,
                          t
                          )
                        
                        
                          ∂
                          
                            x
                          
                        
                      
                    
                  
                
                +
                
                  
                    
                      
                        λ
                      
                      ˙
                    
                  
                
                (
                t
                )
              
              
                
                =
                0
              
            
          
        
      
    
    

$$ {\begin{aligned}\underbrace {I_{\mathbf {u} }(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} _{\mathbf {u} }(\mathbf {x} (t),\mathbf {u} (t),t)} _{={\frac {\partial H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t)}{\partial \mathbf {u} }}}&=0\\\underbrace {I_{\mathbf {x} }(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} _{\mathbf {x} }(\mathbf {x} (t),\mathbf {u} (t),t)} _{={\frac {\partial H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t)}{\partial \mathbf {x} }}}+{\dot {\mathbf {\lambda } }}(t)&=0\end{aligned}} $$

  

If both the initial value 
  
    
      
        
          x
        
        (
        
          t
          
            0
          
        
        )
      
    
    

$$ \mathbf {x} (t_{0}) $$

  
 and terminal value 
  
    
      
        
          x
        
        (
        
          t
          
            1
          
        
        )
      
    
    

$$ \mathbf {x} (t_{1}) $$

  
 are fixed, i.e. 
  
    
      
        
          d
        
        
          x
        
        (
        
          t
          
            0
          
        
        )
        =
        
          d
        
        
          x
        
        (
        
          t
          
            1
          
        
        )
        =
        0
      
    
    

$$ \mathrm {d} \mathbf {x} (t_{0})=\mathrm {d} \mathbf {x} (t_{1})=0 $$

  
, no conditions on 
  
    
      
        
          λ
        
        (
        
          t
          
            0
          
        
        )
      
    
    

$$ \mathbf {\lambda } (t_{0}) $$

  
 and 
  
    
      
        
          λ
        
        (
        
          t
          
            1
          
        
        )
      
    
    

$$ \mathbf {\lambda } (t_{1}) $$

  
 are needed. If the terminal value is free, as is often the case, the additional condition 
  
    
      
        
          λ
        
        (
        
          t
          
            1
          
        
        )
        =
        0
      
    
    

$$ \mathbf {\lambda } (t_{1})=0 $$

  
 is necessary for optimality. The latter is called a transversality condition for a fixed horizon problem.
It can be seen that the necessary conditions are identical to the ones stated above for the Hamiltonian. Thus the Hamiltonian can be understood as a device to generate the first-order necessary conditions.

## The Hamiltonian in discrete time

When the problem is formulated in discrete time, the Hamiltonian is defined as:

  
    
      
        H
        (
        
          x
          
            t
          
        
        ,
        
          u
          
            t
          
        
        ,
        
          λ
          
            t
            +
            1
          
        
        ,
        t
        )
        =
        
          λ
          
            t
            +
            1
          
          
            ⊤
          
        
        f
        (
        
          x
          
            t
          
        
        ,
        
          u
          
            t
          
        
        ,
        t
        )
        +
        I
        (
        
          x
          
            t
          
        
        ,
        
          u
          
            t
          
        
        ,
        t
        )
        
      
    
    

$$ H(x_{t},u_{t},\lambda _{t+1},t)=\lambda _{t+1}^{\top }f(x_{t},u_{t},t)+I(x_{t},u_{t},t)\, $$

  

and the costate equations are

  
    
      
        
          λ
          
            t
          
        
        =
        
          
            
              ∂
              H
            
            
              ∂
              
                x
                
                  t
                
              
            
          
        
      
    
    

$$ \lambda _{t}={\frac {\partial H}{\partial x_{t}}} $$

  

(Note that the discrete time Hamiltonian at time 
  
    
      
        t
      
    
    

$$ t $$

  
 involves the costate variable at time 
  
    
      
        t
        +
        1.
      
    
    

$$ t+1. $$

  
  This small detail is essential so that when we differentiate with respect to 
  
    
      
        x
      
    
    

$$ x $$

  
 we get a term involving 
  
    
      
        
          λ
          
            t
            +
            1
          
        
      
    
    

$$ \lambda _{t+1} $$

  
 on the right hand side of the costate equations. Using a wrong convention here can lead to incorrect results, i.e. a costate equation which is not a backwards difference equation).

## Behavior of the Hamiltonian over time

From Pontryagin's maximum principle, special conditions for the Hamiltonian can be derived. When the final time 
  
    
      
        
          t
          
            1
          
        
      
    
    

$$ t_{1} $$

  
 is fixed and the Hamiltonian does not depend explicitly on time 
  
    
      
        
          (
          
            
              
                
                  
                    ∂
                    H
                  
                  
                    ∂
                    t
                  
                
              
            
            =
            0
          
          )
        
      
    
    

$$ \left({\tfrac {\partial H}{\partial t}}=0\right) $$

  
, then:

  
    
      
        H
        (
        
          x
          
            ∗
          
        
        (
        t
        )
        ,
        
          u
          
            ∗
          
        
        (
        t
        )
        ,
        
          λ
          
            ∗
          
        
        (
        t
        )
        )
        =
        
          c
          o
          n
          s
          t
          a
          n
          t
        
        
      
    
    

$$ H(x^{*}(t),u^{*}(t),\lambda ^{*}(t))=\mathrm {constant} \, $$

  

or if the terminal time is free, then:

  
    
      
        H
        (
        
          x
          
            ∗
          
        
        (
        t
        )
        ,
        
          u
          
            ∗
          
        
        (
        t
        )
        ,
        
          λ
          
            ∗
          
        
        (
        t
        )
        )
        =
        0.
        
      
    
    

$$ H(x^{*}(t),u^{*}(t),\lambda ^{*}(t))=0.\, $$

  

Further, if the terminal time tends to infinity, a transversality condition on the Hamiltonian applies.

  
    
      
        
          lim
          
            t
            →
            ∞
          
        
        H
        (
        t
        )
        =
        0
      
    
    

$$ \lim _{t\to \infty }H(t)=0 $$

  

## The Hamiltonian of control compared to the Hamiltonian of mechanics

William Rowan Hamilton defined the Hamiltonian for describing the mechanics of a system. It is a function of three variables and related to the Lagrangian as

  
    
      
        
          
            H
          
        
        (
        p
        ,
        q
        ,
        t
        )
        =
        ⟨
        p
        ,
        
          
            
              q
              ˙
            
          
        
        ⟩
        −
        L
        (
        q
        ,
        
          
            
              q
              ˙
            
          
        
        ,
        t
        )
      
    
    

$$ {\mathcal {H}}(p,q,t)=\langle p,{\dot {q}}\rangle -L(q,{\dot {q}},t) $$

  

where 
  
    
      
        L
      
    
    

$$ L $$

  
 is the Lagrangian, the extremizing of which determines the dynamics (not the Lagrangian defined above) and 
  
    
      
        q
      
    
    

$$ q $$

  
 is the state variable. The Lagrangian is evaluated with 
  
    
      
        
          
            
              q
              ˙
            
          
        
      
    
    

$$ {\dot {q}} $$

  
 representing the time derivative of the state's evolution and 
  
    
      
        p
      
    
    

$$ p $$

  
, the so-called "conjugate momentum", relates to it as

  
    
      
        p
        =
        
          
            
              ∂
              L
            
            
              ∂
              
                
                  
                    q
                    ˙
                  
                
              
            
          
        
      
    
    

$$ p={\frac {\partial L}{\partial {\dot {q}}}} $$

  
.
Hamilton then formulated his equations to describe the dynamics of the system as

  
    
      
        
          
            d
            
              d
              t
            
          
        
        p
        (
        t
        )
        =
        −
        
          
            ∂
            
              ∂
              q
            
          
        
        
          
            H
          
        
      
    
    

$$ {\frac {d}{dt}}p(t)=-{\frac {\partial }{\partial q}}{\mathcal {H}} $$

  

  
    
      
        
          
            d
            
              d
              t
            
          
        
        q
        (
        t
        )
        =
         
         
        
          
            ∂
            
              ∂
              p
            
          
        
        
          
            H
          
        
      
    
    

$$ {\frac {d}{dt}}q(t)=~~{\frac {\partial }{\partial p}}{\mathcal {H}} $$

  

The Hamiltonian of control theory describes not the dynamics of a system but conditions for extremizing some scalar function thereof (the Lagrangian) with respect to a control variable 
  
    
      
        u
      
    
    

$$ u $$

  
. As normally defined, it is a function of 4 variables

  
    
      
        H
        (
        q
        ,
        u
        ,
        p
        ,
        t
        )
        =
        ⟨
        p
        ,
        
          
            
              q
              ˙
            
          
        
        ⟩
        −
        L
        (
        q
        ,
        u
        ,
        t
        )
      
    
    

$$ H(q,u,p,t)=\langle p,{\dot {q}}\rangle -L(q,u,t) $$

  

where 
  
    
      
        q
      
    
    

$$ q $$

  
 is the state variable and 
  
    
      
        u
      
    
    

$$ u $$

  
 is the control variable with respect to that which we are extremizing.
The associated conditions for a maximum are

  
    
      
        
          
            
              d
              p
            
            
              d
              t
            
          
        
        =
        −
        
          
            
              ∂
              H
            
            
              ∂
              q
            
          
        
      
    
    

$$ {\frac {dp}{dt}}=-{\frac {\partial H}{\partial q}} $$

  

  
    
      
        
          
            
              d
              q
            
            
              d
              t
            
          
        
        =
         
         
        
          
            
              ∂
              H
            
            
              ∂
              p
            
          
        
      
    
    

$$ {\frac {dq}{dt}}=~~{\frac {\partial H}{\partial p}} $$

  

  
    
      
        
          
            
              ∂
              H
            
            
              ∂
              u
            
          
        
        =
        0
      
    
    

$$ {\frac {\partial H}{\partial u}}=0 $$

  

This definition agrees with that given by the article by Sussmann and Willems. (see p. 39, equation 14). Sussmann and Willems show how the control Hamiltonian can be used in dynamics e.g. for the brachistochrone problem, but do not mention the prior work of Carathéodory on this approach.

## Current value and present value Hamiltonian

In economics, the objective function in dynamic optimization problems often depends directly on time only through exponential discounting, such that it takes the form

  
    
      
        I
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        t
        )
        =
        
          e
          
            −
            ρ
            t
          
        
        ν
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        )
      
    
    

$$ I(\mathbf {x} (t),\mathbf {u} (t),t)=e^{-\rho t}\nu (\mathbf {x} (t),\mathbf {u} (t)) $$

  

where 
  
    
      
        ν
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        )
      
    
    

$$ \nu (\mathbf {x} (t),\mathbf {u} (t)) $$

  
 is referred to as the instantaneous utility function, or felicity function. This allows a redefinition of the Hamiltonian as 
  
    
      
        H
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        
          λ
        
        (
        t
        )
        ,
        t
        )
        =
        
          e
          
            −
            ρ
            t
          
        
        
          
            
              H
              ¯
            
          
        
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        
          λ
        
        (
        t
        )
        )
      
    
    

$$ H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t)=e^{-\rho t}{\bar {H}}(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t)) $$

  
 where

  
    
      
        
          
            
              
                
                  
                    
                      H
                      ¯
                    
                  
                
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                
                  λ
                
                (
                t
                )
                )
                ≡
              
              
                
                
                  e
                  
                    ρ
                    t
                  
                
                
                  [
                  
                    I
                    (
                    
                      x
                    
                    (
                    t
                    )
                    ,
                    
                      u
                    
                    (
                    t
                    )
                    ,
                    t
                    )
                    +
                    
                      
                        λ
                      
                      
                        
                          T
                        
                      
                    
                    (
                    t
                    )
                    
                      f
                    
                    (
                    
                      x
                    
                    (
                    t
                    )
                    ,
                    
                      u
                    
                    (
                    t
                    )
                    ,
                    t
                    )
                  
                  ]
                
              
            
            
              
                =
              
              
                
                ν
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                t
                )
                +
                
                  
                    μ
                  
                  
                    
                      T
                    
                  
                
                (
                t
                )
                
                  f
                
                (
                
                  x
                
                (
                t
                )
                ,
                
                  u
                
                (
                t
                )
                ,
                t
                )
              
            
          
        
      
    
    

$$ {\begin{aligned}{\bar {H}}(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t))\equiv &\,e^{\rho t}\left[I(\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\lambda } ^{\mathsf {T}}(t)\mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t)\right]\\=&\,\nu (\mathbf {x} (t),\mathbf {u} (t),t)+\mathbf {\mu } ^{\mathsf {T}}(t)\mathbf {f} (\mathbf {x} (t),\mathbf {u} (t),t)\end{aligned}} $$

  

which is referred to as the current value Hamiltonian, in contrast to the present value Hamiltonian 
  
    
      
        H
        (
        
          x
        
        (
        t
        )
        ,
        
          u
        
        (
        t
        )
        ,
        
          λ
        
        (
        t
        )
        ,
        t
        )
      
    
    

$$ H(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t),t) $$

  
 defined in the first section. Most notably the costate variables are redefined as 
  
    
      
        
          μ
        
        (
        t
        )
        =
        
          e
          
            ρ
            t
          
        
        
          λ
        
        (
        t
        )
      
    
    

$$ \mathbf {\mu } (t)=e^{\rho t}\mathbf {\lambda } (t) $$

  
, which leads to modified first-order conditions. 

  
    
      
        
          
            
              ∂
              
                
                  
                    H
                    ¯
                  
                
              
              (
              
                x
              
              (
              t
              )
              ,
              
                u
              
              (
              t
              )
              ,
              
                λ
              
              (
              t
              )
              )
            
            
              ∂
              
                u
              
            
          
        
        =
        0
      
    
    

$$ {\frac {\partial {\bar {H}}(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t))}{\partial \mathbf {u} }}=0 $$

  
,

  
    
      
        
          
            
              ∂
              
                
                  
                    H
                    ¯
                  
                
              
              (
              
                x
              
              (
              t
              )
              ,
              
                u
              
              (
              t
              )
              ,
              
                λ
              
              (
              t
              )
              )
            
            
              ∂
              
                x
              
            
          
        
        =
        −
        
          
            
              
                μ
              
              ˙
            
          
        
        (
        t
        )
        +
        ρ
        
          μ
        
        (
        t
        )
      
    
    

$$ {\frac {\partial {\bar {H}}(\mathbf {x} (t),\mathbf {u} (t),\mathbf {\lambda } (t))}{\partial \mathbf {x} }}=-{\dot {\mathbf {\mu } }}(t)+\rho \mathbf {\mu } (t) $$

  

which follows immediately from the product rule. Economically, 
  
    
      
        
          μ
        
        (
        t
        )
      
    
    

$$ \mathbf {\mu } (t) $$

  
 represent current-valued shadow prices for the capital goods 
  
    
      
        
          x
        
        (
        t
        )
      
    
    

$$ \mathbf {x} (t) $$

  
.

## Example: Ramsey–Cass–Koopmans model

In economics, the Ramsey–Cass–Koopmans model is used to determine an optimal savings behavior for an economy. The objective function 
  
    
      
        J
        (
        c
        )
      
    
    

$$ J(c) $$

  
 is the social welfare function,

  
    
      
        J
        (
        c
        )
        =
        
          ∫
          
            0
          
          
            T
          
        
        
          e
          
            −
            ρ
            t
          
        
        u
        (
        c
        (
        t
        )
        )
        d
        t
      
    
    

$$ J(c)=\int _{0}^{T}e^{-\rho t}u(c(t))dt $$

  

to be maximized by choice of an optimal consumption path 
  
    
      
        c
        (
        t
        )
      
    
    

$$ c(t) $$

  
. The function 
  
    
      
        u
        (
        c
        (
        t
        )
        )
      
    
    

$$ u(c(t)) $$

  
 indicates the utility the representative agent of consuming 
  
    
      
        c
      
    
    

$$ c $$

  
 at any given point in time. The factor 
  
    
      
        
          e
          
            −
            ρ
            t
          
        
      
    
    

$$ e^{-\rho t} $$

  
 represents discounting. The maximization problem is subject to the following differential equation for capital intensity, describing the time evolution of capital per effective worker:

  
    
      
        
          
            
              k
              ˙
            
          
        
        =
        
          
            
              ∂
              k
            
            
              ∂
              t
            
          
        
        =
        f
        (
        k
        (
        t
        )
        )
        −
        (
        n
        +
        δ
        )
        k
        (
        t
        )
        −
        c
        (
        t
        )
      
    
    

$$ {\dot {k}}={\frac {\partial k}{\partial t}}=f(k(t))-(n+\delta )k(t)-c(t) $$

  

where 
  
    
      
        c
        (
        t
        )
      
    
    

$$ c(t) $$

  
 is period t consumption, 
  
    
      
        k
        (
        t
        )
      
    
    

$$ k(t) $$

  
 is period t capital per worker (with 
  
    
      
        k
        (
        0
        )
        =
        
          k
          
            0
          
        
        >
        0
      
    
    

$$ k(0)=k_{0}>0 $$

  
), 
  
    
      
        f
        (
        k
        (
        t
        )
        )
      
    
    

$$ f(k(t)) $$

  
 is period t production, 
  
    
      
        n
      
    
    

$$ n $$

  
 is the population growth rate, 
  
    
      
        δ
      
    
    

$$ \delta $$

  
 is the capital depreciation rate, the agent discounts future utility at rate 
  
    
      
        ρ
      
    
    

$$ \rho $$

  
, with 
  
    
      
        
          u
          ′
        
        >
        0
      
    
    

$$ u'>0 $$

  
 and 
  
    
      
        
          u
          ″
        
        <
        0
      
    
    

$$ u''<0 $$

  
.
Here, 
  
    
      
        k
        (
        t
        )
      
    
    

$$ k(t) $$

  
 is the state variable which evolves according to the above equation, and 
  
    
      
        c
        (
        t
        )
      
    
    

$$ c(t) $$

  
 is the control variable. The Hamiltonian becomes

  
    
      
        H
        (
        k
        ,
        c
        ,
        μ
        ,
        t
        )
        =
        
          e
          
            −
            ρ
            t
          
        
        u
        (
        c
        (
        t
        )
        )
        +
        μ
        (
        t
        )
        
          
            
              k
              ˙
            
          
        
        =
        
          e
          
            −
            ρ
            t
          
        
        u
        (
        c
        (
        t
        )
        )
        +
        μ
        (
        t
        )
        [
        f
        (
        k
        (
        t
        )
        )
        −
        (
        n
        +
        δ
        )
        k
        (
        t
        )
        −
        c
        (
        t
        )
        ]
      
    
    

$$ H(k,c,\mu ,t)=e^{-\rho t}u(c(t))+\mu (t){\dot {k}}=e^{-\rho t}u(c(t))+\mu (t)[f(k(t))-(n+\delta )k(t)-c(t)] $$

  

The optimality conditions are

  
    
      
        
          
            
              ∂
              H
            
            
              ∂
              c
            
          
        
        =
        0
        ⇒
        
          e
          
            −
            ρ
            t
          
        
        
          u
          ′
        
        (
        c
        )
        =
        μ
        (
        t
        )
      
    
    

$$ {\frac {\partial H}{\partial c}}=0\Rightarrow e^{-\rho t}u'(c)=\mu (t) $$

  

  
    
      
        
          
            
              ∂
              H
            
            
              ∂
              k
            
          
        
        =
        −
        
          
            
              ∂
              μ
            
            
              ∂
              t
            
          
        
        =
        −
        
          
            
              μ
              ˙
            
          
        
        ⇒
        μ
        (
        t
        )
        [
        
          f
          ′
        
        (
        k
        )
        −
        (
        n
        +
        δ
        )
        ]
        =
        −
        
          
            
              μ
              ˙
            
          
        
      
    
    

$$ {\frac {\partial H}{\partial k}}=-{\frac {\partial \mu }{\partial t}}=-{\dot {\mu }}\Rightarrow \mu (t)[f'(k)-(n+\delta )]=-{\dot {\mu }} $$

  

in addition to the transversality condition 
  
    
      
        μ
        (
        T
        )
        k
        (
        T
        )
        =
        0
      
    
    

$$ \mu (T)k(T)=0 $$

  
. If we let 
  
    
      
        u
        (
        c
        )
        =
        log
        ⁡
        (
        c
        )
      
    
    

$$ u(c)=\log(c) $$

  
, then log-differentiating the first optimality condition with respect to 
  
    
      
        t
      
    
    

$$ t $$

  
 yields

  
    
      
        −
        ρ
        −
        
          
            
              
                c
                ˙
              
            
            
              c
              (
              t
              )
            
          
        
        =
        
          
            
              
                μ
                ˙
              
            
            
              μ
              (
              t
              )
            
          
        
      
    
    

$$ -\rho -{\frac {\dot {c}}{c(t)}}={\frac {\dot {\mu }}{\mu (t)}} $$

  

Inserting this equation into the second optimality condition yields

  
    
      
        ρ
        +
        
          
            
              
                c
                ˙
              
            
            
              c
              (
              t
              )
            
          
        
        =
        
          f
          ′
        
        (
        k
        )
        −
        (
        n
        +
        δ
        )
      
    
    

$$ \rho +{\frac {\dot {c}}{c(t)}}=f'(k)-(n+\delta ) $$

  

which is known as the Keynes–Ramsey rule, which gives a condition for consumption in every period which, if followed, ensures maximum lifetime utility.