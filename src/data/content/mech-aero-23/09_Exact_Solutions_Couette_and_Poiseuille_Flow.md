# Exact Solutions: Couette and Poiseuille Flow

While there is no general solution to the Navier-Stokes equations, if we apply enough simplifying assumptions to a highly constrained geometric problem, the terrifying non-linear terms drop out, leaving a simple ordinary differential equation that we *can* solve exactly by hand.

The two most famous exact solutions are Couette Flow and Poiseuille Flow. Both are cases of **fully developed, steady, incompressible, laminar 1D flow**.

Because it is 1D flow in the x-direction, $v = 0$ and $w = 0$. 
Because it is fully developed, the velocity profile does not change downstream, so $\partial u / \partial x = 0$.
The entire left side of the x-momentum Navier-Stokes equation (all acceleration) goes to zero!

$$0 = -\frac{\partial P}{\partial x} + \mu \frac{d^2 u}{dy^2}$$
$$\frac{d^2 u}{dy^2} = \frac{1}{\mu} \frac{dP}{dx}$$

## 1. Couette Flow (Shear-Driven)

Couette flow is the flow of fluid between two infinite parallel plates separated by distance $h$. 
- The pressure is constant everywhere ($\frac{dP}{dx} = 0$). 
- The bottom plate is stationary ($u(0) = 0$).
- The top plate is moving at a constant velocity $V$ ($u(h) = V$).

The equation reduces to: $\frac{d^2 u}{dy^2} = 0$.
Integrating twice gives a linear equation: $u(y) = C_1 y + C_2$.
Applying the boundary conditions (the no-slip condition at the walls), we find the exact velocity profile:
$$u(y) = V \frac{y}{h}$$

**Result:** The velocity profile is perfectly linear. This is exactly the scenario used to define dynamic viscosity in a rheometer.

## 2. Poiseuille Flow (Pressure-Driven)

Poiseuille flow is the flow of fluid between two stationary, infinite parallel plates driven entirely by a pressure gradient.
- Both plates are stationary: $u(0) = 0$ and $u(h) = 0$.
- There is a constant adverse pressure gradient pushing the fluid: $\frac{dP}{dx} = \text{constant}$.

Integrating $\frac{d^2 u}{dy^2} = \frac{1}{\mu} \frac{dP}{dx}$ twice yields:
$$u(y) = \frac{1}{2\mu} \left(\frac{dP}{dx}\right) y^2 + C_1 y + C_2$$

Applying the no-slip boundary conditions at $y=0$ and $y=h$, we find:
$$u(y) = \frac{1}{2\mu} \left(-\frac{dP}{dx}\right) (hy - y^2)$$

**Result:** The velocity profile is a perfect **parabola**. The fluid is completely stationary at the walls due to friction, and reaches its maximum velocity exactly in the center.

## 3. Hagen-Poiseuille Flow (Flow in a Pipe)

Applying the exact same assumptions to a cylindrical pipe of radius $R$ in cylindrical coordinates yields the most important exact solution in fluid mechanics: steady laminar flow in a pipe.

$$u(r) = \frac{1}{4\mu} \left(-\frac{dP}{dx}\right) (R^2 - r^2)$$

Again, the profile is a paraboloid. 
By integrating this velocity profile across the circular cross-section, we find the total volume flow rate $Q$. This yields the famous **Hagen-Poiseuille Law**:
$$Q = \frac{\pi R^4}{8\mu} \left(\frac{\Delta P}{L}\right)$$

This shows that for laminar flow, the flow rate is proportional to the **fourth power of the radius**. A tiny decrease in blood vessel diameter (due to plaque) requires a massive increase in heart pressure ($\Delta P$) to maintain the same flow rate.
