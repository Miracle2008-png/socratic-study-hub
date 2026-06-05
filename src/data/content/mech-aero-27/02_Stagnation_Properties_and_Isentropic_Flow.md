# Stagnation Properties and Isentropic Flow

In high-speed flow, kinetic energy ($V^2/2$) is so massive that when the fluid slows down, its temperature and pressure rise dramatically. To account for this, we introduce the concept of **stagnation properties**.

## 1. Stagnation Enthalpy and Temperature

Consider a steady, adiabatic flow with no shaft work (e.g., flow over an airplane wing or through a nozzle). The energy equation is:
$$h + \frac{V^2}{2} = \text{constant}$$

This constant is defined as the **Stagnation Enthalpy ($h_0$)**. It is the enthalpy the fluid *would* have if it were brought to a complete halt ($V=0$) adiabatically.
$$h_0 = h + \frac{V^2}{2}$$

For an ideal gas, $h = c_p T$. Substituting this gives the **Stagnation Temperature ($T_0$)**:
$$T_0 = T + \frac{V^2}{2 c_p}$$
- $T$ is the *static* temperature (the temperature you would measure if you were floating along with the fluid at velocity $V$).
- $T_0$ is the total temperature (the temperature measured by a stationary probe that the air slams into and stops against).

Using $c_p = \frac{kR}{k-1}$ and $c = \sqrt{kRT}$ (so $V^2 = M^2 k R T$), we can rewrite the temperature ratio entirely in terms of the Mach number:
$$\frac{T_0}{T} = 1 + \frac{k-1}{2} M^2$$

**Key Fact:** For any adiabatic flow (even with friction or shock waves), the stagnation temperature $T_0$ remains absolutely constant.

## 2. Stagnation Pressure and Density

If the flow is brought to a halt not just adiabatically, but **isentropically** (no friction, perfectly reversible), the resulting pressure is the **Stagnation Pressure ($P_0$)**.

We can use the isentropic ideal gas relations $\left(\frac{P_0}{P}\right) = \left(\frac{T_0}{T}\right)^{\frac{k}{k-1}}$ to find:
$$\frac{P_0}{P} = \left( 1 + \frac{k-1}{2} M^2 \right)^{\frac{k}{k-1}}$$

Similarly, for Stagnation Density ($\rho_0$):
$$\frac{\rho_0}{\rho} = \left( 1 + \frac{k-1}{2} M^2 \right)^{\frac{1}{k-1}}$$

- If a flow encounters friction or a shock wave (generating entropy), the stagnation pressure $P_0$ will *drop*.
- In pure isentropic flow (an ideal nozzle), $T_0$, $P_0$, and $\rho_0$ are all constants.

## 3. The Critical State ($M = 1$)

It is incredibly useful to define a reference state where the flow velocity exactly equals the local speed of sound ($M = 1$). We denote properties at this sonic state with an asterisk (*).

Plugging $M = 1$ into the stagnation equations (using air, $k=1.4$):
$$\frac{T^*}{T_0} = \frac{2}{k+1} = 0.8333$$
$$\frac{P^*}{P_0} = \left( \frac{2}{k+1} \right)^{\frac{k}{k-1}} = 0.5283$$

This is profound: If you take a high-pressure tank of air ($P_0$) and accelerate it isentropically until it hits Mach 1, the local static pressure $P^*$ at that exact moment will always be exactly 52.8% of the tank pressure.

## 4. The Isentropic Flow Tables

Because evaluating these fractional exponents by hand is tedious, aerodynamicists use **Isentropic Flow Tables**. 
For a given gas (e.g., $k=1.4$), the table lists the ratios $T/T_0$, $P/P_0$, $\rho/\rho_0$, and $A/A^*$ for every possible Mach number from $M=0$ to $M=10$. 
Given any one property ratio or Mach number, you can instantly look up the others.
