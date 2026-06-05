# The Concept of Strain

While stress describes the intensity of internal forces, **strain** is the mathematical measure of the resulting physical deformation. It quantifies how much a body stretches, compresses, or distorts from its original unloaded shape.

## 1. Normal Strain ($\epsilon$)

**Normal strain** defines the change in length of a line segment per unit of its original length. It is a measure of elongation or contraction.

Consider a straight line segment of initial length $L_0$ inside an unstressed body. When a load is applied, the segment deforms to a new length $L$.
The average normal strain, denoted by the Greek letter epsilon ($\epsilon$), is defined as:
$$ \epsilon_{avg} = \frac{L - L_0}{L_0} = \frac{\Delta L}{L_0} $$
where:
- $\Delta L$ is the total elongation or change in length.
- $L_0$ is the original, undeformed length.

**True Normal Strain at a Point:**
If the strain is not uniform along the length of the member, the true strain at a specific point is found by taking the limit as the segment length $\Delta x$ approaches zero:
$$ \epsilon = \lim_{\Delta x \to 0} \frac{\Delta L}{\Delta x} = \frac{d\delta}{dx} $$

- **Tensile Strain (+):** If the member elongates, $L > L_0$, the strain is positive.
- **Compressive Strain (-):** If the member shortens, $L < L_0$, the strain is negative.

## 2. Shear Strain ($\gamma$)

While normal strain measures changes in *length*, **shear strain** measures changes in *angle*. It defines the distortion of the body's geometric shape.

Consider two straight line segments inside an unstressed body that initially intersect at a perfect right angle ($90^\circ$ or $\pi/2$ radians).
When shear forces are applied, the body distorts, and the angle between these two line segments changes to some new value $\theta^\prime$.

The shear strain, denoted by the Greek letter gamma ($\gamma$), is defined as the change in this angle, measured purely in **radians**:
$$ \gamma = \frac{\pi}{2} - \theta^\prime $$

- If the angle $\theta^\prime$ becomes *smaller* than $90^\circ$, the shear strain $\gamma$ is positive.
- If the angle $\theta^\prime$ becomes *larger* than $90^\circ$, the shear strain $\gamma$ is negative.

## 3. Units of Strain

By definition, normal strain is a ratio of lengths (e.g., meters per meter, or inches per inch). Therefore, normal strain is a **dimensionless quantity**.
However, in engineering practice, it is often expressed with explicit units to clarify the context:
- $\mu\text{m/m}$ (micrometers per meter, or "microstrain")
- in/in

Shear strain is an angle difference. It is an absolutely dimensionless geometric ratio, but it is strictly measured in **radians** (rad). It is never expressed in degrees in strain calculations.
