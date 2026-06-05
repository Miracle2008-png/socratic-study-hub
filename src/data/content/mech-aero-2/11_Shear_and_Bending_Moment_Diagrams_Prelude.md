# Shear and Bending Moment Diagrams: Prelude

Finding the internal forces ($N, V, M$) at a single specific point using the method of sections is useful, but it does not tell an engineer where the maximum stresses occur along the entire length of the beam. 

To design a safe beam, we must map out the internal shear and bending moment as a continuous function of position $x$ along the beam's axis. We plot these functions as **Shear and Bending Moment Diagrams**.

## 1. Formulating the Equations

Instead of making a cut at a specific numerical distance (e.g., $x = 2$ meters), we make a conceptual cut at an arbitrary distance $x$ from the left end.

By establishing the origin $x=0$ at the left end of the beam, we draw a free-body diagram of a segment of length $x$. The internal forces $V(x)$ and $M(x)$ are now functions of the variable $x$.

Applying the equilibrium equations to this segment of length $x$:
$$ \sum F_y = 0 \implies V(x) = \dots $$
$$ \sum M_{cut} = 0 \implies M(x) = \dots $$

## 2. Discontinuities

The analytical functions $V(x)$ and $M(x)$ will change abruptly whenever the applied loading changes. Therefore, a single continuous mathematical function is rarely sufficient for the entire beam.

You must write a new set of functions for $V(x)$ and $M(x)$ for every continuous region of the beam between:
- Concentrated point loads.
- Concentrated couple moments.
- The start and end of distributed loads.
- Support reactions.

For example, a beam with a point load in the middle requires two sets of equations: one valid for $0 \le x < L/2$, and a second set valid for $L/2 < x \le L$.

## 3. Relationships Between Load, Shear, and Moment

By taking a differential element $dx$ of a beam subjected to a distributed load $w(x)$ (where positive $w$ points upward), the differential equations of equilibrium yield three profound mathematical relationships:

1. **Load and Shear:** The rate of change (derivative) of the shear force with respect to $x$ is equal to the intensity of the distributed load.
   $$ \frac{dV}{dx} = w(x) $$
   *(Consequently, the change in shear $\Delta V$ between two points is the area under the $w(x)$ curve).*

2. **Shear and Moment:** The rate of change of the bending moment with respect to $x$ is equal to the shear force.
   $$ \frac{dM}{dx} = V(x) $$
   *(Consequently, the change in moment $\Delta M$ between two points is the area under the shear diagram).*

3. **Maximum Moment:** By calculus, the maximum bending moment occurs where the derivative is zero. Therefore, $M_{max}$ occurs precisely at the point where the shear diagram crosses the zero axis ($V = 0$).

These relationships form the graphical basis for rapidly drawing shear and moment diagrams without writing out complex equations, a vital skill in structural mechanics.
