# Model predictive control

Model predictive control (MPC) is an advanced method of process control that is used to control a process while satisfying a set of constraints.  Model predictive controllers rely on dynamic models of the process, most often linear empirical models obtained by system identification. The main advantage of MPC is the fact that it allows the current timeslot to be optimized, while keeping future timeslots in account. This is achieved by optimizing a finite time-horizon, but only implementing the current timeslot and then optimizing again, repeatedly, thus differing from a linear–quadratic regulator (LQR). Also MPC has the ability to anticipate future events and can take control actions accordingly. PID controllers do not have this predictive ability. MPC is nearly universally implemented as a digital control, although there is research into achieving faster response times with specially designed analog circuitry.
It has been in use in the process industries in chemical plants and oil refineries since the 1980s. In recent years it has also been used in power system balancing models and in power electronics.
Generalized predictive control (GPC) and dynamic matrix control (DMC) are classical examples of MPC.


## Overview

The models used in MPC are generally intended to represent the behavior of complex and simple dynamical systems. The additional complexity of the MPC control algorithm is not generally needed to provide adequate control of simple systems, which are often controlled well by generic PID controllers. Common dynamic characteristics that are difficult for PID controllers include large time delays and high-order dynamics.
MPC models predict the change in the dependent variables of the modeled system that will be caused by changes in the independent variables. In a chemical process, independent variables that can be adjusted by the controller are often either the setpoints of regulatory PID controllers (pressure, flow, temperature, etc.) or the final control element (valves, dampers, etc.). Independent variables that cannot be adjusted by the controller are used as disturbances. Dependent variables in these processes are other measurements that represent either control objectives or process constraints.
MPC uses the current plant measurements, the current dynamic state of the process, the MPC models, and the process variable targets and limits to calculate future changes in the dependent variables. These changes are calculated to hold the dependent variables close to target while honoring constraints on both independent and dependent variables. The MPC typically sends out only the first change in each independent variable to be implemented, and repeats the calculation when the next change is required.
While many real processes are not linear, they can often be considered to be approximately linear over a small operating range. Linear MPC approaches are used in the majority of applications with the feedback mechanism of the MPC compensating for prediction errors due to structural mismatch between the model and the process.  In model predictive controllers that consist only of linear models, the superposition principle of linear algebra enables the effect of changes in multiple independent variables to be added together to predict the response of the dependent variables.  This simplifies the control problem to a series of direct matrix algebra calculations that are fast and robust.
When linear models are not sufficiently accurate to represent the real process nonlinearities, several approaches can be used. In some cases, the process variables can be transformed before and/or after the linear MPC model to reduce the nonlinearity. The process can be controlled with nonlinear MPC that uses a nonlinear model directly in the control application.  The nonlinear model may be in the form of an empirical data fit (e.g. artificial neural networks) or a high-fidelity dynamic model based on fundamental mass and energy balances. The nonlinear model may be linearized to derive a Kalman filter or specify a model for linear MPC.


### Theory behind MPC
 MPC is based on iterative, finite-horizon optimization of a plant model.  At time 
  
    
      
        t
      
    
    {\displaystyle t}
  
 the current plant state is sampled and a cost minimizing control strategy is computed (via a numerical minimization algorithm) for a relatively short time horizon in the future: 
  
    
      
        [
        t
        ,
        t
        +
        T
        ]
      
    
    {\displaystyle [t,t+T]}
  
.  Specifically, an online or on-the-fly calculation is used to explore state trajectories that emanate from the current state and find (via the solution of Euler–Lagrange equations) a cost-minimizing control strategy until time 
  
    
      
        t
        +
        T
      
    
    {\displaystyle t+T}
  
. Only the first step of the control strategy is implemented, then the plant state is sampled again and the calculations are repeated starting from the new current state, yielding a new control and new predicted state path. The prediction horizon keeps being shifted forward and for this reason MPC is also called receding horizon control.  Although this approach is not optimal, in practice it has given very good results. Much academic research has been done to find fast methods of solution of Euler–Lagrange type equations, to understand the global stability properties of MPC's local optimization, and in general to improve the MPC method.


