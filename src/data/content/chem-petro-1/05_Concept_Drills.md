# Concept Drills

Test your understanding of Material & Energy Balances with these conceptual scenarios.

### Drill 1: The Purge Paradox
**Scenario:** A catalytic reactor process synthesizes methanol from CO and $H_2$. The feed contains a small 0.5% concentration of inert methane ($CH_4$). The unreacted gases are separated and recycled to the reactor to save money. 
**Question:** If the plant operator decides to completely shut the purge valve to achieve "100% maximum efficiency and zero waste," what exactly will happen to the plant over the next 24 hours, both physically and mathematically?
**Answer:** Mathematically, the accumulation term for methane ($dm_{CH4}/dt$) becomes positive because Input > 0 but Output = 0. Physically, the methane will build up infinitely in the recycle loop. As the methane concentration spikes, the partial pressure of the actual reactants (CO and $H_2$) drops, killing the reaction rate. Eventually, the total pressure in the pipes will exceed the metallurgical limits, causing the compressor to trip or a pipe to rupture.

### Drill 2: Degrees of Freedom Check
**Scenario:** You have a splitter that divides a single liquid stream of 50% Benzene and 50% Toluene into two identical product streams. You are not given any flow rates. 
**Question:** What is the NDF? Can you solve for the mass fraction of Benzene in the top product stream?
**Answer:** The NDF > 0 because you lack a total flow rate. However, a splitter *only* divides flow; it does not separate chemicals. Therefore, the physical constraint of a splitter is that the compositions of all outlet streams must perfectly match the inlet stream. You don't need to do any math: the mass fraction of Benzene in the top stream is exactly 0.50. 

### Drill 3: Overall vs. Single-Pass
**Scenario:** A reactor converts A to B. In a single pass through the reactor, 20% of A reacts. The product B is removed, and the remaining 80% of A is perfectly recycled back to the inlet.
**Question:** If this process runs infinitely with no purge (assuming A is 100% pure), what is the overall conversion of A?
**Answer:** The overall conversion is 100%. Even though the reactor is "inefficient" and only converts 20% per pass, the perfect recycle loop ensures that every single molecule of A is eventually forced through the reactor enough times until it reacts. 

### Drill 4: The Phase Change Plateau
**Scenario:** You are pumping heat into a pot of liquid water at exactly $100^\circ\text{C}$ at 1 atm. You calculate $\dot{Q}$, the rate of heat added. 
**Question:** Does this heat addition increase the temperature of the water? Where does the enthalpy go?
**Answer:** No, the temperature remains perfectly locked at $100^\circ\text{C}$ until every drop of water has boiled. The heat added is **latent heat**, which goes entirely into breaking the intermolecular hydrogen bonds holding the liquid water together, causing a phase change into vapor rather than an increase in sensible temperature.

## Concept Drills Overview

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "purge", "data": { "label": "Purge Paradox", "icon": "AlertTriangle", "description": "Accumulation." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "split", "data": { "label": "Splitter", "icon": "Shuffle", "description": "Same composition." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "conv", "data": { "label": "Overall Conv", "icon": "Repeat", "description": "100% with recycle." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "phase", "data": { "label": "Phase Change", "icon": "Thermometer", "description": "Constant T." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "purge", "target": "split", "animated": true },
    { "source": "split", "target": "conv", "animated": true },
    { "source": "conv", "target": "phase", "animated": true }
  ]
}
```
