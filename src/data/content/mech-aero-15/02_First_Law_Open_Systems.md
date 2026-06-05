---
title: "First Law for Open Systems (Control Volumes)"
---

# First Law for Open Systems (Control Volumes)

Most engineering devices — turbines, compressors, boilers, nozzles, heat exchangers — operate in **steady flow**: fluid continuously enters and exits. These are analyzed as **open systems (control volumes)** where mass crosses the boundary.

## 1. Mass Balance for a Control Volume

Before energy can be balanced, mass must be balanced. For a general control volume:

$$\frac{dm_{CV}}{dt} = \sum_{in} \dot{m}_{in} - \sum_{out} \dot{m}_{out}$$

For **steady-state** operation ($dm_{CV}/dt = 0$):
$$\sum_{in} \dot{m}_{in} = \sum_{out} \dot{m}_{out}$$

Mass in = mass out. For a single inlet/outlet: $\dot{m}_1 = \dot{m}_2 = \dot{m}$.

## 2. Energy Balance for a Steady-Flow Control Volume

Fluid entering a control volume carries energy: internal energy $u$, kinetic energy $V^2/2$, and potential energy $gz$. It also does **flow work** $Pv$ pushing itself into the CV against the existing pressure.

The combination $(u + Pv) = h$ (specific enthalpy) naturally captures both.

The **Steady-Flow Energy Equation (SFEE)**:

$$\boxed{\dot{Q}_{CV} - \dot{W}_{CV} = \dot{m}\left[(h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)\right]}$$

Where $\dot{W}_{CV}$ excludes flow work (already captured in $h$) and includes only shaft work (turbines, compressors, pumps).

## 3. Application to Common Devices

**Turbine** (work output, adiabatic, $\dot{Q} \approx 0$, $\Delta KE \approx 0$, $\Delta PE \approx 0$):
$$\dot{W}_T = \dot{m}(h_1 - h_2)$$
Work output = enthalpy drop across the turbine. Maximize by maximizing inlet $h_1$ (high $T$, high $P$) and minimizing exit $h_2$ (low $P$, low quality).

**Compressor/Pump** (work input, adiabatic, $\dot{Q} \approx 0$):
$$\dot{W}_C = \dot{m}(h_2 - h_1)$$
Work input = enthalpy rise. Minimize by compressing at low temperature (intercooling).

**Nozzle** (no work, adiabatic, converts enthalpy to KE):
$$h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$$
$$V_2 = \sqrt{V_1^2 + 2(h_1 - h_2)}$$
Used in rocket nozzles, jet engines, steam turbine nozzle rings.

**Heat Exchanger** (no work, no KE/PE changes, two streams exchange heat):
$$\dot{m}_h(h_{h,in} - h_{h,out}) = \dot{m}_c(h_{c,out} - h_{c,in})$$
Heat lost by hot stream = heat gained by cold stream.

**Throttle/Expansion Valve** (no work, adiabatic, $\Delta KE \approx 0$):
$$h_1 = h_2$$
Enthalpy is constant (isenthalpic process). Pressure drops, temperature drops. This is how refrigerators and air conditioners achieve cooling — throttling high-pressure liquid refrigerant to low pressure causes it to partially flash to vapor and dramatically drop in temperature.
