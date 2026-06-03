# Nonlinear control

Nonlinear control theory is an area of control theory which deals with systems that are nonlinear, time-variant, or both.  Control theory is an interdisciplinary branch of engineering and mathematics that is concerned with the behavior of dynamical systems with inputs, and how to modify the output by changes in the input using feedback, feedforward, or signal filtering.  The system to be controlled is called the "plant". One way to make the output of a system follow a desired reference signal is to compare the output of the plant to the desired output, and provide feedback to the plant to modify the output to bring it closer to the desired output.  

## Properties of nonlinear systems

Some properties of nonlinear dynamic systems are

They do not follow the principle of superposition (linearity and homogeneity).

They may have multiple isolated equilibrium points.

They may exhibit properties such as limit cycle, bifurcation, chaos.

Finite escape time: Solutions of nonlinear systems may not exist for all times.

## Analysis and control of nonlinear systems

There are several well-developed techniques for analyzing nonlinear feedback systems (see, e.g.,  and ):

Describing function method

Phase plane method

Lyapunov stability analysis

Singular perturbation method

The Popov criterion and the circle criterion for absolute stability

Center manifold theorem

Small-gain theorem

Passivity analysis

Control design techniques for nonlinear systems also exist. These can be subdivided into techniques which attempt to treat the system as a linear system in a limited range of operation and use (well-known) linear design techniques for each region:

Gain scheduling

Those that attempt to introduce auxiliary nonlinear feedback in such a way that the system can be treated as linear for purposes of control design:

Feedback linearization

And Lyapunov based methods:

Lyapunov redesign

Control-Lyapunov function

Nonlinear damping

Backstepping

Sliding mode control

## Nonlinear feedback analysis – The Lur'e problem

An early nonlinear feedback system analysis problem was formulated by A. I. Lur'e.

Control systems described by the Lur'e problem have a forward path that is linear and time-invariant, and a feedback path that contains a memory-less, possibly time-varying, static nonlinearity.

The linear part can be characterized by four matrices (A,B,C,D), while the nonlinear part is Φ(y) with 

{\displaystyle {\frac {\Phi (y)}{y}}\in [a,b],\quad a<b\quad \forall y}
 (a sector nonlinearity).

### Absolute stability problem
Consider:

(A,B) is controllable and (C,A) is observable

two real numbers a, b with a < b, defining a sector for function Φ

The Lur'e problem (also known as the absolute stability problem) is to derive conditions involving only the transfer matrix H(s) and {a,b} such that x = 0 is a globally uniformly asymptotically stable equilibrium of the system. 

There are two well-known wrong conjectures on the absolute stability problem:

The Aizerman's conjecture

The Kalman's conjecture.

Graphically, these conjectures can be interpreted in terms of graphical restrictions on the graph of Φ(y) x y or also on the graph of dΦ/dy x Φ/y. There are counterexamples to Aizerman's and Kalman's conjectures such that nonlinearity belongs to the sector of linear stability and unique stable equilibrium coexists with a stable periodic solution—hidden oscillation.

There are two main theorems concerning the Lur'e problem which give sufficient conditions for absolute stability:

The circle criterion (an extension of the Nyquist stability criterion for linear systems)

The Popov criterion.

## Theoretical results in nonlinear control

### Frobenius theorem
The Frobenius theorem is a deep result in differential geometry. When applied to nonlinear control, it says the following: Given a system of the form

{\displaystyle {\dot {x}}=\sum _{i=1}^{k}f_{i}(x)u_{i}(t)\,}

where 

{\displaystyle x\in R^{n}}
,  

{\displaystyle f_{1},\dots ,f_{k}}
 are vector fields belonging to a distribution 
{\displaystyle \Delta }
 and 

{\displaystyle u_{i}(t)}
 are control functions, the integral curves of 
 are restricted to a manifold of dimension 
 if 

{\displaystyle \operatorname {span} (\Delta )=m}
 and 
{\displaystyle \Delta }
 is an involutive distribution.
