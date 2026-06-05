# General Equations of Plane Stress

By performing the wedge equilibrium analysis described in the previous section, we derive a set of trigonometric equations that allow us to calculate the stresses on an element rotated by an angle $\theta$.

## 1. The Transformation Equations

Let the original stress state be defined by $\sigma_x$, $\sigma_y$, and $\tau_{xy}$.
Let the rotated coordinate system be $x'$ and $y'$, tilted counter-clockwise by angle $\theta$.

The normal stress acting on the new $x'$ face is:
$$ \sigma_{x'} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2}\cos(2\theta) + \tau_{xy}\sin(2\theta) $$

The shear stress acting on the new $x'$ face is:
$$ \tau_{x'y'} = -\frac{\sigma_x - \sigma_y}{2}\sin(2\theta) + \tau_{xy}\cos(2\theta) $$

The normal stress acting on the new perpendicular $y'$ face (which is rotated $90^\circ$ further, so substitute $\theta + 90^\circ$ into the first equation) is:
$$ \sigma_{y'} = \frac{\sigma_x + \sigma_y}{2} - \frac{\sigma_x - \sigma_y}{2}\cos(2\theta) - \tau_{xy}\sin(2\theta) $$

## 2. Sign Convention Rules

Strict adherence to sign convention is absolutely vital when using these equations:

*   **Normal Stress ($\sigma$):** Tension is positive (+), Compression is negative (-).
*   **Shear Stress ($\tau$):** A shear stress acting on the right-hand face pointing upwards (in the +y direction) is positive (+). If it points downward, it is negative (-).
*   **Angle ($\theta$):** Counter-clockwise rotation from the reference x-axis is positive (+). Clockwise is negative (-).

## 3. The Invariant Property

If we add the equations for the two rotated normal stresses together, a fascinating mathematical property emerges:

$$ \sigma_{x'} + \sigma_{y'} = \sigma_x + \sigma_y $$

The sum of the normal stresses acting on any two mutually perpendicular planes is a constant invariant. No matter how you rotate the element, the total amount of normal stress pushing or pulling on it remains exactly the same. The rotation simply shifts the burden from one face to the other.

## 4. Practical Application

If an engineer needs to weld two pieces of steel plate together at a $30^\circ$ seam, they must know the exact normal and shear stress acting perfectly perpendicular and parallel to that weld line to ensure the weld doesn't crack. They would calculate the basic $\sigma_x, \sigma_y, \tau_{xy}$ based on the loads, and then simply plug $\theta = 30^\circ$ into these transformation equations to find the stresses explicitly on the weld seam.
