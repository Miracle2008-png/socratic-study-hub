# Thermodynamic Property Relations

The fundamental thermodynamic properties ($P$, $T$, $v$, $u$, $h$, $s$, $g$, $f$) are not independent. Mathematical relationships linking them — derived from the First and Second Laws — allow any unknown property to be computed from measurable quantities.

## 1. The Four Gibbs Equations

Starting from the combined First and Second Law statement for a reversible process in a closed system:
$$du = T \, ds - P \, dv$$

This is the **First Gibbs Relation**. Combined with $h = u + Pv$:
$$dh = T \, ds + v \, dP$$

Defining the **Helmholtz function** $f = u - Ts$ and **Gibbs function** $g = h - Ts$:
$$df = -s \, dT - P \, dv$$
$$dg = -s \, dT + v \, dP$$

These four equations hold for any simple compressible substance undergoing any reversible process.

## 2. Maxwell Relations

Each Gibbs equation has the form $dZ = M \, dX + N \, dY$. For an exact differential, $\left(\frac{\partial M}{\partial Y}\right)_X = \left(\frac{\partial N}{\partial X}\right)_Y$.

Applying this to each of the four Gibbs equations yields the four **Maxwell Relations**:

$$\left(\frac{\partial T}{\partial v}\right)_s = -\left(\frac{\partial P}{\partial s}\right)_v$$
$$\left(\frac{\partial T}{\partial P}\right)_s = \left(\frac{\partial v}{\partial s}\right)_P$$
$$\left(\frac{\partial s}{\partial v}\right)_T = \left(\frac{\partial P}{\partial T}\right)_v$$
$$\left(\frac{\partial s}{\partial P}\right)_T = -\left(\frac{\partial v}{\partial T}\right)_P$$

**Why Maxwell Relations matter:** Entropy $s$ cannot be measured directly. But $\left(\frac{\partial v}{\partial T}\right)_P$ can be measured from PVT data (just measure volume at different temperatures at constant pressure). The third Maxwell relation allows computing the entropy change of any substance from purely measurable PVT data.

## 3. The Clapeyron Equation

A powerful direct application: along the saturation curve in the $P$-$T$ diagram, the **Clausius-Clapeyron equation** gives the slope of the saturation curve:

$$\frac{dP_{sat}}{dT_{sat}} = \frac{h_{fg}}{T_{sat} v_{fg}}$$

**Applications:**
*   Predicts how boiling point changes with altitude (lower pressure → lower $T_{sat}$: water boils at ~90°C at 3000m altitude).
*   Allows estimation of $h_{fg}$ (latent heat) from measurements of the saturation pressure curve.
*   In the vapor phase approximation (ideal gas vapor, $v_{fg} \approx v_g = RT/P$): $\frac{d(\ln P_{sat})}{d(1/T)} = -h_{fg}/R_u$ — the basis of the **Antoine equation** used widely in chemical engineering distillation design.
