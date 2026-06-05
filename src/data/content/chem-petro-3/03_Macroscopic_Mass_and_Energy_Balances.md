# Macroscopic Mass and Energy Balances

By applying the Reynolds Transport Theorem (RTT) to a large control volume (like a pump, a pipe network, or a reactor), we derive the macroscopic engineering balance equations.

## 1. The Macroscopic Mass Balance (Continuity)

If we apply RTT and state that mass is conserved ($dB_{sys}/dt = 0$), and we assume one-dimensional flow at the inlets and outlets, we obtain the macroscopic mass balance:

$$ \frac{dm_{\text{CV}}}{dt} = \sum \dot{m}_{\text{in}} - \sum \dot{m}_{\text{out}} $$

Where mass flow rate is $\dot{m} = \rho A V$.
*(Note: $A$ is cross-sectional area, $V$ is average velocity).*

### Steady-State, Incompressible Flow in a Pipe
For a liquid (incompressible, $\rho_1 = \rho_2$) flowing through a single pipe at steady-state, the mass balance simplifies drastically to the **Continuity Equation**:
$$ \rho A_1 V_1 = \rho A_2 V_2 $$
$$ A_1 V_1 = A_2 V_2 $$
$$ Q_1 = Q_2 $$

Where $Q$ is the volumetric flow rate. This proves that if a pipe narrows (area decreases), the fluid must accelerate (velocity increases) to conserve mass.

## 2. The Macroscopic Energy Balance

By setting $B = \text{Energy} (E)$ in RTT and applying the First Law of Thermodynamics, we derive the macroscopic energy balance for a control volume. 

The total energy of a flowing fluid consists of Internal Energy ($u$), Kinetic Energy ($V^2/2$), and Potential Energy ($gz$). We must also account for flow work ($Pv$) pushing the fluid in and out, which combines with internal energy to form Enthalpy ($h = u + Pv$).

The full steady-state energy balance for a single stream is:
$$ \dot{Q} - \dot{W}_s = \dot{m} \left[ (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1) \right] $$

Where:
- $\dot{Q}$: Heat added to the fluid.
- $\dot{W}_s$: Shaft work done *by* the fluid (e.g., a turbine). If a pump does work *on* the fluid, $\dot{W}_s$ is negative.

## 3. The Mechanical Energy Balance

Chemical engineers often deal with piping systems where temperature changes are negligible, meaning internal energy doesn't change significantly, and no heat is transferred ($\dot{Q} \approx 0$). 

In this scenario, it is more useful to convert the general energy balance into the **Mechanical Energy Balance**. We define the frictional conversion of mechanical energy into useless heat as **Head Loss ($h_L$)**.

Dividing by gravity $g$ allows engineers to express every term in units of length (meters or feet), known as "head":

$$ \frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 + h_p = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_t + h_L $$

Where:
- $P/\rho g$ is Pressure Head.
- $V^2/2g$ is Velocity Head.
- $z$ is Elevation Head.
- $h_p$ is Pump Head (energy added by a pump).
- $h_t$ is Turbine Head (energy removed by a turbine).
- $h_L$ is Frictional Head Loss.

This is the most practically useful equation in fluid mechanics. It is the basis for sizing all pumps and piping networks.
