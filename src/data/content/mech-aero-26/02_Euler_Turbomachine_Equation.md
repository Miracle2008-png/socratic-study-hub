# The Euler Turbomachine Equation

The underlying physics of *all* turbomachines—whether it is a tiny dental drill turbine or a massive Hoover Dam hydroelectric runner—is governed by a single, remarkably simple principle: the conservation of angular momentum.

## 1. Angular Momentum in Fluid Mechanics

Recall from dynamics that Torque ($T$) equals the rate of change of angular momentum. 
For a steady-flow control volume containing a turbomachine rotor, the net torque applied by the rotor to the fluid must equal the net outflow of angular momentum minus the net inflow of angular momentum.

Consider fluid entering a rotor at radius $r_1$ and leaving at radius $r_2$. 
Let $V$ be the absolute velocity of the fluid. We must resolve this velocity into two components:
- **Meridional velocity ($V_m$):** The component pushing the fluid through the machine (axial or radial). It contributes to mass flow but not torque.
- **Tangential velocity ($V_\theta$):** The swirl component of the fluid, acting perpendicular to the radius. This is the only component that carries angular momentum about the shaft.

The angular momentum of a fluid particle of mass $dm$ is $r \cdot (dm \cdot V_\theta)$.
For a continuous mass flow rate $\dot{m}$, the rate of angular momentum flow is $\dot{m} r V_\theta$.

## 2. Deriving the Euler Equation

Applying the angular momentum balance to the fluid passing through the rotor:

$$T_{shaft} = \dot{m}_{out} (r_2 V_{\theta 2}) - \dot{m}_{in} (r_1 V_{\theta 1})$$

Since the flow is steady, $\dot{m}_{in} = \dot{m}_{out} = \dot{m}$. Therefore, the shaft torque is:
$$\boxed{T_{shaft} = \dot{m} (r_2 V_{\theta 2} - r_1 V_{\theta 1})}$$

This is the fundamental torque equation. It shows that torque is generated strictly by changing the fluid's "swirl" ($r V_\theta$) between the inlet and outlet.

## 3. Power and the Euler Turbomachine Equation

Mechanical power ($\dot{W}_{shaft}$) is Torque multiplied by angular velocity ($\omega$):
$$\dot{W}_{shaft} = T_{shaft} \cdot \omega = \dot{m} \omega (r_2 V_{\theta 2} - r_1 V_{\theta 1})$$

We know that the blade speed $U$ at any radius $r$ is simply $U = \omega r$. Substituting this yields the **Euler Turbomachine Equation**:

$$\boxed{\dot{W}_{shaft} = \dot{m} (U_2 V_{\theta 2} - U_1 V_{\theta 1})}$$

This masterpiece of an equation reveals exactly how energy is transferred:
- **Pumps/Compressors:** Work is done *on* the fluid. The machine increases the fluid's swirl. $(U_2 V_{\theta 2}) > (U_1 V_{\theta 1})$, so $\dot{W}$ is positive.
- **Turbines:** Work is extracted *from* the fluid. The machine absorbs the fluid's swirl. $(U_1 V_{\theta 1}) > (U_2 V_{\theta 2})$, so $\dot{W}$ is negative (signifying power output).

## 4. Specific Work (Head)

Engineers often divide the power by the mass flow rate to find the specific work $w$ (energy per unit mass, $J/kg$):
$$w = U_2 V_{\theta 2} - U_1 V_{\theta 1}$$

For liquid pumps, this is usually expressed as **Head ($H$)** (energy per unit weight, yielding a value in *meters* of fluid):
$$H = \frac{w}{g} = \frac{U_2 V_{\theta 2} - U_1 V_{\theta 1}}{g}$$

*Note: The Euler equation assumes ideal, frictionless conditions where fluid perfectly follows the blade angles. Real machines have losses, meaning a pump requires more power than Euler predicts, and a turbine produces less.*
