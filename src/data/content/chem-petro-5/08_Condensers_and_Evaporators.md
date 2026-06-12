# Condensers and Evaporators

When a fluid undergoes a phase change — boiling (evaporation) or condensation — the heat transfer mechanisms change radically from single-phase convective flow. Phase change provides incredibly high heat transfer coefficients but introduces complex two-phase flow dynamics that require specialised equipment design.

## 1. Condensers

Condensation occurs when a vapour contacts a surface whose temperature is below the saturation temperature of the vapour at the given pressure.

There are two primary modes of condensation:
- **Filmwise Condensation:** The condensed liquid forms a continuous film that flows down the surface under gravity. This liquid film acts as a thermal resistance between the vapour and the cold wall. This is the normal mode in industrial condensers.
- **Dropwise Condensation:** The vapour condenses in discrete droplets that roll off the surface, leaving bare metal exposed. This yields heat transfer coefficients up to 10 times higher than filmwise condensation, but it is notoriously difficult to maintain in practice (requires specialised surface coatings that degrade over time). Engineers almost always design for filmwise condensation.

### Shell-and-Tube Condensers
When condensing vapour on the shell side of a horizontal tube bundle, the condensate drips from the top tubes onto the tubes below. The liquid film thickens on the lower tubes, increasing thermal resistance and reducing the local heat transfer coefficient.
Nusselt's theory for a vertical column of $N$ horizontal tubes predicts that the average heat transfer coefficient drops by a factor of $N^{-1/4}$.

**Subcooling:** Often, the condenser must not only condense the vapour but also cool the resulting liquid slightly below its boiling point (subcooling) to prevent flashing in downstream pumps. This requires submerging some of the lower tubes in a pool of liquid.

## 2. Evaporators and Boiling

Boiling is the generation of vapour at a solid-liquid interface. It is classified by the pool boiling curve (Nukiyama curve):

1. **Natural Convection Boiling:** Fluid is slightly superheated; no bubbles form.
2. **Nucleate Boiling:** Bubbles form at microscopic cavities (nucleation sites) on the heated surface, grow, and detach. The agitation of the bubbles creates massive turbulence, yielding exceptionally high heat transfer coefficients ($h \approx 10{,}000$ to $50{,}000 \, \text{W/m}^2\text{K}$). **Industrial evaporators are designed to operate in this regime.**
3. **Critical Heat Flux (CHF) / Boiling Crisis:** If the heat flux is pushed too high, bubbles form so rapidly they merge into a continuous vapour blanket over the heating surface.
4. **Film Boiling:** The surface is completely insulated by a layer of vapour. Heat transfer plummets, and the surface temperature spikes catastrophically (often causing metallurgical failure, known as "burnout").

### Industrial Evaporator Types
- **Kettle Reboilers:** Used at the bottom of distillation columns. Steam flows inside a U-tube bundle. The bundle is submerged in a large pool of the process liquid (shell side). The large shell space allows vapour to disengage from the boiling liquid.
- **Thermosyphon Reboilers:** Vertical shell-and-tube exchangers. The process fluid is in the tubes. Boiling generates a vapour-liquid mixture in the tubes. The lower density of the mixture creates a natural circulation loop (the "thermosyphon effect") driving fluid from the column base, through the reboiler, and back without a pump.
- **Falling Film Evaporators:** Liquid is distributed at the top of vertical tubes and falls down the inside walls as a thin, boiling film. Extremely efficient, very low residence time (perfect for heat-sensitive materials like fruit juices or milk).

## 3. Flow Regimes in Two-Phase Pipe Flow

When boiling or condensing inside a tube, the two phases arrange themselves in different hydrodynamic patterns depending on velocity and vapour fraction (quality).
- **Bubbly flow:** Small vapour bubbles suspended in continuous liquid.
- **Slug flow:** Large vapour bullets separated by liquid plugs. Causes severe mechanical vibration.
- **Annular flow:** A high-velocity vapour core flows down the centre of the tube, pushing a thin liquid film against the tube wall. This is the ideal regime for heat transfer inside tubes.
- **Mist flow:** High-velocity vapour carrying entrained liquid droplets. The wall dries out, and heat transfer drops precipitously.

Designing phase-change equipment requires mapping the fluid's trajectory through these flow regimes to ensure stable operation and avoid dry-out or slugging.

## 4. Phase Change Equipment

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "cond", "data": { "label": "Film Condensation", "icon": "Droplet", "description": "Continuous liquid film." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "boil", "data": { "label": "Nucleate Boiling", "icon": "Activity", "description": "High agitation." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "crisis", "data": { "label": "Boiling Crisis", "icon": "AlertOctagon", "description": "Avoid burnout." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } },
    { "id": "annular", "data": { "label": "Annular Flow", "icon": "Circle", "description": "Ideal tube flow." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "boil", "target": "crisis", "animated": true }
  ]
}
```
