# 05. Fluid Kinematics

## 1. Introduction

Fluid kinematics is the study of fluids in motion without explicit consideration of the forces causing the motion. It focuses primarily on describing the spatial and temporal variations of fluid velocity, acceleration, and flow patterns. In civil engineering, understanding the kinematics of water is essential for tracing pollutant dispersion in rivers, analyzing flow through pipe networks, and modeling surface runoff.

There are two primary frameworks for observing fluid motion:
1. **Lagrangian Method:** Tracks individual fluid particles as they move through space and time (like following a single leaf floating down a river).
2. **Eulerian Method:** Focuses on specific points in space and observes the fluid as it passes through those points (like measuring the river's velocity from a stationary bridge). The Eulerian approach is predominantly used in fluid mechanics because it yields field variables like velocity $\vec{V}(x,y,z,t)$.

## 2. Classification of Flow

Hydraulic engineering categorizes flow based on how fluid properties change with respect to time and space.

### Steady vs. Unsteady Flow
- **Steady Flow:** Fluid properties (velocity, pressure, density) at any given point do not change with time ($\frac{\partial \vec{V}}{\partial t} = 0$). For example, flow in a pipe fed by a constant-head reservoir.
- **Unsteady Flow:** Fluid properties at a point change with time ($\frac{\partial \vec{V}}{\partial t} \neq 0$). For example, a river during a flash flood.

### Uniform vs. Non-uniform Flow
- **Uniform Flow:** The velocity vector does not change from point to point along a streamline at a given instant ($\frac{\partial \vec{V}}{\partial s} = 0$). This occurs in long, straight pipes of constant diameter.
- **Non-uniform Flow:** The velocity changes spatially. This occurs when a pipe expands or contracts, or when water flows over a weir.

### Laminar vs. Turbulent Flow
- **Laminar Flow:** Fluid particles move in smooth, parallel layers with no lateral mixing.
- **Turbulent Flow:** Highly chaotic motion with significant macroscopic mixing and eddies. In civil engineering, the vast majority of water flows (rivers, large pipes) are turbulent.

## 3. The Continuity Equation

The continuity equation is a mathematical expression of the **Conservation of Mass**. It states that mass can neither be created nor destroyed within a flow system.

For a general control volume, the rate at which mass enters must equal the rate at which mass leaves plus the rate of mass accumulation within the volume:
$$ \sum \dot{m}_{\text{in}} = \sum \dot{m}_{\text{out}} + \frac{dm_{\text{cv}}}{dt} $$

For **steady flow** (no accumulation), this becomes:
$$ \sum \rho_1 A_1 V_1 = \sum \rho_2 A_2 V_2 $$

For **incompressible flow** (constant density, like water), the volume flow rate ($Q$) is conserved. This is the most common form of the continuity equation used in civil engineering:
$$ Q = A_1 V_1 = A_2 V_2 = \text{constant} $$
where $A$ is the cross-sectional area and $V$ is the average fluid velocity.

---

### Example 1: Pipe Contraction
**Problem:** A water pipe has a diameter of $300 \text{ mm}$ at section 1 and tapers down to a diameter of $150 \text{ mm}$ at section 2. If the velocity of water at section 1 is $2.5 \text{ m/s}$, calculate the discharge (flow rate) and the velocity at section 2.

**Solution:**
1. Calculate the cross-sectional areas:
$$ A_1 = \frac{\pi (0.3)^2}{4} = 0.0707 \text{ m}^2 $$
$$ A_2 = \frac{\pi (0.15)^2}{4} = 0.0177 \text{ m}^2 $$

2. Calculate the discharge ($Q$) using conditions at section 1:
$$ Q = A_1 V_1 = 0.0707 \times 2.5 = 0.1767 \text{ m}^3\text{/s} \text{ (or } 176.7 \text{ L/s)} $$

3. Use the continuity equation for incompressible flow to find $V_2$:
$$ A_1 V_1 = A_2 V_2 \implies Q = A_2 V_2 $$
$$ V_2 = \frac{Q}{A_2} = \frac{0.1767}{0.0177} = 10.0 \text{ m/s} $$
Alternatively, recognizing that diameter halves means area quarters, the velocity must quadruple to conserve mass ($2.5 \times 4 = 10 \text{ m/s}$).

---

### Example 2: Flow Division in a Network
**Problem:** A main pipe carries water at a rate of $0.5 \text{ m}^3\text{/s}$. It branches into two parallel pipes, A and B. Pipe A has a diameter of $400 \text{ mm}$ and carries a velocity of $1.5 \text{ m/s}$. If Pipe B has a diameter of $250 \text{ mm}$, what is the velocity of water in Pipe B?

**Solution:**
1. From conservation of mass for a junction:
$$ Q_{\text{main}} = Q_A + Q_B $$

2. Calculate the flow rate in Pipe A ($Q_A$):
$$ A_A = \frac{\pi (0.4)^2}{4} = 0.1257 \text{ m}^2 $$
$$ Q_A = A_A V_A = 0.1257 \times 1.5 = 0.1885 \text{ m}^3\text{/s} $$

3. Determine the flow rate in Pipe B ($Q_B$):
$$ Q_B = Q_{\text{main}} - Q_A = 0.5 - 0.1885 = 0.3115 \text{ m}^3\text{/s} $$

4. Calculate the velocity in Pipe B ($V_B$):
$$ A_B = \frac{\pi (0.25)^2}{4} = 0.0491 \text{ m}^2 $$
$$ V_B = \frac{Q_B}{A_B} = \frac{0.3115}{0.0491} = 6.34 \text{ m/s} $$

---

## 4. Acceleration of a Fluid Particle

In the Eulerian framework, the velocity field is $\vec{V} = u\hat{i} + v\hat{j} + w\hat{k}$, where each component is a function of $(x,y,z,t)$. 
The total acceleration ($\vec{a}$) of a fluid particle is the material derivative of the velocity:
$$ \vec{a} = \frac{D\vec{V}}{Dt} = \frac{\partial \vec{V}}{\partial t} + u\frac{\partial \vec{V}}{\partial x} + v\frac{\partial \vec{V}}{\partial y} + w\frac{\partial \vec{V}}{\partial z} $$
This shows that a fluid particle can accelerate due to two distinct causes:
1. **Local Acceleration ($\frac{\partial \vec{V}}{\partial t}$):** Occurs in unsteady flow when the velocity at a fixed point changes with time (e.g., opening a valve).
2. **Convective Acceleration ($(\vec{V}\cdot\nabla)\vec{V}$):** Occurs in non-uniform flow when the particle moves into a region of different velocity (e.g., flowing through a pipe contraction), even if the flow is steady.

---

### Example 3: Convective Acceleration
**Problem:** In a steady, one-dimensional flow through a diverging nozzle, the velocity field along the centerline is given by $V(x) = \frac{10}{1 + x} \text{ m/s}$, where $x$ is the distance from the inlet in meters. Determine the acceleration of a fluid particle at $x = 4 \text{ m}$.

**Solution:**
Since the flow is steady, the local acceleration is zero ($\frac{\partial V}{\partial t} = 0$). 
The flow is one-dimensional, so the acceleration is purely convective:
$$ a_x = u \frac{\partial u}{\partial x} $$

First, find the velocity $u$ at $x = 4$:
$$ u(4) = \frac{10}{1 + 4} = 2 \text{ m/s} $$

Next, find the spatial gradient $\frac{\partial u}{\partial x}$:
$$ \frac{\partial u}{\partial x} = \frac{d}{dx} \left( 10(1+x)^{-1} \right) = -10(1+x)^{-2} = \frac{-10}{(1+x)^2} $$

Evaluate the gradient at $x = 4$:
$$ \frac{\partial u}{\partial x} \bigg|_{x=4} = \frac{-10}{(1+4)^2} = \frac{-10}{25} = -0.4 \text{ s}^{-1} $$

Calculate the total acceleration:
$$ a_x = u \frac{\partial u}{\partial x} = (2 \text{ m/s}) \times (-0.4 \text{ s}^{-1}) = -0.8 \text{ m/s}^2 $$
The negative sign indicates deceleration as the nozzle diverges and the area increases.

## Conclusion
Kinematics lays the groundwork for more complex fluid dynamics. By understanding velocity fields, distinguishing between types of flows, and enforcing the continuity equation, civil engineers can effectively size pipes and channels to handle required discharge rates without causing excessive or damaging velocities.

```diagram
{
  "type": "flowchart",
  "direction": "TB",
  "nodes": [
    {"id": "Kinematics", "label": "Fluid Kinematics"},
    {"id": "Classification", "label": "Flow Classification"},
    {"id": "Steady", "label": "Steady vs. Unsteady\\n(Time Dependence)"},
    {"id": "Uniform", "label": "Uniform vs. Non-uniform\\n(Spatial Dependence)"},
    {"id": "Continuity", "label": "Continuity Equation\\n(Conservation of Mass)"},
    {"id": "Incompressible", "label": "Incompressible\\n(Q = A1*V1 = A2*V2)"},
    {"id": "Acceleration", "label": "Fluid Acceleration"},
    {"id": "Local", "label": "Local Accel.\\n(Unsteady)"},
    {"id": "Convective", "label": "Convective Accel.\\n(Non-uniform)"}
  ],
  "edges": [
    {"from": "Kinematics", "to": "Classification"},
    {"from": "Classification", "to": "Steady"},
    {"from": "Classification", "to": "Uniform"},
    {"from": "Kinematics", "to": "Continuity"},
    {"from": "Continuity", "to": "Incompressible"},
    {"from": "Kinematics", "to": "Acceleration"},
    {"from": "Acceleration", "to": "Local"},
    {"from": "Acceleration", "to": "Convective"}
  ]
}
```
