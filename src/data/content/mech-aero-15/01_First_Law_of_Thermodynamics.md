# The First Law of Thermodynamics

The First Law of Thermodynamics is the law of **conservation of energy** expressed for thermodynamic systems. It states that energy can neither be created nor destroyed — it can only change form.

## 1. Heat and Work

Before stating the First Law, we must precisely define the two mechanisms by which energy crosses a system boundary:

**Heat ($Q$):** Energy transfer driven purely by a **temperature difference**. Heat flows spontaneously from hot to cold. Sign convention: $Q > 0$ when heat flows **into** the system.

**Work ($W$):** Energy transfer by any mechanism other than temperature difference — mechanical boundary work ($W = \int P \, dV$), electrical work, shaft work. Sign convention: $W > 0$ when work is done **by** the system on the surroundings.

Neither $Q$ nor $W$ is a property of the system's state — they are path-dependent quantities that only exist during a process crossing the boundary.

## 2. The First Law for a Closed System

For a closed system (fixed mass) undergoing a process from state 1 to state 2:

$$\boxed{Q - W = \Delta U = U_2 - U_1}$$

In rate form (dividing by time $dt$):
$$\dot{Q} - \dot{W} = \frac{dU}{dt}$$

For a **cycle** (system returns to initial state, $\Delta U = 0$):
$$Q_{net} = W_{net}$$

The net heat added to a cycle exactly equals the net work output. This is why no heat engine can produce work without a heat source — and why perpetual motion machines of the first kind (producing work from nothing) are impossible.

## 3. Boundary Work

The most common form of work in closed systems is **boundary (PdV) work** — the work done as the system boundary moves:

$$W_{boundary} = \int_1^2 P \, dV$$

For specific processes:
- **Isobaric (constant P):** $W = P(V_2 - V_1) = P \Delta V$
- **Isochoric (constant V):** $W = 0$ (no boundary movement)
- **Isothermal ideal gas:** $W = mRT\ln(V_2/V_1) = mRT\ln(P_1/P_2)$
- **Polytropic ($PV^n = C$):** $W = (P_2V_2 - P_1V_1)/(1-n)$ for $n \neq 1$

## 4. Specific Heat Relations for Closed Systems

Combining $Q - W = \Delta U$ with specific process constraints:

**At constant volume** ($W = 0$, $dV = 0$):
$$Q_v = \Delta U = m c_v \Delta T$$

All heat goes directly into raising internal energy.

**At constant pressure** ($W = P\Delta V$):
$$Q_p = \Delta U + P\Delta V = \Delta(U + PV) = \Delta H = m c_p \Delta T$$

At constant pressure, heat equals the change in **enthalpy** — which is why $c_p$ and enthalpy are so natural for open flow systems where pressure is typically constant across a device.
