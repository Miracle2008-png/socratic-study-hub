# Concept Drills: Partial Derivatives, Gradients, and Engineering Optimization

Test your rigorous understanding of multivariable calculus concepts, gradient vectors, and optimization under constraints with applied engineering scenarios.

## Conceptual Questions

1.  **Heat Conduction in a Plate:** If the partial derivatives of a temperature field $T(x,y)$ exist everywhere in a metal plate, does it guarantee that the temperature field is continuous across the plate?
2.  **Topography and Gradients:** You are mapping the altitude $z = h(x,y)$ of a terrain for a civil engineering project. At a specific coordinate, you calculate that $\nabla h = \langle 0, 0 \rangle$. What are the possible topographic features at this location, and how would you mathematically distinguish them?
3.  **Isotherms and Heat Flux:** In thermodynamics, isotherms are curves of constant temperature $T(x,y) = k$. How does the direction of the maximum heat flux (which relates to $\nabla T$) relate geometrically to these isotherms?
4.  **Fluid Velocity Gradients:** If the directional derivative of a pressure field $P(x,y,z)$ in the direction of a fluid flow vector $\vec{v}$ is $15 \text{ Pa/m}$, what is the directional derivative in the exact opposite direction ($-\vec{v}$)? Explain the physical meaning.
5.  **Structural Concavity:** In structural engineering, why is the discriminant $D = f_{xx}f_{yy} - f_{xy}^2$ necessary to determine if a point on a loaded membrane $z = f(x,y)$ is a local minimum, rather than just checking if $f_{xx} > 0$ and $f_{yy} > 0$?
6.  **Constrained Resource Allocation:** When designing a chemical reactor to maximize yield $Y(x,y)$ subject to a cost constraint $C(x,y) = k$, we use the method of Lagrange Multipliers ($\nabla Y = \lambda \nabla C$). What does the multiplier $\lambda$ represent economically or physically in this context?

## Analytical Problems

1.  **Temperature Gradient in an Engine Block:** The temperature distribution inside a cast-iron engine block is modeled by $T(x, y, z) = 100 e^{-0.1(x^2 + y^2 + z^2)}$, where $x, y, z$ are in centimeters and $T$ is in Celsius. Find the temperature gradient vector at the point $(1, 2, 2)$ and determine the unit vector pointing in the direction of maximum temperature *decrease*.
2.  **Stress Analysis (Partial Derivatives):** The stress function in a 2D elastic plate is given by $\phi(x,y) = x^3 y^2 - y \sin(2x)$. Find the mixed partial derivative $\frac{\partial^2 \phi}{\partial x \partial y}$ and verify Clairaut's Theorem by showing it equals $\frac{\partial^2 \phi}{\partial y \partial x}$.
3.  **Aerodynamic Surface Approximation (Tangent Plane):** The pressure distribution on an airfoil surface is given by $P(x,y) = \ln(x^2 + 2y^2 + 1)$. Find the equation of the tangent plane (the linear approximation of the pressure field) at the point $(1, 1)$.
4.  **Kinematics of a Robotic Arm (Chain Rule):** The power output of a robotic joint is defined by $P(x,y) = x^2 y \cos(x)$, where $x(t) = t^2$ is the angular velocity and $y(t) = e^{2t}$ is the torque. Use the multivariable chain rule to find the rate of change of power $\frac{dP}{dt}$ at $t = 1$.
5.  **Fluid Dynamics (Directional Derivative):** The velocity potential of a fluid flow is given by $\Phi(x,y) = x^2 - y^2 + 2xy$. Calculate the rate of change of the potential at the point $(2, 1)$ in the direction of the vector $\vec{v} = 3\hat{i} + 4\hat{j}$.
6.  **Shipping Container Design (Optimization under Constraints):** A logistics company wants to design a rectangular shipping container with a closed top. The container must have a fixed volume of $V = 36 \text{ m}^3$. The material for the base costs \$10 per square meter, the material for the sides costs \$5 per square meter, and the material for the roof costs \$8 per square meter. Use the method of Lagrange multipliers to find the dimensions (length $x$, width $y$, and height $z$) that minimize the total cost of materials.

