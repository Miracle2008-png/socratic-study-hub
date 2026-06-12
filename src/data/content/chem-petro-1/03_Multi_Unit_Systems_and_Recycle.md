# Multi-Unit Systems and Recycle

Real industrial chemical plants rarely consist of a single unit. They are highly complex networks of interconnected reactors, separators, heat exchangers, and mixers. Solving mass balances for these systems requires analyzing multiple, interacting control volumes.

## 1. Multiple System Boundaries

When a process has multiple units, you can draw system boundaries around:
1. A single unit.
2. A combination of several connected units.
3. Mixing points (where two pipes join).
4. Splitting points (where one pipe splits into two).
5. **The Overall Process**: A boundary drawn around the entire plant, intersecting only the raw material feeds and the final product streams. Internal streams between units do not cross this boundary and are ignored in the overall balance.

The strategy for solving multi-unit processes is to perform a Degrees of Freedom (DOF) analysis on *every possible boundary*. You then begin your mathematical solution on the boundary that has an NDF of 0.

## 2. Recycle Streams

A **recycle stream** takes a portion of a downstream flow and routes it back to an upstream unit. Recycle is ubiquitous in chemical engineering for several critical economic and environmental reasons:

1. **Recovery of Unreacted Reactants**: Most chemical reactions do not go to 100% completion. Instead of throwing away the unreacted expensive raw materials, a separator isolates them and recycles them back to the reactor inlet.
2. **Dilution of Reactive Mixtures**: Recycling inert liquids or gases can absorb heat and prevent runaway exotherms.
3. **Control of Fluid Flow**: Maintaining adequate fluid velocities in pipes and compressors.
4. **Circulation of Working Fluids**: Like refrigerants in a cooling cycle.

### Single-Pass vs. Overall Conversion
When a recycle stream is present around a reactor, you must distinguish between two types of conversion:

- **Single-Pass Conversion**: The fraction of reactant entering the reactor that is consumed before it exits the reactor. (Only looks at the reactor boundary).
- **Overall Conversion**: The fraction of fresh reactant fed to the *overall process* that is eventually consumed. (Looks at the overall process boundary).

Because of the recycle stream, the overall conversion is almost always much higher than the single-pass conversion.

## 3. Purge Streams

When a process utilizes a recycle stream, there is a dangerous potential for inert impurities to become trapped in the recycle loop. 

*Example: If a raw material feed contains 1% Argon, and the Argon is separated and recycled back to the reactor along with unreacted gas, the Argon will have no way to exit the process. It will accumulate continuously until the pipes burst or the reactor stops functioning.*

To prevent this infinite accumulation, a **purge stream** is required. A purge is a small bleed valve off the recycle line that allows a fraction of the recycle gas to escape the process, carrying the inert impurities out with it.

At steady state, the rate at which the impurity enters the process in the fresh feed must perfectly equal the rate at which it exits the process in the purge stream.

## 4. Bypass Streams

A **bypass stream** takes a portion of an upstream feed and skips it past one or more process units, mixing it directly into the downstream product.
Bypass is typically used to control the exact composition or temperature of a final product stream by blending treated and untreated fluids.

## 5. Multi-Unit Systems Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "bound", "data": { "label": "System Boundaries", "icon": "Box", "description": "Define volume." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "rec", "data": { "label": "Recycle", "icon": "Repeat", "description": "Recover unreacted." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "purge", "data": { "label": "Purge", "icon": "ArrowDownCircle", "description": "Prevent accumulation." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "bp", "data": { "label": "Bypass", "icon": "Shuffle", "description": "Control composition." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "bound", "target": "rec", "animated": true },
    { "source": "rec", "target": "purge", "animated": true },
    { "source": "bound", "target": "bp", "animated": true }
  ]
}
```
