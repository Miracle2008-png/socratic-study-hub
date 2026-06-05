# The Concept of Stress

When a structural member is subjected to external loads, internal forces develop throughout the body to maintain equilibrium. **Stress** is the mathematical concept used to describe the *intensity* of these internal forces distributed over a specific area.

## 1. Defining Stress

Consider an arbitrary cut section through a solid body. At a specific point on this cut surface, imagine an infinitesimally small area element $\Delta A$. An infinitesimally small internal force $\Delta \mathbf{F}$ acts on this area element.

Stress is defined as the force per unit area acting on that specific point, as the area shrinks to zero:
$$ \text{Stress} = \lim_{\Delta A \to 0} \frac{\Delta \mathbf{F}}{\Delta A} $$

Stress is a tensor quantity, but for engineering purposes, it is broken down into specific directional components relative to the cut surface.

## 2. Normal Stress ($\sigma$)

**Normal stress** is the intensity of the internal force acting *perpendicular* (normal) to the cut surface.

If the internal force vector $\Delta \mathbf{F}$ is resolved, the component perpendicular to the area $\Delta A$ is $\Delta F_n$.
The normal stress, denoted by the Greek letter sigma ($\sigma$), is defined as:
$$ \sigma = \lim_{\Delta A \to 0} \frac{\Delta F_n}{\Delta A} $$

- **Tensile Stress (+):** If the normal force pulls *away* from the surface (stretching the material), the normal stress is tensile and defined as positive.
- **Compressive Stress (-):** If the normal force pushes *into* the surface (crushing the material), the normal stress is compressive and defined as negative.

## 3. Shear Stress ($\tau$)

**Shear stress** is the intensity of the internal force acting *parallel* (tangential) to the cut surface.

If the internal force vector $\Delta \mathbf{F}$ is resolved, the component lying entirely within the plane of the area $\Delta A$ is $\Delta F_t$.
The shear stress, denoted by the Greek letter tau ($\tau$), is defined as:
$$ \tau = \lim_{\Delta A \to 0} \frac{\Delta F_t}{\Delta A} $$

Shear stress represents the tendency for one layer of the material to slide laterally past an adjacent layer.

## 4. Units of Stress

Because stress is force divided by area, its units are derived directly from these fundamental quantities.

- **SI System:** The standard unit of stress is the Pascal (Pa), which is one Newton per square meter ($1 \; \text{Pa} = 1 \; \text{N/m}^2$). Because a Pascal is a very small quantity, engineering stress is almost always expressed in Megapascals ($1 \; \text{MPa} = 10^6 \; \text{Pa} = 1 \; \text{N/mm}^2$) or Gigapascals (GPa).
- **US Customary System:** The standard units are pounds per square inch (psi) or kilopounds per square inch (ksi, where $1 \; \text{ksi} = 1000 \; \text{psi}$).
