# Volumetric Properties of Pure Fluids

To design chemical equipment, engineers must know how the volume (or density) of a fluid changes as temperature and pressure change. The relationship between Pressure ($P$), Volume ($V$), and Temperature ($T$) is uniquely defined for every pure substance.

## 1. The P-V-T Surface

The thermodynamic state of a pure, single-component fluid is completely fixed by any two independent intensive properties (e.g., $P$ and $T$). This is known as the **State Postulate**.

If you plot $P$, $V$, and $T$ on a 3D graph, they form a surface. Moving along this surface reveals how the substance behaves across different phases (solid, liquid, gas).

## 2. Phase Diagrams and the Saturation Curve

Projecting the 3D surface onto a 2D $P-T$ diagram creates the classic phase diagram showing solid, liquid, and gas regions separated by boundary lines.

- **Vaporization Curve**: The line separating liquid and gas phases. Along this line, the liquid and vapor coexist in equilibrium. The pressure at a given point on this curve is the vapor pressure ($P^{\text{sat}}$) for that temperature.
- **Triple Point**: The single specific temperature and pressure where solid, liquid, and vapor coexist simultaneously.
- **Critical Point**: The terminus of the vaporization curve. Above the critical temperature ($T_c$) and critical pressure ($P_c$), there is no longer a distinct phase boundary between liquid and gas. The substance becomes a **supercritical fluid**, exhibiting properties of both phases.

## 3. The P-V Diagram and the Vapor Dome

Projecting the surface onto a $P-V$ diagram creates a distinctive "vapor dome."

- Inside the dome: A mixture of saturated liquid and saturated vapor exists. The horizontal lines across the dome are lines of constant temperature (isotherms) and constant pressure (isobars) during boiling/condensation.
- Left of the dome: Compressed (subcooled) liquid. High pressure, small volume, nearly incompressible.
- Right of the dome: Superheated vapor. Low pressure, large volume, highly compressible.

## 4. Quality ($x$)

When a fluid is inside the vapor dome (a liquid-vapor mixture), $P$ and $T$ are no longer independent; they are locked together. To define the state, a new property is needed: **Quality ($x$)**.

Quality is the mass fraction of vapor in the mixture:
$$ x = \frac{m_{\text{vapor}}}{m_{\text{total}}} = \frac{m_{\text{vapor}}}{m_{\text{liquid}} + m_{\text{vapor}}} $$

The specific volume ($v$) of the mixture is a weighted average of the saturated liquid volume ($v_f$) and saturated vapor volume ($v_g$):
$$ v = v_f + x(v_g - v_f) $$

This linear weighting principle applies identically to internal energy ($u$), enthalpy ($h$), and entropy ($s$).
