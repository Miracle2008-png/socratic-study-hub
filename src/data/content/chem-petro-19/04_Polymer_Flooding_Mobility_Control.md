# Polymer Flooding: Mobility Control

If the crude oil in the reservoir is heavy and viscous (thick like syrup), the fundamental failure of the waterflood is not capillary trapping. The failure is **Macroscopic Sweep**.

Because water is incredibly thin and flows easily, it will refuse to push a massive wall of thick oil. It will find a path of least resistance, stabbing through the oil in chaotic "Viscous Fingers," reaching the producing well and leaving 80% of the oil completely untouched.

To fix this, the production engineer must physically change the properties of the injected water to force it to behave like a solid, uniform wall. This is **Polymer Flooding**.

## 1. The Physics of the Mobility Ratio ($M$)

The entire goal of Polymer Flooding is to fix the **Mobility Ratio ($M$)**. 
Mobility ($\lambda$) is a fluid's Permeability ($k$) divided by its Viscosity ($\mu$). It describes how easily the fluid moves through the rock.

$$ M = \frac{\lambda_{water}}{\lambda_{oil}} = \frac{k_{rw} / \mu_w}{k_{ro} / \mu_o} $$

*   **Unfavorable ($M > 1$):** The water is more mobile than the oil. The water will sprint ahead, finger violently through the oil, and ruin the areal sweep efficiency. (A heavy oil reservoir might have $M = 50$).
*   **Favorable ($M < 1$):** The water is less mobile than the oil. The water is forced to build up a massive, uniform, high-pressure wall that acts like a squeegee, perfectly pushing the oil ahead of it with zero fingering.

**The Solution:** You cannot easily change the viscosity of the oil deep underground (unless you use steam). But you *can* change the viscosity of the water ($\mu_w$) before you pump it into the ground.

## 2. What is a Polymer?

To thicken the water, engineers add **Polymers**. 
A polymer is a massive, incredibly long, synthetic chain-like molecule made of millions of repeating chemical units. 

The two most common oilfield polymers are:
1.  **HPAM (Hydrolyzed Polyacrylamide):** A synthetic plastic. It is cheap and can build massive viscosity, but it is highly sensitive to the salt and calcium in the formation water. If the water is too salty, the HPAM molecule curls up into a tight ball and loses all its thickening power.
2.  **Xanthan Gum:** A natural biopolymer created by bacterial fermentation. It is much more expensive, but it is completely immune to high-salinity brine.

When you dump a tiny amount of dry polymer powder (e.g., 1,000 parts per million) into the injection water, the incredibly long, microscopic chains uncoil and tangle together like millions of microscopic nets. This radically increases the viscosity of the water from 1 cP up to 50 cP.

## 3. The Execution of a Polymer Flood

When the thick, syrupy "Polymer Water" is pumped into the injection well:
1.  Because it is thick, it moves slowly and forcefully. 
2.  It perfectly matches the mobility of the crude oil.
3.  The Viscous Fingering effect is completely neutralized. 
4.  The thick wall of water sweeps perfectly across the entire geographic area of the reservoir, contacting massive amounts of untouched oil and driving it to the producing wells.

## 4. The Vulnerabilities of Polymer

Polymer flooding is chemically simple, but operationally a nightmare. These massive molecules are incredibly fragile.

1.  **Shear Degradation:** If you pump the polymer water too fast through a high-pressure surface pump, or force it violently through a tiny surface choke valve, the intense mechanical shearing forces will physically snap the long molecular chains in half. If the chains break, the viscosity instantly drops back to 1 cP, and the \$10 million chemical project is completely ruined before it even enters the rock.
2.  **Thermal Degradation:** If the underground reservoir is hotter than $200^\circ\text{F}$, the heat will literally cook and disintegrate the HPAM polymer chains over a few months, destroying the viscosity. 
3.  **Biological Degradation:** If you use Xanthan Gum (which is organic bacteria food), microscopic bacteria living deep in the reservoir rock will literally eat the polymer chains for energy, destroying the flood. You must inject massive amounts of toxic biocides to kill the bacteria first.

Because of these extreme vulnerabilities, a polymer flood requires incredibly specialized, gentle pumping equipment and obsessive, 24/7 chemical monitoring.

## 5. Polymer Mobility Control Flow

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "water", "data": { "label": "Thin Water", "icon": "Waves", "description": "Water has very low viscosity (1 cP) and moves too fast." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "finger", "data": { "label": "Viscous Fingering", "icon": "Scissors", "description": "Water stabs through thick oil, bypassing massive reserves." }, "style": { "background": "#7f1d1d", "color": "#fee2e2" } },
    { "id": "polymer", "data": { "label": "Add Polymer Powder", "icon": "FlaskConical", "description": "HPAM or Xanthan Gum long-chain molecules injected." }, "style": { "background": "#3b0764", "color": "#f3e8ff" } },
    { "id": "thick", "data": { "label": "Syrupy Water", "icon": "Layers", "description": "Water viscosity rockets to 50 cP, matching the heavy oil." }, "style": { "background": "#b45309", "color": "#fef3c7" } },
    { "id": "sweep", "data": { "label": "Uniform Areal Sweep", "icon": "Maximize", "description": "Thick water builds a solid wall, sweeping 100% of the area." }, "style": { "background": "#14532d", "color": "#dcfce7" } }
  ],
  "edges": [
    { "source": "water", "target": "finger", "animated": true },
    { "source": "finger", "target": "polymer", "animated": true, "style": { "stroke": "#ef4444" }, "label": "Fix Mobility Ratio" },
    { "source": "polymer", "target": "thick", "animated": true },
    { "source": "thick", "target": "sweep", "animated": true, "style": { "stroke": "#10b981", "strokeWidth": 2 } }
  ]
}
```
