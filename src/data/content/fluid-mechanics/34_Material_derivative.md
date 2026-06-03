# Material derivative

In continuum mechanics, the material derivative describes the time rate of change of some physical quantity (like heat or momentum) of a material element that is subjected to a space-and-time-dependent macroscopic velocity field. The material derivative can serve as a link between Eulerian and Lagrangian descriptions of continuum deformation.

## Other names

There are many other names for the material derivative, including:

advective derivative

convective derivative

derivative following the motion

hydrodynamic derivative

Lagrangian derivative

particle derivative

substantial derivative

substantive derivative

Stokes derivative

total derivative, although the material derivative is actually a special case of the total derivative

## Definition

The material derivative is defined for any tensor field $y$ that is macroscopic, with the sense that it depends only on position and time coordinates, $y=y(x,t)$
: ${\frac {\mathrm {D} y}{\mathrm {D} t}}\equiv {\frac {\partial y}{\partial t}}+\mathbf {u} \cdot \nabla y,$ where $\nabla y$ is the covariant derivative of the tensor, and $\mathbf {u} (x,t)$ is the flow velocity. Generally the convective derivative of the field $\mathbf {u} \cdot \nabla y$ , the one that contains the covariant derivative of the field, can be interpreted both as involving the streamline tensor derivative of the field $\mathbf {u} \cdot \nabla y$ , or as involving the streamline directional derivative of the field $(\mathbf {u} \cdot \nabla )\ y$ , leading to the same result.

Only this spatial term containing the flow velocity describes the transport of the field in the flow, while the other describes the intrinsic variation of the field, independent of the presence of any flow. Confusingly, sometimes the name "convective derivative" is used for the whole material derivative $\mathrm {D} /\mathrm {D} t$ , instead for only the spatial term $\mathbf {u} \cdot \nabla$
. The effect of the time-independent terms in the definitions are for the scalar and tensor case respectively known as advection and convection.

### Scalar and vector fields

For example, for a macroscopic scalar field $\phi (x,t)$ and a macroscopic vector field $\mathbf {A} (\mathbf {x} ,t)$ the definition becomes: ${\begin{aligned}{\frac {\mathrm {D} \phi }{\mathrm {D} t}}&\equiv {\frac {\partial \phi }{\partial t}}+\mathbf {u} \cdot \nabla \phi ,\\[3pt]{\frac {\mathrm {D} \mathbf {A} }{\mathrm {D} t}}&\equiv {\frac {\partial \mathbf {A} }{\partial t}}+\mathbf {u} \cdot \nabla \mathbf {A} .\end{aligned}}$
In the scalar case $\nabla \phi$ is simply the gradient of a scalar, while $\nabla \mathbf {A}$ is the covariant derivative of the macroscopic vector (which can also be thought of as the Jacobian matrix of $\mathbf {A}$ as a function of $\mathbf {x}$ ).

In particular for a scalar field in a three-dimensional Cartesian coordinate system $(x_{1},x_{2},x_{3})$ , the components of the velocity $\mathbf {u}$ are $u_{1},u_{2},u_{3}$ , and the convective term is then: $\mathbf {u} \cdot \nabla \varphi =u_{1}{\frac {\partial \varphi }{\partial x_{1}}}+u_{2}{\frac {\partial \varphi }{\partial x_{2}}}+u_{3}{\frac {\partial \varphi }{\partial x_{3}}}.$
## Development

Consider a scalar quantity φ(x, t), where t is time and x is position. Here φ may be some physical variable such as temperature or chemical concentration. The physical quantity, whose scalar quantity is φ, exists in a continuum, and whose macroscopic velocity is represented by the vector field u(x, t).

The (total) derivative with respect to time of φ is expanded using the multivariate chain rule: ${\frac {\mathrm {d} }{\mathrm {d} t}}\varphi (\mathbf {x} (t),t)={\frac {\partial \varphi }{\partial t}}+{\dot {\mathbf {x} }}\cdot \nabla \varphi .$
It is apparent that this derivative is dependent on the vector ${\dot {\mathbf {x} }}\equiv {\frac {\mathrm {d} \mathbf {x} }{\mathrm {d} t}},$ which describes a chosen path x(t) in space. For example, if ${\dot {\mathbf {x} }}=\mathbf {0}$ is chosen, the time derivative becomes equal to the partial time derivative, which agrees with the definition of a partial derivative: a derivative taken with respect to some variable (time in this case) holding other variables constant (space in this case). This makes sense because if ${\dot {\mathbf {x} }}=0$ , then the derivative is taken at some constant position. This static position derivative is called the Eulerian derivative.

