# Work and Pumping Liquids

In physics, work is defined as force applied over a distance: $W = F \cdot d$.

This simple multiplication only works if the force is **constant**. If the force changes as the object moves, we must use integration to sum up the tiny amounts of work done over infinitesimally small distances.

$$ W = \int_{a}^{b} F(x) \, dx $$

## 1. Work done by a Spring (Hooke's Law)

Hooke's Law states that the force required to stretch or compress a spring from its natural length is proportional to the distance it is stretched/compressed.
$$ F(x) = kx $$
Where $x$ is the displacement from equilibrium and $k$ is the spring constant.

Because the force increases as you pull it further, the work done to stretch a spring from $x=a$ to $x=b$ is:
$$ W = \int_{a}^{b} kx \, dx = \left[ \frac{1}{2} kx^2 \right]_a^b $$

## 2. Pumping Liquids out of a Tank

A classic and highly practical application of integration in engineering is calculating the work required to pump water (or oil, chemicals) out of a tank.

Why do we need integration?
Imagine a cylindrical tank full of water. You are pumping the water over the top edge.
*   The water at the very top of the tank hardly needs to be lifted at all. The work done on it is near zero.
*   The water at the bottom of the tank must be lifted the entire height of the tank. The work done on it is large.
Because the *distance* each drop of water must be lifted varies depending on its depth, we must slice the water into layers and integrate.

**The Strategy:**

1.  **Set up a coordinate system:** Usually, it's easiest to place $y=0$ at the bottom of the tank (or the top, depending on preference). Let's say $y=0$ is the bottom, and the top is $y=H$.
2.  **Take a representative horizontal "slice" of water:** Consider a very thin layer of water at a specific height $y$, with thickness $dy$.
3.  **Find the Volume of the slice ($dV$):**
    $dV = \text{Area}(y) \cdot dy$
    For a cylinder, the area is constant ($\pi r^2$). For a cone, the area changes with height, so you must use similar triangles to find the radius $r(y)$ at height $y$.
4.  **Find the Force (Weight) of the slice ($dF$):**
    Weight = mass $\times$ gravity = (density $\times$ volume) $\times$ gravity
    $dF = \rho \cdot g \cdot dV$
    *(Note: For water, $\rho \approx 1000$ kg/m³ and $g \approx 9.8$ m/s². Sometimes weight density $\gamma = \rho g = 9800$ N/m³ is given directly).*
5.  **Find the Distance the slice must be lifted ($D(y)$):**
    If the pump is at the top of the tank ($y=H$), then a slice at height $y$ must be lifted a distance of $H - y$.
6.  **Find the Work done on the slice ($dW$):**
    $dW = \text{Force} \times \text{Distance} = dF \cdot D(y)$
7.  **Integrate:** Sum up the work done on all the slices from the bottom of the water level ($y=a$) to the top of the water level ($y=b$).

$$ W = \int_{a}^{b} (\rho g \cdot \text{Area}(y)) \cdot (H - y) \, dy $$

## 3. Pulling up a Heavy Rope

Another common variation is pulling a heavy rope or chain up to a roof. As you pull the rope up, less and less of it is hanging down, so the weight (the force you must pull against) decreases.

Let the rope have length $L$ and linear mass density $\lambda$ (kg/m).
If $y$ is the length of rope already pulled up, the length still hanging is $L - y$.
The force required at that moment is the weight of the hanging rope: $F(y) = (L - y) \lambda g$.

The total work to pull the entire rope up is:
$$ W = \int_{0}^{L} \lambda g (L - y) \, dy $$


```diagram
{
  "direction": "LR",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Work and Pumping",
        "icon": "BrainCircuit",
        "description": "Core Concept: Work and Pumping"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Volumes of Revolution",
        "icon": "ArrowRightCircle",
        "description": "Disk and washer methods."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Arc Length",
        "icon": "ArrowRightCircle",
        "description": "Measuring curve distances."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Center of Mass",
        "icon": "CheckCircle",
        "description": "Physical applications of integrals."
      },
      "style": {
        "background": "#14532d",
        "color": "#dcfce7"
      }
    }
  ],
  "edges": [
    {
      "source": "1",
      "target": "2",
      "animated": true
    },
    {
      "source": "2",
      "target": "3",
      "animated": true
    },
    {
      "source": "3",
      "target": "4",
      "animated": true
    }
  ]
}
```
