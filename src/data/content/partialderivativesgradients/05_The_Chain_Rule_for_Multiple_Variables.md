# The Chain Rule for Multiple Variables

In 1D calculus, if a variable $y$ depends on $x$ ($y = f(x)$), and $x$ depends on time $t$ ($x = g(t)$), the traditional chain rule describes how $y$ changes with $t$: $\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$. It represents a single pathway of causality.

In multivariable calculus, real-world systems are rarely so simple. A dependent variable $z$ might depend on spatial coordinates $x$ and $y$, while *both* $x$ and $y$ independently evolve over time $t$. Or $x$ and $y$ might be driven by two entirely different parameters, $u$ and $v$. The multivariable chain rule allows us to map and sum all possible interacting pathways of change.

## 1. Chain Rule (Case 1: One Independent Parameter)

Suppose $z = f(x, y)$ defines an environmental field (like temperature or pressure). Let $x = x(t)$ and $y = y(t)$ be parametric equations defining the trajectory of an object (like a drone or fluid particle) moving through that field over time $t$.

How fast is the field $z$ changing *from the perspective of the moving object*? Because $z$ ultimately collapses down to a dependence on a single parameter $t$, we seek the ordinary derivative $\frac{dz}{dt}$. This total rate of change is the sum of the change experienced by moving along the x-axis plus the change experienced moving along the y-axis.

$$ \frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} $$

**Engineering Context:** In thermodynamics and fluid mechanics, this is related to the **material derivative**. It allows engineers to calculate the rate of change of temperature or density of a fluid parcel as it flows along a complex streamline.

## 2. Chain Rule (Case 2: Multiple Independent Parameters)

Suppose $z = f(x, y)$, but the intermediate variables $x$ and $y$ are functions of two other independent parameters, $u$ and $v$: $x = x(u, v)$ and $y = y(u, v)$. 

Now $z$ ultimately depends on a 2D parameter space ($u, v$). We must use partial derivatives to describe how $z$ changes with respect to $u$ (holding $v$ constant) and vice versa. To find $\frac{\partial z}{\partial u}$, trace all pathways from $z$ through intermediate variables to $u$:

$$ \frac{\partial z}{\partial u} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial u} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial u} $$

Similarly, tracing pathways to $v$:

$$ \frac{\partial z}{\partial v} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial v} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial v} $$

**Engineering Context:** In robotics, forward and inverse kinematics rely heavily on this. The end-effector position of a robotic arm ($x, y, z$) depends on multiple joint angles ($\theta_1, \theta_2, \dots$). The chain rule (often organized into a Jacobian matrix) maps how velocities at individual joints translate to the velocity of the end-effector.

## 3. Tree Diagrams: A Path-Tracing Strategy

For complex cascaded systems (e.g., $w$ depends on $x,y,z$, which depend on $u,v$, which depend on $t$), a **tree diagram** is a foolproof way to construct the correct chain rule formula.

1. **Top Node:** Write the dependent variable at the top.
2. **Intermediate Nodes:** Draw branches down to the immediate variables it depends on.
3. **Independent Nodes:** Continue branching down until you reach the root independent variables.
4. **Formulate:** To find the derivative of the top variable with respect to a bottom variable, trace every distinct downward path connecting them.
5. Multiply the derivative terms along each individual path.
6. Add the terms from all parallel paths together.

## 4. Implicit Differentiation

The multivariable chain rule provides a profound shortcut for implicit differentiation. Suppose you have a complex implicit relation like $x^3 + y^3 - 6xy = 0$, and you need the slope $\frac{dy}{dx}$.

1. Define a 3D surface function $F(x,y) = x^3 + y^3 - 6xy$.
2. Our implicit curve is just the contour line where $F(x,y) = 0$.
3. Differentiate both sides with respect to $x$ using the Case 1 chain rule:
   $$ \frac{d}{dx}[F(x,y)] = \frac{\partial F}{\partial x}\frac{dx}{dx} + \frac{\partial F}{\partial y}\frac{dy}{dx} = 0 $$
4. Since $\frac{dx}{dx} = 1$, we get $F_x + F_y \frac{dy}{dx} = 0$. Solving for $\frac{dy}{dx}$ yields:

$$ \frac{dy}{dx} = -\frac{F_x}{F_y} $$

*(Assuming $F_y \neq 0$)*. This elegantly avoids tedious product/quotient rules from 1D implicit differentiation.

---

## Step-by-Step Examples

### Example 1: Particle on a Surface (Easy)
An ant walks across a heated metal plate. The temperature of the plate is $T(x,y) = x^2 + 3y$. The ant's position over time is $x = \cos(t)$, $y = \sin(t)$. How fast is the temperature changing for the ant at $t=0$?

**Step 1:** Calculate the partial derivatives of the outer function $T$.
$$ T_x = 2x $$
$$ T_y = 3 $$

**Step 2:** Calculate the ordinary derivatives of the paths.
$$ \frac{dx}{dt} = -\sin(t) $$
$$ \frac{dy}{dt} = \cos(t) $$

**Step 3:** Apply the Case 1 chain rule.
$$ \frac{dT}{dt} = T_x \frac{dx}{dt} + T_y \frac{dy}{dt} = (2x)(-\sin(t)) + (3)(\cos(t)) $$

**Step 4:** Evaluate at the specific time $t=0$.
At $t=0$, $x = \cos(0) = 1$ and $y = \sin(0) = 0$.
$$ \left. \frac{dT}{dt} \right|_{t=0} = (2(1))(-\sin(0)) + 3(\cos(0)) = 0 + 3(1) = 3 $$
The temperature is increasing at a rate of 3 degrees per second.