---

## Solutions

### Conceptual Solutions

1.  **False.** Even if the partial derivatives $T_x$ and $T_y$ exist, it only guarantees that the limits exist along the $x$ and $y$ axes. The temperature field $T(x,y)$ could still be discontinuous if approached from other angles (e.g., along the line $y=x$). For multivariable continuity, the limit must be identical when approaching from *all* possible directions.
2.  The terrain has a **critical point**. It could be a local maximum (a hilltop), a local minimum (a basin or sinkhole), or a saddle point (a mountain pass). To distinguish between them, you must use the Second Derivative Test, computing the discriminant $D = h_{xx}h_{yy} - h_{xy}^2$ to analyze the local curvature in all directions.
3.  The gradient vector $\nabla T$ points in the direction of steepest temperature increase and is perfectly **orthogonal (perpendicular)** to the isotherms $T(x,y) = k$. According to Fourier's Law of Heat Conduction, heat flows in the direction of the steepest temperature *decrease* ($-\nabla T$), meaning heat flux is always perpendicular to the isotherms.
4.  **$-15 \text{ Pa/m}$**. The directional derivative is defined by the dot product $D_{\vec{u}}P = \nabla P \cdot \hat{u}$. If $D_{\vec{u}}P = 15$, then evaluating in the opposite direction yields $D_{-\vec{u}}P = \nabla P \cdot (-\hat{u}) = -(\nabla P \cdot \hat{u}) = -15$. Physically, if moving downstream with the fluid flow increases the pressure by 15 Pa/m, moving directly upstream decreases the pressure at the exact same rate.
5.  A structural membrane can be concave up along both the $x$ and $y$ axes ($f_{xx} > 0, f_{yy} > 0$), but if it twists significantly (meaning $f_{xy}$ is large), it could actually curve downwards along a diagonal path, forming a saddle point. The discriminant $D = f_{xx}f_{yy} - f_{xy}^2$ accounts for the cross-partial derivatives to ensure the surface is uniformly concave up in *all* arbitrary directions.
6.  The Lagrange multiplier $\lambda$ represents the **shadow price** or marginal value of the constraint. Specifically, it dictates how much the maximum yield $Y$ would increase if the budget constraint $k$ were relaxed by one unit ($\lambda = \partial Y_{\text{max}} / \partial k$). Geometrically, it is the scaling factor required to make the gradient of the objective function match the gradient of the constraint curve at the point of tangency.

### Analytical Solutions

1.  **Temperature Gradient in an Engine Block:**
    Let $T(x,y,z) = 100 e^{-0.1(x^2+y^2+z^2)}$. We find the partial derivatives using the chain rule:
    $$ \frac{\partial T}{\partial x} = 100 \cdot e^{-0.1(x^2+y^2+z^2)} \cdot (-0.2x) = -20x e^{-0.1(x^2+y^2+z^2)} $$
    $$ \frac{\partial T}{\partial y} = -20y e^{-0.1(x^2+y^2+z^2)} $$
    $$ \frac{\partial T}{\partial z} = -20z e^{-0.1(x^2+y^2+z^2)} $$
    Evaluating at the point $(1, 2, 2)$:
    The exponent is $-0.1(1^2 + 2^2 + 2^2) = -0.1(1 + 4 + 4) = -0.9$.
    $$ \nabla T(1,2,2) = e^{-0.9} \langle -20(1), -20(2), -20(2) \rangle = \langle -20e^{-0.9}, -40e^{-0.9}, -40e^{-0.9} \rangle $$
    The direction of maximum temperature *decrease* is $-\nabla T = \langle 20e^{-0.9}, 40e^{-0.9}, 40e^{-0.9} \rangle$.
    To find the unit vector, we normalize this direction (ignoring the positive constant $20e^{-0.9}$ for simpler normalization of $\langle 1, 2, 2 \rangle$):
    $$ \hat{u} = \frac{1}{\sqrt{1^2+2^2+2^2}}\langle 1, 2, 2 \rangle = \left\langle \frac{1}{3}, \frac{2}{3}, \frac{2}{3} \right\rangle $$

