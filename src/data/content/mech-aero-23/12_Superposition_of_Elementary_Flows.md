# Superposition of Elementary Flows

The true power of Potential Flow Theory lies in the principle of superposition. Because Laplace's equation ($\nabla^2 \psi = 0$) is linear, if $\psi_1$ and $\psi_2$ are valid flows, then $\psi_3 = \psi_1 + \psi_2$ is also a physically valid, irrotational flow field.

By adding our basic mathematical building blocks (Uniform Flow, Sources, Sinks, Vortices) together, we can "build" the airflow around complex physical geometries.

## 1. Flow Over a Half-Body (Rankine Half-Body)

**Superposition:** Uniform Flow + One Source at the origin.
$$\psi = U r \sin\theta + \frac{q}{2\pi} \theta$$

**Result:** The uniform wind blows from left to right. The source explodes fluid radially outward. 
- At some point directly upstream of the source, the uniform wind velocity exactly cancels out the source velocity. The fluid is perfectly stationary. This is a **Stagnation Point**.
- If you trace the streamline passing through this stagnation point, it creates a bullet-shaped parabolic curve that surrounds the source.
- Because fluid cannot cross a streamline, we can imagine replacing this stagnation streamline with a solid metal shell. We have just mathematically modeled the exact airflow over a blunt, bullet-shaped object (a bridge pier or a pitot tube)!

## 2. Flow Over a Cylinder

**Superposition:** Uniform Flow + Doublet at the origin.

**Result:** The doublet creates circular lobes of flow. When hit by the uniform wind, it forces the flow to perfectly diverge around a circular region. 
- The stagnation streamline forms a perfect circle of radius $a$.
- We can replace this mathematical streamline with a solid metal cylinder. We now have the complete velocity and pressure field for ideal flow over a cylinder.
- There are two stagnation points: one exactly at the front, and one exactly at the rear. The pressure is perfectly symmetric front-to-back, leading to d'Alembert's Paradox (zero drag).

## 3. Flow Over a Spinning Cylinder (The Magnus Effect)

**Superposition:** Uniform Flow + Doublet + **Free Vortex** at the origin.

**Result:** We take the flow over a cylinder and add a swirling vortex to it. 
- On the top of the cylinder, the vortex spin matches the direction of the uniform wind. The velocity there is extremely high.
- On the bottom of the cylinder, the vortex spin opposes the uniform wind. The velocity there is low.
- By Bernoulli's equation, high velocity means low pressure, and low velocity means high pressure.
- There is a net pressure force pushing the cylinder UPWARD. **We have mathematically generated Lift!**

This phenomenon—where a spinning object moving through a fluid generates lift—is the **Magnus Effect**. It is the reason a pitcher can throw a curving baseball, and why a tennis ball with topspin dives aggressively down into the court.

## 4. Modeling Airfoils

This superposition concept is not limited to cylinders. 
In the early 20th century, aerodynamicists realized that by placing a massive number of tiny vortices and sources in a specific line (a "Vortex Sheet"), they could shape the stagnation streamline into a perfect airplane wing profile. 

This **Thin Airfoil Theory** allowed engineers to analytically calculate the lift coefficient ($C_L \approx 2\pi\alpha$) and pitching moment of any wing shape decades before computers and CFD were invented, laying the mathematical foundation for modern aviation.
