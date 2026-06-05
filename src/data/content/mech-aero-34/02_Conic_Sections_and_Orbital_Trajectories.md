# Conic Sections and Orbital Trajectories

The solution to the two-body equation of motion proves that any unpowered trajectory governed solely by gravity must trace out a **conic section**—a curve formed by the intersection of a plane and a cone.

There are four types of conic sections, each corresponding to a different type of orbital trajectory, determined primarily by the spacecraft's total specific mechanical energy ($\varepsilon$).

## 1. Specific Mechanical Energy ($\varepsilon$)

The total specific mechanical energy is the sum of specific kinetic energy and specific potential energy (energy per unit mass).

$$\varepsilon = \frac{v^2}{2} - \frac{\mu}{r}$$

-   Because we define potential energy to be zero at an infinite distance, potential energy is always negative in an orbit.
-   If Kinetic Energy < Potential Energy magnitude, total energy is **negative** ($\varepsilon < 0$). The spacecraft is trapped in a "gravity well." The orbit is closed.
-   If Kinetic Energy > Potential Energy magnitude, total energy is **positive** ($\varepsilon > 0$). The spacecraft has enough energy to escape the planet's gravity. The orbit is open.

## 2. The Four Trajectories

**1. Circle (e = 0, $\varepsilon < 0$)**
-   The simplest orbit. The distance ($r$) and velocity ($v$) remain perfectly constant.
-   It represents the lowest possible energy state for a given orbital radius.

**2. Ellipse (0 < e < 1, $\varepsilon < 0$)**
-   The most common orbit (all planets and most satellites). It is a closed, repeating path.
-   **Periapsis (Perigee around Earth):** The closest point to the central body. The spacecraft has maximum kinetic energy (moving fastest) and minimum potential energy.
-   **Apoapsis (Apogee around Earth):** The furthest point. The spacecraft has minimum kinetic energy (moving slowest) and maximum potential energy.

**3. Parabola (e = 1, $\varepsilon = 0$)**
-   The boundary between a closed and open orbit.
-   A spacecraft on a parabolic trajectory has exactly enough kinetic energy to reach an infinite distance with zero velocity remaining.
-   The velocity required for this trajectory is the **Escape Velocity** ($v_{esc} = \sqrt{2\mu/r}$).

**4. Hyperbola (e > 1, $\varepsilon > 0$)**
-   An open trajectory. The spacecraft approaches the planet, swings by, and flies off into infinity.
-   It has excess kinetic energy. Even at an infinite distance, it will still have a residual velocity called the hyperbolic excess velocity ($v_{\infty}$).
-   Used for interplanetary travel (e.g., leaving Earth for Mars, or performing a gravity assist flyby of Jupiter).

## 3. The Vis-Viva Equation

The Vis-Viva (living force) equation is arguably the most frequently used equation in basic astrodynamics. It relates the velocity ($v$) of an object at any point in an elliptical orbit to its distance ($r$) from the central body and the semi-major axis ($a$) of the orbit.

$$v^2 = \mu \left( \frac{2}{r} - \frac{1}{a} \right)$$

This powerful equation allows you to calculate the spacecraft's speed at any given altitude if you know the size of the orbit ($a$).
-   For a circular orbit ($r = a$), it simplifies to the circular velocity formula: $v_{circ} = \sqrt{\mu/r}$
-   For a parabolic escape trajectory ($a \to \infty$), it simplifies to the escape velocity formula: $v_{esc} = \sqrt{2\mu/r}$
