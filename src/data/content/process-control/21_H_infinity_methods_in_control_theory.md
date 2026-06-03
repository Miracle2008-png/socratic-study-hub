# H-infinity methods in control theory

H∞ (i.e. "H-infinity") methods are used in control theory to synthesize controllers to achieve stabilization with guaranteed performance.  To use H∞ methods, a control designer expresses the control problem as a mathematical optimization problem and then finds the controller that solves this optimization.  H∞ techniques have the advantage over classical control techniques in that H∞ techniques are readily applicable to problems involving multivariate systems with cross-coupling between channels; disadvantages of H∞ techniques include the level of mathematical understanding needed to apply them successfully and the need for a reasonably good model of the system to be controlled.  It is important to keep in mind that the resulting controller is only optimal with respect to the prescribed cost function and does not necessarily represent the best controller in terms of the usual performance measures used to evaluate controllers such as settling time, energy expended, etc. Also, non-linear constraints such as saturation are generally not well-handled. These methods were introduced into control theory in the late 1970s-early 1980s

## Problem formulation
First, the process has to be represented according to the following standard configuration:

The plant P has two inputs, the exogenous input w, that includes reference signal and disturbances, and the manipulated variables u. There are two outputs, the error signals z that we want to minimize, and the measured variables v, that we use to control the system. v is used in K to calculate the manipulated variables u. Notice that all these are generally vectors, whereas P and K are matrices.

In formulae, the system is:

{\displaystyle {\begin{bmatrix}z\\v\end{bmatrix}}=\mathbf {P} (s)\,{\begin{bmatrix}w\\u\end{bmatrix}}={\begin{bmatrix}P_{11}(s)&P_{12}(s)\\P_{21}(s)&P_{22}(s)\end{bmatrix}}\,{\begin{bmatrix}w\\u\end{bmatrix}}}

{\displaystyle u=\mathbf {K} (s)\,v}

It is therefore possible to express the dependency of z on w as:

{\displaystyle z=F_{\ell }(\mathbf {P} ,\mathbf {K} )\,w}

Called the lower linear fractional transformation,  
{\displaystyle F_{\ell }}
 is defined (the subscript comes from lower):

{\displaystyle F_{\ell }(\mathbf {P} ,\mathbf {K} )=P_{11}+P_{12}\,\mathbf {K} \,(I-P_{22}\,\mathbf {K} )^{-1}\,P_{21}}

Therefore, the objective of 
{\displaystyle {\mathcal {H}}_{\infty }}
 control design is to find a controller 
{\displaystyle \mathbf {K} }
 such that 
{\displaystyle F_{\ell }(\mathbf {P} ,\mathbf {K} )}
 is minimised according to the 
{\displaystyle {\mathcal {H}}_{\infty }}
 norm. The same definition applies to 
{\displaystyle {\mathcal {H}}_{2}}
 control design. The infinity norm of the transfer function matrix 
{\displaystyle F_{\ell }(\mathbf {P} ,\mathbf {K} )}
 is defined as:

{\displaystyle ||F_{\ell }(\mathbf {P} ,\mathbf {K} )||_{\infty }=\sup _{\omega }{\bar {\sigma }}(F_{\ell }(\mathbf {P} ,\mathbf {K} )(j\omega ))}

where 

{\displaystyle {\bar {\sigma }}}
 is the maximum singular value of the matrix 

{\displaystyle F_{\ell }(\mathbf {P} ,\mathbf {K} )(j\omega )}
.

The achievable H∞ norm of the closed loop system is mainly given through the matrix D11 (when the system P is given in the form (A, B1, B2, C1, C2, D11, D12, D22, D21)). There are several ways to come to an H∞ controller:

A Youla-Kucera parametrization of the closed loop often leads to very high-order controller.

Riccati-based approaches solve two Riccati equations to find the controller, but require several simplifying assumptions.

An optimization-based reformulation of the Riccati equation uses linear matrix inequalities and requires fewer assumptions.
