# Buoyancy and Archimedes' Principle

When you submerge a solid object in a fluid, the object feels lighter. A heavy rock that requires great effort to lift in air can often be easily lifted underwater. This upward force exerted by a fluid on a submerged or floating body is called the **buoyant force**.

## 1. The Origin of Buoyancy

Buoyancy is a direct consequence of the hydrostatic pressure distribution. 
- Pressure in a fluid increases with depth ($P = \rho g h$).
- Therefore, the pressure pushing *upward* on the bottom of a submerged object is strictly greater than the pressure pushing *downward* on the top of the object.
- The horizontal forces pushing on the sides cancel each other out.
- The net result is a net upward force: the buoyant force ($F_B$).

## 2. Archimedes' Principle

Over 2000 years ago, the Greek mathematician Archimedes formalized this observation.

**Archimedes' Principle:** 
*The buoyant force acting on a body immersed in a fluid is equal to the weight of the fluid displaced by the body, and it acts upward through the centroid of the displaced volume.*

Mathematically:
$$F_B = W_{displaced\_fluid} = m_{fluid} g = \rho_{fluid} g V_{displaced}$$
$$\boxed{F_B = \gamma_{fluid} V_{displaced}}$$

- $\rho_{fluid}$: Density of the *fluid*, NOT the object.
- $V_{displaced}$: Volume of the *submerged portion* of the object.

The point where the buoyant force acts is called the **Center of Buoyancy (B)**. It is exactly the geometric centroid of the displaced volume of fluid.

## 3. Fully Submerged Bodies

If an object of volume $V_{obj}$ and average density $\rho_{obj}$ is completely submerged:
- Upward Buoyant Force: $F_B = \rho_{fluid} g V_{obj}$
- Downward Weight: $W = \rho_{obj} g V_{obj}$

The net force determines the object's fate:
1. **$\rho_{obj} > \rho_{fluid}$ (Net force is down):** The object sinks. (e.g., a steel anchor in water).
2. **$\rho_{obj} = \rho_{fluid}$ (Net force is zero):** The object is neutrally buoyant. It hovers stationary at whatever depth it is placed. (e.g., submarines use ballast tanks to achieve exactly this state).
3. **$\rho_{obj} < \rho_{fluid}$ (Net force is up):** The object accelerates upward to the surface. Once it breaks the surface, it becomes a floating body.

## 4. Floating Bodies

When a body floats at the surface, it is in static equilibrium in the vertical direction. Its downward weight is perfectly balanced by the upward buoyant force.

$$W = F_B$$
$$\rho_{obj} g V_{total} = \rho_{fluid} g V_{submerged}$$

Rearranging gives the fraction of the object's volume that is submerged:
$$\frac{V_{submerged}}{V_{total}} = \frac{\rho_{obj}}{\rho_{fluid}}$$

**Example:** Ice floating in water.
$\rho_{ice} \approx 920 \, kg/m^3$
$\rho_{seawater} \approx 1025 \, kg/m^3$
Fraction submerged = $920 / 1025 \approx 0.90$. 
This is why 90% of an iceberg is underwater.

## 5. Hydrometers

A hydrometer exploits this principle to measure the specific gravity of liquids. It is a weighted glass bulb with a graduated stem. When placed in a liquid, it sinks until it displaces its own weight. In a dense liquid (like saltwater), it floats high. In a less dense liquid (like alcohol), it sinks deeper. The fluid density is read directly from where the fluid surface crosses the scale on the stem.
