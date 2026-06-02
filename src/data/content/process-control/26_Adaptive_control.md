# Adaptive control

Adaptive control is the control method used by a controller which must adapt to a controlled system with parameters which vary, or are initially uncertain. For example, as an aircraft flies, its mass will slowly decrease as a result of fuel consumption; a control law is needed that adapts itself to such changing conditions. Adaptive control is different from robust control in that it does not need a priori information about the bounds on these uncertain or time-varying parameters; robust control guarantees that if the changes are within given bounds the control law need not be changed, while adaptive control is concerned with control law changing itself.

## Parameter estimation

The foundation of adaptive control is parameter estimation, which is a branch of system identification. Common methods of estimation include recursive least squares and gradient descent. Both of these methods provide update laws that are used to modify estimates in real-time (i.e., as the system operates). Lyapunov stability is used to derive these update laws and show convergence criteria (typically persistent excitation; relaxation of this condition are studied in Concurrent Learning adaptive control). Projection and normalization are commonly used to improve the robustness of estimation algorithms.

## Classification of adaptive control techniques

In general, one should distinguish between:

Feedforward adaptive control
Feedback adaptive control
as well as between

Direct methods
Indirect methods
Hybrid methods
Direct methods are ones wherein the estimated parameters are those directly used in the adaptive controller. In contrast, indirect methods are those in which the estimated parameters are used to calculate required controller parameters. Hybrid methods rely on both estimation of parameters and direct modification of the control law.

There are several broad categories of feedback adaptive control (classification can vary):

Dual adaptive controllers – based on dual control theory
Optimal dual controllers – difficult to design
Suboptimal dual controllers
Nondual adaptive controllers
Adaptive pole placement
Extremum-seeking controllers
Iterative learning control
Gain scheduling
Model reference adaptive controllers (MRACs) – incorporate a reference model defining desired closed loop performance
Gradient optimization MRACs – use local rule for adjusting params when performance differs from reference. Ex.: "MIT rule".
Stability optimized MRACs
Model identification adaptive controllers (MIACs) – perform system identification while the system is running
Cautious adaptive controllers – use current SI to modify control law, allowing for SI uncertainty
Certainty equivalent adaptive controllers – take current SI to be the true system, assume no uncertainty
Nonparametric adaptive controllers
Parametric adaptive controllers
Explicit parameter adaptive controllers
Implicit parameter adaptive controllers
Multiple models – Use large number of models, which are distributed in the region of uncertainty, and based on the responses of the plant and the models. One model is chosen at every instant, which is closest to the plant according to some metric.

Some special topics in adaptive control can be introduced as well:

Adaptive control based on discrete-time process identification
Adaptive control based on the model reference control technique
Adaptive control based on continuous-time process models
Adaptive control of multivariable processes
Adaptive control of nonlinear processes
Concurrent learning adaptive control, which relaxes the condition on persistent excitation for parameter convergence for a class of systems
In recent times, adaptive control has been merged with intelligent techniques such as fuzzy and neural networks to bring forth new concepts such as fuzzy adaptive control.