### Principles of MPC
Model predictive control is a multivariable control algorithm that uses:

an internal dynamic model of the process
a cost function J over the receding horizon
an optimization algorithm minimizing the cost function J using the control input u
An example of a quadratic cost function for optimization is given by:

  
    
      
        J
        =
        
          ∑
          
            i
            =
            1
          
          
            N
          
        
        
          w
          
            
              x
              
                i
              
            
          
        
        (
        
          r
          
            i
          
        
        −
        
          x
          
            i
          
        
        
          )
          
            2
          
        
        +
        
          ∑
          
            i
            =
            1
          
          
            M
          
        
        
          w
          
            
              u
              
                i
              
            
          
        
        
          
            Δ
            
              u
              
                i
              
            
          
          
            2
          
        
      
    
    {\displaystyle J=\sum _{i=1}^{N}w_{x_{i}}(r_{i}-x_{i})^{2}+\sum _{i=1}^{M}w_{u_{i}}{\Delta u_{i}}^{2}}
  

without violating constraints (low/high limits) with

  
    
      
        
          x
          
            i
          
        
      
    
    {\displaystyle x_{i}}
  
: 
  
    
      
        i
      
    
    {\displaystyle i}
  
th controlled variable (e.g. measured temperature)

  
    
      
        
          r
          
            i
          
        
      
    
    {\displaystyle r_{i}}
  
: 
  
    
      
        i
      
    
    {\displaystyle i}
  
th reference variable (e.g. required temperature)

  
    
      
        
          u
          
            i
          
        
      
    
    {\displaystyle u_{i}}
  
: 
  
    
      
        i
      
    
    {\displaystyle i}
  
th manipulated variable (e.g. control valve)

  
    
      
        
          w
          
            
              x
              
                i
              
            
          
        
      
    
    {\displaystyle w_{x_{i}}}
  
: weighting coefficient reflecting the relative importance of 
  
    
      
        
          x
          
            i
          
        
      
    
    {\displaystyle x_{i}}
  

  
    
      
        
          w
          
            
              u
              
                i
              
            
          
        
      
    
    {\displaystyle w_{u_{i}}}
  
: weighting coefficient penalizing relative big changes in 
  
    
      
        
          u
          
            i
          
        
      
    
    {\displaystyle u_{i}}
  

etc.


## Nonlinear MPC
Nonlinear model predictive control, or NMPC, is a variant of model predictive control that is characterized by the use of nonlinear system models in the prediction. As in linear MPC, NMPC requires the iterative solution of optimal control problems on a finite prediction horizon. While these problems are convex in linear MPC, in nonlinear MPC they are not necessarily convex anymore. This poses challenges for both NMPC stability theory and numerical solution.
The numerical solution of the NMPC optimal control problems is typically based on direct optimal control methods using Newton-type optimization schemes, in one of the variants: direct single shooting, direct multiple shooting methods, or direct collocation. NMPC algorithms typically exploit the fact that consecutive optimal control problems are similar to each other. This allows to initialize the Newton-type solution procedure efficiently by a suitably shifted guess from the previously computed optimal solution, saving considerable amounts of computation time. The similarity of subsequent problems is even further exploited by path following algorithms (or "real-time iterations") that never attempt to iterate any optimization problem to convergence, but instead only take a few iterations towards the solution of the most current NMPC problem, before proceeding to the next one, which is suitably initialized; see, e.g.,.. Another promising candidate for the nonlinear optimization problem is to use a randomized optimization method. Optimum solutions are found by generating random samples that satisfy the constraints in the solution space and finding the optimum one based on cost function.
While NMPC applications have in the past been mostly used in the process and chemical industries with comparatively slow sampling rates, NMPC is being increasingly applied, with advancements in controller hardware and computational algorithms, e.g., preconditioning, to applications with high sampling rates, e.g., in the automotive industry, or even when the states are distributed in space (Distributed parameter systems). As an application in aerospace, recently, NMPC has been used to track optimal terrain-following/avoidance trajectories in real-time.