2.  **Stress Analysis (Partial Derivatives):**
    Given $\phi(x,y) = x^3 y^2 - y \sin(2x)$.
    First, find the partial derivative with respect to $x$:
    $$ \phi_x = 3x^2y^2 - 2y\cos(2x) $$
    Now, differentiate $\phi_x$ with respect to $y$:
    $$ \phi_{xy} = \frac{\partial}{\partial y}(3x^2y^2 - 2y\cos(2x)) = 6x^2y - 2\cos(2x) $$
    **Verify Clairaut's Theorem:**
    Find the partial derivative with respect to $y$:
    $$ \phi_y = 2x^3y - \sin(2x) $$
    Now, differentiate $\phi_y$ with respect to $x$:
    $$ \phi_{yx} = \frac{\partial}{\partial x}(2x^3y - \sin(2x)) = 6x^2y - 2\cos(2x) $$
    Since $\phi_{xy} = \phi_{yx}$, Clairaut's Theorem is verified.

3.  **Aerodynamic Surface Approximation (Tangent Plane):**
    Given $P(x,y) = \ln(x^2 + 2y^2 + 1)$.
    At the point $(1,1)$, the pressure is $P(1,1) = \ln(1^2 + 2(1^2) + 1) = \ln(4)$.
    Calculate the partial derivatives:
    $$ P_x = \frac{2x}{x^2+2y^2+1} \implies P_x(1,1) = \frac{2(1)}{4} = \frac{1}{2} $$
    $$ P_y = \frac{4y}{x^2+2y^2+1} \implies P_y(1,1) = \frac{4(1)}{4} = 1 $$
    The equation of the tangent plane is $z - P(a,b) = P_x(a,b)(x - a) + P_y(a,b)(y - b)$:
    $$ z - \ln(4) = \frac{1}{2}(x - 1) + 1(y - 1) $$
    $$ z = \frac{1}{2}x + y - \frac{3}{2} + \ln(4) $$

4.  **Kinematics of a Robotic Arm (Chain Rule):**
    Given $P(x,y) = x^2 y \cos(x)$, $x(t) = t^2$, and $y(t) = e^{2t}$.
    The multivariable chain rule states: $\frac{dP}{dt} = \frac{\partial P}{\partial x} \frac{dx}{dt} + \frac{\partial P}{\partial y} \frac{dy}{dt}$.
    First, find all components:
    $$ \frac{\partial P}{\partial x} = 2xy\cos(x) - x^2y\sin(x) $$
    $$ \frac{\partial P}{\partial y} = x^2\cos(x) $$
    $$ \frac{dx}{dt} = 2t, \quad \frac{dy}{dt} = 2e^{2t} $$
    Evaluate at $t = 1 \implies x(1) = 1$ and $y(1) = e^2$:
    $$ \frac{\partial P}{\partial x}(1, e^2) = 2(1)(e^2)\cos(1) - (1^2)(e^2)\sin(1) = 2e^2\cos(1) - e^2\sin(1) $$
    $$ \frac{\partial P}{\partial y}(1, e^2) = (1^2)\cos(1) = \cos(1) $$
    $$ \frac{dx}{dt}(1) = 2, \quad \frac{dy}{dt}(1) = 2e^2 $$
    Substitute everything back into the chain rule formula:
    $$ \frac{dP}{dt} = [2e^2\cos(1) - e^2\sin(1)](2) + [\cos(1)](2e^2) $$
    $$ \frac{dP}{dt} = 4e^2\cos(1) - 2e^2\sin(1) + 2e^2\cos(1) = 6e^2\cos(1) - 2e^2\sin(1) $$

