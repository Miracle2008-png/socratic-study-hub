# Takeoff and Landing Performance

Takeoff and landing represent the most demanding, most safety-critical phases of any flight. The aircraft operates at maximum weight, near stall speed, close to the ground, with limited margin for error. Performance regulations strictly dictate the required field lengths, decision speeds, and failure capabilities.

## 1. Takeoff Phase Breakdown

The total takeoff distance is divided into three segments:

**Ground roll (from brake release to liftoff):**
Net force along the runway: $F_{net} = T - D - \mu(W - L)$ where $\mu$ is the rolling friction coefficient.
Using Newton's second law: $ma = F_{net}$, integrating from $V = 0$ to $V_{LOF}$ (liftoff speed):
$$s_{ground} = \frac{m}{F_{net,avg}} \int_0^{V_{LOF}} V \, dV = \frac{m V_{LOF}^2}{2 F_{net,avg}}$$

**Transition (rotation to screen height):**
The aircraft rotates to achieve climb attitude, lifts off, and climbs to the "screen height" — 35 ft for dry runways (50 ft for wet).

**Airborne phase:** The short climb from liftoff altitude to screen height.

**Balanced Field Length (BFL):**
FAR Part 25 (commercial aircraft) requires the aircraft to be able to stop safely if an engine fails at the **decision speed** $V_1$, or to continue the takeoff and clear all obstacles. The field length at which "reject and stop" = "continue and clear obstacle" is the BFL — and is the certified takeoff field length requirement.

## 2. Critical Speeds in Takeoff

| Speed | Name | Definition |
|-------|------|-----------|
| $V_{MCG}$ | Minimum control speed (ground) | Minimum speed at which rudder can maintain directional control after engine failure on ground |
| $V_1$ | Decision speed | Above this: continue takeoff (cannot stop in remaining runway); Below: reject |
| $V_R$ | Rotation speed | Speed at which pilot begins rotating the nose up |
| $V_{LOF}$ | Liftoff speed | Speed at which main gear lifts off (typically $V_R + 5$ kt) |
| $V_2$ | Takeoff safety speed | Minimum speed at screen height with one engine inoperative; $V_2 \geq 1.2 V_{stall}$ |
| $V_{MCA}$ | Minimum control speed (air) | Minimum speed with engine-out at which rudder maintains 5° bank angle control |

## 3. Effect of Variables on Takeoff Distance

**Density altitude:** As density decreases (high altitude airports like Denver, or hot days), both engine thrust decreases AND the aircraft must fly faster (higher TAS) to reach $V_{LOF}$. Ground roll increases approximately proportionally to $1/\rho$.

**Weight:** Heavier weight increases required $V_{LOF}$ and reduces thrust-to-weight ratio. Ground roll $\propto W^2$ approximately.

**Wind:** Headwind reduces ground speed at liftoff — dramatically shortens ground roll. A 10-kt headwind into a 130-kt liftoff speed reduces ground speed at liftoff to 120 kt — a roughly 15% reduction in kinetic energy and corresponding reduction in ground roll.

**Flap setting:** More flap → higher $C_{L,max}$ → lower $V_{stall}$ → lower $V_{LOF}$ → shorter ground roll. However, more flap also means more drag during the airborne climb phase. Pilots select flap settings that optimize the complete BFL.

## 4. Landing Performance

Landing distance from screen height (50 ft) to full stop:

**Airborne phase:** Flare from approach speed ($V_{approach} \approx 1.3 V_{stall}$) to touchdown speed.

**Ground roll (braking distance):**
$$s_{land} = \frac{mV_{TD}^2}{2(D + \mu_{braking}(W-L)_{ground})}$$

where $\mu_{braking} \approx 0.4$ (dry), $0.2$ (wet), $0.05$ (icy).

**Speed brakes (spoilers):** Deployed immediately after touchdown to kill lift (increasing weight on wheels → better braking) and increase drag. Can reduce landing roll by 15–25%.

**Thrust reversers:** Reverse engine thrust to decelerate. Most effective at high speed — produce little force at low speed. Primary benefit is reducing brake wear, not dramatically shortening stopping distance.

**Autobrakes:** Automatically apply preset deceleration levels (Low, Med, High, MAX/RTO) to maintain constant deceleration for comfortable or emergency stopping. Prevents wheel lockup through anti-skid systems.
