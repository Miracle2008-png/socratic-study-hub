# The Electric Field and Potential

Coulomb's Law states that two charges exert forces on each other across empty space. This idea of "action at a distance" bothered many physicists, including Michael Faraday. How does a proton "know" an electron is 5 meters away? 

To solve this philosophical problem, Faraday introduced the concept of the **Field**.

## 1. The Electric Field ($\mathbf{E}$)

A charge does not directly pull on another charge. Instead, a charge alters the very fabric of space around it, creating a "web" called an Electric Field. When a second charge enters this web, it is the local field at that exact spot that pushes on it.

The **Electric Field ($\mathbf{E}$)** at a specific point in space is defined as the electrostatic force ($\mathbf{F}$) that would be exerted on a tiny, positive "test charge" ($q_0$) placed at that point, divided by the magnitude of the test charge:

$$ \mathbf{E} = \frac{\mathbf{F}}{q_0} $$

*   **Units:** Newtons per Coulomb (N/C), or Volts per meter (V/m).
*   If you know the $\mathbf{E}$-field at a location, you can instantly find the force on *any* charge $q$ placed there: $\mathbf{F} = q\mathbf{E}$.

### The Field of a Point Charge
Using Coulomb's law, the electric field created by a single point charge $q$ at a distance $r$ is:
$$ \mathbf{E} = k_e \frac{q}{r^2} \hat{\mathbf{r}} $$

The field points *radially outward* from a positive charge, and *radially inward* toward a negative charge.

## 2. Electric Field Lines

To visualize these invisible vector fields, we draw Electric Field Lines.
1.  Lines must begin on positive charges and terminate on negative charges (or extend to infinity).
2.  The number of lines leaving a charge is proportional to the magnitude of the charge.
3.  The density of the lines (how close together they are) represents the strength of the field.
4.  Field lines can **never** cross. If they crossed, it would imply the field points in two different directions at the same point, which is physically impossible.

## 3. Electric Potential Energy ($U$)

Just like a mass has gravitational potential energy when lifted against gravity, a charge has **Electric Potential Energy ($U$)** when moved against an electric field.

If you want to push a positive charge closer to another positive charge, they repel. You must do physical work (force $\times$ distance) to push them together. This work is stored as potential energy. If you let go, the energy is converted into kinetic energy as they fly apart.

For two point charges, the potential energy is:
$$ U = k_e \frac{q_1 q_2}{r} $$
*(Note: Unlike Coulomb's force, $U$ depends on $1/r$, not $1/r^2$, and it is a scalar, not a vector).*

## 4. Electric Potential ($V$)

Electric Potential Energy ($U$) depends on the size of the test charge. We want a way to describe the "energy landscape" of space regardless of what charge we place there.

We define **Electric Potential ($V$)** as the potential energy per unit charge:
$$ V = \frac{U}{q} $$
*   **Units:** Joules per Coulomb (J/C), universally known as the **Volt (V)**.
*   "Voltage" is simply another name for a difference in Electric Potential ($\Delta V$).

For a single point charge $q$, the electric potential it creates at a distance $r$ is:
$$ V = k_e \frac{q}{r} $$

### Equipotential Surfaces
An equipotential surface is a 3D surface where the electric potential $V$ is identical everywhere. 
*   Because $\Delta V = 0$ along this surface, it requires **zero work** to move a charge along an equipotential line.
*   Electric field lines are **always exactly perpendicular** to equipotential surfaces.

## 5. The Link Between Field and Potential

Electric Field ($\mathbf{E}$) and Electric Potential ($V$) are mathematically intimately linked. 
*   **Field to Potential:** The potential difference between two points A and B is the negative line integral of the electric field:
    $$ V_B - V_A = -\int_A^B \mathbf{E} \cdot d\mathbf{l} $$
*   **Potential to Field:** The electric field points in the direction of the steepest decrease in potential. Mathematically, the field is the negative gradient of the potential:
    $$ \mathbf{E} = -\nabla V = -\left( \frac{\partial V}{\partial x}\hat{\mathbf{i}} + \frac{\partial V}{\partial y}\hat{\mathbf{j}} + \frac{\partial V}{\partial z}\hat{\mathbf{k}} \right) $$

In simple 1D uniform fields (like between two parallel plates), this reduces to the familiar equation: $E = \frac{\Delta V}{d}$.
