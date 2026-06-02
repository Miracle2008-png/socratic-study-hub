# Model predictive control

Model predictive control (MPC) is an advanced method of process control that is used to control a process while satisfying a set of constraints.  Model predictive controllers rely on dynamic models of the process, most often linear empirical models obtained by system identification. The main advantage of MPC is the fact that it allows the current timeslot to be optimized, while keeping future timeslots in account. This is achieved by optimizing a finite time-horizon, but only implementing the current timeslot and then optimizing again, repeatedly, thus differing from a linear–quadratic regulator (LQR). Also MPC has the ability to anticipate future events and can take control actions accordingly. PID controllers do not have this predictive ability. MPC is nearly universally implemented as a digital control, although there is research into achieving faster response times with specially designed analog circuitry.

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