## Explicit MPC
Explicit MPC (eMPC) allows fast evaluation of the control law for some systems, in stark contrast to the online MPC. Explicit MPC is based on the parametric programming technique, where the solution to the MPC control problem formulated as optimization problem is pre-computed offline. This offline solution, i.e., the control law, is often in the form of a piecewise affine function (PWA), hence the eMPC controller stores the coefficients of the PWA for each a subset (control region) of the state space, where the PWA is constant, as well as coefficients of some parametric representations of all the regions. Every region turns out to geometrically be a convex polytope for linear MPC, commonly parameterized by coefficients for its faces, requiring quantization accuracy analysis. Obtaining the optimal control action is then reduced to first determining the region containing the current state and second a mere evaluation of PWA using the PWA coefficients stored for all regions. If the total number of the regions is small, the implementation of the eMPC does not require significant computational resources (compared to the online MPC) and is uniquely suited to control systems with fast dynamics. A serious drawback of eMPC is exponential growth of the total number of the control regions with respect to some key parameters of the controlled system, e.g., the number of states, thus dramatically increasing controller memory requirements and making the first step of PWA evaluation, i.e. searching for the current control region, computationally expensive.


## Robust MPC
Robust variants of model predictive control are able to account for set bounded disturbance while still ensuring state constraints are met. Some of the main approaches to robust MPC are given below.

Min-max MPC. In this formulation, the optimization is performed with respect to all possible evolutions of the disturbance. This is the optimal solution to linear robust control problems, however it carries a high computational cost. The basic idea behind the min/max MPC approach is to modify the on-line "min" optimization to a "min-max" problem, minimizing the worst case of the objective function, maximized over all possible plants from the uncertainty set.
Constraint Tightening MPC. Here the state constraints are enlarged by a given margin so that a trajectory can be guaranteed to be found under any evolution of disturbance.
Tube MPC. This uses an independent nominal model of the system, and uses a feedback controller to ensure the actual state converges to the nominal state. The amount of separation required from the state constraints is determined by the robust positively invariant (RPI) set, which is the set of all possible state deviations that may be introduced by disturbance with the feedback controller.
Multi-stage MPC. This uses a scenario-tree formulation by approximating the uncertainty space with a set of samples and the approach is non-conservative because it takes into account that the measurement information is available at every time stage in the prediction and the decisions at every stage can be different and can act as recourse to counteract the effects of uncertainties. The drawback of the approach however is that the size of the problem grows exponentially with the number of uncertainties and the prediction horizon.
Tube-enhanced multi-stage MPC. This approach synergizes multi-stage MPC and tube-based MPC. It provides high degrees of freedom to choose the desired trade-off between optimality and simplicity by the classification of uncertainties and the choice of control laws in the predictions.


## MPC software
Commercial MPC packages are available and typically contain tools for model identification and analysis, controller design and tuning, as well as controller performance evaluation.
A survey of commercially available packages has been provided by S.J. Qin and T.A. Badgwell in Control Engineering Practice 11 (2003) 733–764.
Freely available open-source software packages for (nonlinear) model predictive control include among others:

Rockit (Rapid Optimal Control kit) — a software framework to quickly prototype optimal control problems.
acados — a software framework providing fast and embedded solvers for nonlinear optimal control.
GRAMPC — a nonlinear MPC framework that is suitable for dynamical systems with sampling times in the (sub)millisecond range and that allows for an efficient implementation on embedded hardware.
CControl - a control engineering linear algebra library with MPC and Kalman filtering for embedded and low cost microcontrollers


## MPC vs. LQR
Model predictive control and linear-quadratic regulators are both expressions of optimal control, with different schemes of setting up optimisation costs.
While a model predictive controller often looks at fixed length, often graduatingly weighted sets of error functions, the linear-quadratic regulator looks at all linear system inputs and provides the transfer function that will reduce the total error across the frequency spectrum, trading off state error against input frequency.
Due to these fundamental differences, LQR has better global stability properties, but MPC often has more locally optimal[?] and complex performance.
The main differences between MPC and LQR are that LQR optimizes across the entire time window (horizon) whereas MPC optimizes in a receding time window, and that with MPC a new solution is computed often whereas LQR uses the same single (optimal) solution for the whole time horizon. Therefore, MPC typically solves the optimization problem in a smaller time window than the whole horizon and hence may obtain a suboptimal solution. However, because MPC makes no assumptions about linearity, it can handle hard constraints as well as migration of a nonlinear system away from its linearized operating point, both of which are major drawbacks to LQR.
This means that LQR can become weak when operating away from stable fixed points. MPC can chart a path between these fixed points, but convergence of a solution is not guaranteed, especially if thought as to the convexity and complexity of the problem space has been neglected.


