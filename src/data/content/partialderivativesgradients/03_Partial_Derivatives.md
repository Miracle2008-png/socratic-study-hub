# Partial Derivatives

When analyzing a 1D curve $y = f(x)$, the derivative $\frac{dy}{dx}$ gives us a single, unambiguous slope at any point. But if $z = f(x, y)$ represents a 3D surface—like the topology of a mountain or the thermal gradient of an aerospace component—how do we find its slope? 

A 3D surface doesn't have one single "slope." If you stand on the side of a mountain, the steepness depends entirely on which direction you face. **Partial derivatives** allow us to isolate variables, determining the exact slope of the surface if you walk purely along the x-axis (East-West) or purely along the y-axis (North-South).

## 1. Definition and Notation

To calculate the partial derivative with respect to $x$ (denoted $f_x$ or $\frac{\partial f}{\partial x}$), we treat $y$ as a rigid constant and differentiate $f$ using standard derivative rules. Geometrically, you are slicing the 3D surface with a plane parallel to the xz-plane, yielding a 1D curve, and finding the tangent to that curve.

Conversely, to find the partial derivative with respect to $y$ (denoted $f_y$ or $\frac{\partial f}{\partial y}$), we lock $x$ as a constant and differentiate with respect to $y$.

**Notation Guide:**
*   Slope in the x-direction: $f_x(x,y) = \frac{\partial f}{\partial x} = \frac{\partial z}{\partial x}$
*   Slope in the y-direction: $f_y(x,y) = \frac{\partial f}{\partial y} = \frac{\partial z}{\partial y}$

*(Note the curly $\partial$ symbol, known as "del" or "partial", which distinguishes it from the straight $d$ used for ordinary, single-variable derivatives).*

In engineering mechanics, partial derivatives are the building blocks of **Stress Tensors** ($\sigma_{ij}$) and **Strain Tensors** ($\varepsilon_{ij}$). For example, normal strain in the x-direction is defined as $\varepsilon_{xx} = \frac{\partial u}{\partial x}$, where $u$ is displacement.

## 2. Calculating First-Order Partials

### Example 1: Basic Thermodynamic Equation (Easy)
The Van der Waals equation of state for a real gas can be rearranged for pressure: $P(V, T) = \frac{RT}{V - b} - \frac{a}{V^2}$. 
**Problem:** Find the rate of change of pressure with respect to volume, assuming temperature is held constant ($\frac{\partial P}{\partial V}$).
**Solution:**
1. Treat $T$ (and constants $R, a, b$) as fixed constants.
2. Apply the power rule to the $V$ terms:
   $$ P = RT(V - b)^{-1} - aV^{-2} $$
   $$ \frac{\partial P}{\partial V} = -RT(V - b)^{-2} - a(-2)V^{-3} $$
   $$ \frac{\partial P}{\partial V} = -\frac{RT}{(V - b)^2} + \frac{2a}{V^3} $$
This partial derivative is critical for determining the isothermal compressibility of the gas.

### Example 2: Multivariable Gradient (Medium)
**Problem:** Let a magnetic scalar potential be $f(x, y) = x^3 y^2 + 4x - 5y^3 + \sin(xy)$. Find both $f_x$ and $f_y$.
**Solution:**
**Find $f_x$:** Treat all $y$'s as constants (like the number 5 or $\pi$).
*   Derivative of $x^3 y^2 \to 3x^2 \cdot y^2$. ($y^2$ acts as a constant multiplier).
*   Derivative of $4x \to 4$.
*   Derivative of $-5y^3 \to 0$. (It is entirely constant with respect to x).
*   Derivative of $\sin(xy) \to y\cos(xy)$. (Chain rule: derivative of inside is $y$).
$$ f_x(x,y) = 3x^2y^2 + 4 + y\cos(xy) $$

**Find $f_y$:** Treat all $x$'s as constants.
*   Derivative of $x^3 y^2 \to x^3 \cdot 2y$.
*   Derivative of $4x \to 0$.
*   Derivative of $-5y^3 \to -15y^2$.
*   Derivative of $\sin(xy) \to x\cos(xy)$.
$$ f_y(x,y) = 2x^3y - 15y^2 + x\cos(xy) $$

## 3. Higher-Order Partial Derivatives and Clairaut's Theorem

Since $f_x$ is itself a function of $x$ and $y$, you can differentiate it again. This yields second-order partial derivatives. For a function of two variables, there are four possibilities:
1.  **$f_{xx}$** ($\frac{\partial^2 f}{\partial x^2}$): Differentiate w.r.t x, then x again. (Concavity in x-direction).
2.  **$f_{yy}$** ($\frac{\partial^2 f}{\partial y^2}$): Differentiate w.r.t y, then y again. (Concavity in y-direction).
3.  **$f_{xy}$** ($\frac{\partial^2 f}{\partial x \partial y}$): Differentiate w.r.t x, then y. (Mixed partial).
4.  **$f_{yx}$** ($\frac{\partial^2 f}{\partial y \partial x}$): Differentiate w.r.t y, then x. (Mixed partial).

**Clairaut's Theorem (Symmetry of Mixed Partials):** If the functions $f_{xy}$ and $f_{yx}$ are continuous on a domain, then $f_{xy} = f_{yx}$. The order of differentiation does not matter! This mathematical elegance is the exact reason why **conservative vector fields** exist in physics, allowing us to define potential energy functions for gravity and electrostatics.

### Example 3: Verifying Laplace's Equation (Hard)
Partial Differential Equations (PDEs) govern almost all multi-dimensional physics. **Laplace's Equation** in 2D is given by $f_{xx} + f_{yy} = 0$. Functions that satisfy this equation are called *harmonic functions* and represent steady-state heat flow or irrotational fluid flow.
**Problem:** Prove that the steady-state temperature distribution $T(x,y) = e^x \cos(y)$ satisfies Laplace's Equation.
**Solution:**
1. Find first partials:
   $$ T_x = e^x \cos(y) $$
   $$ T_y = -e^x \sin(y) $$
2. Find second unmixed partials:
   $$ T_{xx} = \frac{\partial}{\partial x}(e^x \cos(y)) = e^x \cos(y) $$
   $$ T_{yy} = \frac{\partial}{\partial y}(-e^x \sin(y)) = -e^x \cos(y) $$
3. Check Laplace's Equation:
   $$ T_{xx} + T_{yy} = e^x \cos(y) + (-e^x \cos(y)) = 0 $$
Since the sum is exactly 0, the distribution $T(x,y)$ is harmonic and represents a physically valid steady-state thermal system.

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Partial Derivatives",
        "icon": "BrainCircuit",
        "description": "Multi-dimensional rates of change."
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "First-Order Partials",
        "icon": "FunctionSquare",
        "description": "Slopes along specific axes (fx, fy)."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Higher-Order Partials",
        "icon": "Layers",
        "description": "Curvature and mixed derivatives."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Clairaut's Theorem",
        "icon": "Repeat",
        "description": "Symmetry: fxy = fyx."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    },
    {
      "id": "5",
      "data": {
        "label": "PDEs",
        "icon": "Activity",
        "description": "Laplace, Heat, and Wave Equations."
      },
      "style": {
        "background": "#7f1d1d",
        "color": "#fee2e2"
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
      "source": "3",
      "target": "5",
      "animated": true
    }
  ]
}
```
