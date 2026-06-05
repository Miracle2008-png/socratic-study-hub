# Transient Conduction: Lumped System Analysis

When a solid body is suddenly exposed to a new fluid environment (e.g., dropping a hot metal ball into a cold water bath), its temperature changes with time. This is **transient heat conduction**.

The simplest approach to transient problems assumes that the temperature of the solid is spatially uniform at any given instant, meaning $T$ is a function of time $t$ only, $T = T(t)$. This is called **Lumped System Analysis**.

## 1. The Energy Balance

Consider a body of volume $V$, surface area $A_s$, density $\rho$, and specific heat $c$, initially at $T_i$. At $t=0$, it is exposed to a fluid at $T_\infty$ with convection coefficient $h$.

The rate of heat convected away must equal the rate of decrease of the body's internal energy:
$$-h A_s (T - T_\infty) = \rho V c \frac{dT}{dt}$$

Define $\theta = T - T_\infty$. The equation becomes:
$$\frac{d\theta}{dt} = -\frac{h A_s}{\rho V c} \theta$$

Integrate from $t=0$ ($\theta_i = T_i - T_\infty$) to time $t$:
$$\int_{\theta_i}^{\theta} \frac{d\theta}{\theta} = -\frac{h A_s}{\rho V c} \int_0^t dt$$
$$\ln\left(\frac{\theta}{\theta_i}\right) = -\frac{h A_s}{\rho V c} t$$

**The Temperature-Time Equation:**
$$\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-bt}$$
where $b = \frac{h A_s}{\rho V c}$ [$s^{-1}$].

The temperature decays exponentially toward the fluid temperature. The constant $1/b$ is the **thermal time constant** $\tau_t$ of the system. A larger time constant means the body cools more slowly.

## 2. The Biot Number (Bi) - Criterion for Validity

When is the assumption of a uniform internal temperature valid?
It is valid if the thermal resistance *inside* the body to conduction is much smaller than the thermal resistance *at the surface* to convection. If heat can race around inside the metal instantly compared to how slowly it escapes to the air, the internal temperature stays uniform.

This ratio is captured by the dimensionless **Biot Number (Bi)**:

$$Bi = \frac{\text{Conduction Resistance within solid}}{\text{Convection Resistance at surface}} = \frac{L_c / kA}{1 / hA} = \frac{h L_c}{k}$$

where $L_c$ is the characteristic length, defined as Volume / Surface Area ($L_c = V/A_s$).
- For a sphere: $L_c = (4/3\pi r^3) / (4\pi r^2) = r/3$
- For a long cylinder: $L_c = r/2$
- For a plane wall of thickness $2L$: $L_c = L$

**The Lumped System Criterion:**
Lumped system analysis is generally considered highly accurate (error < 5%) if:
$$\boxed{Bi \le 0.1}$$

If $Bi > 0.1$, the surface cools much faster than the core, causing significant temperature gradients within the body. Lumped analysis fails, and spatial effects must be considered.

## 3. Total Heat Transfer

The total heat $Q$ [Joules] transferred between the body and the fluid from $t=0$ to time $t$ is the change in internal energy:
$$Q = m c [T(t) - T_i] = \rho V c [T(t) - T_i]$$
The maximum possible heat transfer occurs if $t \to \infty$ and $T \to T_\infty$:
$$Q_{max} = m c (T_\infty - T_i)$$