5.  **Fluid Dynamics (Directional Derivative):**
    Given $\Phi(x,y) = x^2 - y^2 + 2xy$ and vector $\vec{v} = \langle 3, 4 \rangle$.
    First, find the unit vector $\hat{u}$ in the direction of $\vec{v}$:
    $$ |\vec{v}| = \sqrt{3^2 + 4^2} = 5 \implies \hat{u} = \left\langle \frac{3}{5}, \frac{4}{5} \right\rangle $$
    Next, compute the gradient vector $\nabla \Phi = \langle \Phi_x, \Phi_y \rangle$:
    $$ \nabla \Phi = \langle 2x + 2y, -2y + 2x \rangle $$
    Evaluate the gradient at the point $(2,1)$:
    $$ \nabla \Phi(2,1) = \langle 2(2) + 2(1), -2(1) + 2(2) \rangle = \langle 6, 2 \rangle $$
    Calculate the directional derivative using the dot product:
    $$ D_{\hat{u}}\Phi(2,1) = \nabla \Phi(2,1) \cdot \hat{u} = \langle 6, 2 \rangle \cdot \left\langle \frac{3}{5}, \frac{4}{5} \right\rangle $$
    $$ D_{\hat{u}}\Phi(2,1) = \frac{18}{5} + \frac{8}{5} = \frac{26}{5} = 5.2 $$

6.  **Shipping Container Design (Optimization under Constraints):**
    Let the dimensions be $x$ (length), $y$ (width), and $z$ (height).
    Objective: Minimize the Cost function $C(x,y,z)$.
    Base area $= xy$, Cost $= \$10xy$.
    Roof area $= xy$, Cost $= \$8xy$.
    Side areas $= 2xz + 2yz$, Cost $= \$5(2xz + 2yz) = 10xz + 10yz$.
    Total Cost: $C(x,y,z) = 18xy + 10xz + 10yz$.
    Constraint: Volume $V(x,y,z) = xyz = 36$.
    Using Lagrange Multipliers $\nabla C = \lambda \nabla V$:
    (1) $C_x = \lambda V_x \implies 18y + 10z = \lambda yz$
    (2) $C_y = \lambda V_y \implies 18x + 10z = \lambda xz$
    (3) $C_z = \lambda V_z \implies 10x + 10y = \lambda xy$
    Multiply (1) by $x$, (2) by $y$, and (3) by $z$:
    $18xy + 10xz = \lambda xyz$
    $18xy + 10yz = \lambda xyz$
    $10xz + 10yz = \lambda xyz$
    Setting the first two equal:
    $18xy + 10xz = 18xy + 10yz \implies 10xz = 10yz \implies x = y$ (assuming positive dimensions).
    Setting the second and third equal, and substituting $x = y$:
    $18x^2 + 10xz = 10xz + 10xz \implies 18x^2 = 10xz \implies z = \frac{18}{10}x = 1.8x$.
    Substitute $x = y$ and $z = 1.8x$ into the volume constraint $xyz = 36$:
    $$ (x)(x)(1.8x) = 36 \implies 1.8x^3 = 36 \implies x^3 = 20 \implies x = \sqrt[3]{20} \approx 2.714 \text{ m} $$
    Solving for the other dimensions:
    $$ y = \sqrt[3]{20} \approx 2.714 \text{ m} $$
    $$ z = 1.8\sqrt[3]{20} \approx 4.886 \text{ m} $$


```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Engineering Optimization Drills",
        "icon": "BrainCircuit",
        "description": "Topic: Partial Derivs & Gradients"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Heat & Stress (∂f/∂x)",
        "icon": "FunctionSquare",
        "description": "Multivariable rate of change in isolation."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Gradient Vectors (∇f)",
        "icon": "Sigma",
        "description": "Direction of steepest thermal or pressure gradients."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Directional Derivatives",
        "icon": "Activity",
        "description": "Flow rates along specific vector paths."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Linear Approximations",
        "icon": "Layers",
        "description": "Tangent planes for aerodynamic surfaces."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Constrained Optimization",
        "icon": "Target",
        "description": "Lagrange Multipliers for design & resource limits."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    },
    {
      "source": "5",
      "target": "6",
      "animated": true
    }
  ]
}
```
