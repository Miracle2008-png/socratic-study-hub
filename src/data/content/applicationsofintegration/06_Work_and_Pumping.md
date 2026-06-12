# Work and Pumping Liquids: Engineering Physics

In physics and mechanical engineering, work is fundamentally defined as force applied over a distance: $W = F \cdot d$.

This simple multiplication only works if the force is **constant**. However, in the real world, forces are rarely constant. As an elevator is pulled up by a heavy cable, the cable's weight decreases. As a spring is stretched, the force required increases. As a tank is emptied, the distance the fluid must be lifted changes. If the force or distance changes continuously, we must use integration to sum up the infinite amounts of microscopic work done over infinitesimally small distances.

$$ W = \int_{a}^{b} F(x) \, dx $$

## 1. Real-World Engineering Context

*   **Fluid Mechanics & Hydraulics:** Determining the pump specifications (horsepower, head pressure) required to empty an underground oil reservoir, municipal water tower, or ship ballast tank.
*   **Mechanical Systems:** Designing suspension systems or measuring the energy storage capacity of non-linear mechanical springs.
*   **Structural Engineering & Heavy Machinery:** Calculating the energy required by winches or cranes to lift heavy, distributed loads like anchor chains, mining cables, or elevator cables.
*   **Spaceflight:** Calculating the work done to escape Earth's gravity well, where the gravitational force decreases with the inverse square of distance.

## 2. Work done by a Spring (Hooke's Law)

Hooke's Law states that the force required to stretch or compress a spring from its natural (equilibrium) length is proportional to the distance it is displaced.
$$ F(x) = kx $$
Where $x$ is the displacement from equilibrium and $k$ is the spring constant (stiffness).

Because the force increases linearly as you pull it further, the work done to stretch a spring from $x=a$ to $x=b$ is:
$$ W = \int_{a}^{b} kx \, dx = \left[ \frac{1}{2} kx^2 \right]_a^b $$
This result represents the potential energy stored in the spring.

## 3. Pulling up a Heavy Cable or Chain

Consider lifting a heavy cable up to a roof. As you pull the cable up, more of it accumulates on the roof and less hangs down. Therefore, the weight (the force you must pull against) decreases linearly over time.

Let a cable have total length $L$ and linear mass density $\lambda$ (kg/m).
If $y$ is the length of cable already pulled up onto the roof, the length still hanging is $L - y$.
The force required at that specific moment is the weight of the hanging cable: $F(y) = (L - y) \lambda g$.

The total work to pull the entire cable up is:
$$ W = \int_{0}^{L} \lambda g (L - y) \, dy $$

## 4. Pumping Liquids out of a Tank

A classic and highly practical application of integration is calculating the work required to pump water, chemicals, or petroleum out of a tank against gravity.

**Why do we need integration?**
Imagine a tall cylindrical tank full of water. You are pumping the water over the top edge.
*   The water at the very top of the tank barely needs to be lifted at all. The work done on it is near zero.
*   The water at the bottom of the tank must be lifted the entire height of the tank. The work done on it is massive.
Because the *distance* each drop of water must be lifted varies entirely depending on its depth, we must slice the fluid into horizontal layers and integrate.

**The Strategic Blueprint:**
1.  **Set up a coordinate system:** Usually, it is easiest to place $y=0$ at the bottom of the tank. Let the top of the tank be $y=H$.
2.  **Take a representative horizontal "slice":** Consider a very thin layer of fluid at a specific height $y$, with infinitesimal thickness $dy$.
3.  **Find the Volume of the slice ($dV$):**
    $dV = \text{Area}(y) \cdot dy$
    *   For a vertical cylinder or rectangular prism, the cross-sectional area is constant.
    *   For a cone or a sphere, the cross-sectional area changes with height, so you must use geometry (like similar triangles or Pythagorean theorem) to find the radius $r(y)$ at height $y$.
4.  **Find the Force (Weight) of the slice ($dF$):**
    Weight = mass $\times$ gravity = (density $\times$ volume) $\times$ gravity
    $dF = \rho \cdot g \cdot dV$
    *(Note: For water, $\rho \approx 1000$ kg/m³ and $g \approx 9.8$ m/s². Sometimes weight density $\gamma = \rho g = 9800$ N/m³ is given directly).*
5.  **Find the Distance the slice must be lifted ($D(y)$):**
    If the pump is discharging at the top of the tank ($y=H$), then a slice currently at height $y$ must be lifted a distance of $H - y$.
6.  **Find the Work done on the slice ($dW$):**
    $dW = \text{Force} \times \text{Distance} = dF \cdot D(y)$
7.  **Integrate:** Sum up the work done on all slices from the bottom of the water level ($y=a$) to the top of the water level ($y=b$).

$$ W = \int_{a}^{b} (\rho g \cdot \text{Area}(y)) \cdot (H - y) \, dy $$

## 5. Mathematical Examples

### Example 1: Stretching a Spring (Easy)
A force of $40$ N is required to hold a spring that has been stretched from its natural length of $10$ cm to a length of $15$ cm. How much work is done in stretching the spring from $15$ cm to $18$ cm?

**Step 1: Find the spring constant $k$.**
Natural length is $0.10$ m. Displacement for $40$ N is $x = 0.15 - 0.10 = 0.05$ m.
$$ F = kx \implies 40 = k(0.05) \implies k = 800 \text{ N/m} $$

