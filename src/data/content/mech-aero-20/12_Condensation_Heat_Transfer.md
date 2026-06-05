---
title: "Condensation Heat Transfer"
---

# Condensation Heat Transfer

Condensation occurs when a vapor contacts a surface whose temperature $T_s$ is below the saturation temperature $T_{sat}$ of the vapor. As latent heat is released into the solid surface, the vapor undergoes a phase change to liquid. Like boiling, condensation provides exceptionally high heat transfer coefficients.

There are two distinct physical forms of condensation: Film and Dropwise.

## 1. Film Condensation

If the liquid wets the surface (which is typical for clean metals), the condensate forms a continuous liquid film covering the entire surface.
- The film flows downward under the influence of gravity, growing thicker as more vapor condenses onto it.
- **The Problem:** The latent heat of the vapor must conduct *through* this liquid film to reach the cold solid surface. Liquid water is a poor conductor of heat. Therefore, the liquid film acts as an insulating thermal resistance.
- As the film grows thicker further down a vertical plate, the thermal resistance increases, and the local heat transfer coefficient $h_x$ decreases.

Nusselt developed the analytical theory for laminar film condensation on a vertical plate in 1916. The average heat transfer coefficient is:
$$\bar{h} = 0.943 \left[ \frac{g \rho_l (\rho_l - \rho_v) h_{fg}^* k_l^3}{\mu_l L (T_{sat} - T_s)} \right]^{1/4}$$
*(where $h_{fg}^*$ is a modified latent heat accounting for subcooling of the liquid film).*

**Horizontal Tubes:**
In power plant condensers, vapor condenses on the outside of horizontal tubes carrying cold cooling water. The liquid film drips off the bottom of the tube quickly, preventing the film from growing very thick. Therefore, **horizontal tubes provide much higher condensation heat transfer than vertical tubes**.

If multiple horizontal tubes are stacked in tiers, condensate from the upper tubes drips onto the lower tubes, thickening their liquid films and degrading their heat transfer performance.

## 2. Dropwise Condensation

If the liquid does *not* wet the surface (e.g., due to a Teflon coating, waxes, or specific hydrophobic surface treatments), the condensate forms isolated droplets rather than a continuous film.

- As droplets grow, they eventually coalesce and slide down the surface under gravity, sweeping the surface clean and leaving bare metal behind.
- Vapor directly contacts the highly conductive bare metal surface between droplets, resulting in instantaneous, massive heat transfer.
- **Performance:** Heat transfer coefficients in dropwise condensation can be **10 times higher** than in film condensation ($h > 100,000 \, W/m^2K$).

**Engineering Reality:**
While dropwise condensation is highly desirable to reduce the size and cost of condensers, maintaining a durable non-wetting surface coating in industrial environments (like a steam power plant condenser running for 30 years) is incredibly difficult. Coatings degrade, oxidize, or foul. Consequently, almost all industrial condensers are conservatively designed assuming film condensation will occur.

## 3. The Effect of Non-Condensable Gases

The presence of a non-condensable gas (like air leaking into a vacuum steam condenser) is disastrous for condensation heat transfer.

As the steam condenses at the cold wall, the non-condensable air does not. It accumulates right at the liquid-vapor interface, forming a gaseous boundary layer. The incoming steam must now diffuse through this air blanket to reach the cold surface. 

Even 1% by mass of air mixed with steam can reduce the condensation heat transfer coefficient by 50%. This is why vacuum condensers are equipped with powerful air ejectors or vacuum pumps to continuously purge non-condensable gases from the system.
