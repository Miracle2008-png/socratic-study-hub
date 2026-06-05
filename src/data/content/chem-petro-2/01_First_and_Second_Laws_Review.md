# First and Second Laws Review

Before delving into the complex thermodynamic models of non-ideal mixtures and phase equilibria, a chemical engineer must have absolute mastery over the fundamental laws of thermodynamics that govern all energy interactions.

## 1. The First Law: Conservation of Energy

The First Law dictates that energy cannot be created or destroyed, only transformed from one form to another. For a closed system undergoing a process from state 1 to state 2, the energy balance is:

$$ \Delta U = Q - W $$

Where:
- $\Delta U$: Change in internal energy of the system.
- $Q$: Heat transferred *into* the system.
- $W$: Work done *by* the system on the surroundings.

For open systems (continuous flow processes like turbines, compressors, and heat exchangers), the energy balance incorporates enthalpy ($H$) to account for flow work:

$$ \Delta \dot{H} + \Delta \dot{E}_k + \Delta \dot{E}_p = \dot{Q} - \dot{W}_s $$

## 2. Enthalpy and Heat Capacities

Enthalpy ($H$) is defined mathematically as:
$$ H = U + PV $$

The specific heat capacities relate temperature changes to energy changes under specific constraints:
- **Constant Volume Heat Capacity ($C_v$)**: $C_v = \left( \frac{\partial U}{\partial T} \right)_V$
- **Constant Pressure Heat Capacity ($C_p$)**: $C_p = \left( \frac{\partial H}{\partial T} \right)_P$

For ideal gases, $C_p - C_v = R$ (the universal gas constant).

## 3. The Second Law: Entropy and Spontaneity

While the First Law tracks energy quantity, the Second Law governs the *direction* of processes and the *quality* of energy. It introduces **Entropy ($S$)**, a measure of molecular disorder or energy dispersal.

The Second Law states that for any real, spontaneous process, the total entropy of the universe (system + surroundings) must increase:
$$ \Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} \ge 0 $$

For a reversible (idealized, infinitely slow) process:
$$ dS = \frac{dQ_{\text{rev}}}{T} $$

## 4. Reversibility and Efficiency

A **reversible process** is an idealized concept where a process can be perfectly reversed without leaving any trace on the surroundings. It represents the theoretical limit of maximum work output (e.g., from a turbine) or minimum work input (e.g., to a compressor).

Real processes always generate entropy ($S_{\text{gen}} > 0$) due to friction, unrestrained expansion, and heat transfer across finite temperature differences. Therefore, real equipment efficiency is always less than 100%.

- **Isentropic Efficiency of a Turbine**: $\eta = \frac{W_{\text{actual}}}{W_{\text{isentropic}}}$
- **Isentropic Efficiency of a Compressor**: $\eta = \frac{W_{\text{isentropic}}}{W_{\text{actual}}}$