### Example 2: Polar to Cartesian Rate of Change (Medium)
Let $z = e^x \sin(y)$. Suppose $x$ and $y$ are defined by polar coordinates $x = r \cos\theta$ and $y = r \sin\theta$. Find $\frac{\partial z}{\partial \theta}$.

**Step 1:** Formulate the Case 2 chain rule for $\theta$.
$$ \frac{\partial z}{\partial \theta} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial \theta} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial \theta} $$

**Step 2:** Calculate all four necessary derivatives.
$$ \frac{\partial z}{\partial x} = e^x \sin(y) \quad \text{and} \quad \frac{\partial x}{\partial \theta} = -r \sin\theta $$
$$ \frac{\partial z}{\partial y} = e^x \cos(y) \quad \text{and} \quad \frac{\partial y}{\partial \theta} = r \cos\theta $$

**Step 3:** Substitute and simplify.
$$ \frac{\partial z}{\partial \theta} = (e^x \sin(y))(-r \sin\theta) + (e^x \cos(y))(r \cos\theta) $$
To express entirely in terms of $r$ and $\theta$, substitute $x$ and $y$:
$$ \frac{\partial z}{\partial \theta} = -r \sin\theta \, e^{r \cos\theta} \sin(r \sin\theta) + r \cos\theta \, e^{r \cos\theta} \cos(r \sin\theta) $$

### Example 3: Implicit Differentiation of a Complex Surface (Medium)
Find $\frac{dz}{dy}$ given the implicit surface equation $x^2 z + y^2 z^3 - 5xyz = 10$.

**Step 1:** Define the constraint function $F(x,y,z) = 0$.
$$ F(x,y,z) = x^2 z + y^2 z^3 - 5xyz - 10 = 0 $$

**Step 2:** Apply the 3D implicit differentiation formula: $\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$.
We need partials with respect to $y$ and $z$ (treating $x$ as a constant).

**Step 3:** Calculate $F_y$ and $F_z$.
$$ F_y = \frac{\partial}{\partial y}(x^2 z + y^2 z^3 - 5xyz - 10) = 2y z^3 - 5xz $$
$$ F_z = \frac{\partial}{\partial z}(x^2 z + y^2 z^3 - 5xyz - 10) = x^2 + 3y^2 z^2 - 5xy $$

**Step 4:** Construct the final derivative.
$$ \frac{\partial z}{\partial y} = -\frac{2y z^3 - 5xz}{x^2 + 3y^2 z^2 - 5xy} $$

### Example 4: Thermodynamics Ideal Gas Expansion (Hard)
The pressure $P$ of an ideal gas is given by $P = \frac{nRT}{V}$. Suppose a piston system is undergoing a dynamic process where volume $V$, temperature $T$, and moles of gas $n$ are all changing with time $t$. Derive an expression for the rate of change of pressure $\frac{dP}{dt}$.

**Step 1:** Identify dependencies. $P$ depends on $(n, T, V)$. Each of $(n, T, V)$ depends on $t$.

**Step 2:** Set up the chain rule with three pathways.
$$ \frac{dP}{dt} = \frac{\partial P}{\partial n}\frac{dn}{dt} + \frac{\partial P}{\partial T}\frac{dT}{dt} + \frac{\partial P}{\partial V}\frac{dV}{dt} $$

**Step 3:** Compute the partial derivatives of $P$ ($R$ is the gas constant).
$$ \frac{\partial P}{\partial n} = \frac{RT}{V} $$
$$ \frac{\partial P}{\partial T} = \frac{nR}{V} $$
$$ \frac{\partial P}{\partial V} = - \frac{nRT}{V^2} $$

**Step 4:** Assemble the full time-derivative expression.
$$ \frac{dP}{dt} = \left(\frac{RT}{V}\right)\frac{dn}{dt} + \left(\frac{nR}{V}\right)\frac{dT}{dt} - \left(\frac{nRT}{V^2}\right)\frac{dV}{dt} $$
*(This equation explicitly models how gas leakages ($\frac{dn}{dt}$), heating/cooling ($\frac{dT}{dt}$), and mechanical piston movement ($\frac{dV}{dt}$) simultaneously impact chamber pressure).*

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Multivariable Chain Rule",
        "icon": "Network",
        "description": "Mapping derivatives across cascaded variables."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Case 1: Single Parameter",
        "icon": "TrendingUp",
        "description": "z = f(x,y) where x(t), y(t)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Total Derivative (dz/dt)",
        "icon": "Activity",
        "description": "Summing changes along x and y pathways over time."
      },
      "style": {
        "background": "#0f766e",
        "color": "#ccfbf1"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Case 2: Multiple Parameters",
        "icon": "Layers",
        "description": "z = f(x,y) where x(u,v), y(u,v)."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "Tree Diagrams",
        "icon": "GitBranch",
        "description": "Visualizing complex partial derivative pathways."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
      }
    },
    {
      "id": "6",
      "data": {
        "label": "Implicit Differentiation Shortcut",
        "icon": "Zap",
        "description": "dy/dx = -Fx / Fy"
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
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
      "source": "1",
      "target": "4",
      "animated": true
    },
    {
      "source": "4",
      "target": "5",
      "animated": true
    },
    {
      "source": "1",
      "target": "6",
      "animated": true
    }
  ]
}
```
