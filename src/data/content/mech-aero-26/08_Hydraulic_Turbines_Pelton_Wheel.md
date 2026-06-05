# Hydraulic Turbines: The Pelton Wheel

Hydraulic turbines extract potential energy from water stored in a reservoir (a dam) and convert it into mechanical shaft power. They are broadly divided into two categories: Impulse turbines and Reaction turbines.

The **Pelton Wheel** is the classic **impulse turbine**, invented by Lester Pelton in the 1870s. It is used exclusively for **high-head, low-flow** applications (mountain reservoirs dropping water through steep pipes called penstocks).

## 1. Principle of Operation

In an impulse turbine, all of the available potential pressure energy of the water is converted into kinetic energy *before* it hits the turbine wheel. 

1. At the bottom of the penstock, a stationary nozzle completely depressurizes the water, turning it into a high-velocity jet. The pressure in the jet is atmospheric.
2. This massive kinetic jet strikes a series of bucket-shaped blades mounted on the periphery of the rotating Pelton wheel.
3. The buckets split the jet in half and turn the water almost 180 degrees backward.
4. The change in the water's momentum exerts a massive impulse force on the buckets, driving the wheel.
5. The water drops out of the bottom of the casing at atmospheric pressure with almost zero velocity (all its kinetic energy having been absorbed).

Because the rotor spins in air (at atmospheric pressure) and is only struck by a discrete jet, it is a pure impulse machine.

## 2. Velocity Triangles and Power

Consider a Pelton wheel with blade speed $U$. The jet strikes the bucket with absolute velocity $V_1$.
The fluid enters the bucket with a relative velocity:
$$W_1 = V_1 - U$$

The bucket acts as a moving U-turn. It turns the water by an angle $\beta_2$ (ideally $180^\circ$, but practically around $165^\circ$ to prevent the exiting water from hitting the next incoming bucket). Assuming no friction in the bucket, the relative speed remains constant: $W_2 = W_1$.

The absolute velocity of the water leaving the bucket in the direction of motion is:
$$V_2 = U + W_2 \cos \beta_2 = U + (V_1 - U)\cos \beta_2$$

Apply the Euler equation ($w = U_1 V_1 - U_2 V_2$) assuming straight 1D flow:
$$w = U(V_1 - V_2) = U[V_1 - (U + (V_1 - U)\cos \beta_2)]$$
$$w = U(V_1 - U)(1 - \cos \beta_2)$$

## 3. Maximum Efficiency

To find the optimal speed to run the turbine to get the maximum possible power out of a given jet ($V_1$), we differentiate $w$ with respect to $U$ and set it to zero:
$$\frac{dw}{dU} = (V_1 - 2U)(1 - \cos \beta_2) = 0$$

This yields the fundamental design rule for Pelton wheels:
$$\boxed{U = \frac{V_1}{2}}$$

**Maximum power is achieved when the bucket moves at exactly half the speed of the water jet.**
If this condition is met, and the bucket turns the water a full $180^\circ$ ($\cos 180^\circ = -1$), the exit velocity of the water drops to exactly zero. The turbine has extracted 100% of the jet's kinetic energy.

Real Pelton wheels approach 90% efficiency. To control power output (e.g., if electrical demand on the grid drops), a "spear" inside the nozzle moves forward to choke the jet diameter, reducing mass flow without significantly reducing the jet velocity $V_1$, maintaining high efficiency even at partial loads.
