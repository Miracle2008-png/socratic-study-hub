# Non-Newtonian Fluids

Throughout this topic, we assumed fluids obeyed Newton's Law of Viscosity ($\tau = \mu \frac{du}{dy}$), meaning their viscosity ($\mu$) is a constant value regardless of how hard you stir them. Water, air, alcohol, and gasoline are all perfectly Newtonian.

However, many critical substances in chemical, food, and biomedical engineering do not obey this rule. These are **Non-Newtonian Fluids**.

## 1. Time-Independent Non-Newtonian Fluids

For these fluids, the apparent viscosity changes depending on the shear rate (how fast you stir or pump them), but it does not depend on how long you have been stirring.

### Shear-Thinning (Pseudoplastic) Fluids
As you increase the shear rate (stir faster), the fluid becomes **thinner** (viscosity decreases).
- **Examples**: Paint, ketchup, blood, polymer melts.
- **Physics**: At rest, the long polymer chains or suspended particles are tangled like a bowl of spaghetti, creating high viscosity. As you shear the fluid, the chains physically untangle and align in the direction of flow, allowing them to slide past each other easily.
- **Engineering impact**: Paint is thick in the can (doesn't separate), gets very thin when sheared by a brush (applies easily), and instantly becomes thick again on the wall (doesn't drip).

### Shear-Thickening (Dilatant) Fluids
As you increase the shear rate, the fluid becomes **thicker** (viscosity increases).
- **Examples**: Cornstarch in water (oobleck), wet sand, certain nanoparticle suspensions.
- **Physics**: At slow speeds, the water lubricates the solid particles, allowing them to flow. Under rapid shear, the particles jam together into a solid-like lattice, squeezing the water out. 

### Bingham Plastics (Viscoplastic Fluids)
These fluids behave exactly like solid materials until a specific minimum shear stress (the **Yield Stress**, $\tau_y$) is applied. Once that threshold is crossed, they begin to flow, often behaving like a Newtonian fluid thereafter.
- **Examples**: Toothpaste, mayonnaise, drilling mud.
- **Engineering impact**: Toothpaste sits solidly on your toothbrush. It only flows when you apply a distinct shearing force by squeezing the tube. In petroleum engineering, drilling mud must act like a fluid while the drill is spinning, but instantly turn solid when the drill stops to prevent rock cuttings from sinking to the bottom of the hole.

## 2. Power-Law Model (Ostwald-de Waele)

Because Non-Newtonian fluids don't have a single constant viscosity, engineers cannot use the standard Navier-Stokes equations. Instead, they use empirical models to describe the relationship between shear stress ($\tau$) and shear rate ($\dot{\gamma} = du/dy$).

The most common engineering model is the **Power-Law Model**:
$$ \tau = K (\dot{\gamma})^n $$

Where:
- $K$ is the **Consistency Index** (similar to viscosity).
- $n$ is the **Flow Behavior Index**.

- If $n = 1$, the fluid is Newtonian (and $K = \mu$).
- If $n < 1$, the fluid is shear-thinning. (The smaller $n$ is, the more drastically it thins).
- If $n > 1$, the fluid is shear-thickening.

## 3. Time-Dependent Non-Newtonian Fluids

For these extremely complex fluids, the apparent viscosity changes based on both the shear rate *and* how long that shear has been applied.

- **Thixotropic Fluids**: Viscosity decreases over time under constant shear. If you stir it at a constant speed, it gets thinner and thinner the longer you stir. When you stop, it slowly rebuilds its structure over hours or days. (e.g., yogurt, some drilling muds).
- **Rheopectic Fluids**: Viscosity increases over time under constant shear. (Very rare, e.g., certain gypsum pastes).

## 4. Non-Newtonian Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "newt", "data": { "label": "Newtonian", "icon": "Droplet", "description": "Constant viscosity." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "ti", "data": { "label": "Time-Independent", "icon": "Clock", "description": "Shear dependent." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "pow", "data": { "label": "Power-Law", "icon": "Activity", "description": "n-index model." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "td", "data": { "label": "Time-Dependent", "icon": "RotateCcw", "description": "Thixotropic." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "ti", "target": "pow", "animated": true }
  ]
}
```
