# Thermodynamic Properties and Relations

## Steam Tables

For pure substances, state is defined by two independent intensive properties.

**Phases**: compressed liquid, saturated mixture (quality $x = m_{vap}/m_{total}$, $0 \leq x \leq 1$), superheated vapour.

In two-phase region at saturation temperature $T_{sat}$:
$$v = v_f + x\,v_{fg},\quad h = h_f + x\,h_{fg},\quad s = s_f + x\,s_{fg}$$

## Equations of State

**Ideal gas**: $Pv = RT$, where $R = R_u/M$ (specific gas constant).

**Van der Waals**:
$$\left(P + \frac{a}{v^2}\right)(v - b) = RT$$

Accounts for intermolecular attraction ($a$) and finite molecular volume ($b$).

**Compressibility factor**: $Z = Pv/(RT)$. $Z = 1$ for ideal gas; deviations at high P or low T.

## Maxwell Relations

From the four fundamental relations ($dU, dH, dA, dG$):

$$\left(\frac{\partial T}{\partial v}\right)_s = -\left(\frac{\partial P}{\partial s}\right)_v$$
$$\left(\frac{\partial T}{\partial P}\right)_s = \left(\frac{\partial v}{\partial s}\right)_P$$
$$\left(\frac{\partial P}{\partial T}\right)_v = \left(\frac{\partial s}{\partial v}\right)_T$$
$$\left(\frac{\partial v}{\partial T}\right)_P = -\left(\frac{\partial s}{\partial P}\right)_T$$

## Gibbs Free Energy

$$G = H - TS,\quad dG = -S\,dT + V\,dP$$

At constant T, P: $\Delta G < 0$ (spontaneous), $\Delta G = 0$ (equilibrium), $\Delta G > 0$ (non-spontaneous).

Used for phase equilibrium and chemical reaction spontaneity.

## Clapeyron Equation

Slope of phase boundary on P-T diagram:
$$\frac{dP_{sat}}{dT} = \frac{h_{fg}}{T\,v_{fg}}$$

Clausius-Clapeyron approximation (vapour as ideal gas):
$$\ln\frac{P_2}{P_1} = \frac{h_{fg}}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$