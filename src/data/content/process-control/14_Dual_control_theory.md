# Dual control theory

Dual control theory is a branch of control theory that deals with the control of systems whose characteristics are initially unknown.  It is called dual because in controlling such a system the controller's objectives are twofold: 

(1) Action: To control the system as well as possible based on current system knowledge
(2) Investigation: To experiment with the system so as to learn about its behavior and control it better in the future.
These two objectives may be partly in conflict.
In the context of reinforcement learning, this is known as the exploration-exploitation trade-off  (e.g. Multi-armed bandit#Empirical motivation).
Dual control theory was developed by Alexander Aronovich Fel'dbaum in 1960.  He showed that in principle the optimal solution can be found by dynamic programming, but this is often impractical; as a result a number of methods for designing sub-optimal dual controllers have been devised.


## Example
To use an analogy: if you are driving a new car you want to get to your destination cheaply and smoothly, but you also want to see how well the car accelerates, brakes and steers so as to get a better feel for how to drive it, so you will do some test manoeuvers for this purpose.  Similarly a dual controller will inject a so-called probing (or exploration) signal into the system that may detract from short-term performance but will improve control in the future.

