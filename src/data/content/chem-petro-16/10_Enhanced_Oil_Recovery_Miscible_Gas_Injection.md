# Enhanced Oil Recovery: Miscible Gas Injection

The ultimate dream of Enhanced Oil Recovery (EOR) is to find a fluid that does not suffer from capillary forces at all. 

Water and oil are **Immiscible** (they do not mix, and they violently repel each other). This repulsion creates Interfacial Tension (IFT), which permanently traps 30% of the oil in the microscopic pores. 

What if you pumped a fluid into the ground that perfectly dissolved into the crude oil, exactly like cream dissolving into hot coffee? 
This is called **Miscible Displacement**. Because the two fluids merge into a single, uniform phase, there is zero Interfacial Tension, zero capillary trapping, and the Microscopic Displacement Efficiency ($E_D$) hits 100%.

## 1. The Physics of Miscibility

Achieving miscibility deep underground is difficult. You cannot just pump any gas and expect it to dissolve. 

Miscibility depends on the complex PVT Phase Behavior of the specific crude oil and the specific injected gas. 
*   **First-Contact Miscibility:** The two fluids mix perfectly and instantly upon contact in all proportions (like water and alcohol). This is rare and usually requires injecting pure Propane or Butane, which is astronomically expensive.
*   **Multiple-Contact Miscibility:** The magic of modern gas injection. When a cheap gas (like $CO_2$ or Methane) is injected into the oil, it doesn't mix instantly. But as the gas flows through the rock, it continuously touches new oil. It acts like a chemical sponge, vaporizing the light, high-value components out of the oil and absorbing them into the gas phase. After touching the oil a thousand times, the leading edge of the gas cloud becomes so rich in vaporized oil that it physically transforms, matching the chemistry of the oil and achieving perfect miscibility.

This process requires immense pressure. If the reservoir pressure drops below the **Minimum Miscibility Pressure (MMP)**, the physics break down, the gas refuses to dissolve, and the massive $CO_2$ flood fails completely.

## 2. Carbon Dioxide ($CO_2$) Flooding

$CO_2$ is the undisputed king of Miscible EOR, particularly in places like the Permian Basin of West Texas.

Why $CO_2$?
1.  **Low MMP:** $CO_2$ achieves multiple-contact miscibility with crude oil at relatively low pressures (e.g., 1,500 psi). 
2.  **Swelling:** When $CO_2$ dissolves into crude oil, it acts like a violent expanding agent. The oil physically swells up to 30% in volume, physically pushing itself out of the tight microscopic pore throats.
3.  **Viscosity Reduction:** $CO_2$ acts as a powerful solvent, radically thinning the oil and making it flow much faster.
4.  **Carbon Sequestration:** Today, oil companies are capturing massive amounts of toxic greenhouse gas $CO_2$ from industrial smokestacks, compressing it into a liquid, and injecting it permanently into deep oil reservoirs. They produce more oil while simultaneously fighting climate change.

## 3. Nitrogen ($N_2$) and Hydrocarbon Gas Injection

If $CO_2$ is not available, engineers have other gas options.

*   **Hydrocarbon Gas (Methane):** Often, offshore platforms produce massive amounts of natural gas alongside the oil. If they are too far from shore to build a pipeline, they simply run the gas through a massive compressor and inject it straight back down into the reservoir. It maintains the pressure and can achieve miscibility if the reservoir is incredibly deep and high-pressure (MMP > 4,000 psi).
*   **Nitrogen ($N_2$):** Air is 78% Nitrogen. You can build a cryogenic plant on the surface to separate the Nitrogen from the air and pump it into the ground. It is incredibly cheap and limitless. *The Catch:* Nitrogen is highly inert. It refuses to mix with oil unless the pressure is absolutely astronomical (MMP > 6,000 psi). It is usually used purely for pressure maintenance in incredibly deep wells.

## 4. The Threat of Viscous Fingering and WAG

The greatest flaw of Miscible Gas Injection is Areal Sweep Efficiency ($E_A$). 

Because gas is incredibly light and has an astronomically low viscosity (0.05 cP), the Mobility Ratio is a disaster. 
If you inject a massive wall of $CO_2$ gas, the gas will instantly form massive Viscous Fingers. The gas will blast through the rock, completely bypassing 80% of the oil, and erupt into the producing well. 

To prevent this, engineers use the **WAG Process (Water-Alternating-Gas)**.
1.  They inject a massive slug of $CO_2$ gas for 3 months to dissolve into the oil and release it from the pores.
2.  Then, they switch the surface valves and inject a massive slug of heavy Water for 3 months.
3.  The heavy, viscous water slug acts like a physical wall, pushing the highly mobile $CO_2$ gas forward, preventing it from fingering, and forcing it to sweep evenly across the entire reservoir.
4.  This cycle is repeated continuously for 20 years.

## 5. The WAG Cycle (Water-Alternating-Gas)

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "gas", "data": { "label": "1. Inject CO2 Gas", "icon": "Cloud", "description": "Achieves miscibility, swelling and thinning the oil." }, "style": { "background": "#451a03", "color": "#fef3c7" } },
    { "id": "finger", "data": { "label": "2. Fingering Threat", "icon": "AlertOctagon", "description": "Highly mobile gas threatens to bypass the oil." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "water", "data": { "label": "3. Inject Heavy Water", "icon": "Waves", "description": "Acts as a physical wall to push the gas forward evenly." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "repeat", "data": { "label": "4. Cycle Repeats", "icon": "RefreshCw", "description": "Continuous switching maximizes Sweep Efficiency." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "gas", "target": "finger", "animated": true },
    { "source": "finger", "target": "water", "animated": true, "style": { "stroke": "#ef4444" } },
    { "source": "water", "target": "repeat", "animated": true },
    { "source": "repeat", "target": "gas", "animated": true, "label": "Next Quarter" }
  ]
}
```
