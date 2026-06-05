# Drag on Blunt Bodies and Streamlining

The total aerodynamic drag on an object is the sum of **Friction Drag** (shear stress dragging on the surface) and **Pressure Drag** (the pressure imbalance between the front and the low-pressure wake in the back). 

$$C_D = C_{D,friction} + C_{D,pressure}$$

The balance between these two depends entirely on the shape of the body.

## 1. Blunt Bodies (Pressure Drag Dominated)

A blunt (or bluff) body is an object where the flow must turn sharply or separate wildly, such as a sphere, a cylinder, a brick, or a parachute.

For these shapes:
- The adverse pressure gradient on the rear is incredibly severe.
- Flow separation occurs early.
- A massive, chaotic wake forms behind the object.
- **Pressure drag accounts for 90% to 99% of the total drag.**
- Because skin friction is negligible, making the surface smoother (polishing it) will not reduce drag. In fact, making it rougher (like a dimpled golf ball) can actually *reduce* drag by triggering turbulence, which delays separation and shrinks the wake.

**Drag Coefficients for Blunt Bodies:**
- Flat plate facing the wind: $C_D \approx 1.28$
- Cube: $C_D \approx 1.05$
- Sphere (Laminar): $C_D \approx 0.47$
- Sphere (Turbulent/Dimpled): $C_D \approx 0.20$

## 2. Streamlined Bodies (Friction Drag Dominated)

To eliminate pressure drag, engineers use **streamlining**. The goal is to shape the rear of the object so gently that the adverse pressure gradient is very mild. This allows the boundary layer to remain attached all the way to the trailing edge.

- A perfect teardrop shape (an airfoil) prevents flow separation completely. 
- Because there is no separation, there is no wake. The pressure on the back recovers completely and balances the pressure on the front. 
- **Pressure drag is virtually eliminated.**
- However, the streamlined object is physically much longer, meaning there is much more surface area for viscous shear stress to rub against. **Friction drag now accounts for almost 100% of the total drag.**
- For a streamlined body, making the surface microscopically smooth and maintaining a laminar boundary layer (which has lower shear stress than a turbulent one) is the absolute key to reducing drag.

**Drag Coefficient for Streamlined Bodies:**
- Teardrop shape / Airfoil: $C_D \approx 0.04$

## 3. The Streamlining Trade-off

Why aren't commercial airplanes shaped like perfect, ultra-long needles?
Because friction drag increases as you add surface area.

If you take a sphere and start stretching its tail into a teardrop:
1. Initially, pressure drag plummets rapidly as the wake disappears. Total drag drops significantly.
2. Eventually, the wake is gone. Pressure drag is zero.
3. If you keep stretching the tail longer, you are only adding more wetted surface area. Friction drag begins to rise. Total drag starts going back up.

There is an **optimum thickness-to-length ratio** where the sum of pressure drag and friction drag reaches an absolute minimum. For subsonic aircraft structures (like struts and drop tanks), this optimal thickness is usually around 25% to 30% of the length.

## 4. Vortex Shedding (Von Kármán Street)

When fluid flows over a blunt cylinder, the flow separating off the top and the bottom does not form a static wake. 
The wake is highly unstable. Swirling vortices are generated and peel off (shed) alternately from the top, then the bottom, then the top.

This alternating pattern of swirling vortices trailing behind the cylinder is called a **Von Kármán Vortex Street**.
As each vortex sheds, it creates an alternating low-pressure suction on the top, then the bottom of the cylinder, exerting an oscillating lift force on the structure. 
If the shedding frequency matches the natural resonant frequency of the physical structure (like a tall smokestack or a bridge cable in the wind), the structure will violently vibrate and can be destroyed. Engineers wrap spiral fins (strakes) around tall chimneys specifically to disrupt this vortex shedding.
