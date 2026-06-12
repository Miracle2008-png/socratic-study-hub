# Maxwell Relations

In the previous module, we stated that unmeasurable derivatives of entropy could be replaced with measurable derivatives of $P, V,$ and $T$. The mathematical tools that allow us to do this are the **Maxwell Relations**.

## 1. Exact Differentials

In thermodynamics, properties like $U, H, S, T, P,$ and $V$ are **state functions**. This means that the change in a property between two states depends *only* on the initial and final states, not on the path taken. 

Mathematically, a state function $z(x, y)$ has an **exact differential**:
$$ dz = M \, dx + N \, dy $$

Where:
- **$M = \left(\frac{\partial z}{\partial x}\right)_y$**: Partial derivative of $z$ with respect to $x$ at constant $y$.
- **$N = \left(\frac{\partial z}{\partial y}\right)_x$**: Partial derivative of $z$ with respect to $y$ at constant $x$.

A fundamental theorem of calculus states that for any exact differential, the mixed second partial derivatives must be equal:
$$ \left(\frac{\partial M}{\partial y}\right)_x = \left(\frac{\partial N}{\partial x}\right)_y $$

Where the partial derivatives are evaluated as previously defined.

## 2. Deriving the Maxwell Relations

We apply this mathematical theorem to the four fundamental property relations derived in the last module.

1. **From Internal Energy ($dU = T dS - P dV$)**:
   Here, $x = S, y = V, M = T, N = -P$.
   Applying the exact differential theorem:
   $$ \left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V $$

   Where:
   - **$T$**: Temperature.
   - **$V$**: Volume.
   - **$S$**: Entropy.
   - **$P$**: Pressure.

2. **From Enthalpy ($dH = T dS + V dP$)**:
   $$ \left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P $$

3. **From Helmholtz Energy ($dA = -S dT - P dV$)**:
   $$ \left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V $$

4. **From Gibbs Free Energy ($dG = -S dT + V dP$)**:
   $$ -\left(\frac{\partial S}{\partial P}\right)_T = \left(\frac{\partial V}{\partial T}\right)_P $$

## 3. Practical Significance

The last two Maxwell relations (derived from $A$ and $G$) are arguably the most important equations in chemical engineering thermodynamics. 

Look at the left sides of equations 3 and 4: they contain derivatives involving Entropy ($S$), which we cannot measure in a lab.
Look at the right sides: they contain derivatives involving Pressure ($P$), Volume ($V$), and Temperature ($T$), which we can easily measure or calculate using an Equation of State.

**The Maxwell Relations allow engineers to completely eliminate unmeasurable entropy terms from their equations and replace them with computable $P-V-T$ data.** This is exactly how the general equations for $dH$ and $dS$ in the previous module were derived.

## 4. Maxwell Relations Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "diff", "data": { "label": "Exact Differentials", "icon": "Activity", "description": "State functions." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "math", "data": { "label": "Math Theorem", "icon": "Code", "description": "Derivatives equal." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "maxwell", "data": { "label": "Maxwell Equations", "icon": "Shuffle", "description": "Relate S to PVT." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "use", "data": { "label": "Practical Use", "icon": "CheckCircle", "description": "Computable P-V-T." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "diff", "target": "math", "animated": true },
    { "source": "math", "target": "maxwell", "animated": true },
    { "source": "maxwell", "target": "use", "animated": true }
  ]
}
```