## See also
Control engineering
Control theory
Feed-forward
System identification


## References


## Further reading
Kwon, Wook Hyun; Bruckstein, Alfred M.; Kailath, Thomas (1983). "Stabilizing state feedback design via the moving horizon method". International Journal of Control. 37 (3): 631–643. doi:10.1080/00207178308932998.
Garcia, Carlos E.; Prett, David M.; Morari, Manfred (1989). "Model predictive control: theory and practice". Automatica. 25 (3): 335–348. doi:10.1016/0005-1098(89)90002-2.
Findeisen, Rolf; Allgöwer, Frank (2001). "An introduction to nonlinear model predictive control". Summerschool on "The Impact of Optimization in Control", Dutch Institute of Systems and Control, C. W. Scherer and J. M. Schumacher, Editors: 3.1 – 3.45.
Mayne, David Q.; Michalska, Hannah (1990). "Receding horizon control of nonlinear systems". IEEE Transactions on Automatic Control. 35 (7): 814–824. doi:10.1109/9.57020.
Mayne, David Q.; Rawlings, James B.; Rao, Christopher V.; Scokaert, Pierre O. M. (2000). "Constrained model predictive control: stability and optimality". Automatica. 36 (6): 789–814. doi:10.1016/S0005-1098(99)00214-9.
Allgöwer, Frank; Zheng, Alex, eds. (2000). Nonlinear model predictive control. Progress in Systems Theory. Vol. 26. Birkhauser.
Camacho; Bordons (2004). Model predictive control. Springer Verlag.
Findeisen, Rolf; Allgöwer, Frank; Biegler, Lorenz T. (2006). Assessment and Future Directions of Nonlinear Model Predictive Control. Lecture Notes in Control and Information Sciences. Vol. 26. Springer.
Diehl, Moritz M.; Bock, H. Georg; Schlöder, Johannes P.; Findeisen, Rolf; Nagy, Zoltan; Allgöwer, Frank (2002). "Real-time optimization and Nonlinear Model Predictive Control of Processes governed by differential-algebraic equations". Journal of Process Control. 12 (4): 577–585. doi:10.1016/S0959-1524(01)00023-3.
Rawlings, James B.; Mayne, David Q.; and Diehl, Moritz M.; Model Predictive Control: Theory, Computation, and Design (2nd Ed.), Nob Hill Publishing, LLC, ISBN 978-0975937730 (Oct 2017)
Geyer, Tobias; Model predictive control of high power converters and industrial drives, Wiley, London, ISBN 978-1-119-01090-6, Nov 2016


## External links
Case Study. Lancaster Waste Water Treatment Works, optimisation by means of Model Predictive Control from Perceptive Engineering
acados - Open-source framework for (nonlinear) model predictive control providing fast and embedded solvers for nonlinear optimization. (C, MATLAB and Python interface available)
μAO-MPC - Open Source Software package that generates tailored code for  model predictive controllers on embedded systems in highly portable C code.
GRAMPC - Open source software framework for embedded nonlinear model predictive control using a gradient-based augmented Lagrangian method. (Plain C code, no code generation, MATLAB interface)
jMPC Toolbox - Open Source MATLAB Toolbox for Linear MPC.
Study on application of NMPC to superfluid cryogenics (PhD Project).
Nonlinear Model Predictive Control Toolbox for MATLAB and Python
Model Predictive Control Toolbox from MathWorks for design and simulation of model predictive controllers in MATLAB and Simulink
Pulse step model predictive controller - virtual simulator
Tutorial on MPC with Excel and MATLAB Examples
GEKKO: Model Predictive Control in Python