# Gas Power Cycles: Stirling and Ericsson

Beyond the Otto, Diesel, and Brayton cycles, two other ideal gas cycles achieve **Carnot efficiency** under ideal conditions: the **Stirling** and **Ericsson** cycles. Both use regeneration — internal heat exchange — to reach this theoretical maximum.

## 1. The Stirling Cycle

The **Stirling cycle** operates between two isotherms connected by two isochoric (constant-volume) processes:

**Process 1→2: Isothermal Heat Addition** (at $T_H$ — hot reservoir)
**Process 2→3: Isochoric Heat Rejection** (temperature drops from $T_H$ to $T_L$ at constant volume)
**Process 3→4: Isothermal Heat Rejection** (at $T_L$ — cold reservoir)
**Process 4→1: Isochoric Heat Addition** (temperature rises from $T_L$ to $T_H$ at constant volume)

With a **perfect regenerator**: the heat released in process 2→3 is stored and entirely returned in process 4→1. Net external heat exchange is only at $T_H$ (in) and $T_L$ (out):

$$\eta_{Stirling} = 1 - \frac{T_L}{T_H} = \eta_{Carnot}$$

**Stirling engines** in practice use an external heat source (solar, waste heat, biomass combustion), making them suitable for quiet, external combustion applications. Robert Stirling patented the engine in 1816. Modern applications: cryocoolers (for liquefying gases), NASA spacecraft power systems, submarine auxiliary power.

## 2. The Ericsson Cycle

The **Ericsson cycle** replaces the isochoric processes with isobaric processes:

**Process 1→2: Isothermal Heat Addition** (at $T_H$)
**Process 2→3: Isobaric Heat Rejection** (with perfect regenerator)
**Process 3→4: Isothermal Heat Rejection** (at $T_L$)
**Process 4→1: Isobaric Heat Addition** (with perfect regenerator)

Again with a perfect regenerator, efficiency reaches Carnot. The Ericsson cycle is the theoretical basis for gas turbines with **perfect regeneration, perfect intercooling, and perfect reheating** — these process improvements push the Brayton cycle toward Ericsson behavior.

## 3. Why Carnot-Achieving Cycles Are Rarely Built

Both Stirling and Ericsson cycles require:
- **Perfect regenerators** (100% effectiveness): In practice, regenerators achieve 90–97%.
- **Perfectly isothermal processes**: Requires infinite time or infinite heat transfer area.
- **Zero friction**: Impossible mechanically.

The Stirling cycle also has a low specific power (work output per unit engine volume) compared to internal combustion engines, requiring large, heavy heat exchangers for the hot side.

Nevertheless, Stirling engines dominate the cryocooler market (COP > 1.5 at 77K) and are being actively developed for concentrated solar power (CSP) dish-Stirling systems achieving 30% solar-to-electricity efficiency — among the highest of any solar technology.
