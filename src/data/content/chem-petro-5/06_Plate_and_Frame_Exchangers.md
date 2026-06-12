# Plate and Frame Heat Exchangers

While shell-and-tube exchangers dominate high-pressure and high-temperature applications, the **plate-and-frame heat exchanger (PHE)** has become the standard for liquid-liquid heat transfer at moderate pressures and temperatures. Its compact design and exceptional thermal efficiency make it indispensable in the food, beverage, pharmaceutical, and HVAC industries.

## 1. Construction and Operation

A plate-and-frame exchanger consists of a pack of thin rectangular metal plates (usually stainless steel, titanium, or Hastelloy). 
- Each plate is stamped with a corrugated pattern (often a "chevron" or "herringbone" design).
- The plates are suspended from an upper carrying bar and aligned by a lower guide bar.
- Elastomer gaskets are glued into grooves around the edge of each plate.
- The entire pack is compressed together between a fixed frame plate and a movable pressure plate using long tightening bolts.

**Flow arrangement:** The gaskets are arranged such that hot and cold fluids flow in alternating channels between the plates. The fluids are in pure counter-flow, passing each other separated only by a metal sheet $0.5$ to $1.0 \, \text{mm}$ thick.

## 2. Advantages over Shell-and-Tube

PHEs offer several dramatic advantages over their shell-and-tube counterparts:

1. **Massive Heat Transfer Coefficients:** The corrugations induce extreme turbulence even at very low Reynolds numbers ($Re \approx 10$ to $400$). Overall heat transfer coefficients ($U$) typically range from $3000$ to $7000 \, \text{W/m}^2\text{K}$ for water-water duties. This is 3–5 times higher than a shell-and-tube exchanger.
2. **Compactness:** Because $U$ is so high, the required area $A$ is much smaller. A PHE requires about $1/5^{\text{th}}$ to $1/10^{\text{th}}$ the floor space of a shell-and-tube exchanger for the same duty.
3. **Temperature Cross:** Because they are true counter-flow devices, they can achieve very close temperature approaches (down to $1\text{°C}$ difference between streams) and severe temperature crosses.
4. **Expandability:** If process requirements change, you simply unbolt the frame and add or remove plates. A shell-and-tube's area is fixed for life.
5. **Easy Cleaning:** The frame can be opened, exposing 100% of the heat transfer surface for visual inspection and manual scrubbing.

## 3. Disadvantages and Limitations

The fundamental limitation of the PHE is the elastomer gasket.
- **Temperature Limits:** Nitrile rubber gaskets fail above ~110°C; EPDM fails above ~150°C. Even exotic elastomers cannot survive the 400°C+ temperatures common in refineries.
- **Pressure Limits:** The plates are thin and supported only by contact points. Maximum design pressure is typically 25 to 30 bar.
- **Fluid Compatibility:** Not suitable for highly viscous fluids or fluids containing large solid particles (which will plug the narrow $2$–$5 \, \text{mm}$ channels).
- **Leakage:** They have thousands of linear metres of gasket. If a gasket fails, fluid leaks directly to the atmosphere (a safety hazard for toxic fluids) or, less commonly, between fluids.

## 4. Heat Transfer and Pressure Drop Correlations

Due to the complex chevron geometry, analytical solutions are impossible. Manufacturers use proprietary empirical correlations. A typical form for the Nusselt number is:

$$Nu = C \cdot Re^m Pr^n (\mu/\mu_w)^{0.14}$$

Where:
- $Re = \frac{G D_e}{\mu}$
- $D_e = 2b$ (equivalent diameter, where $b$ is the mean channel gap)
- $G = \frac{\dot{m}}{N_{\text{channels}} \cdot W \cdot b}$ (mass velocity, where $W$ is plate width)

The constants $C$ and $m$ depend heavily on the **chevron angle** ($\beta$):
- **High-$\beta$ plates (e.g., 60°)**: Produce high turbulence, high heat transfer, but very high pressure drop. Called "hard" plates.
- **Low-$\beta$ plates (e.g., 30°)**: Produce lower turbulence, lower heat transfer, but much lower pressure drop. Called "soft" plates.

Engineers can mix hard and soft plates in the same pack to precisely match the available pressure drop of the system.

## 5. Brazed and Welded Plate Exchangers

To overcome the temperature and pressure limitations of gaskets, engineers developed variations:
- **Brazed Plate Exchangers (BHE):** The plates are brazed together in a vacuum furnace using copper or nickel. No gaskets. Used extensively as evaporators and condensers in commercial refrigeration. They cannot be opened for cleaning.
- **Welded Plate Exchangers:** The plate edges are laser-welded together. Can handle up to 100 bar and 350°C. They combine the robustness of a shell-and-tube with the efficiency of a plate exchanger, though they are very difficult to clean mechanically.

## 6. PHE Features

```diagram
{
  "direction": "LR",
  "nodes": [
    { "id": "plates", "data": { "label": "Corrugated Plates", "icon": "Layers", "description": "High turbulence." }, "style": { "background": "#1e3a8a", "color": "#dbeafe" } },
    { "id": "u", "data": { "label": "Massive U Value", "icon": "TrendingUp", "description": "Highly efficient." }, "style": { "background": "#4c1d95", "color": "#ede9fe" } },
    { "id": "cross", "data": { "label": "Temp Cross", "icon": "Repeat", "description": "Close approaches." }, "style": { "background": "#14532d", "color": "#dcfce7" } },
    { "id": "limit", "data": { "label": "Gasket Limits", "icon": "AlertCircle", "description": "Moderate Temp/Press." }, "style": { "background": "#9f1239", "color": "#ffe4e6" } }
  ],
  "edges": [
    { "source": "plates", "target": "u", "animated": true },
    { "source": "u", "target": "cross", "animated": true },
    { "source": "cross", "target": "limit", "animated": true }
  ]
}
```