**Step 2: Set up and evaluate the integral.**
We want the work from $x = 0.05$ m to $x = 0.18 - 0.10 = 0.08$ m.
$$ W = \int_{0.05}^{0.08} 800x \, dx = \left[ 400x^2 \right]_{0.05}^{0.08} = 400(0.08^2 - 0.05^2) = 400(0.0064 - 0.0025) = 400(0.0039) = 1.56 \text{ Joules} $$

### Example 2: Lifting a Heavy Chain (Medium)
A $20$ m long chain with a mass of $100$ kg hangs from the edge of a tall building. How much work is required to pull the entire chain up to the roof? ($g \approx 9.8$ m/s²)

**Step 1: Define variables.**
Linear mass density $\lambda = \frac{100 \text{ kg}}{20 \text{ m}} = 5 \text{ kg/m}$.
Let $y$ be the amount of chain already pulled onto the roof ($y$ goes from $0$ to $20$).
The length of chain still hanging is $20 - y$.

**Step 2: Set up force and distance.**
The force required is the weight of the hanging chain: $F(y) = (20 - y) \cdot 5 \cdot 9.8 = 49(20 - y)$ Newtons.
When pulling up a tiny segment $dy$, the work is $dW = F(y) \, dy$.

**Step 3: Evaluate.**
$$ W = \int_{0}^{20} 49(20 - y) \, dy = 49 \left[ 20y - \frac{y^2}{2} \right]_{0}^{20} = 49 \left(400 - \frac{400}{2}\right) = 49(200) = 9800 \text{ Joules} $$

### Example 3: Pumping a Cylindrical Tank (Medium)
A cylindrical tank with radius $2$ m and height $5$ m is full of water. Find the work required to pump all the water out over the top edge of the tank. ($\rho = 1000$ kg/m³, $g = 9.8$ m/s²)

**Step 1: Slice the tank.**
Set $y=0$ at the bottom, $y=5$ at the top.
Consider a slice at height $y$ with thickness $dy$.
Area of slice = $\pi r^2 = \pi(2)^2 = 4\pi$.
Volume of slice $dV = 4\pi \, dy$.
Force (weight) of slice $dF = \rho g \, dV = 9800 \cdot 4\pi \, dy = 39200\pi \, dy$.

**Step 2: Distance.**
A slice at height $y$ must be lifted to the top ($y=5$).
Distance = $5 - y$.

**Step 3: Integrate.**
We pump from the bottom ($y=0$) to the top ($y=5$).
$$ W = \int_{0}^{5} 39200\pi (5 - y) \, dy = 39200\pi \left[ 5y - \frac{y^2}{2} \right]_{0}^{5} = 39200\pi \left(25 - \frac{25}{2}\right) = 39200\pi (12.5) = 490000\pi \text{ Joules} $$

### Example 4: Pumping a Conical Tank (Hard)
An inverted conical tank (vertex at the bottom) has a height of $10$ m and a top radius of $4$ m. It is filled with water to a depth of $8$ m. Find the work required to pump all the water over the top edge. ($\rho = 1000, g = 9.8$)

**Step 1: Slice the tank.**
Set $y=0$ at the vertex (bottom). The tank goes up to $y=10$.
We need the radius $r$ at an arbitrary height $y$.
Using similar triangles from the side cross-section:
$\frac{r}{y} = \frac{4}{10} \implies r = \frac{2}{5}y$.
Area of slice = $\pi r^2 = \pi \left(\frac{2}{5}y\right)^2 = \frac{4\pi}{25} y^2$.
Force (weight) of slice $dF = \rho g \left(\frac{4\pi}{25} y^2\right) dy = 9800 \cdot \frac{4\pi}{25} y^2 \, dy = 1568\pi y^2 \, dy$.

**Step 2: Distance.**
The water must be pumped to the top of the tank ($y=10$).
Distance = $10 - y$.

**Step 3: Integrate.**
The water only exists from $y=0$ to $y=8$ (the current depth). We only integrate where the water actually is!
$$ W = \int_{0}^{8} (1568\pi y^2) (10 - y) \, dy = 1568\pi \int_{0}^{8} (10y^2 - y^3) \, dy $$
$$ W = 1568\pi \left[ \frac{10y^3}{3} - \frac{y^4}{4} \right]_{0}^{8} = 1568\pi \left( \frac{10(512)}{3} - \frac{4096}{4} \right) = 1568\pi \left( \frac{5120}{3} - 1024 \right) $$
$$ W = 1568\pi \left( \frac{5120 - 3072}{3} \right) = 1568\pi \left( \frac{2048}{3} \right) \approx 3.36 \times 10^6 \text{ Joules} $$

```diagram
{
  "direction": "TB",
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Work & Energy",
        "icon": "BrainCircuit",
        "description": "Integration of Force * Distance"
      },
      "style": {
        "background": "#1e3a8a",
        "color": "#dbeafe"
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Fluid Pumping",
        "icon": "ArrowRightCircle",
        "description": "Emptying complex tanks."
      },
      "style": {
        "background": "#4c1d95",
        "color": "#ede9fe"
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Spring Systems",
        "icon": "ArrowRightCircle",
        "description": "Hooke's law & elastic potential."
      },
      "style": {
        "background": "#b45309",
        "color": "#fef3c7"
      }
    },
    {
      "id": "4",
      "data": {
        "label": "Heavy Cables",
        "icon": "CheckCircle",
        "description": "Variable loads in hoisting."
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
      "source": "1",
      "target": "3",
      "animated": true
    },
    {
      "source": "1",
      "target": "4",
      "animated": true
    }
  ]
}
```
