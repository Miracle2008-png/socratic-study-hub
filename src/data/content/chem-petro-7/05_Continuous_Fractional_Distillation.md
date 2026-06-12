# Continuous Fractional Distillation (The Fractionator)

To achieve high-purity products (e.g., separating 99.9% pure propane from butane), a single flash stage is woefully inadequate. We must stack multiple equilibrium stages on top of each other. This is a **Continuous Fractional Distillation Column** (or Fractionator).

## 1. Anatomy of a Fractionator

An industrial distillation column is a tall, vertical steel cylinder containing physical internal structures (trays or packing) designed to force intimate contact between rising vapour and falling liquid.

The column is divided into two distinct sections by the feed entry point:
1.  **The Rectifying (Enriching) Section:** The section *above* the feed stage. Its job is to wash the rising vapour with a falling liquid reflux, scrubbing out the heavy components so the vapour exiting the very top is almost pure light component.
2.  **The Stripping Section:** The section *below* the feed stage. Its job is to strip the volatile light components out of the falling liquid using hot rising vapour, so the liquid exiting the very bottom is almost pure heavy component.

### External Equipment
A column cannot function without two massive heat exchangers:
*   **The Condenser (Top):** Takes the hot vapour leaving the top of the column and cools it until it condenses into a liquid. 
    *   A portion of this liquid is drawn off as the highly pure **Distillate product ($D$)**, with composition $x_D$.
    *   The remaining portion is pumped back into the top of the column as **Reflux ($L$)**. This falling liquid is the driving force of the rectifying section.
*   **The Reboiler (Bottom):** Takes the liquid arriving at the bottom of the column and heats it until it partially boils.
    *   A portion of the liquid is drawn off as the heavy **Bottoms product ($B$)**, with composition $x_B$.
    *   The vapour created is sent back up the column as **Boilup ($V$)**. This rising hot vapour is the driving force of the stripping section.

## 2. The Mechanics of the Countercurrent Flow

Inside the column, vapour ($V$) flows upwards, and liquid ($L$) flows downwards by gravity. They meet on the trays.

On any given tray $n$:
1.  Vapour rising from tray $n+1$ below enters tray $n$. It is hot and relatively rich in the heavy component.
2.  Liquid falling from tray $n-1$ above enters tray $n$. It is cooler and relatively rich in the light component.
3.  The hot vapour hits the cooler liquid. The heat causes the light component in the liquid to boil and join the vapour phase.
4.  Simultaneously, the heavy component in the vapour condenses and joins the liquid phase, releasing the latent heat required to boil the light component. (This is Equimolar Counterdiffusion).
5.  The new vapour, now richer in the light component, rises to tray $n-1$. The new liquid, now richer in the heavy component, falls to tray $n+1$.

This constant evaporation and condensation occurs on every single tray. With each stage upwards, the vapour becomes slightly richer in the light component. With each stage downwards, the liquid becomes slightly richer in the heavy component.

## 3. Assumptions for Simplified Design

To design these columns mathematically without a supercomputer, engineers historically used the McCabe-Thiele method, which relies on the **Constant Molal Overflow (CMO)** assumption.

CMO assumes:
1.  The molar heat of vaporisation is identical for both components (Trouton's Rule). Therefore, condensing 1 mole of heavy vapour evaporates exactly 1 mole of light liquid.
2.  Heat losses from the insulated column wall to the environment are zero.
3.  Sensible heat changes (temperature changes) from tray to tray are negligible compared to latent heat.

**Consequence of CMO:** The total molar flow rate of liquid ($L$) falling down the rectifying section is exactly constant from tray to tray. The total molar flow rate of vapour ($V$) rising up the rectifying section is exactly constant. 
The same applies to the stripping section (though the flow rates $\bar{L}$ and $\bar{V}$ in the stripping section will be different from $L$ and $V$ in the rectifying section because of the addition of the feed).

## 4. Fractionator Components

```diagram
{
  "direction": "TB",
  "nodes": [
    { "id": "cond", "data": { "label": "Condenser", "icon": "ThermometerSnowflake", "description": "Produces Distillate & Reflux." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "rect", "data": { "label": "Rectifying Section", "icon": "ArrowUp", "description": "Enriches light key." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "feed", "data": { "label": "Feed Stage", "icon": "ArrowRight", "description": "Mixture enters." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "strip", "data": { "label": "Stripping Section", "icon": "ArrowDown", "description": "Removes light key." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "reb", "data": { "label": "Reboiler", "icon": "ThermometerSun", "description": "Produces Bottoms & Boilup." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "cond", "target": "rect", "animated": true },
    { "source": "rect", "target": "feed", "animated": true },
    { "source": "feed", "target": "strip", "animated": true },
    { "source": "strip", "target": "reb", "animated": true }
  ]
}
```
