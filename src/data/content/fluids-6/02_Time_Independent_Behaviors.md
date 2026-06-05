# Time-Independent Behaviors

For these non-Newtonian fluids, the apparent viscosity changes instantly depending on the *shear rate* (how hard you are currently stirring or pushing it). As soon as you stop, the viscosity instantly returns to normal.

There are three main categories of time-independent non-Newtonian fluids.

## 1. Shear-Thinning (Pseudoplastic)

This is the most common type of non-Newtonian fluid.
**Behavior:** As you increase the shear rate, the apparent viscosity *decreases*. The harder you push it, the thinner and runnier it becomes.

*   *Microscopic cause:* The fluid contains long, tangled polymer chains. At rest, they are a mess, making the fluid thick. When you apply high shear, the chains untangle and align perfectly with the flow, allowing them to slide past each other with very little friction.
*   *Examples:* Paint, ketchup, blood, nail polish.
*   *Engineering Application:* Paint must be thick while sitting in the can or on the wall so it doesn't drip. But when you apply high shear stress with a paintbrush, it must instantly "thin out" to spread smoothly.

## 2. Shear-Thickening (Dilatant)

This is a much rarer and very strange behavior.
**Behavior:** As you increase the shear rate, the apparent viscosity *increases*. The harder you push it, the thicker and more solid it becomes.

*   *Microscopic cause:* The fluid is a highly concentrated suspension of solid particles. At rest, the liquid lubricates the particles. Under rapid shear, the particles jam together into rigid clusters, locking up the fluid.
*   *Examples:* Oobleck (cornstarch and water), wet sand on a beach (which goes dry and hard when you step on it hard).
*   *Engineering Application:* Liquid body armor. It remains flexible like a fabric while a soldier is running, but instantly turns into a rigid solid when subjected to the extreme high-shear impact of a bullet.

## 3. Bingham Plastics (Yield Stress Fluids)

These fluids behave exactly like a solid until you push them hard enough.
**Behavior:** They have a **Yield Stress** ($\tau_y$). If the applied stress is less than the yield stress ($\tau < \tau_y$), the fluid will not flow at all; it deforms elastically like a solid block. Once the stress exceeds the yield stress ($\tau > \tau_y$), it begins to flow.

*   *Microscopic cause:* The molecules form a rigid 3D lattice structure at rest. You must apply enough force to literally break that lattice before it can flow.
*   *Examples:* Toothpaste, mayonnaise, drilling mud.
*   *Engineering Application:* You want toothpaste to act like a solid while sitting on your toothbrush so it doesn't fall off into the sink. It only acts like a liquid when you apply stress by squeezing the tube.

## 4. The Power-Law Model (Ostwald-de Waele)

Engineers need a mathematical equation to model shear-thinning and shear-thickening fluids. The most common is the Power-Law model:

$$ \tau = K (\dot{\gamma})^n $$

*   $K$ is the **Flow Consistency Index** (acts roughly like a base viscosity).
*   $n$ is the **Flow Behavior Index**.
    *   If $n = 1$, the equation becomes $\tau = K \dot{\gamma}$. This is exactly Newton's law! (Newtonian fluid).
    *   If $n < 1$, the fluid is **shear-thinning**.
    *   If $n > 1$, the fluid is **shear-thickening**.

The Apparent Viscosity for a Power-Law fluid is therefore:
$$ \mu_{app} = \frac{\tau}{\dot{\gamma}} = K (\dot{\gamma})^{n-1} $$
