# Dimensional Analysis in Turbomachinery

Designing and testing massive turbomachines (like a 10-meter diameter dam turbine) is incredibly expensive. Engineers test small-scale models in the laboratory and scale the results up to the full-size prototype. 

To ensure the model behaves exactly like the prototype, we use Buckingham Pi theorem to derive dimensionless parameters. 

## 1. The Variables

The performance of an incompressible pump or turbine (Head $H$, Power $P$) depends on:
- Operating variables: Volume flow rate $Q$ [$m^3/s$], Rotational speed $N$ [rev/s].
- Fluid properties: Density $\rho$ [$kg/m^3$], Viscosity $\mu$.
- Geometry: Characteristic diameter $D$ [$m$].

Using dimensional analysis, we group these into standard dimensionless Pi terms. For geometrically similar machines (exact scaled models of each other), these Pi terms must be identical for dynamic similarity to hold.

## 2. The Three Dimensionless Coefficients

**1. Flow Coefficient ($C_Q$ or $\Pi_1$):**
Relates to the volume flow rate.
$$C_Q = \frac{Q}{N D^3}$$
*Physical meaning:* It is proportional to the ratio of fluid velocity ($V_m \propto Q/D^2$) to blade speed ($U \propto ND$). Keeping $C_Q$ constant ensures the velocity triangles have the same angles in the model and prototype.

**2. Head Coefficient ($C_H$ or $\Pi_2$):**
Relates to the pressure head.
$$C_H = \frac{gH}{N^2 D^2}$$
*Physical meaning:* It is the ratio of fluid potential energy ($gH$) to rotor kinetic energy ($U^2 \propto N^2D^2$).

**3. Power Coefficient ($C_P$ or $\Pi_3$):**
Relates to the brake horsepower.
$$C_P = \frac{P}{\rho N^3 D^5}$$
*Physical meaning:* It is the ratio of actual power to theoretical dynamic power.

## 3. Affinity Laws (Scaling Laws)

If a model ($m$) and a prototype ($p$) are geometrically similar, and we operate them at dynamically similar conditions (meaning $C_{Q,m} = C_{Q,p}$), their efficiencies will be approximately equal, and we can mathematically equate the dimensionless coefficients to scale the performance.

These are the **Turbomachinery Affinity Laws**:

**Scaling Flow Rate:**
$$\frac{Q_p}{Q_m} = \left(\frac{N_p}{N_m}\right) \left(\frac{D_p}{D_m}\right)^3$$

**Scaling Head:**
$$\frac{H_p}{H_m} = \left(\frac{N_p}{N_m}\right)^2 \left(\frac{D_p}{D_m}\right)^2$$

**Scaling Power:**
$$\frac{P_p}{P_m} = \left(\frac{\rho_p}{\rho_m}\right) \left(\frac{N_p}{N_m}\right)^3 \left(\frac{D_p}{D_m}\right)^5$$

## 4. Application: Single Pump Speed Change

The affinity laws are also incredibly useful for predicting how a *single* pump's performance will change if you attach it to a Variable Frequency Drive (VFD) and change its motor speed $N$.
In this case, the diameter doesn't change ($D_p / D_m = 1$). The laws simplify drastically:

1. Flow scales linearly with speed: $Q_2 = Q_1 (N_2 / N_1)$
2. Head scales with speed squared: $H_2 = H_1 (N_2 / N_1)^2$
3. Power scales with speed cubed: $P_2 = P_1 (N_2 / N_1)^3$

**Crucial Insight:** If you need to reduce pump flow by 50%, slowing the motor down by 50% will reduce the power consumption to $(0.5)^3 = 12.5\%$ of the original power. This cubic power savings is why modern HVAC systems use expensive VFDs rather than simply choking the flow with a valve.
