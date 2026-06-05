---
title: "Radiation Intensity and Solid Angles"
---

# Radiation Intensity and Solid Angles

Total emissive power ($E = \sigma T^4$) describes the total heat leaving a surface in *all* directions. But radiation is highly directional. To analyze how much radiation from Surface 1 actually hits a specific Surface 2, we must define radiation on a directional basis using intensity and solid angles.

## 1. The Solid Angle ($\omega$)

In 2D, a planar angle (radians) is the arc length $S$ divided by the radius $r$: $\theta = S/r$. A full circle is $2\pi$ radians.
In 3D, a **solid angle** (steradians, sr) is the spherical surface area $A_n$ divided by the radius squared:
$$\omega = \frac{A_n}{r^2}$$
- A full sphere encompasses $4\pi r^2 / r^2 = 4\pi$ steradians.
- A hemisphere (the "sky" above a flat surface) encompasses $2\pi$ steradians.

The differential solid angle $d\omega$ in spherical coordinates (zenith angle $\theta$, azimuthal angle $\phi$) is:
$$d\omega = \sin\theta \, d\theta \, d\phi$$

## 2. Radiation Intensity ($I$)

**Radiation Intensity $I$** is the fundamental quantity of directional radiation. It is defined as the rate at which radiation energy is emitted per unit area of the emitting surface *normal to the direction of emission*, per unit solid angle.
$$I = \frac{dq}{dA_n \cdot d\omega} = \frac{dq}{dA \cos\theta \cdot d\omega}$$
Units: $W/(m^2 \cdot sr)$.

The $\cos\theta$ term is crucial. It represents the *projected area*. If you look at a glowing flat plate straight on ($\theta = 0^\circ$), it looks big. If you look at it from a grazing angle ($\theta = 85^\circ$), it looks like a thin sliver. The projected area $dA \cos\theta$ accounts for this geometric reality.

## 3. Diffuse Emitters and Lambert's Cosine Law

A **diffuse emitter** is a surface whose emitted intensity $I$ is constant in all directions ($I \neq f(\theta, \phi)$).
Blackbodies are perfectly diffuse emitters. Many rough engineering surfaces (like oxidized metals, concrete) are excellent approximations of diffuse emitters.

For a diffuse emitter, the actual heat flux leaving the surface at an angle $\theta$ is proportional to $I \cos\theta$. This is **Lambert's Cosine Law**. The radiation is brightest straight up (normal) and fades to zero at grazing angles, simply because the projected area goes to zero.

## 4. Relating Intensity to Total Emissive Power

To find the total emissive power $E$ [$W/m^2$] leaving a diffuse surface, we integrate the intensity $I$ over the entire upper hemisphere ($2\pi$ steradians):

$$E = \int_{hemisphere} I \cos\theta \, d\omega$$
$$E = \int_0^{2\pi} \int_0^{\pi/2} I \cos\theta \sin\theta \, d\theta \, d\phi$$

Since $I$ is constant for a diffuse surface, it pulls out of the integral. Evaluating the double integral yields a simple, elegant result:
$$E = \pi I$$

*(Note: The factor is $\pi$, not $2\pi$, because the $\cos\theta$ projection factor attenuates the radiation at shallow angles).*
For a blackbody, $E_b = \sigma T^4$, so its intensity is simply $I_b = \frac{\sigma T^4}{\pi}$.