An example of this case is a swimmer standing still and sensing temperature change in a lake early in the morning: the water gradually becomes warmer due to heating from the sun. In which case the term ${\partial \varphi }/{\partial t}$ is sufficient to describe the rate of change of temperature.

If the sun is not warming the water (i.e. ${\partial \varphi }/{\partial t}=0$ ), but the path x(t) is not a standstill, the time derivative of φ may change due to the path. For example, imagine the swimmer is in a motionless pool of water, indoors and unaffected by the sun. One end happens to be at a constant high temperature and the other end at a constant low temperature. By swimming from one end to the other the swimmer senses a change of temperature with respect to time, even though the temperature at any given (static) point is a constant. This is because the derivative is taken at the swimmer's changing location and the second term on the right ${\dot {\mathbf {x} }}\cdot \nabla \varphi$ is sufficient to describe the rate of change of temperature. A temperature sensor attached to the swimmer would show temperature varying with time, simply due to the temperature variation from one end of the pool  to the other.

The material derivative finally is obtained when the path x(t) is chosen to have a velocity equal to the fluid velocity ${\dot {\mathbf {x} }}=\mathbf {u} .$
That is, the path follows the fluid current described by the fluid's velocity field u. So, the material derivative of the scalar φ is ${\frac {\mathrm {D} \varphi }{\mathrm {D} t}}={\frac {\partial \varphi }{\partial t}}+\mathbf {u} \cdot \nabla \varphi .$
An example of this case is a lightweight, neutrally buoyant particle swept along a flowing river and experiencing  temperature changes as it does so. The temperature of the water locally may be increasing due to one portion of the river being sunny and the other in a shadow, or the water as a whole may be heating as the day progresses. The changes due to the particle's motion (itself caused by fluid motion) is called advection (or convection if a vector is being transported).

The definition above relied on the physical nature of a fluid current; however, no laws of physics were invoked (for example, it was assumed that a lightweight particle in a river will follow the velocity of the water), but it turns out that many physical concepts can be described concisely using the material derivative. The general case of advection, however, relies on conservation of mass of the fluid stream; the situation becomes slightly different if advection happens in a non-conservative medium.

Only a path was considered for the scalar above. For a vector, the gradient becomes a tensor derivative; for tensor fields we may want to take into account not only translation of the coordinate system due to the fluid movement but also its rotation and stretching. This is achieved by the upper convected time derivative.

## Orthogonal coordinates

It may be shown that, in orthogonal coordinates, the j-th component of the convection term of the material derivative of a vector field $\mathbf {A}$ is given by $[\left(\mathbf {u} \cdot \nabla \right)\mathbf {A} ]_{j}=\sum _{i}{\frac {u_{i}}{h_{i}}}{\frac {\partial A_{j}}{\partial q^{i}}}+{\frac {A_{i}}{h_{i}h_{j}}}\left(u_{j}{\frac {\partial h_{j}}{\partial q^{i}}}-u_{i}{\frac {\partial h_{i}}{\partial q^{j}}}\right),$ where the hi are related to the metric tensors by $h_{i}={\sqrt {g_{ii}}}.$
In the special case of a three-dimensional Cartesian coordinate system (x, y, z), and A being a 1-tensor (a vector with three components), this is just: $(\mathbf {u} \cdot \nabla )\mathbf {A} ={\begin{pmatrix}\displaystyle u_{x}{\frac {\partial A_{x}}{\partial x}}+u_{y}{\frac {\partial A_{x}}{\partial y}}+u_{z}{\frac {\partial A_{x}}{\partial z}}\\\displaystyle u_{x}{\frac {\partial A_{y}}{\partial x}}+u_{y}{\frac {\partial A_{y}}{\partial y}}+u_{z}{\frac {\partial A_{y}}{\partial z}}\\\displaystyle u_{x}{\frac {\partial A_{z}}{\partial x}}+u_{y}{\frac {\partial A_{z}}{\partial y}}+u_{z}{\frac {\partial A_{z}}{\partial z}}\end{pmatrix}}={\frac {\partial (A_{x},A_{y},A_{z})}{\partial (x,y,z)}}\mathbf {u}$ where ${\frac {\partial (A_{x},A_{y},A_{z})}{\partial (x,y,z)}}$ is a Jacobian matrix.

There is also a vector-dot-del identity for the case $\mathbf {u} =\mathbf {A}$ , for which the material derivative for a vector field $\mathbf {A}$ can be expressed as: ${\displaystyle (\mathbf {A} \cdot \nabla )\mathbf {A} ={\frac {1}{2}}\nabla |\mathbf {A} |^{2}-\mathbf {A} \times (\nabla \times \mathbf {A} )={\frac {1}{2}}\nabla |\mathbf {A} |^{2}+(\nabla \times \mathbf {A} )\times \mathbf {A} }.$
