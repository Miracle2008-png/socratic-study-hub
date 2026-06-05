# Transient Balances

While many chemical processes operate at steady-state, all processes must experience a transient (unsteady-state) phase during startup and shutdown. Furthermore, batch processes and control system responses are inherently transient. In a transient process, variables change with time, meaning the Accumulation term ($dm/dt$) is non-zero.

## 1. The General Transient Equation

Recall the general balance equation for mass:
$$ \frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}} + \dot{m}_{\text{gen}} - \dot{m}_{\text{cons}} $$

Because the accumulation term is a time derivative, solving transient problems requires setting up and solving Ordinary Differential Equations (ODEs).

## 2. Solving Total Mass Transient Problems

A classic example is a tank being filled or emptied.

### Emptying a Tank
Imagine a tank containing an initial mass of water $m_0$. A valve is opened at the bottom, and water drains out at a rate $\dot{m}_{\text{out}} = k m$, where $k$ is a constant. There is no water entering the tank ($\dot{m}_{\text{in}} = 0$).

The balance equation becomes:
$$ \frac{dm}{dt} = 0 - k m + 0 - 0 $$
$$ \frac{dm}{dt} = -k m $$

To solve this, we separate variables and integrate from time $t=0$ to time $t$:
$$ \int_{m_0}^{m(t)} \frac{dm}{m} = \int_{0}^{t} -k \, dt $$
$$ \ln\left(\frac{m(t)}{m_0}\right) = -kt $$
$$ m(t) = m_0 e^{-kt} $$

This result proves that the mass in the tank decays exponentially over time.

## 3. Transient Component Balances (The Flushing Problem)

When the concentration of a chemical species changes over time in a vessel, you must write a component balance ODE.

### The Stirred Tank Dilution
Imagine a tank of volume $V$ filled with a salt solution of initial concentration $C_0$. Pure water (concentration = 0) begins flowing into the tank at a volumetric flow rate $q$. The tank is perfectly mixed, so the salt concentration everywhere inside the tank is uniform and equals the exit concentration $C(t)$. The mixture overflows out of the tank at the exact same flow rate $q$.

The total volume of the tank is constant ($dV/dt = 0$), but the salt concentration is changing. We write a mass balance for the salt:

$$ \text{Accumulation} = \text{Input} - \text{Output} $$
$$ \frac{d(VC)}{dt} = (q \times 0) - (q \times C) $$

Since $V$ is constant, we pull it out of the derivative:
$$ V \frac{dC}{dt} = -qC $$
$$ \frac{dC}{dt} = -\frac{q}{V} C $$

Separating and integrating:
$$ \int_{C_0}^{C(t)} \frac{dC}{C} = \int_{0}^{t} -\frac{q}{V} \, dt $$
$$ \ln\left(\frac{C(t)}{C_0}\right) = -\frac{q}{V} t $$
$$ C(t) = C_0 e^{-\frac{q}{V}t} $$

The concentration of salt exponentially decays. The term $V/q$ is known as the **residence time** ($\tau$) of the tank, a critical parameter in reactor design representing the average time a fluid particle spends in the vessel.

## 4. Transient Energy Balances

Transient energy balances follow the exact same logic. A hot object cooling down or a batch reactor heating up requires an ODE for temperature.

If a solid block of mass $m$, specific heat $C_p$, and initial temperature $T_0$ is dropped into a large cold fluid bath at constant temperature $T_{\infty}$, the rate of convective heat loss is $\dot{Q} = -hA(T - T_{\infty})$.

The energy balance is:
$$ m C_p \frac{dT}{dt} = -hA(T - T_{\infty}) $$

This is Newton's Law of Cooling, which again results in an exponential decay equation when integrated.
