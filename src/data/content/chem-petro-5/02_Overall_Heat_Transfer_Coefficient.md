# The Overall Heat Transfer Coefficient

The overall heat transfer coefficient ($U$) represents the total resistance to heat transfer from the bulk of the hot fluid, across the solid wall, to the bulk of the cold fluid. It is the reciprocal of the total thermal resistance.

## 1. Thermal Resistance Network

Consider a tubular heat exchanger where the hot fluid flows inside the tube and the cold fluid flows in the annulus outside the tube. Heat must pass through five distinct resistances in series:

1. **Inside convective resistance**: Heat moves from the bulk hot fluid to the inner tube wall.
2. **Inside fouling resistance**: A layer of scale, dirt, or biological growth on the inner wall.
3. **Wall conductive resistance**: Conduction through the metal tube wall.
4. **Outside fouling resistance**: A scale layer on the outer tube wall.
5. **Outside convective resistance**: Heat moves from the outer tube wall to the bulk cold fluid.

The total thermal resistance $R_{\text{total}}$ is the sum of these five components:

$$R_{\text{total}} = R_{conv,i} + R_{foul,i} + R_{wall} + R_{foul,o} + R_{conv,o}$$

## 2. Calculating the Overall Coefficient (U)

Because the inner area $A_i$ and outer area $A_o$ of a tube are different, $U$ must be based on a specific reference area. Usually, the outside area $A_o$ is chosen.

The overall heat transfer coefficient based on the outside area $U_o$ is:

$$\frac{1}{U_o A_o} = \frac{1}{h_i A_i} + \frac{R_{f,i}}{A_i} + \frac{\ln(r_o/r_i)}{2\pi k L} + \frac{R_{f,o}}{A_o} + \frac{1}{h_o A_o}$$

Where:
- $h_i, h_o$ = inside and outside convective heat transfer coefficients (W/m²·K)
- $R_{f,i}, R_{f,o}$ = inside and outside fouling factors (m²·K/W)
- $r_i, r_o$ = inner and outer radii of the tube (m)
- $k$ = thermal conductivity of the tube wall material (W/m·K)
- $L$ = length of the tube (m)

Multiplying through by $A_o = 2\pi r_o L$:

$$\frac{1}{U_o} = \frac{r_o}{r_i h_i} + \frac{r_o R_{f,i}}{r_i} + \frac{r_o \ln(r_o/r_i)}{k} + R_{f,o} + \frac{1}{h_o}$$

## 3. Thin-Walled Approximation

If the tube is thin-walled ($r_i \approx r_o$) and highly conductive (e.g. copper, carbon steel), the wall resistance is often negligible. If the tubes are clean (new design), the fouling resistances are zero. In this ideal case, the equation simplifies dramatically:

$$\frac{1}{U} \approx \frac{1}{h_i} + \frac{1}{h_o}$$

This reveals a critical engineering principle: **The overall heat transfer coefficient is dominated by the smallest convective coefficient.** 

If $h_i = 5000 \, \text{W/m}^2\text{K}$ (water) and $h_o = 50 \, \text{W/m}^2\text{K}$ (air), then $U \approx 49.5 \, \text{W/m}^2\text{K}$. The gas-side resistance completely bottlenecks the process. To fix this, engineers use **finned tubes** on the gas side to dramatically increase the surface area.

## 4. Fouling Factors

In industrial service, heat exchangers inevitably accumulate deposits (fouling). This drastically reduces performance over time. 
- A new, clean exchanger might have $U = 800 \, \text{W/m}^2\text{K}$.
- After one year of service with hard water, scale build-up might reduce it to $U_{\text{dirty}} = 500 \, \text{W/m}^2\text{K}$.

Exchangers must be **oversized** initially to ensure they can still meet the required duty when dirty at the end of their maintenance cycle. Typical fouling factors $R_f$:
- Demineralised water: $0.0001 \, \text{m}^2\text{K/W}$
- Crude oil: $0.0005$ to $0.001 \, \text{m}^2\text{K/W}$
- River water (high solids): $0.001$ to $0.002 \, \text{m}^2\text{K/W}$

## 5. Worked Example: Calculating U

**Problem:** A double-pipe heat exchanger consists of a copper tube ($k = 380 \, \text{W/m·K}$) with $r_i = 1.0 \, \text{cm}$ and $r_o = 1.2 \, \text{cm}$. Water flows inside with $h_i = 4000 \, \text{W/m}^2\text{K}$. Oil flows outside with $h_o = 800 \, \text{W/m}^2\text{K}$. The inside and outside fouling factors are $R_{f,i} = 0.0002$ and $R_{f,o} = 0.0004 \, \text{m}^2\text{K/W}$. Calculate the overall coefficient $U_o$.

**Solution:**

$$\frac{1}{U_o} = \frac{r_o}{r_i h_i} + \frac{r_o R_{f,i}}{r_i} + \frac{r_o \ln(r_o/r_i)}{k} + R_{f,o} + \frac{1}{h_o}$$

Calculate each thermal resistance term separately:
1. Inside convection: $\frac{0.012}{0.010 \times 4000} = 0.00030$
2. Inside fouling: $\frac{0.012 \times 0.0002}{0.010} = 0.00024$
3. Tube wall: $\frac{0.012 \times \ln(1.2/1.0)}{380} = \frac{0.012 \times 0.182}{380} = 0.0000057$ (negligible)
4. Outside fouling: $0.00040$
5. Outside convection: $\frac{1}{800} = 0.00125$

Summing the resistances:
$$\frac{1}{U_o} = 0.00030 + 0.00024 + 0.0000057 + 0.00040 + 0.00125 = 0.002196 \, \text{m}^2\text{K/W}$$

$$U_o = \frac{1}{0.002196} = 455 \, \text{W/m}^2\text{K}$$

Notice that the outside convection (the oil) is the largest single resistance, accounting for over half the total resistance to heat transfer.
