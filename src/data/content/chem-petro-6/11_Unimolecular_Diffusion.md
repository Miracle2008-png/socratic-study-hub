# Unimolecular Diffusion (Diffusion Through a Stagnant Gas)

The second major limiting case of mass transfer involves a species A diffusing through a second species B, where species B is completely stationary. This is known as **Unimolecular Diffusion** or diffusion through a stagnant non-diffusing medium.

## 1. The Classic Example: Evaporation in a Tube

Imagine a narrow, open-topped test tube partially filled with liquid benzene (Species A). The top of the tube is exposed to a gentle breeze of pure air (Species B). 
1.  Benzene evaporates at the liquid surface and diffuses upward through the air inside the tube to escape.
2.  The air (B) cannot diffuse *down* into the liquid benzene because air is virtually insoluble in liquid benzene. Once the air hits the liquid surface, it has nowhere to go.
3.  Therefore, the air in the tube is stagnant ($N_B = 0$), while the benzene ($N_A$) diffuses continuously upward.

This is fundamentally different from equimolar counterdiffusion. In EMCD, molecules swap places. Here, only A is moving.

## 2. Deriving the Flux Equation for Unimolecular Diffusion

We return again to the rigorous general flux equation for a binary mixture:
$$ N_A = x_A (N_A + N_B) - c_{total} D_{AB} \frac{dx_A}{dz} $$

Substitute the condition for a stagnant species B ($N_B = 0$):
$$ N_A = x_A (N_A + 0) - c_{total} D_{AB} \frac{dx_A}{dz} $$

Now, we must solve for $N_A$. Group the $N_A$ terms on the left side:
$$ N_A - x_A N_A = - c_{total} D_{AB} \frac{dx_A}{dz} $$
$$ N_A (1 - x_A) = - c_{total} D_{AB} \frac{dx_A}{dz} $$
$$ N_A = -\frac{c_{total} D_{AB}}{1 - x_A} \frac{dx_A}{dz} $$

This equation reveals the fundamental difference between this and EMCD. The bulk convective flow term **did not vanish**. The diffusion of A creates a bulk flow that "pushes" the entire mixture outward. 
The total flux of A ($N_A$) is amplified by the factor $\frac{1}{1-x_A}$. This factor represents the additional "boost" species A gets from the bulk fluid blowing in the same direction it is diffusing.

## 3. Integrating the Equation (Stefan's Law)

To find the steady-state flux across a stagnant film from $z_1$ to $z_2$, we separate variables and integrate:
$$ N_A \int_{z_1}^{z_2} dz = -c_{total} D_{AB} \int_{x_{A1}}^{x_{A2}} \frac{dx_A}{1 - x_A} $$

$$ N_A (z_2 - z_1) = c_{total} D_{AB} \ln\left(\frac{1 - x_{A2}}{1 - x_{A1}}\right) $$

Using the ideal gas laws ($x_A = p_A / P$), we note that $1 - x_A = x_B = p_B / P$.
Therefore, $\frac{1 - x_{A2}}{1 - x_{A1}} = \frac{p_{B2}}{p_{B1}}$. 
This allows us to rewrite the equation in terms of the stagnant gas B:

$$ N_A = \frac{c_{total} D_{AB}}{z_2 - z_1} \ln\left(\frac{p_{B2}}{p_{B1}}\right) $$

To make this look like the linear EMCD equation, engineers define the **log-mean partial pressure of the stagnant gas ($p_{B,lm}$)**:
$$ p_{B,lm} = \frac{p_{B2} - p_{B1}}{\ln(p_{B2}/p_{B1})} $$

Substituting this back yields the final engineering formula for Unimolecular Diffusion (often called **Stefan's Law**):
$$ N_A = \frac{D_{AB} P}{R T (z_2 - z_1) p_{B,lm}} (p_{A1} - p_{A2}) $$

### The Concentration Profile
Because of the logarithmic term, the partial pressure profile of species A in unimolecular diffusion is **not a straight line**. It forms a concave curve. The gradient $dp_A/dz$ gets steeper as $x_A$ increases, because the required diffusive flux must overcome the lack of "bulk flow assist" at low concentrations.

## 4. Unimolecular Diffusion Features

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "stag", "data": { "label": "Stagnant Species B", "icon": "StopCircle", "description": "Nb = 0" }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "bulk", "data": { "label": "Bulk Flow Assist", "icon": "Wind", "description": "Amplifies flux of A." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "stef", "data": { "label": "Stefan's Law", "icon": "Hash", "description": "Log-mean pressure." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "prof", "data": { "label": "Concave Profile", "icon": "TrendingDown", "description": "Non-linear gradient." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "stag", "target": "bulk", "animated": true },
    { "source": "bulk", "target": "stef", "animated": true },
    { "source": "stef", "target": "prof", "animated": true }
  ]
}
```
